'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, TouchEvent as ReactTouchEvent } from 'react';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const horizontalScenes = [
  {
    title: 'Premier dictionnaire collaboratif du coaching',
    detail: 'Une plateforme innovante pour explorer les concepts essentiels du coaching, partager vos définitions et contribuer à une communauté active de coachs et formateurs.',
    image: '/images/posts/services/1.jpg',
    badge: 'Dicoaching',
  },
  {
    title: 'La solution moderne pour gérer vos ressources humaines',
    detail: 'Smart RH centralise le suivi du personnel, les congés, les projets et la communication interne pour une gestion RH simple, fluide et automatisée.',
    image: '/images/posts/services/2.jpg',
    badge: 'Smart RH',
  },
  {
    title: 'Votre gestion commerciale en un seul outil',
    detail: 'Pilotez vos produits, employés, commandes et alertes depuis une interface unique conçue pour optimiser tout votre flux commercial.',
    image: '/images/posts/services/3.jpg',
    badge: 'Boukir',
  },
  {
    title: 'Explorez votre essence, révélez votre potentiel',
    detail: 'Plongez dans le système de l’Ennéagramme pour mieux vous connaître, comprendre vos automatismes et engager votre transformation intérieure.',
    image: '/images/posts/services/4.jpg',
    badge: 'Enneamaroc',
  },
  {
    title: 'Maîtrisez une langue, ouvrez un monde',
    detail: 'Alingua Academy vous accompagne avec des cours adaptés, des professeurs qualifiés et une préparation efficace aux certifications internationales.',
    image: '/images/posts/services/5.jpg',
    badge: 'Alingua',
  },
  {
    title: 'Donnez vie à vos projets imprimés',
    detail: 'De vos supports marketing à vos créations personnalisées, Damej Print transforme vos idées en réalisations visibles, durables et de haute qualité.',
    image: '/images/posts/services/6.jpg',
    badge: 'Damej Print',
  },
  {
    title: 'L’aventure commence sur deux-roues',
    detail: 'Découvrez une solution complète pour louer ou acheter une moto, avec assistance, entretien et pièces fiables pour rouler en toute confiance.',
    image: '/images/posts/services/7.jpg',
    badge: 'Yaala 2 Roues',
  },
  {
    title: 'Nos collaborations, votre confiance',
    detail: 'Découvrez quelques-unes des marques et institutions qui font confiance à Crafters pour leurs solutions digitales, créatives et technologiques.',
    image: '/images/posts/services/8.jpg',
    badge: 'Crafters',
  },
];

