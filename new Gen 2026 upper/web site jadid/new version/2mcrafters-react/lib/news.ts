export type NewsArticle = {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
};

const fallbackNews: NewsArticle[] = [
  {
    title: '🧠 AI & Design — 2026',
    description:
      'L’IA Générative transforme le Web Design en 2026. L’intelligence artificielle redéfinit la création digitale : design adaptatif, composants intelligents, optimisation automatique et workflows accélérés. Découvrez comment les agences gagnent en performance et en créativité. Keywords : AI Design, Generative AI, Design Automation, Web Design 2026, Smart Components, UX Intelligence.',
    url: 'https://2mcrafters.com/news/ai-design-2026',
    source: 'Crafters Research',
    publishedAt: '2026-01-10T00:00:00Z',
  },
  {
    title: '⚡ Tech — 2026',
    description:
      'Next.js 15 : Le nouveau standard du web haute performance. Next.js 15 apporte un rendu ultra-rapide, une gestion serveur optimisée et une architecture plus stable pour les applications modernes. Un tournant majeur pour les équipes techniques et les projets à grande échelle. Keywords : Next.js 15, React Server Components, Web Performance, Modern Frameworks, SSR, Edge Rendering.',
    url: 'https://2mcrafters.com/news/nextjs-15-perf',
    source: 'Crafters Tech Lab',
    publishedAt: '2026-01-03T00:00:00Z',
  },
  {
    title: '✍️ UX/UI — 2026',
    description:
      'UX & IA : Vers une expérience utilisateur intelligente. L’UX writing et l’IA conversationnelle fusionnent pour créer des interfaces plus humaines, plus rapides et plus cohérentes. Les contenus deviennent dynamiques, personnalisés et totalement centrés utilisateur. Keywords : UX Writing, AI UX, Conversational UX, User Experience 2026, Microcopy, IA Design.',
    url: 'https://2mcrafters.com/news/ux-ia-2026',
    source: 'Crafters Studio',
    publishedAt: '2026-01-01T00:00:00Z',
  },
  {
    title: '🌱 Green IT — 2026',
    description:
      'Green Coding : Le futur du développement durable. Les entreprises digitales adoptent des architectures moins énergivores, des optimisations serveur et des stratégies responsables pour réduire l’empreinte carbone. Le Green IT devient un levier stratégique. Keywords : Green IT, Sustainable Web, Eco-Responsible Websites, Carbon Footprint, Energy Optimization.',
    url: 'https://2mcrafters.com/news/green-coding-2026',
    source: 'Crafters Sustainability',
    publishedAt: '2025-12-28T00:00:00Z',
  },
  {
    title: '🎨 Branding — 2026',
    description:
      'Tech Branding : Construire une identité forte dans un monde digital saturé. Avec la surabondance d’offres en ligne, les marques doivent miser sur une identité visuelle cohérente, émotionnelle et mémorable. Le branding devient un accélérateur de croissance et un marqueur de confiance. Keywords : Digital Branding, Brand Identity, Visual Strategy, Brand Positioning, Creative Direction.',
    url: 'https://2mcrafters.com/news/branding-2026',
    source: 'Crafters Brand Desk',
    publishedAt: '2025-12-20T00:00:00Z',
  },
  {
    title: '💼 Business & Digital Transformation — 2026',
    description:
      'Pourquoi la transformation digitale est devenue indispensable ? Les entreprises doivent moderniser leurs processus, automatiser leurs flux et intégrer l’IA pour rester compétitives. La digitalisation RH, CRM, et ERP devient un pilier stratégique pour la performance globale. Keywords : Digital Transformation, Business Automation, HR Tech, ERP Solutions, AI Automation, Modern Workplace.',
    url: 'https://2mcrafters.com/news/digital-transformation-2026',
    source: 'Crafters Strategy',
    publishedAt: '2025-12-15T00:00:00Z',
  },
];

const env = (process.env ?? {}) as Record<string, string | undefined>;

export async function getRecentNews(): Promise<NewsArticle[]> {
  const apiKey = env.NEWS_API_KEY;
  const feedUrl =
    env.NEWS_FEED_URL ??
    (apiKey ? `https://newsapi.org/v2/top-headlines?country=fr&pageSize=8&apiKey=${apiKey}` : null);

  if (feedUrl) {
    try {
      const response = await fetch(feedUrl, { cache: 'no-cache' });
      if (response.ok) {
        const payload = await response.json();
        if (Array.isArray(payload.articles)) {
          type NewsApiArticle = {
            title?: string;
            description?: string;
            content?: string;
            url?: string;
            source?: { name?: string };
            publishedAt?: string;
          };

          return payload.articles
            .slice(0, 6)
            .map((article: NewsApiArticle) => ({
              title: article.title ?? 'Actu récente',
              description:
                article.description ?? article.content ?? 'Consultez la source pour en savoir plus.',
              url: article.url ?? '#',
              source: article.source?.name ?? 'Source inconnue',
              publishedAt: article.publishedAt ?? new Date().toISOString(),
            }));
        }
      }
    } catch {
      // fallback silently
    }
  }

  return fallbackNews;
}