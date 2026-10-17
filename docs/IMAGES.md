# Bibliothèque visuelle

Douze images réellement générées le 17 octobre 2026 avec l’outil intégré `image_gen`. Originaux conservés dans le répertoire de génération Codex ; fichiers consommés par le projet copiés et optimisés dans `public/images/`. Aucun appel API facturable supplémentaire ni clé OpenAI requis. La conversion WebP utilise Sharp ; elle n’altère pas le sujet des images.

Les prompts complets et exacts sont versionnés dans `src/data/image-prompts.json`. Dimensions et poids réels : `src/data/images.json`. Tous les visuels portent une mention d’illustration IA à l’écran. Ils ne prouvent ni qualification, ni matériel détenu, ni intervention réalisée. Une revue professionnelle des détails techniques reste recommandée avant usage commercial.

| Fichier dans public/images | Dimensions | Poids approximatif | Emplacement                        |
| -------------------------- | ---------- | ------------------ | ---------------------------------- |
| hero.webp                  | 1672 × 941 | 133 Ko             | Accueil, Open Graph                |
| cheminee.webp              | 1200 × 800 | 129 Ko             | Cheminées, guide obligations       |
| poele-bois.webp            | 1200 × 800 | 145 Ko             | Poêles à bois, guide sécurité      |
| poele-granules.webp        | 1200 × 800 | 86 Ko              | Poêles à granulés                  |
| insert.webp                | 1200 × 800 | 153 Ko             | Inserts et foyers fermés           |
| conduit.webp               | 1200 × 800 | 94 Ko              | Entretien des conduits             |
| chaudiere.webp             | 1200 × 800 | 76 Ko              | Ramonage chaudière                 |
| bistre.webp                | 1200 × 800 | 97 Ko              | Guide sur le bistre                |
| debistrage.webp            | 1200 × 800 | 112 Ko             | Débistrage et traitement du bistre |
| inspection.webp            | 1200 × 800 | 124 Ko             | Inspection et diagnostic           |
| outillage.webp             | 1200 × 800 | 185 Ko             | Approche et préparation            |
| local.webp                 | 1200 × 800 | 229 Ko             | Territoires et pages locales       |

Phase 2 : un treizième visuel, `bois-stockage.webp`, a été généré avec l’outil intégré et importé dans `public/images/` (1200 × 800, 248 000 octets). Il illustre un rangement de bûches surélevé et ventilé ; il ne mesure pas l’humidité et ne représente pas un chantier réel. Le prompt exact figure dans `src/data/image-prompts.json`. Les douze images initiales sont conservées. Un tableau HTML accessible explique les périmètres ramonage/entretien/inspection ; aucune coupe de conduit techniquement non validée n’a été créée.

Pas de visuel manquant dans cette bibliothèque. Le visuel local représente une ambiance méditerranéenne imaginaire, pas une commune précisément identifiée. Aucun logo commercial final n’est créé ; le pictogramme de flamme accompagne le nom provisoire et le logo réel peut le remplacer dans `company.logo`.

`next/image` fournit les tailles responsives et formats WebP/AVIF ; seuls les visuels LCP sont préchargés. Les blocs réservent leur espace pour éviter le CLS. Les autres images utilisent le chargement différé.
