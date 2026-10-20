import { defineGuide } from '../editorial-types';
export const practicalGuides = [
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'prix-ramonage',
    title: 'Combien coûte un ramonage ? Les éléments à comparer',
    category: 'questions-pratiques',
    intent: 'Comprendre un prix sans inventer de barème.',
    intro:
      'Le montant doit être confirmé par un devis correspondant à votre installation. Aucun tarif de l’entreprise n’est encore validé. Comparez surtout le périmètre, le déplacement, les accès et les opérations incluses, plutôt qu’un prix isolé.',
    sections: [
      {
        title: 'Décrire le même besoin à chaque prestataire',
        text: 'Indiquez l’appareil, le combustible, les conduits concernés et les contraintes d’accès. Demandez si le raccordement est inclus et quels documents seront remis. Sans cette description commune, deux montants peuvent couvrir des opérations différentes : ramonage du conduit, entretien de l’appareil ou examen complémentaire.',
      },
      {
        title: 'Lire le détail avant de donner son accord',
        text: 'La DGCCRF rappelle l’importance de l’information préalable pour les travaux et l’entretien à domicile. Vérifiez l’identité du prestataire, le prix total et les éventuels frais. Demandez comment sont traitées les opérations supplémentaires découvertes sur place. N’acceptez pas de supposer que tout supplément est inclus dans une formule commerciale vague.',
      },
      {
        title: 'Séparer les prestations supplémentaires',
        text: 'Un dépôt dur, un accès particulier ou un diagnostic ne doit pas être chiffré à distance comme s’il s’agissait toujours d’un entretien courant. Faites préciser les conditions d’évaluation et obtenez votre accord sur le périmètre. Ce guide ne fournit ni fourchette de marché non sourcée ni promesse de devis gratuit.',
      },
    ],
    example: {
      title: 'Deux offres difficilement comparables',
      text: 'L’une mentionne seulement « entretien », l’autre décrit le conduit, le raccordement et le document remis. Demandez le détail de la première avant de conclure qu’elle est moins chère pour le même travail.',
    },
    faq: [
      {
        q: 'Le déplacement est-il toujours compris ?',
        a: 'Il faut le vérifier dans l’information tarifaire et le devis ; ne le présumez pas.',
        sourceKeys: ['consumer'],
      },
      {
        q: 'Le site affiche-t-il un tarif validé ?',
        a: 'Non. Les tarifs commerciaux restent à renseigner après confirmation par l’entreprise.',
        sourceKeys: ['prices'],
      },
    ],
    sourceKeys: ['prices', 'consumer'],
    relatedGuides: ['prix-debistrage', 'choisir-ramoneur', 'ramonage-entretien-inspection'],
    relatedServices: ['ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'duree-ramonage',
    title: 'Combien de temps dure un ramonage ?',
    category: 'questions-pratiques',
    intent: 'Préparer la disponibilité sans durée chiffrée fictive.',
    intro:
      'La durée ne peut pas être garantie sans connaître l’installation, les accès et le périmètre. Demandez une estimation au professionnel lors de la préparation ; un créneau annoncé ne doit pas masquer une opération supplémentaire nécessaire.',
    sections: [
      {
        title: 'Distinguer durée sur place et durée d’action mécanique',
        text: 'La visite comprend aussi l’échange initial, la préparation, les protections, le rangement et les explications. Chronométrer seulement le passage de la brosse ne décrit donc pas toute l’intervention. Demandez quelle disponibilité prévoir pour votre présence et si une autre personne doit faciliter l’accès.',
      },
      {
        title: 'Donner les informations qui évitent une visite mal préparée',
        text: 'Précisez le nombre de conduits, le modèle de l’appareil, les accès connus et les difficultés déjà signalées. Indiquez si le logement est en immeuble et si le syndic doit être informé. Ces renseignements ne déterminent pas un délai universel, mais permettent au professionnel d’annoncer ce qu’il peut raisonnablement organiser.',
      },
      {
        title: 'Si le besoin change sur place',
        text: 'Un obstacle ou un état inattendu peut conduire à revoir le périmètre. Demandez que les nouvelles opérations et leurs conditions soient expliquées avant accord. Le présent site n’annonce pas de délai d’urgence ou de durée forfaitaire, faute d’engagement commercial validé.',
      },
    ],
    example: {
      title: 'Une demande comportant deux appareils',
      text: 'Précisez dès la prise de contact qu’il existe un insert et un poêle. Une estimation fondée sur un seul conduit serait insuffisante pour organiser votre disponibilité.',
    },
    faq: [
      {
        q: 'Une durée très courte prouve-t-elle un mauvais travail ?',
        a: 'Le temps seul ne suffit pas à juger le périmètre et le résultat. Demandez les explications et les documents de l’opération.',
        sourceKeys: ['common'],
      },
      {
        q: 'L’inspection complémentaire est-elle incluse ?',
        a: 'Seulement si son périmètre est précisé. Clarifiez cette question au devis.',
        sourceKeys: ['prices'],
      },
    ],
    sourceKeys: ['common', 'prices'],
    relatedGuides: ['preparer-son-ramonage', 'prix-ramonage', 'ramonage-entretien-inspection'],
    relatedServices: ['ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'preparer-son-ramonage',
    title: 'Comment se déroule une intervention de ramonage ?',
    category: 'ramonage-entretien',
    intent: 'Préparer la venue et comprendre les étapes sans procédure de bricolage.',
    intro:
      'Une intervention se prépare par l’identification de l’appareil, des accès et du périmètre. Elle comprend l’action mécanique adaptée au conduit, le traitement des résidus et la restitution des observations. Le déroulement concret dépend de la configuration.',
    featured: true,
    sections: [
      {
        title: 'Avant la visite : rassembler et dégager',
        text: 'Préparez la notice et les anciens documents d’entretien. Décrivez les accès sans monter sur le toit. Arrêtez l’appareil suffisamment tôt selon les consignes du fabricant ; les éléments concernés doivent être refroidis. Libérez le passage et signalez les surfaces fragiles, les meubles proches et les contraintes de copropriété.',
      },
      {
        title: 'Pendant : comprendre ce qui est traité',
        text: 'Le professionnel choisit la méthode et l’accès compatibles avec le conduit. R1331-70 vise une action mécanique sur les parois, y compris le raccordement, et la vacuité sur la longueur. N’exigez pas un accès par le toit par principe : la configuration et les conditions de sécurité doivent guider la décision.',
      },
      {
        title: 'Après : faire préciser résultat et réserves',
        text: 'Demandez quels conduits ont été traités, quels points ont été observés et si une suite est nécessaire. R1331-75 encadre l’attestation ; elle ne certifie pas toutes les caractéristiques du système de chauffage. Si une opération n’a pas pu être accomplie, faites préciser sa limite et les conditions de reprise au lieu d’en déduire que l’appareil est utilisable.',
      },
    ],
    example: {
      title: 'Un insert dont l’accès est incertain',
      text: 'Transmettez la référence du modèle et indiquez que l’accès au raccordement n’est pas connu. Attendez les instructions du professionnel plutôt que démonter vous-même l’habillage.',
    },
    faq: [
      {
        q: 'Faut-il acheter du matériel avant la visite ?',
        a: 'Demandez au professionnel ce qu’il attend de vous. N’achetez pas d’outillage ou de produit pour préparer une opération dont la méthode n’est pas encore définie.',
        sourceKeys: ['prices'],
      },
      {
        q: 'Dois-je être présent ?',
        a: 'Les conditions d’accès et de présence sont à convenir avec le prestataire. Aucune organisation universelle n’est annoncée ici.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'prices'],
    relatedGuides: ['duree-ramonage', 'attestation-ramonage', 'quand-faire-ramoner'],
    relatedServices: ['ramonage-cheminee', 'ramonage-insert'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'quand-faire-ramoner',
    title: 'Quand faire ramoner sa cheminée ou son poêle ?',
    category: 'ramonage-entretien',
    intent: 'Organiser un calendrier lié à la dernière opération et à l’usage.',
    intro:
      'Choisissez la période à partir de la dernière attestation, des délais réglementaires et des éventuelles prescriptions locales. Avant une reprise après une longue inactivité, vérifiez les conditions prévues par R1331-71 ; ne vous fiez pas seulement à la saison.',
    sections: [
      {
        title: 'Partir de la dernière date connue',
        text: 'Relevez la date, l’appareil et le conduit sur l’attestation. Si la date est inconnue, demandez les documents à l’ancien occupant ou au gestionnaire puis organisez une évaluation. Une habitude comme « toujours à l’automne » ne suffit pas si elle crée un délai supérieur à celui applicable.',
      },
      {
        title: 'Prévoir une reprise sans urgence',
        text: 'Contactez le prestataire avant le prochain usage prévu et précisez l’historique. Pour certaines périodes d’inactivité totale, le Code prévoit le ramonage avant remise en service. Cette règle ne permet pas de supposer qu’un conduit inutilisé est sain : signalez aussi un sinistre, des travaux ou une modification.',
      },
      {
        title: 'Ne pas différer un problème au prochain rendez-vous',
        text: 'Un refoulement ou un incident doit être traité comme une question distincte de calendrier. Suspendez l’utilisation douteuse et demandez un avis qualifié. Après accident ou feu de cheminée, appliquez les conditions de R1331-76. Aucune disponibilité saisonnière particulière de l’entreprise n’est annoncée sans confirmation.',
      },
    ],
    example: {
      title: 'Un rappel utile',
      text: 'Après chaque passage, notez la prochaine échéance calculée avec la règle applicable, puis prévoyez de prendre contact avant cette date. Le rappel ne remplace pas une vérification en cas de changement d’usage.',
    },
    faq: [
      {
        q: 'L’été est-il une dispense de ramonage ?',
        a: 'Non. Le calendrier dépend des délais et de l’usage, avec les éventuelles exigences de passage pendant la chauffe.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Un conduit arrêté depuis longtemps peut-il être rallumé sans passage ?',
        a: 'Dans les cas d’inactivité visés par R1331-71, un ramonage est requis avant la nouvelle utilisation.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency', 'common'],
    relatedGuides: ['frequence-ramonage', 'preparer-son-ramonage', 'prevenir-feu-cheminee'],
    relatedServices: ['ramonage-cheminee'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'choisir-ramoneur',
    title: 'Comment choisir un ramoneur qualifié ?',
    category: 'questions-pratiques',
    intent: 'Vérifier identité, qualification et périmètre sans faux labels.',
    intro:
      'Vérifiez l’identité du prestataire, la qualification professionnelle de la personne qui intervient et le détail du devis. Un annuaire, un logo ou une promesse d’attestation ne remplacent pas ces vérifications.',
    sections: [
      {
        title: 'Une exigence de qualification, plusieurs voies possibles',
        text: 'R1331-74 impose une personne professionnellement qualifiée. La fiche officielle de Service Public Entreprendre décrit différentes voies d’accès au métier. Ne réduisez donc pas la vérification à un label commercial unique ; demandez une explication et un justificatif approprié à la situation de l’intervenant.',
      },
      {
        title: 'Un devis qui correspond à l’installation',
        text: 'Demandez le nom de l’entreprise, ses coordonnées, le périmètre et le prix avant accord. Faites distinguer conduit, appareil, inspection et éventuel traitement supplémentaire. Si un document est promis, demandez ce qu’il atteste. Ne présumez pas que l’entretien de chaudière et le ramonage de son conduit sont identiques.',
      },
      {
        title: 'Une présentation commerciale vérifiable',
        text: 'Comparez les informations données avec les documents disponibles. Une qualification ou assurance doit correspondre à l’activité réellement concernée.',
      },
    ],
    example: {
      title: 'Une annonce avec un logo rassurant',
      text: 'Avant de réserver, demandez qui réalisera l’intervention et le détail de ce qui est inclus. Le visuel d’une publicité ne permet pas, seul, d’établir l’identité ou la qualification de cette personne.',
    },
    faq: [
      {
        q: 'Un label RGE est-il la même chose qu’une qualification de ramoneur ?',
        a: 'Ne confondez pas un dispositif lié à certaines aides/travaux et l’exigence professionnelle applicable au ramonage.',
        sourceKeys: ['qualification', 'common'],
      },
      {
        q: 'Puis-je demander le détail avant de m’engager ?',
        a: 'Oui. L’information précontractuelle sert précisément à comprendre l’offre avant accord.',
        sourceKeys: ['consumer'],
      },
    ],
    sourceKeys: ['common', 'qualification', 'consumer'],
    relatedGuides: ['prix-ramonage', 'attestation-ramonage', 'ramoner-soi-meme'],
    relatedServices: ['ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ramonage-entretien-inspection',
    title: 'Ramonage, entretien et inspection : quelles différences ?',
    category: 'ramonage-entretien',
    intent: 'Choisir une demande selon l’objectif de l’opération.',
    intro:
      'Le ramonage nettoie mécaniquement le conduit ; l’entretien concerne l’appareil selon son régime et sa notice ; l’inspection recherche des observations dans un périmètre défini. Ces opérations peuvent se compléter, sans être interchangeables.',
    sections: [
      {
        title: 'Le ramonage : l’intérieur du conduit',
        text: 'R1331-70 définit l’action mécanique sur les parois et la vacuité du parcours, raccordement compris. Une observation vidéo seule ne réalise pas ce nettoyage. À l’inverse, l’action de nettoyage ne constitue pas automatiquement un examen de chaque caractéristique constructive de l’installation.',
      },
      {
        title: 'L’entretien : préciser l’appareil et ses composants',
        text: 'La visite demandée pour un poêle doit être décrite séparément du conduit. Indiquez la marque et le modèle et demandez la liste des opérations retenues. Une tâche utilisateur de nettoyage courant ne doit pas être présentée comme une maintenance professionnelle complète. Le devis permet de comparer le même objet entre prestataires.',
      },
      {
        title: 'L’inspection : une question et des limites',
        text: 'Demandez ce que l’on cherche à observer, quelles parties sont accessibles et quel compte rendu sera fourni. Une caméra n’implique pas à elle seule un essai d’étanchéité ou une certification de conformité.',
      },
    ],
    example: {
      title: 'Une fumée qui revient après un nettoyage',
      text: 'Demander seulement « un autre ramonage » peut ne pas préciser la cause à examiner. Signalez le symptôme et l’intervention précédente pour que le professionnel définisse les investigations utiles.',
    },
    faq: [
      {
        q: 'Une caméra remplace-t-elle le nettoyage ?',
        a: 'Non. Voir l’intérieur du conduit et agir mécaniquement sur ses parois sont deux opérations différentes.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Le devis doit-il préciser les opérations ?',
        a: 'Demandez une description qui permette de comprendre ce qui est inclus et les éventuels compléments.',
        sourceKeys: ['prices'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'prices'],
    relatedGuides: ['preparer-son-ramonage', 'conduit-encrasse', 'prix-ramonage'],
    relatedServices: ['ramonage-conduits', 'inspection-conduits'],
  }),
];
