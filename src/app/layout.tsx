import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XferCredit | Instant Global Money Transfers",
  description:
    "Send money worldwide in seconds with industry-low fees. XferCredit delivers fast, secure, and transparent cross-border payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#09090b] text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}
