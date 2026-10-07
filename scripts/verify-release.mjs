// Read-only production route/metadata/sitemap check; never sends enquiries or credentials.
import assert from 'node:assert/strict';
import {serviceRoutes} from '../src/services/routes.js';
import {companyRoutes} from '../src/content/company.js';
import { origin as canonicalOrigin } from '../src/blog/site.js';
const origin=process.env.RELEASE_ORIGIN ?? 'https://local.runlumi.app';

const sitemapResponse=await fetch(origin+'/sitemap.xml');
assert.equal(sitemapResponse.status,200,'sitemap status');
assert.match(sitemapResponse.headers.get('content-type')??'',/application\/xml/);
const sitemap=await sitemapResponse.text();
assert.match(sitemap,/<urlset\s+[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
const sitemapLocs=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
const sitemapSet=new Set(sitemapLocs);
assert.equal(sitemapLocs.length,sitemapSet.size,'Sitemap contains duplicate locations.');
for(const path of ['/','/en/','/blog/','/en/blog/','/blog/about/','/en/blog/about/']) {
  assert.ok(sitemapSet.has(canonicalOrigin+path),`Sitemap misses ${path}`);
}
for(const route of Object.values(serviceRoutes))for(const locale of ['vi','en']) {
  assert.ok(sitemapSet.has(canonicalOrigin+route[locale]),`Sitemap misses ${route[locale]}`);
}
for(const route of Object.values(companyRoutes))for(const locale of ['vi','en']) {
  const path=route[locale];
  assert.ok(sitemapSet.has(canonicalOrigin+path),`Sitemap misses ${path}`);
  const response=await fetch(origin+path);assert.equal(response.status,200,path);
  const html=await response.text();
  assert.ok(html.includes(`rel="canonical" href="${canonicalOrigin+path}"`),path);
  assert.ok(html.includes('src="/illustrations/map.svg"')&&html.includes('src="/illustrations/review.svg"')&&html.includes('src="/illustrations/website.svg"'),`Required company-page illustrations missing at ${path}`);
}
for(const forbidden of ['/data/','/_emdash/','/search/','/rss.xml','/404']) {
  assert.ok(!sitemapLocs.some(url=>url.includes(forbidden)),`Unindexable route entered sitemap: ${forbidden}`);
}
const robots=await fetch(origin+'/robots.txt').then(r=>r.text());
assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`),'robots.txt sitemap pointer');

for(const route of Object.values(serviceRoutes))for(const locale of ['vi','en']) {
  const url=origin+route[locale];
  const response=await fetch(url);assert.equal(response.status,200,url);
  const html=await response.text();
  assert.ok(html.includes(`rel="canonical" href="https://local.runlumi.app${route[locale]}"`),url);
  for(const language of ['vi','en'])assert.ok(html.includes(`hreflang="${language}-VN" href="https://local.runlumi.app${route[language]}"`),url);
  assert.ok(html.includes('name="source"'),url);
  assert.ok(!html.includes('discord.com/api/webhooks'),url);
  console.log('Verified '+route[locale]);
}

const publishedArticles=[];
const publishedTopics=new Set();
for(const locale of ['vi','en']) {
  const basePath=locale==='en'?'/en/blog/':'/blog/';
  const feedResponse=await fetch(origin+basePath+'rss.xml');
  assert.equal(feedResponse.status,200,basePath+'rss.xml');
  assert.equal(feedResponse.headers.get('Cache-Control'),'no-store','CMS feed must use the live binding.');
  const feed=await feedResponse.text();
  const articleUrls=[...feed.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>[\s\S]*?<\/item>/g)].map(x=>x[1]);
  assert.ok(articleUrls.length>0,`No published ${locale} blog entries were found.`);
  for(const url of articleUrls) {
    assert.ok(sitemapSet.has(url),`Sitemap misses published blog entry ${url}`);
    publishedArticles.push(url);
    const response=await fetch(origin+new URL(url).pathname);assert.equal(response.status,200,url);
    const html=await response.text();
    assert.ok(html.includes(`rel="canonical" href="${url}"`),`Canonical mismatch at ${url}`);
    assert.equal((html.match(/<h1(?:\s|>)/g)??[]).length,1,`One H1 expected at ${url}`);
    const category=html.match(/<a class="eyebrow" href="([^"]*\/topics\/[^\"]+\/)">/);
    if(category)publishedTopics.add(canonicalOrigin+category[1]);
  }
}
for(const topic of publishedTopics)assert.ok(sitemapSet.has(topic),`Sitemap misses published topic ${topic}`);
for(const path of ['/blog/','/en/blog/']) {
  const response=await fetch(origin+path);assert.equal(response.status,200,path);
  assert.equal(response.headers.get('Cache-Control'),'no-store','CMS binding must be active for '+path);
}

// Research is EmDash-admin only: anonymous data requests get 401, anonymous pages go to the editor sign-in.
for(const path of ['/data/keywords.csv','/data/index.html']) {
  const response=await fetch(origin+path,{redirect:'manual'});const body=await response.text();
  assert.equal(response.status,401,path);
  assert.ok(!body.includes('Avg. monthly searches'),'Private keyword data must not appear anonymously.');
}
{
  const response=await fetch(origin+'/data/',{redirect:'manual',headers:{accept:'text/html'}});
  await response.text();assert.equal(response.status,302,'/data/ sign-in redirect');
  assert.equal(response.headers.get('location'),'/_emdash/admin/login?redirect=%2Fdata%2F');
}
console.log(`PASS: services/industries, ${publishedArticles.length} live blog articles, published topics, complete sitemap and anonymous private-data protection.`);

const editor=await fetch(origin+'/_emdash/admin/setup',{redirect:'manual'});
assert.ok([200,302,401,503].includes(editor.status),'Editor must be routed to the protected CMS, not a static 404.');
await editor.text();
