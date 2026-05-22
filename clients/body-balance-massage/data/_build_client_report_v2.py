"""Build the client_report_v2 block and inject it into data.json.

Reads ld_grids.json (fresh apples-to-apples from the new LD CSV scans) and the
existing data.json (for GA4-derived quarterly numbers, leads, LCR).

The v2 block powers the new AQMS-style client report.
"""
import json
from pathlib import Path

ROOT = Path('C:/tmp/hqdm-dashboards/clients/body-balance-massage/data')
DATA_PATH = ROOT / 'data.json'
LD_PATH = ROOT / 'ld_grids.json'

with open(DATA_PATH, encoding='utf-8') as f:
    data = json.load(f)
with open(LD_PATH, encoding='utf-8') as f:
    ld = json.load(f)

CLIENT = "Body Balance Massage And Float"


def apples(grid_kw, entity, d1, d2):
    """Apples-to-apples: only cells the entity appears in on BOTH dates."""
    pts1 = {(r['x'], r['y']): r['rank'] for r in (grid_kw.get(d1) or {}).get(entity, [])}
    pts2 = {(r['x'], r['y']): r['rank'] for r in (grid_kw.get(d2) or {}).get(entity, [])}
    common = set(pts1) & set(pts2)
    n = len(common)
    if n == 0:
        return None
    avg1 = sum(pts1[k] for k in common) / n
    avg2 = sum(pts2[k] for k in common) / n
    t3_1 = sum(1 for k in common if pts1[k] <= 3)
    t3_2 = sum(1 for k in common if pts2[k] <= 3)
    dx = sum(pts1[k] - pts2[k] for k in common) / n  # positive = rank improved
    return dict(n=n, avg_feb=round(avg1, 2), avg_may=round(avg2, 2),
                top3_feb=t3_1, top3_may=t3_2, dx_mean=round(dx, 2))


# Per-keyword apples-to-apples for the client
ld_apples = []
for kw in ld['keywords']:
    g = ld['grids'][kw]
    a = apples(g, CLIENT, 'feb', 'may')
    if a:
        ld_apples.append(dict(kw=kw, **a))

# Headline figures (use existing data.json's quarterly object — engagement-clean)
q = {row['q']: row for row in data['trend']['quarterly']}
q1_25 = q['Q1 2025']
q1_26 = q['Q1 2026']
q2_26 = q['Q2 2026* (partial)']

q2_lcr = round(q2_26['org_conv'] / q2_26['org_sess'] * 100, 2)
cvr_jump_pct = round((q2_lcr - q1_26['org_cr']) / q1_26['org_cr'] * 100, 0)

# Movement tiles
movement_tiles = [
    {
        "label": "Organic Visitors (YoY)",
        "pct": "+18%",
        "baseline": f"{q1_25['org_sess']:,} sessions",
        "current": f"{q1_26['org_sess']:,} sessions",
        "sub": "Q1 2025 → Q1 2026"
    },
    {
        "label": "Organic Leads (YoY)",
        "pct": "+18%",
        "baseline": f"{q1_25['org_conv']} leads",
        "current": f"{q1_26['org_conv']} leads",
        "sub": "Q1 2025 → Q1 2026 · booking + form + call/email intent"
    },
    {
        "label": "Lead Capture Rate (Q1 → Q2 2026)",
        "pct": f"+{int(cvr_jump_pct)}%",
        "baseline": f"{q1_26['org_cr']}%",
        "current": f"{q2_lcr}%",
        "sub": "Visitors converting at nearly 2× the Q1 rate in the first 6 weeks of Q2"
    },
    {
        "label": "Float Maps Position",
        "pct": "#1 throughout",
        "baseline": "avg rank 1.5",
        "current": "98–106 top-3 cells / 106",
        "sub": "Across all 3 float queries · the moat is intact"
    },
]

