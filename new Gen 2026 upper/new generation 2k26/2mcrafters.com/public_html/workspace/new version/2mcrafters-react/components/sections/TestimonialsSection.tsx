"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "CEO, TechFlow",
    avatar: "/images/avatar1.jpg",
    content: "L'équipe 2MCRAFTERS a transformé notre vision en réalité. Leur expertise technique et leur approche créative ont dépassé toutes nos attentes.",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    role: "Directeur Marketing, InnovateCorp",
    avatar: "/images/avatar2.jpg",
    content: "Un accompagnement exceptionnel du début à la fin. Le résultat final est à la fois élégant, performant et parfaitement aligné avec notre stratégie.",
    rating: 5,
  },
  {
    name: "Amina Benali",
    role: "Fondatrice, StartHub",
    avatar: "/images/avatar3.jpg",
    content: "Professionnalisme, réactivité et qualité irréprochable. Notre nouvelle plateforme a multiplié notre taux de conversion par 3 en seulement 2 mois.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-bottom bg-no-repeat opacity-10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mb-16 space-y-4 text-center text-white">
          <p className="tagline text-cyan-300">TÉMOIGNAGES</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ce que disent nos clients
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            La satisfaction de nos partenaires est notre meilleure récompense
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={staggerItemVariants}>
              <Card className="h-full border-white/10 bg-white/95 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-cyan-500/20" />
                  </div>

                  <p className="mb-6 text-base leading-relaxed text-zinc-700">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-linear-to-br from-cyan-500 to-blue-600" />
                    <div>
                      <div className="font-semibold text-zinc-900">{testimonial.name}</div>
                      <div className="text-sm text-zinc-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
