import { serviceRoutes } from '../services/routes.js';
import { companyRoutes } from '../content/company.js';
import { getPosts } from '@blog/source';
import { base, articleUrl, origin, topics, xml } from '../blog/site.js';
export async function GET() {
 const [vi,en] = await Promise.all([getPosts('vi'),getPosts('en')]);
 const pages = ['/', '/en/', '/blog/', '/en/blog/', '/blog/about/', '/en/blog/about/', ...Object.values(companyRoutes).flatMap(r=>[r.vi,r.en]), ...Object.values(serviceRoutes).flatMap(r=>[r.vi,r.en])];
 for (const locale of ['vi','en']) for (const t of topics) if ((locale==='vi'?vi:en).some(p=>p.topic===t.slug)) pages.push(`${base(locale)}topics/${t.slug}/`);
 const entries = [...pages.map(p=>`<url><loc>${origin+p}</loc></url>`), ...[...vi,...en].map(p=>`<url><loc>${origin+articleUrl(p)}</loc><lastmod>${xml(p.reviewed_date)}</lastmod></url>`)];
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
