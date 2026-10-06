import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCSV, numeric, analyzeCSV, classify, filterRows, sortRows, exportCSV } from '../src/lib/keyword-analysis.js';
const source = readFileSync(new URL('../docs/LumiLocalKeywords.csv', import.meta.url), 'utf8');
const data = analyzeCSV(source);

test('real CSV is deduplicated without inventing organic data or summing variants', () => {
  assert.equal(data.audit.rawRows, 2740);
  assert.equal(data.audit.uniqueRows, 2070);
  assert.equal(data.audit.duplicateCount, 670);
  assert.equal(data.audit.conflictCount, 0);
  assert.equal(data.audit.organicObservations, 0);
  assert.equal(data.audit.normalizedVariantGroups, 43);
  assert.equal(data.rows.reduce((sum, row) => sum + row.occurrences, 0), 2740);
  assert.deepEqual([data.months[0], data.months.at(-1)], ['Sep 2025', 'Aug 2026']);
  assert.equal(data.months.length, 12);
  assert.equal(data.audit.missingBids, 1286);
  assert.equal(data.audit.nonFiniteChanges, 23);
  assert.ok(data.rows.some(row => row.adCompetition === 0));
  assert.ok(data.rows.some(row => row.adCompetition === null));
  assert.ok(data.rows.some(row => row.volume === 0));
  assert.ok(data.rows.every(row => row.monthly.length === 12));
});

test('CSV parser preserves Vietnamese, quoted commas, quotes, embedded newlines and BOM', () => {
  assert.deepEqual(parseCSV('\uFEFFKeyword,Note\r\n"đánh giá, Maps","A ""quote""\nB"\r\n'), [{ Keyword: 'đánh giá, Maps', Note: 'A "quote"\nB' }]);
  assert.throws(() => parseCSV('A,B\n"unterminated,B'), /Unclosed/);
  assert.throws(() => parseCSV('A,B\na,b,c'), /column count/);
  assert.throws(() => analyzeCSV('A,B\na,b'), /missing required/);
});

test('null, real zero and nonfinite baselines remain distinct', () => {
  for (const value of ['', 'Unknown', '--', '∞', '-∞', undefined]) assert.equal(numeric(value), null);
  assert.equal(numeric('0'), 0);
  assert.equal(numeric('-100%'), -100);
  assert.equal(numeric('400%'), 400);
});

test('review manipulation and tracking are excluded; Google work is not sold as the offer', () => {
  for (const keyword of ['mua review google', 'dịch vụ đánh giá 5 sao google map', 'cách định vị số điện thoại qua google map']) assert.equal(classify(keyword).fit, 'exclude');
  assert.equal(classify('dịch vụ xác minh google map').fit, 'outside');
  assert.equal(classify('seo google maps').fit, 'outside');
  assert.equal(classify('cách xác minh google map').fit, 'education');
  assert.equal(classify('trang web bản đồ').fit, 'exclude');
  assert.equal(classify('cách tạo địa chỉ nhà trên google map').fit, 'exclude');
  assert.equal(classify('cách tạo địa điểm nhà hàng trên google map').fit, 'education');
  assert.equal(classify('cách thêm địa chỉ trên google map').confidence, 'Low');
  assert.equal(classify('tích hợp google map vào website').fit, 'core');
  assert.equal(classify('đánh giá google maps').confidence, 'Low');
});

test('accent-insensitive compound filters and sorting retain unknowns at the end', () => {
  const matches = filterRows(data.rows, { query: 'danh gia', fit: 'education', cluster: 'reviews', minVolume: 100 });
  assert.ok(matches.length > 0);
  assert.ok(matches.every(row => row.fit === 'education' && row.cluster === 'reviews' && row.volume >= 100));
  assert.equal(filterRows(data.rows, { query: 'no-such-keyword-zz' }).length, 0);
  assert.equal(filterRows(data.rows, { fit: 'all' }).length, 2070);
  const fixture = [{ keyword:'A', volume:1, adCompetition:null }, { keyword:'B', volume:1, adCompetition:20 }, { keyword:'C', volume:1, adCompetition:0 }];
  assert.deepEqual(sortRows(fixture, 'adCompetition').map(row => row.keyword), ['C','B','A']);
  assert.ok(data.rows.filter(row => ['exclude','outside'].includes(row.fit)).every(row => row.score === 0));
});

test('filtered export round trips nulls, infinite source changes, month history and formula protection', () => {
  const row = data.rows.find(row => row.changeRaw.includes('∞'));
  const exported = parseCSV(exportCSV([row, { ...row, keyword:'=1+1' }], data.months));
  assert.equal(exported.length, 2);
  assert.equal(exported[0]['3 month change (source)'], row.changeRaw);
  assert.equal(exported[0][data.months[0]], String(row.monthly[0]));
  assert.equal(exported[1].Keyword, "'=1+1");
});

test('conflicting duplicate metrics are surfaced and the first observation is retained', () => {
  const lines = source.trim().split(/\r?\n/);
  const modified = lines[1].replace(',VND,40,', ',VND,50,');
  const fixture = analyzeCSV([lines[0], lines[1], modified].join('\n'));
  assert.equal(fixture.audit.conflictCount, 1);
  assert.equal(fixture.rows[0].volume, 40);
});
