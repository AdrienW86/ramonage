'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, LoaderCircle, CheckCircle2 } from 'lucide-react';
import { contactSchema, type ContactInput } from '@/lib/contact-schema';

export function ContactForm({ enabled }: { enabled: boolean }) {
  const [feedback, setFeedback] = useState('');
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', subject: 'question', commune: '', message: '', consent: false, website: '', startedAt: 0, requestId: '00000000-0000-4000-8000-000000000000' },
  });
  useEffect(() => {
    setValue('startedAt', Date.now());
    setValue('requestId', crypto.randomUUID());
  }, [setValue]);

  async function submit(values: ContactInput) {
    setFeedback('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const result = await response.json() as { ok: boolean; message?: string };
      if (!response.ok || !result.ok) {
        setFeedback(result.message || 'Envoi impossible. Veuillez réessayer.');
        return;
      }
      setSent(true);
      setFeedback('Votre message a été transmis au service email. Merci pour votre demande.');
    } catch {
      setFeedback('La connexion a été interrompue. Aucun envoi n’est confirmé.');
    }
  }

  if (!enabled) return <div className="notice" role="status">Le formulaire de contact sera disponible après validation des informations professionnelles et configuration de l’envoi sécurisé. Vous pouvez nous appeler directement.</div>;

  return <form className="quote-form" aria-label="Formulaire de contact" onSubmit={handleSubmit(submit)} noValidate>
    {sent ? <div role="status" className="form-feedback" tabIndex={-1}><CheckCircle2 size={24} aria-hidden="true" /> {feedback}</div> : <>
      <p className="form-meta">Un message, une question, un projet ? Les champs marqués * sont obligatoires.</p>
      <div className="form-grid">
        <div className="field"><label htmlFor="contact-name">Nom et prénom *</label><input id="contact-name" autoComplete="name" {...register('name')} aria-invalid={!!errors.name}/>{errors.name && <p className="field-error">{errors.name.message}</p>}</div>
        <div className="field"><label htmlFor="contact-email">Adresse email *</label><input id="contact-email" type="email" autoComplete="email" {...register('email')} aria-invalid={!!errors.email}/>{errors.email && <p className="field-error">{errors.email.message}</p>}</div>
        <div className="field"><label htmlFor="contact-phone">Téléphone (facultatif)</label><input id="contact-phone" type="tel" autoComplete="tel" {...register('phone')} aria-invalid={!!errors.phone}/>{errors.phone && <p className="field-error">{errors.phone.message}</p>}</div>
        <div className="field"><label htmlFor="contact-commune">Commune (facultatif)</label><input id="contact-commune" autoComplete="address-level2" {...register('commune')} /></div>
        <div className="field full"><label htmlFor="contact-subject">Votre demande *</label><select id="contact-subject" {...register('subject')} aria-invalid={!!errors.subject}>
          <option value="question">Question générale</option><option value="ramonage">Ramonage</option><option value="debistrage">Débistrage</option><option value="entretien">Entretien d’un appareil</option><option value="autre">Autre demande</option>
        </select>{errors.subject && <p className="field-error">{errors.subject.message}</p>}</div>
        <div className="field full"><label htmlFor="contact-message">Votre message *</label><textarea id="contact-message" rows={6} maxLength={3000} placeholder="Décrivez votre installation, votre question ou votre besoin…" {...register('message')} aria-invalid={!!errors.message}/>{errors.message && <p className="field-error">{errors.message.message}</p>}</div>
      </div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Laisser vide</label><input tabIndex={-1} id="contact-website" autoComplete="off" {...register('website')} /></div>
      <label className="consent-field"><input type="checkbox" {...register('consent')} aria-invalid={!!errors.consent}/><span>J’accepte l’utilisation de mes informations uniquement pour répondre à ma demande, selon la <Link href="/confidentialite">politique de confidentialité</Link>. *</span></label>
      {errors.consent && <p className="field-error">{errors.consent.message}</p>}
      <button type="submit" className="button" disabled={isSubmitting}>{isSubmitting ? 'Envoi en cours…' : 'Envoyer mon message'} {isSubmitting ? <LoaderCircle className="animate-spin" size={18}/> : <ArrowUpRight size={18}/>}</button>
      {feedback && <div className="form-feedback" role="alert" tabIndex={-1}>{feedback}</div>}
    </>}
  </form>;
}
