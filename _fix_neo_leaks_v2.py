"""Strip real SEO Neo leaks found in:
1. Elev8 Reporting_Master_Template — row referencing SEO-Neo-Month1
2. Niagara Reporting_Master_Template — row referencing SEO Neo batches + SEO-NEO_M1/M2/M3
3. Arms Acres Pending_GBP_Access_Tasks — rows referencing Embedinator + Dominator
"""
import csv, shutil

def filter_csv(path, drop_predicate, label):
    with open(path, 'r', encoding='utf-8', newline='') as f:
        rdr = csv.reader(f)
        rows = list(rdr)
    keep, dropped = [rows[0]], []
    for r in rows[1:]:
        if drop_predicate(r):
            dropped.append(r[0] if r else '?')
        else:
            keep.append(r)
    with open(path, 'w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerows(keep)
    print(f"{label}: kept {len(keep)-1}, dropped {len(dropped)}: {dropped}")
    return path


# Pattern: any cell contains SEO Neo (any case) or Embedinator or Dominator (when Dominator refers to GMB Dominator)
def has_neo(cell):
    cl = cell.lower()
    return any(k in cl for k in [
        'seo-neo', 'seo neo', 'embedinator', 'gmb dominator', 'cloud page',
        'cloudpage', 'gbp blast', 'gbp sniper', 'rd100', 'nap-image-overlay',
        'nap image overlay'
    ])

def row_has_neo(row):
    return any(has_neo(c) for c in row)


# ELEV8 Reporting Master Template
filter_csv(
    'C:/Users/User/Desktop/HQDM/clients/elev8recovery/deliverable/Elev8_Reporting_Master_Template.csv',
    row_has_neo,
    'Elev8 Reporting Master'
)
shutil.copy2(
    'C:/Users/User/Desktop/HQDM/clients/elev8recovery/deliverable/Elev8_Reporting_Master_Template.csv',
    'C:/tmp/hqdm-dashboards/clients/elev8-recovery/deliverables/Elev8_Reporting_Master_Template.csv'
)

# NIAGARA Reporting Master Template
filter_csv(
    'C:/Users/User/Desktop/HQDM/clients/niagararecovery/deliverable/Niagara_Recovery_Reporting_Master_Template.csv',
    row_has_neo,
    'Niagara Reporting Master'
)
shutil.copy2(
    'C:/Users/User/Desktop/HQDM/clients/niagararecovery/deliverable/Niagara_Recovery_Reporting_Master_Template.csv',
    'C:/tmp/hqdm-dashboards/clients/niagara-recovery/deliverables/Niagara_Recovery_Reporting_Master_Template.csv'
)

# ARMS ACRES Pending GBP Access Tasks
filter_csv(
    'C:/Users/User/Desktop/HQDM/clients/armsacres/deliverable/Arms_Acres_Pending_GBP_Access_Tasks.csv',
    row_has_neo,
    'Arms Acres Pending GBP Access'
)
shutil.copy2(
    'C:/Users/User/Desktop/HQDM/clients/armsacres/deliverable/Arms_Acres_Pending_GBP_Access_Tasks.csv',
    'C:/tmp/hqdm-dashboards/clients/arms-acres/deliverables/Arms_Acres_Pending_GBP_Access_Tasks.csv'
)
