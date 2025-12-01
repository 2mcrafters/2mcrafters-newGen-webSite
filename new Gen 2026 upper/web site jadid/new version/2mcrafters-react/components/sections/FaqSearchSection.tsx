"use client";

import { ChangeEvent, useMemo, useState } from "react";

type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

type Props = {
  faqs: FaqItem[];
};

export function FaqSearchSection({ faqs }: Props) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredFaqs = useMemo(() => {
    if (!normalizedQuery) {
      return faqs;
    }

    return faqs.filter((faq) => {
      const haystack = `${faq.category} ${faq.question} ${faq.answer}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [faqs, normalizedQuery]);

  const groupedFaqs = useMemo(() => {
    const groupMap: Record<string, FaqItem[]> = {};

    filteredFaqs.forEach((faq) => {
      if (!groupMap[faq.category]) {
        groupMap[faq.category] = [];
      }
      groupMap[faq.category].push(faq);
    });

    return Object.entries(groupMap).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredFaqs]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8 rounded-3xl p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-xl faq-gradient">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Trouvez la réponse à vos questions en quelques secondes
          </h2>
          <p className="text-base text-slate-300">
            Cherchez par mot-clé ou filtrez par catégorie et découvrez notre accompagnement, nos
            services et nos engagements en quelques phrases.
          </p>
        </div>

        <div>
          <label htmlFor="faq-search" className="sr-only">
            Search FAQ
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 text-slate-300"
            >
              <circle cx={11} cy={11} r={7} />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              id="faq-search"
              type="text"
              className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
              placeholder="Search FAQ"
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-6">
          {groupedFaqs.length === 0 ? (
            <p className="text-center text-sm text-slate-400">
              Aucune réponse ne correspond à votre recherche pour l’instant. Essayez un autre mot-
              clé.
            </p>
          ) : (
            groupedFaqs.map(([category, items]) => (
              <div key={category} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-200">{category}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {items.length} question{items.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((faq) => (
                    <article
                      key={`${category}-${faq.question}`}
                      className="space-y-2 rounded-2xl bg-slate-950/80 p-4 shadow-lg shadow-black/30"
                    >
                      <h4 className="text-sm font-semibold text-white">{faq.question}</h4>
                      <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}