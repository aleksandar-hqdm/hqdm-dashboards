"""Post-process a recovery-client dashboard:
1. Make the deliverables table 4-column clickable (matching elev8 pattern)
2. Copy deliverable files from HQDM workspace into clients/<slug>/deliverables/
3. Print a summary.

Usage: python _post_process_client.py <dashboard_slug> <hqdm_client_id>
Example: python _post_process_client.py urban-recovery urbanrecovery
"""
import sys, os, json, shutil, re

DASHBOARD_REPO = r"C:\tmp\hqdm-dashboards"
HQDM_WORKSPACE = r"C:\Users\User\Desktop\HQDM\clients"

OLD_TABLE_HEADER = '''<th class="text-left font-semibold py-3 px-4">Deliverable</th>
              <th class="text-left font-semibold py-3 px-4">Type</th>
              <th class="text-left font-semibold py-3 px-4">Path</th>
            </tr>'''

NEW_TABLE_HEADER = '''<th class="text-left font-semibold py-3 px-4">Deliverable</th>
              <th class="text-left font-semibold py-3 px-4">Type</th>
              <th class="text-left font-semibold py-3 px-4">File</th>
              <th class="text-right font-semibold py-3 px-4">Open</th>
            </tr>'''

# Old-style deliverables renderer the agents may write
OLD_RENDERER_PATTERN = re.compile(
    r"// Deliverables table.*?if \(DATA\.deliverables\) \{.*?const tbody = document\.querySelector\('#deliverables-table tbody'\);"
    r".*?if \(tbody\) tbody\.innerHTML = DATA\.deliverables\.map\(d => `"
    r".*?</tr>"
    r"\s*`\)\.join\(''\);"
    r"\s*\}",
    re.DOTALL
)

NEW_RENDERER = """// Deliverables table — one-click open in new tab
      if (DATA.deliverables) {
        const tbody = document.querySelector('#deliverables-table tbody');
        if (tbody) tbody.innerHTML = DATA.deliverables.map(d => {
          const href = `./deliverables/${encodeURIComponent(d.path)}`;
          return `
          <tr class="hover:bg-slate-50 cursor-pointer" onclick="if(!event.target.closest('a')){window.open('${href}', '_blank')}">
            <td class="py-3 px-4"><a href="${href}" target="_blank" rel="noopener" class="text-brand-500 hover:text-brand-700 hover:underline font-medium">${escapeHtml(d.label)}</a></td>
            <td class="py-3 px-4"><span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase ${typeBadgeClass(d.type)}">${escapeHtml(d.type)}</span></td>
            <td class="py-3 px-4 font-mono text-[11px] text-ink-500">${escapeHtml(d.path)}</td>
            <td class="py-3 px-4 text-right"><a href="${href}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-xs text-brand-500 hover:text-brand-700 font-semibold whitespace-nowrap">Open <svg class=\"w-3 h-3\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z\"/><path d=\"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z\"/></svg></a></td>
          </tr>`;
        }).join('');
      }"""


def fix_index_html(slug):
    p = os.path.join(DASHBOARD_REPO, "clients", slug, "index.html")
    if not os.path.exists(p):
        print(f"[skip] no index.html at {p}")
        return False
    with open(p, "r", encoding="utf-8") as f:
        html = f.read()

    changed = False

    # Replace 3-col table header with 4-col header
    if OLD_TABLE_HEADER in html:
        html = html.replace(OLD_TABLE_HEADER, NEW_TABLE_HEADER, 1)
        changed = True
        print(f"  - updated table header to 4 cols")

    # Replace old-style renderer with new clickable renderer
    m = OLD_RENDERER_PATTERN.search(html)
    if m:
        html = html[:m.start()] + NEW_RENDERER + html[m.end():]
        changed = True
        print(f"  - replaced deliverables renderer with clickable version")

    if changed:
        with open(p, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  - wrote {p}")
        return True
    else:
        print(f"  - no changes needed (already updated, or pattern not matched)")
        return False


def copy_deliverables(slug, hqdm_client_id):
    data_path = os.path.join(DASHBOARD_REPO, "clients", slug, "data", "data.json")
    if not os.path.exists(data_path):
        print(f"[skip] no data.json at {data_path}")
        return
    with open(data_path, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"[ERROR] data.json invalid JSON: {e}")
            return
    deliverables = data.get("deliverables", [])
    if not deliverables:
        print(f"[skip] no deliverables in data.json")
        return

    src_dir = os.path.join(HQDM_WORKSPACE, hqdm_client_id, "deliverable")
    dst_dir = os.path.join(DASHBOARD_REPO, "clients", slug, "deliverables")
    os.makedirs(dst_dir, exist_ok=True)

    ok, miss = [], []
    for d in deliverables:
        path = d.get("path", "")
        s = os.path.join(src_dir, path)
        x = os.path.join(dst_dir, path)
        # also look in subfolders like briefs/
        if not os.path.exists(s):
            for root, _, files in os.walk(src_dir):
                if path in files:
                    s = os.path.join(root, path)
                    break
        if os.path.exists(s):
            os.makedirs(os.path.dirname(x), exist_ok=True)
            shutil.copy2(s, x)
            ok.append((path, os.path.getsize(s)))
        else:
            miss.append(path)

    print(f"  - copied {len(ok)} files, missing {len(miss)}")
    for path, sz in ok:
        print(f"    OK   {path}  ({sz} bytes)")
    for path in miss:
        print(f"    MISS {path}")


def main(slug, hqdm_client_id):
    print(f"=== {slug}  ({hqdm_client_id}) ===")
    print("step 1: fix index.html")
    fix_index_html(slug)
    print("step 2: copy deliverables")
    copy_deliverables(slug, hqdm_client_id)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
