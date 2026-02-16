import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BentoCard,
} from "@/components/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VALUES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Speed",
    description:
      "Time is money -- literally. We built infrastructure that settles transactions in under 30 seconds across 180+ countries, because your money should move at the speed of the internet.",
    stat: "<30s",
    statLabel: "settlement time",
    accent: "brand" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Transparency",
    description:
      "No hidden fees. No surprise markups. Every rate, every charge, every step of the transfer is visible before you confirm. What you see is exactly what you pay.",
    stat: "0",
    statLabel: "hidden fees",
    accent: "accent" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Security",
    description:
      "Bank-grade 256-bit encryption, SOC 2 Type II certified, and licensed in every jurisdiction we operate. Your funds and data are protected around the clock by world-class security.",
    stat: "SOC 2",
    statLabel: "Type II certified",
    accent: "brand" as const,
  },
];

const TEAM = [
  {
    name: "Daniel Reeves",
    role: "CEO & Co-Founder",
    initials: "DR",
    bio: "Former VP at Goldman Sachs. 15 years building global payment systems.",
  },
  {
    name: "Amara Osei",
    role: "CTO & Co-Founder",
    initials: "AO",
    bio: "Ex-Stripe principal engineer. Architected systems processing $50B+ annually.",
  },
  {
    name: "Sofia Navarro",
    role: "Chief Product Officer",
    initials: "SN",
    bio: "Led product at Wise and Revolut. Obsessed with seamless user experiences.",
  },
  {
    name: "James Park",
    role: "VP of Engineering",
    initials: "JP",
    bio: "Former engineering lead at Square. Expert in distributed financial systems.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Compliance",
    initials: "PS",
    bio: "Ex-regulatory counsel at JPMorgan. Navigates global financial regulation.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Design",
    initials: "MC",
    bio: "Former design director at Coinbase. Advocates for clarity in fintech UX.",
  },
];

const MILESTONES = [
  { year: "2021", title: "Founded", description: "XferCredit launched from American Fork, UT with a mission to make global payments instant and affordable." },
  { year: "2022", title: "Series A", description: "Raised $28M led by Andreessen Horowitz. Expanded to 50 countries." },
  { year: "2023", title: "500K Users", description: "Hit half a million active users. Launched developer API and enterprise tier." },
  { year: "2024", title: "Series B", description: "Raised $85M at a $1.2B valuation. Expanded to 180+ countries." },
  { year: "2025", title: "$2B Monthly", description: "Processing over $2 billion in monthly transfer volume. 500K+ active users worldwide." },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-zinc-100 overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 hero-glow">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/12 blur-[150px] animate-pulse-glow" />
        <div className="pointer-events-none absolute top-40 -right-20 h-72 w-72 rounded-full bg-accent/6 blur-[120px] animate-pulse-glow" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal variant="fade-up" delay={0}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
              Our Story
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Redefining how money{" "}
              <span className="gradient-text">moves globally</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              We started with a simple frustration: sending money abroad shouldn&apos;t take days,
              cost a fortune, or feel like a black box. So we built the infrastructure to fix it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ── Mission ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-top" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="slide-right">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                  Mission
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Financial borders{" "}
                  <span className="gradient-text">shouldn&apos;t exist</span>
                </h2>
                <p className="mt-6 text-zinc-400 leading-relaxed text-[15px]">
                  The legacy financial system was built for a world of paper checks and telegrams.
                  We&apos;re building the rails for a connected world -- where a freelancer in Lagos can
                  get paid by a startup in San Francisco in seconds, not days.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed text-[15px]">
                  XferCredit exists to eliminate the friction, opacity, and cost of moving money
                  across borders. We combine cutting-edge technology with deep regulatory expertise
                  to make global payments as simple as sending a text message.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={0.15}>
              <div className="glass-card rounded-3xl p-10">
                <blockquote className="text-xl font-heading font-medium leading-relaxed text-zinc-200">
                  &ldquo;We believe everyone deserves access to fast, fair, and transparent
                  financial services -- regardless of where they live or where they&apos;re
                  sending money.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-accent/20 text-[14px] font-bold text-white">
                    DR
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold">Daniel Reeves</p>
                    <p className="text-[12px] text-zinc-500">CEO & Co-Founder, XferCredit</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ── Values ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-bottom" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Our Values
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Built on principles that{" "}
                <span className="gradient-text">matter</span>
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                Three core values drive every decision we make, every feature we ship,
                and every interaction with our customers.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {VALUES.map((v, idx) => (
              <BentoCard
                key={v.title}
                delay={idx * 0.1}
                className={`bento-card group relative overflow-hidden rounded-3xl p-8 md:p-9 ${
                  v.accent === "accent" ? "bento-card--accent" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                    v.accent === "accent" ? "bg-accent/20" : "bg-brand/20"
                  }`}
                />
                <div className="relative">
                  <div
                    className={`mb-6 inline-flex rounded-2xl p-3.5 transition-colors duration-300 ${
                      v.accent === "accent"
                        ? "bg-accent/10 text-accent-light group-hover:bg-accent/20"
                        : "bg-brand/10 text-brand-light group-hover:bg-brand/20"
                    }`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">
                    {v.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2 border-t border-white/[0.04] pt-6">
                    <span className="text-2xl font-bold gradient-text">{v.stat}</span>
                    <span className="text-[12px] text-zinc-500 tracking-wide">{v.statLabel}</span>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ── Timeline ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-top" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Our Journey
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                From idea to{" "}
                <span className="gradient-text">$2B+ monthly</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.1} delay={0.15} className="mt-20 space-y-0">
            {MILESTONES.map((m, idx) => (
              <StaggerItem key={m.year} variant="fade-up">
                <div className="group relative flex gap-8 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {idx < MILESTONES.length - 1 && (
                    <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-brand/30 to-transparent" />
                  )}
                  {/* Year dot */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 border border-brand/20 text-[13px] font-bold text-brand-light group-hover:bg-brand/20 transition-colors duration-300">
                      {m.year.slice(2)}
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl p-6 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-brand-light">
                        {m.year}
                      </span>
                      <h3 className="font-heading text-lg font-semibold">{m.title}</h3>
                    </div>
                    <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ── Team ── */}
      <section className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 section-glow-bottom" />
        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                Leadership
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                The team behind{" "}
                <span className="gradient-text">XferCredit</span>
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                World-class operators from the best fintech companies, united by a shared
                mission to transform global payments.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer stagger={0.08} delay={0.1} className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <StaggerItem key={member.name} variant="scale-in">
                <div className="group glass-card rounded-2xl p-8 h-full text-center">
                  {/* Avatar */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-accent/20 border border-white/[0.08] text-xl font-bold text-white group-hover:from-brand/50 group-hover:to-accent/30 transition-all duration-500">
                    {member.initials}
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-[13px] font-medium text-brand-light">{member.role}</p>
                  <p className="mt-4 text-[13px] text-zinc-500 leading-relaxed">{member.bio}</p>
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
              Join the{" "}
              <span className="gradient-text">movement</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <p className="mx-auto mt-7 max-w-xl text-lg text-zinc-400 leading-relaxed">
              We&apos;re building the future of global payments. Whether you want to use XferCredit
              or join our team, we&apos;d love to hear from you.
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
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl glass px-12 text-base font-medium text-zinc-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
