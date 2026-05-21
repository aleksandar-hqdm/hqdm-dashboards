"""For each recovery client:
1. Reclassify deliverables: execution-only vs narrative.
2. Rewrite data.json.deliverables to keep only execution docs.
3. Rewrite each index.html inline renderer to point links at ../../assets/view.html (viewer page).

Definitions:
  EXECUTION = URL-lists, action sheets, per-page briefs, schema plans, GBP plans, link maps,
              push briefs (per-lever execution), disavow lists, citation submission lists,
              reporting templates, tasks CSV, page-rewrite briefs.
  NARRATIVE = strategic diagnoses, condensed strategies, custom-strategy long-form, owner
              conversation items, rationale docs, methodology docs, onepagers, audits-as-narrative.

Classifier uses filename patterns; deny-list wins over allow-list.
"""
import json, re, os

CLIENTS = [
    ('elev8-recovery',     'elev8recovery'),
    ('urban-recovery',     'urbanrecovery'),
    ('niagara-recovery',   'niagararecovery'),
    ('surfpoint-recovery', 'surfpointrecovery'),
    ('arms-acres',         'armsacres'),
    ('conifer-park',       'coniferpark'),
]

# Names that match these = NARRATIVE → remove from deliverables list
NARRATIVE_PATTERNS = [
    r'Strategic_Diagnosis',
    r'_Custom_Strategy(\.|$)',
    r'_Strategy_Condensed',
    r'Strategy_Condensed_v3',
    r'3month_plan',
    r'3Month_Plan_2026',
    r'Owner_Conversation_Items',
    r'Ownership_Conversation',
    r'Strategic_Approach',
    r'Onepager',
    r'_Rationale\.',
    r'Site_Architecture_Audit_Methodology',
    r'Site_Architecture_Rationale',
    r'Site_Structure_Link_Management_Explainer',
    r'Landing_Pages_Rationale',
    r'Crawl_Budget_Rationale',
    r'Citations_Links_Rationale',
    r'GBP_Rationale',
    r'GBP_Audit_2026',  # GBP narrative audits (Surfpoint)
    r'^arms_acres_competitor_brief',
    r'^arms_acres_m1_priorities',
    r'^strategy_item_',
    r'Backlinks_Citations_Strategy',  # narrative strategy doc
    r'_Q2_2026_Tasks\.csv$',  # superseded by _FINAL
    r'_3Month_Tasks\.csv$',  # superseded by _FINAL (where _FINAL exists)
    r'_3Month_Tasks_v2(\.|_)',  # superseded
    r'_3Month_Tasks_v2_NEW',  # superseded
]

# Names that match these = EXECUTION → keep (allow-list, applied AFTER narrative-deny check)
EXECUTION_PATTERNS = [
    r'_Pages_Action_List',
    r'_Internal_Linking_Map',
    r'_GBP_Action_List',
    r'_Driving_Direction_Pins',
    r'_Schema_Plan',
    r'_Tasks_FINAL',
    r'Push[1-9]',
    r'_Reporting_Master_Template',
    r'_GBP_Posts_3Month',
    r'_OffPage_Citations_3Month',
    r'_Citations_3Month',  # Conifer Park uses bare _Citations_3Month
    r'_Blog_Refresh',
    r'_Suburb_Pages',
    r'_Suburb_Decisions',
    r'_Location_Pages_Plan',
    r'_Meta_Refresh',
    r'_Disavow_Plan',
    r'_GBP_Hygiene_Plan',
    r'_GBP_Service_Area_Swap',
    r'_Cannibal_Cleanup_Plan',
    r'_Cannibal_Pages_Plan',
    r'_Page_Refresh_Pages',
    r'_Service_Pages_Plan',
    r'_Service_Pages_UnGeoLock',
    r'_Outpatient_Pages_Plan',
    r'_OffPage_Stack',
    r'_OffPage_PR_Plan',
    r'_Reviews_Plan',
    r'_Trust_Signals_Tracker',
    r'_GBP_Attributes',
    r'_GBP_Services',
    r'_Pending_GBP_Access',
    r'NOINDEX_',
    r'_Deindexed_URLs',
    r'_Disavow_Decisions',
    r'_Disavow\.txt',
    r'_All_Link_Citation_Opps',
    r'_Location_Pages_LocalRelevance',
    r'_Location_Pages_Uniqueness',
    r'_All99_Location_Pages_Decisions',
    r'_Competitor_Delta',
    r'_Pages_To_Create',
    r'_Pages_Plan_Month',
    r'_Service_Matrix',
    r'_Reporting_Plan',
    r'_AI_Articles',  # left in some agent outputs as named tabs - drop if SEO-NEO
    # Per-URL briefs (execution)
    r'Update_Brief',
    r'_Rewrite\.docx',
    r'Description_Rewrite',
    r'QA_Audit\.(docx|md)',
    r'Build_Plan',
    r'CRO_Brief',
    r'Rebuild_Plan\.(md|docx)',
    r'Cleanup_Brief',
    r'Index_Hygiene_Brief',
    r'Services_Legacy_Redirect_Plan',
    r'SP-04_',
    r'SP-05_',
    r'SP-06_',
    r'LG-INPC-',
    r'LG-GV-',
    r'LG-TR-',
    r'_SubPage_.*_Detox_Brief',
    r'_Treatments_SubPages_BuildPlan',
    r'_Treatments_Hub_Update_Brief',
    r'_Homepage_Update_Brief',
    r'_About_Us_Update_Brief',
    r'_Task1_M1_Location_Cleanup_Brief',
    r'_Task4_Index_Hygiene_Brief',
    r'_Task1_Rebuild_Plan',
    r'_Aleksa_Brief',
]


