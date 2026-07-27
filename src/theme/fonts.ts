/**
 * Typography tokens. Actual font loading (next/font/google) happens in
 * src/app/[locale]/layout.tsx; this file exposes the resulting CSS
 * variables as named roles so components never reference a font family
 * directly.
 *
 * Display/body swap automatically per language — see globals.css, where
 * `--font-display` / `--font-body` are redefined under [dir="rtl"].
 * Components should only ever use `fonts.display` / `fonts.body` / `fonts.mono`.
 */
export const fonts = {
  display: "var(--font-display)", // Instrument Serif (en) / Markazi Text (ar)
  body: "var(--font-body)", // Manrope (en) / Cairo (ar)
  mono: "var(--font-mono)", // Geist Mono — metadata/years/labels only, Latin script in both locales
} as const;
