import type { Skill } from "@/types";

/**
 * Structural only — labels moved to messages/*.json (skills.labels,
 * keyed by id) since they're translatable concepts, not locale-invariant
 * strings. Same reasoning as Experience in Phase 6. Order and set per
 * PROJECT_SPEC.md §7. Adding a skill later is two edits, neither
 * touching UI code: an entry here, matching keys in both message files.
 */
export const skills: Skill[] = [
  { id: "brand-identity" },
  { id: "typography" },
  { id: "visual-systems" },
  { id: "art-direction" },
  { id: "social-media-design" },
];
