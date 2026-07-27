import { cn } from "@/lib/utils";

/** Hairline rule for editorial section breaks. Symmetric by nature — no RTL handling needed. */
export function Divider({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("border-t border-border", className)} {...props} />;
}