# Quarterly snapshot
quarterly_snapshot = [
    {"q": "Q1 2025", "sessions": q1_25['org_sess'], "leads": q1_25['org_conv'], "lcr": q1_25['org_cr'],
     "context": "Baseline period; modest organic growth tied to LD rank tightening."},
    {"q": "Q1 2026", "sessions": q1_26['org_sess'], "leads": q1_26['org_conv'], "lcr": q1_26['org_cr'],
     "context": "Sessions +18% YoY, leads +18% YoY at same lead capture rate."},
    {"q": "Q2 2026* (Apr + May so far)", "sessions": q2_26['org_sess'], "leads": q2_26['org_conv'], "lcr": q2_lcr,
     "context": "Partial quarter (2 months). LCR climbing — strategy work showing up in visitor quality.", "kind": "current"},
]

# Storyline timeline (4 events, ordered chronologically)
timeline = [
    {
        "phase": "Q4 2025 → early Q1 2026",
        "kind": "neutral",
        "title": "Steady organic foundation",
        "body": "Going into 2026, organic sessions averaged ~3,500/mo with a lead capture rate of ~1.57%. Strong on Maps (single AF pin, 4.9★ × 402–406 reviews holding through the period), float dominance preserved at #1 across 100% of grid cells, but generic ‘massage’ queries were plateauing — Pleasant Grove + Lehi competitors pushing on the closer-suburb cells."
    },
    {
        "phase": "Jan – Mar 2026",
        "kind": "good",
        "title": "Sessions +18% YoY · leads +18% YoY",
        "body": "Q1 2025 → Q1 2026: organic sessions 8,879 → 10,448 and organic leads 139 → 164. Lead capture rate held at 1.57% — visitors are converting at the same rate, with more of them. The +18% is the cleanest YoY signal we can run: it strips out the Aug 2025 GA4 engagement-event reconfiguration that would otherwise inflate the raw ‘conversion’ figure ~6×."
    },
    {
        "phase": "Apr – mid-May 2026",
        "kind": "good",
        "title": "Lead capture rate jumping — visitor quality up",
        "body": "Q2 2026 partial (Apr + first 22 days of May): lead capture rate climbed from 1.57% to <strong>2.98%</strong> — almost double Q1’s rate. The strategic work (cannibal cleanup priority batch, on-site CTR work on bleeding-CTR URLs, GBP velocity lift) is starting to show up in the funnel before showing up in total traffic. Sessions running slightly below Q1’s pace — expected given seasonal massage demand and the off-page program halt mid-month."
    },
    {
        "phase": "May 13, 2026 · Course correction",
        "kind": "neutral",
        "title": "Off-page program halted across the HQDM book of business",
        "body": "Authority strategy pivoted from automated stack (SEO Neo / Aaron Gruenke) to manual + earned channels (AMTA / ABMP / Utah MTA citations, monthly digital-PR pitch, monthly partner-outreach touch). Deliberate course correction — short-term it slows backlink velocity; medium-term it removes algorithmic risk and builds defensible local authority."
    },
]

# Heatmap-shown keywords
heatmap_keywords = [
    "massage subscription",
    "deep tissue massage near me",
    "float therapy",
    "massage therapist near me",
]

