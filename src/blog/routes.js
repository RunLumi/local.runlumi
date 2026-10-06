import { getPosts } from '@blog/source';
import { topics } from './site.js';
export async function blogPaths(locale) {
  const posts = await getPosts(locale);
  return [undefined,'search','about', ...topics.filter(t => posts.some(p => p.topic===t.slug)).map(t => `topics/${t.slug}`), ...posts.map(p=>p.slug)].map(path=>({params:{path}}));
}
