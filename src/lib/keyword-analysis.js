// Shared, deterministic analysis. Advertising competition is never used as SEO difficulty.
export const FIT = {
  core: { label: 'Offer-adjacent', note: 'A component of the current offer; not proof of a buyer.' },
  education: { label: 'Educational bridge', note: 'Useful content hypothesis; audience and buying intent need validation.' },
  outside: { label: 'Outside offer', note: 'Service demand that Lumi Local does not fulfil.' },
  exclude: { label: 'Exclude', note: 'Consumer navigation, unrelated use, or review manipulation.' },
};
export const CLUSTERS = {
  website: 'Website + Maps', reviews: 'Reviews + trust', verification: 'Profile verification',
  profile: 'Business profile setup', seo: 'Maps SEO services', tracking: 'Tracking + privacy',
  navigation: 'Navigation + maps',
};
export const INTENTS = {
  informational: 'Informational', commercial: 'Commercial', transactional: 'Transactional', navigational: 'Navigational',
};

export function normalize(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/\s+/g, ' ').trim();
}

// RFC-style quoted fields, escaped quotes, BOM, CRLF and embedded newlines.
export function parseCSV(source) {
  const records = []; let record = [], field = '', quoted = false;
  const text = source.replace(/^\uFEFF/, '');
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (quoted && text[i + 1] === '"') { field += '"'; i++; }
      else if (quoted || field === '') quoted = !quoted;
      else throw new Error('Unexpected quote in CSV field');
    } else if (ch === ',' && !quoted) { record.push(field); field = ''; }
    else if ((ch === '\n' || ch === '\r') && !quoted) {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      record.push(field); if (record.some(Boolean)) records.push(record); record = []; field = '';
    } else field += ch;
  }
  if (quoted) throw new Error('Unclosed CSV quote');
  if (field || record.length) { record.push(field); records.push(record); }
  const headers = records.shift();
  if (!headers || new Set(headers).size !== headers.length) throw new Error('Missing or duplicate CSV headers');
  return records.map((values, i) => {
    if (values.length !== headers.length) throw new Error(`CSV row ${i + 2}: unexpected column count`);
    return Object.fromEntries(headers.map((header, j) => [header, values[j]]));
  });
}

export function numeric(value) {
  if (value == null || value.trim() === '' || value === 'Unknown' || value === '--') return null;
  const number = Number(value.replace(/%$/, ''));
  return Number.isFinite(number) ? number : null;
}

export function classify(keyword) {
  const k = normalize(keyword);
  const how = /\b(cach|huong dan)\b/.test(k);
  const paid = /\b(dich vu|mua|thue|gia)\b/.test(k);
  const owner = /\b(doanh nghiep|cua hang|business|nha hang|cong ty)\b/.test(k);
  const review = /\b(review|reviews|danh gia)\b/.test(k);
  const result = (cluster, fit, intent, confidence, reason) => ({ cluster, fit, intent, confidence, reason });
  if (review && (/\b(mua|dich vu|5 sao|nam sao)\b/.test(k)))
    return result('reviews', 'exclude', 'transactional', 'High', 'Purchased, managed or requested-rating reviews conflict with the honest-review policy.');
  if (/\b(dinh vi|theo doi|tim vi tri)\b/.test(k) && /\b(so dien thoai|dien thoai|nguoi khac)\b/.test(k))
    return result('tracking', 'exclude', 'informational', 'High', 'Phone/person tracking is unrelated to a local presence package.');
  if (/\b(website|trang web|qr)\b/.test(k))
    return result('website', /\b(tich hop|chen|qr)\b/.test(k) ? 'core' : 'exclude', 'informational', 'Medium', 'Website/Maps integration is adjacent to the offer. Searcher may be a developer, not an owner.');
  if (/\bxac minh\b/.test(k))
    return result('verification', how ? 'education' : 'outside', paid ? 'commercial' : 'informational', 'High', 'Owner self-service guidance only. Lumi does not verify or manage Google profiles.');
  if (/\bseo\b/.test(k))
    return result('seo', how ? 'education' : 'outside', how ? 'informational' : 'commercial', 'High', 'SEO advice may support education; managed Maps SEO is outside the current offer.');
  if (review) {
    if (/\b(xoa|tat)\b/.test(k))
      return result('reviews', 'outside', 'informational', 'Medium', 'Review removal/suppression is not the offer. Check legitimate reporting guidance separately.');
    return result('reviews', 'education', 'informational', 'Low', 'Mixed consumer/owner audience. An honest-review guide is a hypothesis, not a review-growth service.');
  }
  if (paid && /\b(map|maps)\b/.test(k))
    return result('profile', 'outside', 'commercial', 'Medium', 'Broad Maps-service query. Do not imply profile management is included.');
  if (!owner && /\b(dia chi nha|nha rieng|cua toi)\b/.test(k))
    return result('navigation', 'exclude', 'informational', 'High', 'Personal home-address setup does not establish a business audience.');
  if (owner || /\b(tao|dang ky|them|dua|ghim)\b.*\b(dia diem|dia chi)\b/.test(k))
    return result('profile', 'education', 'informational', owner ? 'Medium' : 'Low', owner ? 'Owner-led profile setup content can introduce the presence package; no Google access is required.' : 'Place/address setup can be personal or business use. Validate owner relevance; Lumi does not manage Google profiles.');
  return result('navigation', 'exclude', 'navigational', 'Medium', 'Navigation, location, app or map use; no established intent to buy Lumi Local.');
}

