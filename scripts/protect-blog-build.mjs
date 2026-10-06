import { readdir, unlink, rmdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Astro's adapter may copy local dotenv files into server output for preview.
// These are local credentials, never part of the CMS deployment artifact.
export async function removeBuildSecrets(directory) {
  for (const entry of await readdir(directory,{withFileTypes:true})) {
    const target = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) await removeBuildSecrets(target);
    else if (/^(?:\.dev\.vars(?:\..+)?|\.env(?:\..+)?)$/.test(entry.name)) await unlink(target);
  }
}

export async function protectBlogBuild(directory) {
  // Remove credentials before any later check can stop the build.
  await removeBuildSecrets(directory);
  // Private research stays on Pages. Unexpected files stop the build.
  for (const file of ['data/index.html','data/keywords.csv']) await unlink(new URL(`client/${file}`, directory));
  await rmdir(new URL('client/data/', directory));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await protectBlogBuild(new URL('../dist-blog/',import.meta.url));
  console.log('CMS deployment output excludes private research and local credential files.');
}
