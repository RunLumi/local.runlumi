import { FIT, CLUSTERS, INTENTS, filterRows, sortRows, exportCSV } from '../lib/keyword-analysis.js';

const { rows, months } = JSON.parse(document.querySelector('#keyword-dataset').textContent);
const form = document.querySelector('#keyword-filters');
const body = document.querySelector('#keyword-rows');
const sizeControl = document.querySelector('#page-size');
const previous = document.querySelector('#previous-page');
const next = document.querySelector('#next-page');
const exportButton = document.querySelector('#export-csv');
let page = 0;
let filtered = [];
let selectedId = Number(body.querySelector('[aria-pressed="true"]').dataset.keywordId);
let exportURL;
const number = value => value == null ? '—' : new Intl.NumberFormat('en-US').format(value);
const percent = (value, raw) => value == null ? (raw.includes('∞') ? '∞ · no finite baseline' : '—') : `${value > 0 ? '+' : ''}${value}%`;
const el = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text != null) node.textContent = text;
  if (className) node.className = className;
  return node;
};
const svgElement = (tag, attributes = {}, text) => {
  const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
  if (text != null) node.textContent = text;
  return node;
};

function showDetail(row) {
  const detail = document.querySelector('#keyword-detail');
  detail.hidden = !row;
  if (!row) return;
  document.querySelector('#detail-keyword').textContent = row.keyword;
  document.querySelector('#detail-confidence').textContent = `${row.confidence} classification confidence`;
  const volume = document.querySelector('#detail-volume');
  volume.replaceChildren(document.createTextNode(number(row.volume)), el('small', ' avg. monthly searches'));
  document.querySelector('#detail-yoy').textContent = `YoY ${percent(row.yoy, row.yoyRaw)}`;
  document.querySelector('#detail-reason').textContent = row.reason;
  document.querySelector('#detail-intent').textContent = INTENTS[row.intent];
  document.querySelector('#detail-bids').textContent = row.bidLow == null || row.bidHigh == null ? 'Unknown' : `${number(row.bidLow)}–${number(row.bidHigh)} ${row.currency}`;
  document.querySelector('#detail-occurrences').textContent = row.occurrences;
  const values = document.querySelector('#monthly-values');
  values.replaceChildren(...months.map((month, i) => {
    const item = el('div'); item.append(el('dt', month), el('dd', number(row.monthly[i]))); return item;
  }));
  const chart = svgElement('svg', { viewBox: '0 0 700 240', role: 'img', 'aria-label': `Monthly estimated searches for ${row.keyword}. ${months[0]} to ${months.at(-1)}. Read the monthly values below.` });
  const max = Math.max(1, ...row.monthly.filter(value => value != null));
  const x = i => 65 + i * 590 / Math.max(1, months.length - 1);
  const y = value => 195 - value / max * 145;
  for (const tick of [0, max / 2, max]) {
    chart.append(svgElement('line', { x1: 65, y1: y(tick), x2: 655, y2: y(tick), class: 'chart-grid' }), svgElement('text', { x: 55, y: y(tick) + 4, 'text-anchor': 'end' }, number(Math.round(tick))));
  }
  // Missing months break the line rather than becoming artificial zeros.
  let segment = [];
  const drawSegment = () => {
    if (segment.length) chart.append(svgElement('polyline', { points: segment.join(' '), class: 'trend-line' }));
    segment = [];
  };
  row.monthly.forEach((value, i) => {
    if (value == null) { drawSegment(); return; }
    segment.push(`${x(i)},${y(value)}`);
  });
  drawSegment();
  row.monthly.forEach((value, i) => {
    if (value == null) return;
    const point = svgElement('circle', { cx: x(i), cy: y(value), r: 4, class: 'trend-point' });
    point.append(svgElement('title', {}, `${months[i]}: ${number(value)}`)); chart.append(point);
  });
  [0, 3, 6, 9, months.length - 1].filter((n, i, list) => list.indexOf(n) === i && n < months.length).forEach(i => chart.append(svgElement('text', { x: x(i), y: 225, 'text-anchor': i === 0 ? 'start' : i === months.length - 1 ? 'end' : 'middle' }, months[i])));
  document.querySelector('#trend-chart').replaceChildren(chart);
}

