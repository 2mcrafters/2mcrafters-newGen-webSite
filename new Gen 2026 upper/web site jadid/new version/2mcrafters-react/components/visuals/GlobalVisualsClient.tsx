"use client";

import dynamic from "next/dynamic";

// Client-only dynamic imports to avoid using `ssr: false` in Server Components
const TechPattern = dynamic(
  () => import("@/components/visuals/TechPattern").then((mod) => mod.TechPattern),
  { ssr: false }
);

const AuroraBackground = dynamic(
  () => import("@/components/visuals/AuroraBackground").then((mod) => mod.AuroraBackground),
  { ssr: false }
);

const ScrollTrail = dynamic(
  () => import("@/components/visuals/ScrollTrail").then((mod) => mod.ScrollTrail),
  { ssr: false }
);

const ScrollProgressBar = dynamic(
  () => import("@/components/visuals/ScrollProgressBar").then((mod) => mod.ScrollProgressBar),
  { ssr: false }
);

export default function GlobalVisualsClient() {
  return (
    <>
      <TechPattern />
      <AuroraBackground />
      <ScrollTrail />
      <ScrollProgressBar />
    </>
  );
}
