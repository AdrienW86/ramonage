import { defineGuide } from '../editorial-types';
export const bistreGuides = [
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'comprendre-le-bistre',
    title: 'Bistre et suie : reconnaître la différence',
    category: 'bistre-debistrage',
    intent: 'Décrire un dépôt sans poser un diagnostic à distance.',
    status: 'valide',
    verificationNote:
      'Vérification documentaire AQC, ADEME et Code de la santé publique. Attribution et relecture métier requises avant publication.',
    intro:
      'L’aspect d’un dépôt ne suffit pas à identifier sa composition, sa profondeur ou l’état du conduit. Une observation doit être examinée par un professionnel avant de conclure à un besoin de débistrage. La fiche de prévention de l’AQC décrit des dépôts de suie et de condensats combustibles sur les parois.',
    sections: [
      {
        title: 'Décrire avant de nommer',
        text: 'Notez où le dépôt est visible depuis une position sûre, s’il est poudreux ou adhérent et si un professionnel l’a déjà décrit. Une photo peut compléter l’échange sans prouver l’état de la totalité du conduit. Ne grattez pas une paroi inaccessible pour recueillir un échantillon.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Ce que le ramonage réglementaire permet d’établir',
        text: 'R1331-70 prévoit le nettoyage mécanique de la paroi et la vacuité du conduit. Le résultat et les limites doivent être expliqués. Si des dépôts persistent ou si le support semble dégradé, demandez au professionnel les suites utiles, sans déduire qu’une nouvelle action plus agressive est toujours appropriée.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Des dépôts qui peuvent adhérer aux parois',
        text: 'L’AQC distingue le ramonage mécanique et, dans certains cas, le décollement professionnel de goudrons adhérents. Un aspect poudreux, dur ou brillant peut être décrit au prestataire, mais ne suffit pas à décider du traitement. Les illustrations ne constituent pas un outil d’identification.',
        sourceKeys: ['aqcBistre'],
      },
    ],
    example: {
      title: 'Une photo reçue par téléphone',
      text: 'Une trace noire photographiée à l’entrée du conduit ne décrit pas le parcours entier. La bonne question est de savoir quelle évaluation est nécessaire, pas de choisir immédiatement une machine ou un produit.',
    },
    faq: [
      {
        q: 'Une trace noire prouve-t-elle la présence de bistre ?',
        a: 'Non. L’identification à distance ne permet pas de confirmer la nature et l’étendue du dépôt.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'La photo du guide représente-t-elle mon installation ?',
        a: 'Non, il s’agit d’une illustration IA. Elle ne valide aucun diagnostic.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency', 'aqcBistre'],
    relatedGuides: ['ramonage-ou-debistrage', 'formation-bistre', 'prix-debistrage'],
    relatedServices: ['debistrage', 'inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'buches-de-ramonage',
    title: 'Les bûches de ramonage remplacent-elles le ramoneur ?',
    category: 'ramonage-entretien',
    intent: 'Évaluer une promesse de produit chimique sans méthode dangereuse.',
    intro:
      'Non. Un produit chimique ne remplace pas l’action mécanique directe définie par le Code de la santé publique, ni le passage d’une personne qualifiée. Il ne faut pas confondre un combustible densifié et une bûche vendue comme produit d’entretien.',
    sections: [
      {
        title: 'L’obligation n’est pas définie par une promesse commerciale',
        text: 'R1331-70 porte sur les parois et la vacuité de toute la longueur du conduit, raccordement compris. Une étiquette de produit ne prouve pas que ce résultat a été atteint. Conservez donc votre calendrier professionnel au lieu de le repousser après l’achat d’un produit.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Ne pas cumuler les usages au hasard',
        text: 'Avant toute utilisation d’un produit, consultez la notice de l’appareil et demandez l’avis du professionnel. N’augmentez pas la quantité, ne mélangez pas des produits et ne cherchez pas à brûler les dépôts. Le Code interdit l’emploi du feu ou d’explosifs comme méthode de ramonage.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Préciser ce qui a déjà été utilisé',
        text: 'Lors de la demande, mentionnez les produits appliqués, leur référence si elle est disponible et leur date d’utilisation. Cette information complète l’historique. Elle ne remplace ni l’attestation du passage ni une évaluation du conduit lorsqu’un problème persiste.',
        sourceKeys: ['common'],
      },
    ],
    example: {
      title: 'Deux produits qui portent le mot « bûche »',
      text: 'Une bûche densifiée destinée au chauffage et un produit commercial présenté pour l’entretien ne répondent pas au même objectif. Dans les deux cas, respectez les usages autorisés par la notice et n’en déduisez aucune dispense de ramonage.',
    },
    faq: [
      {
        q: 'Le ticket d’achat vaut-il attestation ?',
        a: 'Non. Il ne documente pas une opération de ramonage réalisée par une personne qualifiée.',
        sourceKeys: ['common'],
      },
      {
        q: 'Peut-on faire partir les dépôts en chauffant plus fort ?',
        a: 'Ce n’est pas une méthode de ramonage à appliquer. Le Code interdit le recours au feu pour ramoner.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency', 'common'],
    relatedGuides: ['ramoner-soi-meme', 'comprendre-le-bistre', 'attestation-ramonage'],
    relatedServices: ['ramonage-cheminee'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'formation-bistre',
    title: 'Pourquoi le bistre se forme-t-il ? Les points à examiner',
    category: 'bistre-debistrage',
    intent: 'Préparer une recherche de cause sans diagnostic technique non sourcé.',
    status: 'valide',
    verificationNote:
      'Vérification documentaire AQC, ADEME et Code de la santé publique. Attribution et relecture métier requises avant publication.',
    intro:
      'On ne peut attribuer un dépôt à une cause unique sans examiner l’appareil, son usage, le combustible et le conduit. Le refroidissement des fumées contre des parois froides peut favoriser la condensation ; le fonctionnement au ralenti et un combustible humide font également partie des points de vigilance cités par l’AQC.',
    sections: [
      {
        title: 'Reconstituer l’historique de l’installation',
        text: 'Rassemblez la notice, les dates d’entretien et les éventuels changements d’appareil. Notez si le symptôme a commencé après une modification connue. Cette chronologie aide à poser des questions précises sans prouver, à elle seule, un lien de causalité.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Documenter l’usage sans modifier les réglages',
        text: 'Indiquez le combustible et les conditions habituelles d’utilisation telles que vous les connaissez. Ne modifiez pas les paramètres techniques pour tenter de reproduire ou corriger un dépôt. Demandez quelles observations peuvent être réalisées sans risque et lesquelles nécessitent un examen professionnel.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Examiner le conduit et les conditions de combustion',
        text: 'L’AQC relie la condensation à l’isolation insuffisante de parties froides du conduit et signale les effets d’un appareil surdimensionné utilisé au ralenti. Ces mécanismes orientent un examen professionnel ; ils ne démontrent pas la cause chez vous. La notice du modèle reste nécessaire.',
        sourceKeys: ['aqcBistre'],
      },
    ],
    example: {
      title: 'Un changement récent de combustible',
      text: 'Signalez la date du changement et les références disponibles. Il s’agit d’un élément d’enquête à transmettre, pas de la preuve que le nouveau combustible explique tout.',
    },
    faq: [
      {
        q: 'Une seule photo révèle-t-elle la cause ?',
        a: 'Non. L’état du parcours et l’historique demandent une évaluation contextualisée.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Dois-je changer les réglages pour éliminer le dépôt ?',
        a: 'Ne tentez pas une correction technique sans la notice et un avis qualifié.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'aqcBistre'],
    relatedGuides: ['comprendre-le-bistre', 'limiter-bistre', 'ameliorer-tirage'],
    relatedServices: ['debistrage', 'inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ramonage-ou-debistrage',
    title: 'Quelle différence entre ramonage et débistrage ?',
    category: 'bistre-debistrage',
    intent: 'Distinguer une définition légale d’une intervention spécialisée.',
    status: 'valide',
    verificationNote:
      'Vérification documentaire AQC, ADEME et Code de la santé publique. Attribution et relecture métier requises avant publication.',
    intro:
      'Le ramonage possède une définition réglementaire précise : une action mécanique sur les parois et la vacuité du conduit. Le mot débistrage désigne une prise en charge particulière de dépôts tenaces dont la méthode et la faisabilité doivent être justifiées au cas par cas.',
    sections: [
      {
        title: 'Le périmètre du ramonage est vérifiable',
        text: 'R1331-70 inclut le raccordement et le parcours du conduit. Demandez quels accès ont permis le travail et quelles limites ont été constatées. Le nom commercial de la prestation ne suffit pas : l’opération décrite et son résultat doivent rester compréhensibles.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'La présence d’un dépôt ne choisit pas la méthode',
        text: 'Si un professionnel signale des dépôts persistants, demandez une explication de leur nature apparente, de leur étendue et de l’état du support. La compatibilité du traitement doit être évaluée avant l’utilisation d’un équipement. Ce guide ne recommande ni chaîne, ni vitesse, ni produit particulier.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Avant d’accepter un complément',
        text: 'Demandez un périmètre, un prix, les protections prévues et les limites attendues. Faites préciser si un examen ou une réparation est nécessaire. Le débistrage décrit par l’AQC vise les parties goudronneuses adhérentes ; ce complément ne constitue pas une réparation du conduit.',
        sourceKeys: ['aqcBistre', 'prices'],
      },
    ],
    example: {
      title: 'Un devis complété après constat',
      text: 'Le ramonage initial ne suffit pas à traiter les dépôts observés. Demandez pourquoi l’opération complémentaire est proposée et ce qu’elle permettra de conclure, plutôt qu’accepter le seul changement de nom de la prestation.',
    },
    faq: [
      {
        q: 'Le débistrage est-il toujours possible ?',
        a: 'Sa faisabilité ne peut pas être affirmée sans examen du conduit et du support.',
        sourceKeys: ['common'],
      },
      {
        q: 'Un même document prouve-t-il toutes les opérations ?',
        a: 'Demandez que le document corresponde précisément au travail réellement effectué.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'aqcBistre', 'prices'],
    relatedGuides: ['deroulement-debistrage', 'prix-debistrage', 'ramonage-entretien-inspection'],
    relatedServices: ['debistrage'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'deroulement-debistrage',
    title: 'Comment se prépare un débistrage professionnel ?',
    category: 'bistre-debistrage',
    intent: 'Préparer les questions au prestataire sans protocole non validé.',
    status: 'valide',
    verificationNote:
      'Vérification documentaire AQC, ADEME et Code de la santé publique. Attribution et relecture métier requises avant publication.',
    intro:
      'Un débistrage ne doit pas être choisi sur la seule apparence d’un dépôt. Il faut faire préciser le diagnostic, la compatibilité du support, les accès, les limites et le coût avant l’intervention. Cette préparation concerne l’échange et le devis, sans mode opératoire pour l’utilisateur.',
    sections: [
      {
        title: 'Les questions de diagnostic',
        text: 'Demandez ce qui permet de caractériser les dépôts et quelles parties du conduit sont accessibles. Une inspection, un nettoyage et une réparation répondent à des objectifs différents. Faites expliquer les incertitudes avant de décider du périmètre.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Les conditions à faire décrire au devis',
        text: 'Protections, matériel compatible, collecte des résidus et suites éventuelles doivent être clarifiés avec le prestataire. Ne préparez pas le chantier en démontant un appareil ou en montant en toiture. L’AQC réserve le décollement des goudrons adhérents au professionnel ; le choix d’un outil dépend du support.',
        sourceKeys: ['prices', 'aqcBistre'],
      },
      {
        title: 'Les observations après intervention',
        text: 'Demandez ce qui a été atteint, ce qui persiste et si un examen complémentaire est requis. N’assimilez pas une photo « après » à une preuve de conformité de toute l’installation. L’examen après un sinistre et les suites avant réutilisation relèvent des règles du Code de la santé publique.',
        sourceKeys: ['aqcBistre', 'common'],
      },
    ],
    example: {
      title: 'Un accès non identifié',
      text: 'Signalez l’incertitude dès la demande. Le choix d’une méthode ne devrait pas reposer sur l’hypothèse qu’un accès existe alors qu’il n’a jamais été repéré.',
    },
    faq: [
      {
        q: 'Dois-je préparer une machine ?',
        a: 'Non. Le choix du matériel et la méthode relèvent du prestataire après évaluation.',
        sourceKeys: ['common'],
      },
      {
        q: 'La faisabilité peut-elle être garantie par téléphone ?',
        a: 'Ne prenez pas une estimation à distance pour une évaluation complète du support.',
        sourceKeys: ['prices'],
      },
    ],
    sourceKeys: ['common', 'prices', 'frequency', 'aqcBistre'],
    relatedGuides: ['ramonage-ou-debistrage', 'prix-debistrage', 'comprendre-le-bistre'],
    relatedServices: ['debistrage'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'risques-bistre',
    title: 'Quels risques doivent faire examiner des dépôts de bistre ?',
    category: 'bistre-debistrage',
    intent: 'Orienter vers une évaluation sans inventer de seuil de danger.',
    status: 'valide',
    verificationNote:
      'Vérification documentaire AQC, ADEME et Code de la santé publique. Attribution et relecture métier requises avant publication.',
    intro:
      'Un dépôt signalé dans un conduit appelle une évaluation de son étendue et de l’état de l’installation. Aucun seuil d’épaisseur ni niveau de danger ne peut être déduit ici d’une image. L’AQC décrit le feu de cheminée comme un embrasement de dépôts combustibles et souligne le risque de fissuration du conduit.',
    sections: [
      {
        title: 'Séparer observation et urgence',
        text: 'La présence d’un dépôt décrit lors d’un entretien et un incident en cours sont deux situations différentes. En présence d’un feu ou d’un danger immédiat, éloignez-vous et appelez le 18 ou le 112. Ne restez pas à proximité pour photographier le conduit.',
        sourceKeys: ['aqcBistre', 'emergency'],
      },
      {
        title: 'Ne pas provoquer un feu pour traiter un dépôt',
        text: 'L’article R1331-70 interdit le feu comme méthode de ramonage. Ne cherchez pas à faire brûler les résidus par une flambée plus forte. Demandez une évaluation et les conditions d’intervention avant toute reprise incertaine.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Après un accident, faire examiner l’installation',
        text: 'R1331-76 encadre l’examen et la remise en état avant réutilisation. Un refroidissement apparent ne prouve pas que le conduit n’a subi aucun dommage. Les dépôts et l’état du support doivent être examinés ; leur retrait ne prouve pas que les dommages d’un sinistre ont été réparés.',
        sourceKeys: ['common'],
      },
    ],
    example: {
      title: 'Des dépôts après un incident',
      text: 'Gardez les documents de l’intervention des secours et des professionnels. La suite doit porter sur l’état de l’ensemble concerné, pas seulement sur l’apparence du foyer refroidi.',
    },
    faq: [
      {
        q: 'Une couleur permet-elle d’estimer le danger ?',
        a: 'Non. Elle ne remplace pas un examen du dépôt et du support.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Puis-je rallumer après un feu de cheminée ?',
        a: 'Pas avant les examens et les conditions de remise en état prévus par le Code et les consignes des secours.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'aqcBistre', 'emergency'],
    relatedGuides: [
      'prevenir-feu-cheminee',
      'deroulement-debistrage',
      'securite-et-monoxyde-de-carbone',
    ],
    relatedServices: ['debistrage', 'inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'prix-debistrage',
    title: 'Quel est le prix d’un débistrage ? Préparer un devis utile',
    category: 'questions-pratiques',
    intent: 'Comparer un devis spécialisé sans fourchette inventée.',
    intro:
      'Le montant dépend des accès, de l’état du conduit et du périmètre retenu après évaluation. Demandez une offre qui distingue diagnostic, opération retenue et éventuelles suites.',
    sections: [
      {
        title: 'Commencer par une demande qui décrit le besoin',
        text: 'Indiquez l’appareil, l’historique, les dépôts déjà signalés et les documents disponibles. Demandez si une visite préalable est nécessaire et comment elle sera facturée. Une photo peut accompagner la demande, sans remplacer le diagnostic ni autoriser un accès dangereux.',
        sourceKeys: ['prices'],
      },
      {
        title: 'Identifier les inclusions et les réserves',
        text: 'Demandez quels conduits et raccordements sont concernés, quelles protections sont prévues et quels documents seront fournis. Faites préciser les frais de déplacement et le traitement d’un travail complémentaire. Ces questions de devis ne préjugent pas de la méthode technique qui sera choisie.',
        sourceKeys: ['prices'],
      },
      {
        title: 'Ne pas acheter une promesse de résultat non définie',
        text: 'Une formule comme « conduit comme neuf » ne décrit pas un résultat vérifiable pour votre installation. Demandez plutôt les limites de l’évaluation et la procédure si l’état du support empêche l’opération prévue.',
        sourceKeys: ['consumer'],
      },
    ],
    example: {
      title: 'Diagnostic séparé du traitement',
      text: 'Si une offre facture d’abord l’examen puis propose une intervention, demandez les conditions de chaque étape. Le paiement d’un diagnostic ne doit pas être compris comme une obligation automatique d’accepter une autre prestation.',
    },
    faq: [
      {
        q: 'Le devis doit-il distinguer l’examen et le travail ?',
        a: 'Demandez suffisamment de détail pour comprendre les étapes proposées et leur coût.',
        sourceKeys: ['prices'],
      },
      {
        q: 'Une fourchette trouvée ailleurs vaut-elle pour mon conduit ?',
        a: 'Elle ne remplace pas l’offre du prestataire établie pour votre besoin.',
        sourceKeys: ['consumer'],
      },
    ],
    sourceKeys: ['prices', 'consumer'],
    relatedGuides: ['prix-ramonage', 'ramonage-ou-debistrage', 'choisir-ramoneur'],
    relatedServices: ['debistrage'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'limiter-bistre',
    title: 'Comment limiter les situations favorisant l’encrassement ?',
    category: 'bistre-debistrage',
    intent: 'Appliquer les recommandations de prévention en respectant la notice.',
    status: 'valide',
    verificationNote:
      'Vérification documentaire AQC, ADEME et Code de la santé publique. Attribution et relecture métier requises avant publication.',
    intro:
      'Suivre la notice et conserver l’historique d’entretien constitue un point de départ. Utiliser le combustible autorisé, éviter le ralenti prolongé et laisser libres les amenées d’air sont des recommandations de prévention, sans garantie d’absence de dépôt.',
    sections: [
      {
        title: 'Rassembler les consignes utiles',
        text: 'Gardez la notice, la référence du combustible et les observations des passages précédents. Repérez les tâches qui relèvent de l’utilisateur et celles confiées à un professionnel. N’ajoutez pas une procédure trouvée en ligne lorsqu’elle contredit les indications propres à votre appareil.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Signaler les changements observés',
        text: 'Notez les dates de noircissement inhabituel, les messages de défaut ou une modification d’usage. Ne cherchez pas à provoquer le symptôme pour le tester. Une chronologie concrète permet au professionnel de choisir les questions et examens utiles.',
        sourceKeys: ['aqcBistre'],
      },
      {
        title: 'Prévenir sans modifier les réglages techniques',
        text: 'L’ADEME recommande du bois suffisamment sec et un usage conforme à l’appareil. L’AQC souligne les risques du fonctionnement au ralenti et des entrées d’air obstruées. Faites vérifier les anomalies persistantes ; ne compensez pas par une flambée excessive ni une modification du conduit.',
        sourceKeys: ['aqcBistre', 'wood'],
      },
    ],
    example: {
      title: 'Une observation qui revient',
      text: 'Comparez les comptes rendus et décrivez l’évolution au prestataire. L’objectif est de rechercher les facteurs pertinents sans changer plusieurs réglages au hasard.',
    },
    faq: [
      {
        q: 'Un bon entretien garantit-il zéro dépôt ?',
        a: 'Aucune garantie générale de ce type n’est donnée ; le suivi dépend de l’installation et de son usage.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'À qui demander un réglage adapté ?',
        a: 'À un professionnel qui peut identifier l’appareil et s’appuyer sur sa notice.',
        sourceKeys: ['common'],
      },
    ],
    sourceKeys: ['common', 'frequency', 'aqcBistre', 'wood'],
    relatedGuides: ['formation-bistre', 'choisir-bois', 'entretien-poele-bois'],
    relatedServices: ['debistrage'],
  }),
];
