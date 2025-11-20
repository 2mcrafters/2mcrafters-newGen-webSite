"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/FadeIn";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@2mcrafters.com",
    href: "mailto:contact@2mcrafters.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 600 000 000",
    href: "tel:+212600000000",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Tanger, Maroc",
    href: "#",
  },
];

export function ModernContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-24">
  <div className="absolute inset-0 bg-[url(/patterns/dots.svg)] opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="mb-16 space-y-4 text-center text-white">
          <p className="tagline text-cyan-300">CONTACT</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Lançons votre projet ensemble
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Une idée, un projet, une question ? Parlons-en autour d&rsquo;un café (virtuel ou non)
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <Card className="border-white/10 bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="flex w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-base text-zinc-900 shadow-sm transition-all placeholder:text-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Parlez-nous de votre projet..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <FadeIn key={info.label} delay={0.3 + index * 0.1}>
                <a
                  href={info.href}
                  className="group block rounded-3xl border border-white/10 bg-white/95 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <info.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium uppercase tracking-wider text-zinc-500">
                        {info.label}
                      </div>
                      <div className="text-lg font-semibold text-zinc-900">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}

            <FadeIn delay={0.6}>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 shadow-xl">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Disponibilité
                </h3>
                <p className="text-slate-200">
                  Nous sommes disponibles du lundi au vendredi, de 9h à 18h (GMT+1). 
                  Réponse garantie sous 24h.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
