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
    <section className="relative py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white p-8 shadow-xl shadow-black/20">
        <h2 className="text-3xl font-semibold text-zinc-900">{newsletterCopy.title}</h2>
        <p className="mt-3 text-lg text-slate-600">{newsletterCopy.text}</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 rounded-full border border-black/10 px-5 py-3 text-base text-zinc-900 focus:border-black/40 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            {newsletterCopy.cta}
          </button>
        </form>
        {submitted && (
          <p className="mt-3 text-sm text-emerald-600">Merci ! Vous recevrez bientôt nos ressources.</p>
        )}
      </div>
    </section>
  );
}
