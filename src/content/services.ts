import { company, isPreview } from '@/config/company';
export type Service = {
  slug: string;
  title: string;
  short: string;
  category: string;
  description: string;
  detail: string;
  installations: string;
  safety: string;
  image: string;
  alt: string;
  steps: string[];
  faq: { q: string; a: string }[];
};
export const services: Service[] = [
  {
    slug: 'ramonage-cheminee',
    title: 'Ramonage de cheminée',
    short: 'Cheminées',
    category: 'Le charme du feu ouvert',
    description: 'Retrouver le plaisir du feu, avec un conduit entretenu.',
    detail:
      'Le ramonage mécanique permet de retirer les suies et dépôts accessibles dans le conduit de fumée. L’accès, la protection de la pièce et l’état du conduit sont évalués avant de définir la méthode adaptée.',
    installations:
      'Cheminées traditionnelles à foyer ouvert, conduits maçonnés ou tubés compatibles avec la méthode retenue.',
    safety:
      'Un mauvais tirage, une odeur inhabituelle ou des fumées dans la pièce nécessitent un avis professionnel avant une nouvelle utilisation.',
    image: 'cheminee',
    alt: 'Cheminée traditionnelle en pierre et brosse de ramonage, illustration générée par IA',
    steps: [
      'Échange sur l’installation et ses accès',
      'Protection du foyer et de la pièce',
      'Action mécanique adaptée au conduit',
      'Collecte des résidus et retour sur les observations',
    ],
    faq: [
      {
        q: 'Faut-il préparer la cheminée ?',
        a: 'Laissez refroidir complètement l’appareil et libérez l’accès au foyer. Précisez les contraintes d’accès lors de la demande.',
      },
      {
        q: 'Une bûche de ramonage suffit-elle ?',
        a: 'Un produit chimique ne remplace pas le ramonage mécanique requis. Demandez conseil avant d’utiliser un produit dans votre installation.',
      },
    ],
  },
  {
    slug: 'ramonage-poele-bois',
    title: 'Ramonage de poêle à bois',
    short: 'Poêles à bois',
    category: 'La chaleur essentielle',
    description: 'Prendre soin du conduit qui accompagne votre poêle à bois.',
    detail:
      'Les dépôts liés à la combustion du bois peuvent s’accumuler dans le raccordement et le conduit. Leur retrait mécanique se prépare en tenant compte du tubage, des coudes et des consignes du fabricant.',
    installations:
      'Poêles à bûches et conduits de raccordement compatibles. L’entretien de l’appareil est à distinguer de celui du conduit.',
    safety:
      'Utilisez le combustible prévu par le fabricant. Du bois trop humide et une combustion mal réglée favorisent l’encrassement.',
    image: 'poele-bois',
    alt: 'Poêle à bois noir avec conduit apparent, illustration générée par IA',
    steps: [
      'Identification du modèle et du conduit',
      'Préparation des accès et protections',
      'Ramonage avec outils compatibles',
      'Nettoyage et explication des points observés',
    ],
    faq: [
      {
        q: 'Le poêle doit-il être froid ?',
        a: 'Oui, le foyer et les cendres doivent être entièrement refroidis avant une intervention.',
      },
      {
        q: 'L’entretien du poêle est-il inclus ?',
        a: 'Le périmètre doit être précisé au devis. Ramonage du conduit et entretien de l’appareil sont deux opérations distinctes.',
      },
    ],
  },
  {
    slug: 'ramonage-poele-granules',
    title: 'Ramonage de poêle à granulés',
    short: 'Poêles à granulés',
    category: 'La précision au quotidien',
    description: 'Un entretien du conduit adapté aux particularités des granulés.',
    detail:
      'Les fumées d’un poêle à granulés circulent dans un ensemble de raccordements et de conduits dont l’accès dépend du modèle. Le ramonage doit respecter les matériaux et les instructions du fabricant.',
    installations:
      'Poêles à granulés avec conduit accessible ; compatibilité et périmètre à confirmer selon la marque et le modèle.',
    safety:
      'Un code erreur ou un arrêt répété peut avoir plusieurs causes. Ne neutralisez pas les sécurités et consultez un professionnel.',
    image: 'poele-granules',
    alt: 'Poêle à granulés contemporain, illustration générée par IA',
    steps: [
      'Identification du modèle et des préconisations',
      'Contrôle des accès de ramonage',
      'Nettoyage mécanique du conduit accessible',
      'Remise en ordre et observations',
    ],
    faq: [
      {
        q: 'Ramonage et maintenance annuelle sont-ils identiques ?',
        a: 'Non. La maintenance de l’appareil peut comprendre d’autres opérations. Précisez vos besoins avant le devis.',
      },
      {
        q: 'Dois-je donner la marque du poêle ?',
        a: 'Oui, la marque, le modèle et les documents disponibles aident à confirmer la prise en charge.',
      },
    ],
  },
  {
    slug: 'ramonage-insert',
    title: 'Ramonage d’insert et de foyer fermé',
    short: 'Inserts & foyers fermés',
    category: 'Le feu, bien accompagné',
    description: 'Entretenir un conduit, même lorsque son accès est plus discret.',
    detail:
      'Inserts et foyers fermés partagent des besoins proches pour l’entretien du conduit. Les éléments de l’appareil sont manipulés uniquement selon la notice et le périmètre convenu.',
    installations:
      'Inserts à bois et foyers fermés, avec accès au raccordement et au conduit à préciser.',
    safety:
      'Une vitre qui noircit rapidement n’identifie pas à elle seule une panne. Combustible, réglage et tirage doivent être appréciés ensemble.',
    image: 'insert',
    alt: 'Insert vitré intégré dans un mur en pierre, illustration générée par IA',
    steps: [
      'Repérage de l’accès au conduit',
      'Protection de l’habillage et du foyer',
      'Ramonage du parcours accessible',
      'Collecte des suies et observations',
    ],
    faq: [
      {
        q: 'Pourquoi regrouper inserts et foyers fermés ?',
        a: 'Leur entretien de conduit suit des principes proches. Le devis précise les particularités de votre appareil.',
      },
      {
        q: 'Faut-il démonter l’habillage ?',
        a: 'Cela dépend des accès existants. Signalez toute difficulté ; aucun démontage non convenu n’est à anticiper seul.',
      },
    ],
  },
  {
    slug: 'ramonage-chaudiere',
    title: 'Ramonage de chaudière',
    short: 'Chaudières',
    category: 'Un conduit à part entière',
    description: 'Distinguer le ramonage du conduit de l’entretien de la chaudière.',
    detail:
      'Le conduit d’une chaudière à combustion peut nécessiter un ramonage selon son installation. La prise en charge dépend du combustible, du matériau et des accès ; elle ne vaut pas entretien complet de la chaudière.',
    installations:
      'Conduits de chaudières à combustion dont la compatibilité est confirmée au préalable. Aucun combustible n’est accepté sans vérification.',
    safety:
      'Ne démontez pas la chaudière ni ses organes de sécurité. L’entretien réglementaire de l’appareil relève d’une prestation spécifique.',
    image: 'chaudiere',
    alt: 'Chaudière domestique et raccordement de fumée, illustration générée par IA',
    steps: [
      'Identification du combustible et du conduit',
      'Confirmation du périmètre de l’intervention',
      'Ramonage du conduit compatible',
      'Compte rendu des observations',
    ],
    faq: [
      {
        q: 'L’entretien annuel de chaudière est-il compris ?',
        a: 'Non par défaut. Cette opération distincte doit être expressément confirmée.',
      },
      {
        q: 'Toutes les chaudières sont-elles concernées ?',
        a: 'La méthode dépend du modèle et de l’installation. Envoyez ces informations avant de demander un rendez-vous.',
      },
    ],
  },
  {
    slug: 'ramonage-conduits',
    title: 'Entretien et ramonage des conduits',
    short: 'Conduits de fumée',
    category: 'L’essentiel se joue à l’intérieur',
    description: 'Une attention portée au parcours complet des fumées.',
    detail:
      'L’intervention se concentre sur les parois intérieures du conduit accessible pour retirer les dépôts de combustion. L’état apparent, les changements de direction et les accès orientent le travail.',
    installations:
      'Conduits maçonnés, tubés ou métalliques compatibles avec la méthode choisie, après examen de leur configuration.',
    safety:
      'Un ramonage n’est pas une certification de conformité de l’ensemble de l’installation et ne remplace pas un diagnostic si un défaut est suspecté.',
    image: 'conduit',
    alt: 'Section de conduit métallique dans un atelier, illustration générée par IA',
    steps: [
      'Recueil des informations sur le parcours',
      'Choix de l’accès et du matériel',
      'Nettoyage mécanique adapté',
      'Évacuation des résidus et observations',
    ],
    faq: [
      {
        q: 'Un conduit inutilisé doit-il être contrôlé ?',
        a: 'Avant une remise en service, faites évaluer son état et son usage futur par un professionnel.',
      },
      {
        q: 'Le ramonage vérifie-t-il l’étanchéité ?',
        a: 'Un essai d’étanchéité est une opération distincte. Il doit être demandé et confirmé au préalable.',
      },
    ],
  },
  {
    slug: 'debistrage',
    title: 'Débistrage et traitement du bistre',
    short: 'Débistrage',
    category: 'Aller au-delà du ramonage',
    description: 'Des dépôts tenaces appellent une évaluation spécifique.',
    detail:
      'Le bistre est un dépôt dur et adhérent lié à la condensation de produits de combustion. Quand le ramonage courant ne suffit pas, une action spécifique peut être envisagée après diagnostic de l’état du conduit.',
    installations:
      'Conduits présentant des dépôts durs, après confirmation de la faisabilité et de la résistance du support.',
    safety:
      'Le débistrage ne se décide pas à distance sur une simple couleur. La méthode et ses limites dépendent du conduit ; un produit chimique ne garantit pas l’élimination des dépôts.',
    image: 'debistrage',
    alt: 'Outillage professionnel de débistrage à l’arrêt, illustration générée par IA',
    steps: [
      'Évaluation du dépôt et de son support',
      'Définition d’une méthode compatible',
      'Action spécifique si la faisabilité est confirmée',
      'Collecte des résidus et recommandations',
    ],
    faq: [
      {
        q: 'Ramonage ou débistrage : quelle différence ?',
        a: 'Le ramonage retire principalement les suies et dépôts accessibles. Le débistrage vise des dépôts durs et adhérents et demande une évaluation particulière.',
      },
      {
        q: 'Peut-on garantir un conduit comme neuf ?',
        a: 'Non. L’état initial, le matériau et la profondeur des dépôts déterminent les limites de l’intervention.',
      },
    ],
  },
  {
    slug: 'inspection-conduits',
    title: 'Inspection et diagnostic des conduits',
    short: 'Inspection & diagnostic',
    category: 'Comprendre avant d’intervenir',
    description: 'Faire le point sur un conduit et ses conditions d’accès.',
    detail:
      'Une inspection apporte des observations sur les parties accessibles d’un conduit. Selon le matériel disponible et le périmètre convenu, elle peut aider à repérer des dépôts, un obstacle ou une dégradation apparente.',
    installations:
      'Conduits existants dont les accès permettent un examen. L’inspection vidéo est proposée uniquement si elle est explicitement confirmée.',
    safety:
      'Une inspection visuelle ne constitue pas à elle seule un contrôle complet de conformité ou d’étanchéité.',
    image: 'inspection',
    alt: 'Caméra d’inspection et câble à côté d’un conduit, illustration générée par IA',
    steps: [
      'Définition de la question à examiner',
      'Repérage des accès possibles',
      'Observation des parties accessibles',
      'Restitution des limites et suites utiles',
    ],
    faq: [
      {
        q: 'Une inspection vidéo est-elle systématique ?',
        a: 'Non. Le matériel et le périmètre exact doivent être confirmés au devis.',
      },
      {
        q: 'Après des fumées dans la pièce, puis-je rallumer ?',
        a: 'Suspendez l’utilisation et demandez une évaluation. En cas de danger ou de suspicion d’intoxication, évacuez et contactez les secours.',
      },
    ],
  },
];
export const visibleServices = () =>
  services.filter((s) => isPreview() || company.services.includes(s.slug));
export const serviceConfirmed = (s: Service) => company.services.includes(s.slug);
