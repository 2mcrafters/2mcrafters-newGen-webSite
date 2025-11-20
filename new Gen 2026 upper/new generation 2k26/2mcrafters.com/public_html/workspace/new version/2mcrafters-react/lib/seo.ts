import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.2mcrafters.com"),
  title: {
    default: "Crafters Experts en solutions digitales",
    template: "%s | 2M Crafters",
  },
  icons: {
    icon: "/images/logonlwhite.png",
    shortcut: "/images/logonlwhite.png",
    apple: "/images/logonlwhite.png",
  },
  description:
    "Studio digital basé au Maroc. Nous concevons des expériences web, mobiles et branding pour les marques ambitieuses.",
  keywords: ["agence digitale", "Maroc", "Next.js", "UX", "branding"],
  openGraph: {
    title: "2M Crafters",
    description:
      "Studio digital premium : développement Next.js, branding, campagnes SEO et accompagnement produit.",
    locale: "fr_FR",
    type: "website",
    siteName: "2M Crafters",
  images: [{ url: "/images/logonlwhite.png", width: 1200, height: 630, alt: "2M Crafters" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2M Crafters",
    description: "Agence digitale Next.js & design basée au Maroc",
    creator: "@2mcrafters",
  },
  alternates: {
    canonical: new URL("https://www.2mcrafters.com"),
  },
};
