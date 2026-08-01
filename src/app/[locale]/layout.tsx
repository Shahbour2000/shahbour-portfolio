import type { Metadata } from "next";
import {
  Instrument_Serif,
  Manrope,
  Geist_Mono,
  Markazi_Text,
  Cairo,
} from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { MotionConfig } from "motion/react";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

// Latin type system (English)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Arabic type system — chosen to match the Latin pairing's register:
// Markazi Text is an editorial serif (pairs with Instrument Serif),
// Cairo is a clean geometric-humanist sans built for screen legibility
// (pairs with Manrope). Both load only under [dir="rtl"] in globals.css.
const markaziText = Markazi_Text({
  subsets: ["arabic"],
  variable: "--font-markazi-text",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        ar: "/ar",
        "x-default": "/",
      },
    },
    openGraph: {
      title: `${site.name} — ${site.role}`,
      description: site.description,
      url: site.url,
      siteName: site.name,
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this locale (next-intl requirement).
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${instrumentSerif.variable} ${manrope.variable} ${geistMono.variable} ${markaziText.variable} ${cairo.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <MotionConfig reducedMotion="user">
            <Navbar />
            {children}
            <Footer />
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
