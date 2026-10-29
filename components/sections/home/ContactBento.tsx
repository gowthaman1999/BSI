"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SITE_CONFIG } from "@/lib/data";

export function ContactBento() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="w-full" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Contact Information Card (5 Cols Dark Card) */}
        <div className="lg:col-span-5 bg-tertiary text-on-tertiary rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-white/[0.08] shadow-xl relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps uppercase text-[#868381] tracking-[0.08em]">
              Start A Project
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-white tracking-[-0.03em] font-semibold">
              Tell us what you&apos;re building.
            </h2>
            <p className="font-body-md text-body-md text-[#cac6c3] leading-relaxed">
              Share your vision with us. We review your scope and reply with a detailed
              architectural proposal within 24 hours.
            </p>
          </div>

          <div className="py-8 flex flex-col gap-4">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="flex items-center gap-3 text-white hover:text-[#ff5a1f] transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-[#ff5a1f]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-body-md text-body-md font-medium">
                {SITE_CONFIG.contactEmail}
              </span>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-[#ff5a1f]">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-body-md text-body-md text-[#cac6c3]">
                {SITE_CONFIG.scheduleTimezone}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-[#ff5a1f]">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-body-md text-body-md text-[#cac6c3]">
                {SITE_CONFIG.deliveryScope}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <span className="font-label-caps text-label-caps text-[#cac6c3] uppercase tracking-[0.08em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Direct Founder & Principal Access
            </span>
          </div>
        </div>

        {/* Contact Form Card (7 Cols White Card) */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-black/[0.04] shadow-sm">
          {submitted ? (
            <div className="my-auto py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md font-semibold text-primary">
                Inquiry Received
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-md">
                Thank you for reaching out. A principal engineer will review your project details and follow up within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-surface-container text-primary font-semibold text-sm hover:bg-surface-dim transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Sarah Jenkins"
                  {...register("name")}
                  className={`w-full h-[52px] rounded-full px-6 bg-surface text-primary placeholder:text-on-surface-variant/60 font-body-md text-body-md outline-none border transition-all ${
                    errors.name
                      ? "border-red-400 bg-red-50/20"
                      : "border-black/[0.05] focus:border-[#ff5a1f] focus:bg-white"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs px-2">{errors.name.message}</span>
                )}
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="sarah@company.com"
                  {...register("email")}
                  className={`w-full h-[52px] rounded-full px-6 bg-surface text-primary placeholder:text-on-surface-variant/60 font-body-md text-body-md outline-none border transition-all ${
                    errors.email
                      ? "border-red-400 bg-red-50/20"
                      : "border-black/[0.05] focus:border-[#ff5a1f] focus:bg-white"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs px-2">{errors.email.message}</span>
                )}
              </div>

              {/* Service Required / Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="service"
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]"
                  >
                    Primary Focus
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full h-[52px] rounded-full px-5 bg-surface text-primary font-body-md text-body-md outline-none border border-black/[0.05] focus:border-[#ff5a1f] focus:bg-white cursor-pointer"
                  >
                    <option value="web-dev">Web Design & Development</option>
                    <option value="ui-ux">UI/UX Design Systems</option>
                    <option value="custom-software">Custom Software & APIs</option>
                    <option value="mobile-apps">Mobile Apps (iOS/Android)</option>
                    <option value="ecommerce">Headless E-commerce</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]"
                  >
                    Target Budget
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full h-[52px] rounded-full px-5 bg-surface text-primary font-body-md text-body-md outline-none border border-black/[0.05] focus:border-[#ff5a1f] focus:bg-white cursor-pointer"
                  >
                    <option value="15k-30k">$15,000 – $30,000</option>
                    <option value="30k-60k">$30,000 – $60,000</option>
                    <option value="60k+">$60,000+</option>
                    <option value="retainer">Sprint Retainer</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your timeline, scope, and technical goals..."
                  {...register("message")}
                  className={`w-full rounded-[20px] p-5 bg-surface text-primary placeholder:text-on-surface-variant/60 font-body-md text-body-md outline-none border resize-none transition-all ${
                    errors.message
                      ? "border-red-400 bg-red-50/20"
                      : "border-black/[0.05] focus:border-[#ff5a1f] focus:bg-white"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs px-2">{errors.message.message}</span>
                )}
              </div>

              {/* Submit & SLA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white font-label-button text-[14px] hover:shadow-[0_8px_24px_-4px_rgba(255,90,31,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                </button>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  Response within 24h
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