export function ScrollMotionLabSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [isInstant, setIsInstant] = useState(false);
  const dragState = useRef({ isDragging: false, startX: 0, currentOffset: 0, slideWidth: 0, gap: 0 });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideCount = horizontalScenes.length;
  // Add clones at both ends for seamless bidirectional looping
  const extendedScenes = slideCount > 0 
    ? [horizontalScenes[slideCount - 1], ...horizontalScenes, horizontalScenes[0]] 
    : [];

  // Start at index 1 (the first real slide)
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (isPaused || slideCount === 0) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return undefined;
    }

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, slideCount]);

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const slide = track.querySelector<HTMLElement>('[data-slide]');
      if (!slide) return;

      const computed = getComputedStyle(track);
      const gapValue = parseFloat(computed.columnGap || computed.gap || '0');
      const offset = (slide.offsetWidth + gapValue) * currentIndex;

      track.style.transition = isInstant ? 'none' : 'transform 0.7s ease-out';
      track.style.transform = `translateX(-${offset}px)`;

      if (isInstant) {
        // Force reflow to ensure the jump happens instantly before re-enabling transition
        track.getBoundingClientRect();
        requestAnimationFrame(() => {
          setIsInstant(false);
        });
      }
    }
  }, [currentIndex, isInstant]);

  // Handle seamless loop resets
  useEffect(() => {
    if (slideCount === 0) return;

    // If we reached the clone of the first slide (at the end)
    if (currentIndex === slideCount + 1) {
      const timeout = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(1); // Jump back to the real first slide
      }, 720);
      return () => clearTimeout(timeout);
    }

    // If we reached the clone of the last slide (at the beginning)
    if (currentIndex === 0) {
      const timeout = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(slideCount); // Jump back to the real last slide
      }, 720);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, slideCount]);

  const handleMouse = (pause: boolean) => () => setIsPaused(pause);

  const computeOffset = (index: number) => {
    if (!trackRef.current) return 0;
    const track = trackRef.current;
    const slide = track.querySelector<HTMLElement>('[data-slide]');
    if (!slide) return 0;

    const computed = getComputedStyle(track);
    const gapValue = parseFloat(computed.columnGap || computed.gap || '0');
    dragState.current.slideWidth = slide.offsetWidth;
    dragState.current.gap = gapValue;
    return (slide.offsetWidth + gapValue) * index;
  };

  const startDrag = (clientX: number) => {
    if (!trackRef.current) return;
    const offset = computeOffset(currentIndex);
    dragState.current = {
      isDragging: true,
      startX: clientX,
      currentOffset: offset,
      slideWidth: dragState.current.slideWidth,
      gap: dragState.current.gap,
    };
    setIsPaused(true);
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.transition = 'none';
  };

  const onDragMove = (clientX: number) => {
    if (!dragState.current.isDragging || !trackRef.current) return;
    const delta = dragState.current.startX - clientX;
    const newOffset = dragState.current.currentOffset + delta;
    trackRef.current.style.transform = `translateX(-${newOffset}px)`;
  };

  const endDrag = (clientX: number) => {
    if (!dragState.current.isDragging || !trackRef.current) return;
    const delta = dragState.current.startX - clientX;
    dragState.current.isDragging = false;
    trackRef.current.style.cursor = '';
    trackRef.current.style.transition = 'transform 0.7s ease-out';

    const threshold = dragState.current.slideWidth / 4;
    if (slideCount > 0) {
      if (delta > threshold) {
        // Dragged left -> Next slide
        setCurrentIndex((prev) => prev + 1);
      } else if (delta < -threshold) {
        // Dragged right -> Previous slide
        setCurrentIndex((prev) => prev - 1);
      } else {
        // Snap back
        const offset = computeOffset(currentIndex);
        trackRef.current.style.transform = `translateX(-${offset}px)`;
      }
    }

    setIsPaused(false);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    trackRef.current.setPointerCapture(event.pointerId);
    startDrag(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDragging) return;
    onDragMove(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDragging) return;
    if (trackRef.current) {
      trackRef.current.releasePointerCapture(event.pointerId);
    }
    endDrag(event.clientX);
  };

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    startDrag(event.touches[0].clientX);
  };

  const handleTouchMove = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (!dragState.current.isDragging) return;
    onDragMove(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    endDrag(touch?.clientX ?? dragState.current.startX);
  };

  const resetDrag = () => {
    dragState.current.isDragging = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = '';
      trackRef.current.style.transition = 'transform 0.7s ease-out';
    }
  };

  useEffect(() => resetDrag, []);

  useEffect(() => {
    resetDrag();
    return () => resetDrag();
  }, [currentIndex]);

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => prev + 1);
    // Resume autoplay after interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => prev - 1);
    // Resume autoplay after interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section
      id="scroll-lab"
      className="relative py-24 text-white overflow-hidden"
    >
      {/** Guard to avoid modulo by zero */}
      {slideCount === 0 && <div className="px-6 text-center text-sm text-slate-300">Aucune scène définie.</div>}
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <FadeInOnScroll className="space-y-4">
          <p className="tagline text-slate-400">Nos Réalisations</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ils nous font confiance, nous façonnons leurs solutions digitales.
          </h2>
          <p className="text-lg text-slate-300">
            Crafters accompagne des marques et organisations ambitieuses en créant des plateformes modernes, des identités visuelles fortes et des outils métiers performants. Voici un aperçu de ce que nous construisons chaque jour avec nos clients.
          </p>
        </FadeInOnScroll>
      </div>

      <div className="relative mt-12" onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)} onTouchStart={handleMouse(true)} onTouchEnd={handleMouse(false)}>
        <div className="overflow-hidden border-2 border-white/25 bg-linear-to-br from-white/15 via-white/8 to-white/5 p-6 shadow-[0_50px_180px_rgba(15,23,42,0.8),0_0_120px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-3xl">
          <div
            ref={trackRef}
            className="flex w-full gap-8 transition-transform duration-700 ease-out select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {extendedScenes.map((scene, index) => (
              <article
                key={`${scene.title}-${index}`}
                data-slide
                className="relative flex flex-[0_0_100%] sm:flex-[0_0_calc(100%-2rem)] flex-col sm:justify-end overflow-hidden rounded-none sm:rounded-4xl border-0 sm:border-2 border-white/20 bg-transparent sm:bg-linear-to-br sm:from-black/40 sm:via-black/60 sm:to-black/80 p-0 sm:p-8 shadow-none sm:shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:aspect-[16/9] lg:aspect-[1200/380]"
              >
                <div className="relative w-full aspect-[4/3] sm:absolute sm:inset-0 sm:h-full sm:aspect-auto">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    className="object-cover transition-all duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index < 2}
                    unoptimized
                  />
                </div>
                
                <div className="hidden sm:block absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                <div className="hidden sm:block absolute inset-0 opacity-0 bg-linear-to-br from-sky-500/20 via-transparent to-purple-500/20 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative p-6 sm:p-0 bg-[#010b1e] sm:bg-transparent space-y-2 sm:space-y-4">
                  <p className="text-[0.6rem] sm:text-[0.7rem] font-semibold uppercase tracking-[0.6em] text-slate-500">
                    {`Valeur ${index + 1}`}
                  </p>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/80 line-clamp-2 sm:line-clamp-none">
                    {scene.title}
                  </h3>
                  <span className="inline-flex items-center gap-3 text-[0.6rem] sm:text-[0.7rem] font-medium uppercase text-slate-400">
                    <span className="relative h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]">
                      <span className="absolute inset-0 rounded-full bg-sky-300 animate-ping opacity-75" />
                    </span>
                    {scene.badge}
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-white/85 line-clamp-3 sm:line-clamp-none">{scene.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
            aria-label="Précédent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {horizontalScenes.map((scene, index) => (
              <button
                key={scene.title}
                aria-label={`Afficher ${scene.title}`}
                className={`h-2 w-8 rounded-full transition-all ${
                  slideCount > 0 && (currentIndex - 1 + slideCount) % slideCount === index ? 'bg-sky-400 w-10' : 'bg-white/20'
                }`}
                onClick={() => {
                  setIsInstant(false);
                  setCurrentIndex(index + 1); // +1 because of the start clone
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
            aria-label="Suivant"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
