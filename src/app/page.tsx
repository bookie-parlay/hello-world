import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BentoCard,
} from "@/components/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Bento feature cards: mixed sizes via `span` ── */
const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant Transfers",
    description:
      "Funds arrive in seconds, not days. Our real-time settlement engine moves your money at the speed of the internet with zero downtime.",
    stat: "<30s",
    statLabel: "avg. settlement",
    /* col-span-2 on large screens = wide card */
    span: "lg:col-span-2",
    accent: "brand",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "180+ Countries",
    description:
      "Send and receive across borders with local payment rails in over 180 countries and 50+ currencies.",
    stat: "50+",
    statLabel: "currencies",
    span: "lg:col-span-1",
    accent: "accent",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Bank-Grade Security",
    description:
      "256-bit encryption, SOC 2 Type II certified, and licensed in all operating jurisdictions. Your money is protected around the clock.",
    stat: "SOC 2",
    statLabel: "certified",
    span: "lg:col-span-1",
    accent: "brand",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Lowest Fees",
    description:
      "Starting at just 0.25% per transfer. No hidden charges, no surprises -- transparent, honest pricing that scales with your business.",
    stat: "0.25%",
    statLabel: "starting fee",
    /* col-span-2 on large screens = wide card */
    span: "lg:col-span-2",
    accent: "accent",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Developer-First API",
    description:
      "RESTful APIs with SDKs in 8 languages. Integrate payments into your product in hours, not weeks.",
    stat: "8+",
    statLabel: "SDK languages",
    span: "lg:col-span-1",
    accent: "brand",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-Time Analytics",
    description:
      "Track every transfer, monitor exchange rates, and optimize your payment flows with live dashboards.",
    stat: "Live",
    statLabel: "dashboards",
    span: "lg:col-span-1",
    accent: "accent",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up in under 2 minutes with just your email and phone number. Instantly verified.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Add Your Recipient",
    description:
      "Enter your recipient's details and choose their preferred payout method from 50+ options.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Send Instantly",
    description:
      "Lock in your exchange rate, confirm the amount, and transfer instantly. It's that simple.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
];

