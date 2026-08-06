export interface NavigationItem {
  id: string;
  labelKey: string; // key into messages/{locale}.json under "nav"
  href: string; // in-page anchor, e.g. "#about"
}

export type SocialPlatform =
  | "email"
  | "whatsapp"
  | "discord"
  | "linkedin"
  | "behance"
  | "dribbble"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "website";

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: string;
  url: string;
  /** True once `url` is a real, live destination. Placeholder entries render nothing. */
  available: boolean;
}

export interface Skill {
  id: string;
  label: string;
}

export interface ToolItem {
  id: string;
  name: string;
  /** Simple Icons slug (e.g. "figma") or a path under src/assets/logos. */
  icon: string;
}

export interface Experience {
  id: string;
  coverImage?: string;
  /** Present only when a case study exists (currently just Sirat). */
  caseStudySlug?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  /** "Organization / Client" per CONTENT_STRUCTURE.md's modal info panel — optional since not every piece has one (e.g. a personal/self-initiated project). */
  organization?: string;
  category: string;
  year: number;
  tools: string[];
  description: string;
  imageUrl: string;
  /** width / height, used to size masonry tiles without layout shift. */
  aspectRatio: number;
  credits?: string;
  links: SocialLink[];
}

export interface CaseStudySection {
  heading: string;
  body: string;
  images?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  organization: string;
  year: number;
  coverImage?: string;
  overview?: CaseStudySection;
  challenge?: CaseStudySection;
  visualDirection?: CaseStudySection;
  identitySystem?: CaseStudySection;
  socialMediaDesigns?: CaseStudySection;
  platformVisuals?: CaseStudySection;
  finalResults?: CaseStudySection;
  gallery: GalleryItem[];
}

export interface SiteMetadata {
  name: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  ogImage?: string;
}
