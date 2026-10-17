import { defineGuide } from '../editorial-types';
const pending =
  'Source technique spécifique au bistre et relecture métier non disponibles. Les principes de sécurité et de demande de diagnostic sont préparés ; les méthodes ne sont pas validées pour publication.';
export const bistreGuides = [
  defineGuide({
    dateVerified: null,
    slug: 'comprendre-le-bistre',
    title: 'Bistre et suie : reconnaître la différence',
    category: 'bistre-debistrage',
    image: 'bistre',
    intent: 'Décrire un dépôt sans poser un diagnostic à distance.',
    status: 'a-enrichir',
    verificationNote: pending,
    intro:
      'L’aspect d’un dépôt ne suffit pas à identifier sa composition, sa profondeur ou l’état du conduit. Une observation doit être examinée par un professionnel avant de conclure à un besoin de débistrage. Ce guide historique est conservé et reste en cours de validation technique.',
    sections: [
      {
        title: 'Décrire avant de nommer',
        text: 'Notez où le dépôt est visible depuis une position sûre, s’il est poudreux ou adhérent et si un professionnel l’a déjà décrit. Une photo peut compléter l’échange sans prouver l’état de la totalité du conduit. Ne grattez pas une paroi inaccessible pour recueillir un échantillon.',
      },
      {
        title: 'Ce que le ramonage réglementaire permet d’établir',
        text: 'R1331-70 prévoit le nettoyage mécanique de la paroi et la vacuité du conduit. Le résultat et les limites doivent être expliqués. Si des dépôts persistent ou si le support semble dégradé, demandez au professionnel les suites utiles, sans déduire qu’une nouvelle action plus agressive est toujours appropriée.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Ce qui reste à documenter',
        text: 'La description détaillée de la formation et de la composition du bistre nécessite une référence technique directement consultée et une relecture métier. Les images IA de ce site ne doivent pas servir de diagnostic comparatif ni de preuve d’un chantier. Ce contenu n’est pas une procédure de traitement.',
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
    sourceKeys: ['frequency', 'bistre'],
    relatedGuides: ['ramonage-ou-debistrage', 'formation-bistre', 'prix-debistrage'],
    relatedServices: ['debistrage', 'inspection-conduits'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'buches-de-ramonage',
    title: 'Les bûches de ramonage remplacent-elles le ramoneur ?',
    category: 'ramonage-entretien',
    image: 'cheminee',
    intent: 'Évaluer une promesse de produit chimique sans méthode dangereuse.',
    intro:
      'Non. Un produit chimique ne remplace pas l’action mécanique directe définie par le Code de la santé publique, ni le passage d’une personne qualifiée. Il ne faut pas confondre un combustible densifié et une bûche vendue comme produit d’entretien.',
    sections: [
      {
        title: 'L’obligation n’est pas définie par une promesse commerciale',
        text: 'R1331-70 porte sur les parois et la vacuité de toute la longueur du conduit, raccordement compris. Une étiquette de produit ne prouve pas que ce résultat a été atteint. Conservez donc votre calendrier professionnel au lieu de le repousser après l’achat d’un produit.',
      },
      {
        title: 'Ne pas cumuler les usages au hasard',
        text: 'Avant toute utilisation d’un produit, consultez la notice de l’appareil et demandez l’avis du professionnel. N’augmentez pas la quantité, ne mélangez pas des produits et ne cherchez pas à brûler les dépôts. Le Code interdit l’emploi du feu ou d’explosifs comme méthode de ramonage.',
      },
      {
        title: 'Préciser ce qui a déjà été utilisé',
        text: 'Lors de la demande, mentionnez les produits appliqués, leur référence si elle est disponible et leur date d’utilisation. Cette information complète l’historique. Elle ne remplace ni l’attestation du passage ni une évaluation du conduit lorsqu’un problème persiste.',
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
    dateVerified: null,
    slug: 'formation-bistre',
    title: 'Pourquoi le bistre se forme-t-il ? Les points à examiner',
    category: 'bistre-debistrage',
    image: 'bistre',
    intent: 'Préparer une recherche de cause sans diagnostic technique non sourcé.',
    status: 'a-enrichir',
    verificationNote: pending,
    intro:
      'On ne peut attribuer un dépôt à une cause unique sans examiner l’appareil, son usage, le combustible et le conduit. Le développement technique de ce guide reste à valider ; il ne fournit pas de température seuil ni de règle de dimensionnement inventée.',
    sections: [
      {
        title: 'Reconstituer l’historique de l’installation',
        text: 'Rassemblez la notice, les dates d’entretien et les éventuels changements d’appareil. Notez si le symptôme a commencé après une modification connue. Cette chronologie aide à poser des questions précises sans prouver, à elle seule, un lien de causalité.',
      },
      {
        title: 'Documenter l’usage sans modifier les réglages',
        text: 'Indiquez le combustible et les conditions habituelles d’utilisation telles que vous les connaissez. Ne modifiez pas les paramètres techniques pour tenter de reproduire ou corriger un dépôt. Demandez quelles observations peuvent être réalisées sans risque et lesquelles nécessitent un examen professionnel.',
      },
      {
        title: 'Les compléments nécessaires avant publication',
        text: 'Une source technique directement consultée doit préciser les mécanismes de dépôt et les conditions d’évaluation. La notice propre à l’appareil doit ensuite être prise en compte. Le brouillon ne conclut pas que votre bois, votre conduit ou un intervenant précédent serait responsable.',
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
    sourceKeys: ['frequency', 'common', 'bistre'],
    relatedGuides: ['comprendre-le-bistre', 'limiter-bistre', 'ameliorer-tirage'],
    relatedServices: ['debistrage', 'inspection-conduits'],
  }),
  defineGuide({
    dateVerified: null,
    slug: 'ramonage-ou-debistrage',
    title: 'Quelle différence entre ramonage et débistrage ?',
    category: 'bistre-debistrage',
    image: 'debistrage',
    intent: 'Distinguer une définition légale d’une intervention spécialisée.',
    status: 'a-enrichir',
    verificationNote: pending,
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
      },
      {
        title: 'Avant d’accepter un complément',
        text: 'Demandez un périmètre, un prix, les protections prévues et les limites attendues. Faites préciser si un examen ou une réparation est nécessaire. La source technique détaillée et la relecture métier de cette comparaison restent à compléter avant publication.',
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
    sourceKeys: ['frequency', 'common', 'bistre', 'prices'],
    relatedGuides: ['deroulement-debistrage', 'prix-debistrage', 'ramonage-entretien-inspection'],
    relatedServices: ['debistrage'],
  }),
  defineGuide({
    dateVerified: null,
    slug: 'deroulement-debistrage',
    title: 'Comment se prépare un débistrage professionnel ?',
    category: 'bistre-debistrage',
    image: 'debistrage',
    intent: 'Préparer les questions au prestataire sans protocole non validé.',
    status: 'brouillon',
    verificationNote: pending,
    intro:
      'Un débistrage ne doit pas être choisi sur la seule apparence d’un dépôt. Il faut faire préciser le diagnostic, la compatibilité du support, les accès, les limites et le coût avant l’intervention. La procédure technique détaillée reste à valider.',
    sections: [
      {
        title: 'Les questions de diagnostic',
        text: 'Demandez ce qui permet de caractériser les dépôts et quelles parties du conduit sont accessibles. Une inspection, un nettoyage et une réparation répondent à des objectifs différents. Faites expliquer les incertitudes avant de décider du périmètre.',
      },
      {
        title: 'Les conditions à faire décrire au devis',
        text: 'Protections, matériel compatible, collecte des résidus et suites éventuelles doivent être clarifiés avec le prestataire. Ne préparez pas le chantier en démontant un appareil ou en montant en toiture. Ce brouillon ne constitue pas un mode opératoire et n’attribue aucune compétence à l’entreprise.',
      },
      {
        title: 'Les observations après intervention',
        text: 'Demandez ce qui a été atteint, ce qui persiste et si un examen complémentaire est requis. N’assimilez pas une photo « après » à une preuve de conformité de toute l’installation. Le texte sera enrichi lorsque la source technique et la relecture qualifiée seront disponibles.',
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
    sourceKeys: ['common', 'prices', 'bistre'],
    relatedGuides: ['ramonage-ou-debistrage', 'prix-debistrage', 'comprendre-le-bistre'],
    relatedServices: ['debistrage'],
  }),
  defineGuide({
    dateVerified: null,
    slug: 'risques-bistre',
    title: 'Quels risques doivent faire examiner des dépôts de bistre ?',
    category: 'bistre-debistrage',
    image: 'bistre',
    intent: 'Orienter vers une évaluation sans inventer de seuil de danger.',
    status: 'a-enrichir',
    verificationNote: pending,
    intro:
      'Un dépôt signalé dans un conduit appelle une évaluation de son étendue et de l’état de l’installation. Aucun seuil d’épaisseur ni niveau de danger ne peut être déduit ici d’une image. La partie spécifique aux risques du bistre nécessite une validation technique.',
    sections: [
      {
        title: 'Séparer observation et urgence',
        text: 'La présence d’un dépôt décrit lors d’un entretien et un incident en cours sont deux situations différentes. En présence d’un feu ou d’un danger immédiat, éloignez-vous et appelez le 18 ou le 112. Ne restez pas à proximité pour photographier le conduit.',
      },
      {
        title: 'Ne pas provoquer un feu pour traiter un dépôt',
        text: 'L’article R1331-70 interdit le feu comme méthode de ramonage. Ne cherchez pas à faire brûler les résidus par une flambée plus forte. Demandez une évaluation et les conditions d’intervention avant toute reprise incertaine.',
        sourceKeys: ['frequency'],
      },
      {
        title: 'Après un accident, faire examiner l’installation',
        text: 'R1331-76 encadre l’examen et la remise en état avant réutilisation. Un refroidissement apparent ne prouve pas que le conduit n’a subi aucun dommage. La rédaction technique sur le bistre sera complétée sans extrapoler à partir de ces seules règles générales.',
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
    sourceKeys: ['frequency', 'common', 'bistre'],
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
    image: 'debistrage',
    intent: 'Comparer un devis spécialisé sans fourchette inventée.',
    intro:
      'Aucun prix forfaitaire ou tarif de marché vérifié n’est proposé ici. Le montant dépend du périmètre confirmé après évaluation. Demandez une offre qui distingue diagnostic, opération retenue et éventuelles suites.',
    sections: [
      {
        title: 'Commencer par une demande qui décrit le besoin',
        text: 'Indiquez l’appareil, l’historique, les dépôts déjà signalés et les documents disponibles. Demandez si une visite préalable est nécessaire et comment elle sera facturée. Une photo peut accompagner la demande, sans remplacer le diagnostic ni autoriser un accès dangereux.',
      },
      {
        title: 'Identifier les inclusions et les réserves',
        text: 'Demandez quels conduits et raccordements sont concernés, quelles protections sont prévues et quels documents seront fournis. Faites préciser les frais de déplacement et le traitement d’un travail complémentaire. Ces questions de devis ne préjugent pas de la méthode technique qui sera choisie.',
      },
      {
        title: 'Ne pas acheter une promesse de résultat non définie',
        text: 'Une formule comme « conduit comme neuf » ne décrit pas un résultat vérifiable pour votre installation. Demandez plutôt les limites de l’évaluation et la procédure si l’état du support empêche l’opération prévue. Aucun tarif de l’entreprise ni gratuité de diagnostic n’est confirmé sur ce site.',
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
    dateVerified: null,
    slug: 'limiter-bistre',
    title: 'Comment limiter les situations favorisant l’encrassement ?',
    category: 'bistre-debistrage',
    image: 'bois-stockage',
    intent: 'Organiser un suivi d’usage avant une validation spécifique au bistre.',
    status: 'a-enrichir',
    verificationNote: pending,
    intro:
      'Suivre la notice et conserver l’historique d’entretien constitue un point de départ. Les recommandations spécifiques pour limiter le bistre doivent être adaptées à l’appareil et au conduit : ce brouillon ne promet pas l’absence de dépôt.',
    sections: [
      {
        title: 'Rassembler les consignes utiles',
        text: 'Gardez la notice, la référence du combustible et les observations des passages précédents. Repérez les tâches qui relèvent de l’utilisateur et celles confiées à un professionnel. N’ajoutez pas une procédure trouvée en ligne lorsqu’elle contredit les indications propres à votre appareil.',
      },
      {
        title: 'Signaler les changements observés',
        text: 'Notez les dates de noircissement inhabituel, les messages de défaut ou une modification d’usage. Ne cherchez pas à provoquer le symptôme pour le tester. Une chronologie concrète permet au professionnel de choisir les questions et examens utiles.',
      },
      {
        title: 'Valider les conseils techniques avant diffusion',
        text: 'La prévention du bistre ne sera développée qu’avec une référence spécifique directement vérifiée et une relecture métier. Aucun taux d’humidité, réglage de tirage ou rythme universel de nettoyage n’est présenté ici comme une solution garantie.',
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
    sourceKeys: ['common', 'frequency', 'bistre'],
    relatedGuides: ['formation-bistre', 'choisir-bois', 'entretien-poele-bois'],
    relatedServices: ['debistrage'],
  }),
];