const TIERS = [
  {
    name: "Personal",
    price: "Free",
    period: "",
    description:
      "For individuals sending money to family and friends abroad.",
    features: [
      "Up to $5,000/month",
      "0.5% transfer fee",
      "Standard exchange rates",
      "Email support",
      "3 free transfers/month",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description:
      "For freelancers and small businesses with regular international transfers.",
    features: [
      "Up to $50,000/month",
      "0.25% transfer fee",
      "Mid-market rates",
      "Priority support",
      "Unlimited transfers",
      "Multi-currency wallet",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For companies with high-volume cross-border payment needs.",
    features: [
      "Unlimited volume",
      "Custom fee structure",
      "API access & webhooks",
      "Dedicated account manager",
      "Batch payments",
      "Compliance dashboard",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "XferCredit cut our international payroll processing time from 5 days to under 5 minutes. It's been transformative for our remote team.",
    name: "Sarah Chen",
    title: "COO, NovaTech Solutions",
    avatar: "SC",
  },
  {
    quote:
      "The fees are unbeatable and the exchange rates are always better than my bank. I save over $200 a month sending money back home.",
    name: "Marcus Okafor",
    title: "Software Engineer",
    avatar: "MO",
  },
  {
    quote:
      "We integrated the XferCredit API into our marketplace in a single sprint. The documentation is excellent and the support team is world-class.",
    name: "Elena Rodriguez",
    title: "CTO, MercadoLink",
    avatar: "ER",
  },
];

const STATS = [
  { value: "$2B+", label: "Monthly Volume" },
  { value: "500K+", label: "Active Users" },
  { value: "180+", label: "Countries" },
  { value: "<30s", label: "Avg. Transfer" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-zinc-100 overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-40 hero-glow">
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand/15 blur-[150px] animate-pulse-glow" />
        <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/8 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute top-60 -left-20 h-60 w-60 rounded-full bg-brand-light/6 blur-[100px] animate-pulse-glow" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          {/* Status badge */}
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-5 py-2 text-[13px] text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Processing $2B+ monthly volume
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="font-heading text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Move Money
              <br className="hidden sm:block" />
              Across Borders{" "}
              <span className="gradient-text">Instantly</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Send money to 180+ countries with the lowest fees in the industry.
              Real-time transfers, transparent rates, and bank-grade security.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="btn-premium inline-flex h-13 items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-light px-10 text-[15px] font-semibold text-white"
              >
                Start Sending for Free
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-13 items-center justify-center rounded-2xl glass px-10 text-[15px] font-medium text-zinc-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                See How It Works
              </a>
            </div>
          </ScrollReveal>

          {/* Social proof */}
          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-zinc-500">4.9/5 from 12K+ reviews</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <span className="text-[13px] text-zinc-500">500K+ active users</span>
              <div className="hidden sm:block h-4 w-px bg-zinc-800" />
              <div className="hidden sm:flex items-center gap-1.5 text-[13px] text-zinc-500">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Licensed &amp; regulated
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Glowing divider ── */}
      <div className="divider-glow" />

      {/* ── Features — Bento Grid ── */}
      <section id="features" className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-top" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Features
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Everything you need to
                <br className="hidden sm:block" />
                <span className="gradient-text">send money globally</span>
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                Built for speed, security, and simplicity -- so you can focus on what matters.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento grid: 3-column base, cards span 1 or 2 */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {FEATURES.map((f, idx) => (
              <BentoCard
                key={f.title}
                delay={idx * 0.08}
                className={`${f.span} bento-card group relative overflow-hidden rounded-3xl p-8 md:p-9 ${
                  f.accent === "accent" ? "bento-card--accent" : ""
                }`}
              >
                {/* Ambient corner glow */}
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                    f.accent === "accent" ? "bg-accent/20" : "bg-brand/20"
                  }`}
                />

                <div className="relative">
                  <div
                    className={`mb-6 inline-flex rounded-2xl p-3.5 transition-colors duration-300 ${
                      f.accent === "accent"
                        ? "bg-accent/10 text-accent-light group-hover:bg-accent/20"
                        : "bg-brand/10 text-brand-light group-hover:bg-brand/20"
                    }`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">
                    {f.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2 border-t border-white/[0.04] pt-6">
                    <span className="text-2xl font-bold gradient-text">{f.stat}</span>
                    <span className="text-[12px] text-zinc-500 tracking-wide">{f.statLabel}</span>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-bottom" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                How It Works
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Three steps. <span className="gradient-text">That&apos;s it.</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.12} delay={0.15} className="mt-20 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, idx) => (
              <StaggerItem key={s.step}>
                <div className="group relative glass-card rounded-2xl p-8 h-full">
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  )}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-light group-hover:bg-brand/20 transition-colors duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[13px] font-bold text-zinc-600 tracking-wider">
                      STEP {s.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative">
        <div className="divider-glow" />
        <ScrollReveal variant="fade-in" className="glass-strong">
          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-12 px-6 text-center ${
                  idx < STATS.length - 1 ? "md:border-r md:border-white/5" : ""
                }`}
              >
                <span className="font-heading text-3xl font-bold gradient-text md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-[13px] text-zinc-500 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="divider-glow" />
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-top" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Pricing
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Simple, <span className="gradient-text">transparent</span> pricing
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                No hidden fees. No surprises. Choose the plan that fits your needs.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.1} delay={0.1} className="mt-20 grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <StaggerItem key={tier.name} variant="scale-in">
                <div
                  className={`relative flex flex-col rounded-2xl p-8 transition-all duration-400 h-full ${
                    tier.highlighted
                      ? "glass-card-highlight scale-[1.02] lg:scale-105"
                      : "glass-card"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand to-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-semibold">{tier.name}</h3>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-[14px] text-zinc-500">{tier.period}</span>
                    )}
                  </div>
                  <p className="mt-4 text-[14px] text-zinc-400 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[14px] text-zinc-300">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 inline-flex h-12 items-center justify-center rounded-xl text-[14px] font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? "btn-premium bg-gradient-to-r from-brand to-brand-light text-white"
                        : "glass text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-bottom" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Testimonials
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Loved by <span className="gradient-text">thousands</span> worldwide
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.12} delay={0.1} className="mt-20 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name} variant="fade-up">
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/5 pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-accent/20 text-[13px] font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium">{t.name}</p>
                      <p className="text-[12px] text-zinc-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-60" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[200px] animate-pulse-glow" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ready to move money{" "}
              <span className="gradient-text">faster</span>?
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
                href="#pricing"
                className="btn-premium inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-light px-12 text-base font-semibold text-white"
              >
                Create Free Account
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-2xl glass px-12 text-base font-medium text-zinc-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Talk to Sales
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
