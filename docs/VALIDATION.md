# Validation — 17 octobre 2026

## État du livrable

Site Next.js fonctionnel en préparation locale. **25 routes de contenu vérifiées**, huit prestations canoniques, deux pages départementales, quatre guides, deux pages communales rédigées en brouillon et les pages commerciales/légales. Aucune publication distante. Identité commerciale et prise en charge réelle à confirmer.

Référentiel API Géo : **659 communes**, dont 433 Aude et 226 Pyrénées-Orientales. **0 page locale publiée/indexable, 659 statuts brouillon.** Deux contenus de ville préparés ; les autres entrées ne produisent pas de page communale. Douze images WebP réelles, inspectées visuellement sur une planche et dans les rendus responsive ; leur crédibilité métier reste à relire avant usage commercial.

## Contrôles exécutés

| Contrôle                                 | Résultat                                                                                                                                      |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TypeScript strict                        | Réussi                                                                                                                                        |
| ESLint                                   | Réussi, sans erreur ni avertissement dans le dernier passage                                                                                  |
| Build Next.js optimisé de préparation    | Réussi, 32 sorties générées au build dont les routes techniques                                                                               |
| Tests Vitest                             | **30/30 réussis**, trois fichiers                                                                                                             |
| Tests Playwright Chromium desktop/mobile | **10/10 réussis**                                                                                                                             |
| Routes et liens internes                 | 25 routes contrôlées sur chaque profil ; liens internes collectés puis vérifiés sans erreur HTTP                                              |
| SEO technique                            | Un H1 par page, titres uniques sur l’échantillon complet de routes, canonical, JSON-LD parseable, noindex de préparation vérifiés             |
| Géographie                               | INSEE/slugs uniques, codes postaux, coordonnées, recherche accent/tiret/CP, voisins et garde de publication vérifiés                          |
| Formulaire/API                           | Validation Zod client/serveur, origine, honeypot, temporisation, commune/CP, taille, absence de faux succès, succès fournisseur simulé testés |
| Limitation de débit                      | Quota Redis, panne Redis, refus du fallback production et quota mémoire développement testés                                                  |
| Accessibilité axe                        | Aucune violation détectée dans les règles WCAG 2/2.1/2.2 A/AA sur accueil, devis, cheminée, zones, en desktop/mobile                          |
| Responsive complémentaire                | Captures 360, 768 et 1440 px, absence de débordement horizontal contrôlée                                                                     |
| Dépendances de production                | `npm audit --omit=dev --audit-level=high` : 0 vulnérabilité signalée                                                                          |
| Configuration de publication             | Blocage attendu et vérifié : liste explicite des données manquantes, code de sortie 1                                                         |

Les premiers passages ont révélé des erreurs corrigées : JSX, compatibilité du script de configuration ESM, contrastes, sélection de FAQ et normalisation du slash du canonical. Les suites finales ci-dessus passent. Les tests automatisés ne constituent pas une certification WCAG complète ; revue manuelle et données réelles restent nécessaires.

## Mesures Lighthouse mobile locales

Mesures sur compilation optimisée, profil mobile synthétique avec throttling Lighthouse. Premier passage : performance 93 ; après priorité élevée et compression du hero :

| Mesure                   | Résultat    |
| ------------------------ | ----------- |
| Performance              | **96/100**  |
| Accessibilité            | **100/100** |
| Bonnes pratiques         | **100/100** |
| SEO                      | **69/100**  |
| First Contentful Paint   | 0,8 s       |
| Largest Contentful Paint | 2,8 s       |
| Cumulative Layout Shift  | 0           |
| Total Blocking Time      | 50 ms       |
| Speed Index              | 0,8 s       |

Le score SEO est pénalisé par les protections d’indexation volontaires. Elles sont conservées tant que l’entreprise n’est pas configurée. Le LCP mesuré reste au-dessus du seuil terrain « bon » de 2,5 s malgré l’objectif de score performance atteint ; poursuivre sa mesure une fois déployé. Aucun INP terrain ni TTFB réel de production mesuré. Les résultats synthétiques varient avec la machine et le réseau.

Rapports détaillés locaux : `artifacts/lighthouse-mobile.html`, `artifacts/lighthouse-mobile.json`, `playwright-report/index.html`. Captures : `artifacts/home-desktop.png`, `home-tablet.png`, `home-small-mobile.png`. Ces sorties sont ignorées par Git ; ce bilan synthétique est versionné.

## Reste indispensable avant ouverture

Renseigner les variables d’identité et coordonnées de `.env.example`, le domaine HTTPS, les prestations confirmées, le directeur de publication et le médiateur effectif ; valider textes légaux et politique de conservation ; approuver la publication via `PUBLISHING_APPROVED`.

Configurer `RESEND_API_KEY`, `RESEND_FROM`, `QUOTE_TO`, `RATE_LIMIT_REST_URL`, `RATE_LIMIT_REST_TOKEN` puis activer `NEXT_PUBLIC_QUOTE_ENABLED` si souhaité. Aucun email réel n’a été envoyé ni reçu pendant la validation : l’acceptation Resend et la livraison dans la boîte réelle doivent être testées après fourniture des accès. Vérifier les contrats des sous-traitants et la suppression des demandes dans la messagerie.

Confirmer les communes réellement desservies et enrichir/valider les contenus avant passage à `publie`. Les qualifications, assurances, horaires, tarifs et documents remis ne sont pas encore attestés.

Choisir explicitement le projet Vercel et son compte avant tout déploiement. Aucun projet distant créé et aucun déploiement exécuté. Le distant Git existant et la branche `master` sont conservés ; aucun push effectué.
