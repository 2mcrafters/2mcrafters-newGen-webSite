"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { FadeIn } from "@/components/motion/FadeIn";
import { Code2, Palette, Video, Sparkles, TrendingUp, Zap } from "lucide-react";

export function BentoShowcaseSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[url('/patterns/mesh.svg')] bg-cover bg-center opacity-10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mb-16 space-y-4 text-center text-white">
          <p className="tagline text-cyan-300">NOS SERVICES</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Une gamme complète de services digitaux
          </h2>
        </FadeIn>

        <BentoGrid>
          <BentoCard span="double">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 p-4 text-white shadow-lg">
                  <Code2 className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-3xl font-bold text-zinc-900">
                  Développement web & SaaS
                </h3>
                <p className="text-lg text-zinc-600">
                  Créez des expériences web modernes et performantes avec nos technologies de pointe.
                  De la simple landing page au SaaS complexe, nous maîtrisons toute la stack.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-4 inline-flex rounded-2xl bg-linear-to-br from-purple-500 to-pink-600 p-4 text-white shadow-lg">
              <Palette className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-zinc-900">
              Design & Branding
            </h3>
            <p className="text-base text-zinc-600">
              Identité visuelle unique qui marque les esprits et renforce votre présence.
            </p>
          </BentoCard>

          <BentoCard>
            <div className="mb-4 inline-flex rounded-2xl bg-linear-to-br from-orange-500 to-red-600 p-4 text-white shadow-lg">
              <Video className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-zinc-900">
              Vidéo & Motion
            </h3>
            <p className="text-base text-zinc-600">
              Contenu vidéo professionnel pour captiver votre audience et booster l'engagement.
            </p>
          </BentoCard>

          <BentoCard span="double">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-2xl bg-linear-to-br from-green-500 to-emerald-600 p-4 text-white shadow-lg">
                  <Sparkles className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-3xl font-bold text-zinc-900">
                  UX/UI Design Premium
                </h3>
                <p className="text-lg text-zinc-600">
                  Interfaces élégantes, intuitives et accessibles pensées pour vos utilisateurs.
                  Chaque pixel compte dans l'expérience finale.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-900">98%</div>
                  <div className="text-xs text-zinc-600">Satisfaction</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-900">120+</div>
                  <div className="text-xs text-zinc-600">Projets</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-900">3x</div>
                  <div className="text-xs text-zinc-600">ROI moyen</div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-4 inline-flex rounded-2xl bg-linear-to-br from-blue-500 to-cyan-600 p-4 text-white shadow-lg">
              <TrendingUp className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-zinc-900">
              Optimisation & SEO
            </h3>
            <p className="text-base text-zinc-600">
              Performances maximales et visibilité accrue pour dominer votre marché.
            </p>
          </BentoCard>

          <BentoCard>
            <div className="mb-4 inline-flex rounded-2xl bg-linear-to-br from-yellow-500 to-orange-600 p-4 text-white shadow-lg">
              <Zap className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-zinc-900">
              Automatisation
            </h3>
            <p className="text-base text-zinc-600">
              Gagnez du temps avec des workflows intelligents et automatisés.
            </p>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
}
