'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { type ScrollSnapshot, useLenisScroll } from '@/components/providers/SmoothScrollProvider';
import { cn } from '@/lib/utils';

export type ParallaxWrapperProps = {
  children: ReactNode;
  strength?: number;
  axis?: 'x' | 'y';
  clamp?: number;
  className?: string;
};

export function ParallaxWrapper({
  children,
  strength = 0.15,
  axis = 'y',
  clamp = 120,
  className,
}: ParallaxWrapperProps) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const baseRef = useRef<number>(0);

  useEffect(() => {
    if (!nodeRef.current) return;
    baseRef.current = nodeRef.current.getBoundingClientRect().top + window.scrollY;
  }, []);

  useLenisScroll((snapshot: ScrollSnapshot) => {
    if (!nodeRef.current) return;
    const delta = (snapshot.y - baseRef.current) * strength;
    const limited = clamp ? Math.max(Math.min(delta, clamp), -clamp) : delta;
    const transform =
      axis === 'x'
        ? `translate3d(${limited.toFixed(2)}px,0,0)`
        : `translate3d(0,${limited.toFixed(2)}px,0)`;
    nodeRef.current.style.transform = transform;
  }, [strength, axis, clamp]);

  return (
    <div ref={nodeRef} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
