'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, LoaderCircle } from 'lucide-react';
import { quoteSchema, type QuoteInput } from '@/lib/quote-schema';
import { trackEvent } from './analytics';
export function QuoteForm({
  commune = '',
  postalCode = '',
  service = '',
  sourceArticle = '',
  enabled,
  options,
}: {
  commune?: string;
  postalCode?: string;
  service?: string;
  sourceArticle?: string;
  enabled: boolean;
  options: { slug: string; title: string }[];
}) {
  const [feedback, setFeedback] = useState('');
  const [success, setSuccess] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      commune,
      postalCode,
      message: '',
      consent: false,
      website: '',
      service,
      sourceArticle,
      startedAt: 0,
      requestId: '00000000-0000-4000-8000-000000000000',
    },
  });
  useEffect(() => {
    setValue('startedAt', Date.now());
    setValue('requestId', crypto.randomUUID());
  }, [setValue]);
  async function submit(values: QuoteInput) {
    setFeedback('');
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) {
        setFeedback(result.message || 'La demande n’a pas été envoyée.');
        return;
      }
      setSuccess(true);
      setFeedback(result.message);
      trackEvent('devis_envoye', sourceArticle);
      if (sourceArticle) trackEvent('devis_depuis_guide', sourceArticle);
    } catch {
      setFeedback('Connexion interrompue. Aucun envoi n’est confirmé. Réessayez.');
    } finally {
      setTimeout(() => feedbackRef.current?.focus(), 0);
    }
  }
  const field = (
    name: 'name' | 'phone' | 'email' | 'commune' | 'postalCode',
    label: string,
    type = 'text',
    autoComplete?: string,
  ) => (
    <div className="field">
      <label htmlFor={`quote-${name}`}>{label} *</label>
      <input
        id={`quote-${name}`}
        type={type}
        autoComplete={autoComplete}
        {...register(name)}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `error-${name}` : undefined}
      />
      {errors[name] && (
        <p className="field-error" id={`error-${name}`}>
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
  return (
    <form
      className="quote-form"
      onSubmit={handleSubmit(submit)}
      noValidate
      aria-label="Demande de devis"
    >
      {!enabled && (
        <p className="notice">
          Formulaire en préparation. Vous pouvez découvrir les champs ; l’envoi est désactivé tant
          que les coordonnées et le service email ne sont pas configurés.
        </p>
      )}
      {success ? (
        <div tabIndex={-1} ref={feedbackRef} role="status" className="form-feedback">
          {feedback}
        </div>
      ) : (
        <>
          <p className="form-meta">Les champs marqués * sont nécessaires à votre demande.</p>
          <div className="form-grid">
            {field('name', 'Nom', 'text', 'name')}
            {field('phone', 'Téléphone', 'tel', 'tel')}
            {field('email', 'Email', 'email', 'email')}
            {field('commune', 'Commune', 'text', 'address-level2')}
            {field('postalCode', 'Code postal', 'text', 'postal-code')}
            <div className="field">
              <label htmlFor="installation">Type d’installation *</label>
              <select
                id="installation"
                {...register('installation')}
                aria-invalid={!!errors.installation}
                aria-describedby={errors.installation ? 'error-installation' : undefined}
              >
                <option value="">Sélectionner</option>
                <option value="cheminee">Cheminée ouverte</option>
                <option value="poele-bois">Poêle à bois</option>
                <option value="poele-granules">Poêle à granulés</option>
                <option value="insert">Insert / foyer fermé</option>
                <option value="chaudiere">Chaudière</option>
                <option value="autre">Autre / à identifier</option>
              </select>
              {errors.installation && (
                <p id="error-installation" className="field-error">
                  {errors.installation.message}
                </p>
              )}
            </div>
            <div className="field full">
              <label htmlFor="service">Prestation souhaitée *</label>
              <select
                id="service"
                {...register('service')}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? 'error-service' : undefined}
              >
                <option value="">Sélectionner</option>
                {options.map((o) => (
                  <option value={o.slug} key={o.slug}>
                    {o.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="error-service" className="field-error">
                  {errors.service.message}
                </p>
              )}
            </div>
            <div className="field full">
              <label htmlFor="message">Votre installation et votre besoin</label>
              <textarea
                id="message"
                maxLength={4000}
                {...register('message')}
                placeholder="Modèle, dernier entretien, accès au conduit, observations…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'error-message' : undefined}
              />
              {errors.message && (
                <p className="field-error" id="error-message">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Laisser vide</label>
            <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
          </div>
          <label className="consent-field">
            <input
              type="checkbox"
              {...register('consent')}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'error-consent' : undefined}
            />
            <span>
              J’accepte que les informations saisies soient utilisées pour traiter ma demande,
              conformément à la <Link href="/confidentialite">politique de confidentialité</Link>. *
            </span>
          </label>
          {errors.consent && (
            <p className="field-error" id="error-consent">
              {errors.consent.message}
            </p>
          )}
          <button type="submit" className="button" disabled={!enabled || isSubmitting}>
            {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" size={18} />
            ) : (
              <ArrowUpRight size={18} />
            )}
          </button>
          <p className="form-meta">
            Votre demande ne vaut ni devis accepté ni réservation. Aucun paiement n’est demandé ici.
          </p>
          {feedback && (
            <div role="alert" tabIndex={-1} ref={feedbackRef} className="form-feedback">
              {feedback}
            </div>
          )}
        </>
      )}
    </form>
  );
}
