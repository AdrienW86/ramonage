# Recherche classique et moteurs de réponse

Vérification documentaire : 17 octobre 2026. Aucun classement, passage dans AI Overviews/AI Mode ou citation par un moteur n’est garanti.

## Choix appliqués

Les textes sont présents dans le HTML rendu par le serveur : réponse courte, développement, exemple identifié comme démarche, FAQ, sources et liens. Les recherches sont des formulaires GET accessibles sans JavaScript. Les URLs historiques des quatre guides sont conservées. Les pages de filtre ont un canonical vers le centre correspondant et restent non indexables.

Les articles publiés doivent avoir un auteur réel vérifié, une date de première publication réelle, une date de vérification et des sources consultées. Le JSON-LD Article reprend le contenu visible ; aucune personne, qualification ou fausse date n’est créée. Les brouillons n’émettent pas de JSON-LD Article, restent non indexables et sont exclus du sitemap. La FAQ reste un contenu de lecture ; aucun résultat enrichi FAQ n’est promis à un site d’artisan.

Le maillage relie catégories, guides, FAQ, prestations et territoires. Les villes restent gouvernées par les validations déjà en place ; aucune génération de 659 pages publiques. Les deux brouillons Perpignan/Narbonne ont des angles différents et ne sont pas présentés comme des agences.

## Robots, recherche et entraînement

En préparation, `User-agent: * / Disallow: /` et les balises noindex sont conservés. Le site ne doit pas être exposé publiquement avec des coordonnées provisoires ; robots n’est pas une protection d’accès.

Après configuration commerciale valide, les règles de recherche autorisent explicitement Googlebot, bingbot, **OAI-SearchBot** et PerplexityBot, avec les restrictions techniques communes. OAI-SearchBot sert à la recherche ChatGPT. **GPTBot est indépendant et concerne l’entraînement** : aucune règle dédiée d’entraînement n’a été ajoutée ou modifiée dans cette phase ; il hérite de la règle générique existante. Une décision spécifique sur l’entraînement devra être traitée séparément, sans bloquer par confusion OAI-SearchBot.

Le fichier `next.config.ts` ne contient pas de restriction par User-Agent. Aucune règle CDN distante n’a pu être vérifiée : aucun projet Vercel ni domaine n’est déployé. À l’ouverture, contrôler l’absence de blocage WAF/anti-bot des robots de recherche en utilisant leurs adresses et méthodes de vérification officielles ; ne pas se fier uniquement à un User-Agent annoncé.

Pas de fichier `llms.txt` présenté comme nécessaire, pas de balisage « GEO » spécial, pas de faux avis ni de qualification inventée. Les bonnes pratiques de crawl et de contenu utile servent à la fois la recherche classique et les moteurs de réponse.

## Mesure et confidentialité

Les événements `article_consulte`, `clic_devis`, `devis_envoye` et `devis_depuis_guide` peuvent porter uniquement `article_slug`, validé contre la liste des 35 références. Les événements ne partent que si Analytics est activé et si le visiteur accepte la mesure. Les données du formulaire et les termes de recherche ne sont pas des propriétés d’événement. Les query strings sont retirées des événements techniques Vercel.

Le lien de demande comporte `?article=<slug>`. La référence est validée avant affichage et côté serveur dans le schéma de devis ; elle peut être indiquée dans l’email de demande pour comprendre le besoin. Ce contexte n’est pas une autorisation de prospection. Un clic sur le CTA d’un article transporte la référence ; une navigation indépendante ultérieure vers le formulaire n’est pas attribuée artificiellement. Aucun identifiant de personne ou suivi intersite n’est ajouté.

Les conversions ne sont déclenchées qu’après acceptation réelle de l’email par Resend. Les tests peuvent simuler le fournisseur, mais aucune conversion réelle n’est revendiquée sans configuration et trafic.

## Sources consultées

- [Google Search Central — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google — conseils pour les expériences IA](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- [Google — règles des données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Documentation officielle OpenAI — crawlers](https://developers.openai.com/api/docs/bots)

Après publication : vérifier Search Console et Bing Webmaster Tools, soumettre le sitemap des seules pages réellement publiées, inspecter le HTML servi aux robots et observer les consultations/conversions agrégées. Les citations dans les moteurs de réponse peuvent varier et ne constituent pas un livrable garanti.
