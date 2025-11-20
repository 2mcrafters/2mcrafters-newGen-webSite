import Image from "next/image";
import { caseStudies } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function CaseStudiesSection() {
  return (
    <section id="realisations" className="relative bg-white py-10 text-slate-900">
      <div className="mx-auto max-w-7xl space-y-10 px-6">
        <FadeInOnScroll className="space-y-4 text-center">
          <p className="tagline bg-linear-to-r from-[#0a2253] via-[#12418b] to-[#1a6bdb] bg-clip-text text-transparent">
            Réalisations
          </p>
          <h2 className="text-3xl font-semibold bg-linear-to-r from-[#0a2253] via-[#12418b] to-[#1a6bdb] bg-clip-text text-transparent sm:text-4xl">
            Nos réalisations & projets.
          </h2>
          <p className="text-lg text-slate-600">
            Une sélection de projets menés en branding, développement, vidéo et digitalisation – chaque mission est le
            fruit d&rsquo;une collaboration étroite avec nos clients.
          </p>
        </FadeInOnScroll>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeInOnScroll
              key={study.title}
              delay={index * 120}
              className="rounded-4xl border border-blue-500/20 bg-linear-to-br from-[#050f27] via-[#0b2150] to-[#134bad] p-6 shadow-[0_25px_80px_rgba(4,18,45,0.45)] text-white"
            >
              <article>
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/20 bg-white/10">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10"></div>
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-blue-100/80">{study.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold bg-linear-to-r from-blue-100 via-blue-50 to-white bg-clip-text text-transparent">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-sm text-blue-100/90">{study.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-blue-100/80">
                    {study.stats.map((stat) => (
                      <span key={stat} className="rounded-full border border-blue-100/40 bg-white/10 px-3 py-1 text-blue-50/95 backdrop-blur">
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
