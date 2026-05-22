/* HQDM Dashboards — single-client dashboard logic
 * Loads ./data/data.json, populates the page, wires interactivity. */

(async function () {
  let DATA, LD;
  // Cache-bust on every load so dashboard always reflects the latest JSON
  const v = '?v=' + Date.now();
  try {
    [DATA, LD] = await Promise.all([
      fetch('./data/data.json' + v).then(r => r.json()),
      fetch('./data/ld_grids.json' + v).then(r => r.json()).catch(() => null)
    ]);
  } catch (err) {
    document.body.insertAdjacentHTML('afterbegin',
      `<div class="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 m-4 rounded">
         <strong>Failed to load data.json.</strong> Serve this page over HTTP (not file://) — e.g. <code>python -m http.server</code> in the repo root.
       </div>`);
    console.error(err);
    return;
  }

  // === Header / hero ===
  setText('hdr-client', DATA.meta.client);
  setText('hdr-quarter', DATA.meta.quarter);
  setText('hdr-prepared', DATA.meta.prepared_date);
  setText('hero-h1', DATA.meta.client);
  setText('hero-subtitle', `${DATA.meta.tagline} · Founded ${DATA.meta.founded}`);
  setText('hero-scope', DATA.meta.doc_subtitle);
  setText('hero-prepared', DATA.meta.prepared_date);
  setText('hero-author', DATA.meta.author);
  setText('hero-domain', DATA.meta.domain);
  setText('hero-tier', DATA.meta.tier);
  document.title = `${DATA.meta.client} · ${DATA.meta.quarter} Strategic Dashboard · HQDM`;

  // === TL;DR (innerHTML — limited inline tags from data.tldr) ===
  if (DATA.tldr) {
    const tldrEl = document.getElementById('tldr-text');
    if (tldrEl) tldrEl.innerHTML = DATA.tldr;
  }

  // === KPI tiles ===
  renderKPIs(DATA.kpis);

  // === Headline trend charts (Sessions + Conversions/Transactions, stacked) ===
  if (DATA.trend) {
    setText('trend-headline', DATA.trend.headline);
    setText('trend-annotation', (DATA.trend.may_extrapolation_note || '') + ' ' + (DATA.trend.annotation_text || ''));
    if (DATA.trend.quarterly) renderQuarterlyTable(DATA.trend.quarterly);
    if (DATA.trend.yoy_growth && document.getElementById('yoy-chart')) renderYoYChart(DATA.trend.yoy_growth);
    if (DATA.trend.yoy_growth) renderYoYBadges(DATA.trend.yoy_growth);
    const trendCharts = renderStackedTrendCharts(DATA.trend);
    wireTrendSeriesToggles(trendCharts, DATA.trend);
  }

  // === Maps presence (PM only) ===
  if (DATA.maps_presence && document.querySelector('#maps-table')) renderMapsTable(DATA.maps_presence);

  // === LD leaderboard (PM only) ===
  if (DATA.ld_leaderboard && document.querySelector('#ld-table')) renderLDTable(DATA.ld_leaderboard);

  // === LD heatmap loop (PM only) ===
  if (LD && document.querySelector('#hm-panels')) renderHeatmapLoop(LD);

  // === Per-keyword (PM only) ===
  if (DATA.per_keyword && document.querySelector('#kw-table')) renderKeywordTable(DATA.per_keyword);

  // === LD time series (PM only) ===
  if (DATA.ld_timeseries && document.querySelector('#ld-ts-top10')) renderLDTimeSeries(DATA.ld_timeseries);

  // === GSC decline + URL class (PM) ===
  if (DATA.gsc_decline && document.querySelector('#gsc-chart')) renderGSCChart(DATA.gsc_decline);
  if (DATA.url_class && document.querySelector('#urlclass-chart')) renderURLClassChart(DATA.url_class);
  if (DATA.brand_pull && document.querySelector('#brand-pull-grid')) renderBrandPull(DATA.brand_pull);

  // === PM Competition ===
  if (DATA.organic_competitors && document.querySelector('#org-comp-table')) renderOrgComp(DATA.organic_competitors);

  // === PM Potential ===
  if (DATA.keyword_buckets && document.querySelector('#buckets-chart')) renderBucketsChart(DATA.keyword_buckets);
  if (DATA.map_upside && document.querySelector('#upside-table')) renderUpsideTable(DATA.map_upside);
  if (DATA.top_urls && document.querySelector('#top-urls-table')) renderTopUrlsTable(DATA.top_urls);

  // === Bernie's-specific sections ===
  if (DATA.meta && DATA.meta.mini_reports && document.querySelector('#mini-reports-grid')) renderMiniReports(DATA.meta.mini_reports);
  if (DATA.quarterly_yoy_infographic && document.querySelector('#yoy-panels')) renderYoyInfographic(DATA.quarterly_yoy_infographic);
  if (DATA.quarterly_chart && document.querySelector('#quarterly-chart-panels')) renderQuarterlyChart(DATA.quarterly_chart);
  if (DATA.ahrefs_trajectory && document.querySelector('#ahrefs-chart')) renderAhrefsTrajectory(DATA.ahrefs_trajectory);
  if (DATA.aio_saturation && document.querySelector('#aio-may26')) renderAIOSaturation(DATA.aio_saturation);
  if (DATA.index_health && document.querySelector('#index-health-table')) renderIndexHealth(DATA.index_health);
  if (DATA.store_gap_summary && document.querySelector('#store-gap-why')) renderStoreGapSummary(DATA.store_gap_summary);
  if (DATA.sku_coverage && document.querySelector('#sku-table')) renderSKUCoverage(DATA.sku_coverage);
  if (DATA.competitor_reshuffle && document.querySelector('#reshuffle-bars')) renderReshuffleBars(DATA.competitor_reshuffle);
  if (DATA.st_pattern_verified && document.querySelector('#st-pattern-list')) renderSTPattern(DATA.st_pattern_verified);
  if (DATA.top50_losers_summary && document.querySelector('#top50-stats')) renderTop50Preview(DATA.top50_losers_summary);
  if (DATA.production_cadence && document.querySelector('#cadence-current')) renderCadence(DATA.production_cadence);
  if (DATA.site_level_upgrades && document.querySelector('#site-level-cards')) renderSiteLevelUpgrades(DATA.site_level_upgrades);
  if (DATA.top_winners_q1yoy && document.querySelector('#winners-table')) renderWinnersTable(DATA.top_winners_q1yoy);
  if (DATA.q3_kpi_targets && document.querySelector('#q3-targets-table')) renderQ3Targets(DATA.q3_kpi_targets);

  // === Positives vs negatives (shared) ===
  if (DATA.positives && document.querySelector('#positives-list')) renderList('positives-list', DATA.positives, 'emerald');
  if (DATA.negatives && document.querySelector('#negatives-list')) renderList('negatives-list', DATA.negatives, 'rose');
  if (DATA.owner_asks && document.querySelector('#owner-asks-list')) renderList('owner-asks-list', DATA.owner_asks, 'emerald');

  // === Headline panel (traffic-down / conversions-up) ===
  if (DATA.headline_panel && document.querySelector('#headline-h2')) {
    renderHeadlinePanel(DATA.headline_panel, DATA.mini_report_base || './');
  }

  // === GA4 vs GSC discrepancy ===
  if (DATA.ga4_gsc_discrepancy && document.querySelector('#discrepancy-table')) {
    renderGA4GSCDiscrepancy(DATA.ga4_gsc_discrepancy, DATA.mini_report_base || './');
  }

  // === LLM Visibility (AI Overview saturation on 20 priority kws) ===
  if (DATA.llm_visibility && document.querySelector('#llm-table')) {
    renderLLMVisibility(DATA.llm_visibility, DATA.mini_report_base || './');
  }

  // === Lever cards (shared) ===
  if (DATA.levers && document.querySelector('#lever-cards')) renderLeverCards(DATA.levers, DATA.mini_report_base || './');

  // === Tasks table (shared) ===
  if (DATA.levers && document.querySelector('#tasks-table')) renderTasks(DATA.levers);
})();

// ============================================================
// Helpers
// ============================================================
function setText(id, text) { const el = document.getElementById(id); if (el && text != null) el.textContent = text; }
function fmtNum(n)  { return n == null ? '—' : Number(n).toLocaleString('en-US'); }
function fmtPct(n, digits=1)  { return n == null ? '—' : (n).toFixed(digits) + '%'; }
function fmtDelta(n, digits=1) {
  if (n == null) return '—';
  const sign = n > 0 ? '+' : '';
  const cls = n > 0 ? 'text-emerald-700' : n < 0 ? 'text-rose-700' : 'text-ink-500';
  return `<span class="${cls} font-medium">${sign}${Number(n).toFixed(digits)}</span>`;
}

// ============================================================
// KPI tiles
// ============================================================
function renderKPIs(kpis) {
  const grid = document.getElementById('kpi-grid');
  grid.innerHTML = kpis.map(k => {
    const sentClass = k.sentiment === 'positive' ? 'sent-positive' :
                      k.sentiment === 'negative' ? 'sent-negative' : 'sent-neutral';
    return `
      <div class="kpi-tile bg-white rounded-xl border-l-4 ${sentClass} border-r border-y border-r-slate-200 border-y-slate-200 p-5 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <div class="text-xs font-semibold uppercase tracking-wider text-ink-500">${escapeHtml(k.label)}</div>
          <span class="sent-dot ${k.sentiment}"></span>
        </div>
        <div class="mt-2 text-3xl font-extrabold tracking-tight text-ink-900">${escapeHtml(k.value)}</div>
        <div class="kpi-detail text-xs text-ink-600 leading-relaxed border-t border-slate-200 mt-0">
          <div class="pt-3">${escapeHtml(k.detail)}</div>
        </div>
      </div>
    `;
  }).join('');
  grid.querySelectorAll('.kpi-tile').forEach(tile => {
    tile.addEventListener('click', () => tile.classList.toggle('open'));
  });
}

