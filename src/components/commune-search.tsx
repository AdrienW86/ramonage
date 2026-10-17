'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, MapPin, Search } from 'lucide-react';
type Result = {
  name: string;
  slug: string;
  postalCodes: string[];
  department: string;
  coverageConfirmed: boolean;
  published: boolean;
};
export function CommuneSearch({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (query.trim().length < 2) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/communes?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error();
        setResults(await res.json());
        setActive(-1);
      } catch {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 180);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);
  const show = focused && query.trim().length >= 2;
  return (
    <div
      ref={box}
      className={`commune-search ${compact ? 'compact' : ''}`}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      <label htmlFor={id}>
        {compact ? 'Rechercher une commune' : 'Votre commune est-elle desservie ?'}
      </label>
      <div className="search-input">
        <MapPin size={21} />
        <input
          id={id}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={show}
          aria-controls={`${id}-results`}
          aria-activedescendant={active >= 0 ? `${id}-${active}` : undefined}
          autoComplete="off"
          value={query}
          onFocus={() => setFocused(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setResults([]);
            setActive(-1);
            setFocused(true);
          }}
          placeholder="Votre commune ou code postal"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setFocused(false);
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setFocused(true);
              setActive((i) => Math.min(results.length - 1, i + 1));
            }
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              setActive((i) => Math.max(0, i - 1));
            }
            if (e.key === 'Enter' && active >= 0) {
              e.preventDefault();
              box.current?.querySelector<HTMLAnchorElement>(`[data-result="${active}"]`)?.click();
            }
          }}
        />
        <Search size={20} />
      </div>
      <p className="search-hint">Aude (11) & Pyrénées-Orientales (66) · Desserte à confirmer</p>
      {show && (
        <div
          className="search-results"
          id={`${id}-results`}
          role="listbox"
          aria-label="Communes trouvées"
        >
          <span role="status">
            {loading
              ? 'Recherche…'
              : error
                ? 'Recherche indisponible. Utilisez la page des zones.'
                : results.length === 0
                  ? 'Aucune commune trouvée. Vérifiez le nom ou le code postal.'
                  : `${results.length} résultat(s)`}
          </span>
          {results.map((c, i) => (
            <div
              key={c.slug}
              id={`${id}-${i}`}
              role="option"
              aria-selected={active === i}
              className={active === i ? 'active' : ''}
            >
              <Link
                data-result={i}
                href={
                  c.published
                    ? `/ramonage/${c.slug}`
                    : `/devis?commune=${encodeURIComponent(c.name)}&codePostal=${c.postalCodes[0] || ''}`
                }
              >
                <span>
                  <strong>{c.name}</strong>
                  <small>
                    {c.postalCodes.join(', ')} ·{' '}
                    {c.coverageConfirmed ? 'Desserte confirmée' : 'Desserte à confirmer'}
                  </small>
                </span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
