'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="error-page">
      <h1>
        Une interruption
        <br />
        <em>inattendue.</em>
      </h1>
      <p>La page n’a pas pu être chargée. Veuillez réessayer.</p>
      <button className="button" onClick={reset}>
        Réessayer
      </button>
    </section>
  );
}
