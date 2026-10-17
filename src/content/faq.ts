import type { Category } from './editorial-types';
export type FaqEntry = {
  id: string;
  category: Category;
  q: string;
  a: string;
  guide: string;
  sourceKeys: string[];
  dateVerified: string;
};
type Row = [string, string, string, string[]];
const groups: { category: Category; rows: Row[] }[] = [
  {
    category: 'reglementation',
    rows: [
      [
        'Le délai individuel se compte-t-il en année civile ?',
        'Le texte dit au moins tous les douze mois : utilisez la date de l’attestation pour calculer votre échéance, puis vérifiez les prescriptions locales.',
        'frequence-ramonage',
        ['frequency'],
      ],
      [
        'Quelle fréquence nationale pour un appareil collectif ?',
        'Au moins tous les six mois, dont une intervention pendant la chauffe, avec l’exception prévue par le Code pour certains conduits collectifs au gaz.',
        'frequence-ramonage',
        ['frequency'],
      ],
      [
        'Que vérifier avant de reprendre après douze mois sans usage ?',
        'Pour les cas individuels visés par R1331-71, un ramonage est requis avant la nouvelle utilisation après cette période d’inactivité totale.',
        'quand-faire-ramoner',
        ['frequency'],
      ],
      [
        'Qui organise le passage pour un appareil individuel loué ?',
        'En principe l’occupant, sauf stipulation contraire du bail. L’organisation et la répartition financière doivent être examinées séparément.',
        'ramonage-proprietaire-locataire',
        ['common'],
      ],
      [
        'Quel délai pour recevoir l’attestation ?',
        'R1331-75 prévoit quinze jours ouvrés après l’achèvement de l’opération. Demandez au professionnel comment elle vous sera transmise.',
        'attestation-ramonage',
        ['common'],
      ],
      [
        'Pourquoi garder les documents au moins deux ans ?',
        'Le Code impose de conserver l’attestation et de la tenir à disposition des agents habilités pendant cette durée minimale.',
        'attestation-ramonage',
        ['common'],
      ],
      [
        'La mairie peut-elle préciser la règle applicable à mon adresse ?',
        'La mairie ou la préfecture peut vous orienter vers les textes locaux. Demandez leur référence et la version applicable au type d’appareil concerné.',
        'obligations-et-frequence',
        ['obligations', 'frequency'],
      ],
      [
        'Une bonne apparence du foyer supprime-t-elle l’obligation ?',
        'Non. Le nettoyage mécanique et la vacuité du parcours ne sont pas établis par l’aspect visible du foyer.',
        'risques-sans-ramonage',
        ['frequency'],
      ],
    ],
  },
  {
    category: 'ramonage-entretien',
    rows: [
      [
        'Le tuyau entre l’appareil et le conduit est-il concerné ?',
        'La définition de R1331-70 inclut les tuyaux ou conduits de raccordement. Faites identifier ce qui a été traité.',
        'ramonage-entretien-inspection',
        ['frequency'],
      ],
      [
        'Le nettoyage doit-il nécessairement se faire depuis le toit ?',
        'La méthode et l’accès doivent être définis pour la configuration et la sécurité de l’intervention. Ne choisissez pas un accès par principe.',
        'preparer-son-ramonage',
        ['common'],
      ],
      [
        'Comment signaler un accès difficile ?',
        'Décrivez ce que vous savez depuis une position sûre, indiquez l’incertitude et demandez au professionnel comment préparer la visite.',
        'preparer-son-ramonage',
        ['common'],
      ],
      [
        'Une inspection caméra nettoie-t-elle le conduit ?',
        'Observer et nettoyer sont deux opérations différentes ; une caméra ne réalise pas l’action mécanique réglementaire.',
        'ramonage-entretien-inspection',
        ['frequency'],
      ],
      [
        'Le ramonage certifie-t-il l’étanchéité ?',
        'Le périmètre du ramonage ne doit pas être confondu avec un essai d’étanchéité. Demandez si un examen distinct est nécessaire.',
        'ramonage-entretien-inspection',
        ['frequency'],
      ],
      [
        'Que faire si une partie du conduit n’a pas pu être traitée ?',
        'Demandez une explication écrite des limites et des suites utiles ; n’en déduisez pas que toute l’opération ou la sécurité est acquise.',
        'preparer-son-ramonage',
        ['common'],
      ],
      [
        'Pourquoi communiquer les anciennes attestations ?',
        'Elles permettent d’identifier dates et conduits déjà concernés et d’éviter un historique reposant uniquement sur des souvenirs.',
        'preparer-son-ramonage',
        ['common'],
      ],
      [
        'Faut-il prévenir le syndic avant une intervention collective ?',
        'Coordonnez le passage avec le gestionnaire. Pour le collectif, R1331-73 prévoit l’information préalable des occupants et l’accès aux opérations.',
        'ramonage-proprietaire-locataire',
        ['common'],
      ],
    ],
  },
  {
    category: 'bistre-debistrage',
    rows: [
      [
        'Une photo de dépôt suffit-elle pour commander un traitement ?',
        'Elle peut aider à préparer l’échange mais ne décrit pas tout le support ni le parcours. Demandez quel examen est nécessaire avant accord.',
        'ramonage-entretien-inspection',
        ['frequency', 'common'],
      ],
      [
        'Faut-il accepter immédiatement une opération supplémentaire ?',
        'Demandez son motif, son périmètre et son coût avant de donner votre accord. Une observation ne remplace pas un devis compris.',
        'prix-debistrage',
        ['prices'],
      ],
      [
        'Peut-on nettoyer un conduit en brûlant volontairement les dépôts ?',
        'Non : R1331-70 interdit le recours au feu ou aux explosifs comme procédé de ramonage.',
        'buches-de-ramonage',
        ['frequency'],
      ],
      [
        'Quel document demander si une opération est interrompue ?',
        'Faites préciser les parties traitées, les limites et les suites utiles. Les documents doivent correspondre au travail effectivement réalisé.',
        'attestation-ramonage',
        ['common'],
      ],
      [
        'Le mot débistrage signifie-t-il une réparation du conduit ?',
        'Il ne faut pas présumer qu’un devis de nettoyage inclut une réparation. Faites décrire chaque opération proposée.',
        'prix-debistrage',
        ['prices'],
      ],
      [
        'Le diagnostic peut-il faire l’objet d’un coût distinct ?',
        'Demandez ses conditions tarifaires avant de le commander. Aucune gratuité de diagnostic n’est annoncée ici.',
        'prix-debistrage',
        ['prices'],
      ],
      [
        'Une formule « comme neuf » décrit-elle un résultat suffisamment précis ?',
        'Demandez plutôt le résultat recherché, les critères expliqués par le professionnel et les limites prévues pour votre conduit.',
        'prix-debistrage',
        ['consumer'],
      ],
      [
        'Comment comparer deux offres de traitement ?',
        'Vérifiez qu’elles portent sur le même appareil, le même parcours, la même évaluation préalable et les mêmes opérations incluses.',
        'prix-debistrage',
        ['prices', 'consumer'],
      ],
    ],
  },
  {
    category: 'poeles',
    rows: [
      [
        'Un poêle à granulés échappe-t-il au ramonage ?',
        'Non. Son conduit reste soumis au régime de ramonage correspondant à l’installation et aux éventuelles prescriptions locales.',
        'ramonage-poele-granules',
        ['frequency'],
      ],
      [
        'L’absence d’alerte sur l’écran dispense-t-elle d’entretien ?',
        'Un affichage ne constitue pas une preuve d’opération ni le calendrier réglementaire. Vérifiez vos documents et la notice.',
        'ramonage-poele-granules',
        ['frequency', 'pellets'],
      ],
      [
        'Pourquoi indiquer le modèle exact du poêle ?',
        'La notice, les accès et les opérations à prévoir dépendent du matériel. La référence aide à confirmer la prise en charge.',
        'entretien-poele-granules',
        ['pellets'],
      ],
      [
        'Que communiquer avec un code défaut ?',
        'Le code exact, le modèle et le moment de son apparition. Ne neutralisez pas une sécurité pour effacer le symptôme.',
        'entretien-poele-granules',
        ['pellets'],
      ],
      [
        'Les gestes utilisateur remplacent-ils la maintenance professionnelle ?',
        'Non. Distinguez les tâches de la notice et les opérations professionnelles sur l’appareil et son conduit.',
        'entretien-poele-bois',
        ['common', 'frequency'],
      ],
      [
        'Peut-on remplacer des granulés par des bûches dans le même appareil ?',
        'N’utilisez que le combustible prévu par la notice ; ne présumez jamais une compatibilité entre produits et appareils.',
        'choisir-bois',
        ['wood'],
      ],
      [
        'Quel renseignement garder sur un lot de combustible ?',
        'Conservez sa référence, la description et les consignes reçues du vendeur pour pouvoir préciser ce qui a été utilisé.',
        'choisir-bois',
        ['wood'],
      ],
      [
        'Un noircissement nouveau désigne-t-il forcément la même panne ?',
        'Non. Décrivez l’évolution et les autres signes au professionnel au lieu de conclure à partir de la seule vitre.',
        'vitre-poele-noircit',
        ['wood'],
      ],
    ],
  },
  {
    category: 'cheminees-inserts',
    rows: [
      [
        'Un foyer fermé supprime-t-il les obligations du conduit ?',
        'Non. Le conduit et le raccordement restent concernés par le ramonage ; la fermeture du foyer ne constitue pas une dispense.',
        'entretien-insert',
        ['frequency'],
      ],
      [
        'Que transmettre pour un insert déjà posé lors de l’achat du logement ?',
        'Rassemblez la notice, les documents de pose et les anciennes attestations ; signalez les références manquantes sans démonter l’habillage.',
        'entretien-insert',
        ['common'],
      ],
      [
        'Pourquoi distinguer habillage et conduit ?',
        'Le devis doit identifier l’objet de l’intervention et ses accès. Un travail sur l’habillage ne peut pas être déduit automatiquement du mot ramonage.',
        'entretien-insert',
        ['prices', 'common'],
      ],
      [
        'Faut-il rallumer pour montrer un refoulement ?',
        'Ne provoquez pas un fonctionnement suspect. Décrivez les observations déjà faites et demandez un avis qualifié.',
        'cheminee-refoule',
        ['common'],
      ],
      [
        'Un accessoire en sortie de toiture est-il une solution universelle ?',
        'Non. Faites évaluer l’ensemble avant de choisir une modification qui peut ne pas correspondre à l’installation.',
        'ameliorer-tirage',
        ['pellets'],
      ],
      [
        'Une valeur de tirage trouvée en ligne convient-elle à tous les modèles ?',
        'Non. Les références du matériel et sa notice sont nécessaires avant de définir un réglage.',
        'ameliorer-tirage',
        ['pellets'],
      ],
      [
        'L’usage d’une hotte peut-il faire partie des points à examiner ?',
        'L’ADEME cite les interactions avec l’air et la ventilation parmi les points à examiner. Cela ne suffit pas à identifier la cause chez vous.',
        'cheminee-refoule',
        ['wood'],
      ],
      [
        'Une vitre nettoyée indique-t-elle que le refoulement est résolu ?',
        'Non. La propreté d’une partie visible n’établit pas le fonctionnement de l’ensemble de l’évacuation.',
        'cheminee-refoule',
        ['frequency'],
      ],
    ],
  },
  {
    category: 'securite',
    rows: [
      [
        'Faut-il attendre une odeur pour suspecter du monoxyde de carbone ?',
        'Non. Le gaz est imperceptible ; ne vous fiez pas à l’odorat pour exclure un danger.',
        'securite-et-monoxyde-de-carbone',
        ['publicHealth'],
      ],
      [
        'Plusieurs occupants ont des maux de tête près d’un chauffage : que faire ?',
        'Mettez-vous à l’abri, évacuez et contactez les secours ; aérez et arrêtez les appareils si possible sans vous exposer.',
        'securite-et-monoxyde-de-carbone',
        ['publicHealth'],
      ],
      [
        'Le formulaire du site est-il adapté à une urgence ?',
        'Non. Appelez les secours : le 15 pour une urgence médicale, le 18 ou le 112 en cas d’incendie ou de danger.',
        'prevenir-feu-cheminee',
        ['emergency'],
      ],
      [
        'Quand rentrer après une suspicion d’intoxication ?',
        'Attendez l’accord des secours, même si les symptômes ont diminué une fois sorti.',
        'securite-et-monoxyde-de-carbone',
        ['coBrochure'],
      ],
      [
        'Quel accès aux secours pour les personnes sourdes ou malentendantes ?',
        'Le service d’urgence 114 propose des moyens de contact adaptés. Retrouvez ses modalités dans la source officielle.',
        'securite-et-monoxyde-de-carbone',
        ['emergency'],
      ],
      [
        'Puis-je rallumer après un feu si le conduit a refroidi ?',
        'Non. R1331-76 prévoit examen et conditions de remise en état ou de remplacement avant reprise.',
        'prevenir-feu-cheminee',
        ['common'],
      ],
      [
        'Pourquoi garder le compte rendu après un sinistre ?',
        'Il participe au dossier à transmettre aux professionnels et à l’assureur pour organiser les suites.',
        'ramonage-assurance',
        ['insurance'],
      ],
      [
        'Faut-il boucher une grille pour éviter les courants d’air ?',
        'Ne bouchez pas les entrées et sorties de ventilation ; elles participent au renouvellement de l’air.',
        'securite-et-monoxyde-de-carbone',
        ['coBrochure'],
      ],
    ],
  },
  {
    category: 'questions-pratiques',
    rows: [
      [
        'Le site annonce-t-il un prix de ramonage garanti ?',
        'Non. Aucun tarif de l’entreprise n’est confirmé ; le devis doit correspondre à l’installation.',
        'prix-ramonage',
        ['prices'],
      ],
      [
        'Comment savoir si le déplacement est facturé séparément ?',
        'Demandez le détail de l’information tarifaire avant accord et retrouvez-le sur l’offre du prestataire.',
        'prix-ramonage',
        ['consumer'],
      ],
      [
        'Une demande de devis réserve-t-elle un rendez-vous ?',
        'La demande sur ce site ne constitue ni commande ni réservation. Le périmètre et les conditions restent à confirmer.',
        'prix-ramonage',
        ['prices'],
      ],
      [
        'Dois-je comparer uniquement le montant final ?',
        'Comparez aussi les opérations, les accès, les frais et les documents inclus ; deux prix peuvent couvrir des objets différents.',
        'prix-ramonage',
        ['prices'],
      ],
      [
        'Peut-on annoncer une durée identique pour toutes les installations ?',
        'Ce site ne donne pas de durée universelle. Faites estimer votre disponibilité en précisant appareil, nombre de conduits et accès.',
        'duree-ramonage',
        ['common', 'prices'],
      ],
      [
        'Un logo publicitaire suffit-il à prouver une qualification ?',
        'Demandez des éléments vérifiables sur l’entreprise et la personne qui intervient ; l’exigence professionnelle ne se déduit pas d’une image.',
        'choisir-ramoneur',
        ['common', 'qualification'],
      ],
      [
        'Une attestation garantit-elle le remboursement d’un sinistre ?',
        'Non. Elle documente une opération ; garanties, exclusions et circonstances sont examinées dans le cadre du contrat.',
        'ramonage-assurance',
        ['insurance'],
      ],
      [
        'Une commune présente au répertoire est-elle desservie ?',
        'Le référentiel géographique ne vaut pas accord commercial. Faites confirmer la prise en charge avant tout rendez-vous.',
        'prix-ramonage',
        ['prices'],
      ],
    ],
  },
];
export const faqEntries: FaqEntry[] = groups.flatMap((group) =>
  group.rows.map(([q, a, guide, sourceKeys], i) => ({
    id: `${group.category}-${i + 1}`,
    category: group.category,
    q,
    a,
    guide,
    sourceKeys,
    dateVerified: '2026-10-17',
  })),
);
