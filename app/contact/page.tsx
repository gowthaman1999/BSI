import React from "react";
import { ContactBento } from "@/components/sections/home/ContactBento";

export const metadata = {
  title: "Contact & Discovery — Blackstone Infomatics",
  description:
    "Schedule a technical discovery session or share your project requirements with our principal engineering team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Direct Inquiries
            </span>
          </div>
          <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-primary max-w-4xl">
            Start a project.
          </h1>
          <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you need a dedicated senior engineering squad or a turnkey platform build, we
            review your requirements and reply with an architectural proposal within 24 hours.
          </p>
        </div>

        {/* Contact Bento */}
        <ContactBento />
      </div>
    </div>
  );
}

