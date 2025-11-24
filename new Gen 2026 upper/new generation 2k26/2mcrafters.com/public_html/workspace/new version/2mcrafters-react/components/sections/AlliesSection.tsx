import Image from 'next/image';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const refImages = [
  '01ref.png',
  '02ref.png',
  '03ref.png',
  '04ref.png',
  '05ref.png',
  '06ref.png',
  '07ref.png',
  '08ref.png',
  '09ref.png',
  '10ref.png',
  '11ref.png',
  '12ref.png',
  '13ref.png',
];

export function AlliesSection() {
  // Quadruple the list to ensure seamless looping on all screen sizes
  const infiniteImages = [...refImages, ...refImages, ...refImages, ...refImages];

  return (
    <section className="relative py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <FadeInOnScroll className="mb-10">
          <p className="tagline text-slate-400">Alliances</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Des partenaires qui nous font confiance</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            Nous collaborons avec des entreprises visionnaires pour créer des solutions digitales fiables, performantes et durables.
            Chaque logo représente une alliance forte bâtie sur l’innovation, l’expertise et l’excellence.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2} className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-12">
          <div 
            className="flex w-max animate-marquee items-center whitespace-nowrap"
            style={{ animationDuration: '40s' }}
          >
            {infiniteImages.map((img, index) => (
              <div
                key={`${img}-${index}`}
                className="relative mr-16 h-16 w-40 shrink-0 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={`/images/ref/${img}`}
                  alt="Partner"
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
