import React from "react";
import { HeroBento } from "@/components/sections/home/HeroBento";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { SelectedWorkSection } from "@/components/sections/home/SelectedWorkSection";
import { BuiltForUSTeams } from "@/components/sections/home/BuiltForUSTeams";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { ContactBento } from "@/components/sections/home/ContactBento";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12 sm:gap-20">
        {/* 1. HERO BENTO SECTION */}
        <HeroBento />

        {/* 2. SOCIAL PROOF ROW */}
        <SocialProof />

        {/* 3. SERVICES SECTION */}
        <ServicesSection />

        {/* 4. PROCESS SECTION */}
        <ProcessSection />

        {/* 5. SELECTED WORK SECTION */}
        <SelectedWorkSection />

        {/* 6. BUILT FOR U.S. TEAMS SECTION */}
        <BuiltForUSTeams />

        {/* 7. FAQ SECTION */}
        <FAQSection />

        {/* 8. CONTACT BENTO SECTION */}
        <ContactBento />
      </div>
    </div>
  );
}

