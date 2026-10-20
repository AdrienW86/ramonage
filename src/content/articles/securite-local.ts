import { defineGuide } from '../editorial-types';
export const safetyLocalGuides = [
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'conduit-encrasse',
    title: 'Comment reconnaître les signes d’un conduit à faire examiner ?',
    category: 'ramonage-entretien',
    intent: 'Qualifier des signes sans diagnostic de bouchon.',
    intro:
      'Fumées inhabituelles, fonctionnement modifié ou dépôts signalés doivent être décrits à un professionnel. Aucun signe pris isolément ne permet d’établir l’état de la totalité du conduit. L’absence de symptôme ne dispense pas du ramonage.',
    sections: [
      {
        title: 'Faire une description concrète',
        text: 'Indiquez ce qui se passe, où et depuis quand : à l’allumage, lors du chargement ou pendant la marche normale. Mentionnez les messages d’erreur et les interventions récentes. Évitez de remplacer ces observations par un diagnostic non établi, tel que « conduit bouché » ou « mauvais tubage ».',
      },
      {
        title: 'Ne pas chercher un accès risqué pour confirmer',
        text: 'N’introduisez pas d’outil dans un conduit inconnu et ne montez pas sur la toiture. R1331-70 définit l’opération professionnelle visant les parois et la vacuité ; un regard depuis le foyer ne couvre pas ce périmètre. Faites préciser les parties accessibles et les limites de l’examen.',
      },
      {
        title: 'En présence d’un danger, interrompre le raisonnement de devis',
        text: 'Des fumées dans le logement ou un incident ne sont pas une simple demande d’entretien différé. Mettez les personnes à l’abri et faites évaluer la situation. En cas de feu, appelez le 18 ou le 112 ; après accident, R1331-76 encadre l’examen avant reprise.',
      },
    ],
    example: {
      title: 'Une observation après travaux',
      text: 'Signalez la nature et la date des travaux ainsi que l’évolution constatée. Cela permet de documenter la demande sans désigner à distance une cause ou une responsabilité.',
    },
    faq: [
      {
        q: 'Un conduit sans odeur est-il forcément libre ?',
        a: 'Non. L’absence d’odeur n’établit pas la vacuité sur toute sa longueur.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Puis-je rallumer pour montrer le problème ?',
        a: 'Ne provoquez pas un fonctionnement suspect ; décrivez les observations déjà faites et demandez l’avis du professionnel.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['frequency', 'common'],
    relatedGuides: [
      'cheminee-refoule',
      'ramonage-entretien-inspection',
      'securite-et-monoxyde-de-carbone',
    ],
    relatedServices: ['inspection-conduits', 'ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'cheminee-refoule',
    title: 'Pourquoi ma cheminée refoule-t-elle de la fumée ?',
    category: 'cheminees-inserts',
    intent: 'Orienter un refoulement vers un examen plutôt qu’une recette.',
    intro:
      'Un refoulement a plusieurs causes possibles et ne se diagnostique pas à distance. Signalez le contexte et suspendez l’utilisation douteuse. Le ramonage peut être nécessaire sans constituer, à lui seul, la réponse à tous les problèmes d’évacuation.',
    sections: [
      {
        title: 'Le contexte compte autant que le symptôme',
        text: 'Notez le moment où les fumées reviennent et les changements récents dans le logement ou l’installation. Un échange fondé sur cette chronologie est plus utile qu’une recherche immédiate de pièce à acheter. Ne rallumez pas pour répéter la démonstration.',
      },
      {
        title: 'Ne pas confondre nettoyage et recherche de cause',
        text: 'Le ramonage répond à un périmètre défini par R1331-70. Demandez ensuite quels examens sont utiles si le problème dépasse les dépôts ou persiste. L’ADEME cite notamment l’air disponible et les interactions avec la ventilation parmi les points à vérifier, sans que cela identifie la cause chez vous.',
        sourceKeys: ['wood'],
      },
      {
        title: 'Faire définir les vérifications avant une modification',
        text: 'Un ajout en sortie de conduit, une modification d’air ou de réglage ne doit pas être choisi au hasard. Faites identifier le système et demandez un avis professionnel. Le site ne fournit pas de calcul de dimensionnement, de réglage universel ou de promesse de suppression du refoulement.',
      },
    ],
    example: {
      title: 'Un symptôme apparu après une modification du logement',
      text: 'Indiquez la date et la nature de la modification. Ce renseignement oriente les questions du professionnel sans démontrer automatiquement une relation de cause à effet.',
    },
    faq: [
      {
        q: 'Ramoner résout-il tous les refoulements ?',
        a: 'Non. Il faut distinguer le nettoyage du conduit et les autres vérifications nécessaires pour identifier le problème.',
        sourceKeys: ['frequency', 'wood'],
      },
      {
        q: 'Puis-je modifier moi-même la sortie du conduit ?',
        a: 'Ne choisissez pas une modification technique sans évaluation de l’installation et des règles applicables.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'wood'],
    relatedGuides: ['ameliorer-tirage', 'conduit-encrasse', 'securite-et-monoxyde-de-carbone'],
    relatedServices: ['inspection-conduits', 'ramonage-cheminee'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ameliorer-tirage',
    title: 'Comment faire vérifier le tirage d’une cheminée ?',
    category: 'cheminees-inserts',
    intent: 'Préparer un diagnostic de tirage sans conseil de modification non fondé.',
    intro:
      'Un tirage jugé insuffisant ou excessif doit être évalué avec l’appareil et son conduit. Demandez un diagnostic adapté avant de changer un réglage, un accessoire ou une arrivée d’air. Un nombre universel de pascals ne serait pas pertinent sans le modèle et sa notice.',
    sections: [
      {
        title: 'Dire ce que vous constatez',
        text: 'Le mot « tirage » peut recouvrir des phénomènes différents dans une demande : fumées dans la pièce, feu difficile à maîtriser ou comportement inhabituel. Décrivez le phénomène réel, sa date d’apparition et les opérations déjà réalisées. N’exagérez pas le feu pour tester la réaction.',
      },
      {
        title: 'Réunir les références nécessaires',
        text: 'Le modèle, la notice, les documents de pose et les attestations donnent un cadre au professionnel. Il peut ensuite préciser les observations ou mesures utiles. Pour les poêles à granulés, l’ADEME décrit un dimensionnement à établir par l’installateur : ce principe ne doit pas devenir un réglage à copier sur tous les appareils.',
        sourceKeys: ['pellets'],
      },
      {
        title: 'Faire expliquer le résultat et les suites',
        text: 'Demandez si l’examen a porté sur le conduit, l’air ou l’appareil et quelles limites subsistent. Une opération de ramonage ou une image caméra ne prouve pas, seule, l’adéquation de tout le système. Tout travail proposé doit être décrit et chiffré avant accord.',
      },
    ],
    example: {
      title: 'Une valeur de réglage trouvée sur un forum',
      text: 'Même si elle concerne une marque semblable, elle ne prouve pas sa compatibilité avec votre modèle et votre installation. Transmettez plutôt la notice exacte au professionnel.',
    },
    faq: [
      {
        q: 'Plus de tirage est-il toujours préférable ?',
        a: 'Non. Le fonctionnement doit être adapté à l’appareil ; un réglage sans évaluation peut être inapproprié.',
        sourceKeys: ['pellets'],
      },
      {
        q: 'Un accessoire en toiture suffit-il ?',
        a: 'Aucun accessoire ne doit être présenté comme une solution universelle avant diagnostic.',
        sourceKeys: ['pellets', 'prices'],
      },
    ],
    sourceKeys: ['pellets', 'frequency', 'prices'],
    relatedGuides: ['cheminee-refoule', 'vitre-poele-noircit', 'ramonage-entretien-inspection'],
    relatedServices: ['inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'prevenir-feu-cheminee',
    title: 'Comment prévenir un feu de cheminée et réagir après un incident ?',
    category: 'securite',
    intent: 'Délimiter prévention, urgence et remise en service.',
    intro:
      'Respectez les consignes de l’appareil et son calendrier d’entretien. Si un feu de cheminée est suspecté, éloignez-vous du danger et appelez le 18 ou le 112. Après un sinistre, le refroidissement ne suffit pas à autoriser une nouvelle utilisation.',
    sections: [
      {
        title: 'Prévenir par un suivi documenté',
        text: 'Le ramonage réglementaire porte sur les parois et la vacuité du conduit. Gardez la date et le périmètre de l’opération et faites examiner toute anomalie nouvelle. N’utilisez jamais une forte flambée pour tenter de nettoyer un conduit ; R1331-70 interdit le feu comme procédé de ramonage.',
      },
      {
        title: 'Face à un incident : protéger les personnes',
        text: 'Ne montez pas sur le toit et ne tentez pas une manipulation du conduit pour vérifier ce qui brûle. Appelez les secours et suivez leurs consignes. Laissez les opérations de lutte contre l’incendie aux intervenants compétents. Ce guide ne propose pas de technique d’extinction à réaliser soi-même.',
      },
      {
        title: 'Après : un examen avant la reprise',
        text: 'R1331-76 interdit l’usage après accident ou sinistre dans l’attente de la remise en état ou du remplacement et prévoit un examen qualifié. Conservez les rapports, prévenez l’assureur et faites préciser les travaux et documents nécessaires. Une photo de foyer propre n’autorise pas le rallumage.',
      },
    ],
    example: {
      title: 'Le lendemain d’un incident',
      text: 'Même si aucune fumée n’est visible et si le conduit a refroidi, organisez la suite avec les professionnels et l’assureur. Ne remettez pas l’appareil en marche pour vérifier qu’il « fonctionne encore ».',
    },
    faq: [
      {
        q: 'Quel numéro appeler pour un feu ?',
        a: 'Le 18 ou le 112 ; suivez les consignes des secours.',
        sourceKeys: ['emergency'],
      },
      {
        q: 'Un ramonage suffit-il forcément après le sinistre ?',
        a: 'Non. L’examen et l’état du conduit déterminent les suites dans le cadre de R1331-76.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['common', 'frequency', 'emergency'],
    relatedGuides: [
      'ramonage-assurance',
      'risques-sans-ramonage',
      'securite-et-monoxyde-de-carbone',
    ],
    relatedServices: ['inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'securite-et-monoxyde-de-carbone',
    title: 'Monoxyde de carbone : quels signes et quels réflexes ?',
    category: 'securite',
    intent: 'Reconnaître une suspicion et suivre les gestes officiels sans retard.',
    featured: true,
    intro:
      'Le monoxyde de carbone est un gaz imperceptible. Maux de tête, nausées, vertiges ou malaise, notamment chez plusieurs occupants, doivent alerter. En cas de suspicion, aérez et arrêtez les appareils si possible sans vous exposer, évacuez et appelez le 15, le 18 ou le 112.',
    sections: [
      {
        title: 'Ne pas attendre une odeur caractéristique',
        text: 'Une absence d’odeur ne permet pas d’exclure ce gaz. Les symptômes peuvent être trompeurs : ne cherchez pas à confirmer vous-même la cause avant de vous mettre à l’abri. Transmettez aux secours les circonstances et le lieu, puis suivez leurs instructions.',
      },
      {
        title: 'L’urgence passe avant la demande de devis',
        text: 'Un formulaire de contact n’est pas un canal de secours. Ne restez pas dans le logement pour compléter un message ou recueillir une image. Attendez l’accord des secours avant de réintégrer les lieux. Les personnes sourdes ou malentendantes peuvent utiliser le 114 selon les modalités du service.',
      },
      {
        title: 'Organiser la suite de l’incident',
        text: 'Après la prise en charge d’urgence, faites déterminer les vérifications nécessaires et conservez les documents. Le rôle du professionnel doit être défini : appareil, conduit et ventilation ne doivent pas être confondus. Un entretien programmé ne garantit pas à lui seul l’absence de toute autre anomalie.',
      },
    ],
    example: {
      title: 'Plusieurs personnes indisposées dans la même pièce',
      text: 'Ne réduisez pas cette coïncidence à un inconfort passager. Sortez du contexte d’exposition et contactez les secours plutôt que poursuivre une recherche de panne dans le logement.',
    },
    faq: [
      {
        q: 'Le monoxyde de carbone a-t-il une odeur ?',
        a: 'Non. Il ne peut pas être repéré par l’odorat.',
        sourceKeys: ['publicHealth'],
      },
      {
        q: 'Puis-je rentrer dès que les symptômes diminuent ?',
        a: 'Attendez l’avis des secours ; une amélioration hors du logement ne prouve pas que les lieux sont sûrs.',
        sourceKeys: ['coBrochure'],
      },
    ],
    sourceKeys: ['publicHealth', 'coBrochure', 'emergency'],
    relatedGuides: ['prevenir-feu-cheminee', 'cheminee-refoule', 'conduit-encrasse'],
    relatedServices: ['inspection-conduits'],
  }),
  ...(
    [
      {
        slug: 'reglementation-pyrenees-orientales',
        name: 'Pyrénées-Orientales',
        code: '66',
        pole: 'Perpignan',
        source: 'po',
      },
      { slug: 'reglementation-aude', name: 'Aude', code: '11', pole: 'Narbonne', source: 'aude' },
    ] as const
  ).map((d) =>
    defineGuide({
      dateVerified: null,
      slug: d.slug,
      title: `Ramonage dans ${d.code === '11' ? 'l’Aude' : 'les Pyrénées-Orientales'} : comment vérifier la réglementation locale ?`,
      category: 'reglementation',
      intent: `Vérifier les prescriptions locales ${d.code} sans extrapoler une règle départementale.`,
      status: 'brouillon',
      verificationNote:
        'Document préfectoral identifié mais accès intégral non obtenu. Validité et articulation avec le droit national et les arrêtés municipaux à confirmer. Aucune fréquence locale définitive publiée.',
      intro: `Le cadre national s’applique, mais il faut vérifier les prescriptions applicables à votre adresse dans ${d.code === '11' ? 'l’Aude' : 'les Pyrénées-Orientales'}. Un document préfectoral a été identifié ; sa consultation intégrale et son actualité n’ont pas pu être confirmées. Ce guide reste un brouillon.`,
      sections: [
        {
          title: 'Le socle national vérifié',
          text: 'R1331-71 prévoit au moins tous les douze mois pour un appareil individuel, un régime distinct pour le collectif et la possibilité de prescriptions locales plus fréquentes. Ce rappel national ne constitue pas la confirmation d’une fréquence dans votre commune.',
          sourceKeys: ['frequency'],
        },
        {
          title: `Le document local à contrôler dans le ${d.code}`,
          text:
            d.code === '11'
              ? 'La page de la préfecture de l’Aude consacrée au règlement sanitaire départemental a été repérée, avec un extrait indexé de l’article 31.6. La lecture complète et la vérification de son articulation actuelle avec le Code sont nécessaires. Le guide ne transforme pas cet extrait en consigne définitive.'
              : 'Un PDF du règlement sanitaire départemental est référencé sur le site de la préfecture des Pyrénées-Orientales. Le téléchargement n’a pas été accessible avec les outils de vérification. L’ancienneté d’un document ou son adresse officielle ne suffisent pas à établir son applicabilité actuelle.',
        },
        {
          title: `Poser une demande précise autour de ${d.pole}`,
          text: 'Indiquez à la mairie l’adresse concernée, l’appareil, le combustible et le caractère individuel ou collectif. Demandez la référence du texte, sa version applicable et les éventuelles prescriptions pendant la chauffe. Conservez la réponse et transmettez-la au professionnel. La présence de votre commune dans notre référentiel ne confirme pas sa desserte.',
        },
      ],
      example: {
        title: 'Une vérification locale traçable',
        text: `Pour une demande à ${d.pole}, notez le service contacté et la référence du texte communiqué. Ne remplacez pas cette démarche par la fréquence annoncée sur le site d’un prestataire d’une autre commune.`,
      },
      faq: [
        {
          q: `Ce guide confirme-t-il une fréquence dans le ${d.code} ?`,
          a: 'Non. Seul le socle national est exposé ici ; les dispositions locales restent à confirmer.',
          sourceKeys: ['frequency', d.source],
        },
        {
          q: `Le référentiel prouve-t-il la desserte à ${d.pole} ?`,
          a: 'Non. Les données géographiques et les règles d’entretien sont distinctes de la couverture commerciale.',
          sourceKeys: [d.source],
        },
      ],
      sourceKeys: ['frequency', d.source],
      relatedGuides: ['obligations-et-frequence', 'frequence-ramonage', 'attestation-ramonage'],
      relatedServices: ['ramonage-conduits'],
    }),
  ),
];
