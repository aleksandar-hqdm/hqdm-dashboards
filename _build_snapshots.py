"""Generate the normalized `snapshot` block in each client's data.json for the
single-screen "Client" report (rendered by assets/js/snapshot.js).

Engine auto-computes the quantitative parts (8-month line, quarterly chart, the 3
movement boxes, the maps-keyword table from `per_keyword`, the competitor table from
`ld_leaderboard`) from fields the client already has. Per-client CLIENTS config supplies
the narrative (exec, chips, focus, window labels) + any field-source overrides.

Run:  python _build_snapshots.py [slug ...]   (no args = all configured clients)
"""
import json
import os
import sys

ROOT = 'C:/tmp/hqdm-dashboards/clients'
MONTH_NUM = {m: i + 1 for i, m in enumerate(
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])}


# ---------------- generic helpers ----------------
def parse_month(lbl):
    """'May 2026*' / 'Dec 2024' / 'Dec 24' -> (year, month, is_partial)."""
    partial = '*' in lbl
    s = lbl.replace('*', '').strip()
    parts = s.split()
    mon = MONTH_NUM.get(parts[0][:3])
    yr = int(parts[1]) if len(parts) > 1 else None
    if yr is not None and yr < 100:
        yr += 2000
    return yr, mon, partial


def midx(months, year, mon):
    for i, m in enumerate(months):
        y, mm, _ = parse_month(m)
        if y == year and mm == mon:
            return i
    return None


def pct(cur, prev):
    return round((cur - prev) / prev * 100) if prev else None


def fmt_pct(v):
    return '—' if v is None else ('+' if v > 0 else '') + str(v) + '%'


def cls_of(v, good_is_positive=True):
    if v is None:
        return 'muted'
    if v == 0:
        return 'muted'
    pos = v > 0 if good_is_positive else v < 0
    return 'pos' if pos else 'neg'


def win_sum(arr, a, b):
    return sum(x or 0 for x in arr[a:b])


def short_q(lbl):
    s = lbl.split(' (')[0].strip()
    for y in ('2024', '2025', '2026'):
        s = s.replace(y, "'" + y[2:])
    return s.replace(" current", "").replace(" est.", "").strip()


# ---------------- builders ----------------
def build_line(months, vis, leads, leads_label, vis_label='Organic visitors', title=None, caption=None, window=8):
    m = months[-window:]
    pidx = next((i for i, x in enumerate(m) if '*' in x), -1)
    short = [x.replace(' 20', " '").replace('*', '*') for x in m]
    return {
        'labels': short, 'visitors': vis[-window:], 'leads': leads[-window:],
        'visitors_label': vis_label, 'leads_label': leads_label,
        'partial_index': pidx, 'title': title or 'Organic Performance · Monthly',
        'caption': caption,
    }


def build_quarters(quarterly, leads_label='Leads', vis_label='Visitors', title='By Quarter · Visitors & Leads'):
    kept = [q for q in quarterly if 'est' not in q.get('q', '').lower()]
    labels = [short_q(q.get('q', '')) for q in kept]
    vis = [q.get('org_sess') for q in kept]
    leads = [q.get('org_conv') for q in kept]
    pidx = -1
    for i, q in enumerate(kept):
        lbl = q.get('q', '')
        if '*' in lbl or q.get('kind') == 'current' or 'partial' in lbl.lower():
            pidx = i
    return {'labels': labels, 'visitors': vis, 'leads': leads, 'visitors_label': vis_label,
            'leads_label': leads_label, 'partial_index': pidx, 'title': title}


