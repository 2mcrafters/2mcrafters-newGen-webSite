import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import GlobalVisualsClient from '@/components/visuals/GlobalVisualsClient';
import { baseMetadata } from '@/lib/seo';

const inter = Inter({
  variable: '--font-sans-base',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading-base',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  ...baseMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '2mcrafters',
    alternateName: 'Crafters',
    url: 'https://2mcrafters.com',
    logo: 'https://2mcrafters.com/images/logo-fnl-cree.png',
    sameAs: [
      'https://www.linkedin.com/company/108333019/admin/dashboard/',
      'https://www.instagram.com/2m.crafters/',
      'https://www.facebook.com/people/2mcrafters/61578604900086/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+212774997108',
        contactType: 'Customer Service',
        areaServed: 'MA',
        availableLanguage: ['French', 'English'],
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '2mcrafters',
    url: 'https://2mcrafters.com',
    headline: 'Solutions digitales, SaaS, cloud, cybersécurité & UX/UI',
    description:
      'Agence digitale marocaine spécialisée en développement web, solutions SaaS, cloud sécurisé, marketing numérique et design d’expérience.',
    inLanguage: ['fr-FR', 'en-US', 'ar-MA'],
    publisher: {
      '@type': 'Organization',
      name: '2mcrafters',
      url: 'https://2mcrafters.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://2mcrafters.com/images/logo-fnl-cree.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://2mcrafters.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://2mcrafters.com/',
      },
    ],
  };

  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-linear-to-b from-[#00315f] to-[#001428] text-white antialiased">
        <Script
          id="organization-json-ld"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-json-ld"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="breadcrumb-json-ld"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <SmoothScrollProvider
          config={{ lerp: 0.1, duration: 1.25, touchMultiplier: 1.15, anchorOffset: -88 }}
        >
          <GlobalVisualsClient />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <ScrollToTopButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
