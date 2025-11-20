import type { Metadata } from "next";
import { blogPosts, faqs } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Blog & FAQ | 2MCRAFTERS",
  description:
    "Articles sur le web, le design et la digitalisation, ainsi qu’une FAQ pour répondre aux questions fréquentes sur nos services.",
};

export default function BlogPage() {
  return (
    <div className="space-y-16">
      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-500">Blog & FAQ</p>
            <h1 className="text-4xl font-semibold">Le blog 2MCRAFTERS.</h1>
            <p className="text-lg text-slate-600">
              Nous partageons des articles autour du web, du design, de la digitalisation et des bonnes pratiques pour faire
              grandir votre présence digitale.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

  <section className="bg-linear-to-b from-[#00315f] to-[#001428] py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <FadeInOnScroll key={post.title} delay={index * 80} className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Article</p>
                <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-200">{post.summary}</p>
                <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                  À lire bientôt
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          <FadeInOnScroll className="space-y-3 text-center">
            <p className="tagline text-slate-500">FAQ</p>
            <h2 className="text-3xl font-semibold">Questions fréquentes.</h2>
            <p className="text-lg text-slate-600">Les réponses aux questions que l’on nous pose le plus souvent.</p>
          </FadeInOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="rounded-2xl border border-black/5 bg-slate-50 p-4" open={index === 0}>
                <summary className="cursor-pointer text-lg font-semibold text-zinc-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
