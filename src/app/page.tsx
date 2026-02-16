const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant Transfers",
    description: "Funds arrive in seconds, not days. Our real-time settlement engine ensures your money moves at the speed of the internet.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "180+ Countries",
    description: "Send and receive across borders with local payment rails in over 180 countries and 50+ currencies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Bank-Grade Security",
    description: "256-bit encryption, SOC 2 Type II certified, and licensed in all operating jurisdictions. Your funds are always protected.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Lowest Fees",
    description: "Starting at just 0.25% per transfer. No hidden charges, no subscription fees — just transparent, honest pricing.",
  },
];

const STEPS = [
  { step: "01", title: "Create Account", description: "Sign up in under 2 minutes with just your email and phone number." },
  { step: "02", title: "Add Recipient", description: "Enter your recipient's details and choose their preferred payout method." },
  { step: "03", title: "Send Money", description: "Lock in your exchange rate, confirm the amount, and transfer instantly." },
];

const TIERS = [
  {
    name: "Personal",
    price: "Free",
    period: "",
    description: "For individuals sending money to family and friends abroad.",
    features: ["Up to $5,000/month", "0.5% transfer fee", "Standard exchange rates", "Email support", "3 free transfers/month"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For freelancers and small businesses with regular transfers.",
    features: ["Up to $50,000/month", "0.25% transfer fee", "Mid-market exchange rates", "Priority support", "Unlimited transfers", "Multi-currency wallet"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For companies with high-volume cross-border payment needs.",
    features: ["Unlimited volume", "Custom fee structure", "API access & webhooks", "Dedicated account manager", "Batch payments", "Compliance dashboard"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "XferCredit cut our international payroll processing time from 5 days to under 5 minutes. It's been transformative for our remote team.",
    name: "Sarah Chen",
    title: "COO, NovaTech Solutions",
  },
  {
    quote: "The fees are unbeatable and the exchange rates are always better than my bank. I save over $200 a month sending money back home.",
    name: "Marcus Okafor",
    title: "Software Engineer",
  },
  {
    quote: "We integrated the XferCredit API into our marketplace in a single sprint. The documentation is excellent and the support team is world-class.",
    name: "Elena Rodriguez",
    title: "CTO, MercadoLink",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
      {/* ── Navbar ── */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Xfer</span>Credit
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex text-sm text-zinc-400 hover:text-white transition-colors">
              Log in
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-all hover:bg-brand-light hover:shadow-lg hover:shadow-brand/25"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 hero-glow">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now processing $2B+ monthly volume
          </div>
          <h1 className="animate-fade-in-up-delay-1 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Move Money Across<br />
            Borders{" "}
            <span className="gradient-text">Instantly</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Send money to 180+ countries with the lowest fees in the industry. Real-time transfers, transparent exchange rates, and bank-grade security — all in one platform.
          </p>
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold text-white transition-all hover:bg-brand-light hover:shadow-xl hover:shadow-brand/25 hover:scale-[1.02]"
            >
              Start Sending for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm font-medium text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof bar */}
          <div className="animate-fade-in-up-delay-3 mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span>4.9/5 from 12,000+ reviews</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span>500K+ active users</span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span>Licensed & regulated</span>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Features</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to send money globally
            </h2>
            <p className="mt-4 text-zinc-400">
              Built for speed, security, and simplicity — so you can focus on what matters.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-white/5 bg-surface p-7 transition-all duration-300 hover:border-brand/30 card-glow"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand/10 p-3 text-brand-light transition-colors group-hover:bg-brand/20">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps. That&apos;s it.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-white/5 bg-surface p-8">
                <span className="text-5xl font-black text-white/[0.04]">{s.step}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            { value: "$2B+", label: "Monthly Volume" },
            { value: "500K+", label: "Active Users" },
            { value: "180+", label: "Countries" },
            { value: "<30s", label: "Avg. Transfer Time" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-10 px-6 text-center">
              <span className="text-3xl font-bold gradient-text md:text-4xl">{stat.value}</span>
              <span className="mt-1 text-sm text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-zinc-400">
              No hidden fees. No surprises. Choose the plan that fits your needs.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "border-brand/50 bg-brand/[0.06] shadow-2xl shadow-brand/10"
                    : "border-white/5 bg-surface hover:border-white/10"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-sm text-zinc-500">{tier.period}</span>}
                </div>
                <p className="mt-3 text-sm text-zinc-400">{tier.description}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-brand text-white hover:bg-brand-light hover:shadow-lg hover:shadow-brand/25"
                      : "border border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by thousands worldwide
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/5 bg-surface p-8">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-sm font-bold text-brand-light">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/[0.06] to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to move money <span className="gradient-text">faster</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Join 500,000+ users who trust XferCredit for fast, affordable, and secure international transfers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-13 items-center justify-center rounded-full bg-brand px-10 text-base font-semibold text-white transition-all hover:bg-brand-light hover:shadow-xl hover:shadow-brand/25 hover:scale-[1.02]"
            >
              Create Free Account
            </a>
            <a
              href="#"
              className="inline-flex h-13 items-center justify-center rounded-full border border-white/10 px-10 text-base font-medium text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#" className="text-xl font-bold tracking-tight">
                <span className="gradient-text">Xfer</span>Credit
              </a>
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                Fast, secure, and affordable global money transfers. Licensed and regulated in all operating jurisdictions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Product</h4>
              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Send Money</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Payments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API &amp; Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Legal</h4>
              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-zinc-600">&copy; 2026 XferCredit, Inc. All rights reserved.</p>
            <div className="flex gap-5">
              {/* Twitter/X */}
              <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* GitHub */}
              <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
