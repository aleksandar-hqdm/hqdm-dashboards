"""For each recovery client:
1. Read clients/<slug>/data/ga4_trend.json
2. Replace clients/<slug>/data/data.json.trend with the GA4 conversion + session data
3. Patch clients/<slug>/index.html to relabel the trend section as a GA4 Channel Performance chart
   with per-channel toggles and the right axis label.

Also stash the original GSC trend the agents wrote under data.json.gsc_organic_trend so we don't lose it.
"""
import os, json, re

CLIENTS_ALL = [
    ('elev8-recovery',     'Elev8 Centers',     'form_submit + gmb_click'),
    ('urban-recovery',     'Urban Recovery',    'Phone CTA + form_submit + Email CTA'),
    ('niagara-recovery',   'Niagara Recovery',  'form_submit'),
    ('surfpoint-recovery', 'Surfpoint Recovery', 'phone + form_submit + email'),
    ('arms-acres',         'Arms Acres',        'form_submit'),
    ('conifer-park',       'Conifer Park',      'form_submit'),
]
# Active rollout: 2026-05-28 — UR pilot extended to Arms Acres for the
# form_submit-as-leads + engagement-signals split. Re-add other slugs when
# rolling out the pattern cohort-wide.
CLIENTS = [c for c in CLIENTS_ALL if c[0] in {'arms-acres'}]

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

    sessions = ga4['series']['sessions']
    all_conversions = ga4['series']['conversions']   # kept for compat (all key events)
    events_by_channel = ga4['series'].get('events_by_channel', {})
    events_monthly = ga4['series'].get('events_monthly', {})
    resolved = ga4.get('resolved_event_names', {})
    gmb_sessions_monthly = ga4.get('gmb_sessions_monthly', [0] * 18)
    months = ga4['months']
    n_months = len(months)

    # ----- Leads = form_submit only when available, else fall back to all key events -----
    if 'form_submit' in resolved and events_by_channel.get('form_submit'):
        fs = events_by_channel['form_submit']
        leads_by_channel = {ch: fs.get(ch, [0] * n_months) for ch in sessions.keys()}
        leads_label_full = 'Organic Leads (form_submit)'
        leads_series_caption = 'Leads = form_submit event only. Phone / Email / GMB clicks are intent signals, shown separately.'
        using_form_submit_only = True
    else:
        leads_by_channel = all_conversions
        leads_label_full = f'GA4 Conversions ({conv_label})'
        leads_series_caption = 'Conversions = sum of all events flagged as key events in GA4.'
        using_form_submit_only = False

    # ----- Quarterly aggregate (SUMS, not averages) -----
    q_buckets = [
        ('Dec 2024',     [0]),
        ('Q1 2025',      [1, 2, 3]),
        ('Q2 2025',      [4, 5, 6]),
        ('Q3 2025',      [7, 8, 9]),
        ('Q4 2025',      [10, 11, 12]),
        ('Q1 2026',      [13, 14, 15]),
        ('Q2 2026*',     [16, 17]),
    ]
    org_sess = sessions.get('organic', [0] * n_months)
    org_leads = leads_by_channel.get('organic', [0] * n_months)
    dir_sess = sessions.get('direct', [0] * n_months)
    dir_leads = leads_by_channel.get('direct', [0] * n_months)
    quarterly = []
    for label, idxs in q_buckets:
        org_s = sum(org_sess[i] for i in idxs)
        org_c = round(sum(org_leads[i] for i in idxs), 1)
        org_cr = round((org_c / org_s) * 100, 2) if org_s else None
        d_s = sum(dir_sess[i] for i in idxs)
        d_c = round(sum(dir_leads[i] for i in idxs), 1)
        d_cr = round((d_c / d_s) * 100, 2) if d_s else None
        quarterly.append({
            'q': label,
            'org_sess': org_s, 'org_conv': org_c, 'org_cr': org_cr,
            'gbp_sess': d_s, 'gbp_conv': d_c, 'gbp_cr': d_cr,
        })

    # ----- Engagement signals block (phone clicks + GMB->site sessions) -----
    phone_monthly = events_monthly.get('phone_click', [0] * n_months)
    email_monthly = events_monthly.get('email_click', [0] * n_months)
    gmb_click_monthly = events_monthly.get('gmb_click', [0] * n_months)
    # Prefer the gmb_click event when it exists (Elev8, Surfpoint); fall back
    # to ?utm_source=gmb sessions (UR, Niagara, Arms Acres, Conifer Park).
    if sum(gmb_click_monthly) > 0:
        gmb_series = gmb_click_monthly
        gmb_label = 'GMB clicks (event)'
        gmb_caption = 'gmb_click event firing on Maps→site button.'
    else:
        gmb_series = gmb_sessions_monthly
        gmb_label = 'GMB → site sessions'
        gmb_caption = 'Sessions tagged ?utm_source=gmb — the live Maps→site path.'
    engagement = {
        'enabled': sum(phone_monthly) > 0 or sum(gmb_series) > 0,
        'headline': 'Engagement intent signals (clicks + Maps→site)',
        'annotation_text': 'Intent signals, not confirmed conversions. Counts include clicks that may not result in a call or visit.',
        'months': months,
        'series': {
            'gmb': {'data': gmb_series, 'label': gmb_label, 'color': '#10b981', 'caption': gmb_caption},
        },
    }
    if sum(phone_monthly) > 0:
        engagement['series']['phone_clicks'] = {'data': phone_monthly, 'label': 'Phone CTA clicks', 'color': '#ef4444'}
    if sum(email_monthly) > 0:
        engagement['series']['email_clicks'] = {'data': email_monthly, 'label': 'Email CTA clicks', 'color': '#0ea5a4'}

    # ----- Build the trend block (PM-compatible) -----
    events_90d = ga4.get('conversion_events_90d', [])
    events_str = ' + '.join([f"{e['event']} ({int(e['conversions_90d'])})" for e in events_90d[:3]])
    if using_form_submit_only:
        fs_org_90d = sum(events_by_channel['form_submit'].get('organic', [0]*n_months)[-3:])
        headline = (f'GA4 — sessions + leads + engagement, 18 months. '
                    f'Leads = form_submit (organic last 90d: {fs_org_90d}). '
                    f'Phone / Email / GMB clicks shown separately as intent signals.')
        annotation = ('GA4 default-channel-grouping. Leads counted as form_submit events only. '
                      'Phone/Email CTA clicks and GMB→site sessions are intent signals — '
                      'shown in the Engagement panel below.')
    else:
        headline = f'GA4 — sessions + conversions by channel, 18 months. Conversion events (90d): {events_str or "n/a"}'
        annotation = 'GA4 default-channel-grouping. Conversions = sum of all events flagged as conversion in this property.'

    data['trend'] = {
        'headline': headline,
        'annotation_text': annotation,
        'may_extrapolation_note': 'May 2026 partial — first ~20 days of the month at trailing daily rate.',
        'months': months,
        'sessions': sessions,
        'form_submits': leads_by_channel,  # dashboard.js + client-report.js read this
        'all_conversions': all_conversions,  # kept for reference / disclosure
        'series_labels': {
            'sessions': 'GA4 Sessions',
            'form_submits': leads_label_full,
        },
        'form_submits_label': 'Leads (form_submit)' if using_form_submit_only else 'Conversions',
        'channel_palette': {k: CHANNEL_COLOR[k] for k in sessions.keys() if k in CHANNEL_COLOR},
        'channel_colors': {k: CHANNEL_COLOR[k] for k in sessions.keys() if k in CHANNEL_COLOR},
        'channel_labels': {k: CHANNEL_LABEL[k] for k in sessions.keys() if k in CHANNEL_LABEL},
        'events': [],
        'quarterly': quarterly,
        'engagement_signals': engagement,
        'leads_definition': {
            'using_form_submit_only': using_form_submit_only,
            'resolved_event_names': resolved,
            'caption': leads_series_caption,
        },
    }

    with open(p_data, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f'  data.json updated: leads={"form_submit only" if using_form_submit_only else "all key events"}, engagement={engagement["enabled"]}')
    return sessions.keys()


