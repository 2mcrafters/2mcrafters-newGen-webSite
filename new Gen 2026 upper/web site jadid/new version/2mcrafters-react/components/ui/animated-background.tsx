"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
}

export function AnimatedGradient({ 
  className,
  colors = [
    "from-cyan-500 via-blue-600 to-purple-600",
  ]
}: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-linear-to-r animate-gradient opacity-30 blur-3xl",
        colors[0],
        className
      )}
    />
  );
}

export function AnimatedBlob({ className }: { className?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={cn(
          "absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-float",
          className
        )}
      />
      <div
        className={cn(
          "absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-r from-purple-400 to-pink-500 rounded-full opacity-15 blur-3xl animate-pulse-glow [animation-delay:1s]",
          className
        )}
      />
    </div>
  );
}
