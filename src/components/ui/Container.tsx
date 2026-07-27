import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Use "wide" for full-bleed galleries/media, "narrow" for reading-width text blocks like About. */
  width?: "default" | "narrow" | "wide";
};

const widths = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[100rem]",
} as const;

/**
 * Horizontal padding (px-*) is symmetric by design, so it needs no RTL
 * handling — it's already logical. This is the single place page width
 * and edge spacing are decided; sections should never set their own.
 */
export function Container({
  width = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-10 lg:px-16", widths[width], className)}
      {...props}
    >
      {children}
    </div>
  );
}
