import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="error-page">
      <p className="eyebrow">404 / PAGE INTROUVABLE</p>
      <h1>
        Reprenons
        <br />
        <em>le bon chemin.</em>
      </h1>
      <p>Cette page n’existe pas ou n’est pas encore publiée.</p>
      <Link className="button" href="/">
        Revenir à l’accueil ↗
      </Link>
    </section>
  );
}
