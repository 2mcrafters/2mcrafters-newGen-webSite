export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog & FAQ" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Développement web & SaaS",
    description: "Sites vitrines, plateformes, ERP & SaaS sur mesure, intégration d’API, sécurisation et performance.",
    highlights: ["Sites vitrines", "Plateformes métiers", "ERP & API"],
    icon: "Code2",
  },
  {
    title: "Branding & design graphique",
    description: "Identité visuelle, logos, chartes graphiques et supports print & digitaux.",
    highlights: ["Identité visuelle", "Templates socials", "Print premium"],
    icon: "PenTool",
  },
  {
    title: "Vidéo & production cinématique",
    description: "Vidéos publicitaires, social media, institutionnelles et storytelling.",
    highlights: ["Captation & montage", "Motion design", "Formats courts"],
    icon: "TrendingUp",
  },
  {
    title: "Digitalisation RH & systèmes métiers",
    description: "SIRH, gestion de présence, paie, dashboards et automatisation.",
    highlights: ["SIRH complet", "Automatisation", "Dashboards"],
    icon: "Cpu",
  },
  {
    title: "Applications mobiles",
    description: "Apps hybrides React Native & Expo alignées avec votre écosystème.",
    highlights: ["iOS & Android", "Sync aux API", "UX mobile-first"],
    icon: "Smartphone",
  },
  {
    title: "UI/UX & expérience utilisateur",
    description: "Interfaces modernes, fluides et accessibles pour web et mobile.",
    highlights: ["Audit UX", "Design systems", "Tests utilisateurs"],
    icon: "PanelsTopLeft",
  },
];

export const whyChoosePoints = [
  {
    title: "Approche 360°",
    detail: "Technique, design, contenu et stratégie réunis dans une même squad.",
  },
  {
    title: "Culture produit",
    detail: "Nous pensons usage, valeur et expérience – pas seulement fonctionnalités.",
  },
  {
    title: "Expertise tech",
    detail: "Laravel, React, Next.js, Node.js, MongoDB, MySQL, React Native, Tailwind, CI/CD…",
  },
  {
    title: "Accompagnement humain",
    detail: "Écoute, pédagogie et communication claire à chaque étape.",
  },
  {
    title: "Ancrage local, vision internationale",
    detail: "Basés à Tanger avec une ambition globale.",
  },
];

export const processSteps = [
  {
    title: "Diagnostic & cadrage",
    detail: "Analyse du besoin, des objectifs et contraintes pour proposer la bonne trajectoire.",
    icon: "Compass",
  },
  {
    title: "Conception & design",
    detail: "Wireframes, maquettes, identité visuelle et UX pensés pour vos utilisateurs.",
    icon: "Sparkles",
  },
  {
    title: "Développement & intégration",
    detail: "Mise en place technique, intégration des contenus et connexions à vos outils.",
    icon: "Cpu",
  },
  {
    title: "Tests & optimisation",
    detail: "Recette fonctionnelle, performance, SEO technique et correctifs.",
    icon: "Shield",
  },
  {
    title: "Lancement & accompagnement",
    detail: "Mise en ligne, formation équipes, support continu et évolution.",
    icon: "Rocket",
  },
];

export const contactItems = [
  { label: "Téléphone", value: "+212 600-000-000", href: "tel:+212600000000", icon: "PhoneCall" },
  { label: "Email", value: "bonjour@2mcrafters.com", href: "mailto:bonjour@2mcrafters.com", icon: "Mail" },
  { label: "Studio", value: "Tanger & Remote", href: "https://maps.app.goo.gl/", icon: "MapPin" },
];

export const clients = [
  { name: "Yassir", focus: "Mobilité" },
  { name: "Orange Fab", focus: "Corporate" },
  { name: "Chari", focus: "Retail" },
  { name: "INEA", focus: "Énergie" },
  { name: "Back Market", focus: "Recommerce" },
  { name: "Flowdesk", focus: "Fintech" },
];

export const caseStudies = [
  {
    title: "Cabinet Lexis",
    category: "Site vitrine • Branding • SEO",
    description:
      "Refonte complète du site et de l’identité visuelle pour un cabinet d’avocats basé à Tanger. Résultat : image plus professionnelle et demandes entrantes en hausse.",
    image: "/images/posts/services/portfolio-avocats.jpg",
    stats: ["+45% leads", "Charte FR/EN", "SEO local"],
  },
  {
    title: "Industria ERP",
    category: "SaaS • ERP métier • Dashboard",
    description:
      "Plateforme de gestion pour une entreprise industrielle : suivi dossiers, équipes et automatisations temps réel.",
    image: "/images/posts/services/portfolio-industrie.jpg",
    stats: ["-30% erreurs", "Temps réel", "KPIs partagés"],
  },
  {
    title: "Smart RH",
    category: "SIRH • Présence & paie • Digitalisation",
    description:
      "Solution complète de digitalisation RH : présence, congés, paie, contrats et documents centralisés.",
    image: "/images/posts/services/portfolio-rh.jpg",
    stats: ["Gain de temps x3", "Portail employés", "Reporting live"],
  },
];

