// Adapted from Reef's paginated published-only source; see licenses/reef-MIT.txt.
import { getEmDashCollection } from 'emdash';
export async function getPosts(locale) {
  const posts = [];
  let cursor;
  do {
    const page = await getEmDashCollection('posts', { locale, status:'published', limit:100, cursor });
    if (page.error) throw page.error;
    for (const entry of page.entries) {
      const p = entry.data;
      if (p.title && p.content && p.pub_date && new Date(p.pub_date) <= new Date()) posts.push({ ...p, slug:p.slug ?? entry.id, locale });
    }
    cursor = page.nextCursor ?? undefined;
  } while (cursor);
  return posts.sort((a,b) => b.pub_date.localeCompare(a.pub_date) || a.slug.localeCompare(b.slug));
}
