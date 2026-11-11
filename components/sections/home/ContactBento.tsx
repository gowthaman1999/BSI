"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SITE_CONFIG } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { EyebrowPill } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/Button";

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
    void data;
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  const inputBase =
    "w-full bg-background text-text-primary placeholder:text-text-subtle/80 font-body-md text-[15px] outline-none border transition-all focus-visible:ring-2 focus-visible:ring-brand-primary/25";

  return (
    <Section surface="plain" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Contact Information Card (5 Cols Hero Dark Surface) */}
        <Card surface="dark" padding="lg" className="lg:col-span-5">
          <div className="flex flex-col gap-4">
            <EyebrowPill surface="dark">Start A Project</EyebrowPill>
            <h2 className="font-headline-lg text-[clamp(1.75rem,3vw,2.5rem)] text-on-dark tracking-[-0.03em] font-medium leading-[1.1] mt-1">
              Tell us what you&apos;re building.
            </h2>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              Share your vision with us. We review your scope and reply with a detailed
              architectural proposal within 24 hours.
            </p>
          </div>

          <div className="py-8 flex flex-col gap-4">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="flex items-center gap-3.5 text-on-dark hover:text-brand-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-border-dark flex items-center justify-center text-brand-primary shrink-0 group-hover:border-brand-primary/50 transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-body-md text-[15px] font-medium">
                {SITE_CONFIG.contactEmail}
              </span>
            </a>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-border-dark flex items-center justify-center text-brand-primary shrink-0">
                <Clock className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-body-md text-[15px] text-on-dark-muted">
                {SITE_CONFIG.scheduleTimezone}
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-border-dark flex items-center justify-center text-brand-primary shrink-0">
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-body-md text-[15px] text-on-dark-muted">
                {SITE_CONFIG.deliveryScope}
              </span>
            </div>
          </div>

          <div className="pt-5 border-t border-border-dark">
            <span className="font-label-caps text-[10px] sm:text-[11px] text-on-dark-muted uppercase tracking-[0.12em] flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shrink-0" aria-hidden="true" />
              Direct Founder &amp; Principal Access
            </span>
          </div>
        </Card>

        {/* Contact Form Card (7 Cols Light Surface) */}
        <Card surface="light" padding="lg" hoverable={false} className="lg:col-span-7">
          {submitted ? (
            <div className="my-auto py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-[26px] font-semibold text-text-primary">
                Inquiry Received
              </h3>
              <p className="font-body-md text-[15px] text-text-muted max-w-md leading-relaxed">
                Thank you for reaching out. A principal engineer will review your project details and follow up within 24 hours.
              </p>
              <ActionButton
                type="button"
                variant="secondary"
                surface="light"
                onClick={() => setSubmitted(false)}
                className="mt-2"
                showArrow={false}
              >
                Send another message
              </ActionButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase text-text-muted tracking-[0.12em]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Sarah Jenkins"
                  {...register("name")}
                  className={`${inputBase} h-[52px] rounded-full px-6 ${
                    errors.name
                      ? "border-red-500 bg-red-500/5"
                      : "border-border focus:border-brand-primary focus:bg-surface"
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
                  className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase text-text-muted tracking-[0.12em]"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="sarah@company.com"
                  {...register("email")}
                  className={`${inputBase} h-[52px] rounded-full px-6 ${
                    errors.email
                      ? "border-red-500 bg-red-50/20"
                      : "border-border focus:border-brand-primary focus:bg-surface"
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
                    className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase text-text-muted tracking-[0.12em]"
                  >
                    Primary Focus
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className={`${inputBase} h-[52px] rounded-full px-5 border-border focus:border-brand-primary focus:bg-surface cursor-pointer`}
                  >
                    <option value="web-dev">Web Design &amp; Development</option>
                    <option value="ui-ux">UI/UX Design Systems</option>
                    <option value="custom-software">Custom Software &amp; APIs</option>
                    <option value="mobile-apps">Mobile Apps (iOS/Android)</option>
                    <option value="ecommerce">Headless E-commerce</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase text-text-muted tracking-[0.12em]"
                  >
                    Target Budget
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className={`${inputBase} h-[52px] rounded-full px-5 border-border focus:border-brand-primary focus:bg-surface cursor-pointer`}
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
                  className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase text-text-muted tracking-[0.12em]"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your timeline, scope, and technical goals..."
                  {...register("message")}
                  className={`${inputBase} rounded-[20px] p-5 resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-500/5"
                      : "border-border focus:border-brand-primary focus:bg-surface"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs px-2">{errors.message.message}</span>
                )}
              </div>

              {/* Submit & SLA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <ActionButton
                  type="submit"
                  variant="primary"
                  surface="light"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                </ActionButton>
                <span className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                  Response within 24h
                </span>
              </div>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}
