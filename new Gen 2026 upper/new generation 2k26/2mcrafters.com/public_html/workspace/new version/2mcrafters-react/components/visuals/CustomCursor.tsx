"use client";

import { useEffect, useRef } from "react";

const supportsFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!supportsFinePointer()) {
      return;
    }

    const htmlEl = document.documentElement;
    htmlEl.classList.add("custom-cursor-enabled");

    const setOpacity = (value: number) => {
      const opacity = value.toString();
      if (ringRef.current) ringRef.current.style.opacity = opacity;
      if (dotRef.current) dotRef.current.style.opacity = opacity;
    };

    const updatePosition = (x: number, y: number) => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const updateGradient = (x: number, y: number) => {
      const xPercent = Math.min(Math.max((x / window.innerWidth) * 100, 0), 100);
      const yPercent = Math.min(Math.max((y / window.innerHeight) * 100, 0), 100);
      htmlEl.style.setProperty("--gradient-x", `${xPercent}%`);
      htmlEl.style.setProperty("--gradient-y", `${yPercent}%`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      setOpacity(1);
      updatePosition(event.clientX, event.clientY);
      updateGradient(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      setOpacity(0);
      htmlEl.style.setProperty("--gradient-x", "50%");
      htmlEl.style.setProperty("--gradient-y", "50%");
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      htmlEl.classList.remove("custom-cursor-enabled");
      htmlEl.style.removeProperty("--gradient-x");
      htmlEl.style.removeProperty("--gradient-y");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block opacity-0 transition-opacity duration-200"
      >
        <div className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50 bg-white/5 blur-sm backdrop-blur-md" />
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block opacity-0 transition-opacity duration-150"
      >
        <div className="h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.75)]" />
      </div>
    </>
  );
}
