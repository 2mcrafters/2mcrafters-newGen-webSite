import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SmoothShowcase } from "@/components/sections/SmoothShowcase";
import { AlliesSection } from "@/components/sections/AlliesSection";
import { CreativeStackSection } from "@/components/sections/CreativeStackSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ScrollMotionLabSection } from "@/components/sections/ScrollMotionLabSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ExpertiseTickerSection } from "@/components/sections/ExpertiseTickerSection";

export default function Home() {
  return (
    <>
      <HeroSection />
  <AlliesSection />
  <ServicesSection />
  <ExpertiseTickerSection />
  <CreativeStackSection />
      <SmoothShowcase />
      <CaseStudiesSection />
      <ScrollMotionLabSection />
      <ProcessSection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