def build_boxes(months, vis, leads, yoy=None, reading=None, lead_word='Leads', visitors_only=False):
    """3 boxes: YoY (override via `yoy` dict), last 6mo vs prior 6mo, last 90d vs prior 90d."""
    n = len(months)
    box90 = {'win': 'Last 90 Days', 'cmp': 'vs prior 90 days',
             'v': pct(win_sum(vis, n - 3, n), win_sum(vis, n - 6, n - 3)),
             'l': pct(win_sum(leads, n - 3, n), win_sum(leads, n - 6, n - 3))}
    box6 = {'win': 'Last 6 Months', 'cmp': 'vs prior 6 mo',
            'v': pct(win_sum(vis, n - 6, n), win_sum(vis, n - 12, n - 6)),
            'l': pct(win_sum(leads, n - 6, n), win_sum(leads, n - 12, n - 6))}
    # YoY
    if yoy and yoy.get('v') is not None:
        yv, yl, extra = yoy['v'], yoy.get('l'), yoy.get('extra')
        ycmp = yoy.get('cmp', 'vs last year')
    else:
        i25 = [midx(months, 2025, mm) for mm in (4, 5, 6)]
        i26 = [midx(months, 2026, mm) for mm in (4, 5)]
        i25 = [i for i in i25 if i is not None]
        i26 = [i for i in i26 if i is not None]
        if i25 and i26:
            yv = pct(sum(vis[i] for i in i26) / len(i26), sum(vis[i] for i in i25) / len(i25))
            yl = pct(sum(leads[i] for i in i26) / len(i26), sum(leads[i] for i in i25) / len(i25))
        else:
            yv = yl = None
        extra = None
        ycmp = 'vs Q2 2025'
    boxYoY = {'win': 'Year over Year', 'cmp': ycmp, 'v': yv, 'l': yl, 'extra': extra}

    def clamp(p):
        # Suppress artifact-level deltas (e.g. conversion-tracking ramp -> +2400% YoY leads).
        return None if (p is None or abs(p) > 300) else p

    def mk(b):
        v, l = clamp(b['v']), clamp(b['l'])
        rows = [{'m': 'Visitors', 'd': fmt_pct(v), 'cls': cls_of(v)}]
        if not visitors_only:
            rows.append({'m': lead_word, 'd': fmt_pct(l), 'cls': cls_of(l)})
        lead_ok = True if visitors_only else (l if l is not None else 0) >= 0
        kind = 'good' if (v or 0) >= 0 and lead_ok else 'watch'
        out = {'win': b['win'], 'cmp': b['cmp'], 'kind': kind, 'rows': rows}
        if b.get('extra') and not visitors_only:
            out['extra'] = b['extra']
        return out

    return [mk(boxYoY), mk(box6), mk(box90)], reading


def arrow(delta_avg):
    if delta_avg is None or delta_avg == 0:
        return ''
    return 'arrow-up' if delta_avg > 0 else 'arrow-dn'


def build_kw_table(per_keyword, window, first='feb', last='may', title='Maps Movement · Top Keywords', limit=6, note_html=None):
    rows = []
    items = []
    for k in per_keyword:
        fa, la = k.get(f'{first}_avg'), k.get(f'{last}_avg')
        ft, lt = k.get(f'{first}_top3'), k.get(f'{last}_top3')
        if la is None:
            continue
        dtop = (lt or 0) - (ft or 0)
        davg = round(fa - la, 2) if (fa is not None and la is not None) else None
        items.append((k['keyword'], fa, la, ft, lt, dtop, davg))
    import re
    items.sort(key=lambda x: -(x[4] or 0))
    for kw, fa, la, ft, lt, dtop, davg in items[:limit]:
        kw_disp = re.sub(r'\s*\(.*?\)', '', kw).strip()
        avg_cell = (f'<span class="{arrow(davg)}">{fa:.2f} → <strong>{la:.2f}</strong></span>'
                    if fa is not None else f'<strong>{la:.2f}</strong>')
        top_cell = (f'{ft} → <strong>{lt if lt is not None else "—"}</strong>'
                    if ft is not None else f'<strong>{lt if lt is not None else "—"}</strong>')
        rows.append({'cells': [
            {'t': kw_disp},
            {'t': avg_cell},
            {'t': top_cell},
            {'t': ('+' if dtop > 0 else '') + str(dtop), 'c': 'pos' if dtop >= 0 else 'neg'},
        ]})
    return {'enabled': True, 'title': title, 'window': window,
            'headers': ['Search', 'Avg position', 'Top-3 map spots', 'Change'], 'rows': rows, 'note_html': note_html}


