import type { Experience } from "@/types";

/**
 * Structural data only — organization/role/description/responsibilities
 * moved to messages/*.json (see the "experience" namespace) since they're
 * narrative content that needs real translation, not a locale-invariant
 * string. Same pattern already used for Hero and About; experience.ts
 * originally hardcoded English here, which didn't hold up once this
 * section actually needed to render on the Arabic page.
 */
export const experience: Experience[] = [
  { id: "sirat", caseStudySlug: "sirat" },
  { id: "ieee-cusb" },
];
