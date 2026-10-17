import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';
import { launch } from 'chrome-launcher';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('artifacts', { recursive: true });
const name = (process.env.AUDIT_NAME || 'lighthouse-mobile').replace(/[^a-z0-9-]/gi, '');
const chrome = await launch({
  chromePath: chromium.executablePath(),
  chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
});
try {
  const result = await lighthouse(process.env.AUDIT_URL || 'http://localhost:3100', {
    port: chrome.port,
    output: ['html', 'json'],
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });
  await writeFile(`artifacts/${name}.html`, result.report[0]);
  await writeFile(`artifacts/${name}.json`, result.report[1]);
  console.log(
    JSON.stringify(
      {
        scores: Object.fromEntries(
          Object.entries(result.lhr.categories).map(([key, v]) => [key, Math.round(v.score * 100)]),
        ),
        metrics: Object.fromEntries(
          [
            'first-contentful-paint',
            'largest-contentful-paint',
            'cumulative-layout-shift',
            'total-blocking-time',
            'speed-index',
          ].map((key) => [key, result.lhr.audits[key].displayValue]),
        ),
        failed: Object.entries(result.lhr.audits)
          .filter(
            ([, v]) => v.score !== null && v.score < 0.9 && v.scoreDisplayMode !== 'informative',
          )
          .map(([key, v]) => ({ key, title: v.title, value: v.displayValue })),
      },
      null,
      2,
    ),
  );
} finally {
  await chrome.kill();
}
