"use client";

import { useRef } from "react";
import { useLenisScroll } from "@/components/providers/SmoothScrollProvider";

export function AuroraBackground() {
  const purpleRef = useRef<HTMLDivElement | null>(null);
  const cyanRef = useRef<HTMLDivElement | null>(null);

  useLenisScroll(({ y, velocity }) => {
    const easeY = (y * 0.04).toFixed(2);
    const wobbleX = Math.sin(y * 0.0012) * 80;
    const velocityFactor = 1 + Math.min(Math.abs(velocity) / 18, 0.35);

    if (purpleRef.current) {
      purpleRef.current.style.transform = `translate3d(${wobbleX.toFixed(2)}px, ${easeY}px, 0) scale(${velocityFactor})`;
      purpleRef.current.style.opacity = (0.5 + Math.min(Math.abs(velocity) / 12, 0.3)).toFixed(2);
    }

    if (cyanRef.current) {
      const inverse = (-y * 0.03).toFixed(2);
      cyanRef.current.style.transform = `translate3d(${(-wobbleX / 1.5).toFixed(2)}px, ${inverse}px, 0) scale(${velocityFactor + 0.1})`;
      cyanRef.current.style.opacity = (0.35 + Math.min(Math.abs(velocity) / 14, 0.25)).toFixed(2);
    }
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={purpleRef}
        className="absolute -top-32 left-1/4 h-152 w-152 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_65%)] blur-[160px] opacity-60 transition-transform duration-500"
      />
      <div
        ref={cyanRef}
        className="absolute bottom-0 right-0 h-128 w-lg translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.35),transparent_70%)] blur-[160px] opacity-40 transition-transform duration-500"
      />
    </div>
  );
}
