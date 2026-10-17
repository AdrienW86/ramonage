export const sources = {
  obligations: {
    title: 'Service Public — Feu de cheminée et ramonage',
    url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F32437',
  },
  decree: {
    title: 'Légifrance — Décret n° 2023-641 du 20 juillet 2023',
    url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047867286',
  },
  co: {
    title: 'Ministère de la Santé — Prévenir les intoxications au monoxyde de carbone',
    url: 'https://sante.gouv.fr/sante-et-environnement/batiments/article/intoxications-au-monoxyde-de-carbone',
  },
};
export const guides = [
  {
    slug: 'obligations-et-frequence',
    title: 'Ramonage : les bons repères pour votre entretien',
    category: 'Réglementation',
    image: 'cheminee',
    intro: 'Comprendre les règles générales, puis vérifier celles de votre installation.',
    sections: [
      {
        title: 'Un socle national à connaître',
        text: 'Le cadre national prévoit un ramonage au moins une fois tous les douze mois. Des règles locales peuvent imposer une fréquence supérieure. Vérifiez auprès de votre mairie ou de la préfecture, ainsi que la notice de l’appareil et les conditions de votre assurance.',
      },
      {
        title: 'Conserver les documents',
        text: 'Le professionnel remet une attestation dans le cadre réglementaire applicable. Sa délivrance par cette entreprise reste à confirmer avec ses prestations et qualifications. Le devis doit préciser la nature exacte de l’intervention.',
      },
      {
        title: 'Préparer un entretien régulier',
        text: 'Notez les dates d’intervention et gardez les factures et observations. En cas de changement de combustible ou d’appareil, demandez une nouvelle évaluation de l’installation.',
      },
    ],
    sourceKeys: ['obligations', 'decree'] as const,
  },
  {
    slug: 'comprendre-le-bistre',
    title: 'Bistre et suie : reconnaître la différence',
    category: 'Comprendre son conduit',
    image: 'bistre',
    intro: 'Un dépôt noir ne dit pas tout : sa consistance et son adhérence orientent l’examen.',
    sections: [
      {
        title: 'Des dépôts de nature différente',
        text: 'La suie est souvent poudreuse ; des dépôts goudronneux peuvent devenir durs et adhérents. Une photo ne suffit pas à évaluer leur profondeur ni l’état du conduit.',
      },
      {
        title: 'Ramonage et débistrage',
        text: 'Le ramonage agit mécaniquement sur les dépôts accessibles. Le débistrage est une opération spécifique pour les dépôts tenaces. Sa faisabilité dépend notamment du matériau et de la résistance du conduit.',
      },
      {
        title: 'Réduire les causes d’encrassement',
        text: 'Respectez la notice du fabricant, utilisez le combustible adapté et évitez le fonctionnement durable au ralenti si le fabricant le déconseille. Faites examiner les problèmes de tirage ou de condensation.',
      },
    ],
    sourceKeys: ['decree'] as const,
  },
  {
    slug: 'securite-et-monoxyde-de-carbone',
    title: 'Les signes qui doivent vous faire réagir',
    category: 'Sécurité',
    image: 'poele-bois',
    intro: 'Fumées, tirage inhabituel, malaise : sachez quand interrompre l’utilisation.',
    sections: [
      {
        title: 'Le monoxyde de carbone est invisible',
        text: 'Ce gaz est inodore et peut provoquer maux de tête, nausées, vertiges ou malaise. Plusieurs personnes présentant des symptômes dans un même logement doivent alerter.',
      },
      {
        title: 'En cas de suspicion d’intoxication',
        text: 'Aérez si cela peut être fait sans vous exposer, arrêtez les appareils si possible et évacuez. Appelez les secours au 15, au 18 ou au 112. Ne rentrez pas avant l’avis d’un professionnel.',
      },
      {
        title: 'Prévenir au quotidien',
        text: 'N’obstruez jamais les entrées d’air. Respectez les conditions d’utilisation et d’entretien des appareils. Un ramonage ne dispense pas d’une ventilation adaptée ni de la maintenance prévue par le fabricant.',
      },
    ],
    sourceKeys: ['co'] as const,
  },
  {
    slug: 'preparer-son-ramonage',
    title: 'Bien préparer la venue d’un ramoneur',
    category: 'Conseils pratiques',
    image: 'outillage',
    intro: 'Quelques informations et un accès dégagé facilitent la préparation de l’intervention.',
    sections: [
      {
        title: 'Réunir les informations utiles',
        text: 'Notez le modèle de l’appareil, le combustible, la date du dernier ramonage et les difficultés observées. Indiquez l’étage et les accès possibles, sans monter sur le toit.',
      },
      {
        title: 'Laisser refroidir et dégager',
        text: 'Arrêtez suffisamment tôt votre appareil selon sa notice. Les cendres doivent être entièrement froides. Dégagez la zone autour du foyer et signalez les surfaces fragiles.',
      },
      {
        title: 'Poser les bonnes questions',
        text: 'Demandez ce qui est compris : conduit, appareil, protection, nettoyage et documents de fin d’intervention. Toute opération supplémentaire doit être clarifiée avant sa réalisation.',
      },
    ],
    sourceKeys: ['obligations'] as const,
  },
];