export function priority(row) {
  if (!['core', 'education'].includes(row.fit)) return 0;
  const fit = row.fit === 'core' ? 60 : 40;
  const intent = { transactional: 25, commercial: 20, informational: 10, navigational: 0 }[row.intent];
  const demand = 15 * Math.min(1, Math.log10(1 + (row.volume ?? 0)) / 4);
  return Math.round(fit + intent + demand);
}

export function analyzeCSV(source) {
  const raw = parseCSV(source);
  const required = ['Keyword', 'Currency', 'Avg. monthly searches', 'Competition (indexed value)', 'Three month change', 'YoY change', 'Top of page bid (low range)', 'Top of page bid (high range)'];
  if (!raw.length || required.some(key => !(key in raw[0]))) throw new Error('Keyword dataset is empty or missing required columns');
  const months = Object.keys(raw[0]).filter(key => key.startsWith('Searches: '));
  const entries = new Map(); let duplicateCount = 0, conflictCount = 0;
  for (const data of raw) {
    const keyword = data.Keyword.trim();
    if (!keyword) throw new Error('Empty keyword');
    if (entries.has(keyword)) {
      duplicateCount++;
      if (JSON.stringify(entries.get(keyword).raw) !== JSON.stringify(data)) conflictCount++;
      entries.get(keyword).occurrences++; continue;
    }
    entries.set(keyword, { raw: data, occurrences: 1 });
  }
  const rows = [...entries.entries()].map(([keyword, entry], id) => {
    const r = entry.raw;
    const row = {
      id, keyword, normalized: normalize(keyword), occurrences: entry.occurrences,
      currency: r.Currency, volume: numeric(r['Avg. monthly searches']),
      change: numeric(r['Three month change']), changeRaw: r['Three month change'],
      yoy: numeric(r['YoY change']), yoyRaw: r['YoY change'],
      competition: r.Competition, adCompetition: numeric(r['Competition (indexed value)']),
      bidLow: numeric(r['Top of page bid (low range)']), bidHigh: numeric(r['Top of page bid (high range)']),
      monthly: months.map(key => numeric(r[key])), ...classify(keyword),
    };
    return { ...row, score: priority(row) };
  });
  const normalizedGroups = new Map();
  rows.forEach(row => normalizedGroups.set(row.normalized, (normalizedGroups.get(row.normalized) ?? 0) + 1));
  return {
    rows, months: months.map(key => key.replace('Searches: ', '')),
    audit: {
      rawRows: raw.length, uniqueRows: rows.length, duplicateCount, conflictCount,
      normalizedVariantGroups: [...normalizedGroups.values()].filter(n => n > 1).length,
      missingBids: rows.filter(row => row.bidLow === null || row.bidHigh === null).length,
      missingCompetition: rows.filter(row => row.adCompetition === null).length,
      nonFiniteChanges: rows.filter(row => row.changeRaw.includes('∞') || row.yoyRaw.includes('∞')).length,
      organicObservations: raw.filter(row => ['Organic average position', 'Organic impression share'].some(key => numeric(row[key]) !== null)).length,
      currencies: [...new Set(raw.map(row => row.Currency))],
    },
  };
}

export function filterRows(rows, filters = {}) {
  const query = normalize(filters.query ?? '');
  return rows.filter(row => (!query || row.normalized.includes(query))
    && (!filters.fit || filters.fit === 'all' || (filters.fit === 'candidates' ? ['core', 'education'].includes(row.fit) : row.fit === filters.fit))
    && (!filters.cluster || filters.cluster === 'all' || row.cluster === filters.cluster)
    && (!filters.intent || filters.intent === 'all' || row.intent === filters.intent)
    && (row.volume ?? -1) >= (filters.minVolume || 0));
}

export function sortRows(rows, sort = 'score') {
  const ascending = sort === 'adCompetition';
  return [...rows].sort((a, b) => {
    const av = a[sort], bv = b[sort];
    if (av == null && bv != null) return 1;
    if (bv == null && av != null) return -1;
    return (av == null ? 0 : (ascending ? av - bv : bv - av)) || (b.volume ?? 0) - (a.volume ?? 0) || a.keyword.localeCompare(b.keyword, 'vi');
  });
}

export function exportCSV(rows, months) {
  const cell = value => {
    let text = value == null ? '' : String(value);
    // Spreadsheet formula protection for textual cells. Preserve actual numeric negatives.
    if (typeof value === 'string' && /^[=+\-@\t\r]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  };
  const headers = ['Keyword', 'Fit (heuristic)', 'Cluster (heuristic)', 'Intent (heuristic)', 'Confidence', 'Priority (heuristic)', 'Reason', 'Avg. monthly searches', '3 month change (source)', 'YoY change (source)', 'Ad competition index', 'Bid low', 'Bid high', 'Currency', 'Source occurrences', ...months];
  const data = rows.map(r => [r.keyword, FIT[r.fit].label, CLUSTERS[r.cluster], INTENTS[r.intent], r.confidence, r.score, r.reason, r.volume, r.changeRaw, r.yoyRaw, r.adCompetition, r.bidLow, r.bidHigh, r.currency, r.occurrences, ...r.monthly]);
  return '\uFEFF' + [headers, ...data].map(values => values.map(cell).join(',')).join('\r\n');
}
