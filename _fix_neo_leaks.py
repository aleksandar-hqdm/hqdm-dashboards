"""One-off: strip residual SEO Neo from Arms Acres + Conifer Park."""
import json, csv, shutil

# ===== ARMS ACRES =====
csv_path = r'C:/Users/User/Desktop/HQDM/clients/armsacres/deliverable/Arms_Acres_3Month_Tasks_FINAL.csv'
with open(csv_path, 'r', encoding='utf-8', newline='') as f:
    rdr = csv.DictReader(f)
    fns = rdr.fieldnames
    rows = list(rdr)

keep, removed = [], []
for r in rows:
    tid = r.get('task_id', '')
    if tid.startswith('OFF-07f'):
        removed.append(tid)
    else:
        keep.append(r)

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    w = csv.DictWriter(f, fieldnames=fns)
    w.writeheader()
    w.writerows(keep)
print(f"Arms Acres tasks_FINAL.csv: {len(keep)} kept, removed {removed}")

shutil.copy2(csv_path, r'C:/tmp/hqdm-dashboards/clients/arms-acres/deliverables/Arms_Acres_3Month_Tasks_FINAL.csv')
print("  copied updated CSV to dashboard")

dj_path = r'C:/tmp/hqdm-dashboards/clients/arms-acres/data/data.json'
with open(dj_path, 'r', encoding='utf-8') as f:
    d = json.load(f)
removed_lever = []
for lever in d.get('levers', []):
    new_actions = []
    for a in lever.get('actions', []):
        code = a.get('code', '')
        if code.startswith('OFF-07f'):
            removed_lever.append(f"{lever['id']}.{code}")
        else:
            new_actions.append(a)
    lever['actions'] = new_actions
with open(dj_path, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print(f"Arms Acres data.json levers: removed {removed_lever}")

# ===== CONIFER PARK =====
dj_path = r'C:/tmp/hqdm-dashboards/clients/conifer-park/data/data.json'
with open(dj_path, 'r', encoding='utf-8') as f:
    d = json.load(f)
removed_lever = []
for lever in d.get('levers', []):
    new_actions = []
    for a in lever.get('actions', []):
        code = a.get('code', '').lower()
        name = a.get('name', '').lower()
        if 'embed' in code or 'cloudpage' in code or 'cloud_page' in code or 'cloud page' in name or 'embedinator' in name:
            removed_lever.append(f"{lever['id']}.{a.get('code')}")
        else:
            new_actions.append(a)
    lever['actions'] = new_actions
with open(dj_path, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print(f"Conifer Park data.json levers: removed {removed_lever}")
