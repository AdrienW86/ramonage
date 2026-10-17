import { it, expect, vi, afterEach } from 'vitest';
import { track } from '@vercel/analytics/react';
import { trackEvent } from '@/components/analytics';
vi.mock('@vercel/analytics/react', () => ({ track: vi.fn(), Analytics: () => null }));
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});
it('ne transmet aucune mesure sans choix accepté', () => {
  vi.stubEnv('NEXT_PUBLIC_ANALYTICS_ENABLED', 'true');
  vi.stubGlobal('localStorage', { getItem: () => 'declined' });
  trackEvent('article_consulte', 'attestation-ramonage');
  expect(track).not.toHaveBeenCalled();
});
it('ne transmet aucune mesure si l’éditeur désactive Analytics', () => {
  vi.stubEnv('NEXT_PUBLIC_ANALYTICS_ENABLED', 'false');
  vi.stubGlobal('localStorage', { getItem: () => 'accepted' });
  trackEvent('article_consulte', 'attestation-ramonage');
  expect(track).not.toHaveBeenCalled();
});
it('ne transmet que le slug connu comme propriété', () => {
  vi.stubEnv('NEXT_PUBLIC_ANALYTICS_ENABLED', 'true');
  vi.stubGlobal('localStorage', { getItem: () => 'accepted' });
  trackEvent('article_consulte', 'attestation-ramonage');
  expect(track).toHaveBeenLastCalledWith('article_consulte', {
    article_slug: 'attestation-ramonage',
  });
  trackEvent('clic_devis', 'nom@example.org');
  expect(track).toHaveBeenLastCalledWith('clic_devis', undefined);
});
it('une erreur de mesure ne casse pas la confirmation commerciale', () => {
  vi.stubEnv('NEXT_PUBLIC_ANALYTICS_ENABLED', 'true');
  vi.stubGlobal('localStorage', {
    getItem: () => {
      throw new Error('storage disabled');
    },
  });
  expect(() => trackEvent('devis_envoye')).not.toThrow();
});
