import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AlliesSection } from "@/components/sections/AlliesSection";
import { CreativeStackSection } from "@/components/sections/CreativeStackSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ScrollMotionLabSection } from "@/components/sections/ScrollMotionLabSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ExpertiseTickerSection } from "@/components/sections/ExpertiseTickerSection";
import ExpertiseTickerSection01 from "@/components/sections/ExpertiseTickerSection01";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AlliesSection />
      <ExpertiseTickerSection01 />
      <ServicesSection />
      <ExpertiseTickerSection />
      <CreativeStackSection />
      <CaseStudiesSection />
      <ScrollMotionLabSection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
