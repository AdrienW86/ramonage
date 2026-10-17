# Publication progressive des communes

1. Vérifier réellement la desserte et mettre `coverageConfirmed: true` sur la commune INSEE dans `src/data/communes.json`.
2. Passer `editorialStatus` de `brouillon` à `a-enrichir` pendant la rédaction.
3. Ajouter une entrée INSEE à `src/content/local.ts` avec un angle utile, une introduction propre au besoin, plusieurs sections concrètes, une source officielle et une date de relecture. Éviter d’inventer des particularités de bâti ou de météo.
4. Vérifier les codes postaux, le périmètre des prestations, les sources, les questions fréquentes et le maillage. Passer à `valide` après relecture.
5. Après accord éditorial, mettre `approved: true`, `editorialStatus: 'publie'` et `indexable: true`. La configuration de l’entreprise doit aussi être valide pour ouvrir le site et son sitemap.
6. Recompiler, tester la route, son canonical et sa présence au sitemap. Contrôler les données structurées et l’absence de mentions non confirmées.

La priorité de recherche ne publie rien. Elle favorise Perpignan et Narbonne (1), puis les communes selon les effectifs de l’API à l’import. Affiner les niveaux 2 à 5 selon les tournées réelles. Aucun texte automatique par remplacement de ville n’est publié.

Les structures départementale et communale sont distinctes. Les contenus de Perpignan mettent l’accent sur les accès en immeuble ; ceux de Narbonne sur la reprise après inactivité. Il s’agit de situations possibles, sans affirmer qu’elles caractérisent tous les logements d’une ville. Les voisins sont calculés par proximité de coordonnées (pas des temps de trajet routier).

Pour un nouveau pôle, choisir une question concrète différente et documenter les éventuelles affirmations locales. Une commune sans contenu utile doit rester au référentiel, sans page indexable.
