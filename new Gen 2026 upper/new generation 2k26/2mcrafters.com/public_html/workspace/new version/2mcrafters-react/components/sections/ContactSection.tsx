import { contactItems } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { PhoneCall, Mail, MapPin, type LucideIcon } from "lucide-react";

const contactIconMap: Record<string, LucideIcon> = {
  PhoneCall,
  Mail,
  MapPin,
};

export function ContactSection() {
  return (
  <section className="relative py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
  <div className="absolute left-1/2 top-0 h-136 w-136 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_60%)] blur-[140px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-8 px-6 text-center">
        <FadeInOnScroll className="space-y-4">
          <p className="tagline text-slate-400">Prêts quand vous l’êtes</p>
          <h2 className="text-4xl font-semibold">Un projet en tête ? Parlons-en.</h2>
          <p className="text-lg text-slate-300">
            Site, système métier, branding ou refonte complète : nous clarifions votre besoin et transformons votre idée en
            solution digitale concrète.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
            >
              Planifier un appel gratuit
            </a>
          </div>
        </FadeInOnScroll>
        <div className="grid gap-6 sm:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="rounded-full bg-white/10 p-3">
                  {(() => {
                    const Icon = contactIconMap[item.icon ?? "PhoneCall"];
                    return <Icon className="h-5 w-5 text-sky-200" strokeWidth={1.6} />;
                  })()}
                </span>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
