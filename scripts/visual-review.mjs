import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
await mkdir('artifacts', { recursive: true });
const images = JSON.parse(await readFile('src/data/images.json', 'utf8'));
const thumbs = await Promise.all(
  images.map(async (item, i) => ({
    input: await sharp('public' + item.file)
      .resize(400, 267, { fit: 'cover' })
      .png()
      .toBuffer(),
    left: (i % 3) * 400,
    top: Math.floor(i / 3) * 267,
  })),
);
await sharp({ create: { width: 1200, height: 1068, channels: 3, background: '#f5f1ea' } })
  .composite(thumbs)
  .jpeg({ quality: 85 })
  .toFile('artifacts/images-contact-sheet.jpg');
const browser = await chromium.launch();
for (const [label, width, height] of [
  ['desktop', 1440, 1000],
  ['tablet', 768, 1024],
  ['small-mobile', 360, 800],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  await page.goto(process.env.AUDIT_URL || 'http://localhost:3101');
  if (!(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)))
    throw new Error(`Débordement horizontal : ${label}`);
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `artifacts/home-${label}.png`, fullPage: true });
  await page.close();
}
await browser.close();
