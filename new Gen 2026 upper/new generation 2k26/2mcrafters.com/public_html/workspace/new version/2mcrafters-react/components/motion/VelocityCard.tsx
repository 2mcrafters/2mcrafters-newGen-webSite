'use client';

import { useRef, type ReactNode } from 'react';
import { useLenisScroll } from '@/components/providers/SmoothScrollProvider';
import { cn } from '@/lib/utils';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export type VelocityCardProps = {
  children: ReactNode;
  className?: string;
  /**
   * Maximum number of pixels the card can lift upward while scrolling.
   */
  lift?: number;
  /**
   * How quickly the scroll velocity influences the animation (0 - 0.1 recommended).
   */
  intensity?: number;
  /**
   * Damping applied when easing toward the next velocity snapshot.
   */
  smoothness?: number;
};

export function VelocityCard({
  children,
  className,
  lift = 10,
  intensity = 0.05,
  smoothness = 0.12,
}: VelocityCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const activityRef = useRef(0);

  useLenisScroll(({ velocity }) => {
    if (!cardRef.current) return;

    const target = clamp(Math.abs(velocity) * intensity, 0, 1);
    activityRef.current += (target - activityRef.current) * smoothness;

    const liftValue = -(activityRef.current * lift);
    const scaleValue = 1 + activityRef.current * 0.015;
    const shadowOpacity = 0.18 + activityRef.current * 0.25;
    const blur = 18 + activityRef.current * 16;
    const glowOpacity = 0.12 + activityRef.current * 0.4;

    cardRef.current.style.transform = `translate3d(0, ${liftValue.toFixed(3)}px, 0) scale(${scaleValue.toFixed(3)})`;
    cardRef.current.style.boxShadow = `0 ${blur.toFixed(1)}px ${(blur * 2.2).toFixed(1)}px rgba(5, 8, 18, ${shadowOpacity.toFixed(3)})`;

    if (glowRef.current) {
      glowRef.current.style.opacity = glowOpacity.toFixed(3);
    }
  }, [intensity, lift, smoothness]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative isolate will-change-transform transition-[transform,box-shadow] duration-300 ease-out',
        'translate-y-0 scale-100 shadow-2xl shadow-black/30',
        className,
      )}
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_20%_20%,rgba(192,132,252,0.35),transparent_60%)] opacity-20 blur-md transition-opacity duration-300 ease-out"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
