# Phase 2 — rapport de livraison

17 octobre 2026. Base : `master`, commit de phase 1 `d4abc57`. Travail local uniquement ; aucun push, dépôt distant, branche, PR ou déploiement créé.

## Résultat

Le centre de ressources `/conseils` comporte une recherche par mots et une sélection de catégorie, des guides incontournables, des lectures recommandées par appareil, des FAQ et des liens vers les prestations et territoires. Les résultats et les textes sont présents en HTML serveur ; la recherche fonctionne par formulaire GET sans dépendance JavaScript supplémentaire. Sept pages de catégorie sont disponibles.

Le catalogue total contient **35 guides**, dont les **quatre URL historiques conservées et enrichies**. Il ne s’agit pas de 35 ajouts. Les données typées regroupent les métadonnées, la réponse courte, les sections, l’exemple, la FAQ, les références, les liens et les états éditoriaux.

`/questions-frequentes` contient **56 questions distinctes**, huit par thématique, avec recherche, liens d’approfondissement et sources. L’article distingue ses limites et son niveau de vérification. Les exemples décrivent des démarches possibles et ne revendiquent aucune expérience de chantier.

Les brouillons de **Perpignan et Narbonne** ont été enrichis avec des angles distincts. Les départements et prestations proposent des liens conditionnels vers les ressources. Le référentiel des **659 communes** et la configuration de l’entreprise sont conservés sans modification. Aucune commune supplémentaire n’est publiée.

## État éditorial réel

| État                                         | Nombre | Portée                                                                              |
| -------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| Vérifiés sur le plan documentaire (`valide`) | 27     | Synthèses sourcées, sans attribution professionnelle ni date de publication fictive |
| À enrichir (`a-enrichir`)                    | 5      | Source technique spécifique et relecture métier à compléter                         |
| Brouillons (`brouillon`)                     | 3      | Déroulement technique du débistrage et deux règlements locaux                       |
| Publiés (`publie`)                           | **0**  | Identité commerciale et auteur réel toujours absents                                |

Les 35 textes sont consultables dans la préparation locale non indexable. Les 27 synthèses vérifiées ne constituent pas une validation professionnelle ou juridique. La publication requiert un auteur réel qui assume le contenu, une première date de publication réelle, un statut explicite et la configuration commerciale valide. Les huit contenus incomplets ne peuvent pas franchir le contrôle en ajoutant seulement un auteur.

### Contenus à compléter

| Guide                                                       | État       | Complément nécessaire                                                                          |
| ----------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| Bistre et suie : reconnaître la différence                  | À enrichir | Source technique sur l’identification et revue métier                                          |
| Pourquoi le bistre se forme-t-il ?                          | À enrichir | Mécanismes et facteurs documentés, sans diagnostic universel                                   |
| Quelle différence entre ramonage et débistrage ?            | À enrichir | Cadre technique et limites de prise en charge                                                  |
| Comment se prépare un débistrage professionnel ?            | Brouillon  | Procédure compatible, source et revue qualifiée                                                |
| Quels risques doivent faire examiner des dépôts de bistre ? | À enrichir | Références spécifiques aux dépôts et revue de sécurité                                         |
| Comment limiter les situations favorisant l’encrassement ?  | À enrichir | Conseils spécifiques adaptés et source technique                                               |
| Réglementation dans les Pyrénées-Orientales                 | Brouillon  | PDF officiel inaccessible ; version applicable et prescriptions communales à confirmer         |
| Réglementation dans l’Aude                                  | Brouillon  | Extrait préfectoral repéré ; lecture complète et articulation actuelle avec le Code à vérifier |

Les textes nationaux utilisent les articles codifiés R1331-70 à R1331-78 et distinguent appareil individuel, collectif et inactivité. Aucun tarif, délai d’intervention, label, norme technique ou qualification de l’entreprise n’est inventé.

## Recherche, robots et données structurées

La règle de préparation reste bloquante et le sitemap reste vide. Après ouverture réelle, OAI-SearchBot, Googlebot, bingbot et PerplexityBot sont explicitement couverts par les règles d’accès des pages publiques. GPTBot n’est pas assimilé à OAI-SearchBot ; la politique d’entraînement existante n’est pas modifiée.

Le JSON-LD Article n’est émis que pour un contenu effectivement publié avec auteur et dates réels ; les breadcrumbs sont conservés. Le sitemap n’admet que les guides publiés et les catégories comportant un guide public. Les filtres restent non indexables. Aucun balisage artificiel de visibilité IA, fichier présenté comme obligatoire ou fausse preuve d’autorité n’est ajouté. Aucune garantie de classement ni de citation.

