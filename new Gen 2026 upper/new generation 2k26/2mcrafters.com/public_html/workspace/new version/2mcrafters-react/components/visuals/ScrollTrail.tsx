"use client";

import { useRef } from "react";
import { useLenisScroll } from "@/components/providers/SmoothScrollProvider";

export function ScrollTrail() {
  const trailRef = useRef<HTMLDivElement | null>(null);

  useLenisScroll(({ y, velocity }) => {
    if (!trailRef.current) return;
    const viewport = typeof window !== "undefined" ? window.innerHeight : 800;
    const travelY = (y % (viewport + 200)) - viewport / 3;
    const travelX = Math.sin(y * 0.0015) * 140;
    const scale = 1 + Math.min(Math.abs(velocity) / 12, 0.4);
    const opacity = 0.2 + Math.min(Math.abs(velocity) / 15, 0.35);
    trailRef.current.style.transform = `translate3d(${travelX.toFixed(2)}px, ${travelY.toFixed(2)}px, 0) scale(${scale.toFixed(2)})`;
    trailRef.current.style.opacity = opacity.toFixed(2);
  }, []);

  return (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={trailRef}
        className="h-64 w-64 rounded-[45%] bg-linear-to-br from-purple-500/40 via-sky-400/30 to-teal-300/20 blur-[120px] opacity-30 transition-transform duration-500"
      />
    </div>
  );
}
