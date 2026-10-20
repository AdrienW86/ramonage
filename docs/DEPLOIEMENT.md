# Préparation GitHub / Vercel

Le dépôt distant existant est `https://github.com/AdrienW86/ramonage.git`, branche `master`. Ne pas créer de nouvelle branche ni remplacer ce distant. Le projet reste local tant que la configuration commerciale manque. Aucun projet Vercel n’a été choisi et aucun déploiement n’est demandé dans cet état.

## Avant le premier déploiement

Les informations publiques (identité, coordonnées, domaine, hébergeur, médiateur, conservation, prestations confirmées, approbation) sont saisies uniquement dans `src/config/company.ts`. Ne pas activer une prestation sur la seule base de sa page préparatoire. Passer `publishingApproved` à `true` uniquement après relecture.

Pour le formulaire : domaine expéditeur vérifié dans Resend, `RESEND_API_KEY`, `RESEND_FROM`, `QUOTE_TO`, Redis REST via `RATE_LIMIT_REST_URL` et `RATE_LIMIT_REST_TOKEN`, puis `NEXT_PUBLIC_QUOTE_ENABLED=true`. Les clés Resend et Redis sont secrètes et ne portent jamais le préfixe `NEXT_PUBLIC_`. Tester une livraison réelle vers la boîte contrôlée de l’entreprise avant ouverture. Le site n’envoie pas d’accusé de réception au visiteur.

Vercel : choisir explicitement le bon compte et le bon projet, importer le dépôt existant ou le lier avec le CLI, définir les variables par environnement, et conserver `npm run build` comme commande de build. Utiliser Node.js 22. Tant que la configuration est incomplète, `npm run build` réussit en mode prévisualisation (noindex, sitemap vide, pages légales et formulaire masqués) ; il échoue si `publishingApproved` vaut `true` avec des informations manquantes. `npm run check:config` effectue le contrôle strict de publication. Lier un domaine réel avant indexation. Les prévisualisations distantes doivent être protégées et non indexables.

## État de la configuration — 20 octobre 2026

Aucune coordonnée publique n’est stockée dans Vercel. **Vercel → Settings → Environment Variables** ne contient que les réglages techniques de `.env.example` : `NEXT_PUBLIC_QUOTE_ENABLED`, les secrets `RESEND_API_KEY`, `RESEND_FROM`, `QUOTE_TO`, `RATE_LIMIT_REST_URL`, `RATE_LIMIT_REST_TOKEN`, et les options `NEXT_PUBLIC_ANALYTICS_ENABLED`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Les anciennes variables d’identité (`COMPANY_*`, `HOSTING_*`, `NEXT_PUBLIC_COMPANY_NAME`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `PRIVACY_RETENTION_POLICY`, `CONFIRMED_SERVICES`, `PUBLISHING_APPROVED`) sont ignorées et peuvent être supprimées.

Renseigné dans `company.ts` : Ramonage Roussillon, ROBLES Grégory, EI, SIRET 83479975100013 (clé contrôlée), 5 Rue du Moulinas 66330 Cabestany, 06 62 12 56 11, https://ramonage-roussillon.fr, directeur de publication Grégory Robles, hébergeur Vercel Inc. (adresse des conditions d’utilisation Vercel, section 23.3.4).

À confirmer avant publication : email professionnel, médiateur de la consommation effectivement adhéré, politique de conservation des données, prestations exercées, puis approbation.

Point à régulariser avant publication : le registre public (recherche-entreprises.api.gouv.fr, consulté le 20 octobre 2026) indique pour ce SIRET un établissement au 88 Cami de las Carretas, 66380 Pia, le nom commercial « Express Nuisibles Services » et l’activité 43.91B. L’adresse de Cabestany et l’activité de ramonage doivent y être déclarées, ou l’adresse publiée corrigée. Le ramonage relevant des activités à qualification professionnelle (loi n° 96-603, art. 16), la qualification de la personne qui intervient doit pouvoir être justifiée. Le site n’en revendique aucune.

## Contrôles

```text
npm ci
npm run check:config
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

La suite navigateur incluse vise la configuration de préparation fournie. Après configuration réelle, adapter les assertions de robots, canonicals et pages autorisées, puis vérifier également le sitemap public et LocalBusiness avec les données réelles.

Vérifier ensuite : réception réelle Resend, comportement du limiteur partagé, consentement analytics, appels téléphoniques, emails, formulaire prérempli, affichage des informations légales et refus des pages locales non publiées.

## Mesure et acquisition

`NEXT_PUBLIC_ANALYTICS_ENABLED=true` propose le choix de mesure au visiteur. Vérifier les exigences applicables avant activation. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` prépare Search Console. Soumettre le sitemap seulement après validation. L’ajout futur de Google Ads ou GTM nécessitera une gestion du consentement marketing et une revue des paramètres ; ne jamais pousser les données personnelles du formulaire dans des événements publicitaires.
