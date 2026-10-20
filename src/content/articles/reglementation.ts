import { defineGuide } from '../editorial-types';
export const regulationGuides = [
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'obligations-et-frequence',
    title: 'Le ramonage est-il obligatoire en 2026 ?',
    category: 'reglementation',
    intent: 'Comprendre le socle national et les vérifications locales.',
    featured: true,
    intro:
      'Oui. Le ramonage mécanique des conduits de fumée et de raccordement est obligatoire. Pour un appareil individuel, le socle national est au moins tous les douze mois ; des prescriptions locales peuvent imposer davantage. Un appareil collectif relève d’un calendrier distinct.',
    sections: [
      {
        title: 'L’obligation porte sur le conduit et le raccordement',
        text: 'Les articles R1331-70 et R1331-71 du Code de la santé publique définissent un nettoyage mécanique de la paroi intérieure et une vérification des accessoires. Nettoyer la vitre ou vider les cendres n’accomplit pas cette opération. Une cheminée à foyer ouvert et un poêle ne sont donc pas dispensés de ramonage au motif qu’ils semblent fonctionner normalement.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Qualifier votre situation avant de fixer la fréquence',
        text: 'Repérez si le conduit dessert un appareil individuel ou collectif, quel combustible est utilisé et quelle est la date du dernier passage. Pour les installations collectives, le texte prévoit au moins six mois entre deux opérations, avec une intervention pendant la chauffe, sous réserve de l’exception décrite pour certains conduits au gaz. Ne transposez pas ce régime à un poêle individuel.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Compléter la règle nationale par la règle locale',
        text: 'Demandez à la mairie ou à la préfecture la référence du texte applicable à votre adresse. Un conseil d’entretien du fabricant et une exigence de l’assureur doivent également être examinés, chacun dans son domaine. Conservez une trace écrite de ces vérifications et de vos attestations ; ce guide ne remplace pas l’examen de votre installation.',
      },
    ],
    example: {
      title: 'Un calendrier fondé sur des documents',
      text: 'Pour un poêle individuel, commencez par relever la date de la dernière attestation. Demandez ensuite à votre mairie si une prescription locale impose une fréquence supplémentaire. Cette méthode évite de choisir arbitrairement « une » ou « deux » interventions.',
    },
    faq: [
      {
        q: 'Un foyer ouvert est-il concerné ?',
        a: 'Oui pour le ramonage de son conduit. Il ne faut pas confondre ce point avec le régime de l’entretien de l’appareil.',
        sourceKeys: ['obligations', 'frequency'],
      },
      {
        q: 'Une bûche chimique satisfait-elle à cette obligation ?',
        a: 'Non : la définition réglementaire impose une action mécanique directe.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'obligations'],
    relatedGuides: ['frequence-ramonage', 'attestation-ramonage', 'ramoner-soi-meme'],
    relatedServices: ['ramonage-cheminee', 'ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'frequence-ramonage',
    title: 'Combien de ramonages faut-il effectuer par an ?',
    category: 'reglementation',
    intent: 'Distinguer fréquence individuelle, collective et périodes sans utilisation.',
    intro:
      'Il n’existe pas un nombre unique valable pour tous les conduits. Le Code prévoit au moins tous les douze mois pour les appareils individuels et tous les six mois pour les collectifs, avec exceptions et prescriptions locales à vérifier.',
    sections: [
      {
        title: 'Pour un appareil individuel',
        text: 'Le délai se compte en mois : gardez la date du dernier ramonage au lieu de raisonner uniquement en année civile. Deux interventions rapprochées suivies d’une longue interruption ne constituent pas nécessairement un calendrier adapté. Si une règle locale exige plusieurs passages, faites préciser la part qui doit avoir lieu pendant la chauffe.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Pour un appareil collectif',
        text: 'Le régime national prévoit au moins un ramonage tous les six mois dont un pendant la période de chauffe. Certains conduits collectifs exclusivement au gaz peuvent relever du délai de douze mois dans les conditions précises du texte. L’occupant doit obtenir l’information auprès du gestionnaire plutôt que présumer que son appareil est collectif.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'En cas d’inactivité prolongée',
        text: 'L’article R1331-71 prévoit une dispense pendant certaines périodes d’absence totale d’usage : au moins douze mois, ou six mois pour le régime collectif concerné. À l’issue de cette période, un ramonage est requis avant la reprise. Une utilisation même occasionnelle ne doit pas être assimilée à une absence totale d’utilisation.',
      },
    ],
    example: {
      title: 'Une résidence restée sans feu',
      text: 'Si le conduit d’un appareil individuel n’a absolument pas été utilisé pendant plus de douze mois, signalez cette situation au professionnel et organisez le ramonage avant le prochain allumage. Ne confondez pas logement inoccupé et conduit inutilisé.',
    },
    faq: [
      {
        q: 'Le faible usage supprime-t-il automatiquement le ramonage ?',
        a: 'Non. Le texte prévoit une absence totale d’utilisation sur une durée minimale, pas seulement une faible consommation.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Le délai est-il identique après remplacement d’un appareil ?',
        a: 'Le premier ramonage doit être organisé dans le délai correspondant à l’installation après sa mise en place ou son remplacement.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency'],
    relatedGuides: ['obligations-et-frequence', 'quand-faire-ramoner', 'ramonage-poele-granules'],
    relatedServices: ['ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ramonage-proprietaire-locataire',
    title: 'Qui organise et paie le ramonage : propriétaire ou locataire ?',
    category: 'reglementation',
    intent: 'Identifier l’initiative de l’entretien sans confondre responsabilité et facturation.',
    intro:
      'Pour un appareil individuel, l’initiative revient en principe à l’occupant, sauf stipulation contraire du bail. Pour le collectif, elle relève du propriétaire, du syndicat des copropriétaires ou de l’exploitant prévu par convention. La répartition financière doit être examinée avec le bail et le régime des charges.',
    sections: [
      {
        title: 'Commencer par le type d’installation',
        text: 'L’article R1331-73 distingue les foyers et appareils individuels des équipements collectifs. Cette distinction porte sur l’organisation du passage ; elle ne permet pas, à elle seule, de résoudre tous les litiges de paiement. Demandez au bailleur ou au syndic d’identifier le conduit et les interventions déjà commandées.',
      },
      {
        title: 'Relire le bail et les documents de charges',
        text: 'Vérifiez ce que votre bail prévoit pour l’entretien et demandez les justificatifs des sommes réclamées. Ne réglez pas deux fois une même opération sans explication. À l’inverse, une discussion sur la facture ne doit pas conduire à utiliser un équipement dont l’entretien nécessaire n’est pas assuré. Pour un désaccord, prenez conseil auprès de l’ADIL de votre département.',
      },
      {
        title: 'Préparer l’accès et conserver l’attestation',
        text: 'Dans le collectif, les occupants doivent être informés à l’avance et faciliter l’accès. Après le passage, identifiez le commanditaire et l’endroit où sera conservée l’attestation. À l’entrée ou à la sortie du logement, échangez les documents disponibles plutôt qu’une simple affirmation orale du type « cela a été fait ».',
      },
    ],
    example: {
      title: 'Un poêle dans un logement loué',
      text: 'Le locataire consulte son bail puis demande au bailleur si un contrat inclut déjà le conduit. Il précise ensuite le commanditaire et les documents attendus. Cet exemple décrit une démarche, pas une règle universelle de facturation.',
    },
    faq: [
      {
        q: 'Le bail peut-il prévoir une organisation différente ?',
        a: 'Oui : l’article R1331-73 réserve expressément les stipulations contraires du bail pour les équipements individuels.',
        sourceKeys: ['common'],
      },
      {
        q: 'En copropriété, qui prévenir pour un conduit collectif ?',
        a: 'Contactez le syndic ou le gestionnaire qui organise l’entretien collectif ; ne commandez pas un travail sur une partie commune sans coordination.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['common'],
    relatedGuides: ['attestation-ramonage', 'ramonage-assurance', 'frequence-ramonage'],
    relatedServices: ['ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'attestation-ramonage',
    title: 'À quoi sert l’attestation de ramonage ?',
    category: 'reglementation',
    intent: 'Comprendre la preuve de l’intervention et ses limites.',
    featured: true,
    intro:
      'L’attestation documente l’opération effectuée et les conduits concernés. L’article R1331-75 prévoit sa remise dans les quinze jours ouvrés suivant l’intervention et sa conservation pendant au moins deux ans. Elle ne constitue pas une garantie générale de conformité de toute l’installation.',
    sections: [
      {
        title: 'Identifier ce qui a réellement été traité',
        text: 'Le document de ramonage précise le ou les conduits ramonés et atteste notamment de leur vacuité sur toute la longueur. Comparez son périmètre avec le devis : appareil, raccordement et conduit ne sont pas des mots interchangeables. En cas d’ambiguïté, demandez une précision au professionnel avant d’archiver le dossier.',
      },
      {
        title: 'Respecter la remise et la conservation',
        text: 'Le délai réglementaire est de quinze jours ouvrés après achèvement. L’attestation est remise au commanditaire et doit pouvoir être présentée aux agents habilités pendant au moins deux ans. Conservez également la facture et les éventuelles réserves ; une copie numérique lisible facilite la recherche sans remplacer l’organisation du dossier.',
      },
      {
        title: 'Ne pas lui faire dire davantage',
        text: 'Une attestation de ramonage ne prouve pas à elle seule un essai d’étanchéité, un diagnostic complet de conformité ou la résolution d’un refoulement. Demandez une évaluation complémentaire lorsque le problème dépasse l’entretien courant.',
      },
    ],
    example: {
      title: 'Une pièce, deux conduits',
      text: 'Si un logement possède une cheminée et un poêle, une attestation qui mentionne uniquement le conduit du poêle ne prouve pas l’entretien de la cheminée. Faites identifier chaque équipement concerné.',
    },
    faq: [
      {
        q: 'Une facture remplace-t-elle l’attestation ?',
        a: 'Le texte prévoit une attestation décrivant l’opération. Une facture seule ne doit pas être supposée répondre à toutes ces exigences.',
        sourceKeys: ['common'],
      },
      {
        q: 'Combien de temps la garder ?',
        a: 'Au moins deux ans selon R1331-75, et davantage si votre contrat d’assurance ou le suivi de l’installation le rend utile.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['common'],
    relatedGuides: ['ramonage-assurance', 'choisir-ramoneur', 'ramonage-entretien-inspection'],
    relatedServices: ['ramonage-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'risques-sans-ramonage',
    title: 'Que risque-t-on sans ramonage ?',
    category: 'reglementation',
    intent: 'Différencier obligation, sécurité et assurance sans sanction inventée.',
    intro:
      'L’absence de ramonage vous prive d’une opération obligatoire de nettoyage et de contrôle de vacuité. Elle pose aussi un problème de preuve en cas de litige. Les suites administratives, la responsabilité et l’indemnisation d’un sinistre s’apprécient dans leurs cadres respectifs.',
    sections: [
      {
        title: 'Un conduit ne s’évalue pas seulement au ressenti',
        text: 'Un feu qui s’allume ou une absence d’odeur ne démontrent pas la vacuité du conduit. Le nettoyage mécanique prévu par R1331-70 vise justement des parties qui ne sont pas toutes visibles depuis le foyer. Lorsque la date du dernier passage est inconnue, reconstituez les documents et faites organiser l’entretien adapté.',
      },
      {
        title: 'Ne pas confondre sanction et indemnisation',
        text: 'Le respect d’une obligation réglementaire et la prise en charge par une assurance sont deux questions différentes. Il serait trompeur d’annoncer qu’un défaut d’attestation entraîne toujours un refus d’assurance, ou qu’une facture garantit toute indemnisation. Les circonstances, les garanties et les exclusions doivent être examinées avec l’assureur.',
      },
      {
        title: 'Réagir avant une nouvelle utilisation douteuse',
        text: 'En présence de fumées dans la pièce ou d’un fonctionnement anormal, suspendez l’usage et faites vérifier l’installation. Après un accident ou un feu de cheminée, R1331-76 interdit la reprise dans l’attente de remise en état ou de remplacement et d’un examen qualifié. Un simple nettoyage ne doit pas être supposé suffisant.',
      },
    ],
    example: {
      title: 'Un dossier d’entretien incomplet',
      text: 'L’ancien occupant ne retrouve plus d’attestation. L’absence de document ne permet ni de certifier l’entretien ni de diagnostiquer une panne. La démarche utile est d’identifier l’appareil puis de demander un passage adapté avant la reprise.',
    },
    faq: [
      {
        q: 'Le bon tirage prouve-t-il que le conduit est propre ?',
        a: 'Non. Le fonctionnement observé ne remplace pas l’opération réglementaire de nettoyage et de contrôle.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'L’indemnisation est-elle automatiquement perdue ?',
        a: 'Aucune conclusion universelle ne peut être donnée sans lire le contrat et examiner le sinistre.',
        sourceKeys: ['insurance'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'insurance'],
    relatedGuides: ['ramonage-assurance', 'prevenir-feu-cheminee', 'attestation-ramonage'],
    relatedServices: ['ramonage-conduits', 'inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ramoner-soi-meme',
    title: 'Peut-on ramoner sa cheminée soi-même ?',
    category: 'reglementation',
    intent: 'Distinguer nettoyage domestique et ramonage réglementaire.',
    intro:
      'Le nettoyage courant accessible à l’utilisateur ne remplace pas le ramonage réglementaire. Celui-ci doit être réalisé par une personne professionnellement qualifiée conformément à l’article R1331-74. Posséder un hérisson ou acheter une bûche chimique ne suffit pas à satisfaire cette exigence.',
    sections: [
      {
        title: 'Deux gestes qui n’ont pas le même objet',
        text: 'Vider les cendres froides et suivre les tâches autorisées par la notice concernent l’usage quotidien. Le ramonage défini par R1331-70 vise l’intérieur du conduit et sa vacuité sur toute la longueur. Ne supposez pas qu’une brosse passée depuis le foyer a atteint et vérifié chaque partie du parcours.',
      },
      {
        title: 'La qualification est une exigence distincte',
        text: 'R1331-74 impose une personne qualifiée selon le Code de l’artisanat. Demandez au prestataire l’identité de l’intervenant et le cadre de son intervention. Un logo sur un prospectus ne constitue pas, à lui seul, la preuve de cette qualification. Le document de fin de passage doit correspondre à l’opération réalisée.',
      },
      {
        title: 'Ce qu’il est préférable de préparer',
        text: 'Rassemblez la notice, les anciens documents et les informations d’accès. Ne montez pas sur le toit pour vérifier le débouché et ne démontez pas des éléments non prévus pour l’utilisateur. Signalez les difficultés au professionnel afin qu’il organise une intervention dans des conditions adaptées.',
      },
    ],
    example: {
      title: 'Le kit acheté en magasin',
      text: 'Un particulier peut disposer d’un kit de nettoyage. Ce matériel ne lui confère pas la qualification professionnelle exigée et ne transforme pas sa propre déclaration en attestation réglementaire.',
    },
    faq: [
      {
        q: 'Une bûche chimique remplace-t-elle un passage ?',
        a: 'Non. L’action mécanique directe et la qualification de l’intervenant restent nécessaires.',
        sourceKeys: ['frequency', 'common'],
      },
      {
        q: 'Puis-je nettoyer les parties accessibles du foyer ?',
        a: 'Limitez-vous aux gestes utilisateur prévus par la notice, sur un appareil arrêté et refroidi. Cela reste distinct du ramonage.',
        sourceKeys: ['wood'],
      },
    ],
    sourceKeys: ['frequency', 'common'],
    relatedGuides: ['buches-de-ramonage', 'choisir-ramoneur', 'preparer-son-ramonage'],
    relatedServices: ['ramonage-cheminee'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ramonage-assurance',
    title: 'Ramonage et assurance habitation : quels documents garder ?',
    category: 'reglementation',
    intent: 'Constituer un dossier sans promettre une couverture contractuelle.',
    intro:
      'Conservez l’attestation, la facture et les observations du professionnel. Le contrat d’assurance précise les garanties et les démarches après sinistre : aucun article général ne peut garantir une indemnisation ou un refus automatique en l’absence d’un document.',
    sections: [
      {
        title: 'Un dossier qui relie appareil, date et intervention',
        text: 'Classez les documents par appareil et par date. Joignez les références de la notice et les comptes rendus d’éventuelles réparations. La durée minimale réglementaire de conservation de l’attestation est de deux ans ; gardez un historique plus long si votre contrat ou un dossier de travaux le justifie.',
      },
      {
        title: 'Poser les questions à l’assureur avant un sinistre',
        text: 'Demandez par écrit quelles pièces sont attendues, quelles garanties couvrent votre situation d’occupant et quelles exclusions figurent au contrat. Ne confondez pas assurance du logement, responsabilité envers autrui et garantie des biens personnels. Une publicité de ramonage ne modifie pas les conditions de votre assurance.',
      },
      {
        title: 'Après un sinistre : sécurité puis déclaration',
        text: 'Écartez d’abord le danger et suivez les secours. Prévenez l’assureur dans les conditions contractuelles et rassemblez les éléments demandés sans vous exposer. L’examen qualifié et la remise en état prévus par R1331-76 conditionnent la reprise du conduit après accident ; une déclaration d’assurance n’autorise pas le rallumage.',
      },
    ],
    example: {
      title: 'Une attestation concernant un seul équipement',
      text: 'Si le sinistre concerne un conduit différent de celui mentionné sur l’attestation, le document ne prouve pas l’entretien de ce conduit. C’est une raison de garder une identification claire de chaque appareil.',
    },
    faq: [
      {
        q: 'L’attestation garantit-elle une indemnisation ?',
        a: 'Non. Elle documente une opération ; les garanties et circonstances du sinistre restent à examiner.',
        sourceKeys: ['insurance', 'common'],
      },
      {
        q: 'Faut-il attendre le sinistre pour vérifier son contrat ?',
        a: 'Il est préférable de demander les exigences documentaires à votre assureur avant toute difficulté.',
        sourceKeys: ['insurance'],
      },
    ],
    sourceKeys: ['insurance', 'common'],
    relatedGuides: ['attestation-ramonage', 'risques-sans-ramonage', 'prevenir-feu-cheminee'],
    relatedServices: ['ramonage-conduits'],
  }),
];
