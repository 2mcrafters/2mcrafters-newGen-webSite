"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { 
    src: "/images/slide/slide01.png", 
    alt: "Innovation Digitale",
    tag: "Actualités & Insights",
    title: "Explorez nos dernières",
    highlight: "réflexions.",
    description: "Découvrez nos articles sur le développement web, le design UI/UX et les stratégies digitales pour propulser votre business."
  },
  { 
    src: "/images/slide/slide02.jpg", 
    alt: "Design & Créativité",
    tag: "Design & UX",
    title: "L'art de l'expérience",
    highlight: "utilisateur.",
    description: "Plongez dans nos études de cas et analyses sur les tendances du design moderne et de l'ergonomie."
  },
  { 
    src: "/images/slide/slide03.jpeg", 
    alt: "Stratégie Web",
    tag: "Stratégie Digitale",
    title: "Optimisez votre",
    highlight: "croissance.",
    description: "Des conseils pratiques et des méthodologies éprouvées pour améliorer votre visibilité et convertir vos visiteurs."
  },
  { 
    src: "/images/slide/slide04.webp", 
    alt: "Développement Sur Mesure",
    tag: "Tech & Dev",
    title: "Architecture et",
    highlight: "performance.",
    description: "Les meilleures pratiques techniques pour concevoir des applications web rapides, robustes et évolutives."
  },
];

export function BlogHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden rounded-3xl bg-[#001428]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Image Container with Scale Effect */}
          <div className="absolute inset-0 h-full w-full">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Overlay Gradient - Stronger on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001428] via-[#001428]/60 to-transparent" />

          {/* Text Content - Vertically Centered on Left */}
          <div className="absolute inset-0 flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl space-y-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm"
              >
                {slides[currentSlide].tag}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight"
              >
                {slides[currentSlide].title} <span className="text-blue-400">{slides[currentSlide].highlight}</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg text-slate-300 max-w-xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-blue-400" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
