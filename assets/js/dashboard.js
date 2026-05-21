/* HQDM Dashboards — single-client dashboard logic
 * Loads ./data/data.json, populates the page, wires interactivity. */

(async function () {
  let DATA, LD;
  try {
    [DATA, LD] = await Promise.all([
      fetch('./data/data.json').then(r => r.json()),
      fetch('./data/ld_grids.json').then(r => r.json()).catch(() => null)
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

  // === KPI tiles ===
  renderKPIs(DATA.kpis);

  // === Headline trend charts (Sessions + Conversions/Transactions, stacked) ===
  if (DATA.trend) {
    setText('trend-headline', DATA.trend.headline);
    setText('trend-annotation', (DATA.trend.may_extrapolation_note || '') + ' ' + (DATA.trend.annotation_text || ''));
    if (DATA.trend.quarterly) renderQuarterlyTable(DATA.trend.quarterly);
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
  if (DATA.ahrefs_trajectory && document.querySelector('#ahrefs-chart')) renderAhrefsTrajectory(DATA.ahrefs_trajectory);
  if (DATA.aio_saturation && document.querySelector('#aio-may26')) renderAIOSaturation(DATA.aio_saturation);
  if (DATA.index_health && document.querySelector('#index-health-table')) renderIndexHealth(DATA.index_health);
  if (DATA.sku_coverage && document.querySelector('#sku-table')) renderSKUCoverage(DATA.sku_coverage);
  if (DATA.competitor_reshuffle && document.querySelector('#reshuffle-bars')) renderReshuffleBars(DATA.competitor_reshuffle);
  if (DATA.st_pattern_verified && document.querySelector('#st-pattern-list')) renderSTPattern(DATA.st_pattern_verified);
  if (DATA.top_loser_blogs && document.querySelector('#loser-blogs-table')) renderLoserBlogs(DATA.top_loser_blogs);
  if (DATA.top_winners_q1yoy && document.querySelector('#winners-table')) renderWinnersTable(DATA.top_winners_q1yoy);
  if (DATA.q3_kpi_targets && document.querySelector('#q3-targets-table')) renderQ3Targets(DATA.q3_kpi_targets);

  // === Positives vs negatives (shared) ===
  if (DATA.positives && document.querySelector('#positives-list')) renderList('positives-list', DATA.positives, 'emerald');
  if (DATA.negatives && document.querySelector('#negatives-list')) renderList('negatives-list', DATA.negatives, 'rose');

  // === Lever cards (shared) ===
  if (DATA.levers && document.querySelector('#lever-cards')) renderLeverCards(DATA.levers);

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

  // Initial visible state: respect checkbox `checked` if rendered; else default
  const channels = Object.keys(trend.sessions);
  const visible = {};
  channels.forEach(c => {
    const cb = document.querySelector(`#trend-series-toggles input[data-series="${c}"]`);
    visible[c] = cb ? cb.checked : true;
  });

  const buildDatasets = (src) => Object.keys(src).map(key => ({
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

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
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

  const sessionsChart = new Chart(sessionsCtx.getContext('2d'), {
    type: 'line',
    data: { labels: trend.months, datasets: buildDatasets(trend.sessions) },
    options: baseOptions
  });

  const convChart = new Chart(convCtx.getContext('2d'), {
    type: 'line',
    data: { labels: trend.months, datasets: buildDatasets(trend.form_submits) },
    options: baseOptions
  });

  const charts = { sessions: sessionsChart, conversions: convChart, visible };
  charts._rebuild = () => {
    sessionsChart.data.datasets = buildDatasets(trend.sessions);
    convChart.data.datasets = buildDatasets(trend.form_submits);
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
    if (isCompact) {
      return `
        <tr class="text-ink-700">
          <td class="py-2 pr-4 font-medium">${escapeHtml(q.q)}</td>
          <td class="py-2 pr-4 text-right">${fmtNum(q.org_sess)}</td>
          <td class="py-2 pr-4 text-right">${fmtNum(q.org_conv)}</td>
          <td class="py-2 text-right">${q.org_cr != null ? q.org_cr.toFixed(2) + '%' : '—'}</td>
        </tr>
      `;
    }
    return `
      <tr class="text-ink-700">
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
function renderLeverCards(levers) {
  const wrap = document.getElementById('lever-cards');
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
  currentDate: 'feb',   // 'feb' | 'may'
  playing: true,
  cycleKw: false,
  timer: null,
  kwTimer: null,
  PHASE_MS: 5000,        // ms per Feb or May state before toggle → 10s full cycle
  KW_CYCLE_MS: 30000     // ms before advancing to next keyword (= 3 full Feb↔May cycles per kw)
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
      buildPanels();
      applyState();
    });
  });

  // Wire date buttons
  document.querySelectorAll('.hm-date-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      pauseLoop();
      HM_STATE.currentDate = btn.dataset.date;
      updateDateBtnStyles();
      applyState();
    });
  });

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
  const entities = [ld.client, ...ld.competitors];

  // Normalize bounds across the union of cells. Same x/y space across Feb/May.
  const minX = grid.bounds.min_x, maxX = grid.bounds.max_x;
  const minY = grid.bounds.min_y, maxY = grid.bounds.max_y;
  const cols = maxX - minX + 1;
  const rows = maxY - minY + 1;

  // Build a Set of present cells (some bins are empty)
  const presentCells = new Set(grid.cells.map(c => `${c.x},${c.y}`));

  // Pre-index ranks: { entity: { 'x,y': rank } } per date
  const idx = { feb: {}, may: {} };
  ['feb', 'may'].forEach(d => {
    entities.forEach(e => {
      idx[d][e] = {};
      (grid[d][e] || []).forEach(r => { idx[d][e][`${r.x},${r.y}`] = r.rank; });
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
          <div>Avg rank</div><div>Top-3</div><div>Cells</div>
        </div>
        <div class="grid grid-cols-3 gap-1 text-center mt-0.5" data-entity-stats="${escapeHtml(entity)}">
          <div class="text-base font-bold text-ink-800 stat-avg">—</div>
          <div class="text-base font-bold text-ink-800 stat-top3">—</div>
          <div class="text-base font-bold text-ink-800 stat-cells">—</div>
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
      cell.title = `${entity} @ cell (${cell.dataset.x},${cell.dataset.y}) — ${rank != null ? 'rank ' + rank : 'not in top-N'} (${date === 'feb' ? 'Feb 2' : 'May 1'} 2026)`;
    });

    // Update summary stats
    const stats = grid.summary[entity];
    const statBox = document.querySelector(`[data-entity-stats="${cssEscape(entity)}"]`);
    if (statBox && stats) {
      const avg  = date === 'feb' ? stats.feb_avg  : stats.may_avg;
      const top3 = date === 'feb' ? stats.feb_top3 : stats.may_top3;
      const cells = date === 'feb' ? stats.feb_cells : stats.may_cells;
      statBox.querySelector('.stat-avg').textContent   = avg  != null ? avg.toFixed(1) : '—';
      statBox.querySelector('.stat-top3').textContent  = top3 != null ? top3 : '—';
      statBox.querySelector('.stat-cells').textContent = cells != null ? cells : '—';
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
    HM_STATE.currentDate = HM_STATE.currentDate === 'feb' ? 'may' : 'feb';
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
  const list = document.getElementById('st-pattern-list');
  if (list) {
    list.innerHTML = st.pattern_elements.map(el => `
      <li class="flex items-start gap-2 text-ink-700">
        <span class="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-emerald-500"></span>
        <span>${escapeHtml(el)}</span>
      </li>
    `).join('');
  }
  const articles = document.getElementById('st-articles-list');
  if (articles) {
    articles.innerHTML = st.articles_audited.map(a => `
      <li>${escapeHtml(a.url)} <span class="text-ink-400">— ${escapeHtml(a.published)} · ${a.words}w</span></li>
    `).join('');
  }
  setText('st-adaptation', st.bernies_adaptation);
}

// ============================================================
// Bernie's: Top loser blogs
// ============================================================
function renderLoserBlogs(rows) {
  const tbody = document.querySelector('#loser-blogs-table tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td class="py-3 px-4 font-mono text-xs">${escapeHtml(r.url)}</td>
      <td class="py-3 px-4 text-right font-mono font-semibold text-rose-700">−${fmtNum(r.lost_clicks_yoy90d)}</td>
      <td class="py-3 px-4 text-center font-mono">#${r.current_rank}</td>
      <td class="py-3 px-4 text-xs"><code class="bg-slate-100 px-1.5 py-0.5 rounded">${escapeHtml(r.target_kw)}</code> <span class="text-ink-500">SV ${fmtNum(r.sv)}</span></td>
      <td class="py-3 px-4 hidden lg:table-cell text-xs text-ink-600">${r.competitors.map(c => escapeHtml(c)).join(' · ')}</td>
    </tr>
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
// Utilities
// ============================================================
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
