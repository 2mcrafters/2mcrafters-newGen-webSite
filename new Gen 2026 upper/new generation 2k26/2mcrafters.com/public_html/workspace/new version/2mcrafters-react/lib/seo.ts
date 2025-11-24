import type { Metadata } from "next";

const keywordsByLanguage = {
  fr: [
    'agence digitale',
    'expérience utilisateur',
    'design UX/UI',
    'Next.js',
    'branding',
    'stratégie digitale',
    'transformation numérique',
    'innovation web',
    'SEO',
    'Maroc',
    'Tanger',
    'rabat',
    'Casablanca',
    'Digital marketing',
    'application mobile',
    'création de site web',
    'e-commerce',
    'développement web',
    'design',
  ],
  en: [
    'digital agency',
    'product strategy',
    'next.js development',
    'brand strategy',
    'ux ui design',
    'web innovation',
    'seo services',
    'performance marketing',
    'experiences',
    'Morocco',
  ],
  ar: [
    'وكالة رقمية',
    'تصميم تجربة المستخدم',
    'تسويق رقمي',
    'تحسين محركات البحث',
    'بناء علامة تجارية',
    'حلول ويب',
    'التحول الرقمي',
    'تجربة Next.js',
    'خدمات تطوير',
    'المغرب',
  ],
};

const uniqueKeywords = Array.from(
  new Set(
    Object.values(keywordsByLanguage).flatMap((keywords) =>
      keywords.map((keyword) => keyword.trim()),
    ),
  ),
);

const multilingualDescription = [
  'Agence digitale créative au Maroc : design graphique, développement web et mobile, création de SaaS et production vidéo.',
  'Expertise en IT, UX/UI, applications mobiles, solutions SaaS et filmmaking pour marques ambitieuses.',
  'وكالة رقمية مغربية متخصصة في التصميم الجرافيكي، تطوير الويب والموبايل، إنتاج الفيديو، وبناء منصات SaaS.',
].join(' ');

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.2mcrafters.com'),
  title: {
    default: 'Crafters Experts en solutions digitales',
    template: '%s | Crafters',
  },
  icons: {
    icon: '/images/logonlwhite.png',
    shortcut: '/images/logonlwhite.png',
    apple: '/images/logonlwhite.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logonlwhite.png',
        color: '#001428',
      },
    ],
  },
  description: multilingualDescription,
  keywords: uniqueKeywords,
  openGraph: {
    title: 'Crafters - Agence digitale multi-langues',
    description: multilingualDescription,
    url: 'https://www.2mcrafters.com',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Crafters',
    images: [
      {
        url: '/images/logonlwhite.png',
        width: 1200,
        height: 630,
        alt: 'Logo Crafters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crafters',
    description: 'Agence digitale Next.js & design basée au Maroc',
    creator: '@crafters',
  },
  alternates: {
    canonical: new URL('https://www.2mcrafters.com'),
    languages: {
      'fr-FR': 'https://www.2mcrafters.com',
      'en-US': 'https://www.2mcrafters.com/en',
      'ar-MA': 'https://www.2mcrafters.com/ar',
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
