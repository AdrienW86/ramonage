'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { Analytics, track } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { usePathname } from 'next/navigation';
import { safeArticleSlug, sourceFromPath } from '@/lib/article-attribution';
const key = 'ramonage-mesure-v1';
const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener('mesure-choice', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('mesure-choice', callback);
  };
};
const snapshot = () => {
  try {
    return localStorage.getItem(key) || 'pending';
  } catch {
    return 'declined';
  }
};
export function trackEvent(
  name:
    | 'clic_telephone'
    | 'clic_devis'
    | 'devis_envoye'
    | 'clic_email'
    | 'article_consulte'
    | 'devis_depuis_guide',
  article?: unknown,
) {
  try {
    if (
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' &&
      localStorage.getItem(key) === 'accepted'
    )
      track(
        name,
        safeArticleSlug(article) ? { article_slug: safeArticleSlug(article)! } : undefined,
      );
  } catch {
    /* Une mesure ne doit jamais interrompre une demande commerciale. */
  }
}
export function AnalyticsConsent() {
  const choice = useSyncExternalStore(subscribe, snapshot, () => 'server');
  const pathname = usePathname();
  useEffect(() => {
    const article = sourceFromPath(pathname);
    if (choice === 'accepted' && article) {
      trackEvent('article_consulte', article);
    }
  }, [pathname, choice]);
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const node = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
      const name = node?.dataset.track;
      if (name && ['clic_telephone', 'clic_devis', 'clic_email'].includes(name)) {
        const article =
          safeArticleSlug(node?.dataset.article) || sourceFromPath(window.location.pathname);
        trackEvent(name as 'clic_devis', article);
      }
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, []);
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== 'true') return null;
  function decide(value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
    window.dispatchEvent(new Event('mesure-choice'));
  }
  return (
    <>
      {choice === 'accepted' && (
        <>
          <Analytics
            beforeSend={(event) => ({
              ...event,
              url: new URL(event.url).origin + new URL(event.url).pathname,
            })}
          />
          <SpeedInsights
            beforeSend={(event) => ({
              ...event,
              url: new URL(event.url).origin + new URL(event.url).pathname,
            })}
          />
        </>
      )}
      {choice === 'pending' ? (
        <aside className="consent" aria-label="Mesure d’audience">
          <p>
            Autoriser la mesure d’audience et de performance, sans données saisies dans les
            formulaires ?
          </p>
          <button onClick={() => decide('declined')}>Refuser</button>
          <button onClick={() => decide('accepted')}>Accepter</button>
        </aside>
      ) : choice !== 'server' ? (
        <button
          className="privacy-settings"
          onClick={() => {
            try {
              localStorage.removeItem(key);
            } catch {
              return;
            }
            window.dispatchEvent(new Event('mesure-choice'));
          }}
        >
          Préférences de mesure
        </button>
      ) : null}
    </>
  );
}
