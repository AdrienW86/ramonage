export type LocalEditorial = {
  approved: boolean;
  angle: string;
  intro: string;
  sections: { title: string; text: string }[];
  source: string;
  reviewedAt: string;
};
// La validation éditoriale ne remplace pas la confirmation de desserte dans communes.json.
export const localEditorial: Record<string, LocalEditorial> = {
  '66136': {
    approved: false,
    angle: 'Préparer la visite à Perpignan',
    intro:
      'Vous souhaitez faire entretenir un conduit à Perpignan ? Le code INSEE 66136 identifie votre commune dans notre référentiel officiel. Le premier échange sert à préciser votre installation, son accès et la nature des dépôts avant de confirmer la possibilité d’une intervention.',
    sections: [
      {
        title: 'En immeuble : identifier le conduit concerné',
        text: 'Avant une demande, réunissez la référence de l’appareil, l’étage du logement et les informations du syndic sur les conduits individuels ou collectifs. Ces éléments déterminent les accès à prévoir.',
      },
      {
        title: 'Une demande centrée sur votre appareil',
        text: 'Précisez si vous utilisez un foyer ouvert, un insert ou un poêle. Une demande de débistrage nécessite une évaluation distincte : l’aspect des dépôts et l’état du conduit orientent le diagnostic.',
      },
      {
        title: 'Préparer un dossier pour un conduit individuel ou collectif',
        text: 'À Perpignan, la donnée communale ne permet pas de connaître le type de votre installation. Demandez au gestionnaire si le conduit est individuel ou collectif et récupérez les anciennes attestations. Cette distinction change le cadre national de fréquence et l’organisation du passage ; elle ne prouve aucune particularité de tous les immeubles de la commune.',
      },
      {
        title: 'Vérifier une prescription locale sans la déduire du code postal',
        text: 'La présence du code postal dans le référentiel ne détermine pas la règle locale de ramonage. Demandez à la mairie ou à la préfecture des Pyrénées-Orientales la référence du texte applicable à votre adresse. Le guide départemental préparé sur ce site reste en brouillon tant que cette vérification est incomplète.',
      },
    ],
    source: 'https://geo.api.gouv.fr/communes/66136',
    reviewedAt: '2026-10-17',
  },
  '11262': {
    approved: false,
    angle: 'Organiser l’entretien à Narbonne',
    intro:
      'À Narbonne, commune identifiée par le code INSEE 11262, préparez votre demande en indiquant l’appareil utilisé et la date du dernier entretien connu. La desserte et la prestation sont à confirmer avant toute prise de rendez-vous.',
    sections: [
      {
        title: 'Connaître l’historique avant de reprendre un feu',
        text: 'Un logement occupé par intermittence ou un conduit inutilisé depuis longtemps mérite une vérification avant remise en service. Rassemblez les anciens documents d’entretien et signalez toute modification de l’installation.',
      },
      {
        title: 'Distinguer entretien courant et dépôts durs',
        text: 'Une suie poudreuse et un dépôt noir vitrifié ne se traitent pas de la même manière. Décrivez les symptômes constatés sans démonter l’appareil ; une évaluation permettra de préciser l’intervention adaptée.',
      },
      {
        title: 'Reconstituer les périodes d’utilisation avant la reprise',
        text: 'Pour une demande à Narbonne, indiquez si l’appareil a réellement été inutilisé sur une période continue et quels documents le décrivent. Une résidence occupée par intermittence ne signifie pas automatiquement une absence totale de feu. Le professionnel peut ainsi distinguer calendrier courant, reprise après inactivité et examen nécessaire après travaux.',
      },
      {
        title: 'Un devis qui sépare les opérations',
        text: 'Demandez de distinguer ramonage, entretien de l’appareil et éventuel diagnostic. Le document local de l’Aude a été repéré mais son articulation actuelle avec les règles nationales reste à confirmer ; aucune fréquence propre à Narbonne ni délai d’intervention n’est affirmé. La desserte commerciale reste également à valider.',
      },
    ],
    source: 'https://geo.api.gouv.fr/communes/11262',
    reviewedAt: '2026-10-17',
  },
};
