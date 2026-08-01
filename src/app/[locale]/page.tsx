import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/sections/Hero";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      {/* About, Experience, Selected Work, Skills, Contact — Phases 5-9 */}
    </main>
  );
}