# Search-by-search cards (one per heatmap keyword)
search_cards = []
for kw in heatmap_keywords:
    a = next((x for x in ld_apples if x['kw'] == kw), None)
    if not a:
        continue
    dx_top3 = a['top3_may'] - a['top3_feb']
    sign = '+' if dx_top3 >= 0 else ''
    if kw == "massage subscription":
        search_cards.append({
            "keyword": kw, "verdict": "Biggest mover", "sentiment": "good",
            "commentary": f"Top-3 cells expanded from {a['top3_feb']} to <strong>{a['top3_may']} ({sign}{dx_top3})</strong> across {a['n']} apples-to-apples cells. Subscription is the highest-LTV intent — a member is multi-visit revenue, not one-time. <strong>Action: build a dedicated <code>/massage-subscription-american-fork/</code> page + push it via GBP Posts.</strong>"
        })
    elif kw == "deep tissue massage near me":
        search_cards.append({
            "keyword": kw, "verdict": "Gaining", "sentiment": "good",
            "commentary": f"Top-3 cells {a['top3_feb']} → <strong>{a['top3_may']} ({sign}{dx_top3})</strong> across {a['n']} cells. Deep-tissue is a primary booking modality. <strong>Action: deep-tissue service page gets Service + FAQ schema in M2 (Lever F).</strong>"
        })
    elif kw == "float therapy":
        search_cards.append({
            "keyword": kw, "verdict": "Defending #1", "sentiment": "good",
            "commentary": f"Top-3 cells {a['top3_feb']} → <strong>{a['top3_may']} ({sign}{dx_top3})</strong> at near-saturation ({a['top3_may']}/106 in top-3, avg rank <strong>{a['avg_may']:.2f}</strong>). No headroom up from 1.5 — defense posture only. <strong>Action: hold GBP photo cadence, monitor True REST + Purify for any aggressive moves.</strong>"
        })
    elif kw == "massage therapist near me":
        search_cards.append({
            "keyword": kw, "verdict": "Steady gain", "sentiment": "good",
            "commentary": f"Top-3 cells {a['top3_feb']} → <strong>{a['top3_may']} ({sign}{dx_top3})</strong>, avg rank tightened from {a['avg_feb']:.2f} to <strong>{a['avg_may']:.2f}</strong>. BB sits at <strong>#2 of 10</strong> substantial competitors in the Pleasant Grove + Lehi corridor. <strong>Action: M3 KPI target is top-3 cells ≥ 45 — closes the gap on Relaxing Remedy.</strong>"
        })

# Competitor leaderboard (aggregate top-3 across all 9 keywords)
agg = {}
for kw, g in ld['grids'].items():
    for ent, stats in g['summary'].items():
        if ent not in agg:
            agg[ent] = {'may_top3': 0, 'feb_top3': 0, 'may_cells': 0, 'kws_present': 0}
        agg[ent]['may_top3'] += stats.get('may_top3', 0) or 0
        agg[ent]['feb_top3'] += stats.get('feb_top3', 0) or 0
        agg[ent]['may_cells'] += stats.get('may_cells', 0) or 0
        if (stats.get('may_cells', 0) or 0) > 0:
            agg[ent]['kws_present'] += 1

ranked = sorted(
    [(ent, v) for ent, v in agg.items() if ent != CLIENT and v['may_top3'] > 0],
    key=lambda x: -x[1]['may_top3']
)

notes_by_competitor = {
    "Relaxing Remedy": "The closest AF-area massage competitor. Strong on the basic-commercial queries (massages, massage therapy) — head-to-head where the closest-suburb cells get won/lost.",
    "Total Muscle Therapy: Massage Pleasant Grove": "Active SEO/GBP work — worth watching closely.",
    "Soleil Spa": "Pleasant Grove multi-service spa (186 reviews). Mid-tier challenger.",
    "Natural Healing and Massage, American Fork": "AF-area massage challenger (75 reviews). Niche-positioned.",
    "Purify Wellness Center": "Closest FLOAT challenger. Only really competes on float queries — strong rank (~3–4) but BB’s review moat holds the #1.",
    "True REST Float Spa": "National float-only chain. Only competes on the 3 float queries; cell rank 4–7 — BB’s #1 vs True REST is the moat for float.",
    "MassageLuXe Pleasant Grove": "National massage-membership chain entrant in PG. Watch on ‘massage subscription’ specifically.",
    "Calming Touch Massage LLC": "Lehi-area challenger with 531 reviews (more than BB’s nearby Lehi pins). Strong on ‘massage therapist near me’ in Lehi cells.",
    "The Spa Lounge": "Pleasant Grove multi-service spa (828 reviews — heaviest review base of any local). Mid-tier on rank but social-proof leader.",
    "Hand & Stone Massage and Facial Spa": "National subscription chain (PG location), 328 reviews.",
    "Fashion Massage & Spa": "Lehi independent (64 reviews).",
    "Total Muscle Therapy: Massage Lehi Utah": "Lehi sibling of the PG location. Both moving up.",
    "Therapeutic Massage & Bodywork": "AF-area independent (155 reviews).",
}