export const detailedServices = [
  {
    id: "web-saas",
    title: "Développement web, ERP & SaaS sur mesure",
    intro:
      "Sites vitrines, portails clients, ERP et plateformes SaaS sécurisés et évolutifs. Nous adaptons chaque module à vos enjeux métiers.",
    points: [
      "Sites vitrines, corporate et institutionnels",
      "Plateformes métiers et portails clients",
      "ERP, CRM, SIRH & systèmes internes",
      "Intégration d’API et automatisation des flux",
      "Performance, sécurité, SEO technique",
    ],
  },
  {
    id: "mobile",
    title: "Applications mobiles React Native & Expo",
    intro:
      "Apps hybrides iOS/Android connectées à vos systèmes existants et pensées pour les usages terrain.",
    points: [
      "Applications mobiles B2B et B2C",
      "Connexion aux API (Laravel, Node.js, etc.)",
      "Notifications, authentification, synchronisation",
      "UI/UX mobile-first",
      "Publication sur les stores",
    ],
  },
  {
    id: "branding",
    title: "Branding & design graphique",
    intro:
      "Identités visuelles fortes : logo, charte, templates print & digitaux pour une marque cohérente.",
    points: [
      "Logo & identité visuelle",
      "Chartes graphiques complètes",
      "Templates réseaux sociaux",
      "Supports print premium",
      "Pitch decks & présentations",
    ],
  },
  {
    id: "content",
    title: "Contenus & réseaux sociaux",
    intro:
      "Stratégie éditoriale, rédaction FR/EN et créations sociales pour nourrir votre audience.",
    points: [
      "Stratégie éditoriale",
      "Textes pour sites (FR/EN)",
      "Posts & visuels social media",
      "Campagnes spéciales",
      "Optimisation conversion",
    ],
  },
  {
    id: "video",
    title: "Vidéo & production cinématique",
    intro:
      "Vidéos corporate, publicitaires ou social media avec storytelling et motion aux bons formats.",
    points: [
      "Vidéos corporate & institutionnelles",
      "Publicités vidéo & social ads",
      "Captation et montage",
      "Motion design & habillage",
      "Stories, reels, formats courts",
    ],
  },
  {
    id: "digitalisation",
    title: "Digitalisation RH & systèmes métiers",
    intro:
      "SIRH, paie, workflows internes : nous centralisons vos données et automatisons vos processus.",
    points: [
      "Systèmes SIRH complets",
      "Dématérialisation documents",
      "Dashboards personnalisés",
      "Automatisation workflows",
      "Solutions sur mesure",
    ],
  },
  {
    id: "ux",
    title: "UI/UX design & product design",
    intro:
      "Expériences intuitives via audits UX, prototypes et design systems prêts pour dev.",
    points: [
      "Audit UX & recommandations",
      "Wireframes & prototypes",
      "Design systems & librairies",
      "Tests utilisateurs",
      "Hand-off complet",
    ],
  },
  {
    id: "cloud",
    title: "Cloud, hébergement & déploiement",
    intro:
      "Nous prenons en charge serveurs, SSL, CI/CD, monitoring et sécurité.",
    points: [
      "Hébergement VPS & cloud",
      "Configuration Nginx, SSL, domaines",
      "CI/CD & déploiement continu",
      "Monitoring & optimisation",
      "Sauvegardes & sécurité",
    ],
  },
];

export const portfolioProjects = caseStudies;

export const aboutValues = [
  {
    title: "Créativité responsable",
    detail: "Des idées originales, toujours alignées avec vos objectifs business.",
  },
  {
    title: "Fiabilité & transparence",
    detail: "Des délais réalistes, un suivi clair et des engagements tenus.",
  },
  {
    title: "Exigence technique",
    detail: "Technologies modernes, bonnes pratiques et qualité de code rigoureuse.",
  },
  {
    title: "Esprit de collaboration",
    detail: "Nous construisons vos projets avec vous, pas à votre place.",
  },
];

export const blogPosts = [
  {
    title: "Comment préparer le cahier des charges de votre site web ?",
    summary:
      "Un guide simple pour clarifier vos besoins avant de lancer un projet digital et aligner toutes les parties prenantes.",
  },
  {
    title: "5 erreurs fréquentes lors d’une refonte de site",
    summary: "À éviter pour ne pas perdre en visibilité, en SEO et en performance.",
  },
  {
    title: "Pourquoi la digitalisation RH est devenue une priorité ?",
    summary: "Les enjeux pour les entreprises et les bénéfices concrets d’un SIRH.",
  },
  {
    title: "L’importance du branding dans un univers digital saturé",
    summary: "Comment se démarquer avec une identité claire et cohérente.",
  },
];

export const faqs = [
  {
    question: "Combien de temps dure un projet de site web ?",
    answer:
      "Entre 3 et 6 semaines pour un site vitrine classique, du cadrage à la mise en ligne, selon la complexité et la réactivité sur les contenus.",
  },
  {
    question: "Travaillez-vous uniquement avec des clients au Maroc ?",
    answer:
      "Non. Nous opérons depuis Tanger mais accompagnons aussi des clients à l’international grâce à des outils de collaboration en ligne.",
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer:
      "Oui, pour la maintenance technique, la sécurité, les sauvegardes et même l’actualisation des contenus si besoin.",
  },
  {
    question: "Pouvez-vous intervenir sur un site déjà existant ?",
    answer:
      "Nous pouvons auditer un site existant, proposer une amélioration progressive ou prendre en charge une refonte complète.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Un acompte est demandé au démarrage puis des paiements échelonnés en fonction des jalons du projet.",
  },
];

export const projectTypes = [
  "Site web",
  "Application mobile",
  "SaaS / ERP / SIRH",
  "Branding & design",
  "Vidéo & contenu",
  "Autre",
];

export const newsletterCopy = {
  title: "Restez informé de nos nouveautés",
  text: "Conseils, études de cas et ressources pour accélérer votre transformation digitale directement dans votre boîte mail.",
  cta: "Je m’abonne",
};
