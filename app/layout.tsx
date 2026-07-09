import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Stevyne Rabearinjatovo — Full-Stack Developer",
    template: "%s · Stevyne",
  },
  description:
    "Portfolio de Stevyne Rabearinjatovo — Full-Stack Web Developer spécialisé en Python, React et Next.js. Applications web rapides, scalables et soignées.",
  keywords: [
    "Stevyne",
    "Rabearinjatovo",
    "Full-Stack Developer",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
    "Madagascar",
  ],
  authors: [{ name: "Stevyne Rabearinjatovo" }],
  creator: "Stevyne Rabearinjatovo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Stevyne Rabearinjatovo — Full-Stack Developer",
    description:
      "Full-Stack Web Developer spécialisé en Python backend et React/Next.js frontend.",
    siteName: "Portfolio Stevyne",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevyne Rabearinjatovo — Full-Stack Developer",
    description:
      "Full-Stack Web Developer spécialisé en Python backend et React/Next.js frontend.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06040f",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased">
        <a
          href="#accueil"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-brand)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
