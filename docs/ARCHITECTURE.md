# Architecture

Next.js App Router, TypeScript strict, React Server Components par défaut. Les seuls composants interactifs sont le menu, la recherche, le formulaire, le consentement analytics et les révélations Motion. Le CSS Tailwind 4 est complété par une feuille de style éditoriale ; les polices système évitent les téléchargements tiers et les décalages de chargement.

## Sources de vérité

- `src/config/company.ts` : identité, coordonnées, options commerciales, prestations confirmées et validation Zod. `.env.example` documente les variables.
- `src/content/services.ts` : huit prestations détaillées ; deux synonymes sont redirigés en 308 vers leur page canonique.
- `src/data/communes.json` : communes officielles identifiées par code INSEE, codes postaux, coordonnées et états de desserte/publication.
- `src/content/local.ts` : contenus locaux écrits et relus séparément du référentiel. Les deux contenus initiaux sont des brouillons.
- `src/content/guides.ts` : quatre guides et liens vers sources officielles.

## Géographie et édition

L’import API Géo utilise l’INSEE comme clé et préserve les statuts des communes existantes. Les homonymes prennent un suffixe INSEE ; les slugs réservés des départements sont protégés. Les codes retirés sont signalés dans `geo-source.json` : un changement administratif demande une revue et, si nécessaire, une redirection manuelle. L’import n’affirme jamais une desserte.

La recherche interroge une route serveur : le référentiel complet n’est pas chargé dans le JavaScript navigateur. Le répertoire est paginé côté serveur. La carte de repérage est générée à partir des coordonnées officielles des centres, sans annoncer de zone de couverture.

Une page communale est publique uniquement si les quatre conditions sont réunies : statut `publie`, `coverageConfirmed: true`, `indexable: true`, contenu local avec `approved: true`. En préparation, seuls les contenus rédigés sont consultables et restent `noindex`. Toute autre commune renvoie une vraie 404 et conduit, depuis le répertoire, au formulaire prérempli.

## Formulaire

React Hook Form + schéma Zod commun au navigateur et au serveur. Le serveur contrôle origine, type et taille réelle du corps, champs, honeypot, temps écoulé, cohérence commune/code postal et prestation confirmée. Redis REST fournit une limitation atomique partagée (5 demandes/15 minutes par identifiant IP haché). En production, absence ou panne du limiteur bloque l’envoi ; le fallback mémoire est réservé au développement. Sur un hébergement autre que Vercel, configurer un proxy de confiance qui remplace `x-forwarded-for`.

Resend est instancié uniquement côté serveur ; les entrées HTML sont échappées et les réponses ne divulguent pas les erreurs fournisseur. Une clé d’idempotence UUID empêche les doubles envois lors de tentatives répétées. Un succès indique l’acceptation par l’API email, pas une preuve de livraison en boîte de réception. Le test de succès utilise un fournisseur simulé ; aucun email réel n’est envoyé par les tests.

## SEO et publication

Métadonnées centralisées, canonical, Open Graph, Twitter, breadcrumbs JSON-LD. LocalBusiness n’existe qu’avec identité validée. Service n’est émis que pour une prestation confirmée. Aucun avis ni établissement fictif. Sitemap vide et robots bloquants en préparation ; après validation il contient uniquement les routes canoniques admises. Les filtres et la demande de devis restent non indexables.

`npm run build` vérifie la configuration avant Next.js : configuration incomplète → prévisualisation non indexable ; publication approuvée mais incomplète → échec. `npm run check:config` applique le contrôle strict. Vercel utilise `npm run build`.

## Confidentialité

Analytics et Speed Insights sont intégrés au layout via un composant de consentement, désactivés par défaut et chargés après acceptation seulement. Quatre événements autorisés, aucune valeur de formulaire. Les URL des mesures sont débarrassées de leurs query strings, notamment des communes préremplies. Aucun script publicitaire n’est installé. Search Console attend son jeton. Google Ads/GTM sont volontairement documentés comme évolution ; le consentement marketing doit précéder leur ajout.

La durée de conservation dans la messagerie n’est pas automatisée par ce site. L’entreprise doit mettre en place sa procédure, ses contrats de sous-traitance et vérifier les informations légales avant ouverture.
