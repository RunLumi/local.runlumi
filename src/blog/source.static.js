const files = import.meta.glob('./content/*.json', { eager:true, import:'default' });
// Files are reviewed release snapshots. A database build never imports this source.
export async function getPosts(locale) {
  return Object.values(files).filter(p => p.locale === locale && !p.draft && new Date(p.pub_date) <= new Date()).sort((a,b) => b.pub_date.localeCompare(a.pub_date) || a.slug.localeCompare(b.slug));
}