// ============================================================
// Trend charts — stacked Sessions + Conversions, shared series toggles
// ============================================================
function renderStackedTrendCharts(trend) {
  // Channel colors / labels — overridable from data.json
  const defaultColors = { organic: '#1d5b8a', gbp: '#f59e0b', direct: '#ef4444', llm: '#8b5cf6' };
  const defaultLabels = { organic: 'Organic', gbp: 'GBP', direct: 'Direct', llm: 'LLM' };
  const colors = trend.channel_colors || defaultColors;
  const labels = trend.channel_labels || defaultLabels;

  // Inject May 2026 projection as an extra dashed-line dataset if metadata is present.
  // Append a "May proj." x-axis label and a second series that contains only
  // the partial-actual May value and the run-rate projection. Visualizes the
  // "dotted line from current state to projected end-of-month" the user asked for.
  let months = trend.months.slice();
  const proj = trend.may_projection;
  const projectionByChannel = {};
  if (proj && months[months.length - 1].toLowerCase().includes('may')) {
    months.push('May 2026 (proj)');
    Object.keys(trend.sessions).forEach(channel => {
      if (channel === 'organic') {
        const sess = trend.sessions[channel].slice();
        const tx = trend.form_submits[channel].slice();
        const mayPartialSess = sess[sess.length - 1];
        const mayPartialTx = tx[tx.length - 1];
        sess.push(null);
        tx.push(null);
        trend.sessions[channel] = sess;
        trend.form_submits[channel] = tx;
        const sessProj = new Array(months.length).fill(null);
        const txProj = new Array(months.length).fill(null);
        sessProj[months.length - 2] = mayPartialSess;
        sessProj[months.length - 1] = proj.sessions_organic_full_month_est;
        txProj[months.length - 2] = mayPartialTx;
        txProj[months.length - 1] = proj.transactions_organic_full_month_est;
        projectionByChannel[channel] = { sessions: sessProj, tx: txProj };
      } else {
        trend.sessions[channel].push(null);
        trend.form_submits[channel].push(null);
      }
    });
    trend._labels_with_proj = months;
  } else {
    trend._labels_with_proj = months;
  }

  // Initial visible state: respect checkbox `checked` if rendered; else default
  const channels = Object.keys(trend.sessions);
  const visible = {};
  channels.forEach(c => {
    const cb = document.querySelector(`#trend-series-toggles input[data-series="${c}"]`);
    visible[c] = cb ? cb.checked : true;
  });

  const buildDatasets = (src, kind) => {
    const base = Object.keys(src).map(key => ({
      label: labels[key] || key,
      data: src[key],
      borderColor: colors[key] || '#6b7280',
      backgroundColor: (colors[key] || '#6b7280') + '20',
      tension: 0.25,
      borderWidth: 2.5,
      pointRadius: 2,
      pointHoverRadius: 5,
      hidden: !visible[key]
    }));
    Object.keys(projectionByChannel).forEach(channel => {
      const data = kind === 'sessions' ? projectionByChannel[channel].sessions : projectionByChannel[channel].tx;
      const color = colors[channel] || '#6b7280';
      base.push({
        label: (labels[channel] || channel) + ' — May projection (run-rate)',
        data,
        borderColor: color,
        backgroundColor: 'transparent',
        borderDash: [10, 6],
        borderWidth: 3,
        pointRadius: 7,
        pointHoverRadius: 9,
        pointStyle: 'rectRot',
        pointBackgroundColor: '#fff',
        pointBorderColor: color,
        pointBorderWidth: 3,
        spanGaps: true,
        hidden: !visible[channel]
      });
    });
    return base;
  };

  const hasProjection = Object.keys(projectionByChannel).length > 0;
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        display: hasProjection,
        position: 'bottom',
        labels: { font: { size: 11 }, boxWidth: 30, padding: 12, usePointStyle: false }
      },
      tooltip: {
        backgroundColor: '#0b1220',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#e5e7eb',
        borderColor: '#374151',
        borderWidth: 1,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.raw == null ? '—' : ctx.raw.toLocaleString()}`
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 } } },
      y: { grid: { color: 'rgba(0,0,0,0.05)' }, beginAtZero: true, ticks: { font: { size: 11 } } }
    }
  };

  const sessionsCtx = document.getElementById('trend-chart-sessions');
  const convCtx = document.getElementById('trend-chart-conversions');
  if (!sessionsCtx || !convCtx) return null;

  const labelsForChart = trend._labels_with_proj || trend.months;
  const sessionsChart = new Chart(sessionsCtx.getContext('2d'), {
    type: 'line',
    data: { labels: labelsForChart, datasets: buildDatasets(trend.sessions, 'sessions') },
    options: baseOptions
  });

  const convChart = new Chart(convCtx.getContext('2d'), {
    type: 'line',
    data: { labels: labelsForChart, datasets: buildDatasets(trend.form_submits, 'tx') },
    options: baseOptions
  });

  const charts = { sessions: sessionsChart, conversions: convChart, visible };
  charts._rebuild = () => {
    sessionsChart.data.datasets = buildDatasets(trend.sessions, 'sessions');
    convChart.data.datasets = buildDatasets(trend.form_submits, 'tx');
    sessionsChart.update();
    convChart.update();
  };
  return charts;
}

function wireTrendSeriesToggles(charts, trend) {
  if (!charts) return;
  document.querySelectorAll('#trend-series-toggles input').forEach(cb => {
    cb.addEventListener('change', () => {
      charts.visible[cb.dataset.series] = cb.checked;
      charts._rebuild();
    });
  });
}

function renderQuarterlyTable(quarterly) {
  const tbody = document.querySelector('#trend-quarterly-table tbody');
  if (!tbody) return;
  // Detect whether the table header expects 4 cols (Bernie's: Organic only)
  // or 7 cols (PM: Organic + GBP). We count the <th> elements.
  const colCount = document.querySelectorAll('#trend-quarterly-table thead th').length;
  const isCompact = colCount <= 4;

  tbody.innerHTML = quarterly.map(q => {
    const rowClass = q.kind === 'estimate'
      ? 'text-ink-600 bg-amber-50/40 border-t-2 border-dashed border-amber-300'
      : q.kind === 'current'
        ? 'text-ink-800 bg-blue-50/40 font-semibold'
        : 'text-ink-700';
    if (isCompact) {
      return `
        <tr class="${rowClass}">
          <td class="py-2 pr-4 font-medium">${escapeHtml(q.q)}</td>
          <td class="py-2 pr-4 text-right">${fmtNum(q.org_sess)}</td>
          <td class="py-2 pr-4 text-right">${fmtNum(q.org_conv)}</td>
          <td class="py-2 text-right">${q.org_cr != null ? q.org_cr.toFixed(2) + '%' : '—'}</td>
        </tr>
      `;
    }
    return `
      <tr class="${rowClass}">
        <td class="py-2 pr-4 font-medium">${escapeHtml(q.q)}</td>
        <td class="py-2 pr-4 text-right">${fmtNum(q.org_sess)}</td>
        <td class="py-2 pr-4 text-right">${fmtNum(q.org_conv)}</td>
        <td class="py-2 pr-4 text-right">${q.org_cr != null ? q.org_cr.toFixed(1) + '%' : '—'}</td>
        <td class="py-2 pr-4 text-right">${fmtNum(q.gbp_sess)}</td>
        <td class="py-2 pr-4 text-right">${fmtNum(q.gbp_conv)}</td>
        <td class="py-2 text-right">${q.gbp_cr != null ? q.gbp_cr.toFixed(1) + '%' : '—'}</td>
      </tr>
    `;
  }).join('');
}

// ============================================================
// YoY badges — Bernie's-style annotation badges on time-series chart panels
// ============================================================
function renderYoYBadges(yoy) {
  if (!yoy || !yoy.metrics) return;
  const find = (label) => yoy.metrics.find(m => m.label === label);

  const badgeHTML = (pct, caption) => {
    if (pct == null) return '';
    const isUp = pct >= 0;
    const borderCls = isUp ? 'border-emerald-500' : 'border-rose-500';
    const txtCls    = isUp ? 'text-emerald-600'   : 'text-rose-600';
    const arrow     = isUp ? '▲' : '▼';
    const sign      = isUp ? '+' : '';
    return `
      <div class="bg-white/95 backdrop-blur ${borderCls} border-2 rounded-lg shadow-md px-3 py-1.5">
        <div class="flex items-center gap-1.5">
          <span class="${txtCls} text-base font-bold leading-none">${arrow}</span>
          <span class="${txtCls} text-xl sm:text-2xl font-extrabold leading-none">${sign}${Math.round(pct)}%</span>
        </div>
        <div class="text-[9px] text-ink-500 italic mt-1 text-right leading-tight whitespace-nowrap">${escapeHtml(caption)}</div>
      </div>
    `;
  };

  const sessionsBox = document.getElementById('yoy-badges-sessions');
  if (sessionsBox) {
    const org = find('Organic sess/mo');
    const gbp = find('GBP sess/mo');
    sessionsBox.innerHTML =
      (org ? badgeHTML(org.current_yoy_pct, "Organic · Q2'25 → Q2'26*") : '') +
      (gbp ? badgeHTML(gbp.current_yoy_pct, "GBP · Q2'25 → Q2'26*")     : '');
  }

  const convBox = document.getElementById('yoy-badges-conversions');
  if (convBox) {
    const org = find('Organic conv/mo');
    const gbp = find('GBP conv/mo');
    convBox.innerHTML =
      (org ? badgeHTML(org.current_yoy_pct, "Organic conv · Q2'25 → Q2'26*") : '') +
      (gbp ? badgeHTML(gbp.current_yoy_pct, "GBP conv · Q2'25 → Q2'26*")     : '');
  }
}

// ============================================================
// YoY growth chart — grouped bars: current (solid) + est. (dashed)
// ============================================================
function renderYoYChart(yoy) {
  const canvas = document.getElementById('yoy-chart');
  if (!canvas || typeof Chart === 'undefined') return;
  if (yoy.reading) setText('yoy-reading', yoy.reading);

  const labels = yoy.metrics.map(m => m.label);
  const currentData = yoy.metrics.map(m => m.current_yoy_pct);
  const estimateData = yoy.metrics.map(m => m.estimate_yoy_pct);

  // Color each bar by sign (red = down, green = up)
  const colorFor = (val, alpha) => {
    if (val == null) return `rgba(148,163,184,${alpha})`;
    return val >= 0 ? `rgba(16,185,129,${alpha})` : `rgba(239,68,68,${alpha})`;
  };
  const currentBg  = currentData.map(v => colorFor(v, 0.85));
  const currentBd  = currentData.map(v => colorFor(v, 1.0));
  const estimateBg = estimateData.map(v => colorFor(v, 0.30));
  const estimateBd = estimateData.map(v => colorFor(v, 0.9));

  if (canvas._chart) canvas._chart.destroy();
  canvas._chart = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: yoy.current_label || 'Current (partial)',
          data: currentData,
          backgroundColor: currentBg,
          borderColor: currentBd,
          borderWidth: 1.5,
          borderRadius: 4,
          categoryPercentage: 0.72,
          barPercentage: 0.92
        },
        {
          label: yoy.estimate_label || 'Full-Q estimate',
          data: estimateData,
          backgroundColor: estimateBg,
          borderColor: estimateBd,
          borderWidth: 1.5,
          borderDash: [5, 4],
          borderRadius: 4,
          categoryPercentage: 0.72,
          barPercentage: 0.92
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'x',
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: { boxWidth: 14, font: { size: 11 }, color: '#4b5563' }
        },
        tooltip: {
          backgroundColor: '#0b1220',
          padding: 12,
          callbacks: {
            label: (ctx) => {
              const m = yoy.metrics[ctx.dataIndex];
              const isCurrent = ctx.datasetIndex === 0;
              const val = ctx.parsed.y;
              const sign = val >= 0 ? '+' : '';
              const lines = [
                `${ctx.dataset.label}: ${sign}${val.toFixed(1)}% YoY`,
                `Q2 2025 baseline: ${m.is_ratio ? m.q2_2025.toFixed(1) + '%' : m.q2_2025.toLocaleString()}`,
                `${isCurrent ? 'Current' : 'Estimate'}: ${m.is_ratio ? (isCurrent ? m.current : m.estimate).toFixed(1) + '%' : (isCurrent ? m.current : m.estimate).toLocaleString()}`
              ];
              if (m.is_ratio) {
                const pts = isCurrent ? m.pts_delta_current : m.pts_delta_estimate;
                if (pts != null) lines.push(`Point delta: ${pts >= 0 ? '+' : ''}${pts.toFixed(1)} pts`);
              }
              return lines;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 }, color: '#4b5563', maxRotation: 0, autoSkip: false }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { size: 10 },
            color: '#6b7280',
            callback: (v) => (v >= 0 ? '+' : '') + v + '%'
          },
          title: { display: true, text: 'YoY % change vs Q2 2025', font: { size: 11, weight: '600' }, color: '#4b5563' }
        }
      }
    }
  });
}

// ============================================================
// Maps presence table
// ============================================================
function renderMapsTable(rows) {
  const tbody = document.querySelector('#maps-table tbody');
  tbody.innerHTML = rows.map(r => {
    const rank = r.avg_rank == null ? '<span class="text-rose-600 font-semibold">n/a</span>' : `<span class="font-mono">${r.avg_rank.toFixed(1)}</span>`;
    const rowClass = r.avg_rank == null ? 'zero-reach' : (r.managed ? 'managed-pin' : (r.avg_rank <= 3 ? 'pin-bleed' : ''));
    const actionBadge = badgeFromAction(r.action);
    return `
      <tr class="${rowClass}">
        <td class="py-3 px-4">
          <div class="font-medium text-ink-800">${escapeHtml(r.coord)}</div>
          <div class="text-xs text-ink-500 font-mono">${escapeHtml(r.ll)}</div>
        </td>
        <td class="py-3 px-4 hidden md:table-cell">
          <div class="text-xs text-ink-600">${escapeHtml(r.distance)}</div>
          ${r.managed ? '<span class="inline-block mt-1 text-[10px] font-bold uppercase text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">managed</span>' : ''}
        </td>
        <td class="py-3 px-4 text-right">${rank}</td>
        <td class="py-3 px-4 text-right">${r.top3}/6</td>
        <td class="py-3 px-4 text-right">${r.top20}/6</td>
        <td class="py-3 px-4 hidden lg:table-cell text-xs text-ink-600">${escapeHtml(r.winners)}</td>
        <td class="py-3 px-4 text-xs">${actionBadge}</td>
      </tr>
    `;
  }).join('');
}
function badgeFromAction(action) {
  if (/CLAIM/i.test(action)) return `<span class="inline-block px-2 py-0.5 rounded text-[11px] font-semibold badge-green">CLAIM</span> <span class="text-ink-600">${escapeHtml(action.replace(/^CLAIM \+ MANAGE — ?/i, ''))}</span>`;
  if (/Defend/i.test(action)) return `<span class="inline-block px-2 py-0.5 rounded text-[11px] font-semibold badge-blue">DEFEND</span> <span class="text-ink-600">${escapeHtml(action.replace(/^Defend — ?/i, ''))}</span>`;
  if (/Driving Directions/i.test(action)) return `<span class="inline-block px-2 py-0.5 rounded text-[11px] font-semibold badge-amber">DD PIN</span> <span class="text-ink-600">${escapeHtml(action.replace(/^Driving Directions(?: pin)? — ?/i, ''))}</span>`;
  return escapeHtml(action);
}

// ============================================================
// LD leaderboard (sortable)
// ============================================================
let _ldSort = { key: 'may_avg_rank', dir: 'asc' };
function renderLDTable(rows) {
  const sortRows = [...rows].sort((a, b) => {
    const dir = _ldSort.dir === 'asc' ? 1 : -1;
    const va = a[_ldSort.key], vb = b[_ldSort.key];
    if (va == null) return 1; if (vb == null) return -1;
    if (typeof va === 'string') return va.localeCompare(vb) * dir;
    return (va - vb) * dir;
  });

  // Update header indicators
  document.querySelectorAll('#ld-table thead th[data-sort]').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (th.dataset.sort === _ldSort.key) th.classList.add(_ldSort.dir === 'asc' ? 'sort-asc' : 'sort-desc');
  });

  const tbody = document.querySelector('#ld-table tbody');
  tbody.innerHTML = sortRows.map(r => `
    <tr class="${r.is_client ? 'is-client' : ''}">
      <td class="py-3 px-4">${escapeHtml(r.name)}</td>
      <td class="py-3 px-4 text-right font-mono">${fmtNum(r.may_top3)}</td>
      <td class="py-3 px-4 text-right">${fmtDelta(r.delta_top3, 0)}</td>
      <td class="py-3 px-4 text-right font-mono">${r.may_avg_rank == null ? '—' : r.may_avg_rank.toFixed(1)}</td>
      <td class="py-3 px-4 text-right">${fmtDelta(r.delta_avg_rank, 1)}</td>
      <td class="py-3 px-4 text-right font-mono text-ink-500">${fmtNum(r.cells)}</td>
      <td class="py-3 px-4 text-xs text-ink-600">${escapeHtml(r.note)}</td>
    </tr>
  `).join('');

  // Wire sort click (only once)
  if (!_ldSort._wired) {
    _ldSort._wired = true;
    document.querySelectorAll('#ld-table thead th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const key = th.dataset.sort;
        if (_ldSort.key === key) _ldSort.dir = _ldSort.dir === 'asc' ? 'desc' : 'asc';
        else { _ldSort.key = key; _ldSort.dir = key === 'name' ? 'asc' : 'desc'; }
        renderLDTable(rows);
      });
    });
  }
}

// ============================================================
// Per-keyword table
// ============================================================
function renderKeywordTable(rows) {
  const tbody = document.querySelector('#kw-table tbody');
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td class="py-3 px-4 font-mono text-xs">${escapeHtml(r.keyword)}</td>
      <td class="py-3 px-4 text-right">${fmtNum(r.feb_cells)}</td>
      <td class="py-3 px-4 text-right">${fmtNum(r.may_cells)}</td>
      <td class="py-3 px-4 text-right font-mono">${r.feb_avg.toFixed(1)}</td>
      <td class="py-3 px-4 text-right font-mono">${r.may_avg.toFixed(1)}</td>
      <td class="py-3 px-4 text-right">${fmtDelta(r.pos_gained, 1)}</td>
      <td class="py-3 px-4 text-right">${fmtNum(r.feb_top3)}</td>
      <td class="py-3 px-4 text-right">${fmtNum(r.may_top3)}</td>
    </tr>
  `).join('');
}

