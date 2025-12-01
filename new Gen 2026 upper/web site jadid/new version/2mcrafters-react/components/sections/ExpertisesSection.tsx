import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { ParallaxWrapper } from "@/components/motion/ParallaxWrapper";
import { whyChoosePoints } from "@/lib/data";

const cardHighlights = whyChoosePoints.slice(0, 4);

export function ExpertisesSection() {
  return (
    <section id="expertises" className="bg-linear-to-b from-[#00315f] to-[#001428] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.85fr] lg:items-start">
          <FadeInOnScroll className="space-y-6">
            <p className="tagline text-slate-400">Pourquoi nous choisir ?</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Pourquoi travailler avec CRAFTERS ?</h2>
            <p className="text-lg text-slate-300">
              Approche 360°, culture produit, expertise technique et accompagnement humain : nous mixons tout ce qu’il
              faut pour transformer vos idées en expériences digitales performantes.
            </p>
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
              <p className="text-sm leading-relaxed text-slate-200">
                &laquo;&nbsp;Nous sommes ancrés à Tanger avec une vision internationale : nos clients profitent d’une proximité
                réelle et d’une ambition globale.&nbsp;&raquo; – Squad CRAFTERS
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.4em] text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                  Approche humaine
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFD05B]/70" />
                  Vision produit
                </span>
              </div>
            </div>
          </FadeInOnScroll>

          <div className="flex flex-col gap-6 lg:items-end">
            {cardHighlights.map((item, index) => (
              <ParallaxWrapper
                key={item.title}
                strength={0.1 + index * 0.02}
                className="group relative flex min-w-[320px] flex-col gap-3 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 text-left text-slate-200 shadow-[0_25px_80px_rgba(2,6,23,0.7)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <div className="text-sm uppercase tracking-[0.4em] text-white/60">Valeur {index + 1}</div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.detail}</p>
                <div className="mt-auto flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">
                  <span>En savoir plus</span>
                  <span className="h-2 w-2 rounded-full bg-sky-400/60 shadow-[0_0_30px_rgba(14,165,233,0.55)]" />
                </div>
                <div className="absolute bottom-4 left-6 right-6 h-px bg-linear-to-r from-transparent via-sky-400/30 to-transparent opacity-50" />
              </ParallaxWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
