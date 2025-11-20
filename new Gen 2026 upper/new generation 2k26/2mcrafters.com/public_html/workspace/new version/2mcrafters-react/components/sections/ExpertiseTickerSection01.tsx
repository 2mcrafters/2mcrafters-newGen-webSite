'use client';

import React from 'react';
import Image from 'next/image';
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

export default function ExpertiseTickerSection01() {
  const infiniteFiles = [...adobeFiles, ...adobeFiles];

  return (
    <section aria-label="Expertises Crafters – Logos" className="relative text-white py-12">
      <FadeInOnScroll className="block w-full">
        <div className="flex flex-col gap-0">
          <div className="relative w-full overflow-hidden border border-white/10 bg-[#010b1e]/95 backdrop-blur-lg shadow-[0_25px_90px_rgba(1,13,34,0.7)]">
            
            <span className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-white/20" />
            <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />

            {/* Left Gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#010b1e] via-[#010b1e]/70 to-transparent z-10" />

            {/* Right Gradient */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#010b1e] via-[#010b1e]/70 to-transparent z-10" />

            <div 
              className="animate-marquee flex items-center gap-18 whitespace-nowrap px-6 py-5"
              style={{ animationDuration: '40s' }}
            >
              {infiniteFiles.map((file, index) => (
                <div key={`${file}-${index}`} className="flex items-center justify-center shrink-0">
                  <Image
                    src={`/images/adobe/${file}`}
                    alt={`Adobe ${index + 1}`}
                    width={120}
                    height={90}
                    className="block h-[50px] w-auto object-contain"
                    priority={index < 4}
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
