# Site premium de ramonage — Aude et Pyrénées-Orientales

Site Next.js complet, local, en préparation commerciale. Identité inconnue, prestations et desserte non confirmées : **aucune publication distante et aucune page indexable dans l’état livré**. L’envoi de devis attend la configuration réelle de l’entreprise et des services externes.

## Démarrer

Node.js 22.13 ou LTS compatible plus récente.

```text
npm ci
npm run dev
```

Ouvrir `http://localhost:3000`. Sous Windows PowerShell avec scripts désactivés, utiliser `npm.cmd` / `npx.cmd` sans modifier la politique d’exécution.

Pour une compilation optimisée locale : `npm run build:preview`, puis `npm run start`. Cette commande conserve bandeau préparatoire, formulaire désactivé, sitemap vide et `noindex`. Le build de publication `npm run build` échoue volontairement si la configuration commerciale est incomplète. Ne pas utiliser `build:preview` pour publier.

## Fonctionnalités

- Next.js 16.4.2 résolu par le lockfile, App Router, React, TypeScript strict, Tailwind 4, ESLint, Motion et Lucide.
- Direction éditoriale anthracite/cuivre/blanc cassé, responsive, navigation clavier, focus, mouvement réduit, FAQ et CTAs.
- Accueil, prestations, deux départements, répertoire paginé, approche, contact, devis, centre de ressources de 35 guides en sept catégories, FAQ de 56 questions, mentions légales, confidentialité, 404 et gestion d’erreur.
- Huit prestations canoniques ; inserts/foyers fermés et débistrage/traitement du bistre mutualisés avec redirections permanentes.
- **659 communes officielles : 433 dans l’Aude et 226 dans les Pyrénées-Orientales.** Source et date dans `src/data/geo-source.json`.
- Recherche par nom/code postal, clavier, devis prérempli et carte de repérage calculée sur les centres officiels des communes.
- Moteur éditorial local par INSEE : deux brouillons rédigés Perpignan/Narbonne et 657 entrées sans page rédigée. **0 commune publiée ; 659 statuts brouillon.**
- Douze photographies initiales conservées et un visuel complémentaire de stockage du bois : 13 images générées via Imagegen, optimisées WebP dans `public/images/`, clairement signalées comme illustrations.
- Formulaire React Hook Form/Zod, validation serveur, honeypot, origine, taille réelle, cohérence commune/code postal, délai anti-bot, limitation Redis partagée et Resend avec idempotence.
- Metadata, canonical, Open Graph, Twitter, breadcrumbs JSON-LD ; LocalBusiness et Service conditionnés aux données réelles ; sitemap et robots protégés.
- Analytics et Speed Insights intégrés, désactivés par défaut, chargés après choix du visiteur. Aucune donnée saisie dans les événements ; query strings retirées des mesures.

## Configuration

Copier `.env.example` vers `.env.local`. `src/config/company.ts` est l’unique configuration de l’entreprise, dont le logo, les réseaux et les horaires. Une valeur inconnue reste absente ou explicitement provisoire.

Les valeurs de `CONFIRMED_SERVICES` sont les slugs de `src/content/services.ts`, séparés par des virgules. Les prestations préparées portent un avertissement ; seules les prestations confirmées sont présentées au public après validation.

Le formulaire exige identité validée, `NEXT_PUBLIC_QUOTE_ENABLED=true`, `RESEND_API_KEY`, expéditeur vérifié `RESEND_FROM`, destinataire `QUOTE_TO`, `RATE_LIMIT_REST_URL`, `RATE_LIMIT_REST_TOKEN`. Les secrets ne portent jamais le préfixe `NEXT_PUBLIC_`. Sans configuration, aucun succès d’envoi n’est simulé.

À compléter : identité, SIRET, statut juridique, adresse, téléphone, email, domaine, directeur de publication, médiateur effectif, prestations et communes réellement desservies, documents remis, qualifications/assurances vérifiées, contrats de sous-traitance et procédure de conservation. Mettre `PUBLISHING_APPROVED=true` après relecture.

## Vérification

```text
npm run typecheck
npm run lint
npm test
npx playwright install chromium
npm run build:preview
npm run test:e2e
npm run check:config
npm run report
```

Playwright utilise un serveur optimisé isolé sur le port 3100 puis l’arrête. Les tests visent la configuration préparatoire fournie. Les captures et rapports HTML sont ignorés par Git. Le test de succès Resend utilise un fournisseur simulé ; une réception réelle doit être vérifiée après configuration.

Lighthouse : démarrer `npm run start -- -p 3100`, puis `node scripts/lighthouse.mjs` dans un autre terminal. L’audit mobile est local et synthétique. Le blocage volontaire d’indexation abaisse le score SEO préparatoire ; les Core Web Vitals terrain nécessitent un déploiement et du trafic.

## Documentation

- [Architecture et limites](docs/ARCHITECTURE.md)
- [Publication progressive des communes](docs/EDITORIAL.md)
- [Déploiement et variables](docs/DEPLOIEMENT.md)
- [Bibliothèque d’images et prompts](docs/IMAGES.md)
- [Résultats de validation](docs/VALIDATION.md)
- [Système éditorial de phase 2](docs/EDITORIAL-PHASE-2.md)
- [Recherche classique et moteurs IA](docs/SEO-IA.md)
- [Bilan de phase 2](docs/PHASE-2-REPORT.md)

La phase 2 conserve les quatre URL historiques et porte le catalogue total à **35 guides**. **27 synthèses sont vérifiées sur le plan documentaire**, 8 restent à compléter (6 sujets sur le bistre et 2 règlements locaux). Aucun auteur réel n’étant encore renseigné, **aucun guide n’est publié**. Le mode local permet de les examiner avec leur état explicite ; les sources inaccessibles et les limites sont indiquées. Voir `PROGRESS.md` et `npm run audit:editorial`.

Les consultations et demandes issues des guides sont préparées via des références d’article autorisées, sans donnée personnelle dans les événements et avec le consentement de mesure existant. Aucun nouvel outil marketing tiers n’est installé.

## Sources

Communes : [API Géo](https://geo.api.gouv.fr/decoupage-administratif/communes). Règles générales : [Service Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F32437) et [décret n° 2023-641](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047867286). Prévention CO : [ministère de la Santé](https://sante.gouv.fr/sante-et-environnement/batiments/article/intoxications-au-monoxyde-de-carbone). Données personnelles : [CNIL](https://www.cnil.fr/fr/passer-laction/rgpd-les-premieres-etapes). Sources consultées le 17 octobre 2026 ; dispositions locales à vérifier avant diffusion commerciale.

## Git et Vercel

Branche existante `master`, distant conservé `AdrienW86/ramonage`. Aucun autre dépôt ni branche créé. Aucun push forcé. `vercel.json` prépare le build protégé ; aucun projet Vercel sélectionné ni déployé dans l’état livré.
