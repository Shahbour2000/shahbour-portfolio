import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "gold";
};

const tones = {
  neutral: "border border-border text-text-secondary",
  gold: "border border-gold-dark/30 text-gold-dark",
} as const;

/** Small pill label — hero keyword tags (Brand Identity, Visual Design…), gallery categories. */
export function Badge({ tone = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 font-body text-xs font-medium",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