def build_comp_table(leaderboard, window, note_html=None, title='Competitor Movement · Maps', limit=6,
                     name_clean=True):
    import re
    items = sorted(leaderboard, key=lambda r: -(r.get('may_top3') or 0))
    client = next((r for r in items if r.get('is_client')), None)
    top = items[:limit]
    if client and client not in top:
        top = items[:limit - 1] + [client]
        top.sort(key=lambda r: -(r.get('may_top3') or 0))
    rows = []
    for r in top:
        nm = r['name']
        if name_clean and not r.get('is_client'):
            nm = re.sub(r',?\s*(Inc\.?|LLC|Corp\.?)$', '', nm)
        if r.get('is_client'):
            nm += ' (you)'
        d = r.get('delta_top3')
        # client gain = good; competitor gain = threat (neg styling); competitor loss = muted
        if r.get('is_client'):
            dcls = 'pos' if (d or 0) >= 0 else 'neg'
        else:
            dcls = 'neg' if (d or 0) > 0 else 'muted'
        avg = r.get('may_avg_rank')
        rows.append({'me': bool(r.get('is_client')), 'cells': [
            {'t': nm},
            {'t': f'{avg:.1f}' if avg is not None else '—'},
            {'t': str(r.get('may_top3'))},
            {'t': ('+' if (d or 0) > 0 else '') + str(d), 'c': dcls},
        ]})
    return {'enabled': True, 'title': title, 'window': window,
            'headers': ['Business', 'Avg rank', 'Top-3 spots', 'Change'], 'rows': rows, 'note_html': note_html}


# ---------------- per-client config ----------------
EYEBROW = 'HQDM Search Intelligence · Prepared by Aleksandar Spasevski'

