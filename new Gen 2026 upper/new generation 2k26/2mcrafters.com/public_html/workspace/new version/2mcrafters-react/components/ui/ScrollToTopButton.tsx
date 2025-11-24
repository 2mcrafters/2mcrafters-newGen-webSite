"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 320;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Retour en haut de page"
      className="fixed right-5 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      <ArrowUp className="h-5 w-5 text-blue-600" />
    </button>
  );
}
