"use client";

import Image from "next/image";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Sparkles, Shield, Gauge, Rocket, Star, TimerReset, BarChart3 } from "lucide-react";

const heroHighlights = [
  { label: "Procédures fiables", icon: Shield },
  { label: "Entreprises innovantes", icon: Sparkles },
  { label: "Méthodes cadrées", icon: Gauge },
];

const heroStats = [
  {
    label: 'Projets déployés',
    value: '+120',
    hint: 'Mises en ligne réussies',
    icon: Rocket,
    gradient: 'from-[#00315f]/70 to-[#001428]/20',
  },
  {
    label: 'Satisfaction client',
    value: '4.9/5',
    hint: 'Avis et retours vérifiés',
    icon: Star,
    gradient: 'from-[#00315f]/70 to-[#001428]/20',
  },
  {
    label: 'Délai de livraison',
    value: '6 semaines',
    hint: 'Durée moyenne par projet',
    icon: TimerReset,
    gradient: 'from-[#00315f]/70 to-[#001428]/20',
  },
  {
    label: 'Croissance SEO',
    value: '+180%',
    hint: 'Hausse du trafic organique',
    icon: BarChart3,
    gradient: 'from-[#00315f]/70 to-[#001428]/20',
  },
];


const heroImageUrl = "/images/slide/slide03.jpeg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] overflow-hidden pb-28 pt-48 text-white sm:min-h-[98vh] sm:pb-40 sm:pt-60"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={heroImageUrl}
          alt="Crafters entreprise"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#00315f]/90 via-[#001428]/70 to-transparent" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
  <FadeInOnScroll className="flex-1 space-y-5 pb-[50px] sm:-mt-6 md:-mt-10 lg:-mt-14">
          <p className="tagline text-slate-400">Entreprise digitale & créative · Tanger</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="block" aria-hidden="true">
              Crafters
            </span>
            <span className="block">Experts en solutions digitales.</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            crée des produits digitaux puissants : web, SaaS, design et contenus.
          </p>
          <div className="flex flex-wrap gap-4 sm:flex-nowrap">
            <a
              href="/services"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
            >
              Nos services
            </a>
            <a
              href="/portfolio"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Nos projets
            </a>
          </div>
          <div className="flex flex-nowrap gap-3 overflow-x-auto pt-1">
            {heroHighlights.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.55rem] tracking-[0.12em] text-slate-200"
              >
                <Icon className="h-3 w-3" />
                {label}
              </span>
            ))}
          </div>
        </FadeInOnScroll>
  <FadeInOnScroll delay={0.2} className="flex-1 md:-mt-12 lg:-mt-16">
          <div className="group relative rounded-4xl border border-white/10 bg-slate-900/40 p-8 shadow-[0_35px_120px_rgba(18,24,58,0.75)]">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    Nos chiffres clés
                  </p>
                  <p className="text-sm text-slate-400/80">
                    Des indicateurs tangibles sur chaque mission livrée.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
                  Impact
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map(({ label, value, hint, icon: Icon, gradient }) => (
                  <div
                    key={label}
                    className="group/metric relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                  >
                    <div
                      className={`absolute inset-0 -z-10 bg-linear-to-br ${gradient} opacity-0 transition-opacity duration-700 group-hover/metric:opacity-80`}
                     
                    />
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
                      <Icon className="h-4 w-4 text-white" />
                      {label}
                    </div>
                    <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
                    <p className="text-sm text-slate-300/90">{hint}</p>
                    <span className="mt-4 inline-flex items-center text-[0.7rem] font-medium text-white/70 transition-transform duration-500 group-hover/metric:translate-x-1">
                      Voir le cas
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          d="M5 12h14m-6-6 6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl border border-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
