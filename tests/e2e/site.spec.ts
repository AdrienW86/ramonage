import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes = [
  '/',
  '/prestations',
  '/zones-intervention',
  '/a-propos',
  '/conseils',
  '/contact',
  '/devis',
  '/ramonage/aude',
  '/ramonage/pyrenees-orientales',
  '/prestations/ramonage-cheminee',
  '/prestations/ramonage-poele-bois',
  '/prestations/ramonage-poele-granules',
  '/prestations/ramonage-insert',
  '/prestations/ramonage-chaudiere',
  '/prestations/ramonage-conduits',
  '/prestations/debistrage',
  '/prestations/inspection-conduits',
  '/conseils/obligations-et-frequence',
  '/conseils/comprendre-le-bistre',
  '/conseils/securite-et-monoxyde-de-carbone',
  '/conseils/preparer-son-ramonage',
];
test('routes, titres, canonicals et maillage interne', async ({ page, request }) => {
  const titles = new Set<string>();
  const links = new Set<string>();
  for (const route of routes) {
    const res = await page.goto(route);
    expect(res?.status(), route).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.locator('body').innerText()).not.toMatch(
      /à compléter|en attente|provisoire|non publiée|non attribué|en préparation|brouillon|à définir|publication à approuver|desserte à confirmer/i,
    );
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute(
      'href',
      `http://localhost:3000${route === '/' ? '' : route}`,
    );
    await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', /noindex/);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute('href')!)))
      links.add(href);
    for (const raw of await page.locator('script[type="application/ld+json"]').allTextContents())
      expect(() => JSON.parse(raw)).not.toThrow();
  }
  for (const href of links) {
    const response = await request.get(href);
    expect(response.status(), href).toBeLessThan(400);
  }
});
test('recherche commune au clavier et répertoire sans offre non validée', async ({ page }) => {
  await page.goto('/');
  const input = page.getByRole('combobox');
  await input.fill('66000');
  await expect(page.getByRole('option')).toContainText('Perpignan');
  await input.press('ArrowDown');
  await input.press('Enter');
  await expect(page).toHaveURL(/zones-intervention\?q=Perpignan/);
  await expect(page.locator('.commune-list')).toContainText('Perpignan');
  await expect(page.locator('form[aria-label="Demande de devis"]')).toHaveCount(0);
});
test('répertoire filtrable et pages non publiées', async ({ page, request }) => {
  await page.goto('/zones-intervention?departement=11&q=narbonne');
  await expect(page.locator('.commune-list')).toContainText('Narbonne');
  await expect(page.locator('.commune-list>a')).toHaveCount(1);
  for (const route of [
    '/ramonage/carcassonne',
    '/ramonage/perpignan',
    '/ramonage/narbonne',
    '/mentions-legales',
    '/confidentialite',
  ])
    expect((await request.get(route)).status(), route).toBe(404);
  expect((await request.get('/route-inexistante')).status()).toBe(404);
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Disallow: /');
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).not.toContain('<loc>');
});
test('responsive, images et accessibilité', async ({ page }, info) => {
  for (const route of ['/', '/devis', '/prestations/ramonage-cheminee', '/zones-intervention']) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      route,
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      route,
    ).toEqual([]);
  }
  await page.goto('/');
  await expect(page.locator('.hero-image')).toBeVisible();
  expect(
    await page
      .locator('.hero-image')
      .evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
  ).toBe(true);
  await page.screenshot({ path: `artifacts/accueil-${info.project.name}.png`, fullPage: true });
});
test('navigation mobile et FAQ', async ({ page }, info) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  if (info.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
  }
  const question = page.locator('summary').filter({ hasText: 'Quel est le prix d’un ramonage ?' });
  await question.click();
  await expect(page.getByText('Un devis doit préciser le prix', { exact: false })).toBeVisible();
});
