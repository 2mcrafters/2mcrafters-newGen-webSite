import { processSteps } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Compass, Sparkles, Cpu, Rocket, Shield, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Cpu,
  Rocket,
  Shield,
};

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInOnScroll className="space-y-4 text-center">
          <p className="tagline text-slate-300">Processus</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Une méthode claire, du premier appel au lancement.</h2>
          <p className="text-lg text-slate-200">
            Diagnostic, conception, développement, tests puis accompagnement : chaque étape est préparée et documentée.
          </p>
        </FadeInOnScroll>

  <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <FadeInOnScroll
              key={step.title}
              delay={index * 80}
              className="rounded-3xl border border-white/10 bg-white p-6 text-left shadow-xl shadow-black/20"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Étape {index + 1}</p>
                {(() => {
                  const Icon = iconMap[step.icon ?? "Compass"];
                  return (
                    <span className="rounded-2xl bg-[#004484] p-2 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  );
                })()}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-3 text-sm text-zinc-600">{step.detail}</p>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
