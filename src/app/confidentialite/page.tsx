import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui';
import { company, isPreview } from '@/config/company';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Politique de confidentialité',
    'Informations sur le traitement des demandes de devis, la mesure d’audience et vos droits.',
    '/confidentialite',
  );
export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ label: 'Confidentialité', href: '/confidentialite' }]} />
      <div className="page-intro">
        <h1>Votre confidentialité.</h1>
        {isPreview() && (
          <p className="notice">
            Politique préparatoire. Responsable et organisation de la conservation à confirmer avant
            ouverture du formulaire.
          </p>
        )}
      </div>
      <article className="prose" style={{ maxWidth: 800, paddingBottom: 80 }}>
        <h2>Responsable du traitement</h2>
        <p>
          {company.legalName || 'Identité du responsable à compléter'}. Pour exercer vos droits :{' '}
          {company.email || 'adresse email à compléter'}. Voir les{' '}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
        <h2>Demande de devis</h2>
        <p>
          Nom, coordonnées, commune, code postal et description du besoin servent à étudier votre
          demande et à y répondre. Le traitement repose sur les démarches précontractuelles
          effectuées à votre demande. La case du formulaire confirme votre information ; elle
          n’autorise pas de prospection commerciale.
        </p>
        <p>
          Ne transmettez pas de données sensibles dans le message. Les informations obligatoires
          sont signalées. Aucune demande ne peut être envoyée tant que le formulaire n’est pas
          configuré.
        </p>
        <h2>Destinataires et sous-traitants</h2>
        <p>
          Les demandes sont destinées aux personnes habilitées de l’entreprise. L’hébergement prévu
          est Vercel, la transmission d’email utilise Resend et la limitation des abus utilise un
          service Redis partagé. Vérifier les contrats de sous-traitance, lieux de traitement,
          garanties de transfert hors Espace économique européen et durées techniques avant
          activation.
        </p>
        <h2>Conservation</h2>
        <p>
          La politique prévue est la suppression des demandes sans suite au plus tard douze mois
          après le dernier échange, sauf justification documentée. Les données devenues
          contractuelles suivent les durées légales applicables. Cette suppression doit être
          organisée dans la messagerie et les éventuels outils de gestion ; le site ne la réalise
          pas automatiquement.
        </p>
        <h2>Protection contre les abus</h2>
        <p>
          Un identifiant calculé par hachage de l’adresse IP sert à limiter les demandes. Il expire
          après quinze minutes dans le système de limitation. Le site ne journalise pas le contenu
          des formulaires dans ses logs applicatifs. Les journaux techniques des prestataires
          doivent être paramétrés séparément.
        </p>
        <h2>Mesure d’audience et de performance</h2>
        <p>
          Vercel Analytics et Speed Insights restent désactivés par défaut. Lorsqu’ils sont activés
          par l’éditeur, ils ne se chargent qu’après votre choix « Accepter ». Vous pouvez refuser
          ou retirer ce choix via le bouton de préférences. Les événements applicatifs ne
          contiennent ni nom, ni email, ni téléphone, ni contenu de message. Aucun script Google Ads
          ou Tag Manager n’est installé.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander accès, rectification, effacement, limitation et, lorsque les
          conditions s’appliquent, portabilité ou opposition. Contactez le responsable indiqué
          ci-dessus. Vous pouvez également saisir la{' '}
          <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
        </p>
      </article>
    </div>
  );
}
