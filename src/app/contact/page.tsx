"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, type FormEvent } from "react";

const SUPPORT_CHANNELS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Support",
    description: "Get a response within 4 hours during business hours.",
    contact: "support@xfercredit.com",
    accent: "brand",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Live Chat",
    description: "Chat with our team in real-time. Available 24/7.",
    contact: "Start a conversation",
    accent: "accent",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Phone",
    description: "Speak with a specialist. Mon-Fri, 8am-6pm MT.",
    contact: "+1 (801) 555-0142",
    accent: "brand",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen bg-[#08080c] text-zinc-100 overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 hero-glow">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/12 blur-[150px] animate-pulse-glow" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal variant="fade-up" delay={0}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
              Contact Us
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s{" "}
              <span className="gradient-text">talk</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Have a question, need support, or want to explore enterprise solutions?
              We&apos;re here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ── Contact Form + Info ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-top" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form — takes 3 columns */}
            <ScrollReveal variant="slide-right" className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold">Message sent</h3>
                    <p className="mt-3 text-zinc-400 max-w-sm">
                      Thanks for reaching out. Our team will get back to you within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold tracking-tight">
                      Send us a message
                    </h2>
                    <p className="mt-2 text-[14px] text-zinc-500">
                      Fill out the form and our team will respond promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-[13px] font-medium text-zinc-300 mb-2">
                            First name
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[14px] text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-1 focus:ring-brand/20 hover:border-white/10"
                            placeholder="Jane"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-[13px] font-medium text-zinc-300 mb-2">
                            Last name
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[14px] text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-1 focus:ring-brand/20 hover:border-white/10"
                            placeholder="Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[13px] font-medium text-zinc-300 mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[14px] text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-1 focus:ring-brand/20 hover:border-white/10"
                          placeholder="jane@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-[13px] font-medium text-zinc-300 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[14px] text-zinc-100 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-1 focus:ring-brand/20 hover:border-white/10 appearance-none"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#14141a]">Select a topic</option>
                          <option value="general" className="bg-[#14141a]">General Inquiry</option>
                          <option value="support" className="bg-[#14141a]">Technical Support</option>
                          <option value="enterprise" className="bg-[#14141a]">Enterprise Sales</option>
                          <option value="partnership" className="bg-[#14141a]">Partnership</option>
                          <option value="press" className="bg-[#14141a]">Press & Media</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[13px] font-medium text-zinc-300 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[14px] text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-1 focus:ring-brand/20 hover:border-white/10"
                          placeholder="How can we help?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-premium inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand to-brand-light text-[14px] font-semibold text-white"
                      >
                        Send Message
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>

            {/* Info sidebar — takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office address */}
              <ScrollReveal variant="slide-left" delay={0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-light">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold">Headquarters</h3>
                  </div>
                  <div className="text-[14px] text-zinc-400 leading-relaxed space-y-1">
                    <p>XferCredit, Inc.</p>
                    <p>51 West Center Street, Suite 300</p>
                    <p>American Fork, UT 84003</p>
                    <p>United States</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal variant="slide-left" delay={0.2}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold">Business Hours</h3>
                  </div>
                  <div className="text-[14px] text-zinc-400 leading-relaxed space-y-1">
                    <p>Monday -- Friday: 8:00 AM -- 6:00 PM MT</p>
                    <p>Saturday -- Sunday: Closed</p>
                    <p className="pt-2 text-[13px] text-zinc-500">
                      Live chat and email support available 24/7
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ── Support Channels ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-bottom" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Support Channels
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Reach us{" "}
                <span className="gradient-text">your way</span>
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                Choose the channel that works best for you. Our support team is always ready to help.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.1} delay={0.1} className="mt-20 grid gap-5 md:grid-cols-3">
            {SUPPORT_CHANNELS.map((ch) => (
              <StaggerItem key={ch.title} variant="scale-in">
                <div className="group glass-card rounded-2xl p-8 h-full text-center">
                  <div
                    className={`mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                      ch.accent === "accent"
                        ? "bg-accent/10 text-accent-light group-hover:bg-accent/20"
                        : "bg-brand/10 text-brand-light group-hover:bg-brand/20"
                    }`}
                  >
                    {ch.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{ch.title}</h3>
                  <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">
                    {ch.description}
                  </p>
                  <p className={`mt-4 text-[14px] font-medium ${
                    ch.accent === "accent" ? "text-accent-light" : "text-brand-light"
                  }`}>
                    {ch.contact}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-60" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[200px] animate-pulse-glow" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ready to get{" "}
              <span className="gradient-text">started</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <p className="mx-auto mt-7 max-w-xl text-lg text-zinc-400 leading-relaxed">
              Join 500,000+ users who trust XferCredit for fast, affordable, and secure
              international transfers.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#pricing"
                className="btn-premium inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-light px-12 text-base font-semibold text-white"
              >
                Create Free Account
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex h-14 items-center justify-center rounded-2xl glass px-12 text-base font-medium text-zinc-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Learn About Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
