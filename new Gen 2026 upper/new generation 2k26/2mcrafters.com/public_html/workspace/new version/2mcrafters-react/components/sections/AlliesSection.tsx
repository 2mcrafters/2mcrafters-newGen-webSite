import { clients } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function AlliesSection() {
  const rows = [clients, [...clients].reverse()];

  return (
  <section className="relative py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-8 px-6 text-center">
        <FadeInOnScroll className="space-y-4">
          <p className="tagline text-slate-400">Alliances</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Scale-ups, studios et fonds nous confient leurs ambitions.</h2>
          <p className="text-slate-400">
            Workshops immersifs, squads dédiées et timezones compatibles pour livrer sans friction.
          </p>
        </FadeInOnScroll>

  <div className="space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={rowIndex === 0 ? "animate-marquee" : "animate-marquee-alt"}>
              <div className="flex items-center gap-8 whitespace-nowrap">
                {row.concat(row).map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex min-w-48 flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4"
                  >
                    <span className="text-xl font-semibold tracking-wide">{client.name}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{client.focus}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
