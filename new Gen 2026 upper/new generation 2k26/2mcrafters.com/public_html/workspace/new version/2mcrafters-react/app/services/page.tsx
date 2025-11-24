import type { Metadata } from "next";
import Image from "next/image";
import { detailedServices } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AuroraBackground } from "@/components/visuals/AuroraBackground";
import { HoverCard3D } from "@/components/ui/hover-card-3d";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  PenTool, 
  Video, 
  Cpu, 
  Layout, 
  Cloud, 
  ArrowRight,
  Sparkles,
  Compass,
  type LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services digitaux & créatifs | CRAFTERS",
  description:
    "Développement web & SaaS, mobile, branding, contenu, vidéo, digitalisation RH, UX/UI et cloud : découvrez l’ensemble de nos expertises.",
};

const serviceIcons: Record<string, LucideIcon> = {
  web: Code2,
  mobile: Smartphone,
  branding: Palette,
  content: PenTool,
  video: Video,
  digitalisation: Cpu,
  ux: Layout,
  cloud: Cloud,
  strategy: Compass,
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-[#00315f] to-[#001428] text-white selection:bg-cyan-500/30">
      <AuroraBackground />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-64 lg:pb-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#001428]/80 z-10" />
          <Image 
            src="/images/pics/02.avif" 
            alt="Background" 
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 z-10" />
        <div className="container mx-auto max-w-6xl px-6 text-center relative z-20">
          <FadeInOnScroll className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              <span>Expertise 360°</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-white">
              Nos Services
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-slate-200 md:text-xl leading-relaxed">
              Nous combinons technologie de pointe, design immersif et stratégie business pour créer des solutions digitales qui marquent les esprits.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Code2;
              
              return (
                <FadeInOnScroll key={service.id} delay={index * 50} className="h-full">
                  <HoverCard3D className="h-full" intensity={10}>
                    <div className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white p-8 shadow-xl shadow-black/20 backdrop-blur transition-all duration-300 hover:bg-[#001428] hover:shadow-2xl hover:-translate-y-1 hover:border-white/20">
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004484] text-white shadow-lg shadow-blue-900/20 transition-transform group-hover:scale-110 group-hover:bg-cyan-500">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="mb-3 text-2xl font-bold text-zinc-900 transition-colors group-hover:text-white">
                          {service.title}
                        </h3>
                        
                        <p className="mb-6 text-sm leading-relaxed text-zinc-600 grow transition-colors group-hover:text-slate-300">
                          {service.intro}
                        </p>

                        <ul className="mt-auto space-y-3 border-t border-zinc-100 pt-6 transition-colors group-hover:border-white/10">
                          {service.points.slice(0, 4).map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm text-zinc-700 transition-colors group-hover:text-slate-300">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#004484] transition-colors group-hover:bg-cyan-400" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </HoverCard3D>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-cyan-950/20" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeInOnScroll>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md">
              <h2 className="text-3xl font-bold md:text-4xl">Un projet spécifique en tête ?</h2>
              <p className="mt-4 text-lg text-slate-400">
                Nous adaptons chaque mission : atelier express, sprint prototypage, squad dédiée ou accompagnement long terme.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-cyan-400 hover:scale-105"
                >
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
                >
                  Voir nos réalisations
                </a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
