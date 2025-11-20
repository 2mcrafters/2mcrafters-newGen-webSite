"use client";

import { useRef } from "react";
import { useLenisScroll } from "@/components/providers/SmoothScrollProvider";

export function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useLenisScroll(({ progress, velocity }) => {
    if (!progressRef.current) return;
    const clamped = Math.max(0.005, Math.min(progress, 1));
    progressRef.current.style.transform = `scaleX(${clamped})`;
    const opacity = 0.25 + Math.min(Math.abs(velocity) / 10, 0.55);
    progressRef.current.style.opacity = opacity.toFixed(2);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1.5 bg-transparent">
      <div className="h-full overflow-hidden rounded-full bg-black/20">
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-linear-to-r from-purple-500 via-sky-400 to-cyan-300 opacity-25 transition-[transform,opacity] duration-500 ease-out"
        />
      </div>
    </div>
  );
}
