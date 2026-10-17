import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const sources = JSON.parse(await readFile('image-sources.local.json', 'utf8'));
await mkdir('public/images', { recursive: true });
const manifest = [];
for (const [id, path] of Object.entries(sources)) {
  const result = await sharp(path)
    .resize({ width: id === 'hero' ? 1920 : 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(`public/images/${id}.webp`);
  manifest.push({
    id,
    file: `/images/${id}.webp`,
    width: result.width,
    height: result.height,
    bytes: result.size,
    kind: 'AI-generated illustration',
    generator: 'built-in image_gen',
    verified: false,
  });
}
await writeFile('src/data/images.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(
  manifest
    .map((x) => `${x.id}: ${x.width}×${x.height}, ${Math.round(x.bytes / 1024)} Ko`)
    .join('\n'),
);
