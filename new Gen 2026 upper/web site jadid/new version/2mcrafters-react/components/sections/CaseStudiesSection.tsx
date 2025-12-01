import Image from "next/image";
import { caseStudies } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function CaseStudiesSection() {
  return (
    <section id="realisations" className="relative w-full overflow-hidden bg-slate-950 py-24 text-white">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl">
        <div className="h-[300px] w-[600px] rounded-full bg-gradient-to-r from-blue-600 via-indigo-900 to-slate-900" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-10 px-6">
        <FadeInOnScroll className="space-y-4 text-center">
          <p className="tagline bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Réalisations
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Nos réalisations & projets.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Une sélection de projets menés en branding, développement, vidéo et digitalisation – chaque mission est le
            fruit d&rsquo;une collaboration étroite avec nos clients.
          </p>
        </FadeInOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeInOnScroll
              key={study.title}
              delay={index * 120}
              className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#001830] to-[#00284d] p-4 shadow-[0_25px_80px_rgba(4,18,45,0.45)] text-white"
            >
              <article>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10"></div>
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100/80">{study.category}</p>
                    <h3 className="mt-1 text-xl font-semibold bg-gradient-to-r from-blue-100 via-blue-50 to-white bg-clip-text text-transparent">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-xs text-blue-100/90 line-clamp-3">{study.description}</p>
                  <div className="flex flex-wrap gap-2 text-[10px] text-blue-100/80">
                    {study.stats.map((stat) => (
                      <span key={stat} className="rounded-full border border-blue-100/40 bg-white/10 px-2 py-1 text-blue-50/95 backdrop-blur">
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
