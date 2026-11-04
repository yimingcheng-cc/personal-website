import { mkdir, copyFile, readdir, rm } from 'node:fs/promises';
import { extname } from 'node:path';

// Start with a clean output so removed files cannot remain in a deployment.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'favicon.svg']) {
  await copyFile(file, `dist/${file}`);
}
// Preserve the original image bytes; source notes are not published.
const images = (await readdir('assets', { withFileTypes: true }))
  .filter(file => file.isFile() && /\.(png|jpe?g|webp|avif|svg)$/i.test(extname(file.name)));
if (images.length) {
  await mkdir('dist/assets', { recursive: true });
  for (const file of images) await copyFile(`assets/${file.name}`, `dist/assets/${file.name}`);
}
console.log('Built static website in dist/');