// ============================================================
// GSC decline chart
// ============================================================
function renderGSCChart(decline) {
  const ctx = document.getElementById('gsc-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: decline.map(d => d.month + (d.label ? ` (${d.label})` : '')),
      datasets: [
        {
          label: 'Impressions',
          data: decline.map(d => d.imp),
          backgroundColor: decline.map(d => d.label === 'cliff' ? '#ef4444' : d.label === 'peak' ? '#10b981' : '#1d5b8a'),
          yAxisID: 'y',
          borderRadius: 4
        },
        {
          label: 'Clicks',
          data: decline.map(d => d.clicks),
          type: 'line',
          borderColor: '#f59e0b',
          backgroundColor: '#f59e0b20',
          yAxisID: 'y1',
          tension: 0.3,
          pointRadius: 4,
          borderWidth: 2.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true, position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
        tooltip: { backgroundColor: '#0b1220', padding: 10 }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
        y:  { position: 'left',  grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: v => (v/1000) + 'K', font: { size: 10 } }, beginAtZero: true },
        y1: { position: 'right', grid: { display: false }, beginAtZero: true, ticks: { font: { size: 10 } } }
      }
    }
  });
}

// ============================================================
// URL class chart (donut)
// ============================================================
function renderURLClassChart(rows) {
  const ctx = document.getElementById('urlclass-chart').getContext('2d');
  const colors = ['#1d5b8a', '#0ea5a4', '#8b5cf6', '#f59e0b', '#6b7280', '#ef4444'];
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: rows.map(r => r.class),
      datasets: [{
        data: rows.map(r => r.imp),
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: { position: 'right', labels: { boxWidth: 10, font: { size: 11 } } },
        tooltip: {
          backgroundColor: '#0b1220',
          callbacks: {
            label: (ctx) => {
              const r = rows[ctx.dataIndex];
              return `${r.class}: ${fmtNum(r.imp)} imp (${r.imp_pct}%), ${r.clicks} clicks`;
            }
          }
        }
      }
    }
  });
}

// ============================================================
// Brand pull
// ============================================================
function renderBrandPull(bp) {
  setText('brand-pull-note', bp.note);
  const grid = document.getElementById('brand-pull-grid');
  grid.innerHTML = `
    <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-700">Brand</div>
      <div class="mt-2 text-2xl font-bold">${fmtNum(bp.brand.imp)} imp <span class="text-base text-emerald-700 font-medium">(${bp.brand.imp_pct}%)</span></div>
      <div class="text-sm text-ink-700 mt-1">${fmtNum(bp.brand.clicks)} clicks <span class="font-semibold text-emerald-700">(${bp.brand.clicks_pct}% of total clicks)</span></div>
    </div>
    <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <div class="text-xs font-bold uppercase tracking-wider text-ink-600">Non-brand</div>
      <div class="mt-2 text-2xl font-bold">${fmtNum(bp.non_brand.imp)} imp <span class="text-base text-ink-500 font-medium">(${bp.non_brand.imp_pct}%)</span></div>
      <div class="text-sm text-ink-700 mt-1">${fmtNum(bp.non_brand.clicks)} clicks <span class="font-semibold text-ink-600">(${bp.non_brand.clicks_pct}% of total clicks)</span></div>
    </div>
  `;
}

// ============================================================
// Organic SERP competitors table
// ============================================================
function renderOrgComp(rows) {
  const tbody = document.querySelector('#org-comp-table tbody');
  const max = Math.max(...rows.map(r => r.shared));
  tbody.innerHTML = rows.map(r => {
    const widthPct = (r.shared / max * 100).toFixed(1);
    return `
      <tr>
        <td class="py-3 px-4 font-mono text-sm">${escapeHtml(r.domain)}</td>
        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <div class="w-24 bg-slate-100 rounded h-2 overflow-hidden">
              <div class="bg-brand-500 h-full" style="width:${widthPct}%"></div>
            </div>
            <span class="font-mono w-12 text-right">${fmtNum(r.shared)}</span>
          </div>
        </td>
        <td class="py-3 px-4 text-sm text-ink-600">${escapeHtml(r.type)}</td>
      </tr>
    `;
  }).join('');
}

// ============================================================
// Keyword buckets chart (horizontal bar)
// ============================================================
function renderBucketsChart(buckets) {
  const ctx = document.getElementById('buckets-chart').getContext('2d');
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#6b7280'];
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: buckets.map(b => b.bucket),
      datasets: [{
        data: buckets.map(b => b.keywords),
        backgroundColor: colors,
        borderRadius: 4,
        barThickness: 24
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0b1220',
          callbacks: {
            label: (ctx) => {
              const b = buckets[ctx.dataIndex];
              return `${b.keywords} keywords (${b.pct}%) · ${b.posture}`;
            }
          }
        }
      },
      scales: {
        x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 10 } } },
        y: { grid: { display: false }, ticks: { font: { size: 11 } } }
      }
    }
  });

  const legend = document.getElementById('buckets-legend');
  legend.innerHTML = buckets.map((b, i) => `
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <span class="inline-block w-3 h-3 rounded-sm flex-shrink-0" style="background:${colors[i]}"></span>
        <span class="text-ink-700 truncate">${escapeHtml(b.bucket)}</span>
      </div>
      <span class="text-ink-500 flex-shrink-0">${b.posture}</span>
    </div>
  `).join('');
}

// ============================================================
// Map upside table
// ============================================================
function renderUpsideTable(rows) {
  const tbody = document.querySelector('#upside-table tbody');
  tbody.innerHTML = rows.map(r => {
    const actionBadge = r.delta_text === 'Claim' ? 'badge-green' :
                        r.delta_text === 'DD pin' ? 'badge-amber' : 'badge-blue';
    return `
      <tr>
        <td class="py-2.5 px-4 font-medium">${escapeHtml(r.coord)}${r.managed ? ' <span class="text-[10px] font-bold uppercase text-emerald-700">●</span>' : ''}</td>
        <td class="py-2.5 px-4 text-ink-600">${escapeHtml(r.today)}</td>
        <td class="py-2.5 px-4 text-ink-800 font-medium">${escapeHtml(r.m3_target)}</td>
        <td class="py-2.5 px-4 text-center"><span class="inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${actionBadge}">${escapeHtml(r.delta_text)}</span></td>
      </tr>
    `;
  }).join('');
}

