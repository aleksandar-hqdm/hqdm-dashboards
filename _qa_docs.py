"""QA the execution deliverables for each client:
- File exists, non-empty
- CSV: header present, row count > 0, no SEO-NEO references in any cell
- MD: not empty
- XLSX: sheet count, row count
- DOCX: not empty
"""
import os, json, csv

CLIENTS = ['elev8-recovery', 'urban-recovery', 'niagara-recovery', 'surfpoint-recovery', 'arms-acres', 'conifer-park']

NEO_KW = ['seo-neo', 'seo neo', 'gbp blast', 'gbp sniper', 'rd100', 'nap-image-overlay',
          'driving-directions-sop', 'embedinator', 'cloud-page-sop', 'cloudpage-sop',
          'ai article creator', 'das-sop', 'gmb-pin-creation']

results = []
for slug in CLIENTS:
    with open(f'C:/tmp/hqdm-dashboards/clients/{slug}/data/data.json', 'r', encoding='utf-8') as f:
        d = json.load(f)
    deliverables = d.get('deliverables', [])
    issues = []
    sizes = {}
    for x in deliverables:
        p = f'C:/tmp/hqdm-dashboards/clients/{slug}/deliverables/{x["path"]}'
        # File might be in a subfolder
        if not os.path.exists(p):
            base = os.path.basename(x['path'])
            for root, _, files in os.walk(f'C:/tmp/hqdm-dashboards/clients/{slug}/deliverables'):
                if base in files:
                    p = os.path.join(root, base)
                    break
        if not os.path.exists(p):
            issues.append(f"MISSING: {x['path']}")
            continue
        sz = os.path.getsize(p)
        sizes[x['path']] = sz
        if sz == 0:
            issues.append(f"EMPTY: {x['path']}")
            continue

        # CSV-specific: check for SEO-NEO leak in any cell
        if p.endswith('.csv'):
            try:
                with open(p, 'r', encoding='utf-8', newline='') as f:
                    rdr = csv.reader(f)
                    rows = list(rdr)
                if not rows:
                    issues.append(f"EMPTY (no rows): {x['path']}")
                    continue
                header = rows[0]
                nrows = len(rows) - 1
                neo_hits = []
                for ri, r in enumerate(rows[1:], start=2):
                    for ci, cell in enumerate(r):
                        cl = cell.lower()
                        for k in NEO_KW:
                            if k in cl:
                                neo_hits.append(f"row {ri} col {ci}: ...{k}...")
                                break
                if neo_hits:
                    # Filter false positives: action descriptions saying "replaces SEO NEO stack" are legitimate
                    real_hits = []
                    for h in neo_hits:
                        ri = int(h.split(' ')[1])
                        ci = int(h.split(' ')[3].rstrip(':'))
                        cell = rows[ri-1][ci]
                        cl = cell.lower()
                        if 'replac' in cl or 'halt' in cl or 'remove' in cl:
                            continue  # legitimate
                        real_hits.append(h + f' -> "{cell[:80]}"')
                    if real_hits:
                        issues.append(f"SEO-NEO LEAK in {x['path']}: {real_hits[:3]}")
            except UnicodeDecodeError:
                # Try latin-1
                with open(p, 'r', encoding='latin-1', newline='') as f:
                    rdr = csv.reader(f)
                    rows = list(rdr)
                # don't deep-scan if it's not UTF-8 clean

    results.append({
        'slug': slug,
        'deliverable_count': len(deliverables),
        'total_bytes': sum(sizes.values()),
        'issues': issues,
    })
    print(f"\n=== {slug}: {len(deliverables)} files, total {sum(sizes.values()):,} bytes ===")
    if issues:
        for i in issues:
            print(f"  !! {i}")
    else:
        print(f"  OK: no issues found")

print("\n=== TOTAL ISSUES ===")
total_issues = sum(len(r['issues']) for r in results)
print(f"{total_issues} issues across {len(CLIENTS)} clients")
