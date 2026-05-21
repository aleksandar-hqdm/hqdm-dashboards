"""For each recovery client:
1. Read clients/<slug>/data/ga4_trend.json
2. Replace clients/<slug>/data/data.json.trend with the GA4 conversion + session data
3. Patch clients/<slug>/index.html to relabel the trend section as a GA4 Channel Performance chart
   with per-channel toggles and the right axis label.

Also stash the original GSC trend the agents wrote under data.json.gsc_organic_trend so we don't lose it.
"""
import os, json, re

CLIENTS = [
    ('elev8-recovery',     'Elev8 Centers',     'form_submit + gmb_click'),
    ('urban-recovery',     'Urban Recovery',    'Phone CTA + form_submit + Email CTA'),
    ('niagara-recovery',   'Niagara Recovery',  'form_submit'),
    ('surfpoint-recovery', 'Surfpoint Recovery', 'phone + form_submit + email'),
    ('arms-acres',         'Arms Acres',        'form_submit'),
    ('conifer-park',       'Conifer Park',      'form_submit'),
]

# Channel colors must match PM brand palette
CHANNEL_COLOR = {
    'organic':   '#1d5b8a',  # brand-500 (deep blue)
    'direct':    '#ef4444',  # red
    'referral':  '#8b5cf6',  # purple
    'paid':      '#10b981',  # green
    'social':    '#f59e0b',  # amber
    'email':     '#0ea5a4',  # teal
    'other':     '#9ca3af',  # gray
}
CHANNEL_LABEL = {
    'organic':   'Organic Search',
    'direct':    'Direct',
    'referral':  'Referral',
    'paid':      'Paid',
    'social':    'Organic Social',
    'email':     'Email',
    'other':     'Other / Unassigned',
}


