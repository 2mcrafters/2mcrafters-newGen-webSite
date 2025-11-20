"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-40 flex justify-center px-4 pt-6">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6">
        <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-white shadow-[0_8px_40px_rgba(5,19,36,0.35)] backdrop-blur-xl md:gap-6 md:px-8">
          <Link
            href="/"
            className="flex h-10 min-w-[120px] flex-none items-center justify-start px-1 md:h-14 md:min-w-[170px] md:px-4"
          >
            <Image
              src="/images/whitelogohori.png"
              alt="2M Crafters"
              width={150}
              height={34}
              className="h-auto max-h-9 w-auto object-contain md:max-h-12"
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 text-base font-medium text-white/70 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 text-white/80 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:opacity-70 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden flex-none items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-[#001428] shadow-[0_10px_30px_rgba(255,255,255,0.25)] transition hover:translate-y-0.5 hover:bg-white/90 md:inline-flex"
          >
            Contactez-nous
          </Link>

          <button
            className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Ouvrir la navigation"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1">
              <span className="h-0.5 w-full rounded-full bg-white" />
              <span className="h-0.5 w-3/4 rounded-full bg-white" />
              <span className="h-0.5 w-full rounded-full bg-white" />
            </span>
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-3xl border border-white/10 bg-[#001428]/90 px-6 py-5 text-sm text-white shadow-[0_20px_60px_rgba(0,10,20,0.45)] md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-full rounded-full bg-white/5 px-4 py-2 text-left text-white/80 transition hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-[#001428] shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                onClick={() => setOpen(false)}
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
