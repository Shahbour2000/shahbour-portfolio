/** Mirrors the Tailwind v4 default breakpoints (defined natively in globals.css theme block). Exposed for JS logic (e.g. matchMedia hooks) that needs the same numbers. */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
