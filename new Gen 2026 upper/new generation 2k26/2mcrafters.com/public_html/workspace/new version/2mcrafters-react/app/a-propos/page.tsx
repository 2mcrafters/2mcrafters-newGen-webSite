import type { Metadata } from "next";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { aboutValues } from "@/lib/data";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AboutHeroSlider } from "@/components/sections/AboutHeroSlider";
import { ExpertiseTickerSection } from "@/components/sections/ExpertiseTickerSection";

export const metadata: Metadata = {
  title: "À propos de 2MCRAFTERS | Studio digital & créatif",
  description:
    "Studio digital-tech basé à Tanger réunissant développeurs, designers, vidéastes et stratèges pour accélérer la transformation digitale des entreprises.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-0">
      {/* Hero Slider Section */}
      <section className="px-4 pt-32 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <AboutHeroSlider />
        </div>
      </section>

      {/* Intro Text */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInOnScroll className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">Notre Identité</span>
            <h2 className="text-3xl font-bold text-white md:text-5xl leading-tight">
              Plus qu’une entreprise, <br/> <span className="text-slate-400">un partenaire de croissance.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Crafters est une entreprise digital-tech & créative basée à Tanger, au Maroc.
                Nous réunissons développeurs, designers, vidéastes et stratèges pour accompagner les organisations dans leurs projets de transformation digitale, de branding et d’innovation.
              </p>
              <p>
                Notre engagement : créer des solutions performantes, élégantes et durables qui accélèrent la croissance de nos clients et renforcent leur avantage compétitif.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Ticker Section */}
      <ExpertiseTickerSection />

      {/* Vision & Mission */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <FadeInOnScroll className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Notre Vision</h3>
              <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
                <p>
                  Nous croyons que le digital est un levier puissant au service de l’humain, des organisations et des métiers.
                  Notre vision : imaginer et construire des solutions utiles, durables et intuitives, capables de simplifier le quotidien, d’optimiser les performances et d’amplifier l’impact de nos clients.
                </p>
                <p>
                  Nous aspirons à un digital plus intelligent, plus accessible et profondément orienté vers l’expérience humaine.
                </p>
              </div>
              <div className="h-1 w-24 bg-blue-500/30 rounded-full"></div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200} className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Notre Mission</h3>
              <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
                <p>
                  Notre mission est de transformer vos idées en expériences digitales concrètes et performantes.
                </p>
                <p>
                  Nous vous aidons à clarifier vos besoins, concevoir des solutions sur mesure, allier esthétique, performance et simplicité d’usage — puis vous accompagner durablement dans leur évolution.
                </p>
                <p>
                  Chaque réalisation est pensée comme un investissement stratégique et un levier de croissance.
                </p>
              </div>
              <div className="h-1 w-24 bg-purple-500/30 rounded-full"></div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInOnScroll className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Nos Valeurs</h2>
          </FadeInOnScroll>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value, index) => (
              <FadeInOnScroll 
                key={value.title} 
                delay={index * 100}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-blue-400/30"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{value.title}</h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{value.detail}</p>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Pics Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="mx-auto max-w-[1600px]">
          <FadeInOnScroll className="mb-12 text-center space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">Dans les coulisses de Crafters</span>
            <h2 className="mt-2 text-3xl font-bold text-white">Bienvenue dans l’univers de Crafters</h2>
            <div className="mx-auto max-w-3xl space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                Un espace où l’innovation, la créativité et l’exigence technique se rencontrent.
                Nous imaginons, construisons et affinons chaque jour des solutions qui repoussent les limites et donnent forme à l’avenir du digital.
              </p>
              <p>
                Explorez notre quotidien : là où les idées se transforment en produits ambitieux et en expériences mémorables.
              </p>
            </div>
          </FadeInOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/images/posts/12.jpg",
              "/images/posts/13.jpg",
              "/images/posts/14.jpg",
              "/images/posts/16.jpg",
              "/images/posts/17.jpg",
              "/images/posts/18.jpg"
            ].map((src, index) => (
              <FadeInOnScroll key={index} delay={index * 100} className="relative aspect-4/5 overflow-hidden rounded-3xl group border border-white/10 bg-white/5">
                <Image 
                  src={src} 
                  alt={`Life at 2MCRAFTERS ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-6">
                  <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110 hover:bg-[#1877F2] hover:text-white" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110 hover:bg-[#E4405F] hover:text-white" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110 hover:bg-[#0A66C2] hover:text-white" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <span className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    Suivez-nous
                  </span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
