/* HQDM Dashboards — generic document viewer.
 * URL params: ?client=<slug>&file=<filename-under-deliverables>
 * Renders CSV / XLSX / MD / DOCX / TXT / PDF inline; never triggers download. */

(async function () {
  const params = new URLSearchParams(window.location.search);
  const client = params.get('client');
  const file = params.get('file');

  if (!client || !file) {
    showError('Missing ?client=<slug>&file=<filename> parameters.');
    return;
  }

  const fileUrl = `../clients/${client}/deliverables/${encodeURIComponent(file)}`;
  const ext = (file.split('.').pop() || '').toLowerCase();

  // Header chrome
  document.title = `${file} · HQDM Dashboards`;
  document.getElementById('hdr-file').textContent = file;
  document.getElementById('hdr-client').textContent = client;
  document.getElementById('hdr-type').textContent = ext;
  document.getElementById('raw-link').href = fileUrl;
  document.getElementById('back-link').href = `../clients/${client}/index.html#deliverables`;

  const loader = document.getElementById('loader');
  const setLoader = (msg) => { loader.textContent = msg; };

  try {
    if (ext === 'csv') {
      setLoader('Loading CSV…');
      const text = await fetch(fileUrl).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); });
      renderCSV(text);
    } else if (ext === 'tsv') {
      const text = await fetch(fileUrl).then(r => r.text());
      renderCSV(text, '\t');
    } else if (ext === 'xlsx' || ext === 'xls') {
      setLoader('Loading spreadsheet…');
      const buf = await fetch(fileUrl).then(r => r.arrayBuffer());
      const wb = XLSX.read(buf, { type: 'array' });
      renderXLSX(wb);
    } else if (ext === 'md' || ext === 'markdown') {
      setLoader('Loading markdown…');
      const text = await fetch(fileUrl).then(r => r.text());
      renderMD(text);
    } else if (ext === 'docx') {
      setLoader('Loading DOCX…');
      const buf = await fetch(fileUrl).then(r => r.arrayBuffer());
      const result = await mammoth.convertToHtml({ arrayBuffer: buf });
      renderHTML(result.value);
    } else if (ext === 'pdf') {
      setLoader('Loading PDF…');
      renderPDF(fileUrl);
    } else if (ext === 'txt') {
      setLoader('Loading text…');
      const text = await fetch(fileUrl).then(r => r.text());
      renderTXT(text);
    } else if (ext === 'html' || ext === 'htm') {
      setLoader('Loading HTML…');
      const text = await fetch(fileUrl).then(r => r.text());
      // Strip <head>/<style> to inherit our styling; just take the body content
      const bodyMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      renderHTML(bodyMatch ? bodyMatch[1] : text);
    } else if (ext === 'json') {
      setLoader('Loading JSON…');
      const text = await fetch(fileUrl).then(r => r.text());
      try {
        const parsed = JSON.parse(text);
        renderTXT(JSON.stringify(parsed, null, 2));
      } catch {
        renderTXT(text);
      }
    } else {
      showError(`Unsupported file type: .${ext}. <a href="${fileUrl}" target="_blank" rel="noopener" class="underline">Open raw file</a>.`);
    }
  } catch (e) {
    showError(`Failed to load: ${e.message}. <a href="${fileUrl}" target="_blank" rel="noopener" class="underline">Open raw file</a>.`);
  }

  // ===== Renderers =====

  function showError(msg) {
    document.getElementById('loader').classList.add('hidden');
    const el = document.getElementById('error');
    el.innerHTML = msg;
    el.classList.remove('hidden');
  }

  function hideLoader() { document.getElementById('loader').classList.add('hidden'); }

  function renderCSV(text, delim = null) {
    const rows = parseCSV(text, delim);
    if (!rows.length) { showError('Empty file.'); return; }
    showDataTable(rows);
  }

  function renderXLSX(wb) {
    const container = document.getElementById('data-container');
    const tabsWrap = document.getElementById('sheet-tabs-wrap');
    if (wb.SheetNames.length > 1) {
      tabsWrap.classList.remove('hidden');
      tabsWrap.innerHTML = `<div class="sheet-tabs">${wb.SheetNames.map((n, i) =>
        `<button class="sheet-tab${i === 0 ? ' active' : ''}" data-sheet="${escapeHTML(n)}">${escapeHTML(n)}</button>`
      ).join('')}</div>`;
      tabsWrap.querySelectorAll('.sheet-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          tabsWrap.querySelectorAll('.sheet-tab').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          loadSheet(wb, btn.dataset.sheet);
        });
      });
    }
    loadSheet(wb, wb.SheetNames[0]);
  }

  function loadSheet(wb, sheetName) {
    const ws = wb.Sheets[sheetName];
    const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
    if (!aoa.length) { showError(`Sheet "${sheetName}" is empty.`); return; }
    showDataTable(aoa);
  }

  function showDataTable(rows) {
    hideLoader();
    const container = document.getElementById('data-container');
    container.classList.remove('hidden');
    const thead = container.querySelector('thead');
    const tbody = container.querySelector('tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';
    if (!rows.length) return;
    const headers = rows[0].map(h => String(h));
    thead.innerHTML = '<tr>' + headers.map((h, i) =>
      `<th data-col="${i}">${escapeHTML(h)} <span class="sort-ind">↕</span></th>`
    ).join('') + '</tr>';
    const dataRows = rows.slice(1);
    renderRows(tbody, dataRows);
    document.getElementById('row-count').textContent = `${dataRows.length} rows`;

    // Filter
    const filterInput = document.getElementById('filter-input');
    filterInput.value = '';
    filterInput.oninput = () => {
      const q = filterInput.value.toLowerCase().trim();
      const filtered = q ? dataRows.filter(r => r.some(c => String(c).toLowerCase().includes(q))) : dataRows;
      renderRows(tbody, filtered);
      document.getElementById('row-count').textContent = `${filtered.length} of ${dataRows.length} rows`;
    };

    // Sort
    let lastSort = { col: -1, dir: 1 };
    thead.querySelectorAll('th').forEach(th => {
      th.addEventListener('click', () => {
        const col = parseInt(th.dataset.col, 10);
        const dir = lastSort.col === col ? -lastSort.dir : 1;
        lastSort = { col, dir };
        dataRows.sort((a, b) => {
          const va = String(a[col] || ''), vb = String(b[col] || '');
          const na = parseFloat(va.replace(/,/g, '')), nb = parseFloat(vb.replace(/,/g, ''));
          if (!isNaN(na) && !isNaN(nb)) return (na - nb) * dir;
          return va.localeCompare(vb) * dir;
        });
        renderRows(tbody, dataRows);
        thead.querySelectorAll('.sort-ind').forEach(s => { s.textContent = '↕'; s.style.opacity = 0.5; });
        const ind = th.querySelector('.sort-ind');
        ind.textContent = dir === 1 ? '▲' : '▼';
        ind.style.opacity = 1;
      });
    });
  }

  function renderRows(tbody, rows) {
    tbody.innerHTML = rows.map(r =>
      '<tr>' + r.map(c => `<td>${escapeHTML(String(c == null ? '' : c))}</td>`).join('') + '</tr>'
    ).join('');
  }

  function renderMD(text) {
    hideLoader();
    const el = document.getElementById('prose-container');
    el.classList.remove('hidden');
    marked.setOptions({ breaks: true, gfm: true });
    el.innerHTML = marked.parse(text);
  }

  function renderHTML(html) {
    hideLoader();
    const el = document.getElementById('prose-container');
    el.classList.remove('hidden');
    el.innerHTML = html;
  }

  function renderPDF(url) {
    hideLoader();
    const c = document.getElementById('pdf-container');
    c.classList.remove('hidden');
    document.getElementById('pdf-frame').src = url + '#toolbar=1&navpanes=0';
  }

  function renderTXT(text) {
    hideLoader();
    const el = document.getElementById('txt-container');
    el.classList.remove('hidden');
    el.textContent = text;
  }

  // ===== Helpers =====

  function parseCSV(text, delim = null) {
    // Simple CSV parser that handles quoted fields + embedded delimiters/newlines.
    if (!delim) delim = ',';
    const rows = [];
    let cur = [''], rowI = 0, colI = 0, inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"' && text[i + 1] === '"') { cur[colI] += '"'; i++; }
        else if (c === '"') { inQuotes = false; }
        else { cur[colI] += c; }
      } else {
        if (c === '"') { inQuotes = true; }
        else if (c === delim) { cur.push(''); colI++; }
        else if (c === '\n') {
          rows.push(cur);
          cur = ['']; colI = 0;
        } else if (c === '\r') {
          // ignore — handled by next \n
        } else {
          cur[colI] += c;
        }
      }
    }
    if (cur.length && cur.some(v => v !== '')) rows.push(cur);
    // Normalize row widths
    const w = Math.max(...rows.map(r => r.length));
    rows.forEach(r => { while (r.length < w) r.push(''); });
    return rows;
  }

  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
})();