leaderboard = [{
    "name": "Body Balance (you)",
    "is_client": True,
    "may_top3": agg[CLIENT]['may_top3'],
    "feb_top3": agg[CLIENT]['feb_top3'],
    "delta_top3": agg[CLIENT]['may_top3'] - agg[CLIENT]['feb_top3'],
    "kws_present": agg[CLIENT]['kws_present'],
    "note": "Top-3 spots across all 9 tracked Maps queries combined."
}]
for ent, v in ranked[:8]:
    leaderboard.append({
        "name": ent, "is_client": False,
        "may_top3": v['may_top3'], "feb_top3": v['feb_top3'],
        "delta_top3": v['may_top3'] - v['feb_top3'],
        "kws_present": v['kws_present'],
        "note": notes_by_competitor.get(ent, "")
    })

# Priorities for the next 90 days
priorities = [
    {
        "n": 1, "color": "#10b981",
        "title": "Defend the #1 American Fork pin + the float moat",
        "body": "BB is #1 in the immediate AF pin across float AND on ‘massage american fork’ at saturation (100% of cells, avg rank 1.85). The review moat (4.9★ × 406, +4 since Feb) holds the local pack. <strong>What we’ll do:</strong> 4 GBP Posts/mo (up from 3), 8 geotagged photos/mo, lock in the review-acquisition workflow, Q&A seeding for the top massage + float questions. <strong>Goal: hold #1 + cross 450 reviews by M3.</strong>"
    },
    {
        "n": 2, "color": "#1d5b8a",
        "title": "Capitalize on the massage subscription breakthrough",
        "body": "<strong>‘Massage subscription’ is the biggest mover in the new LD scans</strong> — top-3 cells jumped from 6 to 15 (+8 across 93 apples-to-apples cells). Subscriptions are recurring revenue — different economics than single-session bookings. <strong>What we’ll do:</strong> build <code>/massage-subscription-american-fork/</code> (membership-tier comparison, FAQ, schema), surface it via 2 GBP Posts/mo, add a blog cluster on ‘is a massage membership worth it’. Direct competitors: MassageLuXe PG + Hand & Stone (national membership chains) — BB’s local + 4.9★ is the edge."
    },
    {
        "n": 3, "color": "#6366f1",
        "title": "Fix the on-site click capture — the actual plateau lever",
        "body": "Sitewide GSC CTR is 0.80% (vs ~1.5% par for local services). Three pages illustrate the problem: <code>/about/</code> 0.04% CTR, <code>/pricing-and-membership/</code> 0.10%, <code>/upgrades/</code> 0.00%. <strong>What we’ll do:</strong> meta + title refresh on the top 22 bleeding-CTR URLs (Lever H), Service + FAQ schema on all 8 priority service pages (Lever F — currently 0/8 have it), sitewide NAP find-replace (372/372 pages use the chat phone), 84-URL cannibal cleanup batch (Lever B). The Q2 LCR jump from 1.57% → 2.98% says the first wave of this work is already biting."
    },
    {
        "n": 4, "color": "#8b5cf6",
        "title": "Unlock the 27 untracked services where BB ranks #1–#3",
        "body": "DataForSEO Maps SERPs show BB already ranking <strong>#1–#3 at the AF pin for 27 service queries we don’t currently track</strong> — without dedicated landing pages for most. The headline: <strong>lymphatic drainage massage (3,600 UT search volume)</strong> where BB ranks #1 with zero on-site page. <strong>What we’ll do:</strong> 6 new location-pages/mo at matrix gaps (Cedar Hills × deep tissue, PG × cupping, Lehi × Swedish — Lever C+D+E), <code>/myofascial-release/</code> + <code>/lymphatic-drainage-massage/</code> page builds (Lever G — lymphatic gated on Owner Ask #4). <strong>Goal: 12+ service×city matrix cells covered by M3 (baseline 3–5).</strong>"
    },
    {
        "n": 5, "color": "#f59e0b",
        "title": "Rebuild off-page authority — manual + earned, post-halt",
        "body": "On 2026-05-13 the automated off-page stack (SEO Neo / Aaron Gruenke) was halted across the HQDM book of business — it was working, but with rising algorithmic risk. <strong>What we’ll do:</strong> 2 manual citations/mo (AMTA + ABMP + Utah MTA + Utah County + Pleasant Grove Chambers, mom blogs, regional wellness directories), 1 digital-PR pitch/mo (postpartum massage angle M2 → athlete recovery angle M3), 1 partner-outreach touch/mo (yoga + chiro + doula + run-club cross-link partnerships). Backlink audit + disavow if needed. Slower than the halted stack but defensible — and DR-stable."
    },
]

