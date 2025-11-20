'use client';

import Lenis, { type LenisOptions } from 'lenis';
import {
  createContext,
  type DependencyList,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from 'react';

export type ScrollSnapshot = {
  y: number;
  velocity: number;
  progress: number;
  direction: 'up' | 'down' | 'idle';
};

const defaultSnapshot: ScrollSnapshot = {
  y: 0,
  velocity: 0,
  progress: 0,
  direction: 'idle',
};

type SmoothScrollConfig = Partial<LenisOptions> & {
  anchorOffset?: number;
  autoRaf?: boolean;
};

type ResolvedConfig = LenisOptions & {
  anchorOffset: number;
  autoRaf: boolean;
};

type ContextValue = {
  getLenis: () => Lenis | null;
  subscribe: (listener: () => void) => () => void;
  getState: () => ScrollSnapshot;
};

const SmoothScrollContext = createContext<ContextValue>({
  getLenis: () => null,
  subscribe: () => () => undefined,
  getState: () => defaultSnapshot,
});

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useResolvedConfig(config?: SmoothScrollConfig): ResolvedConfig {
  return useMemo(() => {
    const {
      duration,
      easing,
      lerp,
      smoothWheel,
      syncTouch,
      syncTouchLerp,
      touchMultiplier,
      wheelMultiplier,
      gestureOrientation,
      orientation,
      anchorOffset,
      autoRaf,
    } = config ?? {};

    return {
      duration: duration ?? 1.1,
      easing:
        easing ??
        ((t: number) => Math.min(1, 1 - Math.pow(2, -10 * t))),
      lerp: lerp ?? 0.12,
      smoothWheel: smoothWheel ?? true,
      syncTouch: syncTouch ?? true,
      syncTouchLerp: syncTouchLerp ?? 0.08,
      touchMultiplier: touchMultiplier ?? 1.1,
      wheelMultiplier: wheelMultiplier ?? 1,
      gestureOrientation: gestureOrientation ?? 'vertical',
      orientation: orientation ?? 'vertical',
      anchorOffset: anchorOffset ?? -96,
      autoRaf: autoRaf ?? true,
    } satisfies ResolvedConfig;
  }, [config]);
}

type ProviderProps = {
  children: ReactNode;
  config?: SmoothScrollConfig;
};

export function SmoothScrollProvider({ children, config }: ProviderProps) {
  const listenersRef = useRef(new Set<() => void>());
  const stateRef = useRef<ScrollSnapshot>(defaultSnapshot);
  const lenisRef = useRef<Lenis | null>(null);
  const frameRef = useRef<number | null>(null);
  const resolvedConfig = useResolvedConfig(config);

  const subscribe = useCallback((listener: () => void) => {
    listenersRef.current.add(listener);
    return () => listenersRef.current.delete(listener);
  }, []);

  const getState = useCallback(() => stateRef.current, []);

  const notify = useCallback(() => {
    listenersRef.current.forEach((listener) => listener());
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      document.documentElement.classList.remove('lenis');
      return;
    }

    const { anchorOffset, autoRaf, ...lenisOptions } = resolvedConfig;
  const lenis = new Lenis(lenisOptions as LenisOptions);
  lenisRef.current = lenis;
  notify();

    const handleScroll = (instance: Lenis) => {
      stateRef.current = {
        y: instance.scroll,
        velocity: instance.velocity,
        progress: instance.progress,
        direction:
          instance.direction === -1
            ? 'up'
            : instance.direction === 1
              ? 'down'
              : 'idle',
      };
      notify();
    };

    const unsubscribe = lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      frameRef.current = window.requestAnimationFrame(raf);
    };

    if (autoRaf) {
      frameRef.current = window.requestAnimationFrame(raf);
    }

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, {
        offset: anchorOffset,
        lerp: resolvedConfig.lerp,
        duration: resolvedConfig.duration,
      });
    };

    const syncHash = () => {
      if (!window.location.hash) return;
      const target = document.querySelector(window.location.hash) as HTMLElement | null;
      if (target) {
        lenis.scrollTo(target, { offset: anchorOffset, immediate: false });
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    syncHash();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
      unsubscribe?.();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lenis.destroy();
      lenisRef.current = null;
      notify();
    };
  }, [notify, resolvedConfig]);

  const getLenis = useCallback(() => lenisRef.current, []);

  const contextValue = useMemo<ContextValue>(
    () => ({
      getLenis,
      subscribe,
      getState,
    }),
    [getLenis, subscribe, getState],
  );

  return <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>;
}

export function useLenis(callback?: (lenis: Lenis | null) => void, deps: DependencyList = []) {
  const context = useContext(SmoothScrollContext);
  const state = useSyncExternalStore(context.subscribe, context.getState, context.getState);

  useEffect(() => {
    if (!callback) return;
    callback(context.getLenis());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.getLenis, callback, ...deps]);

  return {
    ...state,
    lenis: context.getLenis(),
  };
}

export function useLenisScroll(handler: (snapshot: ScrollSnapshot) => void, deps: DependencyList = []) {
  const { subscribe, getState } = useContext(SmoothScrollContext);

  useEffect(() => {
    const listener = () => handler(getState());
    return subscribe(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe, getState, handler, ...deps]);
}

export function SmoothScrollLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
  <div className="relative min-h-screen bg-linear-to-b from-[#00315f] to-[#001428] text-white">{children}</div>
    </SmoothScrollProvider>
  );
}
