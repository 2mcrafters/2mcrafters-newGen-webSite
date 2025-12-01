import type { Metadata } from "next";
import { contactItems } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { ContactForm } from "@/components/forms/ContactForm";
import { AuroraBackground } from "@/components/visuals/AuroraBackground";
import { Mail, MapPin, Phone, ArrowRight, MessageCircle, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & demande de devis | CRAFTERS",
  description:
    "Expliquez-nous votre projet via notre formulaire de contact : site web, SaaS/ERP, branding, vidéo ou digitalisation RH.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#001428] text-white selection:bg-cyan-500/30">
      <AuroraBackground />
      
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.03]" />
      
      <div className="relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column: Content & Info */}
          <div className="flex flex-col justify-center space-y-12">
            <FadeInOnScroll>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                  </span>
                  Ouvert aux nouveaux projets
                </div>
                
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Parlons de <br />
                  <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    votre futur.
                  </span>
                </h1>
                
                <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                  Vous avez un projet ambitieux ? Une idée qui ne demande qu&apos;à éclore ? 
                  Nous sommes là pour transformer votre vision en réalité numérique impactante.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                      {item.label.toLowerCase().includes('email') ? <Mail size={20} /> : 
                       item.label.toLowerCase().includes('téléphone') ? <Phone size={20} /> : 
                       item.label.toLowerCase().includes('whatsapp') ? <MessageCircle size={20} /> : 
                       item.label.toLowerCase().includes('linkedin') ? <Linkedin size={20} /> : <MapPin size={20} />}
                    </div>
                    <p className="text-sm font-medium uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white group-hover:text-cyan-300">{item.value}</p>
                    
                    <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowRight className="text-cyan-400" size={20} />
                    </div>
                  </a>
                ))}
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4}>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-semibold text-white">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Expertise technique de pointe (Next.js, React, Node.js)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    Design centré utilisateur et innovant
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                    Accompagnement stratégique sur-mesure
                  </li>
                </ul>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Right Column: Form */}
          <div className="relative lg:mt-12">
            <FadeInOnScroll delay={0.3}>
              <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
                <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px]" />
                <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />
                
                <div className="relative">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">Envoyez-nous un message</h2>
                    <p className="mt-2 text-slate-400">
                      Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </FadeInOnScroll>
          </div>
          
        </div>
      </div>
    </div>
  );
}
