'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, TouchEvent as ReactTouchEvent } from 'react';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const horizontalScenes = [
  {
    title: 'Immersion',
    detail: 'Études terrain, moodboards vivants et captations pour nourrir chaque concept.',
    image: '/images/posts/services/1.jpg',
    badge: 'Terrain',
  },
  {
    title: 'Prototypage',
    detail: 'Design system variables + interactions Lenis testées en live avec vos équipes.',
    image: '/images/posts/services/2.jpg',
    badge: 'System',
  },
  {
    title: 'Motion Lab',
    detail:
      'WebGL, WebGPU et ScrollTrigger orchestrent des reveals zoom-in et des slides horizontales.',
    image: '/images/posts/services/3.jpg',
    badge: 'Immersive',
  },
  {
    title: 'Déploiement',
    detail: 'CI/CD, pilotage qualité et contenu multi-formats prêts à diffuser.',
    image: '/images/posts/services/4.jpg',
    badge: 'Opérations',
  },
  {
    title: 'Labo sonore',
    detail: 'Textures audio et spatialisation subtiles qui accompagnent les transitions.',
    image: '/images/posts/services/5.jpg',
    badge: 'Sound',
  },
  {
    title: 'Expérience',
    detail: 'Interactions tactiles, micro-animations et scénarios responsives en pilote continu.',
    image: '/images/posts/services/6.jpg',
    badge: 'Experience',
  },
  {
    title: 'Story Craft',
    detail: 'Narrations dynamisées avec micro-interactions et aliasing typographique.',
    image: '/images/posts/services/7.jpg',
    badge: 'Story',
  },
  {
    title: 'Lighting Lab',
    detail: 'Dégradés organiques et halos lumineux qui élèvent la piste horizontale.',
    image: '/images/posts/services/8.jpg',
    badge: 'Light',
  },
];

export function ScrollMotionLabSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInstant, setIsInstant] = useState(false);
  const dragState = useRef({ isDragging: false, startX: 0, currentOffset: 0, slideWidth: 0, gap: 0 });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideCount = horizontalScenes.length;
  const extendedScenes = slideCount > 0 ? [...horizontalScenes, horizontalScenes[0]] : [];

  useEffect(() => {
    if (isPaused || slideCount === 0) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return undefined;
    }

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (slideCount === 0) return prev;
        const next = prev + 1;
        return next > slideCount ? slideCount : next;
      });
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
        requestAnimationFrame(() => {
          track.style.transition = 'transform 0.7s ease-out';
          setIsInstant(false);
        });
      }
    }
  }, [currentIndex, isInstant]);

  useEffect(() => {
    if (currentIndex === slideCount && slideCount > 0) {
      const timeout = setTimeout(() => {
        setIsInstant(true);
        setCurrentIndex(0);
      }, 720);

      return () => clearTimeout(timeout);
    }
    return undefined;
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
        setCurrentIndex((prev) => {
          const next = prev + 1;
          return next > slideCount ? slideCount : next;
        });
      } else if (delta < -threshold) {
        setCurrentIndex((prev) => {
          if (prev === 0) {
            setIsInstant(true);
            return slideCount - 1;
          }
          return prev - 1;
        });
      } else {
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

  return (
    <section
      id="scroll-lab"
      className="relative py-24 text-white overflow-hidden"
    >
      {/** Guard to avoid modulo by zero */}
      {slideCount === 0 && <div className="px-6 text-center text-sm text-slate-300">Aucune scène définie.</div>}
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
                className="relative flex flex-[0_0_calc(100%-2rem)] flex-col justify-end overflow-hidden rounded-4xl border-2 border-white/20 bg-linear-to-br from-black/40 via-black/60 to-black/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)] aspect-[1200/380]"
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out"
                  sizes="100vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
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
                slideCount > 0 && currentIndex % slideCount === index ? 'bg-sky-400 w-10' : 'bg-white/20'
              }`}
              onClick={() => {
                setIsInstant(false);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
