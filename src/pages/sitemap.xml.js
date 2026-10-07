import { getPosts } from '@blog/source';
import { sitemapXml } from '../blog/sitemap.js';
export async function GET() {
 const [vi,en] = await Promise.all([getPosts('vi'),getPosts('en')]);
 // Source-check dates are not verified content-modification dates; omit optional lastmod.
 return new Response(sitemapXml({vi,en}),{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
