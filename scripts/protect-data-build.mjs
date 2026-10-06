import { readFile, writeFile, mkdir, unlink, rmdir, copyFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const pageFile = new URL('dist/data/index.html', root);
const csvFile = new URL('dist/data/keywords.csv', root);
const page = await readFile(pageFile, 'utf8');
const csv = await readFile(csvFile, 'utf8');
await mkdir(new URL('.data-build/', root), { recursive: true, mode: 0o700 });
await writeFile(new URL('.data-build/research.js', root), `// Generated private Function content. Never copy into dist.\nexport const page = ${JSON.stringify(page)};\nexport const csv = ${JSON.stringify(csv)};\n`, { mode: 0o600 });
// Remove only the two known generated files; an unexpected file stops the build.
await unlink(pageFile);
await unlink(csvFile);
await rmdir(new URL('dist/data/', root));
await copyFile(new URL('node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2',root),new URL('dist/research-font.woff2',root));
console.log('Research HTML and CSV moved out of public assets into the authenticated Function bundle.');
