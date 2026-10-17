import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
const source = process.argv[2];
if (!source) throw new Error('Indiquer le fichier généré à importer.');
const id = 'bois-stockage';
const file = `/images/${id}.webp`;
const result = await sharp(source)
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(`public${file}`);
const images = JSON.parse(await readFile('src/data/images.json', 'utf8'));
await writeFile(
  'src/data/images.json',
  JSON.stringify(
    [
      ...images.filter((i) => i.id !== id),
      {
        id,
        file,
        width: result.width,
        height: result.height,
        bytes: result.size,
        kind: 'AI-generated illustration',
        generator: 'built-in image_gen',
        verified: false,
      },
    ],
    null,
    2,
  ) + '\n',
);
const prompts = JSON.parse(await readFile('src/data/image-prompts.json', 'utf8'));
const prompt =
  'Use case: photorealistic-natural. Asset type: landscape 3:2 editorial educational illustration for a French chimney maintenance resource centre. Primary request: split untreated firewood stacked neatly on raised slatted supports under a simple covered open-sided outdoor shelter, showing a clear air gap underneath and plenty of ventilation, no plastic wrap enclosing the logs. Mediterranean stone wall and muted garden in background, no identifiable address. Natural warm daylight, premium credible craft photography, charcoal, copper and warm ivory color palette consistent with an elegant fireplace website, realistic fine textures. No people, no text, no logos, no watermark. This is a conceptual AI illustration, not a genuine company job or measurement of wood moisture. Return a local file path.';
await writeFile(
  'src/data/image-prompts.json',
  JSON.stringify([...prompts.filter((p) => p.id !== id), { id, file, prompt }], null, 2) + '\n',
);
console.log({ file, width: result.width, height: result.height, bytes: result.size });
