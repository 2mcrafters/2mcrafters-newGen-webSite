import type { Metadata } from "next";
import Image from "next/image";
import { portfolioProjects } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Portfolio & réalisations | 2MCRAFTERS",
  description:
    "Sélection de projets menés en branding, développement, SaaS et digitalisation pour des entreprises au Maroc et à l’international.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-500">Portfolio</p>
            <h1 className="text-4xl font-semibold">Nos réalisations & projets.</h1>
            <p className="text-lg text-slate-600">
              Branding, sites web, SaaS, digitalisation RH ou production vidéo : chaque projet est conçu main dans la main
              avec nos clients pour répondre à des besoins concrets.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

  <section className="bg-linear-to-b from-[#00315f] to-[#001428] py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <FadeInOnScroll key={project.title} className="rounded-4xl border border-white/10 bg-white/10">
                <article>
                  <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20" />
                    <div className="absolute inset-x-6 bottom-6">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/70">{project.category}</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">{project.title}</h2>
                    </div>
                  </div>
                  <div className="space-y-3 p-6 text-sm text-slate-200">
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                      {project.stats.map((stat) => (
                        <span key={stat} className="rounded-full border border-white/15 px-3 py-1">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeInOnScroll>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-slate-200">
            <p>Vous souhaitez voir des exemples spécifiques à votre secteur ?</p>
            <p className="mt-1 text-sm">Contactez-nous et nous vous présenterons un portfolio ciblé.</p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
            >
              Voir un cas similaire
            </a>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
