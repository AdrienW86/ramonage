import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync } from 'node:fs';
const slugs: string[] = JSON.parse(
  readFileSync(new URL('../../src/data/article-slugs.json', import.meta.url), 'utf8'),
);
test('catalogue de 35 guides et 7 catégories : contenu HTML, sources et liens', async ({
  page,
  request,
}) => {
  const titles = new Set<string>();
  const links = new Set<string>();
  for (const slug of slugs) {
    const res = await page.goto(`/conseils/${slug}`);
    expect(res?.status(), slug).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute(
      'href',
      `http://localhost:3000/conseils/${slug}`,
    );
    await expect(page.locator('.article-meta')).toContainText('non publiée');
    await expect(page.locator('#sources-article a')).not.toHaveCount(0);
    await expect(page.locator('#questions-article details')).toHaveCount(2);
    expect(await page.locator('article').innerText()).not.toContain('undefined');
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute('href')!)))
      links.add(href);
    const html = await (await request.get(`/conseils/${slug}`)).text();
    expect(html).toContain('Sources et vérification');
    for (const raw of await page.locator('script[type="application/ld+json"]').allTextContents()) {
      const data = JSON.parse(raw);
      expect(data['@type']).not.toBe('Article');
    }
  }
  for (const href of links) expect((await request.get(href)).status(), href).toBeLessThan(400);
});
test('recherche articles, catégories et état vide', async ({ page }) => {
  await page.goto('/conseils');
  await expect(page.locator('#catalogue .guide-card')).toHaveCount(35);
  await page.getByLabel('Votre sujet ou votre question').fill('attestation');
  await page.getByRole('button', { name: 'Rechercher', exact: true }).click();
  await expect(page).toHaveURL(/q=attestation/);
  await expect(page.locator('#catalogue')).toContainText('À quoi sert l’attestation');
  await page.goto('/conseils/categorie/poeles');
  await expect(page.locator('h1')).toContainText('Poêles');
  await page.goto('/conseils?q=zzintrouvable');
  await expect(page.getByText('Aucun article trouvé.', { exact: false })).toBeVisible();
  expect(await page.locator('meta[name=robots]').getAttribute('content')).toContain('noindex');
});
test('FAQ : 56 questions, recherche et lien vers le guide', async ({ page }) => {
  await page.goto('/questions-frequentes');
  await expect(page.locator('.global-faq details')).toHaveCount(56);
  await page.locator('.global-faq summary').first().click();
  await expect(
    page
      .locator('.global-faq details')
      .first()
      .getByText('Approfondir dans le guide', { exact: false }),
  ).toBeVisible();
  await page.getByLabel('Rechercher dans les réponses').fill('année civile');
  await page.getByRole('button', { name: 'Rechercher', exact: true }).click();
  await expect(page.locator('.global-faq details')).toHaveCount(1);
  await page.goto('/conseils/categorie/inconnue');
  await expect(page.locator('h1')).toContainText('Reprenons');
});
test('guide → devis : référence autorisée, aucune donnée personnelle de tracking', async ({
  page,
}) => {
  const analytics: string[] = [];
  page.on('request', (r) => {
    if (r.url().includes('/_vercel/')) analytics.push(r.url());
  });
  await page.goto('/conseils/attestation-ramonage');
  await page
    .locator('.aside-card')
    .getByRole('link', { name: 'Préparer ma demande', exact: false })
    .click();
  await expect(page).toHaveURL(/devis\?article=attestation-ramonage/);
  await expect(page.getByRole('button', { name: 'Envoyer ma demande' })).toBeDisabled();
  expect(analytics).toEqual([]);
});
test('nouveaux écrans : accessibilité et responsive', async ({ page }, info) => {
  for (const route of [
    '/conseils',
    '/conseils/attestation-ramonage',
    '/conseils/reglementation-aude',
    '/questions-frequentes',
    '/conseils/categorie/poeles',
  ]) {
    await page.goto(route);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      route,
    ).toBe(true);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      route,
    ).toEqual([]);
  }
  await page.goto('/conseils');
  await page.screenshot({ path: `artifacts/ressources-${info.project.name}.png`, fullPage: true });
});
