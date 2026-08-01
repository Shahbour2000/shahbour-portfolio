"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Container, Section, Button, Badge, Display, Text, Eyebrow } from "@/components/ui";
import { site } from "@/content/site";
import { duration, easing, staggerChildren, fadeUp } from "@/theme/motion";

/**
 * Loose, hand-drawn-feeling underline rather than a straight rule —
 * drawn on load via animated pathLength, echoing the kind of mark a
 * brand/identity designer would actually sketch. This is the section's
 * one authored signature moment, deliberately not paired with five
 * other competing effects (see Phase 2 report's reasoning on restraint).
 */
function SignatureUnderline() {
  return (
    <svg
      viewBox="0 0 200 16"
      className="mt-1 h-3 w-40 text-gold-primary sm:w-56"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 11 C 40 3, 80 3, 100 9 C 120 15, 160 15, 198 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: duration.verySlow, ease: easing.entrance, delay: 0.7 }}
      />
    </svg>
  );
}

/** Oversized outline initials behind the portrait — the same mark as the navbar logo, just given room to breathe. */
function GhostMonogram({ initials }: { initials: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[13rem] leading-none text-text-primary/[0.04] sm:text-[18rem]"
    >
      {initials}
    </span>
  );
}

/**
 * Stands in for the real portrait until one exists (see PROJECT_SPEC.md
 * §7 — "editorial portrait, not a normal profile picture"). Deliberately
 * styled as an intentional brand moment rather than a placeholder-gray
 * box, but this is the one piece of Phase 4 not actually finished —
 * swap for next/image + a real file when photography is ready.
 */
function PortraitPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-card bg-gradient-to-br from-gold-light/25 via-surface to-gold-primary/10 shadow-medium"
    >
      <span className="font-display text-7xl text-gold-dark/30 sm:text-8xl">
        {site.name
          .split(" ")
          .map((w) => w[0])
          .join("")}
      </span>
    </div>
  );
}

function FloatingBadge({
  label,
  className,
  delay,
}: {
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, ease: easing.standard, delay }}
    >
      <Badge tone="gold" className="bg-surface/90 shadow-soft backdrop-blur-sm">
        {label}
      </Badge>
    </motion.div>
  );
}

/** Soft gradient atmosphere, drifting a few pixels with the cursor — subtle on purpose, and off entirely under reduced motion. */
function BackgroundAtmosphere() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 40, damping: 20 });
  const springY = useSpring(y, { stiffness: 40, damping: 20 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 24);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 24);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -top-1/4 end-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold-light/20 blur-3xl"
      />
      <div className="absolute -bottom-1/3 start-[-15%] h-[28rem] w-[28rem] rounded-full bg-gold-primary/10 blur-3xl" />
    </div>
  );
}

export function Hero() {
  const t = useTranslations("hero");
  const keywords = t.raw("keywords") as string[];
  const containerRef = useRef<HTMLDivElement>(null);
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <Section id="hero" reveal={false} tone="background" className="relative overflow-hidden pt-32 md:pt-40">
      <BackgroundAtmosphere />
      <Container>
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.12)}
          className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center"
        >
          {/* Text column */}
          <div>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-gold-primary" aria-hidden="true" />
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Display>{site.name}</Display>
              <SignatureUnderline />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text tone="secondary" size="lg" className="mt-6 max-w-xl">
                {t("title")}
              </Text>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <Badge key={keyword}>{keyword}</Badge>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button href="#work">{t("primaryCta")}</Button>
              <Button href="#contact" variant="secondary" showIcon={false}>
                {t("secondaryCta")}
              </Button>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div variants={fadeUp} className="relative">
            <GhostMonogram initials={initials} />
            <PortraitPlaceholder alt={t("portraitAlt")} />
            <FloatingBadge
              label={keywords[0] ?? ""}
              delay={1.1}
              className="absolute -top-4 start-4 sm:start-8"
            />
            <FloatingBadge
              label={keywords[2] ?? ""}
              delay={1.3}
              className="absolute -bottom-4 end-4 sm:end-8"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
