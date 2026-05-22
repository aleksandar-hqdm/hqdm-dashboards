/* HQDM Dashboards — Client-Facing One-Page Report renderer
 *
 * Reads ./data/data.json from the current client folder and renders into the
 * skeleton DOM declared in client-report.html. Designed to print on 1-2 pages.
 */

(async function () {
  const $ = (sel) => document.querySelector(sel);
  let DATA;
  try {
    DATA = await fetch('./data/data.json').then((r) => r.json());
  } catch (e) {
    console.error('client-report: failed to load data.json', e);
    $('#report-root').innerHTML =
      '<div class="p-8 text-red-700">Failed to load ./data/data.json — see console.</div>';
    return;
  }

  renderHeader(DATA);
  renderExecutiveSummary(DATA);
  const yoy = computeYoY(DATA);
  renderYoyTiles(yoy);
  renderQuarterlyTable(DATA, yoy);
  renderTrendChart(DATA);
  renderStrategicFocus(DATA);
  renderFooter(DATA);

  // ---------- Header / hero ----------
  function renderHeader(data) {
    const m = data.meta || {};
    document.title = `${m.client || 'Client'} — Client Report — HQDM`;
    setText('#hdr-client', m.client);
    setText('#hdr-quarter', m.quarter);
    setText('#hero-client', m.client);
    setText('#hero-tagline', m.tagline);
    setText('#hero-period', m.quarter ? `${m.quarter} Client Report` : 'Client Report');
    setText('#hero-prepared', m.prepared_date ? `Prepared ${m.prepared_date}` : '');
    setText('#hero-domain', m.domain ? m.domain : '');
    setText('#hero-tier', m.tier);
  }

  // ---------- Executive summary ----------
  function renderExecutiveSummary(data) {
    const tldr = data.tldr;
    const lede = data.headline_panel && data.headline_panel.lede;
    const sub = data.meta && data.meta.doc_subtitle;
    const txt = tldr || lede || sub || '';
    const el = $('#exec-summary');
    if (!el) return;
    // tldr fields contain limited HTML (em, strong, a) — render as HTML.
    el.innerHTML = txt;
  }

  // ---------- YoY computation ----------
  // Prefers the latest fully-complete quarter (no asterisk, no "partial") for a
  // clean apples-to-apples comparison. Falls back to the latest partial quarter
  // if no complete one with a year-prior match exists.
  function computeYoY(data) {
    const t = data.trend || {};
    const quarters = (t.quarterly || []).filter((q) => q && q.kind !== 'estimate');
    if (!quarters.length) return null;

    const isPartial = (label) => /\*|\bpartial\b/i.test(label || '');
    const matchPair = (latest) => {
      const info = parseQuarterLabel(latest.q);
      if (!info) return null;
      const prior = quarters.find((q) => {
        const p = parseQuarterLabel(q.q);
        return p && p.quarter === info.quarter && p.year === info.year - 1;
      });
      return prior ? { latest, prior } : null;
    };

    // Pass 1: scan backwards, prefer a non-partial latest
    let pair = null;
    for (let i = quarters.length - 1; i >= 0; i--) {
      if (!isPartial(quarters[i].q)) {
        pair = matchPair(quarters[i]);
        if (pair) break;
      }
    }
    // Pass 2: fall back to most recent partial with a year-prior match
    if (!pair) {
      for (let i = quarters.length - 1; i >= 0; i--) {
        pair = matchPair(quarters[i]);
        if (pair) break;
      }
    }
    if (!pair) return null;

    return {
      latest: pair.latest,
      prior: pair.prior,
      latestLabel: pair.latest.q,
      priorLabel: pair.prior.q,
      sessions: pctChange(pair.prior.org_sess, pair.latest.org_sess),
      conversions: pctChange(pair.prior.org_conv, pair.latest.org_conv),
      cvr: pctChange(pair.prior.org_cr, pair.latest.org_cr),
      latestPartial: isPartial(pair.latest.q),
    };
  }

  function parseQuarterLabel(label) {
    if (!label) return null;
    // Strip trailing asterisks/qualifiers
    const m = label.match(/Q([1-4])\s*([0-9]{4})/);
    if (m) return { quarter: parseInt(m[1], 10), year: parseInt(m[2], 10) };
    // Some clients use month-name first quarter, skip
    return null;
  }

  function pctChange(prev, curr) {
    if (prev == null || curr == null) return null;
    if (prev === 0 && curr === 0) return 0;
    if (prev === 0) return null; // undefined growth
    return ((curr - prev) / Math.abs(prev)) * 100;
  }

  // ---------- YoY tiles ----------
  function renderYoyTiles(yoy) {
    const wrap = $('#yoy-tiles');
    if (!wrap) return;
    if (!yoy) {
      wrap.innerHTML =
        '<div class="text-sm text-slate-500 italic col-span-3">YoY comparison unavailable (insufficient quarterly data).</div>';
      return;
    }
    const tile = (label, pct, sub, fmt) => {
      const dir = pct == null ? 'neu' : pct > 0 ? 'pos' : pct < 0 ? 'neg' : 'neu';
      const arrow = pct == null ? '–' : pct > 0 ? '▲' : pct < 0 ? '▼' : '–';
      const valTxt = pct == null ? 'n/a' : `${arrow} ${Math.abs(pct).toFixed(0)}%`;
      return `
        <div class="yoy-tile ${dir}">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">${label}</div>
          <div class="text-3xl font-extrabold delta-${dir === 'pos' ? 'pos' : dir === 'neg' ? 'neg' : 'neu'}">${valTxt}</div>
          <div class="text-[11px] text-slate-500 mt-1">${sub}</div>
        </div>
      `;
    };

    wrap.innerHTML = [
      tile('Organic sessions YoY', yoy.sessions, `${yoy.priorLabel} → ${yoy.latestLabel}`),
      tile('Organic conversions YoY', yoy.conversions, `${yoy.priorLabel} → ${yoy.latestLabel}`),
      tile('Conversion rate YoY', yoy.cvr, `${fmtNum(yoy.prior.org_cr, 2)}% → ${fmtNum(yoy.latest.org_cr, 2)}%`),
    ].join('');

    const note = $('#yoy-note');
    if (note) {
      const partialNote = yoy.latestPartial
        ? ` ${yoy.latestLabel} is a partial / in-progress quarter — figures reflect data through the prepared date.`
        : '';
      note.textContent = `YoY = ${yoy.latestLabel} vs ${yoy.priorLabel}. Organic Search channel only.${partialNote}`;
    }
  }

  // ---------- Quarterly table ----------
  function renderQuarterlyTable(data, yoy) {
    const t = data.trend || {};
    const quarters = (t.quarterly || []).filter((q) => q && q.kind !== 'estimate');
    const tbody = $('#qtable-body');
    if (!tbody) return;
    if (!quarters.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="p-4 text-slate-500 italic">Quarterly trend data not available.</td></tr>';
      return;
    }
    // Show up to the last 7 quarters for compactness
    const rows = quarters.slice(-7);
    const latestQ = rows[rows.length - 1] && rows[rows.length - 1].q;
    tbody.innerHTML = rows
      .map((q) => {
        const isLatest = q.q === latestQ;
        return `
          <tr class="${isLatest ? 'latest' : ''} border-t border-slate-100">
            <td class="py-2 pr-4 text-slate-800">${q.q}</td>
            <td class="py-2 pr-4 text-right">${fmtNum(q.org_sess, 0)}</td>
            <td class="py-2 pr-4 text-right">${fmtNum(q.org_conv, 0)}</td>
            <td class="py-2 text-right">${q.org_cr != null ? fmtNum(q.org_cr, 2) + '%' : '—'}</td>
          </tr>
        `;
      })
      .join('');
  }

  // ---------- Trend chart ----------
  function renderTrendChart(data) {
    const t = data.trend || {};
    const months = t.months || [];
    const sessOrg = (t.sessions && t.sessions.organic) || [];
    const conv =
      (t.conversions && t.conversions.organic) ||
      (t.form_submits && t.form_submits.organic) ||
      [];
    const convLabel = (t.form_submits_label || (t.conversions ? 'Conversions' : 'Form submits / transactions'));
    const ctx = document.getElementById('trend-chart');
    if (!ctx || !months.length) return;

    // Detect partial-month index
    const partialIdx = months.findIndex((m) => /\*/.test(m));

    // Build two datasets — sessions (left axis), conversions (right axis)
    const sessSolid = sessOrg.map((v, i) => (partialIdx >= 0 && i >= partialIdx ? null : v));
    const sessDash = sessOrg.map((v, i) => (partialIdx >= 0 && i >= partialIdx - 1 ? v : null));
    const convSolid = conv.map((v, i) => (partialIdx >= 0 && i >= partialIdx ? null : v));
    const convDash = conv.map((v, i) => (partialIdx >= 0 && i >= partialIdx - 1 ? v : null));

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Organic Sessions',
            data: sessSolid,
            borderColor: '#1d5b8a',
            backgroundColor: 'rgba(29,91,138,0.10)',
            yAxisID: 'y',
            borderWidth: 2.5,
            tension: 0.3,
            pointRadius: 2.5,
            pointHoverRadius: 5,
            spanGaps: false,
          },
          {
            label: 'Organic Sessions (partial)',
            data: sessDash,
            borderColor: '#1d5b8a',
            borderDash: [5, 4],
            yAxisID: 'y',
            borderWidth: 2,
            tension: 0.3,
            pointRadius: 2,
            spanGaps: false,
          },
          {
            label: `Organic ${convLabel}`,
            data: convSolid,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16,185,129,0.10)',
            yAxisID: 'y1',
            borderWidth: 2.5,
            tension: 0.3,
            pointRadius: 2.5,
            pointHoverRadius: 5,
            spanGaps: false,
          },
          {
            label: `Organic ${convLabel} (partial)`,
            data: convDash,
            borderColor: '#10b981',
            borderDash: [5, 4],
            yAxisID: 'y1',
            borderWidth: 2,
            tension: 0.3,
            pointRadius: 2,
            spanGaps: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              filter: (item) => !/partial/.test(item.text),
              font: { size: 11 },
              boxWidth: 10,
              boxHeight: 10,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                `${ctx.dataset.label.replace(' (partial)', '')}: ${fmtNum(ctx.parsed.y, 0)}`,
            },
          },
        },
        scales: {
          x: { ticks: { font: { size: 10 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 12 }, grid: { display: false } },
          y: {
            position: 'left',
            title: { display: true, text: 'Sessions', font: { size: 11 } },
            ticks: { font: { size: 10 }, callback: (v) => fmtNum(v, 0) },
            grid: { color: 'rgba(0,0,0,0.05)' },
          },
          y1: {
            position: 'right',
            title: { display: true, text: convLabel, font: { size: 11 } },
            ticks: { font: { size: 10 }, callback: (v) => fmtNum(v, 0) },
            grid: { display: false },
          },
        },
      },
    });

    // Annotation text under chart
    const partialNote = $('#trend-partial-note');
    if (partialNote) {
      const annot = t.may_extrapolation_note || t.annotation_text || '';
      partialNote.textContent = annot;
    }
  }

  // ---------- Strategic focus ----------
  function renderStrategicFocus(data) {
    const grid = $('#levers-grid');
    if (!grid) return;
    const levers = data.levers || [];
    if (!levers.length) {
      grid.innerHTML = '<div class="text-sm text-slate-500 italic">No strategic levers defined.</div>';
      return;
    }
    grid.innerHTML = levers
      .map((lv) => {
        const color = (lv.color || 'slate').toLowerCase();
        const monthMap = {};
        (lv.actions || []).forEach((a) => {
          const mo = (a.month || '').trim();
          if (!mo) return;
          // Multi-month tags like "M1-M3" or "M1 / M2"
          const months = mo.split(/[\/,\-]/).map((s) => s.trim()).filter(Boolean);
          months.forEach((m) => {
            if (!monthMap[m]) monthMap[m] = [];
            monthMap[m].push(a.code || a.name);
          });
        });
        // Show the top 1-2 actions per month, ordered M1 → M3
        const monthOrder = ['M1', 'M2', 'M3', 'M1-M3', 'M3+'];
        const monthsRender = Object.keys(monthMap)
          .sort((a, b) => {
            const ia = monthOrder.indexOf(a);
            const ib = monthOrder.indexOf(b);
            return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
          })
          .slice(0, 4)
          .map((m) => {
            const count = monthMap[m].length;
            return `<span class="month-chip" title="${escapeHtml(monthMap[m].join(', '))}">${m} · ${count}</span>`;
          })
          .join('');

        const whyShort = truncate(lv.why || '', 220);
        const actionsTotal = (lv.actions || []).length;

        return `
          <div class="lever-mini lever-${color}">
            <div class="flex items-start justify-between gap-2 mb-1">
              <h4>${escapeHtml(lv.name || `Lever ${lv.id || ''}`)}</h4>
              <span class="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded badge-${color}">${escapeHtml(lv.priority || '')}</span>
            </div>
            <p class="lever-why mb-2">${escapeHtml(whyShort)}</p>
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <div>${monthsRender}</div>
              <span class="text-[10px] text-slate-400">${actionsTotal} action${actionsTotal === 1 ? '' : 's'}</span>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // ---------- Footer ----------
  function renderFooter(data) {
    const m = data.meta || {};
    setText('#footer-org', m.org || 'HQDM Search Intelligence');
    setText('#footer-prepared', m.prepared_date || '');
    setText('#footer-author', m.author || '');
    setText('#footer-quarter', m.quarter || '');
  }

  // ---------- Helpers ----------
  function setText(sel, txt) {
    const el = document.querySelector(sel);
    if (el && txt != null && txt !== '') el.textContent = txt;
  }
  function fmtNum(n, decimals) {
    if (n == null) return '—';
    if (decimals == null) decimals = 0;
    return Number(n).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  function truncate(s, n) {
    if (!s) return '';
    // Strip simple inline HTML for the short why summary
    const plain = s.replace(/<[^>]+>/g, '');
    return plain.length > n ? plain.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : plain;
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
