"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("layout");

  const nextLocale = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="rounded-full px-3 py-2 font-mono text-xs uppercase text-text-secondary transition-colors hover:text-gold-dark"
      aria-label={t("switchLanguage")}
    >
      {nextLocale}
    </button>
  );
}
