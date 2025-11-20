'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const horizontalScenes = [
  {
    title: 'Immersion',
    detail: 'Études terrain, moodboards vivants et captations pour nourrir chaque concept.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    badge: 'Terrain',
  },
  {
    title: 'Prototypage',
    detail: 'Design system variables + interactions Lenis testées en live avec vos équipes.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
    badge: 'System',
  },
  {
    title: 'Motion Lab',
    detail:
      'WebGL, WebGPU et ScrollTrigger orchestrent des reveals zoom-in et des slides horizontales.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    badge: 'Immersive',
  },
  {
    title: 'Déploiement',
    detail: 'CI/CD, pilotage qualité et contenu multi-formats prêts à diffuser.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    badge: 'Opérations',
  },
  {
    title: 'Labo sonore',
    detail: 'Textures audio et spatialisation subtiles qui accompagnent les transitions.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    badge: 'Sound',
  },
  {
    title: 'Expérience',
    detail: 'Interactions tactiles, micro-animations et scénarios responsives en pilote continu.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    badge: 'Experience',
  },
  {
    title: 'Story Craft',
    detail: 'Narrations dynamisées avec micro-interactions et aliasing typographique.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    badge: 'Story',
  },
  {
    title: 'Lighting Lab',
    detail: 'Dégradés organiques et halos lumineux qui élèvent la piste horizontale.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    badge: 'Light',
  },
];

export function ScrollMotionLabSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideCount = horizontalScenes.length;

  useEffect(() => {
    if (isPaused) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return undefined;
    }

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 4500);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, slideCount]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const handleMouse = (pause: boolean) => () => setIsPaused(pause);

  return (
    <section
      id="scroll-lab"
      className="relative py-24 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <FadeInOnScroll className="space-y-4">
          <p className="tagline text-slate-400">Atelier scroll & motion</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Vertical, horizontal, zoom : un scroll signature.
          </h2>
          <p className="text-lg text-slate-300">
            Lenis orchestre chaque interaction : storytelling sticky, galeries horizontales, zooms
            et tremplins pour ScrollTrigger.
          </p>
        </FadeInOnScroll>
      </div>

      <div className="relative mt-12" onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)} onTouchStart={handleMouse(true)} onTouchEnd={handleMouse(false)}>
        <div className="overflow-hidden rounded-[48px] border-2 border-white/25 bg-linear-to-br from-white/15 via-white/8 to-white/5 p-6 shadow-[0_50px_180px_rgba(15,23,42,0.8),0_0_120px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-3xl">
          <div
            ref={trackRef}
            className="flex h-[420px] w-full gap-8 transition-transform duration-700 ease-out"
          >
            {horizontalScenes.map((scene, index) => (
              <article
                key={scene.title}
                className="relative flex w-full shrink-0 flex-col justify-end overflow-hidden rounded-4xl border-2 border-white/20 bg-linear-to-br from-black/40 via-black/60 to-black/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  className="absolute inset-0 object-cover opacity-70 transition-all duration-1000 ease-out"
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 opacity-0 bg-linear-to-br from-sky-500/20 via-transparent to-purple-500/20 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative space-y-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.6em] text-slate-500">
                    {`Valeur ${index + 1}`}
                  </p>
                  <h3 className="text-sm font-bold uppercase tracking-[0.5em] text-white/80">
                    {scene.title}
                  </h3>
                  <span className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase text-slate-400">
                    <span className="relative h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]">
                      <span className="absolute inset-0 rounded-full bg-sky-300 animate-ping opacity-75" />
                    </span>
                    {scene.badge}
                  </span>
                  <p className="text-base leading-relaxed text-white/85">{scene.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {horizontalScenes.map((scene, index) => (
            <button
              key={scene.title}
              aria-label={`Afficher ${scene.title}`}
              className={`h-2 w-8 rounded-full transition-all ${
                currentIndex === index ? 'bg-sky-400 w-10' : 'bg-white/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
