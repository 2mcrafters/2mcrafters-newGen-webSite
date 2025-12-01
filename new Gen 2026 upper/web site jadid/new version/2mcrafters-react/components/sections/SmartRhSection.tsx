import Image from "next/image";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

const features = [
  "Gestion du personnel, présences et congés",
  "Paie automatisée et exports comptables",
  "Portail managers & collaborateurs",
  "Tableaux de bord en temps réel",
];

export function SmartRhSection() {
  return (
    <section className="bg-linear-to-b from-[#00315f] to-[#001428] py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-5">
          <FadeInOnScroll className="space-y-4">
            <p className="tagline text-slate-400">Produit maison</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Passez du papier au confort du digital avec Smart RH.
            </h2>
            <p className="text-lg text-slate-300">
              Smart RH est notre solution de digitalisation des ressources humaines : gestion du
              personnel, présence, congés, paie et tableaux de bord en temps réel. Fini les dossiers
              éparpillés, place à une gestion fluide, centralisée et sécurisée.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
              >
                Découvrir Smart RH
              </a>
            </div>
          </FadeInOnScroll>
        </div>
        <div className="flex-1">
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-purple-500/20">
            <Image
              src="/images/posts/services/1.jpg"
              alt="Smart RH interface"
              width={960}
              height={640}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