def patch_index_html(slug, channels_present, conv_event_label):
    """Update the trend section labels + toggles."""
    p = f'C:/tmp/hqdm-dashboards/clients/{slug}/index.html'
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()

    # Determine the new conversions/leads heading by reading the just-written data.json
    p_data = f'C:/tmp/hqdm-dashboards/clients/{slug}/data/data.json'
    leads_using_fs = False
    try:
        with open(p_data, 'r', encoding='utf-8') as f:
            _d = json.load(f)
        leads_using_fs = bool(_d.get('trend', {}).get('leads_definition', {}).get('using_form_submit_only'))
    except Exception:
        pass
    leads_heading_html = (
        '<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">Organic Leads <span class="text-ink-400 font-medium normal-case">(form_submit only)</span></h3>'
        if leads_using_fs else
        f'<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">GA4 Conversions <span class="text-ink-400 font-medium normal-case">({conv_event_label})</span></h3>'
    )

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
    # Match either the original "Organic Impressions" template heading OR a
    # previously-patched "GA4 Conversions (...)" heading from an earlier run.
    html = re.sub(
        r'<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">Organic Impressions[^<]*<span class="text-ink-400 font-medium normal-case">[^<]*</span></h3>',
        leads_heading_html,
        html,
    )
    html = re.sub(
        r'<h3 class="text-sm font-bold uppercase tracking-wider text-ink-600">GA4 Conversions[^<]*<span class="text-ink-400 font-medium normal-case">[^<]*</span></h3>',
        leads_heading_html,
        html,
    )
    # 4. Section sub-headline
    sub_headline = (
        'Sessions + leads (form_submit only) by GA4 default channel grouping, 18-month window (Dec 2024 → May 2026)'
        if leads_using_fs else
        'Sessions + conversions by GA4 default channel grouping, 18-month window (Dec 2024 → May 2026)'
    )
    html = re.sub(
        r'<p class="text-sm text-ink-500 mt-1" id="trend-headline">[^<]*</p>',
        f'<p class="text-sm text-ink-500 mt-1" id="trend-headline">{sub_headline}</p>',
        html
    )
    # 5. Small downstream chart was "GSC Month-Over-Month Impressions" — relabel intro
    html = html.replace(
        '<h3 class="text-lg font-bold">GSC Month-Over-Month Impressions</h3>',
        '<h3 class="text-lg font-bold">GSC Organic Impressions — Month-Over-Month</h3>'
    )

    with open(p, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'  index.html updated: {len(channels_present)} channel toggles wired, leads_heading={leads_using_fs}')


for slug, name, conv_label in CLIENTS:
    print(f'\n=== {slug} ===')
    chans = patch_data_json(slug, conv_label)
    patch_index_html(slug, chans, conv_label)
