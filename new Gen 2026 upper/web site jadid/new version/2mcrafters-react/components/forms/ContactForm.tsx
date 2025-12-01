"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/lib/data";

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: projectTypes[0],
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setStatusMessage('');

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'contact',
        ...formData,
      }),
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(payload.error || 'Le formulaire n’a pas pu être envoyé.');
        }
        setStatus('success');
        setStatusMessage('Merci ! Nous avons bien reçu votre demande et vous répondons sous 24h.');
        setFormData(initialState);
      })
      .catch((error) => {
        console.error('Contact form error', error);
        setStatus('error');
        setStatusMessage(error?.message ?? 'Une erreur est survenue.');
      });
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
            placeholder="Votre nom"
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
            placeholder="Nom de votre organisation"
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
            placeholder="Votre email"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Téléphone
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
            placeholder="Votre numéro"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300 md:col-span-2">
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
      </div>
      <label className="space-y-2 text-sm text-slate-300">
        Message / description du projet
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
          placeholder="Décrivez vos ambitions"
        />
      </label>
      <p className="text-sm text-slate-400">
        Plus vous nous donnez de détails, plus notre réponse sera précise. Nous pouvons aussi
        convenir d’un appel pour clarifier votre besoin.
      </p>
      <button
        type="submit"
        className={`w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors ${
          status === 'loading' ? 'bg-white/50' : 'bg-white hover:bg-gray-100'
        }`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
      {statusMessage && (
        <p
          className={`text-center text-sm ${status === 'success' ? 'text-emerald-400' : 'text-rose-300'}`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
