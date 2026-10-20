export type EditorialSource = {
  title: string;
  url: string;
  publisher: string;
  checkedAt: string;
  access: 'full' | 'partial' | 'blocked';
  scope: string;
  limitation?: string;
};
export const sources: Record<string, EditorialSource> = {
  aqcBistre: {
    title: 'Incendies par feu de cheminée : comment les éviter ? — fiche n° 5, janvier 2024',
    url: 'https://www.inc-conso.fr/sites/default/files/files/pdf/fi-prevention-risques-habitation-05-incendies-feu-cheminee-aqc.pdf',
    publisher: 'Agence Qualité Construction / INC',
    checkedAt: '2026-10-17',
    access: 'full',
    scope:
      'Dépôts de condensats, facteurs de formation, prévention et distinction du débistrage, pages 1 à 3.',
    limitation:
      'Référence technique de prévention, pas source de fréquence légale actuelle. Les mentions générales de deux ramonages par an et les délais fixes de séchage ne sont pas repris comme obligations nationales.',
  },
  publicHealth: {
    title: 'Intoxications au monoxyde de carbone : adopter les bons gestes',
    url: 'https://www.santepubliquefrance.fr/presse/intoxications-au-monoxyde-de-carbone-adopter-les-bons-gestes-peut-sauver-des-vies',
    publisher: 'Santé publique France',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Gaz imperceptible, symptômes et mise à l’abri.',
  },
  coBrochure: {
    title: 'Les dangers du monoxyde de carbone — brochure accessible',
    url: 'https://www.santepubliquefrance.fr/sites/default/files/cadic_files/documents/spf00002579.pdf',
    publisher: 'Santé publique France',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Réflexes et retour au logement après accord des secours.',
  },
  emergency: {
    title: 'Quels sont les numéros en cas d’urgence ?',
    url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F33954',
    publisher: 'Service Public / DILA',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: '15, 18, 112 et accès au 114.',
  },
  obligations: {
    title: 'Cheminée ou poêle : usage et obligation de ramonage',
    url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F32437',
    publisher: 'Service Public / DILA',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Obligation générale et orientation vers les règles locales.',
  },
  frequency: {
    title: 'Code de la santé publique — R1331-70 et R1331-71',
    url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000047946962/2023-10-01/',
    publisher: 'Légifrance',
    checkedAt: '2026-10-17',
    access: 'full',
    scope:
      'Action mécanique, raccordement, fréquences individuelles/collectives et inactivité ; texte légal en vigueur depuis octobre 2023.',
  },
  common: {
    title: 'Code de la santé publique — R1331-72 à R1331-78',
    url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000047946970/2026-06-27',
    publisher: 'Légifrance',
    checkedAt: '2026-10-17',
    access: 'full',
    scope:
      'Accès, initiative, qualification, attestation et remise en service après sinistre ; version consultée au 27 juin 2026, revue avant publication à prévoir.',
  },
  maintenance: {
    title: 'Code de la santé publique — R1331-67 à R1331-69',
    url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000047946950/',
    publisher: 'Légifrance',
    checkedAt: '2026-10-17',
    access: 'partial',
    scope: 'Entretien des appareils ; extraits indexés consultés.',
    limitation:
      'Accès direct incomplet ; ne pas tirer de procédure technique détaillée de cette source.',
  },
  decree: {
    title: 'Décret n° 2023-641 du 20 juillet 2023',
    url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047867286',
    publisher: 'Légifrance',
    checkedAt: '2026-10-17',
    access: 'partial',
    scope:
      'Origine du dispositif national ; numérotation initiale à ne pas confondre avec le code recodifié.',
    limitation:
      'URL directe inaccessible ; les guides utilisent les articles codifiés consultables.',
  },
  wood: {
    title: 'Comment bien se chauffer au bois ? — édition juin 2026',
    url: 'https://librairie.ademe.fr/ged/8931/guide-comment-bien-chauffer-bois.pdf',
    publisher: 'ADEME',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Combustible, stockage, mauvaise combustion et entretien ; pages 4 à 11.',
  },
  pellets: {
    title: 'Installer et utiliser un poêle à granulés',
    url: 'https://librairie.ademe.fr/index.php?controller=attachment&id_attachment=4601',
    publisher: 'ADEME',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Utilisation et entretien des poêles à granulés ; notice constructeur à respecter.',
  },
  gestures: {
    title: 'Se chauffer au bois : les bons gestes',
    url: 'https://agirpourlatransition.ademe.fr/particuliers/amenager-maison/chauffer/chauffage-bois-moins-consommer-moins-polluer',
    publisher: 'ADEME',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Entretien, ramonage et limites des bûches chimiques.',
  },
  co: {
    title: 'Prévenir les intoxications au monoxyde de carbone',
    url: 'https://sante.gouv.fr/sante-et-environnement/batiments/article/intoxications-au-monoxyde-de-carbone',
    publisher: 'Ministère de la Santé',
    checkedAt: '2026-10-17',
    access: 'partial',
    scope: 'Symptômes et conduite à tenir consultés dans l’extrait indexé.',
    limitation:
      'Protection anti-robot à l’ouverture ; les guides utilisent les sources accessibles de Santé publique France.',
  },
  coPdf: {
    title: 'Communiqué officiel — Intoxications au monoxyde de carbone',
    url: 'https://sante.gouv.fr/IMG/pdf/communique_de_presse_intoxication_monoxyde_carbone.pdf',
    publisher: 'Ministère de la Santé',
    checkedAt: '2026-10-17',
    access: 'blocked',
    scope: 'Communiqué repéré dans les résultats ; téléchargement non obtenu.',
    limitation: 'Protection anti-robot à l’ouverture. Non utilisé pour valider un guide.',
  },
  prices: {
    title: 'Devis : information du consommateur',
    url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/devis',
    publisher: 'DGCCRF',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Information préalable et contenu du devis ; aucun barème de ramonage.',
  },
  consumer: {
    title: 'Choisir un professionnel pour un dépannage à domicile',
    url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/plomberie-serrurerie-chauffage-choisir-le-bon-professionnel-pour-un-depannage-domicile',
    publisher: 'DGCCRF',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Information précontractuelle, travaux et entretien incluant le ramonage.',
  },
  insurance: {
    title: 'Assurance habitation : incendie ou explosion',
    url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F21532',
    publisher: 'Service Public / DILA',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'Garanties et déclaration de sinistre ; pas de garantie universelle d’indemnisation.',
  },
  qualification: {
    title: 'Ramoneur : accès et exercice en France',
    url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F39046',
    publisher: 'Service Public Entreprendre / DILA',
    checkedAt: '2026-10-17',
    access: 'full',
    scope:
      'Qualifications, diplômes ou expérience reconnue. Ne prouve aucune qualification de l’entreprise du site.',
  },
  aude: {
    title: 'Règlement sanitaire départemental — Aude, article 31.6',
    url: 'https://www.aude.gouv.fr/Actions-de-l-Etat/Solidarite.-sante.-handicap-et-cohesion-sociale/Sante/Reglement-sanitaire-departemental/Reglement-sanitaire-departemental2',
    publisher: 'Préfecture de l’Aude',
    checkedAt: '2026-10-17',
    access: 'blocked',
    scope: 'Document local repéré, extrait indexé relatif au ramonage.',
    limitation:
      'Lecture intégrale, actualité et articulation des dispositions locales/nationales à confirmer auprès de la préfecture et de la mairie.',
  },
  po: {
    title: 'Règlement sanitaire départemental — Pyrénées-Orientales',
    url: 'https://www.pyrenees-orientales.gouv.fr/contenu/telechargement/31352/223886/file/reglement_sanitaire_departemental-1.pdf',
    publisher: 'Préfecture des Pyrénées-Orientales',
    checkedAt: '2026-10-17',
    access: 'blocked',
    scope: 'PDF officiel repéré ; aucune règle locale présentée comme définitivement vérifiée.',
    limitation:
      'Téléchargement inaccessible avec l’outil ; version applicable et prescriptions municipales à confirmer.',
  },
  bistre: {
    title: 'Spécifications techniques d’entretien — arrêté du 20 juillet 2023',
    url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000047873344',
    publisher: 'Légifrance',
    checkedAt: '2026-10-17',
    access: 'blocked',
    scope: 'Source de travail repérée ; ne suffit pas à valider les méthodes de débistrage.',
    limitation:
      'Lecture intégrale indisponible. Source technique spécifique et revue métier nécessaires pour les articles spécialisés.',
  },
  google: {
    title: 'AI features and your website',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
    publisher: 'Google Search Central',
    checkedAt: '2026-10-17',
    access: 'full',
    scope:
      'HTML accessible, SEO fondamental, données structurées cohérentes et absence de garantie de visibilité.',
  },
  openai: {
    title: 'Overview of OpenAI Crawlers',
    url: 'https://developers.openai.com/api/docs/bots',
    publisher: 'OpenAI',
    checkedAt: '2026-10-17',
    access: 'full',
    scope: 'OAI-SearchBot pour la recherche et GPTBot pour l’entraînement : réglages indépendants.',
  },
};
