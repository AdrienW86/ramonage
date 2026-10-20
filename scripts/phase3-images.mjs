import fs from 'node:fs';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
const paths = JSON.parse(
  fs.readFileSync('artifacts/phase3-image-paths.local.json', 'utf8').replace(/^\uFEFF/, ''),
);
const manifest = JSON.parse(fs.readFileSync('src/data/guide-image-manifest.json', 'utf8'));
fs.mkdirSync('public/images/guides', { recursive: true });
fs.mkdirSync('artifacts/phase3/originals', { recursive: true });
const tiles = [];
for (const [i, m] of manifest.entries()) {
  const source = paths.find((p) => p.slug === m.slug)?.source;
  if (!source) throw Error('Missing generation ' + m.slug);
  const original = `artifacts/phase3/originals/${m.slug}.png`;
  fs.copyFileSync(source, original);
  const dest = 'public' + m.file;
  await sharp(source)
    .rotate()
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 74, effort: 6 })
    .toFile(dest);
  const info = await sharp(dest).metadata();
  Object.assign(m, {
    status: 'generated',
    width: info.width,
    height: info.height,
    bytes: fs.statSync(dest).size,
    sha256: createHash('sha256').update(fs.readFileSync(dest)).digest('hex'),
    originalSha256: createHash('sha256').update(fs.readFileSync(source)).digest('hex'),
    generatedAt: '2026-10-17',
  });
  const thumb = await sharp(dest).resize(256, 170, { fit: 'cover' }).toBuffer();
  const label = Buffer.from(
    `<svg width="256" height="40"><rect width="256" height="40" fill="#f4efe5"/><text x="8" y="16" font-size="12" font-family="Arial">${i + 1}. ${m.slug.slice(0, 33)}</text></svg>`,
  );
  const tile = await sharp({
    create: { width: 256, height: 210, channels: 3, background: '#f4efe5' },
  })
    .composite([
      { input: thumb, top: 0, left: 0 },
      { input: label, top: 170, left: 0 },
    ])
    .png()
    .toBuffer();
  tiles.push({ input: tile, left: (i % 7) * 256, top: Math.floor(i / 7) * 210 });
}
fs.writeFileSync('src/data/guide-image-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
await sharp({ create: { width: 1792, height: 1050, channels: 3, background: '#f4efe5' } })
  .composite(tiles)
  .png()
  .toFile('artifacts/phase3/contact-sheet.png');
console.log(
  JSON.stringify({
    generated: manifest.length,
    unique: new Set(manifest.map((m) => m.sha256)).size,
    totalBytes: manifest.reduce((a, m) => a + m.bytes, 0),
    maxBytes: Math.max(...manifest.map((m) => m.bytes)),
  }),
);
