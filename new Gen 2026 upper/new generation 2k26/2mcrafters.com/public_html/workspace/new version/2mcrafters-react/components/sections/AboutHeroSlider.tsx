"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { 
    src: "/images/pics/01.jpg", 
    alt: "Notre Entreprise",
    title: "Créativité sans limites",
    subtitle: "Un espace où les idées prennent vie."
  },
  { 
    src: "/images/pics/02.avif", 
    alt: "Collaboration",
    title: "Intelligence Collective",
    subtitle: "Des experts unis par la passion du digital."
  },
  { 
    src: "/images/pics/03.jpeg", 
    alt: "Innovation",
    title: "Innovation Continue",
    subtitle: "Toujours à la pointe de la technologie."
  },
  { 
    src: "/images/pics/06.jpg", 
    alt: "Excellence",
    title: "Excellence Opérationnelle",
    subtitle: "La qualité au cœur de chaque pixel."
  },
];

export function AboutHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden rounded-3xl bg-[#001428]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
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
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001428] via-[#001428]/50 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-3xl space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-5xl font-bold text-white md:text-7xl leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="mt-4 text-xl text-slate-300 md:text-2xl">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-12 bg-blue-400" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
