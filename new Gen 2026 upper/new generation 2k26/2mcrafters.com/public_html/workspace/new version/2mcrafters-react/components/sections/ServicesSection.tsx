import { services } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { VelocityCard } from "@/components/motion/VelocityCard";
import { Code2, PenTool, TrendingUp, Cpu, Smartphone, PanelsTopLeft, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  PenTool,
  TrendingUp,
  Cpu,
  Smartphone,
  PanelsTopLeft,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-14 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-y-0 left-1/2 h-full w-220 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,158,237,0.2),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-32 right-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeInOnScroll className="space-y-4 text-center">
          <p className="tagline text-slate-300">Ce que nous faisons</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">L’innovation digitale, réunie dans une seule équipe.</h2>
          <p className="text-lg text-slate-200">
            Développement web, design, vidéo, systèmes métiers… Crafters rassemble toutes les expertises pour transformer vos idées en solutions efficaces et remarquables.
          </p>
        </FadeInOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <VelocityCard
              key={service.title}
              className="h-full rounded-3xl border border-white/10 bg-white p-6 shadow-xl shadow-black/20 backdrop-blur"
              lift={8 + index}
              intensity={0.04 + index * 0.004}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#004484] p-3 text-white">
                  {(() => {
                    const Icon = iconMap[service.icon ?? "Code2"];
                    return <Icon className="h-6 w-6" strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm text-zinc-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                {service.highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#004484]" />
                    {point}
                  </li>
                ))}
              </ul>
            </VelocityCard>
          ))}
        </div>
      </div>
    </section>
  );
}
