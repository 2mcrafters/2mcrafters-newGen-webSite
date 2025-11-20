"use client";

import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { ParallaxWrapper } from "@/components/motion/ParallaxWrapper";
import { VelocityCard } from "@/components/motion/VelocityCard";

const tuningOptions = [
  { label: "Lerp", value: "0.12", detail: "Plus bas = friction élevée, plus haut = glisse aérienne" },
  { label: "Durée", value: "1.1 s", detail: "Adoucit l'accélération et la décélération" },
  { label: "Touch Mult.", value: "1.1x", detail: "Parité mobile / desktop assurée" },
];

const secondaryBadges = ["Parallaxe", "Lenis", "RAF loop", "Ancres", "Vélocité"];

export function SmoothShowcase() {
  return (
  <section id="fluid-motion" className="relative py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row">
        <div className="flex-1 space-y-8">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-400">Mouvements fluides</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Un scroll haute fréquence, parfaitement synchronisé.</h2>
            <p className="text-lg text-slate-300">
              Notre provider Lenis expose `useLenis` et `useLenisScroll` pour déclencher parallaxes, reveals et effets
              de vélocité. Compatible ScrollTrigger, Framer Motion ou GSAP dès maintenant.
            </p>
          </FadeInOnScroll>

          <div className="grid gap-4 sm:grid-cols-2">
            {tuningOptions.map((item, index) => (
              <VelocityCard
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                lift={7 + index * 1.5}
                intensity={0.04 + index * 0.006}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
              </VelocityCard>
            ))}
          </div>

        </div>

        <div className="flex-1">
          <ParallaxWrapper
            strength={0.18}
            className="rounded-4xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 shadow-2xl shadow-cyan-500/20"
          >
            <FadeInOnScroll delay={200} className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Preset premium</p>
              <div className="space-y-2">
                <p className="text-4xl font-semibold">useLenis</p>
                <p className="text-sm text-slate-300">Récupère scrollY, vitesse, progression et direction.</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-semibold">useLenisScroll</p>
                <p className="text-sm text-slate-300">Abonnement ultra léger, parfait pour animations sur-mesure.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-slate-200">
                <ul className="space-y-2">
                  <li>• Offset d’ancre configurable pour les nav collantes</li>
                  <li>• Boucle RAF partagée (auto ou manuel)</li>
                  <li>• Fallback natif si prefers-reduced-motion</li>
                  <li>• Hooks prêts pour ScrollTrigger / Framer</li>
                </ul>
              </div>
            </FadeInOnScroll>
          </ParallaxWrapper>
          <FadeInOnScroll delay={250} className="mt-6 flex flex-wrap gap-3">
            {secondaryBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate-300"
              >
                {badge}
              </span>
            ))}
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
