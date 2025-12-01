"use client";

import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Sparkles, Layers, Palette, Workflow } from "lucide-react";

const creativeStack = [
  {
    title: "Univers visuels",
    description: "Des collections visuelles conçues par nos designers pour poser dès le départ l’ADN graphique de chaque projet.",
    highlights: ["Palettes modernes", "Identités visuelles cohérentes", "Inspirations UI personnalisées"],
    Icon: Palette,
  },
  {
    title: "Modules Web Crafters",
    description: "Des composants web réutilisables, testés et optimisés pour des sites fluides et rapides.",
    highlights: ["Composants React/Next.js", "Grilles responsives", "Sections & layouts modulaires"],
    Icon: Layers,
  },
  {
    title: "Workshops UX & Design",
    description: "Des ateliers collaboratifs pour co-créer l’expérience idéale : parcours, structure, contenu et interactions.",
    highlights: ["Parcours utilisateurs", "Wireframes & prototypes", "Playbooks projets"],
    Icon: Workflow,
  },
  {
    title: "Motion & Interactions",
    description: "Nos effets signatures pour rendre chaque interface vivante, dynamique et mémorable.",
    highlights: ["Motion design", "Effets scroll & micro-interactions", "Animations WebGL et transitions premium"],
    Icon: Sparkles,
  },
];

export function CreativeStackSection() {
  return (
  <section id="creative" className="relative py-15  text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <FadeInOnScroll className="space-y-5 lg:basis-[40%] lg:pr-8">
          <p className="tagline text-slate-400">CRÉATIVE SUITE</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Nos ressources internes au service de vos projets digitaux.</h2>
          <p className="text-lg text-slate-300">
            Crafters conçoit ses propres outils, assets, modules web et bibliothèques graphiques pour garantir à chaque projet une qualité maîtrisée, un rendu premium et une cohérence parfaite.
            Nous réunissons design, UX, développement et motion pour produire plus vite, mieux, et avec une identité forte.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-sm text-slate-200">
            <p className="font-semibold text-white">Outils internes Crafters</p>
            <p className="mt-2">
              Un ensemble d’assets exclusifs développés pour renforcer la qualité créative et technique 
            </p>
            
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2} className="lg:basis-[60%]">
          <div className="grid gap-5 rounded-4xl border border-white/5 bg-white/0 p-4 sm:grid-cols-2">
            {creativeStack.map((item) => (
              <div key={item.title} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl bg-linear-to-br from-[#00315f]/80 via-[#001428]/60 to-[#000711]/20 p-2 text-white">
                    <item.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                <ul className="mt-4 space-y-1 text-xs text-slate-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
