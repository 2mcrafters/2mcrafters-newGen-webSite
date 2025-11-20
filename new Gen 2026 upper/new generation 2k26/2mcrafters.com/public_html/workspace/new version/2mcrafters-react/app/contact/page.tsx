import type { Metadata } from "next";
import { contactItems } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Contact & demande de devis | 2MCRAFTERS",
  description:
    "Expliquez-nous votre projet via notre formulaire de contact : site web, SaaS/ERP, branding, vidéo ou digitalisation RH.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
  <section className="bg-linear-to-b from-[#00315f] to-[#001428] py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-400">Contact</p>
            <h1 className="text-4xl font-semibold">Contact & demande de devis.</h1>
            <p className="text-lg text-slate-300">
              Vous avez un projet, une question ou simplement envie d’échanger ? Remplissez le formulaire ci-dessous, nous
              vous répondrons dans les plus brefs délais.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

  <section className="bg-linear-to-b from-[#00315f] to-[#001428] text-white">
        <div className="mx-auto max-w-5xl space-y-10 px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-4xl border border-white/15 bg-white/5 p-6">
              <ContactForm />
            </div>
            <div className="space-y-6 rounded-4xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Coordonnées</p>
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} className="block rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
                  </a>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200">
                <p>
                  Plus vous nous donnez de détails, plus notre réponse sera précise. Nous pouvons également convenir d’un
                  appel pour clarifier votre besoin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