// ============================================================
// Top URLs table
// ============================================================
function renderTopUrlsTable(rows) {
  const tbody = document.querySelector('#top-urls-table tbody');
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td class="py-3 px-4 font-mono text-xs text-ink-800">${escapeHtml(r.url)}</td>
      <td class="py-3 px-4 text-right">${fmtNum(r.imp_90d)}</td>
      <td class="py-3 px-4 text-right">${fmtNum(r.clicks_90d)}</td>
      <td class="py-3 px-4 text-right font-mono">${r.pos.toFixed(1)}</td>
      <td class="py-3 px-4 text-xs text-ink-500 hidden md:table-cell">${escapeHtml(r.class)}</td>
      <td class="py-3 px-4 text-xs">${escapeHtml(r.lever)}</td>
    </tr>
  `).join('');
}

// ============================================================
// Positives / negatives lists
// ============================================================
function renderList(id, items, palette) {
  const ul = document.getElementById(id);
  const dot = palette === 'emerald' ? '#10b981' : '#ef4444';
  ul.innerHTML = items.map(item => `
    <li class="flex items-start gap-2 text-ink-700">
      <span class="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style="background:${dot}"></span>
      <span>${escapeHtml(item)}</span>
    </li>
  `).join('');
}

// ============================================================
// Lever cards (collapsible)
// ============================================================
function renderLeverCards(levers, miniBase) {
  const wrap = document.getElementById('lever-cards');
  const base = miniBase || './';
  wrap.innerHTML = levers.map(L => `
    <div class="lever-card bg-white rounded-xl shadow-sm border border-slate-200 lever-${L.color} overflow-hidden" data-lever-id="${L.id}">
      <button class="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-slate-50 transition">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="inline-block px-2 py-0.5 rounded text-xs font-bold badge-${L.color}">${L.id === 'P0' ? 'P0' : 'Lever ' + L.id}</span>
            <span class="text-xs uppercase tracking-wider text-ink-500 font-semibold">${escapeHtml(L.priority)}</span>
            <span class="text-xs text-ink-500">${L.actions.length} action${L.actions.length === 1 ? '' : 's'}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold mt-1.5 text-ink-900">${escapeHtml(L.name)}</h3>
          <p class="text-sm text-ink-600 mt-2 leading-relaxed">${escapeHtml(L.why)}</p>
        </div>
        <svg class="chev w-5 h-5 text-ink-400 flex-shrink-0 mt-2" viewBox="0 0 20 20" fill="currentColor"><path d="M7.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L11.6 10 7.3 5.7a1 1 0 010-1.4z"/></svg>
      </button>
      <div class="lever-body">
        <div class="border-t border-slate-200 px-5 py-4 bg-slate-50/40">
          <div class="text-xs uppercase tracking-wider font-bold text-ink-500 mb-3">Action items</div>
          <ul class="space-y-2">
            ${L.actions.map(a => `
              <li class="flex items-start gap-3 text-sm">
                <span class="font-mono text-[11px] bg-white border border-slate-300 rounded px-1.5 py-0.5 text-ink-600 flex-shrink-0 mt-0.5 min-w-[5.5rem] text-center">${escapeHtml(a.code)}</span>
                <span class="flex-1 text-ink-700">${escapeHtml(a.name)}</span>
                <span class="text-[11px] font-mono text-ink-500 flex-shrink-0">${escapeHtml(a.month)}</span>
                <span class="text-[11px] font-mono text-ink-400 flex-shrink-0 w-4 text-center">${escapeHtml(a.effort)}</span>
              </li>
            `).join('')}
          </ul>
          <div class="mt-4 pt-3 border-t border-slate-200">
            <div class="text-xs uppercase tracking-wider font-bold text-ink-500 mb-1">Expected outcome</div>
            <p class="text-sm text-ink-700">${escapeHtml(L.outcome)}</p>
          </div>
          ${L.mini_report_url ? `
            <div class="mt-4 pt-3 border-t border-slate-200 flex justify-end">
              <a href="${escapeHtml(base + L.mini_report_url)}" class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-ink-900 text-white hover:bg-ink-700 transition">
                View detailed mini-report
                <svg class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M7.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L11.6 10 7.3 5.7a1 1 0 010-1.4z"/></svg>
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Open the first card by default
  const first = wrap.querySelector('.lever-card');
  if (first) first.classList.add('open');
  wrap.querySelectorAll('.lever-card > button').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });
}

// ============================================================
// Tasks table — filterable
// ============================================================
function renderTasks(levers) {
  const allTasks = [];
  levers.forEach(L => {
    L.actions.forEach(a => allTasks.push({ ...a, leverId: L.id, leverName: L.name, leverColor: L.color }));
  });

  // Populate lever filter
  const leverSel = document.getElementById('task-lever-filter');
  levers.forEach(L => {
    const opt = document.createElement('option');
    opt.value = L.id;
    opt.textContent = `${L.id === 'P0' ? 'P0' : 'Lever ' + L.id} — ${L.name}`;
    leverSel.appendChild(opt);
  });

  const render = () => {
    const q = document.getElementById('task-search').value.toLowerCase().trim();
    const lf = leverSel.value;
    const mf = document.getElementById('task-month-filter').value;
    const filtered = allTasks.filter(t => {
      if (lf && t.leverId !== lf) return false;
      if (mf && !t.month.includes(mf)) return false;
      if (q && !(t.name.toLowerCase().includes(q) || t.code.toLowerCase().includes(q) || t.leverName.toLowerCase().includes(q))) return false;
      return true;
    });
    const tbody = document.querySelector('#tasks-table tbody');
    tbody.innerHTML = filtered.map(t => `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-4"><span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold badge-${t.leverColor}">${t.leverId === 'P0' ? 'P0' : 'L' + t.leverId}</span></td>
        <td class="py-2.5 px-4 font-mono text-xs">${escapeHtml(t.code)}</td>
        <td class="py-2.5 px-4 text-sm">${escapeHtml(t.name)}</td>
        <td class="py-2.5 px-4 text-center text-xs font-mono">${escapeHtml(t.month)}</td>
        <td class="py-2.5 px-4 text-center text-xs font-mono text-ink-500">${escapeHtml(t.effort)}</td>
      </tr>
    `).join('');
    document.getElementById('tasks-summary').textContent = `${filtered.length} of ${allTasks.length} actions shown`;
  };

  document.getElementById('task-search').addEventListener('input', render);
  leverSel.addEventListener('change', render);
  document.getElementById('task-month-filter').addEventListener('change', render);
  render();
}

// ============================================================
// LD heatmap loop — PM vs top 3 competitors, 3 keywords, Feb<->May
// ============================================================
const HM_STATE = {
  ldData: null,
  currentKw: null,
  currentDate: 'feb',   // 'feb' | 'may' (PM legacy) or any date key from ld.date_keys
  dateKeys: null,       // resolved at render time — null until renderHeatmapLoop runs
  dateLabels: null,     // parallel array of human labels
  playing: true,
  cycleKw: false,
  timer: null,
  kwTimer: null,
  PHASE_MS: 4000,        // ms per phase — cycle through all dates over N×PHASE_MS
  KW_CYCLE_MS: 30000     // ms before advancing to next keyword
};

function rankColor(rank) {
  if (rank == null) return '#f8fafc';
  if (rank <= 3)  return '#047857';
  if (rank <= 6)  return '#10b981';
  if (rank <= 10) return '#84cc16';
  if (rank <= 20) return '#f59e0b';
  if (rank <= 50) return '#f97316';
  return '#e5e7eb';
}
function rankTextColor(rank) {
  if (rank == null) return '#94a3b8';
  if (rank <= 6)  return '#ffffff';
  if (rank <= 10) return '#1f2937';
  return '#1f2937';
}

function renderHeatmapLoop(ld) {
  HM_STATE.ldData = ld;
  HM_STATE.currentKw = ld.keywords[0];

  // Resolve global date keys + labels (the master set). Per-keyword dates are
  // a subset of this — some keywords only have Feb/May, others have all four.
  HM_STATE.dateKeysAll   = ld.date_keys || ['feb', 'may'];
  HM_STATE.dateLabelsAll = ld.dates     || ['Feb 2, 2026', 'May 1, 2026'];
  // Active per-keyword dates (recomputed on tab switch)
  HM_STATE.dateKeys   = HM_STATE.dateKeysAll;
  HM_STATE.dateLabels = HM_STATE.dateLabelsAll;
  HM_STATE.currentDate = HM_STATE.dateKeys[0];

  // Per-keyword competitor sets (fallback to global ld.competitors)
  HM_STATE.entitiesForKw = function (kw) {
    const grid = ld.grids[kw];
    const comps = (grid && grid.competitors) || ld.competitors || [];
    return [ld.client, ...comps];
  };
  HM_STATE.activeDatesForKw = function (kw) {
    const grid = ld.grids[kw];
    const present = (grid && grid.dates_present) || HM_STATE.dateKeysAll;
    const labels = present.map(k => {
      const i = HM_STATE.dateKeysAll.indexOf(k);
      return i >= 0 ? HM_STATE.dateLabelsAll[i] : k;
    });
    return { keys: present, labels };
  };

  // Build keyword tabs
  const tabs = document.getElementById('hm-keyword-tabs');
  tabs.innerHTML = ld.keywords.map((kw, i) => `
    <button data-kw="${escapeHtml(kw)}" class="hm-kw-tab text-xs font-semibold px-3 py-1.5 rounded ${i === 0 ? 'bg-brand-500 text-white' : 'bg-white border border-slate-300 text-ink-700 hover:bg-slate-100'}">
      <span class="font-mono">${escapeHtml(kw)}</span>
    </button>
  `).join('');
  tabs.querySelectorAll('.hm-kw-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.hm-kw-tab').forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white');
        b.classList.add('bg-white', 'border', 'border-slate-300', 'text-ink-700', 'hover:bg-slate-100');
      });
      btn.classList.add('bg-brand-500', 'text-white');
      btn.classList.remove('bg-white', 'border', 'border-slate-300', 'text-ink-700', 'hover:bg-slate-100');
      HM_STATE.currentKw = btn.dataset.kw;
      refreshDatesForCurrentKw();
      buildPanels();
      applyState();
    });
  });

  const dateTabsContainer = document.getElementById('hm-date-tabs');

  function refreshDatesForCurrentKw() {
    const { keys, labels } = HM_STATE.activeDatesForKw(HM_STATE.currentKw);
    HM_STATE.dateKeys = keys;
    HM_STATE.dateLabels = labels;
    HM_STATE.currentDate = keys[0];
    if (dateTabsContainer) {
      dateTabsContainer.innerHTML = HM_STATE.dateKeys.map((k, i) => {
        const label = HM_STATE.dateLabels[i] || k;
        const active = i === 0;
        return `<button data-date="${escapeHtml(k)}" class="hm-date-btn px-3 py-1.5 text-xs font-semibold ${active ? 'bg-brand-500 text-white' : 'bg-white text-ink-700'}">${escapeHtml(label)}</button>`;
      }).join('');
      dateTabsContainer.querySelectorAll('.hm-date-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          pauseLoop();
          HM_STATE.currentDate = btn.dataset.date;
          updateDateBtnStyles();
          applyState();
        });
      });
    }
  }
  refreshDatesForCurrentKw();

  // Play/pause
  document.getElementById('hm-play-pause').addEventListener('click', () => {
    if (HM_STATE.playing) pauseLoop(); else startLoop();
  });

  // Cycle kw toggle
  document.getElementById('hm-cycle-kw').addEventListener('change', e => {
    HM_STATE.cycleKw = e.target.checked;
    if (HM_STATE.cycleKw && HM_STATE.playing) scheduleKwAdvance();
    else if (HM_STATE.kwTimer) { clearInterval(HM_STATE.kwTimer); HM_STATE.kwTimer = null; }
  });

  buildPanels();
  applyState();
  startLoop();
}

function buildPanels() {
  const ld = HM_STATE.ldData;
  const kw = HM_STATE.currentKw;
  const grid = ld.grids[kw];
  if (!grid) return;
  const entities = HM_STATE.entitiesForKw ? HM_STATE.entitiesForKw(kw) : [ld.client, ...(ld.competitors || [])];

  // Normalize bounds across the union of cells. Same x/y space across Feb/May.
  const minX = grid.bounds.min_x, maxX = grid.bounds.max_x;
  const minY = grid.bounds.min_y, maxY = grid.bounds.max_y;
  const cols = maxX - minX + 1;
  const rows = maxY - minY + 1;

  // Build a Set of present cells (some bins are empty)
  const presentCells = new Set(grid.cells.map(c => `${c.x},${c.y}`));

  // Pre-index ranks: { entity: { 'x,y': rank } } per date
  const dateKeys = HM_STATE.dateKeys || ['feb', 'may'];
  const idx = {};
  dateKeys.forEach(d => { idx[d] = {}; });
  dateKeys.forEach(d => {
    entities.forEach(e => {
      idx[d][e] = {};
      (grid[d] && grid[d][e] || []).forEach(r => { idx[d][e][`${r.x},${r.y}`] = r.rank; });
    });
  });
  HM_STATE._idx = idx;
  HM_STATE._kwGrid = { cols, rows, minX, minY, presentCells, entities };

  const wrap = document.getElementById('hm-panels');
  wrap.innerHTML = entities.map(entity => {
    const s = grid.summary[entity];
    const isClient = entity === ld.client;
    return `
      <div class="rounded-lg border ${isClient ? 'border-brand-500 bg-brand-50/30' : 'border-slate-200 bg-white'} p-3">
        <div class="flex items-center justify-between mb-2 gap-2">
          <div class="font-semibold text-sm truncate ${isClient ? 'text-brand-700' : 'text-ink-800'}" title="${escapeHtml(entity)}">${escapeHtml(entity)}${isClient ? ' <span class="text-[10px] uppercase font-bold text-brand-500">(client)</span>' : ''}</div>
        </div>
        <div class="hm-grid-wrap" data-entity="${escapeHtml(entity)}">
          <div class="hm-grid" style="display:grid; grid-template-columns: repeat(${cols}, 1fr); gap: 1px; aspect-ratio: ${cols}/${rows};">
            ${(() => {
              const cellsHtml = [];
              for (let yi = 0; yi < rows; yi++) {
                for (let xi = 0; xi < cols; xi++) {
                  const x = minX + xi;
                  const y = minY + yi;
                  const key = `${x},${y}`;
                  const present = presentCells.has(key);
                  cellsHtml.push(`<div class="hm-cell ${present ? '' : 'off-grid'}" data-key="${key}" data-x="${x}" data-y="${y}" title=""></div>`);
                }
              }
              return cellsHtml.join('');
            })()}
          </div>
        </div>
        <div class="mt-3 grid grid-cols-3 gap-1 text-center text-[10px] uppercase tracking-wider font-semibold text-ink-500">
          <div>Avg rank</div><div>Top-3</div><div>Top-10</div>
        </div>
        <div class="grid grid-cols-3 gap-1 text-center mt-0.5" data-entity-stats="${escapeHtml(entity)}">
          <div class="text-base font-bold text-ink-800 stat-avg">—</div>
          <div class="text-base font-bold text-ink-800 stat-top3">—</div>
          <div class="text-base font-bold text-ink-800 stat-top10">—</div>
        </div>
      </div>
    `;
  }).join('');

  // Style cells (need CSS-style transitions)
  document.querySelectorAll('.hm-cell').forEach(c => {
    c.style.background = '#f8fafc';
    c.style.borderRadius = '2px';
    c.style.fontSize = '9px';
    c.style.lineHeight = '1';
    c.style.display = 'flex';
    c.style.alignItems = 'center';
    c.style.justifyContent = 'center';
    c.style.fontWeight = '600';
    c.style.transition = 'background-color 800ms ease, color 800ms ease';
    c.style.color = '#94a3b8';
    if (c.classList.contains('off-grid')) {
      c.style.background = 'transparent';
    }
  });
}

function applyState() {
  const ld = HM_STATE.ldData;
  const idx = HM_STATE._idx;
  const kw = HM_STATE.currentKw;
  const date = HM_STATE.currentDate;
  if (!ld || !idx) return;
  const grid = ld.grids[kw];
  const entities = HM_STATE._kwGrid.entities;

  // Resolve human-readable date label for current date key (for tooltips)
  const dateKeys = HM_STATE.dateKeys || ['feb', 'may'];
  const dateLabels = HM_STATE.dateLabels || ['Feb 2, 2026', 'May 1, 2026'];
  const dateIdx = dateKeys.indexOf(date);
  const dateLabel = dateIdx >= 0 ? (dateLabels[dateIdx] || date) : date;

  entities.forEach(entity => {
    const panel = document.querySelector(`[data-entity="${cssEscape(entity)}"]`);
    if (!panel) return;
    panel.querySelectorAll('.hm-cell').forEach(cell => {
      if (cell.classList.contains('off-grid')) return;
      const key = cell.dataset.key;
      const rank = idx[date][entity]?.[key];
      cell.style.background = rankColor(rank);
      cell.style.color = rankTextColor(rank);
      cell.textContent = (rank != null && rank <= 20) ? rank : '';
      cell.title = `${entity} @ cell (${cell.dataset.x},${cell.dataset.y}) — ${rank != null ? 'rank ' + rank : 'not in top-N'} (${dateLabel})`;
    });

    const stats = grid.summary[entity];
    const statBox = document.querySelector(`[data-entity-stats="${cssEscape(entity)}"]`);
    if (statBox && stats) {
      const avg  = stats[`${date}_avg`];
      const top3 = stats[`${date}_top3`];
      const top10 = stats[`${date}_top10`];
      statBox.querySelector('.stat-avg').textContent   = avg  != null ? Number(avg).toFixed(1) : '—';
      statBox.querySelector('.stat-top3').textContent  = top3 != null ? top3 : '—';
      statBox.querySelector('.stat-top10').textContent = top10 != null ? top10 : '—';
    }
  });

  updateDateBtnStyles();
}

function updateDateBtnStyles() {
  document.querySelectorAll('.hm-date-btn').forEach(b => {
    if (b.dataset.date === HM_STATE.currentDate) {
      b.classList.add('bg-brand-500', 'text-white');
      b.classList.remove('bg-white', 'text-ink-700');
    } else {
      b.classList.remove('bg-brand-500', 'text-white');
      b.classList.add('bg-white', 'text-ink-700');
    }
  });
}

function startLoop() {
  if (HM_STATE.timer) clearInterval(HM_STATE.timer);
  HM_STATE.playing = true;
  HM_STATE.timer = setInterval(() => {
    const keys = HM_STATE.dateKeys || ['feb', 'may'];
    const i = keys.indexOf(HM_STATE.currentDate);
    HM_STATE.currentDate = keys[(i + 1) % keys.length];
    updateDateBtnStyles();
    applyState();
  }, HM_STATE.PHASE_MS);
  if (HM_STATE.cycleKw) scheduleKwAdvance();
  updatePlayPauseUI();
}

function pauseLoop() {
  if (HM_STATE.timer) clearInterval(HM_STATE.timer);
  if (HM_STATE.kwTimer) clearInterval(HM_STATE.kwTimer);
  HM_STATE.timer = HM_STATE.kwTimer = null;
  HM_STATE.playing = false;
  updatePlayPauseUI();
}

function scheduleKwAdvance() {
  if (HM_STATE.kwTimer) clearInterval(HM_STATE.kwTimer);
  HM_STATE.kwTimer = setInterval(() => {
    const ld = HM_STATE.ldData;
    const i = ld.keywords.indexOf(HM_STATE.currentKw);
    const next = ld.keywords[(i + 1) % ld.keywords.length];
    // Click the corresponding tab so visual stays in sync
    const btn = document.querySelector(`.hm-kw-tab[data-kw="${cssEscape(next)}"]`);
    if (btn) btn.click();
  }, HM_STATE.KW_CYCLE_MS);
}

function updatePlayPauseUI() {
  const btn = document.getElementById('hm-play-pause');
  const label = document.getElementById('hm-play-label');
  const iconPlay = document.getElementById('hm-icon-play');
  const iconPause = document.getElementById('hm-icon-pause');
  if (HM_STATE.playing) {
    btn.classList.remove('bg-slate-200', 'text-ink-700');
    btn.classList.add('bg-emerald-100', 'text-emerald-800');
    label.textContent = 'Pause';
    iconPause.classList.remove('hidden');
    iconPlay.classList.add('hidden');
  } else {
    btn.classList.remove('bg-emerald-100', 'text-emerald-800');
    btn.classList.add('bg-slate-200', 'text-ink-700');
    label.textContent = 'Play';
    iconPause.classList.add('hidden');
    iconPlay.classList.remove('hidden');
  }
}

function cssEscape(s) {
  // For use in attribute selectors — escape quotes
  return String(s).replace(/"/g, '\\"');
}

// ============================================================
// Bernie's: Ahrefs 24-month trajectory chart
// ============================================================
function renderAhrefsTrajectory(traj) {
  setText('trajectory-headline', traj.headline);
  setText('trajectory-annotation', traj.annotation);
  const ctx = document.getElementById('ahrefs-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: traj.months,
      datasets: [
        {
          label: 'Est. monthly traffic',
          data: traj.traffic,
          borderColor: '#1d5b8a',
          backgroundColor: '#1d5b8a20',
          tension: 0.25,
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 5,
          yAxisID: 'y'
        },
        {
          label: 'Pages ranking',
          data: traj.pages,
          borderColor: '#f59e0b',
          backgroundColor: '#f59e0b20',
          tension: 0.25,
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 5,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true, position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
        tooltip: { backgroundColor: '#0b1220', padding: 12 }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 45 } },
        y:  { position: 'left',  grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: v => (v/1000).toFixed(1) + 'K', font: { size: 10 } }, title: { display: true, text: 'Traffic', font: { size: 10 } } },
        y1: { position: 'right', grid: { display: false }, beginAtZero: true, ticks: { font: { size: 10 } }, title: { display: true, text: 'Pages', font: { size: 10 } } }
      }
    }
  });
}

// ============================================================
// Bernie's: AIO saturation
// ============================================================
function renderAIOSaturation(aio) {
  setText('aio-headline', aio.headline);
  setText('aio-may25', `${aio.may_2025_aio} / ${aio.may_2025_total}`);
  setText('aio-may26', `${aio.may_2026_aio} / ${aio.may_2026_total}`);
  setText('aio-ctr-note', aio.ctr_note);

  const exList = document.getElementById('aio-exceptions');
  if (exList) {
    exList.innerHTML = aio.exceptions.map(e => `
      <li class="flex items-start gap-2">
        <span class="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500"></span>
        <span class="text-ink-700"><span class="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">${escapeHtml(e.kw)}</span> <span class="text-ink-500">— ${escapeHtml(e.reason)}</span></span>
      </li>
    `).join('');
  }

  // SERP feature bars
  const wrap = document.getElementById('serp-features-bars');
  if (wrap && aio.serp_features_2026) {
    wrap.innerHTML = aio.serp_features_2026.map(f => {
      const pct = (f.present / f.total * 100).toFixed(0);
      const colorClass = f.present >= f.total * 0.8 ? 'bg-rose-500' :
                         f.present >= f.total * 0.4 ? 'bg-amber-500' : 'bg-emerald-500';
      return `
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-medium text-ink-700">${escapeHtml(f.feature)}</span>
            <span class="font-mono text-ink-600">${f.present} / ${f.total} <span class="text-ink-400">(${pct}%)</span></span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div class="${colorClass} h-full rounded-full" style="width:${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ============================================================
// Bernie's: Index health
// ============================================================
function renderIndexHealth(ih) {
  setText('index-health-headline', ih.headline);

  // Growth chart
  const chartCtx = document.getElementById('index-health-chart');
  if (chartCtx) {
    new Chart(chartCtx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ih.rows.map(r => r.date),
        datasets: [{
          label: 'Crawled - not indexed',
          data: ih.rows.map(r => r.count),
          borderColor: '#ef4444',
          backgroundColor: '#ef444420',
          tension: 0.25,
          borderWidth: 2.5,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: ih.rows.map(r => r.label ? '#0b1220' : '#ef4444')
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0b1220',
            callbacks: {
              label: (ctx) => {
                const row = ih.rows[ctx.dataIndex];
                return [`${row.count.toLocaleString()} pages`, row.label || ''].filter(Boolean);
              }
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' }, beginAtZero: true, ticks: { callback: v => v.toLocaleString(), font: { size: 10 } } }
        }
      }
    });
  }

  // Category breakdown (mini bars)
  const catWrap = document.getElementById('index-health-categories');
  if (catWrap) {
    const max = Math.max(...ih.categories.map(c => c.count));
    catWrap.innerHTML = ih.categories.map(c => {
      const pct = (c.count / max * 100).toFixed(0);
      return `
        <div>
          <div class="flex items-center justify-between text-xs mb-0.5">
            <span class="text-ink-700 truncate pr-2">${escapeHtml(c.name)}</span>
            <span class="font-mono text-ink-600 flex-shrink-0">${c.count}</span>
          </div>
          <div class="w-full bg-slate-100 rounded h-1.5 overflow-hidden">
            <div class="bg-rose-400 h-full" style="width:${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Full categories table
  const tbody = document.querySelector('#index-health-table tbody');
  if (tbody) {
    tbody.innerHTML = ih.categories.map(c => `
      <tr>
        <td class="py-3 px-4 font-medium">${escapeHtml(c.name)}</td>
        <td class="py-3 px-4 text-right font-mono">${c.count}</td>
        <td class="py-3 px-4 hidden md:table-cell text-xs font-mono text-ink-500">${escapeHtml(c.example)}</td>
        <td class="py-3 px-4 text-xs text-ink-700">${escapeHtml(c.fix)}</td>
      </tr>
    `).join('');
  }
}

// ============================================================
// Bernie's: SKU coverage table
// ============================================================
function renderSKUCoverage(skus) {
  const tbody = document.querySelector('#sku-table tbody');
  if (!tbody) return;
  tbody.innerHTML = skus.map(s => {
    const priorityClass = s.priority === 'P0' ? 'badge-red' :
                         s.priority === 'P1' ? 'badge-amber' : 'badge-blue';
    return `
      <tr>
        <td class="py-3 px-4 font-semibold">${escapeHtml(s.sku)}</td>
        <td class="py-3 px-4 hidden md:table-cell text-xs text-ink-600">${escapeHtml(s.category)}</td>
        <td class="py-3 px-4 text-right font-mono">${fmtNum(s.universe_kws)}</td>
        <td class="py-3 px-4 text-right font-mono font-semibold text-ink-900">${fmtNum(s.pure_opp_sv)}</td>
        <td class="py-3 px-4 text-right font-mono hidden lg:table-cell">${s.wrong_url}</td>
        <td class="py-3 px-4 text-right font-mono hidden lg:table-cell">${s.store_good}</td>
        <td class="py-3 px-4 text-center"><span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold ${priorityClass}">${escapeHtml(s.priority)} · ${escapeHtml(s.month)}</span></td>
        <td class="py-3 px-4 hidden md:table-cell text-xs text-ink-500">${s.head_kws ? s.head_kws.slice(0, 3).map(k => `<code class="bg-slate-100 px-1 rounded text-[10px]">${escapeHtml(k)}</code>`).join(' ') : ''}</td>
      </tr>
    `;
  }).join('');
}

// ============================================================
// Bernie's: Competitor reshuffle bars
// ============================================================
function renderReshuffleBars(rows) {
  const wrap = document.getElementById('reshuffle-bars');
  if (!wrap) return;
  const max = Math.max(...rows.map(r => Math.abs(r.delta_pct)));
  // Use log-ish scaling so Spot & Tango at +2,078% doesn't dwarf everything
  const scale = v => {
    const abs = Math.abs(v);
    return abs === 0 ? 0 : Math.min(100, 10 + Math.log10(1 + abs) * 22);
  };

  wrap.innerHTML = rows.map(r => {
    const isPos = r.delta_pct > 0;
    const isClient = r.is_client;
    const w = scale(r.delta_pct);
    const verifyBadge = r.verified_pattern ? '<span class="ml-1 text-[10px] font-bold text-emerald-700">✓ verified</span>' : '';
    return `
      <div class="flex items-center gap-3 text-sm ${isClient ? 'font-bold' : ''}">
        <div class="w-32 sm:w-40 truncate ${isClient ? 'text-brand-700' : 'text-ink-800'}">${escapeHtml(r.name)}${isClient ? ' <span class="text-[10px] font-bold uppercase text-brand-500">(us)</span>' : ''}${verifyBadge}</div>
        <div class="flex-1 relative h-6 bg-slate-50 border border-slate-200 rounded overflow-hidden">
          <div class="absolute top-0 bottom-0 left-1/2 w-px bg-slate-300"></div>
          <div class="absolute top-1 bottom-1 ${isPos ? 'rounded-r' : 'rounded-l'} ${isClient ? 'bg-brand-700' : isPos ? 'bg-emerald-500' : 'bg-rose-500'}"
               style="${isPos ? `left: 50%; width: ${w/2}%` : `right: 50%; width: ${w/2}%`}"></div>
        </div>
        <div class="w-20 sm:w-24 text-right font-mono font-semibold ${isPos ? 'text-emerald-700' : 'text-rose-700'}">${isPos ? '+' : ''}${r.delta_pct}%</div>
        <div class="hidden md:block w-44 text-xs text-ink-500 font-mono text-right">${fmtNum(r.may25_top10)} → ${fmtNum(r.may26_top10)}</div>
      </div>
    `;
  }).join('');
}

// ============================================================
// Bernie's: S&T pattern card
// ============================================================
function renderSTPattern(st) {
  setText('st-headline', st.headline);
  setText('st-method-summary', st.method_summary || '');

  const findingsBody = document.querySelector('#st-findings-table tbody');
  if (findingsBody && st.headline_findings) {
    findingsBody.innerHTML = st.headline_findings.map(f => `
      <tr>
        <td class="py-2 px-3 font-medium text-ink-700">${escapeHtml(f.label)}</td>
        <td class="py-2 px-3 text-right font-mono font-bold text-emerald-700">${escapeHtml(f.value)}</td>
        <td class="py-2 px-3 text-right font-mono text-rose-700">${escapeHtml(f.bernies)}</td>
        <td class="py-2 px-3 text-xs text-ink-500 hidden md:table-cell">${escapeHtml(f.note)}</td>
      </tr>
    `).join('');
  }

  const list = document.getElementById('st-pattern-list');
  if (list) {
    list.innerHTML = st.pattern_elements.map(el => `
      <li class="flex items-start gap-2 text-ink-700">
        <span class="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-emerald-500"></span>
        <span>${escapeHtml(el)}</span>
      </li>
    `).join('');
  }
  setText('st-adaptation', st.bernies_overlay || st.bernies_adaptation || '');

  const p0List = document.getElementById('st-p0-list');
  if (p0List && st.p0_articles) {
    p0List.innerHTML = st.p0_articles.map(p => `
      <li class="flex items-start gap-2 text-ink-700">
        <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 flex-shrink-0">P0 ${escapeHtml(p.gap)}</span>
        <span><strong>${escapeHtml(p.pair)}</strong> · S&amp;T ${fmtNum(p.st_traffic)}/mo · ${escapeHtml(p.fix_note)}</span>
      </li>
    `).join('');
  }
}

// ============================================================
// Bernie's: Mini reports strip (top of page)
// ============================================================
function renderMiniReports(reports) {
  const grid = document.getElementById('mini-reports-grid');
  if (!grid) return;
  const accents = ['border-t-emerald-500', 'border-t-rose-500', 'border-t-indigo-500', 'border-t-amber-500'];
  grid.innerHTML = reports.map((r, i) => `
    <a href="${escapeHtml(r.slug)}" class="block bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 ${accents[i % accents.length]} p-4 hover:shadow-md transition">
      <div class="text-xs font-bold uppercase tracking-wider text-ink-500 mb-1">Deep dive</div>
      <div class="text-sm font-bold text-ink-900 leading-tight">${escapeHtml(r.name)}</div>
      <div class="text-xs text-ink-500 mt-2 leading-relaxed">${escapeHtml(r.summary)}</div>
      <div class="text-xs font-mono text-brand-500 mt-3">${escapeHtml(r.slug)} →</div>
    </a>
  `).join('');
}

// ============================================================
// Bernie's: Quarterly YoY infographic (3 big-number panels)
// ============================================================
function renderYoyInfographic(yoy) {
  if (!yoy) return;
  setText('yoy-headline', yoy.headline);
  setText('yoy-subtitle', yoy.subtitle);
  const grid = document.getElementById('yoy-panels');
  if (!grid) return;
  grid.innerHTML = yoy.panels.map(p => {
    const arrow = p.delta_pct > 0 ? '▲' : '▼';
    const isUp = p.delta_pct > 0;
    const chipBg = isUp ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-rose-50 text-rose-700 border-rose-300';
    const fmt = (v) => p.format === 'pct' ? v.toFixed(2) + '%' : Number(v).toLocaleString();
    return `
      <div class="border ${chipBg.replace('text-', 'border-')} rounded-xl p-5 text-center">
        <div class="inline-flex items-baseline gap-2 px-3 py-1 rounded-full ${chipBg} border-2 font-extrabold text-2xl">
          <span>${arrow}</span>
          <span>${isUp ? '+' : ''}${p.delta_pct}%</span>
        </div>
        <div class="text-xs text-ink-500 italic mt-1">YoY · Q1 2025 → Q1 2026</div>
        <div class="text-lg font-bold text-ink-900 mt-3">${escapeHtml(p.delta_label)}</div>
        <div class="mt-5 flex items-end justify-around">
          <div>
            <div class="text-xs text-ink-500">Q1 2025</div>
            <div class="text-2xl font-extrabold text-ink-600">${fmt(p.old_value)}</div>
          </div>
          <div class="text-ink-300 text-2xl">→</div>
          <div>
            <div class="text-xs text-ink-500">Q1 2026</div>
            <div class="text-2xl font-extrabold ${isUp ? 'text-emerald-700' : 'text-rose-700'}">${fmt(p.new_value)}</div>
          </div>
        </div>
        <div class="text-[11px] uppercase tracking-wider text-ink-500 font-bold mt-5">${escapeHtml(p.metric)}</div>
        <div class="text-xs text-ink-500 italic mt-2 leading-relaxed">${escapeHtml(p.context)}</div>
      </div>
    `;
  }).join('');
}

// ============================================================
// Bernie's: Quarterly 3-panel chart (Sessions / Transactions / CVR)
// with big YoY chips per panel + value labels per quarter, mirroring
// the matplotlib triple-panel layout in the PDF deliverable.
// ============================================================
function renderQuarterlyChart(qc) {
  if (!qc) return;
  setText('quarterly-chart-headline', qc.headline);
  setText('quarterly-chart-subtitle', qc.subtitle || '');
  setText('quarterly-chart-estimate-note', qc.estimate_note || '');
  const wrap = document.getElementById('quarterly-chart-panels');
  if (!wrap) return;

  const isEst = qc.is_estimate || qc.quarters.map(() => false);

  // Build a per-panel value-label plugin via closure — each panel captures
  // its own formatter, so we don't need Chart.js's clunky plugin options API.
  const makeValueLabelsPlugin = (fmt) => ({
    id: 'qc-value-labels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      const dataset = chart.data.datasets[0];
      if (!dataset) return;
      const meta = chart.getDatasetMeta(0);
      ctx.save();
      ctx.font = 'bold 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      meta.data.forEach((point, i) => {
        const v = dataset.data[i];
        if (v == null) return;
        ctx.fillStyle = isEst[i] ? '#9ca3af' : '#0b1220';
        const yOffset = chart.config.type === 'bar' ? -6 : -10;
        ctx.fillText(fmt(v), point.x, point.y + yOffset);
      });
      ctx.restore();
    }
  });

  const panels = [
    {
      key: 'sessions',
      title: 'Sessions (per quarter)',
      data: qc.sessions,
      type: 'line',
      color: '#1d4ed8',
      fillBg: 'rgba(29, 78, 216, 0.18)',
      yoyPct: qc.yoy_q1.sessions_pct,
      fmt: (v) => v.toLocaleString(),
      pointStyle: 'circle',
      pointRadius: 7
    },
    {
      key: 'tx',
      title: 'Transactions (completed purchases)',
      data: qc.transactions,
      type: 'bar',
      color: '#475569',
      yoyPct: qc.yoy_q1.transactions_pct,
      fmt: (v) => v.toLocaleString(),
    },
    {
      key: 'cvr',
      title: 'Conversion rate (transactions ÷ sessions, quarterly)',
      data: qc.cvr,
      type: 'line',
      color: '#15803d',
      fillBg: 'rgba(21, 128, 61, 0.18)',
      yoyPct: qc.yoy_q1.cvr_pct,
      fmt: (v) => v.toFixed(2) + '%',
      pointStyle: 'rectRot',
      pointRadius: 8
    }
  ];

  // Render skeleton (one card per panel) — each contains a canvas + an
  // absolutely-positioned YoY chip in the top-right.
  wrap.innerHTML = panels.map((p, i) => {
    const arrow = p.yoyPct > 0 ? '▲' : '▼';
    const positive = (p.key === 'sessions' ? p.yoyPct > 0 : p.yoyPct > 0);
    const chipColor = positive ? 'rgb(21, 128, 61)' : 'rgb(185, 28, 28)';
    const chipBg = positive ? '#f0fdf4' : '#fef2f2';
    return `
      <div class="relative border border-slate-200 rounded-lg p-4">
        <div class="text-sm font-bold text-ink-700">${escapeHtml(p.title)}</div>
        <div class="absolute right-4 top-3 z-10">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border-2 font-extrabold text-lg"
               style="color: ${chipColor}; border-color: ${chipColor}; background: ${chipBg};">
            <span>${arrow}</span><span>${p.yoyPct > 0 ? '+' : ''}${p.yoyPct}%</span>
          </div>
          <div class="text-[10px] text-right text-ink-500 italic mt-1">Q1 2025 → Q1 2026 (YoY)</div>
        </div>
        <div class="h-44 sm:h-52 mt-3"><canvas id="qc-canvas-${p.key}"></canvas></div>
      </div>
    `;
  }).join('');

  // Now instantiate each chart
  panels.forEach((p) => {
    const ctx = document.getElementById('qc-canvas-' + p.key);
    if (!ctx) return;

    const dataset = p.type === 'line' ? {
      label: p.title,
      data: p.data,
      borderColor: p.color,
      backgroundColor: p.fillBg,
      fill: true,
      tension: 0.25,
      borderWidth: 2.5,
      pointRadius: p.data.map((_, i) => isEst[i] ? p.pointRadius : p.pointRadius),
      pointStyle: p.data.map((_, i) => isEst[i] ? p.pointStyle : p.pointStyle),
      pointBackgroundColor: p.data.map((_, i) => isEst[i] ? '#ffffff' : p.color),
      pointBorderColor: p.data.map((_, i) => isEst[i] ? '#9ca3af' : p.color),
      pointBorderWidth: p.data.map((_, i) => isEst[i] ? 2 : 1.5),
      segment: {
        borderDash: (segCtx) => isEst[segCtx.p1DataIndex] ? [8, 5] : undefined,
        borderColor: (segCtx) => isEst[segCtx.p1DataIndex] ? '#9ca3af' : p.color
      }
    } : {
      label: p.title,
      data: p.data,
      backgroundColor: p.data.map((_, i) => isEst[i] ? 'rgba(156, 163, 175, 0.5)' : p.color),
      borderColor: p.data.map((_, i) => isEst[i] ? '#9ca3af' : p.color),
      borderWidth: p.data.map((_, i) => isEst[i] ? 2 : 0),
      borderDash: p.data.map((_, i) => isEst[i] ? [6, 4] : undefined),
      barPercentage: 0.7,
      categoryPercentage: 0.8
    };

    new Chart(ctx.getContext('2d'), {
      type: p.type,
      data: { labels: qc.quarters, datasets: [dataset] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 26, right: 10 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0b1220',
            padding: 12,
            titleColor: '#fff',
            bodyColor: '#e5e7eb',
            borderColor: '#374151',
            borderWidth: 1,
            callbacks: {
              label: (ctx) => `${p.title}: ${p.fmt(ctx.raw)}${isEst[ctx.dataIndex] ? ' (est)' : ''}`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10, weight: 'bold' } } },
          y: {
            grid: { color: 'rgba(0,0,0,0.05)' },
            beginAtZero: true,
            ticks: {
              font: { size: 10 },
              callback: (v) => p.key === 'cvr' ? v.toFixed(2) + '%' : Number(v).toLocaleString()
            }
          }
        }
      },
      plugins: [makeValueLabelsPlugin(p.fmt)]
    });
  });
}

// ============================================================
// Bernie's: Store Gap deep card (why/how/where summary cards)
// ============================================================
function renderStoreGapSummary(gap) {
  if (!gap) return;
  const whyUl = document.getElementById('store-gap-why');
  if (whyUl) {
    whyUl.innerHTML = gap.why_short.map(w => `
      <li class="flex items-start gap-2">
        <span class="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-rose-500"></span>
        <span>${escapeHtml(w)}</span>
      </li>
    `).join('');
  }
  setText('store-gap-how', gap.how_short);
  setText('store-gap-where', gap.where_short);
}

// ============================================================
// Bernie's: Top 50 losers preview (stats + 5-row table + sitemap actions)
// ============================================================
function renderTop50Preview(t50) {
  if (!t50) return;
  setText('top50-narrative', t50.narrative);
  setText('top50-sitemap-connection', t50.ideal_sitemap_connection);

  const stats = document.getElementById('top50-stats');
  if (stats) {
    const tiles = [
      { label: 'Combined YoY 90d loss (top 50)', value: fmtNum(t50.combined_yoy_90d_loss), accent: 'border-t-rose-500', sub: `Top 10 share: ${Math.round((t50.top_10_share_of_total||0)*100)}%` },
      { label: 'In existing 10-URL refresh plan', value: `${t50.in_existing_plan}/50`, accent: 'border-t-amber-500', sub: 'BLOG-REF-01..10 (P0/M1)' },
      { label: 'Mapped to Perfect Poop cluster', value: `${t50.mapped_to_sitemap_cluster}/50`, accent: 'border-t-emerald-500', sub: 'Each carries a sitemap action' },
      { label: 'Top 50 = % of all blog loss', value: `${Math.round((t50.top_50_share_of_all_blog_loss||0)*100)}%`, accent: 'border-t-sky-500', sub: 'Concentrated fix surface' }
    ];
    stats.innerHTML = tiles.map(t => `
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 ${t.accent} p-4">
        <div class="text-[10px] font-bold uppercase tracking-wider text-ink-500 leading-tight">${escapeHtml(t.label)}</div>
        <div class="text-2xl font-extrabold text-ink-900 mt-1">${t.value}</div>
        <div class="text-xs text-ink-500 mt-1">${escapeHtml(t.sub)}</div>
      </div>
    `).join('');
  }

  const actionsWrap = document.getElementById('top50-actions');
  if (actionsWrap && t50.action_distribution) {
    const actionStyles = {
      manage_redirects: 'bg-rose-100 text-rose-800',
      solve_cannibalization: 'bg-purple-100 text-purple-800',
      upgrade_main_article: 'bg-blue-100 text-blue-800',
      consolidate_learn_more: 'bg-amber-100 text-amber-800',
      review_manually: 'bg-slate-200 text-slate-700',
      write_new_article: 'bg-emerald-100 text-emerald-800',
      write_new_page: 'bg-emerald-100 text-emerald-800'
    };
    actionsWrap.innerHTML = Object.entries(t50.action_distribution).map(([k, v]) => `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold ${actionStyles[k] || 'bg-slate-100 text-slate-700'}">
        <span>${escapeHtml(k.replace(/_/g, ' '))}</span>
        <span class="opacity-70">×${v}</span>
      </span>
    `).join('');
  }

  const tbody = document.querySelector('#top50-preview-table tbody');
  if (tbody && t50.top_5_visible_in_dashboard) {
    tbody.innerHTML = t50.top_5_visible_in_dashboard.map(r => `
      <tr>
        <td class="py-3 px-3 text-center font-bold text-rose-700">${r.rank}</td>
        <td class="py-3 px-3 font-mono text-xs">${escapeHtml(r.url)}</td>
        <td class="py-3 px-3 text-right font-mono font-semibold text-rose-700">−${fmtNum(r.loss)}</td>
        <td class="py-3 px-3 text-center font-mono hidden md:table-cell">#${r.current_rank}</td>
        <td class="py-3 px-3 text-xs hidden lg:table-cell"><code class="bg-slate-100 px-1.5 py-0.5 rounded">${escapeHtml(r.target_kw)}</code> <span class="text-ink-500">SV ${fmtNum(r.sv)}</span></td>
        <td class="py-3 px-3 text-xs">${escapeHtml(r.sitemap_action)}</td>
        <td class="py-3 px-3 text-xs font-mono text-ink-600 hidden md:table-cell">${escapeHtml(r.in_plan || '')}</td>
      </tr>
    `).join('');
  }
}

// ============================================================
// Bernie's: Production cadence (current vs proposed)
// ============================================================
function renderCadence(cadence) {
  if (!cadence) return;
  setText('cadence-headline', cadence.headline);
  setText('cadence-implication', cadence.implication);
  setText('cadence-rationale', cadence.proposed.rationale || '');

  const cur = document.getElementById('cadence-current');
  if (cur) {
    cur.innerHTML = `
      <div class="flex items-baseline justify-between border-b border-slate-200 pb-2">
        <span class="text-ink-700">Article upgrades / month</span>
        <span class="text-2xl font-extrabold text-ink-900">${cadence.current.upgrades_per_month}</span>
      </div>
      <div class="flex items-baseline justify-between border-b border-slate-200 pb-2">
        <span class="text-ink-700">New blog posts / month</span>
        <span class="text-2xl font-extrabold text-ink-900">${cadence.current.new_blogs_per_month}</span>
      </div>
      <div class="flex items-baseline justify-between border-b border-slate-200 pb-2">
        <span class="text-ink-700">CTR optimizations / month</span>
        <span class="text-2xl font-extrabold text-ink-900">${cadence.current.ctr_optimizations_per_month}</span>
      </div>
      <div class="flex items-baseline justify-between">
        <span class="text-ink-700">PR + backlinks</span>
        <span class="text-sm font-mono text-ink-500">${escapeHtml(cadence.current.pr_backlinks)}</span>
      </div>
    `;
  }

  const prop = document.getElementById('cadence-proposed');
  if (prop) {
    prop.innerHTML = `
      <div class="flex items-baseline justify-between border-b border-emerald-100 pb-2">
        <span class="text-ink-700">Article upgrades / month</span>
        <span class="text-2xl font-extrabold text-emerald-700">${cadence.proposed.upgrades_per_month}</span>
      </div>
      <div class="flex items-baseline justify-between border-b border-emerald-100 pb-2">
        <span class="text-ink-700">New blog posts / month</span>
        <span class="text-2xl font-extrabold text-emerald-700">${cadence.proposed.new_blogs_per_month}</span>
      </div>
    `;
  }

  const ul = document.getElementById('cadence-constraints');
  if (ul) {
    ul.innerHTML = cadence.constraints.map(c => `
      <li class="flex items-start gap-2">
        <span class="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-amber-500"></span>
        <span>${escapeHtml(c)}</span>
      </li>
    `).join('');
  }
}

// ============================================================
// Bernie's: Site-level / template upgrades
// ============================================================
function renderSiteLevelUpgrades(sl) {
  if (!sl) return;
  setText('site-level-headline', sl.headline);
  setText('site-level-summary', sl.summary);
  const wrap = document.getElementById('site-level-cards');
  if (!wrap) return;
  const priorityBadge = (p) => {
    if (!p) return '';
    if (p === 'M1') return '<span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">M1</span>';
    if (p === 'M2') return '<span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">M2</span>';
    if (p.startsWith('M1')) return '<span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">' + escapeHtml(p) + '</span>';
    return '<span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">' + escapeHtml(p) + '</span>';
  };
  wrap.innerHTML = sl.items.map(t => `
    <details class="bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-500 p-4 group">
      <summary class="cursor-pointer list-none flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-mono text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200 rounded px-1.5 py-0.5">${escapeHtml(t.id)}</span>
            ${priorityBadge(t.priority)}
            <span class="text-[10px] font-mono text-ink-400">effort: ${escapeHtml(t.effort)}</span>
          </div>
          <h3 class="text-base font-bold mt-1.5 text-ink-900">${escapeHtml(t.name)}</h3>
          <p class="text-xs text-ink-500 mt-1">${escapeHtml(t.scope)}</p>
        </div>
        <svg class="w-5 h-5 text-ink-400 flex-shrink-0 transition group-open:rotate-90" viewBox="0 0 20 20" fill="currentColor"><path d="M7.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L11.6 10 7.3 5.7a1 1 0 010-1.4z"/></svg>
      </summary>
      <div class="mt-3 pt-3 border-t border-slate-200 space-y-2 text-sm">
        <div><span class="text-xs font-bold uppercase tracking-wider text-ink-500">Current:</span> <span class="text-ink-700">${t.current}</span></div>
        <div><span class="text-xs font-bold uppercase tracking-wider text-ink-500">Change:</span> <span class="text-ink-700">${t.change}</span></div>
        <div><span class="text-xs font-bold uppercase tracking-wider text-ink-500">Why it matters:</span> <span class="text-ink-700">${escapeHtml(t.why_it_matters)}</span></div>
        <div><span class="text-xs font-bold uppercase tracking-wider text-ink-500">Lift:</span> <span class="text-ink-700">${escapeHtml(t.lift)}</span></div>
      </div>
    </details>
  `).join('');
}

// ============================================================
// Bernie's: Q1 YoY page winners
// ============================================================
function renderWinnersTable(w) {
  setText('winners-read', w.read);
  const tbody = document.querySelector('#winners-table tbody');
  if (!tbody) return;
  tbody.innerHTML = w.rows.map(r => {
    const dSess = r.sess_q126 - r.sess_q125;
    const dTx = r.tx_q126 - r.tx_q125;
    const dSessPct = r.sess_q125 ? ((dSess / r.sess_q125) * 100).toFixed(0) : '—';
    const dTxPct = r.tx_q125 ? ((dTx / r.tx_q125) * 100).toFixed(0) : (r.tx_q126 > 0 ? 'new' : '—');
    const typeBadge = r.type === 'PDP' ? 'badge-green' : r.type === 'store' ? 'badge-blue' : r.type === 'blog' ? 'badge-purple' : 'badge-amber';
    return `
      <tr>
        <td class="py-3 px-4 font-mono text-xs">${escapeHtml(r.url)}</td>
        <td class="py-3 px-4 text-center"><span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold ${typeBadge}">${escapeHtml(r.type)}</span></td>
        <td class="py-3 px-4 text-right font-mono">${fmtNum(r.sess_q125)} → ${fmtNum(r.sess_q126)}</td>
        <td class="py-3 px-4 text-right font-mono ${dSess >= 0 ? 'text-emerald-700' : 'text-rose-700'}">${dSess >= 0 ? '+' : ''}${fmtNum(dSess)} <span class="text-ink-400">(${dSessPct === '—' ? '—' : (dSess >= 0 ? '+' : '') + dSessPct + '%'})</span></td>
        <td class="py-3 px-4 text-right font-mono">${r.tx_q125} → ${r.tx_q126}</td>
        <td class="py-3 px-4 text-right font-mono ${dTx >= 0 ? 'text-emerald-700' : 'text-rose-700'}">${dTx >= 0 ? '+' : ''}${dTx} <span class="text-ink-400">(${dTxPct === 'new' ? 'new' : (dTx >= 0 ? '+' : '') + dTxPct + '%'})</span></td>
        <td class="py-3 px-4 text-right text-xs font-mono">${r.cvr_q125 ? r.cvr_q125.toFixed(2) : '0.00'}% → <strong>${r.cvr_q126 ? r.cvr_q126.toFixed(2) : '0.00'}%</strong></td>
      </tr>
    `;
  }).join('');
}

// ============================================================
// Bernie's: Q3 KPI targets table
// ============================================================
function renderQ3Targets(rows) {
  const tbody = document.querySelector('#q3-targets-table tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td class="py-3 px-4 font-medium">${escapeHtml(r.kpi)}</td>
      <td class="py-3 px-4 text-right font-mono text-ink-600">${escapeHtml(r.baseline)}</td>
      <td class="py-3 px-4 text-right font-mono font-bold text-brand-700">${escapeHtml(r.target)}</td>
      <td class="py-3 px-4 text-right font-mono font-bold text-emerald-700">${escapeHtml(r.stretch)}</td>
    </tr>
  `).join('');
}

// ============================================================
// Headline panel — traffic-down / conversions-up framing
// ============================================================
function renderHeadlinePanel(panel, miniBase) {
  setText('headline-h2', panel.headline);
  setText('headline-lede', panel.lede);
  const link = document.getElementById('headline-mini-report');
  if (link && panel.mini_report_url) link.setAttribute('href', miniBase + panel.mini_report_url);

  const tiles = document.getElementById('headline-stat-tiles');
  if (tiles) {
    tiles.innerHTML = (panel.stat_tiles || []).map(t => {
      const sentClass = t.sentiment === 'positive' ? 'sent-positive'
                       : t.sentiment === 'negative' ? 'sent-negative'
                       : 'sent-neutral';
      return `
        <div class="rounded-xl border-l-4 ${sentClass} border-r border-y border-r-slate-200 border-y-slate-200 bg-white p-4 shadow-sm">
          <div class="flex items-start justify-between gap-2">
            <div class="text-[11px] font-semibold uppercase tracking-wider text-ink-500">${escapeHtml(t.label)}</div>
            <span class="sent-dot ${t.sentiment}"></span>
          </div>
          <div class="mt-2 text-3xl font-extrabold tracking-tight text-ink-900">${escapeHtml(t.value)}</div>
          <div class="mt-1 text-xs text-ink-600 leading-snug">${escapeHtml(t.sub)}</div>
        </div>
      `;
    }).join('');
  }

  const callouts = document.getElementById('headline-callouts');
  if (callouts) {
    callouts.innerHTML = (panel.callout_strip || []).map(c => `
      <div class="rounded-lg bg-white/70 border border-slate-200 p-4">
        <div class="text-[11px] font-bold uppercase tracking-widest text-brand-700">${escapeHtml(c.label)}</div>
        <p class="text-xs text-ink-700 mt-1.5 leading-relaxed">${escapeHtml(c.detail)}</p>
      </div>
    `).join('');
  }
}

// ============================================================
// GA4 vs GSC discrepancy
// ============================================================
function renderGA4GSCDiscrepancy(d, miniBase) {
  setText('discrepancy-headline', d.headline);
  setText('discrepancy-lede', d.lede);
  const link = document.getElementById('discrepancy-mini-report');
  if (link && d.mini_report_url) link.setAttribute('href', miniBase + d.mini_report_url);

  // Comparison table
  const tbody = document.querySelector('#discrepancy-table tbody');
  if (tbody) {
    tbody.innerHTML = (d.comparison_rows || []).map(r => `
      <tr class="hover:bg-slate-50">
        <td class="py-3 px-4 align-top">
          <div class="font-medium text-ink-800">${escapeHtml(r.metric)}</div>
          <div class="text-xs text-ink-500 mt-1">${escapeHtml(r.reason)}</div>
        </td>
        <td class="py-3 px-4 text-right align-top whitespace-nowrap font-mono text-sm text-ink-700">${escapeHtml(r.gsc)}</td>
        <td class="py-3 px-4 text-right align-top whitespace-nowrap font-mono text-sm text-ink-700">${escapeHtml(r.ga4)}</td>
        <td class="py-3 px-4 text-center align-top whitespace-nowrap font-mono text-sm font-bold ${r.ratio.includes('×') ? 'text-rose-700' : 'text-ink-500'}">${escapeHtml(r.ratio)}</td>
      </tr>
    `).join('');
  }

  // Structural reasons
  const reasons = document.getElementById('discrepancy-reasons');
  if (reasons) {
    reasons.innerHTML = (d.structural_reasons || []).map((r, i) => `
      <li class="flex gap-3">
        <span class="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold">${i + 1}</span>
        <div>
          <div class="text-sm font-semibold text-ink-900">${escapeHtml(r.title)}</div>
          <p class="text-xs text-ink-600 mt-0.5 leading-relaxed">${escapeHtml(r.detail)}</p>
        </div>
      </li>
    `).join('');
  }

  // Trust matrix
  const trust = document.getElementById('discrepancy-trust');
  if (trust) {
    trust.innerHTML = (d.trust_matrix || []).map(t => `
      <div class="border-b border-amber-200 pb-2 last:border-0">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${t.trust.toLowerCase().includes('ga4') ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}">${escapeHtml(t.trust)}</span>
          <span class="text-sm text-ink-800">${escapeHtml(t.question)}</span>
        </div>
        <p class="text-xs text-ink-600 mt-1 leading-snug">${escapeHtml(t.why)}</p>
      </div>
    `).join('');
  }

  // Key takeaways
  const tk = document.getElementById('discrepancy-takeaways');
  if (tk) {
    tk.innerHTML = (d.key_takeaways || []).map(t => `<li>${escapeHtml(t)}</li>`).join('');
  }
}

// ============================================================
// LLM Visibility — AI Overview saturation across 20 priority queries
// ============================================================
function renderLLMVisibility(llm, miniBase) {
  setText('llm-headline', llm.headline);
  setText('llm-lede', llm.lede);
  const link = document.getElementById('llm-mini-report');
  if (link && llm.mini_report_url) link.setAttribute('href', miniBase + llm.mini_report_url);

  // Totals tiles
  const totalsWrap = document.getElementById('llm-totals');
  if (totalsWrap && llm.totals) {
    const t = llm.totals;
    const tiles = [
      { label: 'Queries tested', value: t.queries_tested, sub: 'commercial geo / service / informational / mid-funnel', sentiment: 'neutral' },
      { label: 'AI Overview triggered', value: `${t.with_ai_overview} / ${t.queries_tested}`, sub: `${Math.round((t.with_ai_overview / t.queries_tested) * 100)}% saturation`, sentiment: 'neutral' },
      { label: 'Local Pack triggered', value: `${t.with_local_pack} / ${t.queries_tested}`, sub: 'mostly commercial — Lever A territory', sentiment: 'positive' },
      { label: 'PM in top-10 organic', value: `${t.pm_in_top10_organic} / ${t.queries_tested}`, sub: 'walled lake (#2) + best moving company detroit (#9)', sentiment: 'negative' },
      { label: 'PM cited in any AIO', value: `${t.pm_cited_in_aio} / ${t.queries_tested}`, sub: 'baseline zero — Q3 target ≥3 citations', sentiment: 'negative' }
    ];
    totalsWrap.innerHTML = tiles.map(tile => {
      const sentClass = tile.sentiment === 'positive' ? 'sent-positive'
                       : tile.sentiment === 'negative' ? 'sent-negative'
                       : 'sent-neutral';
      return `
        <div class="rounded-xl border-l-4 ${sentClass} border-r border-y border-r-slate-200 border-y-slate-200 bg-white p-4 shadow-sm">
          <div class="text-[11px] font-semibold uppercase tracking-wider text-ink-500">${escapeHtml(tile.label)}</div>
          <div class="mt-1.5 text-2xl font-extrabold tracking-tight text-ink-900">${escapeHtml(String(tile.value))}</div>
          <div class="mt-1 text-[11px] text-ink-600 leading-snug">${escapeHtml(tile.sub)}</div>
        </div>
      `;
    }).join('');
  }

  // 20-row keyword table — render + wire bucket filter
  function renderRows(bucket) {
    const tbody = document.querySelector('#llm-table tbody');
    if (!tbody) return;
    const rows = (llm.queries || []).filter(q => !bucket || q.bucket === bucket);
    tbody.innerHTML = rows.map(q => {
      const aioBadge = q.has_ai_overview
        ? '<span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800">AIO</span>'
        : '<span class="text-ink-300">—</span>';
      const lpBadge = q.has_local_pack
        ? '<span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">LP</span>'
        : '<span class="text-ink-300">—</span>';
      const pmRank = q.pm_organic_rank == null
        ? '<span class="text-ink-400">off page-1</span>'
        : `<span class="font-mono font-bold ${q.pm_organic_rank <= 10 ? 'text-emerald-700' : q.pm_organic_rank <= 20 ? 'text-amber-700' : 'text-rose-700'}">#${q.pm_organic_rank}</span>`;
      const cited = q.pm_cited_in_aio
        ? '<span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">Yes</span>'
        : (q.has_ai_overview ? '<span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800">No</span>' : '<span class="text-ink-300">n/a</span>');
      const winners = (q.aio_cited_domains || []).length > 0
        ? q.aio_cited_domains.map(d => `<code class="text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-ink-700">${escapeHtml(d)}</code>`).join(' ')
        : (q.has_ai_overview ? '<span class="text-ink-400 text-xs italic">AIO present, no citations parsed</span>' : '<span class="text-ink-300">—</span>');
      const bucketLabel = q.bucket && q.bucket.replace(/_/g, ' ');
      return `
        <tr class="hover:bg-slate-50">
          <td class="py-3 px-4 align-top">
            <div class="font-medium text-ink-900">${escapeHtml(q.keyword)}</div>
            <div class="text-[11px] text-ink-500 mt-0.5 leading-snug">${escapeHtml(q.note || '')}</div>
          </td>
          <td class="py-3 px-4 align-top text-xs text-ink-500 hidden md:table-cell capitalize">${escapeHtml(bucketLabel || '')}</td>
          <td class="py-3 px-4 align-top text-center">${aioBadge}</td>
          <td class="py-3 px-4 align-top text-center hidden sm:table-cell">${lpBadge}</td>
          <td class="py-3 px-4 align-top text-center">${pmRank}</td>
          <td class="py-3 px-4 align-top text-center">${cited}</td>
          <td class="py-3 px-4 align-top hidden lg:table-cell">
            <div class="flex flex-wrap gap-1.5">${winners}</div>
          </td>
        </tr>
      `;
    }).join('');
  }
  renderRows('');

  // Bucket filter buttons
  document.querySelectorAll('.llm-bucket-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.llm-bucket-btn').forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white');
        b.classList.add('bg-white', 'border', 'border-slate-300', 'text-ink-700', 'hover:bg-slate-50');
      });
      btn.classList.add('bg-brand-500', 'text-white');
      btn.classList.remove('bg-white', 'border', 'border-slate-300', 'text-ink-700', 'hover:bg-slate-50');
      renderRows(btn.dataset.bucket);
    });
  });

  // Top cited domains
  const cTbody = document.querySelector('#llm-cited-table tbody');
  if (cTbody) {
    cTbody.innerHTML = (llm.top_cited_domains_in_aio || []).map(c => `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-4"><code class="text-xs bg-slate-100 px-2 py-1 rounded text-ink-800">${escapeHtml(c.domain)}</code></td>
        <td class="py-2.5 px-4 text-right font-mono font-bold text-ink-900">${c.citations}</td>
        <td class="py-2.5 px-4 text-right font-mono text-ink-600">${c.unique_queries}</td>
        <td class="py-2.5 px-4 text-xs text-ink-600 hidden md:table-cell">${escapeHtml(c.note)}</td>
      </tr>
    `).join('');
  }

  // Implications
  const impls = document.getElementById('llm-implications');
  if (impls) {
    impls.innerHTML = (llm.implications || []).map(t => `
      <li class="flex gap-2 items-start">
        <span class="flex-shrink-0 inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2"></span>
        <span>${renderInlineMarkdown(t)}</span>
      </li>
    `).join('');
  }
}

