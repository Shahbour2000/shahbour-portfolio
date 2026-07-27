/**
 * Color tokens — typed accessors over the CSS custom properties defined
 * in `src/app/globals.css` (the actual source of truth, per Tailwind v4's
 * CSS-first architecture). Kept here so JS-driven contexts (Motion
 * variants, inline styles, canvas/SVG work) can reference the same
 * semantic names components use in Tailwind classes.
 *
 * Do not import raw hex values into components — always go through
 * either the Tailwind utility (`bg-background`) or these tokens.
 */
export const colors = {
  background: "var(--color-background)",
  surface: "var(--color-surface)",
  textPrimary: "var(--color-text-primary)",
  textSecondary: "var(--color-text-secondary)",
  goldPrimary: "var(--color-gold-primary)", // decorative only — fails AA as text on background/surface
  goldLight: "var(--color-gold-light)", // decorative only — gradients/glow
  goldDark: "var(--color-gold-dark)", // the only gold cleared for text (~4.8:1 on background)
  border: "var(--color-border)",
} as const;

export type ColorToken = keyof typeof colors;
