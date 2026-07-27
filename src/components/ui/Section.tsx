"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/theme/motion";

type SectionProps = {
  id: string; // required — every section is a nav anchor target (see content/navigation.ts)
  tone?: "background" | "surface";
  /** Disable for sections that shouldn't reveal-on-scroll (e.g. the Hero, already visible on load). */
  reveal?: boolean;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

const tones = {
  background: "bg-background",
  surface: "bg-surface",
} as const;

/**
 * Deliberately narrow props (not full HTMLAttributes) rather than spread
 * arbitrary DOM attributes onto motion.section — several standard React
 * event props (onDrag, onAnimationStart, …) collide with Motion's own
 * gesture props of the same name but a different signature.
 */
export function Section({
  id,
  tone = "background",
  reveal = true,
  className,
  children,
  ...rest
}: SectionProps) {
  const classes = cn("py-20 md:py-32", tones[tone], className);

  if (!reveal) {
    return (
      <section id={id} className={classes} {...rest}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={classes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