// ============================================================
// LD Time Series (PM only) — renders 3 keyword lines x N dates
// ============================================================
function renderLDTimeSeries(ts) {
  const lede = document.getElementById('ld-ts-lede');
  if (lede) lede.textContent = ts.lede || '';

  const tiles = document.getElementById('ld-ts-tiles');
  if (tiles) {
    tiles.innerHTML = (ts.per_keyword_series || []).map(s => {
      const first = s.points[0], last = s.points[s.points.length - 1];
      const avgDelta = (first.avg_rank - last.avg_rank).toFixed(2); // positive = improved (lower rank)
      const top10Delta = last.top10 - first.top10;
      const avgGood = parseFloat(avgDelta) >= 0;
      const top10Good = top10Delta >= 0;
      const accent = s.color || '#1d5b8a';
      return `
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-4" style="border-left: 4px solid ${accent};">
          <div class="text-[10px] font-bold uppercase tracking-widest text-ink-500">${escapeHtml(s.keyword)}</div>
          <div class="mt-2 grid grid-cols-2 gap-2">
            <div>
              <div class="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">Avg rank</div>
              <div class="text-lg font-bold text-ink-800">${first.avg_rank.toFixed(2)} → ${last.avg_rank.toFixed(2)}</div>
              <div class="text-[11px] font-semibold ${avgGood ? 'text-emerald-700' : 'text-rose-700'}">${avgGood ? '▲' : '▼'} ${Math.abs(parseFloat(avgDelta)).toFixed(2)} pos</div>
            </div>
            <div>
              <div class="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">Top-10 cells</div>
              <div class="text-lg font-bold text-ink-800">${first.top10} → ${last.top10}</div>
              <div class="text-[11px] font-semibold ${top10Good ? 'text-emerald-700' : 'text-rose-700'}">${top10Good ? '▲' : '▼'} ${Math.abs(top10Delta)}</div>
            </div>
          </div>
          <p class="text-xs text-ink-600 mt-2 leading-snug">${escapeHtml(s.headline || '')}</p>
        </div>
      `;
    }).join('');
  }

  // Build labels (date labels from ts.dates) and per-keyword datasets
  const labels = (ts.dates || []).map(d => d.label);
  const dateOrder = (ts.dates || []).map(d => d.date);

  const top10Datasets = (ts.per_keyword_series || []).map(s => {
    // Align points to the full date set; missing dates render as null
    const byDate = Object.fromEntries(s.points.map(p => [p.date, p]));
    const data = dateOrder.map(d => (byDate[d] ? byDate[d].top10 : null));
    return {
      label: s.keyword,
      data,
      borderColor: s.color || '#1d5b8a',
      backgroundColor: (s.color || '#1d5b8a') + '22',
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      tension: 0.25,
      fill: false,
      spanGaps: true,
    };
  });
  const avgRankDatasets = (ts.per_keyword_series || []).map(s => {
    const byDate = Object.fromEntries(s.points.map(p => [p.date, p]));
    const data = dateOrder.map(d => (byDate[d] ? byDate[d].avg_rank : null));
    return {
      label: s.keyword,
      data,
      borderColor: s.color || '#1d5b8a',
      backgroundColor: (s.color || '#1d5b8a') + '22',
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      tension: 0.25,
      fill: false,
      spanGaps: true,
    };
  });

  const top10Canvas = document.getElementById('ld-ts-top10');
  if (top10Canvas && typeof Chart !== 'undefined') {
    new Chart(top10Canvas, {
      type: 'line',
      data: { labels, datasets: top10Datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 11 }, boxWidth: 14 } },
          tooltip: { backgroundColor: '#0b1220', padding: 10 },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { beginAtZero: true, max: 133, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 10 } }, title: { display: true, text: 'cells in top-10 (of 133)' } },
        },
      },
    });
  }
  const avgCanvas = document.getElementById('ld-ts-avgrank');
  if (avgCanvas && typeof Chart !== 'undefined') {
    new Chart(avgCanvas, {
      type: 'line',
      data: { labels, datasets: avgRankDatasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 11 }, boxWidth: 14 } },
          tooltip: { backgroundColor: '#0b1220', padding: 10 },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { reverse: true, beginAtZero: false, min: 1, max: 21, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 10 } }, title: { display: true, text: 'avg rank (lower is better)' } },
        },
      },
    });
  }

  // Detail table
  const tbody = document.querySelector('#ld-ts-table tbody');
  if (tbody) {
    const rows = [];
    (ts.per_keyword_series || []).forEach(s => {
      const byDate = Object.fromEntries(s.points.map(p => [p.date, p]));
      const cells = dateOrder.map(d => byDate[d] || null);
      const first = s.points[0], last = s.points[s.points.length - 1];
      const avgGood = (first.avg_rank - last.avg_rank) >= 0;
      const top10Good = (last.top10 - first.top10) >= 0;
      const top3Good = (last.top3 - first.top3) >= 0;
      // Top-10 row
      rows.push(`
        <tr>
          <td class="py-2.5 px-4 font-semibold" rowspan="3" style="border-left: 3px solid ${s.color || '#1d5b8a'};">${escapeHtml(s.keyword)}</td>
          <td class="py-2.5 px-4 text-right text-xs uppercase tracking-wider text-ink-500 font-semibold">Top-10 cells</td>
          ${cells.map(c => `<td class="py-2.5 px-4 text-right font-mono">${c ? c.top10 : '—'}</td>`).join('')}
          <td class="py-2.5 px-4 text-right font-mono font-bold ${top10Good ? 'text-emerald-700' : 'text-rose-700'}">${top10Good ? '+' : ''}${last.top10 - first.top10}</td>
        </tr>
      `);
      rows.push(`
        <tr>
          <td class="py-2.5 px-4 text-right text-xs uppercase tracking-wider text-ink-500 font-semibold">Avg rank</td>
          ${cells.map(c => `<td class="py-2.5 px-4 text-right font-mono">${c ? c.avg_rank.toFixed(2) : '—'}</td>`).join('')}
          <td class="py-2.5 px-4 text-right font-mono font-bold ${avgGood ? 'text-emerald-700' : 'text-rose-700'}">${avgGood ? '▲' : '▼'} ${Math.abs(first.avg_rank - last.avg_rank).toFixed(2)}</td>
        </tr>
      `);
      rows.push(`
        <tr class="border-b-2 border-slate-200">
          <td class="py-2.5 px-4 text-right text-xs uppercase tracking-wider text-ink-500 font-semibold">Top-3 cells</td>
          ${cells.map(c => `<td class="py-2.5 px-4 text-right font-mono">${c ? c.top3 : '—'}</td>`).join('')}
          <td class="py-2.5 px-4 text-right font-mono font-bold ${top3Good ? 'text-emerald-700' : 'text-rose-700'}">${top3Good ? '+' : ''}${last.top3 - first.top3}</td>
        </tr>
      `);
    });
    tbody.innerHTML = rows.join('');
  }

  // Implications
  const impl = document.getElementById('ld-ts-implications');
  if (impl) {
    impl.innerHTML = (ts.implications || []).map(s => `<li>· ${escapeHtml(s)}</li>`).join('');
  }
}


// Minimal markdown helper for **bold** inside strings
function renderInlineMarkdown(s) {
  if (s == null) return '';
  let out = escapeHtml(s);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return out;
}

// ============================================================
// Utilities
// ============================================================
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
