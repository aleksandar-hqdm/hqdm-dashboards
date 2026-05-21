"""Audit all 6 recovery client dashboards: data.json validity, SEO NEO leak check, file presence."""
import json, csv, os

NEO_KW = ['NEO-', ' NEO ', 'DAS-', 'GBP Blast', 'GBP Sniper', 'RD100', 'NAP overlay', 'NAP-overlay',
          'NAP Image', 'AI Article', 'Embedinator', 'Cloud Page', 'CloudPage',
          'Driving Directions program', 'Driving Authority Stack']
NEO_KW_LOWER = [k.lower() for k in NEO_KW]

clients = [
    ('elev8-recovery',   'elev8recovery',     'Elev8_Q2_2026_Tasks_FINAL.csv'),
    ('urban-recovery',   'urbanrecovery',     'Urban_Recovery_Q2_2026_Tasks_FINAL.csv'),
    ('niagara-recovery', 'niagararecovery',   'Niagara_Recovery_Q2_2026_Tasks_FINAL.csv'),
    ('surfpoint-recovery', 'surfpointrecovery', 'Surfpoint_3Month_Tasks_FINAL.csv'),
    ('arms-acres',       'armsacres',         'Arms_Acres_3Month_Tasks_FINAL.csv'),
    ('conifer-park',     'coniferpark',       'Conifer_Park_3Month_Tasks_FINAL.csv'),
]

for slug, hqdm_id, csv_name in clients:
    print(f"\n=== {slug} ===")
    p = f'C:/tmp/hqdm-dashboards/clients/{slug}/data/data.json'
    with open(p, 'r', encoding='utf-8') as f:
        d = json.load(f)
    levers = d.get('levers', [])
    actions = sum(len(l.get('actions', [])) for l in levers)
    kpis = len(d.get('kpis', []))
    deliv = len(d.get('deliverables', []))
    # check levers
    leak_l = 0
    for lever in levers:
        for a in lever.get('actions', []):
            txt = (a.get('name', '') + ' ' + a.get('code', '')).lower()
            if any(k in txt for k in NEO_KW_LOWER):
                leak_l += 1
                print(f"  !! LEVER-NEO {lever['id']}.{a['code']}: {a['name']}")
    # check CSV (actual files: ignore false-positive of legit task descriptions mentioning "SEO NEO" in their text)
    tp = f'C:/Users/User/Desktop/HQDM/clients/{hqdm_id}/deliverable/{csv_name}'
    with open(tp, 'r', encoding='utf-8', newline='') as f:
        rdr = csv.DictReader(f)
        rows = list(rdr)
    leak_c = 0
    # In the CSV: only flag rows whose task_id matches SEO Neo pattern (skip task descriptions mentioning "replaces SEO NEO" since those are legitimate)
    for r in rows:
        tid = r.get('task_id', '').lower()
        sop = r.get('sop_reference', '')
        action = r.get('action', '').lower()
        # ID-based flag
        is_neo_id = any(tid.startswith(p) for p in [
            'neo-', 'ai-', 'das-', 'gbp-blast', 'gbp-sniper', 'rd100', 'nap-overlay',
            'nap_overlay', 'gmb-pin-support', 'off-07f', 'off-07g', 'off-das', 'off-gbpblast',
            'off-gbpsniper', 'off-rd100', 'off-aiarticles', 'off-dd', 'off-napoverlay', 'off-gmbpin',
            'seo-neo', 'ai-art'])
        is_neo_sop = ('seo-neo' in sop.lower() or 'seo neo' in sop.lower()
                      or 'nap-image-overlay' in sop.lower() or 'driving-directions-sop' in sop.lower()
                      or 'embedinator' in sop.lower() or 'cloud-page' in sop.lower()
                      or 'gbp-blast' in sop.lower() or 'gbp-sniper' in sop.lower())
        # Action keyword flag — but ONLY if it's actively prescribing SEO Neo (not "replaces SEO NEO")
        is_neo_action = False
        for k in ['driving directions program', 'embedinator', 'cloud page', 'cloudpage', 'gbp blast', 'gbp sniper', 'nap image overlay', 'nap-image overlay']:
            if k in action and 'replaces' not in action and 'replace' not in action:
                is_neo_action = True
                break
        if is_neo_id or is_neo_sop or is_neo_action:
            leak_c += 1
            print(f"  !! CSV-NEO  {r['task_id']}: {r.get('action','')[:80]}")

    print(f"  levers={len(levers)}, actions={actions}, kpis={kpis}, deliverables={deliv}, csv_rows={len(rows)}, leaks: levers={leak_l}, csv={leak_c}")

    # check deliverables/ folder
    dd = f'C:/tmp/hqdm-dashboards/clients/{slug}/deliverables'
    if os.path.isdir(dd):
        files = os.listdir(dd)
        print(f"  deliverables/ folder: {len(files)} files")
    else:
        print(f"  deliverables/ folder MISSING")

print("\n=== Audit complete ===")
