import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

/** Hero-scale display type. Use once per page — this is the loudest voice on the site. */
export function Display({
  as: Tag = "h1",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: Tag }) {
  return (
    <Tag
      className={cn(
        "text-start font-display text-5xl leading-[1.05] text-text-primary sm:text-6xl lg:text-7xl",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Section-level heading. `level` sets the real HTML tag (document
 * structure / a11y); `size` sets the visual scale. Kept separate on
 * purpose — an editorial layout regularly wants those to disagree.
 */
export function Heading({
  level = 2,
  size,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 2 | 3 | 4;
  size?: "sm" | "md" | "lg";
}) {
  const Tag = (`h${level}` as const) satisfies Tag;
  const resolvedSize = size ?? ({ 2: "lg", 3: "md", 4: "sm" } as const)[level];
  const sizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
  } as const;

  return (
    <Tag
      className={cn(
        "text-start font-display text-text-primary",
        sizes[resolvedSize],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Body copy. `tone="secondary"` for supporting/description text. */
export function Text({
  as: Tag = "p",
  tone = "primary",
  size = "md",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  as?: Tag;
  tone?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
  } as const;
  const sizes = {
    sm: "text-sm leading-relaxed",
    md: "text-base leading-relaxed sm:text-lg",
    lg: "text-lg leading-relaxed sm:text-xl",
  } as const;

  return (
    <Tag
      className={cn("text-start font-body", tones[tone], sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Small metadata/labels (years, categories, "Selected Work" kickers).
 * Uses Geist Mono per PROJECT_SPEC §10. Letter-spacing is LTR-only —
 * tracking pulls Arabic letterforms apart and breaks their connections,
 * so it's switched off under RTL rather than translated as-is.
 */
export function Eyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-start font-mono text-xs uppercase text-text-secondary tracking-[0.15em] rtl:tracking-normal",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
