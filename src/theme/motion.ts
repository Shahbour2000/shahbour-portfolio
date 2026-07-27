import type { Transition, Variants } from "motion/react";

/**
 * Central motion vocabulary. Every animated component should pull from
 * here rather than inventing its own durations/easings — keeps the
 * "premium, purposeful, non-distracting" direction consistent site-wide.
 */
export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.6,
  verySlow: 1.2,
  loadingScreen: 1.3, // PROJECT_SPEC §13 — first-visit loading animation, ~1–1.5s
} as const;

export const easing = {
  standard: [0.22, 1, 0.36, 1], // premium "ease-out-expo" feel
  entrance: [0.16, 1, 0.3, 1],
  gentle: [0.4, 0, 0.2, 1],
} as const satisfies Record<string, Transition["ease"]>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.standard },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.normal, ease: easing.gentle } },
};

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

/**
 * Respect prefers-reduced-motion: components should check this (via the
 * useReducedMotion hook from "motion/react") and fall back to fadeIn or
 * an instant transition instead of movement-based variants.
 */
