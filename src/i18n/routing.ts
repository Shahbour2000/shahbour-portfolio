import { defineRouting } from "next-intl/routing";

/**
 * Central routing configuration for the site's two locales.
 * English is the default and primary language (per PROJECT_SPEC.md).
 * Arabic is architected in from Phase 1 but has no real content yet.
 */
export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed", // English stays at "/", Arabic lives at "/ar"
});

export type Locale = (typeof routing.locales)[number];
