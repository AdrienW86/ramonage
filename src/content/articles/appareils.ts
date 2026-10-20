import { defineGuide } from '../editorial-types';
export const applianceGuides = [
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'entretien-poele-bois',
    title: 'Comment entretenir un poêle à bois au quotidien ?',
    category: 'poeles',
    intent: 'Délimiter les tâches utilisateur et les rendez-vous professionnels.',
    intro:
      'Séparez les gestes autorisés par la notice, l’entretien professionnel de l’appareil et le ramonage du conduit. Un foyer visuellement propre ne prouve pas que son parcours de fumées est entretenu.',
    sections: [
      {
        title: 'Créer une fiche propre à votre modèle',
        text: 'Relevez le modèle exact et retrouvez la notice du fabricant. Recopiez les seules tâches prévues pour l’utilisateur avec leurs précautions. Si un élément n’est pas identifié ou si la notice manque, demandez conseil avant d’agir. Le guide ne prescrit aucun démontage universel.',
      },
      {
        title: 'Intervenir uniquement dans les conditions prévues',
        text: 'L’appareil doit être arrêté et refroidi pour les tâches de nettoyage concernées. L’ADEME distingue l’entretien courant du travail du professionnel. Préparez les questions sur les accessoires compatibles, sans utiliser un aspirateur domestique ordinaire pour les cendres. Conservez les consignes reçues avec la notice.',
        sourceKeys: ['wood'],
      },
      {
        title: 'Suivre séparément les opérations professionnelles',
        text: 'Classez l’attestation de ramonage avec la date et le conduit concerné. Demandez au prestataire ce que comprend l’entretien de l’appareil : cette visite ne doit pas être déduite du seul mot « ramonage ». Une anomalie nouvelle doit être signalée sans attendre l’échéance habituelle.',
      },
    ],
    example: {
      title: 'Un tableau à deux colonnes',
      text: 'Dans votre dossier, une colonne reprend les tâches de la notice ; l’autre les interventions professionnelles réalisées et prévues. Vous évitez ainsi de confondre un nettoyage courant avec une obligation documentée.',
    },
    faq: [
      {
        q: 'Une vitre propre prouve-t-elle que le conduit est entretenu ?',
        a: 'Non. Le ramonage vise les parois et la vacuité du conduit, pas seulement les parties visibles du foyer.',
        sourceKeys: ['frequency'],
      },
      {
        q: 'Faut-il démonter les éléments internes pour préparer le passage ?',
        a: 'Ne faites que ce que la notice réserve à l’utilisateur et demandez les consignes du professionnel pour le reste.',
        sourceKeys: ['wood'],
      },
    ],
    sourceKeys: ['wood', 'frequency', 'common'],
    relatedGuides: [
      'vitre-poele-noircit',
      'preparer-son-ramonage',
      'ramonage-entretien-inspection',
    ],
    relatedServices: ['ramonage-poele-bois'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'entretien-poele-granules',
    title: 'Comment entretenir un poêle à granulés ?',
    category: 'poeles',
    intent: 'Organiser l’entretien selon la notice sans toucher aux sécurités.',
    intro:
      'Le nettoyage utilisateur d’un poêle à granulés ne remplace ni sa maintenance professionnelle ni le ramonage. La notice du modèle est la référence pour les gestes, les conditions d’arrêt et les tâches accessibles.',
    sections: [
      {
        title: 'Identifier précisément l’appareil',
        text: 'Notez la marque, le modèle et la version de notice disponible. Gardez aussi la référence des granulés utilisés. En cas de demande, cette fiche permet de vérifier la prise en charge sans prétendre que tous les poêles ont les mêmes accès ou les mêmes composants.',
      },
      {
        title: 'Documenter un défaut au lieu de le contourner',
        text: 'Relevez le code exact affiché et la phase où il apparaît : allumage, fonctionnement ou arrêt. Ne neutralisez pas une sécurité et ne modifiez pas un paramètre technique pour faire disparaître l’alerte. L’ADEME décrit des réglages et opérations de maintenance à confier au professionnel selon le matériel.',
        sourceKeys: ['pellets'],
      },
      {
        title: 'Définir le périmètre de la visite',
        text: 'Précisez si vous demandez l’appareil, le conduit ou les deux. Demandez ce qui sera contrôlé et quel document sera remis. Signalez un précédent défaut, une intervention récente ou une difficulté d’accès. Une formule de ramonage ne doit pas être comprise comme une prise en charge de toutes les pannes.',
      },
    ],
    example: {
      title: 'Un arrêt avec un code répété',
      text: 'Photographiez l’écran seulement si cela ne vous expose pas et transmettez le code avec la référence du modèle. L’information est plus utile qu’une demande vague de « remise à zéro ».',
    },
    faq: [
      {
        q: 'Le mode de nettoyage automatique suffit-il ?',
        a: 'Il ne doit pas être assimilé à l’ensemble des opérations professionnelles ou au ramonage du conduit.',
        sourceKeys: ['pellets', 'frequency'],
      },
      {
        q: 'Le professionnel doit-il connaître le modèle avant la visite ?',
        a: 'La référence permet de vérifier les accès, la notice et le périmètre de prise en charge.',
        sourceKeys: ['pellets'],
      },
    ],
    sourceKeys: ['pellets', 'frequency', 'common'],
    relatedGuides: [
      'ramonage-poele-granules',
      'vitre-poele-noircit',
      'ramonage-entretien-inspection',
    ],
    relatedServices: ['ramonage-poele-granules'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'ramonage-poele-granules',
    title: 'Quand ramoner un poêle à granulés ?',
    category: 'poeles',
    intent: 'Appliquer la fréquence du conduit sans confondre maintenance et compteur.',
    intro:
      'Un poêle à granulés n’est pas dispensé de ramonage. Pour un appareil individuel, le socle national est au moins tous les douze mois, avec éventuelles prescriptions locales plus fréquentes. Une alerte de maintenance ne constitue pas, à elle seule, le calendrier réglementaire.',
    sections: [
      {
        title: 'Un conduit reste un conduit de fumée',
        text: 'Le combustible en granulés ne supprime pas l’application de R1331-70 et R1331-71. Repérez la date du dernier ramonage et la règle applicable à votre adresse. Ne transposez pas l’exception de certains conduits collectifs au gaz à un poêle individuel à granulés.',
      },
      {
        title: 'Coordonner le conduit et l’appareil',
        text: 'Demandez si un même rendez-vous peut couvrir les deux opérations et faites décrire chacune au devis. Un entretien de l’appareil n’atteste pas automatiquement le nettoyage du conduit. Conservez les documents avec les références du poêle et du raccordement concernés.',
      },
      {
        title: 'Après une période sans utilisation',
        text: 'Le Code prévoit, dans les cas d’inactivité totale concernés, le ramonage avant reprise. Indiquez la durée d’arrêt et les documents disponibles. En présence d’une anomalie, il faut en plus signaler le symptôme ; réinitialiser un compteur ne prouve ni la propreté ni la sécurité de l’installation.',
      },
    ],
    example: {
      title: 'L’écran ne signale rien',
      text: 'Même sans message d’entretien, consultez la date de l’attestation et les prescriptions applicables. L’affichage ne remplace pas la vérification du calendrier.',
    },
    faq: [
      {
        q: 'Les granulés suppriment-ils la formation de dépôts ?',
        a: 'Non : leur combustion produit des résidus et l’entretien de l’appareil et du conduit reste nécessaire.',
        sourceKeys: ['pellets'],
      },
      {
        q: 'Un passage annuel est-il toujours suffisant ?',
        a: 'Le socle national ne dispense pas de vérifier les règles locales et les besoins propres à l’installation.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency', 'common', 'pellets'],
    relatedGuides: ['frequence-ramonage', 'entretien-poele-granules', 'attestation-ramonage'],
    relatedServices: ['ramonage-poele-granules'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'vitre-poele-noircit',
    title: 'Pourquoi la vitre de mon poêle noircit-elle ?',
    category: 'poeles',
    intent: 'Qualifier un symptôme sans diagnostic automatique.',
    intro:
      'Le noircissement peut accompagner une combustion dégradée, mais ne permet pas d’identifier seul une cause. Notez quand il apparaît et faites examiner le fonctionnement si le phénomène devient inhabituel ; une vitre nettoyée ne résout pas nécessairement le problème.',
    sections: [
      {
        title: 'Décrire l’évolution plutôt qu’un diagnostic supposé',
        text: 'Notez le modèle, le combustible et le moment où le noircissement apparaît. Est-il nouveau après une intervention ou une modification d’usage ? Ces questions structurent l’échange sans conclure à une panne particulière. Il n’est pas utile de multiplier les essais pour reproduire le symptôme.',
      },
      {
        title: 'Revenir aux consignes propres à l’appareil',
        text: 'La notice fixe les conditions d’usage et les tâches de nettoyage de la vitre. N’improvisez pas de mélange de produits ou d’action abrasive. L’ADEME cite le noircissement parmi les signes possibles de mauvaise combustion ; cela ne fournit pas une méthode universelle de réparation.',
        sourceKeys: ['wood'],
      },
      {
        title: 'Signaler les autres observations',
        text: 'Précisez tout refoulement, défaut affiché ou changement du fonctionnement. Suspendez l’utilisation en cas de doute sur la sécurité et faites préciser l’évaluation nécessaire. Une demande doit décrire le symptôme avant de choisir arbitrairement entre entretien, ramonage et inspection.',
      },
    ],
    example: {
      title: 'Un changement documenté',
      text: 'Vous constatez une différence après un nouveau lot de combustible. Transmettez la référence et la chronologie, sans en déduire qu’il s’agit de l’unique cause.',
    },
    faq: [
      {
        q: 'Le noircissement prouve-t-il un conduit bouché ?',
        a: 'Non. Un symptôme visible ne suffit pas à conclure à l’état de tout le conduit.',
        sourceKeys: ['wood', 'frequency'],
      },
      {
        q: 'Nettoyer la vitre vaut-il ramonage ?',
        a: 'Non, les opérations ne portent pas sur les mêmes parties de l’installation.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['wood', 'frequency'],
    relatedGuides: ['conduit-encrasse', 'cheminee-refoule', 'entretien-poele-bois'],
    relatedServices: ['inspection-conduits', 'ramonage-poele-bois'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'choisir-bois',
    title: 'Quel bois choisir pour son appareil de chauffage ?',
    category: 'poeles',
    intent: 'Vérifier combustible, information du vendeur et compatibilité.',
    intro:
      'Choisissez d’abord un combustible autorisé par la notice de votre appareil. L’ADEME recommande du bois sec et exclut les bois traités ou souillés. Ni l’aspect d’une bûche ni une appellation commerciale ne remplacent les informations sur le produit.',
    sections: [
      {
        title: 'Lire ce que l’appareil accepte',
        text: 'Un appareil à bûches et un poêle à granulés n’acceptent pas des combustibles interchangeables. Relevez dans la notice la nature, les dimensions et les éventuelles restrictions. Si la notice est introuvable, demandez la référence au fabricant ou à un professionnel avant d’utiliser un produit différent.',
      },
      {
        title: 'Demander les informations utiles au vendeur',
        text: 'Conservez la facture, la description du combustible et les conseils de stockage. L’objectif est de pouvoir identifier ce qui a été livré et de transmettre ces éléments si un problème survient. Ne donnez pas à un label de combustible la valeur d’une qualification du prestataire de ramonage.',
      },
      {
        title: 'Prévoir le stockage dès la commande',
        text: 'Organisez une place adaptée à la notice et aux conseils du vendeur. Le bois doit être protégé de l’eau sans être enfermé dans un espace sans ventilation. La photographie du guide illustre une organisation possible ; elle ne prouve pas le taux d’humidité du combustible.',
        sourceKeys: ['wood'],
      },
    ],
    example: {
      title: 'Une annonce peu précise',
      text: 'Avant d’acheter un lot décrit seulement comme « bois de chauffage », demandez la nature du produit et les conditions d’utilisation et de stockage. Gardez la réponse avec le justificatif d’achat.',
    },
    faq: [
      {
        q: 'Puis-je brûler des chutes de meubles ?',
        a: 'Les bois peints, traités ou souillés ne sont pas des combustibles à utiliser comme des bûches de chauffage.',
        sourceKeys: ['wood'],
      },
      {
        q: 'L’illustration prouve-t-elle que les bûches sont sèches ?',
        a: 'Non. Une photographie ne mesure pas l’humidité.',
        sourceKeys: ['wood'],
      },
    ],
    sourceKeys: ['wood'],
    relatedGuides: ['bois-humide', 'entretien-poele-bois', 'limiter-bistre'],
    relatedServices: ['ramonage-poele-bois'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'bois-humide',
    title: 'Peut-on utiliser du bois humide ? Que faire d’une livraison douteuse ?',
    category: 'poeles',
    intent: 'Gérer un combustible douteux sans mesure ou délai inventé.',
    intro:
      'Ne cherchez pas à compenser un combustible inadapté en modifiant les réglages de l’appareil. L’ADEME explique que le bois humide dégrade l’efficacité et augmente la pollution. Vérifiez les informations du lot et les consignes de stockage avant utilisation.',
    sections: [
      {
        title: 'Identifier le problème concret',
        text: 'Distinguez un emballage mouillé, une exposition à la pluie et une information manquante sur le produit. Ce ne sont pas des mesures équivalentes. Photographiez le lot et gardez les documents si vous devez contacter le vendeur. Ne publiez pas une conclusion d’humidité sur la seule base de l’apparence.',
      },
      {
        title: 'Demander une réponse écrite au fournisseur',
        text: 'Précisez la référence, la date de livraison et votre question. Demandez les conditions dans lesquelles le combustible est prévu pour être utilisé. Ce guide ne fixe ni temps de séchage valable pour tous les bois ni seuil unique qui remplacerait les spécifications du produit et de l’appareil.',
      },
      {
        title: 'Reporter l’usage plutôt que bricoler une compensation',
        text: 'Si la compatibilité ou l’état du combustible reste incertain, demandez conseil avant de le brûler. Ne surchargez pas le foyer pour obtenir davantage de chaleur et ne modifiez pas des paramètres techniques. Conservez l’échange pour le prochain entretien si un changement de fonctionnement a été observé.',
      },
    ],
    example: {
      title: 'Des bûches livrées sous la pluie',
      text: 'L’eau en surface ne renseigne pas à elle seule sur tout le lot. Interrogez le vendeur avec les références de livraison et suivez ses consignes documentées de stockage avant usage.',
    },
    faq: [
      {
        q: 'Une durée de séchage trouvée en ligne s’applique-t-elle à tout lot ?',
        a: 'Non. Ne remplacez pas les informations du produit et les consignes adaptées par un délai universel.',
        sourceKeys: ['wood'],
      },
      {
        q: 'Un réglage plus fort rend-il le combustible adapté ?',
        a: 'Ne tentez pas de compenser sans avis qualifié un combustible dont l’adéquation n’est pas confirmée.',
        sourceKeys: ['wood'],
      },
    ],
    sourceKeys: ['wood'],
    relatedGuides: ['choisir-bois', 'vitre-poele-noircit', 'entretien-poele-bois'],
    relatedServices: ['ramonage-poele-bois'],
  }),
  defineGuide({
    dateVerified: '2026-10-17',
    slug: 'entretien-insert',
    title: 'Comment préparer l’entretien d’un insert ou d’un foyer fermé ?',
    category: 'cheminees-inserts',
    intent: 'Prendre en compte l’accès sans démontage risqué.',
    intro:
      'Pour un insert ou un foyer fermé, distinguez l’appareil, son habillage, le raccordement et le conduit. Le ramonage ne doit pas être confondu avec le nettoyage de la vitre ou une dépose d’éléments. Préparez la notice et faites confirmer les accès.',
    sections: [
      {
        title: 'Retrouver les références sans démonter',
        text: 'Utilisez les documents de pose ou la notice et les repères accessibles sans risque. Si vous ne connaissez pas le modèle, signalez-le au professionnel. N’ouvrez pas un habillage pour chercher une référence et ne supposez pas que les accès sont identiques à ceux d’un appareil voisin.',
      },
      {
        title: 'Décrire les accès connus',
        text: 'Indiquez ce qui est accessible et ce qui reste incertain. R1331-72 prévoit des dispositifs d’accès permettant les opérations d’entretien et de ramonage. Une difficulté d’accès doit être discutée avant la visite ; elle ne doit pas être résolue par un démontage improvisé par l’occupant.',
      },
      {
        title: 'Faire préciser appareil et conduit au devis',
        text: 'Demandez quelles opérations sont prévues sur le foyer et sur les conduits, quels éléments seront manipulés et quels documents seront remis. Inserts et foyers fermés sont regroupés sur notre page de prestation pour éviter des offres artificiellement distinctes ; la configuration réelle reste à examiner.',
      },
    ],
    example: {
      title: 'Un logement acheté avec un insert déjà posé',
      text: 'Rassemblez les documents remis lors de la vente et les anciennes attestations. Signalez les informations manquantes au professionnel avant d’envisager un nouvel usage.',
    },
    faq: [
      {
        q: 'Dois-je déposer l’habillage ?',
        a: 'Pas de votre propre initiative pour préparer une demande. Faites définir l’accès et le périmètre par le professionnel.',
        sourceKeys: ['common'],
      },
      {
        q: 'Le raccordement fait-il partie du ramonage ?',
        a: 'R1331-70 inclut les tuyaux ou conduits de raccordement dans la définition du ramonage.',
        sourceKeys: ['frequency'],
      },
    ],
    sourceKeys: ['frequency', 'common'],
    relatedGuides: [
      'preparer-son-ramonage',
      'ramonage-entretien-inspection',
      'attestation-ramonage',
    ],
    relatedServices: ['ramonage-insert'],
  }),
];