def patch_data_json(slug, conv_label):
    p_ga4 = f'C:/tmp/hqdm-dashboards/clients/{slug}/data/ga4_trend.json'
    p_data = f'C:/tmp/hqdm-dashboards/clients/{slug}/data/data.json'
    with open(p_ga4, 'r', encoding='utf-8') as f:
        ga4 = json.load(f)
    with open(p_data, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Stash old GSC trend under gsc_organic_trend (kept for reference)
    if 'trend' in data and 'gsc_organic_trend' not in data:
        data['gsc_organic_trend'] = data['trend']

    # Build new GA4 trend in the PM-compatible shape
    sessions = ga4['series']['sessions']
    conversions = ga4['series']['conversions']

    # Compute top events string for the chart annotation
    events_90d = ga4.get('conversion_events_90d', [])
    events_str = ' + '.join([f"{e['event']} ({int(e['conversions_90d'])})" for e in events_90d[:3]])

    # Build a quarterly aggregate from the monthly arrays
    # Month indices 0-2=Dec'24..Feb'25, 3-5=Mar-May, 6-8=Jun-Aug, 9-11=Sep-Nov, 12-14=Dec'25-Feb'26, 15-17=Mar-May'26
    q_buckets = [
        ('Dec 2024',     [0]),
        ('Q1 2025',      [1, 2, 3]),
        ('Q2 2025',      [4, 5, 6]),
        ('Q3 2025',      [7, 8, 9]),
        ('Q4 2025',      [10, 11, 12]),
        ('Q1 2026',      [13, 14, 15]),
        ('Q2 2026*',     [16, 17]),
    ]
    total_sess = ga4['totals']['sessions_monthly']
    total_conv = ga4['totals']['conversions_monthly']
    org_sess = sessions.get('organic', [0]*18)
    org_conv = conversions.get('organic', [0]*18)
    quarterly = []
    for label, idxs in q_buckets:
        n = len(idxs)
        org_s = sum(org_sess[i] for i in idxs) // n if n else 0
        org_c = round(sum(org_conv[i] for i in idxs) / n, 1) if n else 0
        org_cr = round((org_c / org_s) * 100, 1) if org_s else None
        # Direct channel comparison
        dir_sess_l = sessions.get('direct', [0]*18)
        dir_conv_l = conversions.get('direct', [0]*18)
        dir_s = sum(dir_sess_l[i] for i in idxs) // n if n else 0
        dir_c = round(sum(dir_conv_l[i] for i in idxs) / n, 1) if n else 0
        dir_cr = round((dir_c / dir_s) * 100, 1) if dir_s else None
        quarterly.append({
            'q': label,
            'org_sess': org_s, 'org_conv': org_c, 'org_cr': org_cr,
            'gbp_sess': dir_s, 'gbp_conv': dir_c, 'gbp_cr': dir_cr,
        })

    # Rewrite data.trend to GA4 shape (PM-compatible)
    data['trend'] = {
        'headline': f'GA4 — sessions + conversions by channel, 18 months. Conversion events (90d): {events_str or "n/a"}',
        'annotation_text': 'GA4 default-channel-grouping. Conversions = sum of all events flagged as conversion in this property.',
        'may_extrapolation_note': 'May 2026 partial — first ~20 days of the month at trailing daily rate.',
        'months': ga4['months'],
        'sessions': sessions,
        'form_submits': conversions,  # dashboard.js renders this under the "Conversions" chart
        'series_labels': {
            'sessions': 'GA4 Sessions',
            'form_submits': f'GA4 Conversions  ({events_str or "—"})',
        },
        'channel_palette': {k: CHANNEL_COLOR[k] for k in sessions.keys() if k in CHANNEL_COLOR},
        'channel_labels': {k: CHANNEL_LABEL[k] for k in sessions.keys() if k in CHANNEL_LABEL},
        'events': [],
        'quarterly': quarterly,
    }

    with open(p_data, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f'  data.json updated: channels {list(sessions.keys())}, conv events: {events_str}')
    return sessions.keys()


def patch_index_html(slug, channels_present, conv_event_label):
    """Update the trend section labels + toggles."""
    p = f'C:/tmp/hqdm-dashboards/clients/{slug}/index.html'
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Change section title from "GSC Organic Trend — 13 Months" to "GA4 Channel Performance — 18 Months"
    html = re.sub(
        r'<h2 class="text-2xl font-bold tracking-tight">GSC Organic Trend[^<]*</h2>',
        '<h2 class="text-2xl font-bold tracking-tight">GA4 Channel Performance — 18 Months</h2>',
        html
    )
    # 2. Replace the chart series toggles row (only "GSC Organic" toggle) with full channel toggles
    new_toggles = '<div class="flex flex-wrap gap-3 mt-4" id="trend-series-toggles">\n'
    for ch in channels_present:
        color = CHANNEL_COLOR.get(ch, '#9ca3af')
        label = CHANNEL_LABEL.get(ch, ch.title())
        new_toggles += f'''          <label class="inline-flex items-center gap-2 text-xs cursor-pointer">
            <input type="checkbox" data-series="{ch}" checked class="rounded">
            <span class="inline-block w-3 h-3 rounded-full" style="background:{color}"></span>
            <span>{label}</span>
          </label>\n'''
    new_toggles += '        </div>'
    html = re.sub(
        r'<div class="flex flex-wrap gap-3 mt-4" id="trend-series-toggles">.*?</div>',
        new_toggles,
        html,
        count=1, flags=re.DOTALL
    )
    # 3. Update sub-chart labels
    html = html.replace(
        '<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">Organic Clicks</h3>',
        '<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">GA4 Sessions <span class="text-ink-400 font-medium normal-case">(by channel)</span></h3>'
    )
    html = html.replace(
        '<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">Organic Impressions <span class="text-ink-400 font-medium normal-case">(thousand)</span></h3>',
        f'<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">GA4 Conversions <span class="text-ink-400 font-medium normal-case">({conv_event_label})</span></h3>'
    )
    # 4. Section sub-headline
    html = re.sub(
        r'<p class="text-sm text-ink-500 mt-1" id="trend-headline">—</p>',
        '<p class="text-sm text-ink-500 mt-1" id="trend-headline">Sessions + conversions by GA4 default channel grouping, 18-month window (Dec 2024 → May 2026)</p>',
        html
    )
    # 5. Small downstream chart was "GSC Month-Over-Month Impressions" — relabel intro
    html = html.replace(
        '<h3 class="text-lg font-bold">GSC Month-Over-Month Impressions</h3>',
        '<h3 class="text-lg font-bold">GSC Organic Impressions — Month-Over-Month</h3>'
    )

    with open(p, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'  index.html updated: {len(channels_present)} channel toggles wired')


for slug, name, conv_label in CLIENTS:
    print(f'\n=== {slug} ===')
    chans = patch_data_json(slug, conv_label)
    patch_index_html(slug, chans, conv_label)
