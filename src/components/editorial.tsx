import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { Photo } from './ui';
import { categories, type Guide } from '@/content/guides';
import { categoryBySlug } from '@/lib/editorial';
export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'Europe/Paris' }).format(
    new Date(`${value}T12:00:00Z`),
  );
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/conseils/${guide.slug}`} className="guide-card">
      <Photo name={guide.image} alt={guide.imageAlt} sizes="(max-width: 700px) 90vw, 30vw" />
      <p className="eyebrow">{categoryBySlug.get(guide.category)?.name}</p>
      <h3>
        {guide.title}
        <ArrowUpRight size={19} />
      </h3>
      <p className="resource-description">{guide.intro}</p>
    </Link>
  );
}
export function ResourceSearch({
  query = '',
  category = '',
  action = '/conseils',
}: {
  query?: string;
  category?: string;
  action?: string;
}) {
  return (
    <form
      action={action}
      className="directory-filter resource-search"
      role="search"
      aria-label={action === '/conseils' ? 'Rechercher un article' : 'Rechercher une question'}
    >
      <div>
        <label htmlFor="resource-query">
          {action === '/conseils'
            ? 'Votre sujet ou votre question'
            : 'Rechercher dans les réponses'}
        </label>
        <div className="resource-search-input">
          <Search size={19} aria-hidden="true" />
          <input
            id="resource-query"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Attestation, poêle, fumée…"
            maxLength={100}
          />
        </div>
      </div>
      <div>
        <label htmlFor="resource-category">Thématique</label>
        <select id="resource-category" name="categorie" defaultValue={category}>
          <option value="">Tous les sujets</option>
          {categories.map((c) => (
            <option value={c.slug} key={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="button">
        Rechercher <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
export function CategoryNav({ selected }: { selected?: string }) {
  return (
    <nav className="resource-categories" aria-label="Catégories des ressources">
      <Link href="/conseils" aria-current={!selected ? 'page' : undefined}>
        Tous les guides
      </Link>
      {categories.map((c) => (
        <Link
          href={`/conseils/categorie/${c.slug}`}
          key={c.slug}
          aria-current={selected === c.slug ? 'page' : undefined}
        >
          {c.name}
        </Link>
      ))}
    </nav>
  );
}
