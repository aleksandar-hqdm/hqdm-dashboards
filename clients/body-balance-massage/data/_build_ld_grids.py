"""
Build ld_grids.json for Body Balance Massage & Float from Local Dominator CSV scans.

Reads 9 keywords x 4 dates of 13x13 Maps grid scans from C:/Users/User/Downloads/
and produces an apples-to-apples rank-movement structure matching the AQMS
ld_grids.json schema.

Stdlib only. Re-runnable.
"""
from __future__ import annotations

import csv
import glob
import json
import os
import statistics
from collections import Counter, defaultdict


DOWNLOADS = r"C:/Users/User/Downloads"
OUT_DIR = r"C:/tmp/hqdm-dashboards/clients/body-balance-massage/data"
OUT_PATH = os.path.join(OUT_DIR, "ld_grids_new.json")

CLIENT_NAME = "Body Balance Massage And Float"
CLIENT_PLACE_ID = "ChIJzX-ZAXKBTYcRVQvwDxOL0B8"

# Ordered for heatmap UI — biggest positive-movement keyword first so the default
# tab opens on a winning story. After that, ordered by total may_top3 contribution.
KEYWORDS = [
    "massage subscription",          # biggest mover Feb->May (top3 6 -> 14, +8)
    "deep tissue massage near me",   # +3 top-3
    "float therapy",                 # #1 at saturation, +3 top-3
    "massage therapist near me",     # main commercial query, longest window (Jan 19 available)
    "massages",
    "massage therapist",
    "massage american fork",
    "float tank",
    "float tank near me",
]

# 5-date set. Jan 19 only available for 3 keywords + the supplementary kws.
# For keywords without a given date, that date's panels render empty.
DATE_FILES = [
    ("jan", "1_19_2026", "Jan 19, 2026"),
    ("feb", "2_23_2026", "Feb 23, 2026"),
    ("mar", "3_18_2026", "Mar 18, 2026"),
    ("apr", "4_18_2026", "Apr 18, 2026"),
    ("may", "5_18_2026", "May 18, 2026"),
]

# Supplementary keywords (only 2 dates each: Jan 19 + Apr 18) — included so
# their movement is preserved in the leaderboard + supplementary cards.
SUPPLEMENTARY_KEYWORDS = [
    "massages near me",
    "massage therapy",
    "massage therapist lehi",
]


def find_csv(keyword: str, date_token: str) -> str | None:
    """Find CSV path for a keyword/date. Prefer file WITHOUT '(1)' suffix."""
    primary = os.path.join(DOWNLOADS, f"{keyword}_{date_token}.csv")
    alt = os.path.join(DOWNLOADS, f"{keyword}_{date_token} (1).csv")
    if os.path.isfile(primary):
        return primary
    if os.path.isfile(alt):
        return alt
    return None


def read_scan(path: str) -> list[dict]:
    """Read a Local Dominator CSV. Strip BOM. Return list of row dicts."""
    rows: list[dict] = []
    with open(path, "r", encoding="utf-8-sig", newline="") as fh:
        reader = csv.reader(fh)
        header = next(reader)
        # Some headers have a blank column between Secondary Categories and Rating
        # csv.reader handles that fine — just track positions.
        idx = {name.strip(): i for i, name in enumerate(header)}
        for raw in reader:
            if not raw or len(raw) < len(header):
                continue
            row = {
                "lat": float(raw[idx["Latitude"]]),
                "lng": float(raw[idx["Longitude"]]),
                "business": raw[idx["Business"]].strip(),
                "place_id": raw[idx["Place ID"]].strip(),
                "scan_size": raw[idx["Scan Size"]].strip(),
                "distance": raw[idx["Distance"]].strip(),
                "distance_measure": raw[idx["Distance measure"]].strip(),
                "rank": int(raw[idx["Rank"]]) if raw[idx["Rank"]].strip() else None,
            }
            rows.append(row)
    return rows


