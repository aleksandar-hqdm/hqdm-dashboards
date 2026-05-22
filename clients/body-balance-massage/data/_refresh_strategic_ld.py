"""Refresh the strategic dashboard's LD-related data blocks from the new CSV scans.

Updates:
  - ld_apples (replace with 9-keyword apples-to-apples on Feb 23 → May 18)
  - m3_kpis (LD-rank baselines + targets — swap dropped keywords for new ones)
  - ld_leaderboard_mtnm (refresh with Feb 23 → May 18 leaderboard for the main commercial kw)
  - cells_by_town (refresh per-town aggregate on a representative keyword)

Leaves the rest of the data.json untouched.
"""
import csv
import json
import re
from pathlib import Path

ROOT = Path('C:/tmp/hqdm-dashboards/clients/body-balance-massage/data')
DATA_PATH = ROOT / 'data.json'
LD_PATH = ROOT / 'ld_grids.json'
DOWNLOADS = Path('C:/Users/User/Downloads')

with open(DATA_PATH, encoding='utf-8') as f:
    data = json.load(f)
with open(LD_PATH, encoding='utf-8') as f:
    ld = json.load(f)

CLIENT = "Body Balance Massage And Float"


# ---- Reviews per entity (from May 18, 2026 CSVs) ----
# The CSVs include a Reviews column per entity per scan. Take the max across all
# May 18 scans (reviews are monotonically increasing for legit listings).
reviews_by_entity = {}
csv_glob = list(DOWNLOADS.glob('*_5_18_2026.csv')) + list(DOWNLOADS.glob('*_5_18_2026 (1).csv'))
seen_files = set()
for csv_path in csv_glob:
    # Skip duplicate "(1)" files when the base file exists
    base_name = csv_path.name.replace(' (1)', '')
    if base_name in seen_files:
        continue
    seen_files.add(base_name)
    with open(csv_path, encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        try:
            name_idx = header.index('Business')
            rev_idx = header.index('Reviews')
        except ValueError:
            continue
        for row in reader:
            if len(row) <= max(name_idx, rev_idx):
                continue
            name = row[name_idx].strip()
            rev_raw = row[rev_idx].strip()
            if not rev_raw:
                continue
            try:
                rev = int(rev_raw)
            except ValueError:
                continue
            prev = reviews_by_entity.get(name, 0)
            if rev > prev:
                reviews_by_entity[name] = rev


def apples(grid_kw, entity, d1, d2):
    """Apples-to-apples movement for an entity between two dates."""
    pts1 = {(r['x'], r['y']): r['rank'] for r in (grid_kw.get(d1) or {}).get(entity, [])}
    pts2 = {(r['x'], r['y']): r['rank'] for r in (grid_kw.get(d2) or {}).get(entity, [])}
    common = set(pts1) & set(pts2)
    if not common:
        return None
    n = len(common)
    return {
        'n': n,
        'avg_d1': sum(pts1[k] for k in common) / n,
        'avg_d2': sum(pts2[k] for k in common) / n,
        'top3_d1': sum(1 for k in common if pts1[k] <= 3),
        'top3_d2': sum(1 for k in common if pts2[k] <= 3),
        'dx': sum(pts1[k] - pts2[k] for k in common) / n,
    }


# ---- ld_apples (new structure follows the existing schema in data.json) ----
def cells_entered_lost(grid_kw, entity, d1, d2):
    """Cells newly entered (in d2 only) and cells lost (in d1 only)."""
    pts1 = {(r['x'], r['y']) for r in (grid_kw.get(d1) or {}).get(entity, [])}
    pts2 = {(r['x'], r['y']) for r in (grid_kw.get(d2) or {}).get(entity, [])}
    return len(pts2 - pts1), len(pts1 - pts2)


ld_apples_new = []
# Iterate over BOTH main keywords AND supplementary kws (2-date series) so the
# strategic dashboard shows the full LD picture.
all_kws = list(ld['keywords']) + list(ld.get('supplementary_keywords', []))
for kw in all_kws:
    g = ld['grids'][kw]
    present = g.get('dates_present', [])
    if len(present) < 2:
        continue
    src, dst = present[0], present[-1]
    a = apples(g, CLIENT, src, dst)
    if not a:
        continue
    s = g['summary'].get(CLIENT, {})
    entered, lost = cells_entered_lost(g, CLIENT, src, dst)
    src_label = ld['dates'][ld['date_keys'].index(src)]
    dst_label = ld['dates'][ld['date_keys'].index(dst)]
    ld_apples_new.append({
        "kw": kw,
        # Legacy field names — they're "src" and "dst" semantically, regardless of date
        "cells_jan": s.get(f'{src}_cells', 0),
        "cells_apr": s.get(f'{dst}_cells', 0),
        "rank_jan": round(a['avg_d1'], 2),
        "rank_apr": round(a['avg_d2'], 2),
        "top3_jan": a['top3_d1'],
        "top3_apr": a['top3_d2'],
        "mean_dx": round(a['dx'], 2),
        "cells_entered": entered,
        "cells_lost": lost,
        "apples_n": a['n'],
        "baseline_date": src_label,
        "current_date": dst_label,
        "is_supplementary": kw in ld.get('supplementary_keywords', []),
    })

data['ld_apples'] = ld_apples_new

# ---- m3_kpis (refresh LD-rank baselines, swap dropped keywords) ----
# Build a quick lookup
apples_by_kw = {a['kw']: a for a in ld_apples_new}


def mk_kpi(label, baseline, target, stretch=None):
    """Build a KPI row matching the existing schema."""
    row = {"kpi": label, "baseline": baseline, "target": target}
    if stretch:
        row["stretch"] = stretch
    return row


# Find existing KPI rows for the LD ones we want to keep / update
existing_kpis = data.get('m3_kpis', [])
new_kpis = []

# Keyword "substantial competitor" set size — entities with may_cells ≥ 10
# (filters out single-cell pop-ins that aren't real competitive threats)
def competitor_set_size(kw, min_cells=10):
    g = ld['grids'][kw]
    return sum(1 for ent, s in g['summary'].items() if (s.get('may_cells') or 0) >= min_cells)

# Build the 6 LD KPIs from the new scan set
mtnm = apples_by_kw.get('massage therapist near me', {})
massages = apples_by_kw.get('massages', {})
massage_therapist = apples_by_kw.get('massage therapist', {})
massage_subscription = apples_by_kw.get('massage subscription', {})
deep_tissue = apples_by_kw.get('deep tissue massage near me', {})
af = apples_by_kw.get('massage american fork', {})
float_therapy = apples_by_kw.get('float therapy', {})
float_tank = apples_by_kw.get('float tank', {})
float_tank_near = apples_by_kw.get('float tank near me', {})


def fmt_rank_baseline(a, kw, min_cells=10):
    if not a:
        return "—"
    rank = a['rank_apr']
    # Restrict to substantial competitors (≥ min_cells)
    summaries = ld['grids'][kw]['summary']
    ranked = sorted([(ent, s) for ent, s in summaries.items() if (s.get('may_cells') or 0) >= min_cells],
                    key=lambda x: -(x[1].get('may_top3', 0) or 0))
    bb_pos = next((i + 1 for i, (ent, _) in enumerate(ranked) if ent == CLIENT), None)
    n = len(ranked)
    return f"{rank:.2f} (#{bb_pos} of {n})"


# Use a tighter "substantial competitor" filter for client-facing positioning —
# count only entities with ≥ 30 may cells (i.e. they appear in 30%+ of the local grid).
SUBSTANTIAL = 30

# Refresh KPIs that should map to the new scan set
ld_kpis_new = [
    mk_kpi(
        "LD avg rank — massage therapist near me",
        fmt_rank_baseline(mtnm, 'massage therapist near me', SUBSTANTIAL),
        "≤ 7.0",
    ),
    mk_kpi(
        "LD avg rank — massages",
        fmt_rank_baseline(massages, 'massages', SUBSTANTIAL),
        "≤ 8.0",
    ),
    mk_kpi(
        "LD avg rank — massage therapist",
        fmt_rank_baseline(massage_therapist, 'massage therapist', SUBSTANTIAL),
        "≤ 8.0",
    ),
    mk_kpi(
        "LD avg rank — massage subscription",
        fmt_rank_baseline(massage_subscription, 'massage subscription', SUBSTANTIAL),
        "≤ 7.5",
    ),
    mk_kpi(
        "LD top-3 cells — massage therapist near me",
        f"{mtnm.get('top3_apr', 0)} cells" if mtnm else "—",
        "≥ 35",
    ),
    mk_kpi(
        "LD top-3 cells — massage subscription",
        f"{massage_subscription.get('top3_apr', 0)} cells" if massage_subscription else "—",
        "≥ 20",
    ),
    mk_kpi(
        "LD top-3 cells — deep tissue massage near me",
        f"{deep_tissue.get('top3_apr', 0)} cells" if deep_tissue else "—",
        "≥ 32",
    ),
    mk_kpi(
        "Float queries — hold #1 across all 3 (avg rank ≤ 2.0)",
        f"#1 / {float_therapy.get('rank_apr', 0):.2f} / {float_tank.get('rank_apr', 0):.2f} / {float_tank_near.get('rank_apr', 0):.2f}",
        "Hold",
    ),
    mk_kpi(
        "Massage american fork — hold top-3 saturation",
        f"{af.get('top3_apr', 0)} / {af.get('cells_apr', 0)} cells",
        "≥ 100",
    ),
]

# Idempotent filter: drop ANY existing KPI whose label starts with an LD-tracking prefix.
# That way the script can run multiple times without duplicating LD-rank rows.
LD_KPI_PREFIXES = (
    'LD avg rank',
    'LD top-3 cells',
    'Float queries',
    'Massage american fork',
)
non_ld_kpis = [k for k in existing_kpis if not k.get('kpi', '').startswith(LD_KPI_PREFIXES)]

# Combine: new LD KPIs first, then the other (non-LD) KPIs
data['m3_kpis'] = ld_kpis_new + non_ld_kpis

# ---- ld_leaderboard_mtnm (refresh with new 'massage therapist near me' data) ----
# Use the LONGEST window available for mtnm (Jan 19 -> May 18 = 5-date series).
mtnm_grid = ld['grids']['massage therapist near me']
mtnm_present = mtnm_grid.get('dates_present', [])
mtnm_src = mtnm_present[0] if mtnm_present else 'feb'
mtnm_dst = mtnm_present[-1] if mtnm_present else 'may'
mtnm_lb = []
for ent, s in mtnm_grid['summary'].items():
    src_cells = s.get(f'{mtnm_src}_cells', 0) or 0
    dst_cells = s.get(f'{mtnm_dst}_cells', 0) or 0
    if src_cells == 0 and dst_cells == 0:
        continue
    src_avg = s.get(f'{mtnm_src}_avg')
    dst_avg = s.get(f'{mtnm_dst}_avg')
    if src_avg is None or dst_avg is None:
        continue
    mtnm_lb.append({
        "name": ent,
        "reviews": reviews_by_entity.get(ent, 0),
        "cells_jan": src_cells,
        "cells_apr": dst_cells,
        "rank_jan": round(src_avg, 2),
        "rank_apr": round(dst_avg, 2),
        "mean_dx": round(src_avg - dst_avg, 2),
        "is_client": ent == CLIENT,
    })

# Sort by may_cells desc
mtnm_lb.sort(key=lambda r: -r['cells_apr'])
data['ld_leaderboard_mtnm'] = mtnm_lb[:12]


# ---- cells_by_town: per-town rank bucket counts for each new keyword ----
# Town center coordinates (approximate, Utah Valley)
TOWN_CENTERS = {
    "American Fork": (40.378, -111.797),
    "Pleasant Grove": (40.364, -111.738),
    "Lehi": (40.394, -111.851),
    "Cedar Hills": (40.418, -111.764),
    "Lindon": (40.341, -111.721),
    "Highland": (40.428, -111.792),
    "Alpine": (40.452, -111.776),
    "Saratoga Springs": (40.343, -111.901),
    "Vineyard": (40.299, -111.755),
}


def nearest_town(lat, lng):
    return min(TOWN_CENTERS.items(),
               key=lambda kv: (kv[1][0] - lat) ** 2 + (kv[1][1] - lng) ** 2)[0]


def bucketize(rank):
    if rank is None:
        return 'out'
    if rank <= 3: return 'top3'
    if rank <= 7: return 'close'
    if rank <= 10: return 'mid'
    if rank <= 15: return 'back'
    if rank <= 20: return 'far'
    return 'out'


cells_by_town_new = {}
for kw in ld['keywords'] + list(ld.get('supplementary_keywords', [])):
    g = ld['grids'][kw]
    present = g.get('dates_present', [])
    if not present:
        continue
    # Use the latest available date for BB cell ranks
    last_date = present[-1]
    bb_ranks = {(r['x'], r['y']): r['rank'] for r in (g.get(last_date) or {}).get(CLIENT, [])}
    town_buckets = {town: {'town': town, 'top3': 0, 'close': 0, 'mid': 0,
                           'back': 0, 'far': 0, 'out': 0, 'total': 0}
                    for town in TOWN_CENTERS}
    for cell in g['cells']:
        town = nearest_town(cell['lat'], cell['lng'])
        rank = bb_ranks.get((cell['x'], cell['y']))
        bucket = bucketize(rank)
        town_buckets[town][bucket] += 1
        town_buckets[town]['total'] += 1
    rows = [r for r in town_buckets.values() if r['total'] > 0]
    rows.sort(key=lambda r: (-r['total'], -r['top3']))
    cells_by_town_new[kw] = rows

data['cells_by_town'] = cells_by_town_new


# ---- Done ----
with open(DATA_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Refreshed ld_apples: {len(ld_apples_new)} keywords")
for a in ld_apples_new:
    print(f"  {a['kw']:30} | apples n={a['cells_jan']:3} | rank {a['rank_jan']:.2f} -> {a['rank_apr']:.2f} (dx {a['mean_dx']:+.2f}) | top3 {a['top3_jan']} -> {a['top3_apr']}")

print(f"\nRefreshed m3_kpis: {len(data['m3_kpis'])} rows ({len(ld_kpis_new)} LD + {len(non_ld_kpis)} other)")
for k in ld_kpis_new:
    print(f"  {k['kpi']:60} | base={k['baseline']:30} | tgt={k['target']}")

print(f"\nRefreshed ld_leaderboard_mtnm: {len(data['ld_leaderboard_mtnm'])} rows")
for r in data['ld_leaderboard_mtnm'][:5]:
    star = '*' if r['is_client'] else ' '
    print(f"  {star} {r['name'][:35]:35} | cells {r['cells_jan']}/{r['cells_apr']} | rank {r['rank_jan']} -> {r['rank_apr']}")
