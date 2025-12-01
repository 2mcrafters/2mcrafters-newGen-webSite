'use client';

import dynamic from 'next/dynamic';

const ExpertiseTickerSection01 = dynamic(
  () => import('./ExpertiseTickerSection01'),
  { ssr: false },
);

export function ExpertiseTickerSection01Client() {
  return <ExpertiseTickerSection01 />;
}
