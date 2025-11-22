import type { Metadata } from "next";
import { blogPosts, faqs } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { BlogHeroSlider } from "@/components/sections/BlogHeroSlider";

export const metadata: Metadata = {
  title: "Blog & FAQ | 2MCRAFTERS",
  description:
    "Articles sur le web, le design et la digitalisation, ainsi qu’une FAQ pour répondre aux questions fréquentes sur nos services.",
};

export default function BlogPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section with Slider */}
      <section className="px-4 pt-32 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <BlogHeroSlider />
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInOnScroll className="space-y-4">
              <h2 className="text-3xl font-bold text-white md:text-4xl">L’expertise de notre équipe, partagée avec vous.</h2>
              <p className="text-lg text-slate-400">
                Nos articles décryptent les tendances du digital, du design, du développement et des systèmes métiers.
                Chaque publication est pensée pour vous apporter des insights concrets, des bonnes pratiques et des stratégies applicables immédiatement.
              </p>
            </FadeInOnScroll>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <FadeInOnScroll 
                key={post.title} 
                delay={index * 100} 
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#00315f]/80 to-[#001428]/80 backdrop-blur-sm transition-all hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-300">
                    {post.summary}
                  </p>
                  
                  <div className="mt-auto flex items-center pt-4 text-sm font-medium text-blue-400">
                    Lire l'article
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <FadeInOnScroll className="mb-16 text-center space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#00315f]">Support & Aide</span>
            <h2 className="text-3xl font-bold text-[#001428] md:text-4xl">Questions Fréquentes</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#00315f]/80">
              Tout ce que vous devez savoir sur notre processus de travail, nos services et notre accompagnement.
            </p>
          </FadeInOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInOnScroll key={index} delay={index * 50}>
                <details className="group rounded-2xl border border-slate-200 bg-slate-50 transition-all hover:border-blue-200 open:border-blue-200 open:bg-white open:ring-1 open:ring-blue-200">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-[#001428]">
                    <span className="text-lg">{faq.question}</span>
                    <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#00315f] shadow-sm transition-all group-hover:bg-blue-50 group-hover:text-[#001428] group-open:rotate-180 group-open:bg-blue-100 group-open:text-[#001428]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#00315f]/80 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
