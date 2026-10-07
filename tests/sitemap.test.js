import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { serviceRoutes } from '../src/services/routes.js';
import { companyRoutes } from '../src/content/company.js';
import { topics, base, articleUrl, origin } from '../src/blog/site.js';
import { sitemapEntries, sitemapXml } from '../src/blog/sitemap.js';

const posts=readdirSync('src/blog/content').map(f=>JSON.parse(readFileSync('src/blog/content/'+f,'utf8')));
const vi=posts.filter(p=>p.locale==='vi');
const en=posts.filter(p=>p.locale==='en');

test('sitemap contains every canonical indexable route, including all localized guides',()=>{
  const xml=readFileSync('dist/sitemap.xml','utf8');
  assert.match(xml,/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xml,/<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9" xmlns:xhtml="http:\/\/www.w3.org\/1999\/xhtml">/);
  const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
  const expected=new Set([
    `${origin}/`,`${origin}/en/`,`${origin}/blog/`,`${origin}/en/blog/`,
    `${origin}/blog/about/`,`${origin}/en/blog/about/`,
    ...Object.values(serviceRoutes).flatMap(r=>[origin+r.vi,origin+r.en]),
    ...Object.values(companyRoutes).flatMap(r=>[origin+r.vi,origin+r.en]),
    ...topics.flatMap(t=>[
      ...(vi.some(p=>p.topic===t.slug)?[origin+base('vi')+`topics/${t.slug}/`]:[]),
      ...(en.some(p=>p.topic===t.slug)?[origin+base('en')+`topics/${t.slug}/`]:[])
    ]),
    ...posts.map(p=>origin+articleUrl(p))
  ]);
  assert.equal(urls.length,expected.size,'no duplicated sitemap locations');
  assert.deepEqual([...urls].sort(),[...expected].sort());
  assert.doesNotMatch(xml,/<lastmod>/,'source-check dates are not content-modification dates');
  assert.doesNotMatch(xml,/\/data(?:\/|<)|_emdash|\/search\/|\/rss\.xml|\/404(?:\.html)?/);
  assert.match(readFileSync('public/robots.txt','utf8'),new RegExp(`Sitemap: ${origin.replaceAll('.','\\.')}/sitemap\\.xml`));
});

test('live publication changes add/remove routes and alternate links without a stale seed fallback',()=>{
  const post={locale:'vi',slug:'new-real-guide',topic:'quyen-so-huu',pub_date:'2026-10-06',reviewed_date:'2026-10-08'};
  const now=new Date('2026-10-08T12:00:00Z');
  const first=sitemapEntries({vi:[post],en:[]},now);
  const url=origin+'/blog/new-real-guide/';
  assert.ok(first.some(e=>e.url===url));
  assert.deepEqual(first.find(e=>e.url===url).alternates,[]);
  assert.ok(!first.some(e=>e.url===origin+'/en/blog/new-real-guide/'));
  const pair=sitemapEntries({vi:[post,post],en:[{...post,locale:'en'}]},now);
  assert.equal(pair.filter(e=>e.url===url).length,1);
  for(const locale of ['vi','en']) {
    const entry=pair.find(e=>e.url===origin+base(locale)+post.slug+'/');
    assert.deepEqual(entry.alternates.map(a=>a.lang),['vi','en','x-default']);
    assert.ok(entry.alternates.some(a=>a.url===entry.url));
  }
  const removed=sitemapEntries({vi:[],en:[{...post,locale:'en'}]},now);
  assert.ok(!removed.some(e=>e.url===url));
  assert.deepEqual(removed.find(e=>e.url===origin+'/en/blog/new-real-guide/').alternates,[]);
  for(const bad of [{...post,draft:true},{...post,pub_date:'2099-01-01'},{...post,pub_date:'invalid'},
    {...post,slug:'../data'},{...post,slug:'search'},{...post,locale:'fr'}]) {
    assert.ok(!sitemapEntries({vi:[bad],en:[]},now).some(e=>e.group==='articles'));
  }
  assert.ok(!sitemapEntries({vi:[],en:[]},now).some(e=>e.group==='topics'));
  assert.doesNotMatch(sitemapXml({vi:[post],en:[]}),/<lastmod>|<priority>|<changefreq>/);
});

test('all built indexable canonical pages are covered and every sitemap alternate is reciprocal',()=>{
  const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]);
  const canonicalPages=walk('dist').filter(f=>f.endsWith('.html')).flatMap(file=>{
    const html=readFileSync(file,'utf8');
    if(/name="robots" content="noindex/.test(html))return [];
    const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical,`missing canonical on ${file}`);
    return [canonical];
  });
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const urlBlocks=[...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>({url:m[1].match(/<loc>(.*?)<\/loc>/)[1],body:m[1]}));
  assert.deepEqual(urlBlocks.map(e=>e.url).sort(),canonicalPages.sort());
  for(const entry of urlBlocks)for(const link of entry.body.matchAll(/<xhtml:link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)){
    const other=urlBlocks.find(e=>e.url===link[2]);
    assert.ok(other,`alternate ${link[2]} is missing`);
    assert.ok(other.body.includes(`href="${entry.url}"`),`missing return alternate to ${entry.url}`);
  }
});
