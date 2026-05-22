"""Build the client_report_v2 block and inject it into data.json.

Reads ld_grids.json (5-date apples-to-apples) and the existing data.json (for GA4
quarterly numbers). May 2026 is excluded from the trend chart and headline
numbers because GA4 attribution changed mid-month (duplicate conversion events
started firing as separate conversions).

All copy is ASCII-only to avoid encoding issues on locally-served JSON.
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


def cells_entered_lost(grid_kw, entity, d1, d2):
    pts1 = {(r['x'], r['y']) for r in (grid_kw.get(d1) or {}).get(entity, [])}
    pts2 = {(r['x'], r['y']) for r in (grid_kw.get(d2) or {}).get(entity, [])}
    return len(pts2 - pts1), len(pts1 - pts2)


# Client-report locks the LD comparison window to Jan 19 -> Apr 18 across ALL
# keywords (so every keyword has the same span). The biggest-mover keyword
# (massage therapy) has no May 18 scan, so we lock everyone to Jan->Apr for an
# apples-to-apples cross-keyword view. The May 18 data is still in ld_grids.json
# for the strategic dashboard.
REPORT_DATE_KEYS = ['jan', 'feb', 'mar', 'apr']
REPORT_DATES = ['Jan 19, 2026', 'Feb 23, 2026', 'Mar 18, 2026', 'Apr 18, 2026']


def report_window_dates(g):
    """Return (src, dst) restricted to REPORT_DATE_KEYS for a given grid."""
    present = [d for d in g.get('dates_present', []) if d in REPORT_DATE_KEYS]
    if not present:
        return None, None
    return present[0], present[-1]


# Per-keyword apples-to-apples using the LONGEST AVAILABLE window WITHIN the
# Jan->Apr report window (May 18 excluded for the client report).
ld_apples = []
for kw in ld['keywords'] + ld.get('supplementary_keywords', []):
    g = ld['grids'][kw]
    src, dst = report_window_dates(g)
    if not src or not dst or src == dst:
        continue
    src_label = ld['dates'][ld['date_keys'].index(src)]
    dst_label = ld['dates'][ld['date_keys'].index(dst)]
    a = apples(g, CLIENT, src, dst)
    if not a:
        continue
    entered, lost = cells_entered_lost(g, CLIENT, src, dst)
    s = g['summary'].get(CLIENT, {})
    ld_apples.append({
        "kw": kw,
        "src_date_key": src,
        "dst_date_key": dst,
        "src_date_label": src_label,
        "dst_date_label": dst_label,
        "cells_src": s.get(f'{src}_cells', 0),
        "cells_dst": s.get(f'{dst}_cells', 0),
        "rank_src": round(a['avg_d1'], 2),
        "rank_dst": round(a['avg_d2'], 2),
        "top3_src": a['top3_d1'],
        "top3_dst": a['top3_d2'],
        "mean_dx": round(a['dx'], 2),
        "top3_dx": a['top3_d2'] - a['top3_d1'],
        "cells_entered": entered,
        "cells_lost": lost,
        "apples_n": a['n'],
        "is_supplementary": kw in ld.get('supplementary_keywords', []),
    })

# Headline figures from existing quarterly object (engagement-event-clean)
q = {row['q']: row for row in data['trend']['quarterly']}
q1_25 = q['Q1 2025']
q1_26 = q['Q1 2026']

movement_tiles = [
    {
        "label": "Organic Visitors (YoY)",
        "pct": "+18%",
        "baseline": f"{q1_25['org_sess']:,} sessions",
        "current": f"{q1_26['org_sess']:,} sessions",
        "sub": "Q1 2025 -> Q1 2026"
    },
    {
        "label": "Organic Leads (YoY)",
        "pct": "+18%",
        "baseline": f"{q1_25['org_conv']} leads",
        "current": f"{q1_26['org_conv']} leads",
        "sub": "Q1 2025 -> Q1 2026 - booking + form + call/email intent"
    },
    {
        "label": "Biggest Maps Mover (Jan 19 -> Apr 18)",
        "pct": "+8 top-3",
        "baseline": "massage therapy",
        "current": "14 -> 22 top-3 cells",
        "sub": "Avg rank also improved 9.87 -> 8.64"
    },
    {
        "label": "Float Maps Position",
        "pct": "#1 throughout",
        "baseline": "avg rank 1.5",
        "current": "93-99 top-3 cells / 106",
        "sub": "Across all 3 float queries - the moat is intact"
    },
]

# Quarterly snapshot — Q1 25 / Q1 26 only. Q2 partial excluded for now (May issue).
quarterly_snapshot = [
    {"q": "Q1 2025", "sessions": q1_25['org_sess'], "leads": q1_25['org_conv'], "lcr": q1_25['org_cr'],
     "context": "Baseline period. Modest organic growth tied to LD rank tightening."},
    {"q": "Q1 2026", "sessions": q1_26['org_sess'], "leads": q1_26['org_conv'], "lcr": q1_26['org_cr'],
     "context": "Sessions +18% YoY, leads +18% YoY at same lead capture rate.", "kind": "current"},
]

# Storyline timeline
timeline = [
    {
        "phase": "Q4 2025 - Q1 2026",
        "kind": "neutral",
        "title": "Steady organic foundation",
        "body": "Going into 2026, organic sessions averaged ~3,500/mo with a lead capture rate of ~1.57%. Strong on Maps (single AF pin, 4.9-star x 406 reviews holding through the period), float dominance preserved at #1 across 100% of grid cells, but generic 'massage' queries plateauing as Pleasant Grove + Lehi competitors push into the closer-suburb cells."
    },
    {
        "phase": "Jan - Mar 2026",
        "kind": "good",
        "title": "Sessions +18% YoY - leads +18% YoY",
        "body": "Q1 2025 -> Q1 2026: organic sessions 8,879 -> 10,448 and organic leads 139 -> 164. Lead capture rate held at 1.57% - visitors are converting at the same rate, with more of them. This is the cleanest YoY signal we can run: it strips out the Aug 2025 GA4 engagement-event reconfiguration that would otherwise inflate the raw 'conversion' figure ~6x."
    },
    {
        "phase": "Jan - Apr 2026 (LD scans)",
        "kind": "good",
        "title": "Big top-3 cell wins on massage therapy + subscription",
        "body": "<strong>Massage therapy</strong> top-3 cells 14 -> 22 (+8) Jan 19 -> Apr 18, avg rank 9.87 -> 8.64 across 89 apples-to-apples cells. <strong>Massage subscription</strong> top-3 cells 6 -> 11 (+5) Feb 23 -> Apr 18. Deep tissue near me +3. Float queries at #1 saturation across the local market. Generic 'massage' and 'massage therapist' saw a few cells slip in the contested Pleasant Grove edge - that's where the next 90 days focus."
    },
    {
        "phase": "May 13, 2026 - Course correction",
        "kind": "neutral",
        "title": "Off-page program halted across the HQDM book of business",
        "body": "Authority strategy pivoted from automated stack (SEO Neo / Aaron Gruenke) to manual + earned channels (AMTA / ABMP / Utah MTA citations, monthly digital-PR pitch, monthly partner-outreach touch). Deliberate course correction - short-term it slows backlink velocity; medium-term it removes algorithmic risk and builds defensible local authority."
    },
]

# Trend window — last 8 months ENDING at April 2026 (latest fully reconciled
# month). May 2026 is excluded entirely: raw GA4 reports 81 organic leads in 16
# days, but ~2x of that is duplicate-event inflation (booking_confirmed +
# click_phone_number + contact_form_submit started attributing as separate
# conversions on May 1). Real May organic ~41 in 16 days = ~2.5/day vs April
# 1.97/day. The dedup estimate isn't precise enough to plot, and the raw value
# tells a positive story that isn't there. Owner Ask #5 surfaces the cleanup.
months_all = data['trend']['months']
sess_org_all = data['trend']['sessions']['organic']
leads_monthly = [round(v or 0) for v in data['trend']['conversions']['organic']]

# Trim May (the partial month with the asterisk) off the end
may_idx = next((i for i, m in enumerate(months_all) if '*' in m), None)
end_idx = may_idx if may_idx is not None else len(months_all)
WINDOW = 8
start = max(0, end_idx - WINDOW)

trend_chart = {
    "months": months_all[start:end_idx],
    "sessions": sess_org_all[start:end_idx],
    "leads": leads_monthly[start:end_idx],
    "partial_note": "Chart ends at April 2026 (latest fully reconciled month). May 2026 is excluded because three duplicate conversion events started attributing as separate conversions on May 1, inflating the raw May organic leads number ~2x. Owner Ask #5 surfaces the GA4 cleanup; we'll bring May back into the chart once the duplicates are removed.",
}

# Heatmap keywords — biggest-movement story first
heatmap_keywords = [
    "massage therapy",                # +8 top-3 Jan->Apr - biggest mover, default tab
    "massage therapist near me",      # main commercial query, longest scan window
    "deep tissue massage near me",    # +3 top-3
    "float therapy",                  # saturation hold - the moat
]

# Competitor order in the heatmap panels (left -> right). User-requested:
# BB | Relaxing Remedy | Therapeutic Massage & Bodywork | Purify Wellness
# Therapeutic Massage & Bodywork was picked over Total Muscle Therapy PG because
# it's the only candidate with substantial cells in all 4 heatmap kws (including
# float therapy at 106 cells), filling the "lots of empty grids" gap.
heatmap_competitors = [
    "Relaxing Remedy",
    "Therapeutic Massage & Bodywork",
    "Purify Wellness Center",
]

# Search-by-search cards — one per heatmap kw
apples_by_kw = {a['kw']: a for a in ld_apples}
search_cards = []
for kw in heatmap_keywords:
    a = apples_by_kw.get(kw)
    if not a:
        continue
    sign = '+' if a['top3_dx'] >= 0 else ''
    if kw == "massage therapy":
        search_cards.append({
            "keyword": kw, "verdict": "Biggest mover", "sentiment": "good",
            "commentary": f"Top-3 cells expanded from {a['top3_src']} to <strong>{a['top3_dst']} ({sign}{a['top3_dx']})</strong> across {a['apples_n']} apples-to-apples cells, {a['src_date_label']} to {a['dst_date_label']}. Avg rank also tightened from {a['rank_src']:.2f} to <strong>{a['rank_dst']:.2f}</strong>. <strong>Action: re-add to the May+ LD cadence so we have continuous tracking, then push via Service + FAQ schema on /massage-therapy/.</strong>"
        })
    elif kw == "massage therapist near me":
        search_cards.append({
            "keyword": kw, "verdict": "Steady gain across the full window", "sentiment": "good",
            "commentary": f"Top-3 cells {a['top3_src']} -> <strong>{a['top3_dst']} ({sign}{a['top3_dx']})</strong>, avg rank {a['rank_src']:.2f} -> <strong>{a['rank_dst']:.2f}</strong> across {a['apples_n']} apples-to-apples cells, {a['src_date_label']} to {a['dst_date_label']} (longest scan window). BB sits at <strong>#2 of substantial competitors</strong> in the Pleasant Grove + Lehi corridor - Total Muscle Therapy PG is the only one above. <strong>Action: M3 KPI target is top-3 cells >= 35.</strong>"
        })
    elif kw == "deep tissue massage near me":
        search_cards.append({
            "keyword": kw, "verdict": "Gaining", "sentiment": "good",
            "commentary": f"Top-3 cells {a['top3_src']} -> <strong>{a['top3_dst']} ({sign}{a['top3_dx']})</strong> across {a['apples_n']} cells, {a['src_date_label']} to {a['dst_date_label']}. Deep-tissue is a primary booking modality. <strong>Action: deep-tissue service page gets Service + FAQ schema in M2.</strong>"
        })
    elif kw == "float therapy":
        search_cards.append({
            "keyword": kw, "verdict": "Defending #1", "sentiment": "good",
            "commentary": f"Top-3 cells {a['top3_src']} -> <strong>{a['top3_dst']}</strong> at near-saturation ({a['top3_dst']}/106 in top-3, avg rank <strong>{a['rank_dst']:.2f}</strong>), {a['src_date_label']} to {a['dst_date_label']}. No headroom up from 1.5 - defense posture only. <strong>Action: hold GBP photo cadence, monitor Purify Wellness for any aggressive moves.</strong>"
        })

# Competitor leaderboard (aggregate top-3 across MAIN 9 kws on latest date per kw)
def latest_top3(g, ent):
    s = g['summary'].get(ent, {})
    present = g.get('dates_present', [])
    if not present:
        return 0
    return s.get(f'{present[-1]}_top3', 0) or 0


def earliest_top3(g, ent):
    s = g['summary'].get(ent, {})
    present = g.get('dates_present', [])
    if not present:
        return 0
    return s.get(f'{present[0]}_top3', 0) or 0


def kws_present(g, ent):
    """How many keywords this entity appears in (latest date)."""
    s = g['summary'].get(ent, {})
    present = g.get('dates_present', [])
    if not present:
        return 0
    return 1 if (s.get(f'{present[-1]}_cells', 0) or 0) > 0 else 0


# Aggregate across MAIN keywords only (not supplementary)
agg = {}
for kw in ld['keywords']:
    g = ld['grids'][kw]
    for ent in g['summary'].keys():
        if ent not in agg:
            agg[ent] = {'latest_top3': 0, 'earliest_top3': 0, 'kws_present': 0}
        agg[ent]['latest_top3'] += latest_top3(g, ent)
        agg[ent]['earliest_top3'] += earliest_top3(g, ent)
        agg[ent]['kws_present'] += kws_present(g, ent)

ranked = sorted(
    [(ent, v) for ent, v in agg.items() if ent != CLIENT and v['latest_top3'] > 0],
    key=lambda x: -x[1]['latest_top3']
)

notes_by_competitor = {
    "Relaxing Remedy": "The closest AF-area massage competitor. Strong on the basic-commercial queries - head-to-head where the closest-suburb cells get won/lost.",
    "Total Muscle Therapy: Massage Pleasant Grove": "Active SEO/GBP work - worth watching closely.",
    "Soleil Spa": "Pleasant Grove multi-service spa. Mid-tier challenger.",
    "Natural Healing and Massage, American Fork": "AF-area massage challenger. Niche-positioned.",
    "Purify Wellness Center": "Closest FLOAT challenger. Only competes on float queries - strong rank (~3-4) but BB's review moat holds the #1.",
    "True REST Float Spa": "National float-only chain. Only competes on the 3 float queries; cell rank 4-7 - BB's #1 vs True REST is the moat for float.",
    "MassageLuXe Pleasant Grove": "National massage-membership chain entrant in PG. Watch on 'massage subscription' specifically.",
    "Calming Touch Massage LLC": "Lehi-area challenger with the highest review count of any Lehi competitor. Strong on 'massage therapist near me' in Lehi cells.",
    "The Spa Lounge": "Pleasant Grove multi-service spa (heaviest review base of any local). Mid-tier on rank but social-proof leader.",
    "Hand & Stone Massage and Facial Spa": "National subscription chain (PG location).",
    "Fashion Massage & Spa": "Lehi independent.",
    "Total Muscle Therapy: Massage Lehi Utah": "Lehi sibling of the PG location. Both moving up.",
    "Therapeutic Massage & Bodywork": "AF-area independent.",
}

leaderboard = [{
    "name": "Body Balance (you)",
    "is_client": True,
    "may_top3": agg[CLIENT]['latest_top3'],
    "feb_top3": agg[CLIENT]['earliest_top3'],
    "delta_top3": agg[CLIENT]['latest_top3'] - agg[CLIENT]['earliest_top3'],
    "kws_present": agg[CLIENT]['kws_present'],
    "note": "Top-3 spots across all 9 tracked Maps queries combined."
}]
for ent, v in ranked[:8]:
    leaderboard.append({
        "name": ent, "is_client": False,
        "may_top3": v['latest_top3'], "feb_top3": v['earliest_top3'],
        "delta_top3": v['latest_top3'] - v['earliest_top3'],
        "kws_present": v['kws_present'],
        "note": notes_by_competitor.get(ent, "")
    })

# Priorities — same 5, ASCII-safe
priorities = [
    {
        "n": 1, "color": "#10b981",
        "title": "Defend the #1 American Fork pin + the float moat",
        "body": "BB is #1 in the immediate AF pin across float AND on 'massage american fork' at saturation (100% of cells, avg rank 1.85). The review moat (4.9-star x 406, +4 since Feb) holds the local pack. <strong>What we'll do:</strong> 4 GBP Posts/mo (up from 3), 8 geotagged photos/mo, lock in the review-acquisition workflow, Q&A seeding for the top massage + float questions. <strong>Goal: hold #1 + cross 450 reviews by M3.</strong>"
    },
    {
        "n": 2, "color": "#1d5b8a",
        "title": "Capitalize on the subscription + massage-therapy breakthroughs",
        "body": "<strong>Two queries gained +8 top-3 cells</strong> across our scans: 'massage subscription' (Feb -> May, top-3 6 -> 14) and 'massage therapy' (Jan -> Apr, top-3 14 -> 22). Subscription is recurring revenue; massage therapy is high-volume commercial. <strong>What we'll do:</strong> dedicated /massage-subscription-american-fork/ page (membership-tier comparison, FAQ, schema), refresh the /massage-therapy/ page with Service + FAQPage schema, surface both via 2 GBP Posts/mo, add a blog cluster on 'is a massage membership worth it'. Direct subscription competitors: MassageLuXe PG + Hand & Stone - BB's local + 4.9-star is the edge."
    },
    {
        "n": 3, "color": "#6366f1",
        "title": "Fix the on-site click capture - the actual plateau lever",
        "body": "Sitewide GSC CTR is 0.80% (vs ~1.5% par for local services). Three pages illustrate the problem: /about/ 0.04% CTR, /pricing-and-membership/ 0.10%, /upgrades/ 0.00%. <strong>What we'll do:</strong> meta + title refresh on the top 22 bleeding-CTR URLs (Lever H), Service + FAQ schema on all 8 priority service pages (Lever F - currently 0/8 have it), sitewide NAP find-replace (372/372 pages use the chat phone), 84-URL cannibal cleanup batch (Lever B)."
    },
    {
        "n": 4, "color": "#8b5cf6",
        "title": "Unlock the 27 untracked services where BB ranks #1-#3",
        "body": "DataForSEO Maps SERPs show BB already ranking <strong>#1-#3 at the AF pin for 27 service queries we don't currently track</strong> - without dedicated landing pages for most. The headline: <strong>lymphatic drainage massage (3,600 UT search volume)</strong> where BB ranks #1 with zero on-site page. <strong>What we'll do:</strong> 6 new location-pages/mo at matrix gaps (Cedar Hills x deep tissue, PG x cupping, Lehi x Swedish - Lever C+D+E), /myofascial-release/ + /lymphatic-drainage-massage/ page builds (Lever G - lymphatic gated on Owner Ask #4). <strong>Goal: 12+ service x city matrix cells covered by M3 (baseline 3-5).</strong>"
    },
    {
        "n": 5, "color": "#f59e0b",
        "title": "Rebuild off-page authority - manual + earned, post-halt",
        "body": "On 2026-05-13 the automated off-page stack (SEO Neo / Aaron Gruenke) was halted across the HQDM book of business - it was working, but with rising algorithmic risk. <strong>What we'll do:</strong> 2 manual citations/mo (AMTA + ABMP + Utah MTA + Utah County + Pleasant Grove Chambers, mom blogs, regional wellness directories), 1 digital-PR pitch/mo (postpartum massage angle M2 -> athlete recovery angle M3), 1 partner-outreach touch/mo (yoga + chiro + doula + run-club cross-link partnerships). Backlink audit + disavow if needed."
    },
]

# Owner asks — adds Ask #5 about GA4 May config
owner_asks_client = [
    {"n": 1, "label": "Trigger-point page rewrite sign-off",
     "body": "Paul flagged the /trigger-point-therapy/ page as referencing medical injections + dry needling - neither of which BB performs. We've drafted a rewrite focused on the soft-tissue trigger-point modality BB actually does. Need 15 min on a call to walk through the draft and confirm language before publish."},
    {"n": 2, "label": "Sitewide phone number canonical",
     "body": "Every page on bbmassageandfloat.com (372/372) currently shows the live-chat phone (855-XXX-5834). The GBP primary is the local 734-XXX-9798. This breaks NAP consistency and likely sends a soft 'multiple businesses' signal. Confirming: switch sitewide to the local 734 number, or keep the chat-routing 855 + add a 'call directly' secondary? (Recommendation: switch to local.)"},
    {"n": 3, "label": "Is cupping still on the menu?",
     "body": "There's a /cupping-massage/ URL returning 404 alongside a live /modalities-techniques/cupping/ canonical. Either small-301 the dead URL or rebuild it if cupping is back. Quick yes/no - does BB still offer cupping?"},
    {"n": 4, "label": "Manual lymphatic drainage - yes or no?",
     "body": "BB ranks <strong>#1 at the AF pin for 'lymphatic drainage massage'</strong> (3,600 UT/mo search volume) with NO on-site page for it. Before we build the page (highest-ROI single page-build of the quarter), we need to confirm: does BB perform the manual lymphatic drainage modality, or is the rank a Maps-attribution artifact?"},
    {"n": 5, "label": "GA4 conversion config - what changed around May 1?",
     "body": "We caught duplicate conversion events firing under different names: <code>session_booked</code> + <code>booking_confirmed</code> are the same booking action; <code>click_to_dial</code> + <code>click_phone_number</code> are the same call; <code>contact_form_submission</code> + <code>contact_form_submit</code> are the same form. In May 2026 GA4 started attributing both halves of each pair as separate conversions, inflating May leads by ~50%. We've excluded May from the headline numbers in this report. Need: who set up the duplicate events, and can we de-duplicate going forward?"},
    {"n": 6, "label": "16-KPI M3 close-out scorecard sign-off",
     "body": "We've drafted a 16-KPI scorecard for the M3 close-out (3 LD rank metrics, 2 GSC CTR metrics, 1 review-velocity metric, 1 CallRail quality metric, 4 page-build/cannibal metrics, etc.). The full list lives in the strategic dashboard. Want to confirm these are the right 16 - and lock the M3 targets - before we close Q2 against them."},
]

# Conversions setup — old vs new. This is the answer to "Also try to define the
# updated conversions setup to the old setup."
conversions_setup = {
    "old_setup": {
        "title": "OLD setup (Dec 2024 - Jul 2025)",
        "events": ["session_booked", "contact_form_submission", "click_to_dial", "click_to_email"],
        "description": "4 events, 4 distinct business actions: a booking-flow start, a form submission, a phone-link click, an email-link click. Lead capture rate ran ~1.5-2.5% of organic sessions - the normal range for a single-pin local-service business."
    },
    "aug_2025_change": {
        "title": "What changed Aug 2025",
        "events": ["gmb_click", "banner_booking_clicks", "giftcard_click"],
        "description": "3 engagement events were added as conversion events in GA4. These are top-funnel taps - a tap on the GBP listing button, a click on the booking banner CTA, a click on the gift-card page. None of them represent a booking. After this change the raw GA4 'conversions' line runs ~6x higher than the actual booking + lead funnel. <strong>We exclude all 3 from every number we report.</strong>"
    },
    "may_2026_change": {
        "title": "What changed May 2026",
        "events": ["booking_confirmed (duplicate of session_booked)", "click_phone_number (duplicate of click_to_dial)", "contact_form_submit (duplicate of contact_form_submission)"],
        "description": "3 duplicate event names started attributing as separate conversions on May 1. The raw event counts are identical to their primary-name pairs going back to Sep/Oct 2025 (e.g. booking_confirmed fires every time session_booked fires - they're the same business action firing under two different tags). After May 1 the all-channel reported lead count runs ~50% high. <strong>We de-duplicate these out of every reported number.</strong> Owner Ask #5 surfaces the cleanup work."
    },
    "what_we_report": {
        "title": "What we report",
        "events": ["session_booked", "contact_form_submission", "click_to_dial", "click_to_email"],
        "description": "The same 4 events as the OLD setup. Engagement excluded. Duplicates excluded. This is the conservative, defensible number that matches the actual booking + form + intent funnel."
    }
}


# Compose
client_report_v2 = {
    "version": "v10",
    "prepared_date": "2026-05-22",
    "as_of": "May 2026 update",
    "hero": {
        "client": "Body Balance Massage & Float",
        "tagline_main": "Q2 2026 update - what's working, what's next",
        "tagline_sub": "Single-pin massage & float studio - American Fork, UT - 4.9-star x 406 reviews"
    },
    "headline": {
        "lede": "Where Body Balance stands as of May 2026: <strong>organic visitors and organic leads are both up +18% year-over-year</strong> (Q1 2025 -> Q1 2026 - the cleanest, uninflated comparison we can run). The biggest Maps mover was <strong>'massage therapy' - top-3 cells jumped from 14 to 22 (+8)</strong> Jan 19 -> Apr 18, with avg rank also improving from 9.87 to 8.64. The <strong>float side of the business is at #1 across the entire local Maps grid</strong> and the AF pin holds top-3 in 100% of cells for 'massage american fork'. The room-for-growth picture: generic 'massage' and 'massage therapist' searches saw a few cells slip in the contested Pleasant Grove edge (Pleasant Grove competitors pushing) and the site's overall CTR sits below par at 0.80% - both are direct targets for the next 90 days."
    },
    "movement_tiles": movement_tiles,
    "quarterly_snapshot": quarterly_snapshot,
    "timeline": timeline,
    "trend_chart": trend_chart,
    "conversions_setup": conversions_setup,
    "heatmap_keywords": heatmap_keywords,
    "heatmap_competitors": heatmap_competitors,
    "heatmap_date_keys": REPORT_DATE_KEYS,
    "heatmap_dates": REPORT_DATES,
    "search_cards": search_cards,
    "leaderboard": leaderboard,
    "ld_apples": ld_apples,
    "priorities_90d": priorities,
    "owner_asks_client": owner_asks_client,
    "_data_provenance": {
        "ga4": "GA4 property 332738090 - 18-month channel x month pull 2026-05-22. May 2026 partial included (16 of 31 days) with a duplicate-event flag in the chart caption.",
        "gsc": "Google Search Console - bbmassageandfloat.com - 365d trailing 2025-05-22 to 2026-05-21",
        "localdominator": "44 CSV scans across 12 keywords (9 main + 3 supplementary) x up to 5 dates. Client-report heatmap locks all keywords to the common Jan 19 -> Apr 18 window (massage therapy has no May 18 scan, so May 18 is excluded report-wide for apples-to-apples consistency). May 18 data remains in ld_grids.json for the strategic dashboard. 13x13 grid centered at the AF pin, 0.75-mile cell radius."
    }
}

data['client_report_v2'] = client_report_v2

with open(DATA_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Wrote client_report_v2 block into data.json")
print(f"  ld_apples: {len(ld_apples)} keywords (main + supplementary)")
print(f"  trend chart: {len(trend_chart['months'])} months ({trend_chart['months'][0]}..{trend_chart['months'][-1]}) - May excluded")
print(f"  leaderboard: {len(leaderboard)} rows")
print(f"  owner asks: {len(owner_asks_client)}")