def classify(path):
    for pat in NARRATIVE_PATTERNS:
        if re.search(pat, path):
            return 'narrative'
    for pat in EXECUTION_PATTERNS:
        if re.search(pat, path):
            return 'execution'
    return 'unclassified'


# === Updated inline-renderer JS that points at the viewer ===
NEW_RENDERER = """// Deliverables table — one-click open in viewer (HTML inline; no downloads)
      if (DATA.deliverables) {
        const tbody = document.querySelector('#deliverables-table tbody');
        if (tbody) tbody.innerHTML = DATA.deliverables.map(d => {
          const href = `../../assets/view.html?client=__SLUG__&file=${encodeURIComponent(d.path)}`;
          return `
          <tr class=\"hover:bg-slate-50 cursor-pointer\" onclick=\"if(!event.target.closest('a')){window.open('${href}', '_blank')}\">
            <td class=\"py-3 px-4\"><a href=\"${href}\" target=\"_blank\" rel=\"noopener\" class=\"text-brand-500 hover:text-brand-700 hover:underline font-medium\">${escapeHtml(d.label)}</a></td>
            <td class=\"py-3 px-4\"><span class=\"inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase ${typeBadgeClass(d.type)}\">${escapeHtml(d.type)}</span></td>
            <td class=\"py-3 px-4 font-mono text-[11px] text-ink-500\">${escapeHtml(d.path)}</td>
            <td class=\"py-3 px-4 text-right\"><a href=\"${href}\" target=\"_blank\" rel=\"noopener\" class=\"inline-flex items-center gap-1 text-xs text-brand-500 hover:text-brand-700 font-semibold whitespace-nowrap\">Open <svg class=\\\"w-3 h-3\\\" viewBox=\\\"0 0 20 20\\\" fill=\\\"currentColor\\\"><path d=\\\"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z\\\"/><path d=\\\"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z\\\"/></svg></a></td>
          </tr>`;
        }).join('');
      }"""

# Match the existing renderer
RENDERER_PATTERN = re.compile(
    r"// Deliverables table.*?if \(DATA\.deliverables\) \{.*?return `.*?</tr>`;\s*\}\)\.join\(''\);\s*\}",
    re.DOTALL
)

OLD_HEADER_DESC = re.compile(r'<p class="text-sm text-ink-500 mt-1">Strategy docs, push briefs, action CSVs[^<]*</p>')
NEW_HEADER_DESC = '<p class="text-sm text-ink-500 mt-1">Execution-only list — URL action sheets, linking maps, GBP plans, push briefs, schema plans, the final task CSV. <strong>Click any row to view inline (no downloads).</strong></p>'

summary = []
for slug, hqdm_id in CLIENTS:
    dj_path = f'C:/tmp/hqdm-dashboards/clients/{slug}/data/data.json'
    ix_path = f'C:/tmp/hqdm-dashboards/clients/{slug}/index.html'
    with open(dj_path, 'r', encoding='utf-8') as f:
        d = json.load(f)
    deliverables = d.get('deliverables', [])
    keep, drop, unclassified = [], [], []
    for x in deliverables:
        c = classify(x['path'])
        if c == 'execution':
            keep.append(x)
        elif c == 'narrative':
            drop.append(x['path'])
        else:
            unclassified.append(x['path'])
    # Default for unclassified: drop (lean to keeping fewer)
    d['deliverables'] = keep
    with open(dj_path, 'w', encoding='utf-8') as f:
        json.dump(d, f, indent=2, ensure_ascii=False)

    # Update index.html renderer + header description
    with open(ix_path, 'r', encoding='utf-8') as f:
        html = f.read()
    m = RENDERER_PATTERN.search(html)
    if m:
        html = html[:m.start()] + NEW_RENDERER.replace('__SLUG__', slug) + html[m.end():]
    html = OLD_HEADER_DESC.sub(NEW_HEADER_DESC, html)
    with open(ix_path, 'w', encoding='utf-8') as f:
        f.write(html)

    summary.append({
        'slug': slug,
        'kept': len(keep),
        'dropped': drop,
        'unclassified_dropped': unclassified,
    })
    print(f'\n{slug}: kept {len(keep)}, dropped {len(drop)}, unclassified {len(unclassified)}')
    print(f'  drops: {drop[:6]}{"..." if len(drop) > 6 else ""}')
    if unclassified:
        print(f'  UNCLASSIFIED (also dropped): {unclassified}')

print('\n=== Summary ===')
for s in summary:
    print(f"  {s['slug']:20s}  kept={s['kept']}  dropped={len(s['dropped'])}  unclassified={len(s['unclassified_dropped'])}")
