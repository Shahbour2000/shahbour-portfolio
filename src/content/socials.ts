import type { SocialLink } from "@/types";

/**
 * Two genuinely different link sets (per CONTENT_STRUCTURE.md / PROJECT_SPEC.md §14):
 * personal contact channels vs. project-attribution links. Kept in one
 * file as two typed exports rather than two files, per the Phase-0 note
 * on this ambiguity.
 *
 * URLs are placeholders — `available: false` until real destinations are
 * supplied, at which point flipping the flag (and filling the URL) is
 * the only change needed. No component should render an unavailable link.
 */
export const personalContact: SocialLink[] = [
  { id: "email", platform: "email", label: "Email", url: "mailto:hello@abdallahshahbour.com", available: false },
  { id: "whatsapp", platform: "whatsapp", label: "WhatsApp", url: "#", available: false },
  { id: "discord", platform: "discord", label: "Discord", url: "#", available: false },
  { id: "linkedin", platform: "linkedin", label: "LinkedIn", url: "#", available: false },
];

export const projectLinks: SocialLink[] = [
  { id: "behance", platform: "behance", label: "Behance", url: "#", available: false },
  { id: "instagram", platform: "instagram", label: "Instagram", url: "#", available: false },
  { id: "facebook", platform: "facebook", label: "Facebook", url: "#", available: false },
  { id: "tiktok", platform: "tiktok", label: "TikTok", url: "#", available: false },
  { id: "youtube", platform: "youtube", label: "YouTube", url: "#", available: false },
  { id: "website", platform: "website", label: "Website", url: "#", available: false },
];
