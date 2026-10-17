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
    ],
    source: 'https://geo.api.gouv.fr/communes/11262',
    reviewedAt: '2026-10-17',
  },
};
