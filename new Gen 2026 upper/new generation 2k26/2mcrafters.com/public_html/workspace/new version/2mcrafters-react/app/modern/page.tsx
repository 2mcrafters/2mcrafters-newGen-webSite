import { ModernFeaturesSection } from "@/components/sections/ModernFeaturesSection";
import { ModernStatsSection } from "@/components/sections/ModernStatsSection";
import { BentoShowcaseSection } from "@/components/sections/BentoShowcaseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ModernContactSection } from "@/components/sections/ModernContactSection";
import { FadeIn } from "@/components/motion/FadeIn";
import { AnimatedBlob, AnimatedGradient } from "@/components/ui/animated-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ModernShowcase() {
  return (
    <>
      {/* Modern Hero Section */}
      <section className="relative min-h-screen overflow-hidden pb-32 pt-32">
        {/* Animated backgrounds */}
        <AnimatedGradient />
        <AnimatedBlob />
  <div className="absolute inset-0 bg-[url(/patterns/dots.svg)] opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn className="flex min-h-[80vh] flex-col items-center justify-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Nouveau design système 2024</span>
            </div>

            <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              L&rsquo;agence digitale qui{" "}
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                transforme vos idées
              </span>{" "}
              en réalité
            </h1>

            <p className="mb-10 max-w-3xl text-xl text-slate-300 sm:text-2xl">
              Design premium, développement d&rsquo;excellence et accompagnement sur-mesure 
              pour faire décoller votre présence digitale
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" className="text-base">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Découvrir nos réalisations
              </Button>
            </div>

            {/* Floating cards preview */}
            <div className="mt-20 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
              <FadeIn delay={0.2}>
                <div className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]">
                  <div className="mb-3 text-4xl font-bold text-zinc-900">120+</div>
                  <div className="text-sm text-zinc-600">Projets livrés</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)]">
                  <div className="mb-3 text-4xl font-bold text-zinc-900">98%</div>
                  <div className="text-sm text-zinc-600">Satisfaction client</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                  <div className="mb-3 text-4xl font-bold text-zinc-900">3x</div>
                  <div className="text-sm text-zinc-600">ROI moyen</div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All modern sections */}
      <ModernFeaturesSection />
      <ModernStatsSection />
      <BentoShowcaseSection />
      <TestimonialsSection />
      <ModernContactSection />
    </>
  );
}
