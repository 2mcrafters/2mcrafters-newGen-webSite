/* eslint-disable @next/next/no-img-element */
'use client';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const adobeFiles = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
];

const specialtyLogos = [
  { file: 'pr.svg', alt: 'Premiere' },
  { file: 'ae.svg', alt: 'After Effects' },
  { file: 'ai.svg', alt: 'Illustrator' },
  { file: 'js.svg', alt: 'JavaScript' },
  { file: 'php.svg', alt: 'PHP' },
  { file: 'xd.svg', alt: 'Adobe XD' },
  { file: 'swift.svg', alt: 'Swift' },
  { file: 'pdf.svg', alt: 'PDF & Acrobat' },
  { file: 'ps.svg', alt: 'Photoshop' },
  { file: 'rh.svg', alt: 'Rhino' },
  { file: 'id.svg', alt: 'InDesign' },
  { file: 'code.svg', alt: 'Creative Code' },
];
export default function ExpertiseTickerSection01() {
  // Quadruple the list to ensure seamless looping on large screens
  const logoPool = [
    ...adobeFiles.map((name) => ({
      src: `/images/adobe/${name}`,
      alt: `Adobe asset ${name}`,
      priority: true,
    })),
    ...specialtyLogos.map((logo) => ({
      src: `/images/logos/${logo.file}`,
      alt: logo.alt,
      priority: false,
    })),
  ];

  const infiniteFiles = [...logoPool, ...logoPool];

  return (
    <section
      aria-label="Expertises Crafters – Logos"
      className="relative w-full overflow-hidden py-5 text-white"
    >
      {/* Decorative background glow */}

      <FadeInOnScroll className="block w-full">
        <div className="flex flex-col gap-0">
          <div className="relative w-full overflow-hidden border border-white/10 bg-slate-950/50 backdrop-blur-lg shadow-[0_25px_90px_rgba(1,13,34,0.7)]">
            <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-white/20" />
            <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/20" />

            {/* Left Gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

            {/* Right Gradient */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-slate-950 via-slate-950/70 to-transparent z-10" />

            <div className="animate-marquee animate-marquee-slow flex items-center gap-12 whitespace-nowrap px-6 py-5">
              {infiniteFiles.map((item, index) => (
                <div key={`${item.src}-${index}`} className="flex items-center justify-center shrink-0">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={160}
                    height={120}
                    loading={item.priority ?? index < 8 ? 'eager' : 'lazy'}
                    className="block h-[50px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
