import type { Metadata } from "next";
import Image from "next/image";
import { processSteps } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AlliesSection } from "@/components/sections/AlliesSection";
import { AuroraBackground } from "@/components/visuals/AuroraBackground";
import { HoverCard3D } from "@/components/ui/hover-card-3d";
import { ArrowRight, Sparkles, ExternalLink, Compass, Cpu, Shield, Rocket, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & réalisations | CRAFTERS",
  description:
    "Sélection de projets menés en branding, développement, SaaS et digitalisation pour des entreprises au Maroc et à l’international.",
};

const processIcons: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Cpu,
  Shield,
  Rocket,
};

const siteShowcase = [
  {
    title: "Alingua.ma",
    description: "Agence de traduction multilingue",
    url: "https://alingua.ma/",
    image: "/images/sites/01.jpg",
  },
  {
    title: "Smart RH",
    description: "Solution RH et paie au Maroc",
    url: "https://smartrh.ma/",
    image: "/images/sites/02.jpg",
  },
  {
    title: "Ennéagramme Maroc",
    description: "Coaching et formations en enneagramme",
    url: "https://www.enneamaroc.com/",
    image: "/images/sites/03.jpg",
  },
  {
    title: "Rachid Belhadj",
    description: "Site personnel et portfolio créatif",
    url: "https://rachidbelhadj.com/",
    image: "/images/sites/04.jpg",
  },
  {
    title: "Yaala 2 Roues",
    description: "Distributeur de scooters et motos",
    url: "https://yaala2roues.com/",
    image: "/images/sites/05.jpg",
  },
  {
    title: "Avocat MCM",
    description: "Cabinet d'avocats multilingue",
    url: "https://avocatmcm.com/en/lawyer-mcm-en/",
    image: "/images/sites/06.jpg",
  },
  {
    title: "Taxi Voyage Mogador",
    description: "Service de transport touristique",
    url: "https://taxivoyagemogador.com/",
    image: "/images/sites/07.jpg",
  },
  {
    title: "Boukiri Diamond",
    description: "Joaillier et boutique premium",
    url: "https://boukirdiamond.com/",
    image: "/images/sites/08.jpg",
  },
  {
    title: "Avocat Keskassi",
    description: "Cabinet juridique spécialisé",
    url: "https://avocatkeskassi.com/",
    image: "/images/sites/09.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-[#00315f] to-[#001428] text-white selection:bg-cyan-500/30">
      <AuroraBackground />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-64 lg:pb-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#001428]/80 z-10" />
          <Image 
            src="/images/pics/020.avif" 
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
              <span>Nos Réalisations</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-white">
              Portfolio
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-slate-200 md:text-xl leading-relaxed">
              Branding, sites web, SaaS, digitalisation RH ou production vidéo : chaque projet est conçu main dans la main avec nos clients pour répondre à des besoins concrets.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <AlliesSection />

      {/* Process Section */}
      <section className="relative z-10 py-20 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Notre Processus Créatif</h2>
            <p className="mt-4 text-slate-400">De la conception au déploiement, une méthodologie éprouvée.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = processIcons[step.icon] || Sparkles;
              return (
                <FadeInOnScroll key={step.title} delay={index * 100} className="relative">
                  <div className="group relative flex flex-col items-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                      <Icon className="h-8 w-8 text-cyan-400 transition-colors group-hover:text-white" />
                    </div>
                    <div className="absolute top-8 left-1/2 w-full -translate-y-1/2 translate-x-8 border-t border-dashed border-white/10 hidden md:block last:hidden" />
                    
                    <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.detail}</p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Réalisations mises en lumière
            </p>
            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">Des expériences digitales qui marquent</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
              Une sélection vivante de plateformes web, produits SaaS, identités visuelles et capsules vidéos conçus pour des marques marocaines et internationales.
              Chaque case raconte une histoire de collaboration, de confiance et de résultats mesurables.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteShowcase.map((project, index) => (
              <FadeInOnScroll key={project.title} delay={index * 100} className="aspect-video w-full">
                <HoverCard3D className="h-full w-full" intensity={10}>
                  <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-slate-900">
                    {/* Full Background Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay - Hidden initially, visible on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#001428] via-[#001428]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
                    
                    {/* Hover Button Only */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visiter ${project.title}`}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-cyan-400 hover:scale-105"
                      >
                        Visiter le site <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </HoverCard3D>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-cyan-950/20" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeInOnScroll>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md">
              <h2 className="text-3xl font-bold md:text-4xl text-white">Un projet similaire en tête ?</h2>
              <p className="mt-4 text-lg text-slate-300">
                Contactez-nous et nous vous présenterons un portfolio ciblé adapté à votre secteur.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-cyan-400 hover:scale-105"
                >
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
