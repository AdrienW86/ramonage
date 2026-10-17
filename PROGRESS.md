# Phase 2 — progression

Base : `master`, commit `d4abc57`. Aucune branche, PR, publication distante ou push autorisé.

## Audit initial — 17 octobre 2026

- Projet examiné : App Router, configuration commerciale et garde de publication, huit prestations, référentiel de 659 communes, contenus locaux, formulaire, tracking, SEO, styles, scripts et tests.
- Quatre URL de guides conservées : `obligations-et-frequence`, `comprendre-le-bistre`, `securite-et-monoxyde-de-carbone`, `preparer-son-ramonage`.
- Limites éditoriales actuelles : pas de statuts/auteur/dates typés, sources trop générales pour certains sujets techniques, pas de FAQ globale ni de recherche de guides, pas d’attribution article → devis.
- Design, images existantes, formulaire et coordonnées préservés. Identité toujours incomplète : protections d’indexation et d’envoi conservées.

## Réalisé

1. Registre de sources officielles avec périmètre, date de consultation et accès complet/partiel/bloqué. Les documents locaux ne sont pas présentés comme intégralement vérifiés.
2. Catalogue de **35 guides**, sept catégories, recherche serveur HTML, sommaires, exemples, FAQ ciblées et références. **27 vérifiés sur le plan documentaire, 8 à compléter** (6 sur le bistre, 2 sur les textes locaux).
3. **56 questions globales** sourcées et recherchables. Maillage entre guides, catégories, FAQ, prestations, départements et brouillons de Perpignan/Narbonne enrichis.
4. JSON-LD Article conditionné à un auteur réellement vérifié, une date réelle et un statut publié. Sitemap excluant les articles non publiés. Accès OAI-SearchBot préparé après ouverture réelle ; protections de préparation conservées.
5. Attribution article → devis par slug autorisé, événements sans données personnelles et conditionnés au choix de mesure. Référence incluse dans l’email seulement si elle appartient au catalogue.
6. Douze images initiales conservées ; une image IA complémentaire de stockage de bois importée et optimisée. Tableau pédagogique pour différencier les interventions.

## Vérification finale

- TypeScript, ESLint et compilation optimisée réussis ; **43 tests unitaires et 20 tests navigateur réussis**. Les 30 tests initiaux sont conservés.
- Audit des 35 guides, références, sources, images et 56 réponses : aucune anomalie structurelle restante.
- Correction du chargement JSON de la suite Playwright et du débordement intrinsèque des cartes sur ordinateur.
- **16 contrôles responsive complémentaires**, sans débordement ni erreur JavaScript.
- Lighthouse mobile : **accueil 96/100, centre 99/100**, accessibilité et bonnes pratiques 100 ; SEO 69 avec le blocage d’indexation maintenu. LCP 2,8 s / 2,2 s, CLS 0, TBT 40 ms.
- Rapport détaillé : `docs/PHASE-2-REPORT.md`. Documentation éditoriale, sources, robots et mesure mise à jour.
- Changements enregistrés dans un commit local sur `master` (hash consultable avec `git log -1`). Aucun push ni déploiement.

## Publication

**0 guide publié** et **0 nouvelle page communale publiée**. Les 35 guides sont consultables dans la préparation locale ; la publication nécessite toujours une entreprise configurée, un auteur réel, une relecture assumée et une date de publication réelle. Les 8 contenus incomplets ne sont pas rendus publiables par la seule saisie d’un auteur.

La vérification des sources est factuelle ; elle ne constitue pas une relecture par un ramoneur qualifié ou un juriste. Aucun auteur expert fictif ne sera ajouté.
