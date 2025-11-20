import Image from "next/image";
import { caseStudies } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function CaseStudiesSection() {
  return (
    <section id="realisations" className="relative py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <FadeInOnScroll className="space-y-4 text-center">
          <p className="tagline text-slate-300">Réalisations</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Nos réalisations & projets.</h2>
          <p className="text-lg text-slate-200">
            Une sélection de projets menés en branding, développement, vidéo et digitalisation – chaque mission est le
            fruit d'une collaboration étroite avec nos clients.
          </p>
        </FadeInOnScroll>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeInOnScroll
              key={study.title}
              delay={index * 120}
              className="rounded-4xl border border-white/10 bg-white p-4 shadow-2xl shadow-black/20"
            >
              <article>
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10"></div>
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/70">{study.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{study.title}</h3>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-sm text-slate-600">{study.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    {study.stats.map((stat) => (
                      <span key={stat} className="rounded-full border border-zinc-200 px-3 py-1">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
