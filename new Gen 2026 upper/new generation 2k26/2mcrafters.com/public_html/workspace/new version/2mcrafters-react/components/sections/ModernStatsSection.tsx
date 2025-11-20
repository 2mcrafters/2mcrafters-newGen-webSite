"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Rocket } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: 120,
    suffix: "+",
    label: "Projets livrés",
    description: "Produits digitaux déployés avec succès",
  },
  {
    icon: Users,
    value: 85,
    suffix: "+",
    label: "Clients satisfaits",
    description: "Entreprises qui nous font confiance",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Taux de satisfaction",
    description: "Basé sur les avis clients vérifiés",
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "x",
    label: "Croissance moyenne",
    description: "ROI mesuré après nos interventions",
  },
];

export function ModernStatsSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[url('/patterns/mesh.svg')] bg-cover bg-center opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mb-16 space-y-4 text-center text-white">
          <p className="tagline text-cyan-300">RÉSULTATS</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Des chiffres qui parlent
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Notre expertise se mesure à travers les projets réussis et la satisfaction de nos clients
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItemVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/95 p-8 shadow-xl shadow-black/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 p-3 text-white shadow-lg">
                  <stat.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-zinc-900">
                    <AnimatedCounter 
                      to={stat.value} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-xl font-semibold text-zinc-900">{stat.label}</div>
                  <p className="text-sm text-zinc-600">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
