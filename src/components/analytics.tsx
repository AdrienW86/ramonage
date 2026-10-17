'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { Analytics, track } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
const key = 'ramonage-mesure-v1';
const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener('mesure-choice', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('mesure-choice', callback);
  };
};
const snapshot = () => localStorage.getItem(key) || 'pending';
export function trackEvent(name: 'clic_telephone' | 'clic_devis' | 'devis_envoye' | 'clic_email') {
  if (
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' &&
    localStorage.getItem(key) === 'accepted'
  )
    track(name);
}
export function AnalyticsConsent() {
  const choice = useSyncExternalStore(subscribe, snapshot, () => 'server');
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const node = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
      const name = node?.dataset.track;
      if (name && ['clic_telephone', 'clic_devis', 'clic_email'].includes(name))
        trackEvent(name as 'clic_devis');
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, []);
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== 'true') return null;
  function decide(value: string) {
    localStorage.setItem(key, value);
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
            localStorage.removeItem(key);
            window.dispatchEvent(new Event('mesure-choice'));
          }}
        >
          Préférences de mesure
        </button>
      ) : null}
    </>
  );
}
