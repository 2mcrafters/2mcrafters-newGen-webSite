import type { Metadata } from "next";
import { faqs } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { BlogHeroSlider } from "@/components/sections/BlogHeroSlider";
import { FaqSearchSection } from "@/components/sections/FaqSearchSection";
import { getRecentNews } from "@/lib/news";

const blogDescription =
  'Blog trilingue (français, anglais, arabe) dédié aux tendances web, au design, au SEO et aux bonnes pratiques numériques de Crafters.';

const blogKeywords = [
  'blog agence digitale',
  'articles marketing digital',
  'stratégie produit',
  'FAQ services',
  'digital trends',
  'insights UX/UI',
  'SEO stories',
  'Morocco web',
  'digital case studies',
  'digital marketing blog',
  'تدوينات تسويق رقمي',
  'مقالات تجارب المستخدم',
  'أخبار الحلول الرقمية',
];

export const metadata: Metadata = {
  title: 'Blog & FAQ | CRAFTERS',
  description: blogDescription,
  keywords: blogKeywords,
  openGraph: {
    title: 'Blog & FAQ | CRAFTERS',
    description: blogDescription,
    url: 'https://2mcrafters.com/blog',
    locale: 'fr_FR',
    type: 'article',
    siteName: 'Crafters',
    images: [
      {
        url: '/images/logonlwhite.png',
        width: 1200,
        height: 630,
        alt: 'CRAFTERS Blog',
      },
    ],
  },
  alternates: {
    canonical: 'https://2mcrafters.com/blog',
    languages: {
      'fr-FR': 'https://2mcrafters.com/blog',
      'en-US': 'https://2mcrafters.com/en/blog',
      'ar-MA': 'https://2mcrafters.com/ar/blog',
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

const newsDateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function BlogPage() {
  const recentNews = await getRecentNews();

  const formatDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return newsDateFormatter.format(date);
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section with Slider */}
      <section className="px-4 pt-32 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <BlogHeroSlider />
        </div>
      </section>

      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          <FadeInOnScroll className="space-y-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#ffffff]">
              L’expertise de notre équipe, partagée avec vous.
            </span>
            <p className="text-3xl font-bold text-white md:text-4xl">
              Actualités digitales récentes sélectionnées par nos experts.
            </p>
            <p className="mx-auto max-w-3xl text-lg text-white">
              Ces insights sont rafraîchis automatiquement chaque mois via notre API &ldquo;news&rdquo; afin de vous tenir au courant des tendances Web, design et tech.
            </p>
          </FadeInOnScroll>

          <div className="grid gap-6 rounded-3xl bg-[#001428]/60 p-6 backdrop-blur-xl md:grid-cols-2 lg:grid-cols-2">
            {recentNews.slice(0, 6).map((article) => (
              <FadeInOnScroll key={article.url} className="h-full">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-blue-400/60 hover:bg-slate-900/70"
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                      {article.source} · {formatDate(article.publishedAt)}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                    <p className="text-sm text-white">{article.description}</p>
                  </div>
                </a>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSearchSection faqs={faqs} />

      <div className="-mt-12">
        <NewsletterSection />
      </div>
    </div>
  );
}