function render() {
  const size = Number(sizeControl.value);
  const pages = Math.max(1, Math.ceil(filtered.length / size));
  page = Math.min(page, pages - 1);
  const visible = filtered.slice(page * size, (page + 1) * size);
  if (!filtered.some(row => row.id === selectedId)) selectedId = visible[0]?.id;
  body.replaceChildren(...visible.map(row => {
    const tr = el('tr', null, row.id === selectedId ? 'selected-row' : '');
    const keyword = el('td');
    const button = el('button', null, 'keyword-select');
    button.type = 'button'; button.dataset.keywordId = row.id;
    button.setAttribute('aria-pressed', String(row.id === selectedId));
    const text = el('span', row.keyword); text.lang = 'vi'; button.append(text);
    keyword.append(button, el('small', CLUSTERS[row.cluster]));
    const fit = el('td'); fit.append(el('span', FIT[row.fit].label, `fit-tag tag-${row.fit}`));
    const score = el('td'); score.append(el('strong', row.score, 'score-value'), el('span', ' / 100', 'small-meta'));
    tr.append(keyword, fit, el('td', number(row.volume)), el('td', percent(row.change,row.changeRaw)), el('td', number(row.adCompetition)), score);
    return tr;
  }));
  if (!visible.length) {
    const tr = el('tr'); const td = el('td', 'No matching keywords. Try a broader search or reset the filters.', 'empty-results'); td.colSpan = 6; tr.append(td); body.append(tr);
  }
  document.querySelector('#result-summary').textContent = `${number(filtered.length)} matching terms · ${number(rows.length)} total`;
  document.querySelector('#page-summary').textContent = filtered.length ? `${page*size+1}–${Math.min((page+1)*size,filtered.length)} of ${number(filtered.length)}` : '0 results';
  previous.disabled = page === 0;
  next.disabled = page >= pages - 1;
  exportButton.disabled = filtered.length === 0;
  showDetail(rows.find(row => row.id === selectedId));
}

function update({ syncURL = true } = {}) {
  const data = Object.fromEntries(new FormData(form));
  filtered = sortRows(filterRows(rows, data), data.sort);
  document.querySelector('#export-receipt').hidden = true;
  if (exportURL) { URL.revokeObjectURL(exportURL); exportURL = undefined; }
  page = 0; render();
  if (syncURL) {
    const url = new URL(location.href);
    url.search = '';
    for (const [key, value] of Object.entries(data)) {
      if (value && value !== 'all' && !(key === 'fit' && value === 'candidates') && !(key === 'minVolume' && value === '0') && !(key === 'sort' && value === 'score')) url.searchParams.set(key, value);
    }
    // An explicit all-fit state must survive a copied URL.
    if (data.fit === 'all') url.searchParams.set('fit', 'all');
    history.replaceState(null, '', url);
  }
}

form.addEventListener('submit', event => event.preventDefault());
form.addEventListener('input', () => update());
form.addEventListener('change', () => update());
// A native reset fires its event before restoring control values. A microtask can
// run inside that dispatch; defer to the next task to read the restored values.
form.addEventListener('reset', () => setTimeout(() => update(), 0));
sizeControl.addEventListener('change', () => { page = 0; render(); });
previous.addEventListener('click', () => { page--; render(); });
next.addEventListener('click', () => { page++; render(); });
body.addEventListener('click', event => {
  const button = event.target.closest('[data-keyword-id]');
  if (!button) return;
  selectedId = Number(button.dataset.keywordId);
  for (const item of body.querySelectorAll('[data-keyword-id]')) {
    const active = Number(item.dataset.keywordId) === selectedId;
    item.setAttribute('aria-pressed', String(active)); item.closest('tr').classList.toggle('selected-row', active);
  }
  showDetail(rows.find(row => row.id === selectedId));
});
document.querySelectorAll('[data-fit-preset]').forEach(control => control.addEventListener('click', () => {
  form.reset(); form.elements.fit.value = control.dataset.fitPreset;
  queueMicrotask(() => update());
}));
document.querySelectorAll('[data-cluster-preset]').forEach(control => control.addEventListener('click', () => {
  form.reset(); form.elements.fit.value = 'all'; form.elements.cluster.value = control.dataset.clusterPreset;
  queueMicrotask(() => update()); location.hash = 'explorer';
}));
exportButton.addEventListener('click', () => {
  if (exportURL) URL.revokeObjectURL(exportURL);
  const csv = exportCSV(filtered, months);
  exportURL = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.querySelector('#csv-download'); link.href = exportURL;
  document.querySelector('#csv-preview').value = csv;
  document.querySelector('#export-summary').textContent = `CSV ready · ${number(filtered.length)} terms · download or inspect`;
  const receipt = document.querySelector('#export-receipt'); receipt.hidden = false; receipt.open = true;
  link.click();
});
// Restore only supported controls; URL parameters are untrusted input.
const params = new URLSearchParams(location.search);
for (const control of form.elements) {
  if (!control.name || !params.has(control.name)) continue;
  const value = params.get(control.name);
  if (control instanceof HTMLSelectElement) {
    if ([...control.options].some(option => option.value === value)) control.value = value;
  } else if (control.name === 'minVolume') {
    if (/^\d+$/.test(value) && Number.isSafeInteger(Number(value))) control.value = value;
  } else if (control.name === 'query') control.value = value.slice(0,300);
}
update({ syncURL: false });
