"use client";

import { FormEvent, useState } from "react";
import { newsletterCopy } from "@/lib/data";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl">
        <div className="h-[300px] w-[600px] rounded-full bg-gradient-to-r from-blue-600 via-indigo-900 to-slate-900" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{newsletterCopy.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">{newsletterCopy.text}</p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-lg flex-col gap-4 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base text-white placeholder:text-zinc-500 transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-zinc-200 active:scale-95"
          >
            {newsletterCopy.cta}
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-sm font-medium text-emerald-400">
            Merci ! Vous recevrez bientôt nos ressources.
          </p>
        )}
      </div>
    </section>
  );
}
