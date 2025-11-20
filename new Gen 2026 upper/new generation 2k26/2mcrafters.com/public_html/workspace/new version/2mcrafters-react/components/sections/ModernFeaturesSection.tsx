"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HoverCard3D } from "@/components/ui/hover-card-3d";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  Shield, 
  Zap,
  Cloud,
  Layers,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Développement web & SaaS",
    description: "Sites vitrines, plateformes, ERP & SaaS sur mesure avec intégration d'API et performance optimale.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "Branding & design graphique",
    description: "Identité visuelle, logos, chartes graphiques et supports print & digitaux pour renforcer votre marque.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    description: "Apps hybrides React Native & Expo alignées avec votre écosystème iOS et Android.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Database,
    title: "Digitalisation RH & systèmes métiers",
    description: "SIRH complet, gestion de présence, paie, dashboards et automatisation pour optimiser vos processus.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Shield,
    title: "Sécurité & performance",
    description: "Hébergement sécurisé, optimisation des performances, et monitoring continu de vos applications.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "UI/UX & expérience utilisateur",
    description: "Interfaces modernes, fluides et accessibles pour web et mobile avec des tests utilisateurs rigoureux.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Solutions cloud scalables, CI/CD pipelines, et architecture moderne pour votre croissance.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Layers,
    title: "Design systems",
    description: "Composants réutilisables, guidelines cohérentes, et documentation complète pour votre équipe.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Cpu,
    title: "IA & Automatisation",
    description: "Intégration d'intelligence artificielle et automatisation de processus métier pour gagner en efficacité.",
    color: "from-violet-500 to-fuchsia-600",
  },
];

export function ModernFeaturesSection() {
  return (
    <section className="relative py-24 text-white">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mb-16 space-y-4 text-center">
          <p className="tagline text-cyan-300">NOS EXPERTISES</p>
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Des solutions digitales complètes
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            De la conception à la livraison, nous maîtrisons toute la chaîne de création digitale
            pour transformer vos idées en produits performants et scalables.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={staggerItemVariants}>
              <HoverCard3D intensity={10}>
                <Card className="h-full border-white/10 bg-white/95 shadow-2xl">
                  <CardHeader>
                    <div className={`mb-4 inline-flex rounded-2xl bg-linear-to-br ${feature.color} p-4 text-white shadow-lg`}>
                      <feature.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </HoverCard3D>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