Le CDN et les éventuelles règles WAF distantes ne sont pas vérifiables en l’absence de domaine/projet déployé. La revue locale n’a trouvé aucune restriction par User-Agent dans la configuration Next.js.

## Mesure des consultations et demandes

Les événements `article_consulte` et `devis_depuis_guide` complètent les événements existants ; `clic_devis` et `devis_envoye` peuvent recevoir la référence autorisée du guide. L’activation et l’acceptation de la mesure restent nécessaires. Aucune valeur du formulaire ou terme de recherche n’est transmis en propriété ; les URL mesurées sont privées de leurs paramètres.

Le lien article → formulaire transmet un slug autorisé, validé côté serveur et éventuellement repris dans l’email. Une conversion n’est déclenchée qu’après succès Resend. Les tests utilisent un fournisseur simulé ; aucun email réel ni conversion réelle revendiqué. Les erreurs de stockage ou de mesure ne doivent pas interrompre la demande commerciale.

## Visuels

Les **12 images existantes sont conservées**. Une image supplémentaire a été réellement générée avec l’outil intégré Imagegen : `public/images/bois-stockage.webp` (1200 × 800, 248 000 octets). Son prompt exact est enregistré dans `src/data/image-prompts.json`. Elle représente un rangement illustratif de bûches, pas un chantier ni une mesure d’humidité. Le tableau comparatif HTML sur les périmètres d’intervention reste accessible sans image technique non validée.

## Contrôles exécutés

| Contrôle                                  | Résultat final                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| TypeScript strict                         | Réussi                                                                                      |
| ESLint                                    | Réussi, sans avertissement                                                                  |
| Vitest                                    | **43/43 réussis**, dont les 30 tests initiaux                                               |
| Playwright Chromium desktop/mobile        | **20/20 réussis**                                                                           |
| Audit éditorial                           | 35 guides, 56 FAQ, aucune anomalie structurelle ou référence manquante                      |
| HTML, titres, canonical, JSON-LD et liens | 35 guides + parcours historiques vérifiés ; liens internes collectés et vérifiés            |
| Recherche et navigation                   | Articles, catégories, questions, état vide et routes inconnues vérifiés                     |
| Accessibilité axe                         | Aucune violation détectée sur les écrans contrôlés avec les règles WCAG A/AA utilisées      |
| Responsive complémentaire                 | **16 contrôles**, quatre pages × 320/360/768/1440 px, sans débordement ni erreur JavaScript |
| Images                                    | Références présentes et rendus inspectés                                                    |
| Publication commerciale                   | Blocage attendu confirmé avec les informations manquantes                                   |
| Git diff --check                          | Réussi                                                                                      |

Une erreur de chargement JSON dans la suite de tests et un débordement des cartes causé par la taille intrinsèque CSS ont été corrigés. Les suites finales passent. Ces contrôles ne valent pas certification WCAG, expertise métier ou test de réception d’email réel.

## Lighthouse mobile local

Même profil synthétique et compilation optimisée que la phase 1 ; aucune mesure de trafic réel ou d’INP terrain.

| Mesure           | Accueil phase 1 | Accueil phase 2 | Centre de ressources phase 2 |
| ---------------- | --------------- | --------------- | ---------------------------- |
| Performance      | 96              | **96**          | **99**                       |
| Accessibilité    | 100             | **100**         | **100**                      |
| Bonnes pratiques | 100             | **100**         | **100**                      |
| SEO              | 69              | **69**          | **69**                       |
| FCP              | 0,8 s           | **0,8 s**       | **0,9 s**                    |
| LCP              | 2,8 s           | **2,8 s**       | **2,2 s**                    |
| CLS              | 0               | **0**           | **0**                        |
| TBT              | 50 ms           | **40 ms**       | **40 ms**                    |

Aucune dégradation du score d’accueil n’a été observée dans ces mesures. Le LCP d’accueil reste au-dessus de 2,5 s : l’objectif terrain est donc toujours à suivre après déploiement. Le score SEO est pénalisé par la protection d’indexation volontaire, conservée. Les scores peuvent varier selon la machine et les conditions.

Rapports locaux ignorés par Git : `artifacts/phase2-accueil.html`, `artifacts/phase2-conseils.html` et JSON correspondants ; captures `artifacts/phase2-*.png`, bilan responsive JSON et rapport Playwright.

## Actions indispensables avant publication

Compléter l’identité commerciale et les accès de la phase 1. Faire relire les guides, renseigner un auteur réel et publier progressivement les synthèses effectivement approuvées. Obtenir les sources locales complètes et une référence technique pertinente pour les six contenus spécialisés avant de les valider. Vérifier les contrats, l’email réel, le domaine et les règles CDN une fois la destination explicitement choisie. Aucun push ni déploiement effectué.