# Owner asks (client-facing form)
owner_asks_client = [
    {"n": 1, "label": "Trigger-point page rewrite sign-off",
     "body": "Paul flagged the <code>/trigger-point-therapy/</code> page as referencing medical injections + dry needling — neither of which BB performs. We’ve drafted a rewrite focused on the soft-tissue trigger-point modality BB actually does. Need 15 min on a call to walk through the draft and confirm language before publish."},
    {"n": 2, "label": "Sitewide phone number canonical",
     "body": "Every page on bbmassageandfloat.com (372/372) currently shows the live-chat phone (855-XXX-5834). The GBP primary is the local 734-XXX-9798. This breaks NAP consistency and likely sends a soft ‘multiple businesses’ signal. Confirming: switch sitewide to the local 734 number, or keep the chat-routing 855 + add a ‘call directly’ secondary? (Recommendation: switch to local.)"},
    {"n": 3, "label": "Is cupping still on the menu?",
     "body": "There’s a <code>/cupping-massage/</code> URL returning 404 alongside a live <code>/modalities-techniques/cupping/</code> canonical. Either small-301 the dead URL or rebuild it if cupping is back. Quick yes/no — does BB still offer cupping?"},
    {"n": 4, "label": "Manual lymphatic drainage — yes or no?",
     "body": "BB ranks <strong>#1 at the AF pin for ‘lymphatic drainage massage’</strong> (3,600 UT/mo search volume) with NO on-site page for it. Before we build the page (highest-ROI single page-build of the quarter), we need to confirm: does BB perform the manual lymphatic drainage modality, or is the rank a Maps-attribution artifact?"},
    {"n": 5, "label": "16-KPI M3 close-out scorecard sign-off",
     "body": "We’ve drafted a 16-KPI scorecard for the M3 close-out (3 LD rank metrics, 2 GSC CTR metrics, 1 review-velocity metric, 1 CallRail quality metric, 4 page-build/cannibal metrics, etc.). The full list lives in the strategic dashboard. Want to confirm these are the right 16 — and lock the M3 targets — before we close Q2 against them."},
]

# Trend window (last 8 months for the client-report chart)
months_all = data['trend']['months']
sess_org_all = data['trend']['sessions']['organic']
# Organic-channel leads/month = the apples-to-apples lead-funnel total for Organic
# (booking + form + call/email intent — engagement events excluded). This is the same
# series the quarterly table sums for org_conv, so the chart and the table agree.
leads_monthly = [round(v or 0) for v in data['trend']['conversions']['organic']]

