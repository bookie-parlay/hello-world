import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "XferCredit | Premium Global Money Transfers",
  description:
    "Move money across borders instantly with zero friction. XferCredit delivers lightning-fast, secure, and transparent cross-border payments to 180+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased bg-[#08080c] text-zinc-100`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
