import { getPosts } from '@blog/source';
import { origin, articleUrl, base, xml } from './site.js';
export async function feed(locale) {
 const posts = await getPosts(locale);
 const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Lumi Local</title><link>${origin+base(locale)}</link><description>${locale==='vi'?'Cẩm nang hiện diện địa phương':'Local presence guides'}</description><language>${locale}</language>${posts.map(p=>`<item><title>${xml(p.title)}</title><link>${origin+articleUrl(p)}</link><guid isPermaLink="true">${origin+articleUrl(p)}</guid><description>${xml(p.description)}</description><pubDate>${new Date(p.pub_date).toUTCString()}</pubDate></item>`).join('')}</channel></rss>`;
 return new Response(body,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