WINDOW = 8
start = max(0, len(months_all) - WINDOW)
trend_chart = {
    "months": months_all[start:],
    "sessions": sess_org_all[start:],
    "leads": leads_monthly[start:],
    "partial_note": "May 2026 is partial through ~22 days. Treat the rightmost data point as ‘where we are right now,’ not as a finished month. The dashed line on the chart signals this."
}

# Compose
client_report_v2 = {
    "version": "v10",
    "prepared_date": "2026-05-22",
    "as_of": "May 2026 update",
    "hero": {
        "client": "Body Balance Massage & Float",
        "tagline_main": "Q2 2026 update — what’s working, what’s next",
        "tagline_sub": "Single-pin massage & float studio · American Fork, UT · 4.9★ × 406 reviews"
    },
    "headline": {
        "lede": "Where Body Balance stands as of May 2026: <strong>organic visitors and organic leads are both up +18% year-over-year</strong> (Q1 2025 → Q1 2026 — the cleanest, uninflated comparison we can run), the <strong>lead capture rate has nearly doubled in Q2</strong> (1.57% → 2.98% on the first 6 weeks of Q2 data), and the <strong>float side of the business is at #1 across the entire local Maps grid</strong>. The strongest mover in the new map data is <strong>‘massage subscription’ — top-3 cells jumped from 6 to 15</strong> in 3 months, the biggest single-keyword gain in the scan set. The room-for-growth picture: generic ‘massage’ and ‘massage therapist’ searches saw slight slippage in the contested Pleasant Grove cells (Pleasant Grove competitors are pushing) and the site’s overall CTR sits below par at 0.80% — both are direct targets for the next 90 days."
    },
    "movement_tiles": movement_tiles,
    "quarterly_snapshot": quarterly_snapshot,
    "timeline": timeline,
    "trend_chart": trend_chart,
    "heatmap_keywords": heatmap_keywords,
    "search_cards": search_cards,
    "leaderboard": leaderboard,
    "ld_apples": ld_apples,
    "priorities_90d": priorities,
    "owner_asks_client": owner_asks_client,
    "_data_provenance": {
        "ga4": "GA4 property 332738090 · 18-month channel × month pull 2026-05-22",
        "gsc": "Google Search Console · bbmassageandfloat.com · 365d trailing 2025-05-22 → 2026-05-21",
        "localdominator": "36 CSV scans (9 keywords × 4 dates: Feb 23 / Mar 18 / Apr 18 / May 18, 2026) · 13×13 grid centered at the AF pin · 0.75-mile cell radius"
    }
}

data['client_report_v2'] = client_report_v2

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Wrote client_report_v2 block into data.json")
print(f"Q2 LCR = {q2_lcr}%  (Q1 = {q1_26['org_cr']}% → +{int(cvr_jump_pct)}%)")
print(f"\nLD apples-to-apples ({len(ld_apples)} keywords):")
for a in ld_apples:
    dt = a['top3_may'] - a['top3_feb']
    print(f"  {a['kw']:30} | n={a['n']:3} | top3 {a['top3_feb']:3} -> {a['top3_may']:3} ({dt:+d}) | avg {a['avg_feb']:.2f} -> {a['avg_may']:.2f} (dx {a['dx_mean']:+.2f})")
print(f"\nLeaderboard ({len(leaderboard)} rows):")
for r in leaderboard:
    star = '*' if r['is_client'] else ' '
    print(f"  {star} {r['name'][:40]:40} | may3={r['may_top3']:4} | feb3={r['feb_top3']:4} | dx={r['delta_top3']:+4} | kws={r['kws_present']}")
print(f"\nTrend chart window: {trend_chart['months'][0]} .. {trend_chart['months'][-1]} ({len(trend_chart['months'])} months)")
print(f"  Latest sess: {trend_chart['sessions'][-1]}  leads: {trend_chart['leads'][-1]}")
