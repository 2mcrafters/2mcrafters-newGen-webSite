import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { AuroraBackground } from "@/components/visuals/AuroraBackground";
import { CustomCursor } from "@/components/visuals/CustomCursor";
import { ScrollProgressBar } from "@/components/visuals/ScrollProgressBar";
import { ScrollTrail } from "@/components/visuals/ScrollTrail";
import { TechPattern } from "@/components/visuals/TechPattern";
import { baseMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-sans-base",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-base",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "2M Crafters",
    url: "https://www.2mcrafters.com",
    logo: "https://www.2mcrafters.com/images/logonlwhite.png",
    sameAs: [
      "https://www.linkedin.com",
      "https://www.instagram.com",
      "https://www.facebook.com",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+212600000000",
        contactType: "Customer Service",
        areaServed: "MA",
        availableLanguage: ["French", "English"],
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
        <SmoothScrollProvider config={{ lerp: 0.1, duration: 1.25, touchMultiplier: 1.15, anchorOffset: -88 }}>
          <TechPattern />
          <AuroraBackground />
          <ScrollTrail />
          <ScrollProgressBar />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CustomCursor />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