def entity_key(row: dict) -> str:
    """Entity grouping key: prefer Place ID, fallback to lowercased business name."""
    pid = row["place_id"]
    if pid:
        return f"pid:{pid}"
    return f"name:{row['business'].lower()}"


def build_cells_and_grid(all_rows: list[dict]) -> tuple[dict, list, dict, dict]:
    """
    Determine the 13x13 grid coordinate system from all unique (lat,lng) cells
    seen across ALL four scan dates for one keyword.

    Returns:
      cell_xy: {(lat,lng): (x,y)}  rounded floats keyed
      cells_list: [{"x","y","lat","lng"}, ...] sorted by (y, x)
      bounds: {"min_x", "max_x", "min_y", "max_y"}
      meta: extra info (scan_sizes seen)
    """
    # Collect all distinct (lat, lng) cells
    coord_set = set()
    scan_sizes = set()
    for r in all_rows:
        coord_set.add((round(r["lat"], 6), round(r["lng"], 6)))
        if r["scan_size"]:
            scan_sizes.add(r["scan_size"])

    if not coord_set:
        return {}, [], {"min_x": 0, "max_x": 0, "min_y": 0, "max_y": 0}, {"scan_sizes": []}

    # Build sorted unique lat/lng lists -> step from min/max
    lats = sorted({c[0] for c in coord_set})
    lngs = sorted({c[1] for c in coord_set})

    # Use median as approximate center; that maps to (0,0) AFTER rounding.
    # For a 13x13 grid the central cell is at index 6 of 0..12.
    # Center = ( (max+min)/2 ).
    lat_min, lat_max = lats[0], lats[-1]
    lng_min, lng_max = lngs[0], lngs[-1]

    # Step = full range / 12 (since we want x,y in -6..+6)
    lat_step = (lat_max - lat_min) / 12.0 if lat_max != lat_min else 1.0
    lng_step = (lng_max - lng_min) / 12.0 if lng_max != lng_min else 1.0

    # y axis: NORTH (higher lat) = larger y
    # x axis: EAST (higher lng / less negative) = larger x
    cell_xy: dict[tuple[float, float], tuple[int, int]] = {}
    for lat, lng in coord_set:
        x = round((lng - (lng_min + 6 * lng_step)) / lng_step) if lng_step else 0
        y = round((lat - (lat_min + 6 * lat_step)) / lat_step) if lat_step else 0
        cell_xy[(lat, lng)] = (x, y)

    cells_list = []
    for (lat, lng), (x, y) in cell_xy.items():
        cells_list.append({"x": x, "y": y, "lat": lat, "lng": lng})
    cells_list.sort(key=lambda c: (c["y"], c["x"]))

    xs = [c["x"] for c in cells_list]
    ys = [c["y"] for c in cells_list]
    bounds = {"min_x": min(xs), "max_x": max(xs), "min_y": min(ys), "max_y": max(ys)}

    return cell_xy, cells_list, bounds, {"scan_sizes": sorted(scan_sizes)}


DATE_KEYS = [d[0] for d in DATE_FILES]


