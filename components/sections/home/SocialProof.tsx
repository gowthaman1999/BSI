import React from "react";
import { SITE_CONFIG } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="w-full">
      <div className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 border border-black/[0.04] shadow-sm flex flex-col gap-6">
        <div className="text-center">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
            Trusted by growing brands
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {SITE_CONFIG.clients.map((client) => (
            <div
              key={client}
              className="font-body-md text-body-md font-semibold text-on-surface-variant tracking-tight hover:text-primary transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

