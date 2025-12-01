import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

const expertiseWords = [
  "Design", "Branding", "Développement", "UX / UI", "Technologie", "SaaS",
  "Webflow", "React", "Next.js", "UI Engineering", "Motion Design", "Vidéo",
  "Architecture", "Cloud", "Intégration", "Optimisation", "Sécurité", 
  "Performance Web", "SEO", "Automatisation",

  // Premium
  "Product Design", "Direction Artistique", "Stratégie Digitale",
  "Création Visuelle", "Prototype", "Web 3.0", "Intelligence Artificielle",
  "Data Design", "Accessibilité", "Micro-Animations", "Systèmes de Design",
  "DevOps", "API Integration", "Full Stack", "Gestion de Projet",
  "Conception Produit", "Expérience Client", "Transformation Digitale",
  "Qualité Logicielle", "Testing", "Maintenance", "Scalabilité",
  "Performance Produit", "Cloud Native", "CI / CD", "Architecture Frontend",
];

// Double loop for smooth infinite scrolling
const infiniteWords = [...expertiseWords, ...expertiseWords];

export function ExpertiseTickerSection() {
  return (
    <section aria-label="Expertises Crafters" className="relative text-white">
      <FadeInOnScroll className="block w-full">

        <div className="flex flex-col gap-0">

          <div className="relative w-full overflow-hidden border border-white/10 bg-[#010b1e]/95 backdrop-blur-lg shadow-[0_25px_90px_rgba(1,13,34,0.7)]">

            <span className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-white/20" />
            <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />

            {/* Left Gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#010b1e] via-[#010b1e]/70 to-transparent z-10" />

            {/* Right Gradient */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#010b1e] via-[#010b1e]/70 to-transparent z-10" />

            {/* Smooth Infinite Loop */}
            <div 
              className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap px-12 py-4 tracking-[0.32em] text-white/90 uppercase font-semibold text-base sm:text-lg sm:gap-16 sm:px-16"
              style={{ animationDuration: '100s' }}
            >

              {infiniteWords.map((word, i) => (
                <span key={`${word}-${i}`} className="text-white/80 hover:text-white transition-colors duration-300">
                  {word}
                </span>
              ))}

            </div>

          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
