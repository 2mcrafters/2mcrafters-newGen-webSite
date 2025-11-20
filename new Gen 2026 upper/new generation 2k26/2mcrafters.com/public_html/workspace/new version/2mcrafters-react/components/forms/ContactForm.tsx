"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    budget: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          Nom complet
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Entreprise / Organisation
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Téléphone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Type de projet
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/40 focus:outline-none"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="text-black">
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Budget estimé
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Ex : 80 000 MAD"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-300">
        Message / description du projet
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
        />
      </label>
      <p className="text-sm text-slate-400">
        Plus vous nous donnez de détails, plus notre réponse sera précise. Nous pouvons aussi convenir d’un appel pour
        clarifier votre besoin.
      </p>
      <button
        type="submit"
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
      >
        Envoyer ma demande
      </button>
      {submitted && (
        <p className="text-center text-sm text-emerald-400">
          Merci ! Votre message a bien été envoyé. Nous reviendrons vers vous rapidement.
        </p>
      )}
    </form>
  );
}
