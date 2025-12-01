import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AlliesSection } from "@/components/sections/AlliesSection";
import { CreativeStackSection } from "@/components/sections/CreativeStackSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ScrollMotionLabSection } from "@/components/sections/ScrollMotionLabSection";       
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ExpertiseTickerSection } from "@/components/sections/ExpertiseTickerSection";
import { ExpertiseTickerSection01Client } from "@/components/sections/ExpertiseTickerSection01Client";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AlliesSection />

    <ServicesSection />
    <ExpertiseTickerSection />
    <CreativeStackSection />
    <ExpertiseTickerSection01Client />
      <CaseStudiesSection />
      <ScrollMotionLabSection />
      <NewsletterSection />
    </>
  );
}
