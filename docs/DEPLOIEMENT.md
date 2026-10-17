# Préparation GitHub / Vercel

Le dépôt distant existant est `https://github.com/AdrienW86/ramonage.git`, branche `master`. Ne pas créer de nouvelle branche ni remplacer ce distant. Le projet reste local tant que la configuration commerciale manque. Aucun projet Vercel n’a été choisi et aucun déploiement n’est demandé dans cet état.

## Avant le premier déploiement

Copier `.env.example` vers `.env.local`, renseigner identité réelle, coordonnées, domaine HTTPS, directeur de publication et médiateur effectif. Mettre la liste des slugs confirmés dans `CONFIRMED_SERVICES` ; ne pas activer une prestation sur la seule base de sa page préparatoire. Adapter les textes légaux à l’entreprise et à ses prestataires. Activer `PUBLISHING_APPROVED` uniquement après relecture.

Pour le formulaire : domaine expéditeur vérifié dans Resend, `RESEND_API_KEY`, `RESEND_FROM`, `QUOTE_TO`, Redis REST via `RATE_LIMIT_REST_URL` et `RATE_LIMIT_REST_TOKEN`, puis `NEXT_PUBLIC_QUOTE_ENABLED=true`. Les clés Resend et Redis sont secrètes et ne portent jamais le préfixe `NEXT_PUBLIC_`. Tester une livraison réelle vers la boîte contrôlée de l’entreprise avant ouverture. Le site n’envoie pas d’accusé de réception au visiteur.

Vercel : choisir explicitement le bon compte et le bon projet, importer le dépôt existant ou le lier avec le CLI, définir les variables par environnement, et conserver `npm run build` comme commande de build. Utiliser Node.js 22. Ne pas utiliser `build:preview` pour publier. Lier un domaine réel avant indexation. Les prévisualisations distantes doivent être protégées et non indexables.

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
