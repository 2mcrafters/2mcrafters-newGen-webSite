import type { Metadata } from "next";
import { aboutValues } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "À propos de 2MCRAFTERS | Studio digital & créatif",
  description:
    "Studio digital-tech basé à Tanger réunissant développeurs, designers, vidéastes et stratèges pour accélérer la transformation digitale des entreprises.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-500">À propos</p>
            <h1 className="text-4xl font-semibold">À propos de 2MCRAFTERS.</h1>
            <p className="text-lg text-slate-600">
              2MCRAFTERS est un studio digital-tech & créatif basé à Tanger, au Maroc. Nous réunissons développeurs,
              designers, vidéastes et stratèges pour accompagner les entreprises dans leurs projets de transformation
              digitale, de branding et d’innovation.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

  <section className="bg-linear-to-b from-[#00315f] to-[#001428] py-20 text-white">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <FadeInOnScroll className="space-y-3">
            <p className="tagline text-slate-400">Notre vision</p>
            <h2 className="text-3xl font-semibold">Notre vision</h2>
            <p className="text-lg text-slate-300">
              Nous croyons que le digital est un levier au service de l’humain et du métier. Notre ambition : créer des
              solutions utiles, belles et durables qui simplifient le quotidien de nos clients et renforcent leur impact.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll className="space-y-3">
            <p className="tagline text-slate-400">Notre mission</p>
            <h2 className="text-3xl font-semibold">Notre mission</h2>
            <p className="text-lg text-slate-300">
              Transformer vos idées en expériences digitales concrètes : clarifier vos besoins, concevoir des solutions
              sur mesure, allier esthétique, performance et simplicité d’utilisation, puis vous accompagner dans la
              durée.
            </p>
          </FadeInOnScroll>

          <div className="grid gap-6 md:grid-cols-2">
            {aboutValues.map((value) => (
              <FadeInOnScroll key={value.title} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{value.detail}</p>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-zinc-900">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <FadeInOnScroll className="space-y-3">
            <p className="tagline text-slate-500">Notre équipe</p>
            <h2 className="text-3xl font-semibold">Une équipe pluridisciplinaire.</h2>
            <p className="text-lg text-slate-600">
              Développeurs full-stack, designers UI/UX, graphistes, vidéastes et spécialistes du contenu travaillent côte
              à côte. Ensemble, nous couvrons toute la chaîne d’un projet digital, du concept à la mise en production.
            </p>
          </FadeInOnScroll>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Culture produit",
                detail: "Chaque squad pense usage, priorise la valeur et optimise l’expérience utilisateur.",
              },
              {
                title: "Méthodo",
                detail: "Workshops, prototypage rapide, suivi transparent sur Linear/Notion et rapports vidéo Loom.",
              },
              {
                title: "Tech",
                detail: "Stack moderne : Next.js, React Native, Laravel, Node.js, Tailwind, Supabase, CI/CD.",
              },
              {
                title: "Accompagnement",
                detail: "Coaching des équipes internes, transfert de compétences et documentation détaillée.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/5 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
