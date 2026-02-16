"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="glass-strong mt-4 flex h-14 items-center justify-between rounded-2xl px-6">
          <Link href="/" className="text-lg font-heading font-bold tracking-tight">
            <span className="gradient-text">Xfer</span>
            <span className="text-white">Credit</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-[13px] text-zinc-400 font-medium tracking-wide">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`transition-colors duration-200 hover:text-white ${
                    pathname === l.href ? "text-white" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/#pricing"
              className="hidden sm:inline-flex text-[13px] text-zinc-400 font-medium hover:text-white transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              href="/#pricing"
              className="btn-premium rounded-xl bg-brand px-5 py-2 text-[13px] font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
