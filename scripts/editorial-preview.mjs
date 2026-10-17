import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch();
const report = [];
try {
  for (const width of [320, 360, 768, 1440]) {
    const page = await browser.newPage({
      viewport: { width, height: 1000 },
      reducedMotion: 'reduce',
    });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    for (const path of [
      '/',
      '/conseils',
      '/conseils/attestation-ramonage',
      '/questions-frequentes',
    ]) {
      await page.goto(`http://localhost:3101${path}`);
      const fits = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
      report.push({ width, path, fits, errors: [...errors] });
      if (!fits || errors.length) throw new Error(JSON.stringify(report.at(-1)));
      if ((width === 360 || width === 1440) && path !== '/')
        await page.screenshot({ path: `artifacts/phase2-${width}-${path.split('/').at(-1)}.png` });
    }
    await page.close();
  }
  await writeFile('artifacts/editorial-responsive.json', JSON.stringify(report, null, 2));
  console.log('16 contrôles responsive sans débordement ni erreur JavaScript.');
} finally {
  await browser.close();
}
