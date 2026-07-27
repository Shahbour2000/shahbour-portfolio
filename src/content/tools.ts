import type { ToolItem } from "@/types";

/**
 * Set per PROJECT_SPEC.md §7, which is the newer of two conflicting
 * lists — see the Phase 1 report for the discrepancy with
 * CONTENT_STRUCTURE.md / DESIGN_DIRECTION.md (both list "After Effects"
 * instead of "Next.js"). Using PROJECT_SPEC.md as instructed since it's
 * the declared source of truth; flagged for confirmation.
 */
export const tools: ToolItem[] = [
  { id: "photoshop", name: "Adobe Photoshop", icon: "adobephotoshop" },
  { id: "illustrator", name: "Adobe Illustrator", icon: "adobeillustrator" },
  { id: "premiere-pro", name: "Adobe Premiere Pro", icon: "adobepremierepro" },
  { id: "canva", name: "Canva", icon: "canva" },
  { id: "figma", name: "Figma", icon: "figma" },
  { id: "nextjs", name: "Next.js", icon: "nextdotjs" },
];
