/** 4px-based spacing scale, exposed for JS contexts (Tailwind covers CSS usage natively). */
export const spacing = {
  xs: "0.5rem",   // 8px
  sm: "1rem",     // 16px
  md: "1.5rem",   // 24px
  lg: "2.5rem",   // 40px
  xl: "4rem",     // 64px
  "2xl": "6rem",  // 96px
  "3xl": "9rem",  // 144px — large editorial section breathing room
} as const;
