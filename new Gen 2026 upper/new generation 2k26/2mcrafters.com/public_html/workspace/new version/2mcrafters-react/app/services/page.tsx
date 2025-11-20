import type { Metadata } from "next";
import { detailedServices } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Services digitaux & créatifs | 2MCRAFTERS",
  description:
    "Développement web & SaaS, mobile, branding, contenu, vidéo, digitalisation RH, UX/UI et cloud : découvrez l’ensemble de nos expertises.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-500">Services</p>
            <h1 className="text-4xl font-semibold">Nos services digitaux & créatifs.</h1>
            <p className="text-lg text-slate-600">
              Nous combinons technologie, design et stratégie pour créer des solutions alignées avec vos objectifs métiers.
              Découvrez comment nous pouvons accélérer votre prochain lancement.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

  <section className="bg-linear-to-b from-[#00315f] to-[#001428] py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="grid gap-8">
            {detailedServices.map((service, index) => (
              <FadeInOnScroll
                key={service.id}
                delay={index * 60}
                className="rounded-4xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{service.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-white/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>
            ))}
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center">
            <h3 className="text-2xl font-semibold">Une question sur un service précis ?</h3>
            <p className="mt-2 text-sm text-slate-200">
              Nous adaptons chaque mission : atelier express, sprint prototypage, squad dédiée ou accompagnement long terme.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
            >
              Échanger avec l’équipe
            </a>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