CLIENTS = {
    'professional-movers': {
        'short_name': 'Professional Movers',
        'title': 'Professional Movers.com',
        'subtitle': 'Q3 2026 · Walled Lake, MI · Client Snapshot',
        'footer': 'Client snapshot · Q3 2026 · Prepared by Aleksandar Spasevski',
        'leads_label': 'Organic leads',
        'exec_html': (
            "<p>Organic search traffic has come down hard over the past year (organic clicks "
            "<strong>−74% since August 2025</strong>), but the leads that matter held through the drop. "
            "Visitors who arrive through your Google Business <em>Website</em> button submit quote forms at "
            "<strong>~17.5% — nearly double the 9.2%</strong> from regular organic search — and that high-intent "
            "path never dipped. Year over year, organic visits are <strong>−24%</strong> but your "
            "<strong>conversion rate is up (+11%)</strong>, so the site is converting what it gets more efficiently. "
            "On Maps you hold coverage in <strong>3 of 8 surrounding metros</strong> — real room to grow. "
            "The Q3 plan compounds the channel already winning: claim two more Google Business pins, fix the "
            "templated city pages that triggered the ranking drop, and rebuild the earned-link profile.</p>"),
        'chips': [
            {'v': '−74%', 'l': 'organic clicks (12-mo)', 'watch': True},
            {'v': '17.5%', 'l': 'GBP→site lead rate', 'good': True},
            {'v': '+11%', 'l': 'conversion rate YoY', 'good': True},
            {'v': '3 / 8', 'l': 'metros on Maps', 'watch': True},
        ],
        'maps_window': 'Feb → May 2026 · 6 tracked searches',
        'maps_note': ("You hold strong top-3 coverage on the core “movers / moving company” searches; movement has "
                      "softened slightly this period — defend and re-extend."),
        'comp_window': 'Across 6 tracked searches · to May 2026',
        'comp_note': ("By top-3 footprint you're <strong>#2 in the market</strong> (behind Two Men &amp; a Truck); by "
                      "average rank you're #3 (Bos and Moving Made Easy rank tighter). The one to watch is "
                      "<strong>Affordable Movers (+59)</strong>. Lower avg rank is better."),
        'boxes_reading': ("Traffic is still below last year, but conversion rate is up and the Google-Business lead "
                          "path is at an 18-month high — the next 90 days lean into that channel."),
        'focus': [
            {'title': 'Expand Maps presence', 'color': '#10b981',
             'body': 'Claim + manage the Detroit Woodward and Rochester Google Business pins and add Driving-Direction pins to close the metros a single Walled Lake pin can’t reach.'},
            {'title': 'Page surgery on city pages', 'color': '#1d5b8a',
             'body': 'Clean up the templated suburb pages that triggered the ranking demotion, consolidate thin pages, and rebuild the ones worth keeping with real depth.'},
            {'title': 'Rebuild the earned-link profile', 'color': '#6366f1',
             'body': 'Replace the hollowed-out automated link stack with local PR, citations, and genuine local links to restore authority.'},
            {'title': 'Content + conversion tracking', 'color': '#f59e0b',
             'body': 'Lock down conversion tracking, refresh top blog posts, and add commercial-intent articles that feed the quote form.'},
        ],
        'maps_first': 'feb', 'maps_last': 'may',
    },

    'elev8-recovery': {
        'short_name': 'Elev8 Centers', 'title': 'Elev8 Centers',
        'subtitle': 'Q2 2026 · NYC · Harlem pin · Client Snapshot',
        'footer': 'Client snapshot · Q2 2026 · Prepared by Aleksandar Spasevski',
        'exec_html': ("<p>Your Harlem pin is the <strong>only NYC addiction-treatment provider that gained ground on all eight "
                      "tracked Maps searches</strong> last quarter — <strong>+787 grid positions with zero losses</strong> — and you own the "
                      "Harlem-neighborhood searches outright (positions 1–2). Organic sessions stepped back in April–May after a strong "
                      "winter, but the Maps position is durable. The next leg is structural: your homepage is trying to rank for nine "
                      "different commercial searches at once. Splitting it into dedicated pages, building borough hubs, and adding "
                      "MAT and dual-diagnosis service hubs unlocks page-one candidates you don't have today.</p>"),
        'chips': [{'v': '+787', 'l': 'grid positions gained', 'good': True}, {'v': '3 / 8', 'l': 'Maps searches owned', 'good': True},
                  {'v': '#1', 'l': 'NYC pin on Maps', 'good': True}, {'v': 'pos 1.2–2.1', 'l': 'Harlem organic', 'good': True}],
        'maps_window': 'Jan 27 → Apr 22, 2026 · 8 tracked searches',
        'comp_window': 'Across 8 tracked searches · Jan 27 → Apr 22, 2026',
        'comp_note': ("You're <strong>#1 on Maps</strong> across these searches (425 top-3 cells, +105) and gained more than any "
                      "competitor; Ascendant is the nearest challenger (+88). Lower avg rank is better."),
        'boxes_reading': ("Organic sessions stepped back in April–May (May is a partial month). Conversion tracking matured in "
                          "mid-2025, so the year-over-year lead comparison isn't meaningful and is shown as —."),
        'focus': [
            {'title': 'Split the homepage', 'color': '#1d5b8a', 'body': 'Break the single overloaded homepage into dedicated pages for the nine commercial NYC searches it’s straining to rank for.'},
            {'title': 'Borough organic hubs', 'color': '#10b981', 'body': 'Build borough-level hubs and fix the Queens Google Business signal to capture searches bleeding at page 5+.'},
            {'title': 'MAT + dual-diagnosis hubs', 'color': '#6366f1', 'body': 'Stand up service hubs for MAT and dual-diagnosis with commercial pull-through from the blog.'},
            {'title': 'Consolidate /suburb/ + GBP', 'color': '#f59e0b', 'body': 'Consolidate thin /suburb/ pages, deepen the Upper East Side page, and close the Google Business audit fixes.'},
        ],
    },

    'urban-recovery': {
        'short_name': 'Urban Recovery', 'title': 'Urban Recovery',
        'subtitle': 'Q2 2026 · Brooklyn · Red Hook pin · Client Snapshot',
        'footer': 'Client snapshot · Q2 2026 · Prepared by Aleksandar Spasevski',
        'exec_html': ("<p>Urban Recovery <strong>held its Red Hook Maps grid while the market churned hard around it</strong> — you're the "
                      "only Brooklyn addiction-treatment pin to gain net top-10 coverage this period (+21 cells across eight priority searches), "
                      "holding 92.8% of the 1,344-cell grid. Your brand engine is strong (1,357 clicks at position 2.3). The drag is on-site: "
                      "thousands of high-intent service-page queries rank on page one but convert at near-zero. Rebuilding those service pages, "
                      "fixing the homepage business-info mismatch, and a Google Business depth push are the priorities.</p>"),
        'chips': [{'v': '92.8%', 'l': 'Maps grid held', 'good': True}, {'v': '+21', 'l': 'top-10 cells vs churn', 'good': True},
                  {'v': 'pos 2.3', 'l': 'brand search', 'good': True}, {'v': '9,269', 'l': 'kws leaking CTR', 'watch': True}],
        'maps_window': 'Jan 27 → Apr 22, 2026 · 8 tracked searches',
        'comp_window': 'Across 8 tracked searches · Jan 27 → Apr 22, 2026',
        'comp_note': ("Detox &amp; Drug/Alcohol Recovery edges you on raw footprint (1,217 vs 1,113 top-3 cells), but you're the only "
                      "Brooklyn pin that gained net coverage this period (+21). Lower avg rank is better."),
        'boxes_reading': ("May is a partial month. Conversion tracking matured in 2025, so the year-over-year lead comparison isn't "
                          "meaningful and is shown as —."),
        'focus': [
            {'title': 'GBP depth surge', 'color': '#10b981', 'body': 'Defend Red Hook and diffuse outward with a Google Business depth push — posts, photos, services, Q&A.'},
            {'title': 'Service-page rebuild', 'color': '#1d5b8a', 'body': 'Rebuild the high-intent service pages that rank but don’t convert, and fix the homepage business-info mismatch.'},
            {'title': 'Cross-borough location pages', 'color': '#6366f1', 'body': 'Upgrade cross-borough location pages and clean up the thin, data-driven ones.'},
            {'title': 'Counter category drift', 'color': '#f59e0b', 'body': 'Push inpatient-rehab framing to counter the nursing-facility category drift pulling on those rankings.'},
        ],
    },

    'niagara-recovery': {
        'short_name': 'Niagara Recovery', 'title': 'Niagara Recovery',
        'subtitle': 'Q2 2026 · Western NY · Newfane pin · Client Snapshot',
        'footer': 'Client snapshot · Q2 2026 · Prepared by Aleksandar Spasevski',
        'exec_html': ("<p>Niagara Recovery <strong>owns its home market</strong> — 100% of Maps cells within 15 miles of the Newfane pin "
                      "rank #1–2 across alcohol-rehab, detox, and addiction searches, and branded search converts at a 17% click rate. "
                      "The pin gave back some outer-ring coverage this period as the grid widened (−55 top-3 cells), and non-branded clicks "
                      "pulled back sharply. The plan: a brand-canonical fix sitewide, a Google Business service-area swap with a photo and "
                      "posts cadence, service-page consolidation, and a location-page rebuild.</p>"),
        'chips': [{'v': '100%', 'l': 'cells 0–15mi of pin', 'good': True}, {'v': '#1–2', 'l': 'home-market Maps', 'good': True},
                  {'v': '17.1%', 'l': 'branded search CTR', 'good': True}, {'v': '−87%', 'l': 'non-branded clicks 30d', 'watch': True}],
        'maps_window': 'Feb 22 → Apr 30, 2026 · 9 tracked searches',
        'comp_window': 'Across 9 tracked searches · Feb 22 → Apr 30, 2026',
        'comp_note': ("You're #1 by a wide margin (759 top-3 cells vs 230 for the next provider), though you gave back some outer-ring "
                      "coverage this period (−55) as the grid widened. Lower avg rank is better."),
        'boxes_reading': ("May is a partial month. Conversion tracking matured in 2025, so the year-over-year lead comparison isn't "
                          "meaningful and is shown as —."),
        'focus': [
            {'title': 'Brand-canonical sitewide', 'color': '#1d5b8a', 'body': 'Fix the brand-canonical signal across the site so the brand engine isn’t fighting itself.'},
            {'title': 'GBP service-area swap', 'color': '#10b981', 'body': 'Swap the Google Business service area off the capped ZIP set and add a photo blitz + posting cadence.'},
            {'title': 'Service-page consolidation', 'color': '#6366f1', 'body': 'Consolidate overlapping service pages, set a schema floor, and rewrite the three priority pages.'},
            {'title': 'Location-page architecture', 'color': '#f59e0b', 'body': 'Build, upgrade, or redirect location pages into a clean architecture that supports the outer-ring towns.'},
        ],
    },

    'surfpoint-recovery': {
        'short_name': 'Surfpoint Recovery', 'title': 'Surfpoint Recovery',
        'subtitle': 'Q2 2026 · Coney Island · South Brooklyn · Client Snapshot',
        'footer': 'Client snapshot · Q2 2026 · Prepared by Aleksandar Spasevski',
        'exec_html': ("<p>Surfpoint is <strong>punching above its website</strong>. Your Google Business listing is the standout asset — average "
                      "Maps rank <strong>1.47 with 96% top-3 coverage</strong> on the core alcohol-rehab search, a 4.8★ / 120-review profile "
                      "(up 29 reviews in 16 days), and Google-Business clicks convert at 2.53% — roughly 8× the rest of organic. The website is "
                      "the bottleneck: search impressions are down 79% as architecture issues and over-built pages drag. The plan cleans up the "
                      "site, rebuilds the homepage and service pages, and protects the Google Business lead.</p>"),
        'chips': [{'v': '1.47', 'l': 'Maps rank · 96% top-3', 'good': True}, {'v': '2.53%', 'l': 'GBP conv (8× organic)', 'good': True},
                  {'v': '4.8★ / 120', 'l': 'reviews (+29 in 16d)', 'good': True}, {'v': '−79%', 'l': 'search impressions', 'watch': True}],
        'maps_window': '5 scans · Oct 2025 → May 2026 · 8 tracked searches',
        'comp_window': 'Across tracked searches · Oct 2025 → May 2026',
        'comp_note': ("Tight three-way race at the top — Genesis Detox and Under Angel's Wings edge you on raw cells (136 each vs your 130), "
                      "but your average rank (1.47) is the best in the set and still improving. Lower avg rank is better."),
        'boxes_reading': ("May is a partial month. Conversion tracking matured in 2025, so the year-over-year lead comparison isn't "
                          "meaningful and is shown as —."),
        'focus': [
            {'title': 'Site architecture cleanup', 'color': '#1d5b8a', 'body': 'Fix the structural issues dragging search impressions — the execution layer comes first.'},
            {'title': 'Homepage + service rebuild', 'color': '#10b981', 'body': 'Rebuild the homepage and service pages and refactor interlinking so the site matches the Google Business strength.'},
            {'title': 'GBP optimization', 'color': '#6366f1', 'body': 'Take the Google Business profile beyond reviews — depth, attributes, and closing audit-risk items.'},
            {'title': 'Citations + disavow', 'color': '#f59e0b', 'body': 'Disavow first, then build citations and earned links on a clean foundation.'},
        ],
    },

    'arms-acres': {
        'short_name': 'Arms Acres', 'title': 'Arms Acres',
        'subtitle': 'Q2 2026 · Carmel NY + NYC-metro · Client Snapshot',
        'footer': 'Client snapshot · Q2 2026 · Prepared by Aleksandar Spasevski',
        'exec_html': ("<p>Arms Acres' Inpatient Carmel pin <strong>dominates Putnam County</strong> — 100% top-20 coverage across the high-intent "
                      "searches and still improving scan over scan (drug-rehab +10 cells, alcohol-rehab-near-me +8). The gaps are mechanical: "
                      "roughly 24,000 service-page sessions a year convert at zero, and HQDM has manager access to only one of four Google "
                      "Business pins. The plan fixes the service-page conversion path, lifts insurance and payor content, and optimizes the "
                      "managed Carmel pin.</p>"),
        'chips': [{'v': '100%', 'l': 'top-20 Maps coverage', 'good': True}, {'v': '+17', 'l': 'top-3 cells (Carmel pin)', 'good': True},
                  {'v': '24K→0', 'l': 'service-page conv', 'watch': True}, {'v': '1 / 4', 'l': 'GBP pins managed', 'watch': True}],
        'maps_window': 'Feb → May 2026 · 8 tracked searches',
        'comp_window': 'Across 8 tracked searches · Feb → May 2026',
        'comp_note': ("You're #1 in the market (692 top-3 cells, +17). Your own Carmel Outpatient pin co-ranks just behind it; the nearest "
                      "outside competitor (Cornerstone) sits well back. Lower avg rank is better."),
        'boxes_reading': ("May is a partial month. Conversion tracking on the service pages is being rebuilt, so the year-over-year lead "
                          "comparison isn't meaningful and is shown as —."),
        'focus': [
            {'title': 'Service-page conversion', 'color': '#10b981', 'body': 'Fix the service-page conversion mechanism (24K sessions/yr at zero conversions) and improve the Tier-1 pages.'},
            {'title': 'Insurance / payor content', 'color': '#1d5b8a', 'body': 'Build an insurance and payor article cluster to lift click-through on high-intent queries.'},
            {'title': 'GBP base optimization', 'color': '#6366f1', 'body': 'Defend and extend the managed Inpatient Carmel pin with a full Google Business optimization pass.'},
            {'title': 'Architecture + measurement', 'color': '#f59e0b', 'body': 'Clean up site architecture, stand up the Bronx Maps grid, and lock in measurement.'},
        ],
    },

    'conifer-park': {
        'short_name': 'Conifer Park', 'title': 'Conifer Park',
        'subtitle': 'Q2 2026 · Capital Region NY · 7 locations · Client Snapshot',
        'footer': 'Client snapshot · Q2 2026 · Prepared by Aleksandar Spasevski',
        'exec_html': ("<p>Conifer Park is <strong>#1 or #2 in the Map Pack at all seven of its locations</strong> — but the average rating across "
                      "those pins is 3.3★ (three are below 4.0), which makes the Maps lead fragile and closes the door on AI-citation surfaces. "
                      "Glenville's Maps footprint is improving (rehab-upstate-NY +20 top-3 cells). The plan replicates the Plattsburgh page "
                      "template across the other outpatient cities, un-geo-locks the service pages, builds out the Glenville and Troy pins, and "
                      "runs a review-velocity push across all seven facilities.</p>"),
        'chips': [{'v': '7 / 7', 'l': 'pins #1–2 on Maps', 'good': True}, {'v': '+19', 'l': 'Glenville top-10 cells', 'good': True},
                  {'v': '3.3★', 'l': 'avg rating (fragile)', 'watch': True}, {'v': '1 / 7', 'l': 'Plattsburgh template', 'watch': True}],
        'maps_window': 'Feb → Apr 2026 · 9 tracked searches',
        'comp_window': 'Across 9 tracked searches · Feb → Apr 2026',
        'comp_note': ("Your Glenville inpatient pin leads the reference set (584 top-3 cells, +19), but several competitors are gaining fast — "
                      "Hospitality House (+258) and Every1 Center (+64). Review velocity is the lever to defend. Lower avg rank is better."),
        'boxes_reading': ("May is a partial month. Conversion tracking matured in 2025, so the year-over-year lead comparison isn't "
                          "meaningful and is shown as —."),
        'focus': [
            {'title': 'Replicate Plattsburgh template', 'color': '#10b981', 'body': 'Roll the proven Plattsburgh city-page template across the other five outpatient locations.'},
            {'title': 'Un-geo-lock service pages', 'color': '#1d5b8a', 'body': 'Remove the geo-lock on service pages and clean up site architecture so each location can rank.'},
            {'title': 'Glenville + Troy GBP build-out', 'color': '#6366f1', 'body': 'Build out the HQDM-scoped Glenville and Troy Google Business pins.'},
            {'title': 'Review-velocity SOP', 'color': '#f59e0b', 'body': 'Run a review-velocity SOP across all seven facilities to lift ratings above the 4★ AI-citation threshold.'},
        ],
    },
}


