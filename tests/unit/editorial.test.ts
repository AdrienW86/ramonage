import { describe, it, expect } from 'vitest';
import { guides, categories } from '@/content/guides';
import { sources } from '@/content/sources';
import { faqEntries } from '@/content/faq';
import { company } from '@/config/company';
import {
  editorialIssues,
  accessibleGuide,
  isGuidePublished,
  isGuideValidated,
  articleSchema,
  searchGuides,
} from '@/lib/editorial';
import { safeArticleSlug, sourceFromPath } from '@/lib/article-attribution';
import { quoteSchema } from '@/lib/quote-schema';
import { publicRoutes } from '@/lib/public-routes';
import robots from '@/app/robots';
describe('Catalogue éditorial', () => {
  it('conserve les 4 URL historiques dans un catalogue unique de 35 sujets', () => {
    expect(guides).toHaveLength(35);
    expect(new Set(guides.map((g) => g.slug)).size).toBe(35);
    for (const slug of [
      'obligations-et-frequence',
      'comprendre-le-bistre',
      'securite-et-monoxyde-de-carbone',
      'preparer-son-ramonage',
    ])
      expect(guides.some((g) => g.slug === slug)).toBe(true);
    expect(editorialIssues()).toEqual([]);
  });
  it('distingue vérification documentaire et publication', () => {
    expect(guides.filter(isGuideValidated)).toHaveLength(33);
    expect(guides.filter(isGuidePublished)).toHaveLength(0);
    expect(guides.every((g) => g.author === null && g.datePublished === null)).toBe(true);
    expect(guides.filter((g) => !isGuideValidated(g))).toHaveLength(2);
  });
  it('masque les deux guides locaux incomplets même en consultation locale', () => {
    expect(accessibleGuide('reglementation-aude')).toBeUndefined();
    expect(accessibleGuide('reglementation-pyrenees-orientales')).toBeUndefined();
    expect(accessibleGuide('formation-bistre')?.slug).toBe('formation-bistre');
  });
  it('refuse une source de section ou FAQ non consultée', () => {
    expect(
      isGuideValidated({
        ...guides[0],
        sections: [{ title: 'Section', text: 'Texte', sourceKeys: ['bistre'] }],
      }),
    ).toBe(false);
    expect(
      isGuideValidated({
        ...guides[0],
        faq: [{ q: 'Question', a: 'Réponse', sourceKeys: ['po'] }],
      }),
    ).toBe(false);
  });
  it('dispose de sections, exemples, FAQ, intentions et liens utiles', () => {
    for (const g of guides) {
      expect(g.sections.length).toBeGreaterThanOrEqual(3);
      expect(g.sections.every((s) => s.text.length > 100)).toBe(true);
      expect(g.faq.length).toBeGreaterThanOrEqual(2);
      expect(g.relatedGuides.length).toBeGreaterThanOrEqual(2);
      expect(g.intent.length).toBeGreaterThan(20);
      expect(g.example.text.length).toBeGreaterThan(70);
      expect(categories.some((c) => c.slug === g.category)).toBe(true);
    }
  });
  it('fournit 56 questions uniques avec sources et guides existants', () => {
    expect(categories).toHaveLength(7);
    expect(faqEntries).toHaveLength(56);
    expect(new Set(faqEntries.map((f) => f.q)).size).toBe(56);
    expect(new Set(faqEntries.map((f) => f.id)).size).toBe(56);
    for (const f of faqEntries) {
      expect(guides.some((g) => g.slug === f.guide)).toBe(true);
      expect(f.sourceKeys.every((k) => sources[k]?.access === 'full')).toBe(true);
    }
  });
  it('recherche sans accents et filtre par catégorie', () => {
    expect(searchGuides('attestation').length).toBeGreaterThan(0);
    expect(searchGuides('granuLes', 'poeles').every((g) => g.category === 'poeles')).toBe(true);
    expect(searchGuides('xyz_introuvable')).toEqual([]);
  });
});
describe('Données structurées et publication', () => {
  it('refuse le JSON-LD Article pour un brouillon ou une identité absente', () => {
    expect(articleSchema(guides[0])).toBeNull();
    expect(isGuidePublished({ ...guides[0], status: 'publie' })).toBe(false);
  });
  it('n’autorise que les guides avec auteur, date et sources complètes', () => {
    const original = structuredClone(company);
    const g = guides[0];
    const snapshot = structuredClone(g);
    Object.assign(company, {
      name: 'Éditeur de test validé',
      legalName: 'Éditeur validé',
      legalStatus: 'EI',
      siret: '12345678901237',
      url: 'https://ramonage-valide.fr',
      phone: '0612345678',
      email: 'contact@ramonage-valide.fr',
      address: { street: 'Adresse validée', postalCode: '66000', city: 'Perpignan' },
      hosting: {
        name: 'Hébergeur validé',
        address: 'Adresse hébergeur validée',
        url: 'https://hebergeur.fr',
      },
      privacyRetention: 'Durée validée pour la simulation',
      publishingDirector: 'Direction validée',
      mediator: { name: 'Médiateur validé', url: 'https://mediateur.fr' },
      publishingApproved: true,
      services: ['ramonage-conduits'],
    });
    company.name = 'Éditeur validé';
    try {
      Object.assign(g, {
        status: 'publie',
        author: { name: 'Auteur uniquement de test', role: 'Validation simulée', verified: true },
        datePublished: '2026-10-17',
      });
      expect(isGuidePublished(g)).toBe(true);
      expect(articleSchema(g)?.headline).toBe(g.title);
      expect(articleSchema(g)?.datePublished).toBe('2026-10-17');
      const routes = publicRoutes();
      expect(routes).toContain(`/conseils/${g.slug}`);
      expect(routes).not.toContain('/conseils/formation-bistre');
      expect(routes).toContain('/questions-frequentes');
      const rules = robots().rules;
      expect(JSON.stringify(rules)).toContain('OAI-SearchBot');
      expect(JSON.stringify(rules)).not.toContain('GPTBot');
      Object.assign(g, { sourceKeys: ['bistre'] });
      expect(isGuidePublished(g)).toBe(false);
    } finally {
      Object.assign(company, original);
      Object.assign(g, snapshot);
    }
  });
});
describe('Attribution sans données personnelles', () => {
  it('n’accepte que les slugs du catalogue', () => {
    expect(safeArticleSlug('attestation-ramonage')).toBe('attestation-ramonage');
    expect(safeArticleSlug('nom@example.org')).toBeUndefined();
    expect(safeArticleSlug('<script>')).toBeUndefined();
    expect(sourceFromPath('/conseils/attestation-ramonage')).toBe('attestation-ramonage');
    expect(sourceFromPath('/devis?email=test')).toBeUndefined();
  });
  it('refuse les références arbitraires dans le formulaire', () => {
    expect(quoteSchema.shape.sourceArticle.safeParse('attestation-ramonage').success).toBe(true);
    expect(quoteSchema.shape.sourceArticle.safeParse('nom@example.org').success).toBe(false);
  });
});
