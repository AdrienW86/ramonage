# Maintenir le centre de ressources

Les 35 guides sont des objets TypeScript dans `src/content/articles/`, regroupés en cinq fichiers cohérents. Le type `Guide` définit le contrat et les sept catégories. Ce choix évite un moteur MDX et des dépendances supplémentaires ; les données sont rendues par des Server Components. Le contenu reste du texte structuré, sans HTML injecté.

## Champs et responsabilités

Chaque guide comporte slug, titre, description, intention, catégorie, image, introduction-réponse, sections, exemple, FAQ, sources, guides et prestations liés, statut, auteur, date de publication, date de vérification, note de limites et CTA. Une date inconnue est `null`. Le helper ne crée jamais automatiquement une date de vérification. Les dates du 17 octobre 2026 ont été saisies explicitement pour les 27 synthèses vérifiées pendant cette mission.

`src/content/sources.ts` précise le document, l’institution, l’URL, la date de consultation tentée, le périmètre et le niveau d’accès. `full` signifie consulté, pas vérifié par un juriste ni approbation de notre contenu par l’institution. `partial` ou `blocked` ne peut pas valider un guide publié. Un lien officiel seul n’est pas une preuve suffisante pour une procédure technique.

`src/content/faq.ts` contient 56 réponses, classées par thème et reliées à un guide et à des sources. Les réponses restent lisibles même si le guide complémentaire n’est pas encore publié. Leur contenu général ne doit pas être utilisé pour annoncer une desserte ou une qualification.

## État livré

- 27 guides `valide` sur le plan documentaire, **sans auteur professionnel revendiqué et sans date de publication**.
- 5 guides `a-enrichir` sur le bistre ; 1 guide `brouillon` sur le déroulement du débistrage ; 2 guides `brouillon` de réglementation locale.
- 0 guide `publie`. Les 35 sont consultables uniquement dans la préparation non indexable. Les protections commerciales initiales restent en place.

Les quatre URL anciennes sont conservées et enrichies. Le guide général obligations absorbe le sujet introductif ; la nouvelle page de fréquence détaille collectif, inactivité et calcul des délais. La reconnaissance du bistre reste dans le guide existant plutôt que faire une seconde page quasi identique ; le sujet complémentaire porte sur les bûches chimiques. La préparation historique couvre le déroulement de l’intervention. Le guide CO existant est conservé comme sujet de sécurité dédié. Le catalogue comporte donc 35 intentions distinctes, pas 35 ajouts aux quatre pages.

## Publier un guide

1. Compléter les sources et vérifier les affirmations ; une vraie procédure métier doit être relue par une personne compétente. Pour les textes locaux, obtenir la version applicable et vérifier l’articulation avec les règles nationales et les arrêtés municipaux.
2. Indiquer `dateVerified` au jour de la vérification réellement effectuée ; documenter les limites dans `verificationNote`.
3. Renseigner un auteur réel qui assume le texte : `{ name, role, verified: true, profileUrl? }`. Ne pas utiliser un nom d’exemple. `verified` est une déclaration éditoriale humaine, pas une vérification automatique d’identité.
4. Après relecture, passer `status` à `publie` et renseigner `datePublished` à la date réelle de première publication. Une publication future n’est pas admise. Ne pas convertir les 35 objets en masse.
5. Exécuter `npm run audit:editorial`, `npm run check:config`, les tests et le build de publication. Vérifier la présence de la page dans le sitemap et le JSON-LD visible.

Les guides non publiés restent hors du rendu public lorsque l’entreprise est configurée. Une catégorie sans guide public reste non indexable. Les liens de prestation vers les guides utilisent les blocs conditionnels « Des repères pour votre demande » pour éviter des liens vers un brouillon retiré du rendu public.

## Ajouter et contrôler un sujet

Ajouter un objet typé au fichier adapté ; choisir un slug stable et une intention qui ne double pas un article existant. Ajouter un visuel existant pertinent et des liens vers des guides réels. Actualiser la liste légère des références autorisées avec `npx tsx scripts/editorial-audit.ts --write-slugs` : cette liste seule est partagée avec le navigateur et le formulaire ; les textes complets ne sont pas embarqués côté client.

L’audit contrôle doublons, champs principaux, références, images et blocages de publication. Les tests navigateur contrôlent le HTML, les canonicals, les liens internes, les filtres, l’accessibilité et les routes. Ces contrôles structurels ne remplacent pas une relecture du fond.