def build_snapshot(slug, cfg):
    path = os.path.join(ROOT, slug, 'data', 'data.json')
    d = json.load(open(path, encoding='utf-8'))
    t = d['trend']
    months = t['months']
    vis = t['sessions']['organic']
    # conversions source
    conv_field = cfg.get('conversions_field', 'form_submits.organic')
    if conv_field == 'form_submits.organic':
        leads = t['form_submits']['organic']
    elif conv_field == 'conversions.organic':
        leads = t['conversions']['organic']
    else:
        leads = t[conv_field]['organic']

    RECOVERY = {'elev8-recovery', 'urban-recovery', 'niagara-recovery', 'surfpoint-recovery', 'arms-acres', 'conifer-park'}
    reliable = cfg.get('conversions_reliable', slug not in RECOVERY)

    lead_label = cfg.get('leads_label', 'Organic leads')
    default_cap = ('Visitors (left axis) and leads (right axis) from organic search. A dashed tail marks the partial current month.'
                   if reliable else
                   'Monthly organic visitors. A dashed tail marks the partial current month. Lead/conversion tracking is being stabilized this quarter, so it’s excluded here.')
    line = build_line(months, vis, leads, lead_label,
                      title=cfg.get('line_title', 'Organic Performance · Monthly (Q4 2025 → now)' if reliable else 'Organic Visitors · Monthly (Q4 2025 → now)'),
                      caption=cfg.get('line_caption', default_cap))
    quarters = build_quarters(t.get('quarterly', []),
                              leads_label=cfg.get('q_leads_label', 'Leads'),
                              title=cfg.get('q_title', 'By Quarter · Visitors & Leads' if reliable else 'By Quarter · Organic Visitors'))
    if not reliable:
        line['leads'] = []
        quarters['leads'] = []

    # YoY override
    yoy = None
    if t.get('yoy_growth') and t['yoy_growth'].get('metrics'):
        ms = {m['label']: m for m in t['yoy_growth']['metrics']}
        sess = next((v for k, v in ms.items() if 'sess' in k.lower()), None)
        conv = next((v for k, v in ms.items() if 'conv' in k.lower()), None)
        cr = next((v for k, v in ms.items() if v.get('is_ratio')), None)
        if sess:
            yoy = {'v': round(sess['current_yoy_pct']), 'l': round(conv['current_yoy_pct']) if conv else None,
                   'cmp': 'vs Q2 2025'}
            if cr:
                yoy['extra'] = {'m': 'Conv. rate', 'd': fmt_pct(round(cr['current_yoy_pct'])), 'cls': 'pos' if cr['current_yoy_pct'] >= 0 else 'neg'}
    boxes, reading = build_boxes(months, vis, leads, yoy=yoy,
                                 reading=cfg.get('boxes_reading'),
                                 lead_word=cfg.get('box_lead_word', 'Leads'),
                                 visitors_only=not reliable)
    reading_html = cfg.get('boxes_reading')
    if not reliable:
        reading_html = ('Organic traffic and Maps visibility are the clean signals this quarter. '
                        'Lead/conversion tracking is being stabilized, so it’s excluded from these comparisons. '
                        'The current month is partial.')

    snap = {
        'eyebrow': EYEBROW,
        'title': cfg.get('title', d['meta'].get('client')),
        'short_name': cfg.get('short_name'),
        'subtitle': cfg.get('subtitle'),
        'footer': cfg.get('footer', 'Client snapshot'),
        'exec_html': cfg['exec_html'],
        'chips': cfg.get('chips', []),
        'line': line,
        'quarters': quarters,
        'boxes': boxes,
        'boxes_reading_html': reading_html,
        'focus': cfg.get('focus', []),
    }

    # maps + competitors
    if cfg.get('maps_source', 'per_keyword') == 'per_keyword' and d.get('per_keyword'):
        snap['maps'] = build_kw_table(d['per_keyword'], cfg.get('maps_window', ''),
                                      first=cfg.get('maps_first', 'feb'), last=cfg.get('maps_last', 'may'),
                                      note_html=cfg.get('maps_note'))
    else:
        snap['maps'] = {'enabled': False}
    if cfg.get('competitor_source', 'ld_leaderboard') == 'ld_leaderboard' and d.get('ld_leaderboard'):
        snap['competitors'] = build_comp_table(d['ld_leaderboard'], cfg.get('comp_window', ''),
                                               note_html=cfg.get('comp_note'))
    else:
        snap['competitors'] = {'enabled': False}

    d['snapshot'] = snap
    json.dump(d, open(path, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
    print(f'  {slug}: wrote snapshot block (maps={snap["maps"].get("enabled")}, '
          f'comp={snap["competitors"].get("enabled")}, boxes={len(boxes)})')


if __name__ == '__main__':
    targets = sys.argv[1:] or list(CLIENTS)
    for slug in targets:
        if slug not in CLIENTS:
            print(f'  SKIP {slug}: no config'); continue
        build_snapshot(slug, CLIENTS[slug])
