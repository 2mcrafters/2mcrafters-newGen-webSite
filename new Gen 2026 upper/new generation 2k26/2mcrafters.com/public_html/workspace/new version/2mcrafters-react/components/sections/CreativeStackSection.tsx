"use client";

import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Sparkles, Layers, Palette, Workflow, Radar, PanelsTopLeft } from "lucide-react";

const creativeStack = [
  {
    title: "Moodboards vivants",
    description: "Drops Figma variables + bibliothèques type & matières pour accélérer le prototypage.",
    highlights: ["Fonts premium", "Palettes dynamiques", "Textures 3D"],
    Icon: Sparkles,
  },
  {
    title: "Systèmes modulaires",
    description: "Tokens synchronisés sur Storybook + Tailwind pour shipper sans dette.",
    highlights: ["Design tokens", "Mises à jour instantanées", "Audit accessibilité"],
    Icon: Layers,
  },
  {
    title: "Ateliers co-créatifs",
    description: "Templates Notion + FigJam pour engager vos équipes produit & marketing.",
    highlights: ["Playbooks", "Workshop kits", "Livrables prêts"],
    Icon: Workflow,
  },
  {
    title: "Labs immersifs",
    description: "Motion, WebGL, et assets génératifs pour signatures mémorables.",
    highlights: ["Timeline After Effects", "SFX sélectionnés", "Rendus WebGPU"],
    Icon: Palette,
  },
  {
    title: "Ops & QA",
    description: "Dashboards qualité, tests visuels et monitoring SEO branchés au pipeline.",
    highlights: ["Lighthouse CI", "Chromatic", "Data Studio"],
    Icon: Radar,
  },
  {
    title: "Assets marketing",
    description: "Packs Keynote, teasers, visuels réseaux pour assurer votre reveal.",
    highlights: ["Templates vidéo", "Guidelines socials", "Kits média"],
    Icon: PanelsTopLeft,
  },
];

export function CreativeStackSection() {
  return (
  <section id="creative" className="relative py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <FadeInOnScroll className="space-y-5 lg:basis-[40%] lg:pr-8">
          <p className="tagline text-slate-400">Créative Suite</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Librairies d’assets et plugins maison pour un rendu “wow”.</h2>
          <p className="text-lg text-slate-300">
            On mixe banques d’images premium, sets d’icônes propriétaires et shaders custom pour créer des univers immersifs.
            Chaque squad embarque un coffre d’assets modulables prêt à être décliné sur produit, social et offline.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-sm text-slate-200">
            <p className="font-semibold text-white">Plugins internes</p>
            <p className="mt-2">
              Presets Lenis, librairie d’icônes Lucide customisées, gradients capturés sur Midjourney, textures bruitées et mockups réalistes.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="lg:basis-[60%]">
          <div className="grid gap-5 rounded-4xl border border-white/5 bg-white/0 p-4 sm:grid-cols-2">
            {creativeStack.slice(0, 4).map((item) => (
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
        </div>
      </div>
    </section>
  );
}