def build_keyword_grid(keyword: str) -> tuple[dict, dict, dict]:
    """
    Build the per-keyword block across DATE_KEYS (jan/feb/mar/apr/may). Dates
    without a CSV produce empty panels; the heatmap shows them as no-data.
    """
    date_rows: dict[str, list[dict]] = {}
    scan_sizes_by_date: dict[str, list[str]] = {}
    missing: list[str] = []
    dates_present: list[str] = []

    for dkey, dtoken, _label in DATE_FILES:
        path = find_csv(keyword, dtoken)
        if not path:
            missing.append(f"{keyword}_{dtoken}")
            date_rows[dkey] = []
            scan_sizes_by_date[dkey] = []
            continue
        rows = read_scan(path)
        date_rows[dkey] = rows
        scan_sizes_by_date[dkey] = sorted({r["scan_size"] for r in rows if r["scan_size"]})
        dates_present.append(dkey)

    all_rows: list[dict] = []
    for v in date_rows.values():
        all_rows.extend(v)
    cell_xy, cells_list, bounds, _ = build_cells_and_grid(all_rows)

    name_counts: dict[str, Counter] = defaultdict(Counter)
    date_entity_rows: dict[str, dict[str, list[dict]]] = {}

    for dkey in DATE_KEYS:
        entity_rows: dict[str, list[dict]] = defaultdict(list)
        for r in date_rows[dkey]:
            key = entity_key(r)
            xy = cell_xy.get((round(r["lat"], 6), round(r["lng"], 6)))
            if xy is None:
                continue
            x, y = xy
            entity_rows[key].append({"x": x, "y": y, "rank": r["rank"]})
            name_counts[key][r["business"]] += 1
        date_entity_rows[dkey] = entity_rows

    all_entities = set()
    for d in date_entity_rows.values():
        all_entities.update(d.keys())

    summary: dict[str, dict] = {}
    for ent in all_entities:
        display = name_counts[ent].most_common(1)[0][0]
        row: dict[str, float | int] = {}
        for dkey in DATE_KEYS:
            placements = date_entity_rows[dkey].get(ent, [])
            ranks = [p["rank"] for p in placements if p["rank"] is not None]
            row[f"{dkey}_avg"] = round(statistics.mean(ranks), 2) if ranks else None
            row[f"{dkey}_top3"] = sum(1 for r in ranks if r <= 3)
            row[f"{dkey}_cells"] = len(placements)
        summary[display] = row

    block: dict = {
        "cells": cells_list,
        "bounds": bounds,
        "dates_present": dates_present,  # which DATE_KEYS this keyword has data for
    }
    for dkey in DATE_KEYS:
        out_dict: dict[str, list[dict]] = {}
        for ent, placements in date_entity_rows[dkey].items():
            display = name_counts[ent].most_common(1)[0][0]
            if display in out_dict:
                out_dict[display].extend(placements)
            else:
                out_dict[display] = sorted(placements, key=lambda p: (p["y"], p["x"]))
        block[dkey] = out_dict

    block["summary"] = summary

    scan_meta = {"scan_sizes_by_date": scan_sizes_by_date, "missing": missing,
                 "dates_present": dates_present}

    return block, scan_meta, {
        "name_counts": name_counts,
        "date_entity_rows": date_entity_rows,
    }


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    grids: dict[str, dict] = {}
    scan_metas: dict[str, dict] = {}
    keyword_internals: dict[str, dict] = {}

    # Main heatmap keywords
    for kw in KEYWORDS:
        block, meta, internals = build_keyword_grid(kw)
        grids[kw] = block
        scan_metas[kw] = meta
        keyword_internals[kw] = internals

    # Supplementary keywords (2 dates each) — included in grids but flagged
    supplementary_grids: dict[str, dict] = {}
    for kw in SUPPLEMENTARY_KEYWORDS:
        block, meta, internals = build_keyword_grid(kw)
        if any(meta["dates_present"]):
            supplementary_grids[kw] = block
            scan_metas[kw] = meta
            keyword_internals[kw] = internals

    # --- Competitor selection: top 3 NON-client by total may_top3 across MAIN keywords
    cross_may_top3: Counter = Counter()
    cross_name_counts: dict[str, Counter] = defaultdict(Counter)
    for kw in KEYWORDS:
        internals = keyword_internals[kw]
        date_rows = internals["date_entity_rows"]["may"]
        for ent, placements in date_rows.items():
            top3 = sum(1 for p in placements if p["rank"] is not None and p["rank"] <= 3)
            cross_may_top3[ent] += top3
            for name, c in internals["name_counts"][ent].items():
                cross_name_counts[ent][name] += c

    client_key = f"pid:{CLIENT_PLACE_ID}"
    ranked = [
        (ent, total) for ent, total in cross_may_top3.most_common()
        if ent != client_key
    ]

    competitors = []
    for ent, total in ranked[:3]:
        display = cross_name_counts[ent].most_common(1)[0][0]
        competitors.append(display)

    top5 = []
    for ent, total in ranked[:5]:
        display = cross_name_counts[ent].most_common(1)[0][0]
        top5.append((display, total))

    out = {
        "client": CLIENT_NAME,
        "competitors": competitors,
        "keywords": KEYWORDS,
        "supplementary_keywords": list(supplementary_grids.keys()),
        "dates": [d[2] for d in DATE_FILES],
        "date_keys": DATE_KEYS,
        "grids": {**grids, **supplementary_grids},
    }

    with open(OUT_PATH, "w", encoding="utf-8") as fh:
        json.dump(out, fh, indent=2, ensure_ascii=False)

    # --- Validation: per-keyword Body Balance earliest -> latest, apples-to-apples
    print(f"WROTE: {OUT_PATH}")
    print()
    print("=== Body Balance earliest -> latest (apples-to-apples on cells visible in BOTH scans) ===")

    def kw_apples(internals, src, dst):
        src_rows = internals["date_entity_rows"][src].get(client_key, [])
        dst_rows = internals["date_entity_rows"][dst].get(client_key, [])
        src_xy = {(r["x"], r["y"]): r["rank"] for r in src_rows if r["rank"] is not None}
        dst_xy = {(r["x"], r["y"]): r["rank"] for r in dst_rows if r["rank"] is not None}
        overlap = set(src_xy.keys()) & set(dst_xy.keys())
        if not overlap:
            return None
        s_ranks = [src_xy[c] for c in overlap]
        d_ranks = [dst_xy[c] for c in overlap]
        return {
            "n": len(overlap),
            "src_avg": round(statistics.mean(s_ranks), 2),
            "dst_avg": round(statistics.mean(d_ranks), 2),
            "src_top3": sum(1 for r in s_ranks if r <= 3),
            "dst_top3": sum(1 for r in d_ranks if r <= 3),
        }

    for kw in KEYWORDS + list(supplementary_grids.keys()):
        internals = keyword_internals[kw]
        present = scan_metas[kw]["dates_present"]
        if not present:
            print(f"{kw}: NO DATA")
            continue
        src, dst = present[0], present[-1]
        a = kw_apples(internals, src, dst)
        if a:
            dx_top3 = a["dst_top3"] - a["src_top3"]
            dx_avg = round(a["src_avg"] - a["dst_avg"], 2)
            print(f"{kw:30s} ({src}->{dst}) apples n={a['n']:3d}  "
                  f"avg {a['src_avg']:.2f} -> {a['dst_avg']:.2f}  (dx {dx_avg:+.2f})  "
                  f"top3 {a['src_top3']:3d} -> {a['dst_top3']:3d}  (dx {dx_top3:+d})  "
                  f"window={present[0]}..{present[-1]}")
        else:
            print(f"{kw}: no apples overlap")

        sizes_by_date = scan_metas[kw]["scan_sizes_by_date"]
        unique_sizes = {tuple(v) for v in sizes_by_date.values() if v}
        if len(unique_sizes) > 1:
            print(f"  WARN scan sizes differ across dates: {sizes_by_date}")

    print()
    print("=== Top 5 competitors by total may_top3 across all 9 keywords (excl. client) ===")
    for name, total in top5:
        print(f"  {name}: {total} top3 cells (across all keywords combined)")

    # Distance info for each keyword (scan radius), using latest available date
    print()
    print("=== Scan radius (max distance) per keyword, latest scan ===")
    for kw in KEYWORDS + list(supplementary_grids.keys()):
        present = scan_metas[kw]["dates_present"]
        if not present:
            continue
        last_dkey = present[-1]
        token = next(tok for (k, tok, _) in DATE_FILES if k == last_dkey)
        path = find_csv(kw, token)
        if not path:
            continue
        rows = read_scan(path)
        dists = [float(r["distance"]) for r in rows if r["distance"]]
        if dists:
            measures = sorted({r["distance_measure"] for r in rows if r["distance_measure"]})
            print(f"  {kw:30s} ({last_dkey}): max {max(dists)} {measures}")


if __name__ == "__main__":
    main()
