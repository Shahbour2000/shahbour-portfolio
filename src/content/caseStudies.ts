import type { CaseStudy } from "@/types";

// Full content built in Phase 10. Stub keeps /work/sirat routable and
// keeps the Experience section's case-study link from pointing nowhere.
export const caseStudies: CaseStudy[] = [
  {
    slug: "sirat",
    title: "Sirat Platform",
    organization: "Sirat Platform",
    year: new Date().getFullYear(),
    gallery: [],
  },
];
