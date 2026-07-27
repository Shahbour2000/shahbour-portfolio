"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { duration, easing } from "@/theme/motion";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  /** Set false for buttons that don't lead anywhere directional (e.g. a form submit). */
  showIcon?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof BaseProps | "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-text-primary text-background hover:bg-gold-dark hover:text-background",
  secondary:
    "border border-border text-text-primary hover:border-gold-dark hover:text-gold-dark",
  ghost: "text-text-primary hover:text-gold-dark",
};

/**
 * Base states only — hover/focus/active transitions via existing motion
 * tokens. The magnetic cursor-follow from DESIGN_DIRECTION.md is a
 * deliberate Phase 11 addition, not built here (see Phase 2 report).
 */
export function Button({ variant = "primary", showIcon = true, className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-pill px-6 py-3 font-body text-sm font-medium",
    "transition-colors",
    variants[variant],
    className
  );

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: duration.fast, ease: easing.standard }}
    >
      {children}
      {showIcon && <ArrowRight size={16} className="rtl:rotate-180" aria-hidden="true" />}
    </motion.span>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
