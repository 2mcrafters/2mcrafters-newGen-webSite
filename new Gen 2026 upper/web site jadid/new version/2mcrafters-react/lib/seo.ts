import type { Metadata } from "next";

const keywordsString =
  'agence digitale,expérience utilisateur,design UX/UI,Next.js,branding,stratégie digitale,transformation numérique,innovation web,SEO,Maroc,Tanger,rabat,Casablanca,Digital marketing,application mobile,création de site web,e-commerce,développement web,design,digital agency,product strategy,next.js development,brand strategy,ux ui design,web innovation,seo services,performance marketing,experiences,Morocco,وكالة رقمية,تصميم تجربة المستخدم,تسويق رقمي,تحسين محركات البحث,بناء علامة تجارية,حلول ويب,التحول الرقمي,تجربة Next.js,خدمات تطوير,المغرب,' +
  'digital solutions,web development,IT services,managed cloud,SaaS platforms,cloud automation,AI solutions,cybersecurity,network security,digital marketing,content creation,content strategy,UX research,UI systems,e-commerce experiences,automation integrations,hosting performance,audit SEO,global SEO,performance optimization,branding storytelling,mobile optimization,technical SEO';

const keywords = Array.from(
  new Set(
    keywordsString
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean),
  ),
);

const multilingualDescription = [
  'Agence digitale créative au Maroc : design graphique, développement web, solutions SaaS et marketing numérique pour des expériences UX premium.',
  'Expertise mondiale en solutions cloud, AI, cybersécurité, automation, intégrations d’API et hébergement haute performance.',
  'وكالة رقمية رائدة في المغرب تقدم حلول ويب، خدمات SaaS، تسويق رقمي، أتمتة، وأمن المعلومات.',
].join(' ');

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://2mcrafters.com'),
  title: {
    default: 'Crafters Experts en solutions digitales',
    template: '%s | Crafters',
  },
  icons: {
    icon: '/images/logo-fnl-cree.png',
    shortcut: '/images/logo-fnl-cree.png',
    apple: '/images/logo-fnl-cree.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo-fnl-cree.png',
        color: '#001428',
      },
    ],
  },
  description: multilingualDescription,
  keywords,
  openGraph: {
    title: 'Crafters - Agence digitale multi-langues',
    description: multilingualDescription,
    url: 'https://2mcrafters.com/',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Crafters',
    images: [
      {
        url: 'https://2mcrafters.com/images/logo-fnl-cree.png',
        width: 1200,
        height: 630,
        alt: 'Logo 2mcrafters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crafters',
    description: 'Agence digitale Next.js & design basée au Maroc',
    creator: '@crafters',
    images: ['https://2mcrafters.com/images/logo-fnl-cree.png'],
  },
  alternates: {
    canonical: 'https://2mcrafters.com/',
    languages: {
      'fr-FR': 'https://2mcrafters.com/',
      'en-US': 'https://2mcrafters.com/en/',
      'ar-MA': 'https://2mcrafters.com/ar/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
