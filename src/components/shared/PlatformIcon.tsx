import {
  siWhatsapp,
  siDiscord,
  siLinkedin,
  siBehance,
  siDribbble,
  siInstagram,
  siFacebook,
  siTiktok,
  siYoutube,
} from "simple-icons";
import { Mail, Globe } from "lucide-react";
import type { SocialPlatform } from "@/types";

const brandIcons: Partial<Record<SocialPlatform, { path: string; title: string }>> = {
  whatsapp: siWhatsapp,
  discord: siDiscord,
  linkedin: siLinkedin,
  behance: siBehance,
  dribbble: siDribbble,
  instagram: siInstagram,
  facebook: siFacebook,
  tiktok: siTiktok,
  youtube: siYoutube,
};

/**
 * Simple Icons ship each brand's own color; we intentionally render in
 * currentColor instead so every platform icon matches our restrained
 * text-secondary/gold palette rather than a row of mismatched brand hues.
 */
export function PlatformIcon({ platform, size = 18 }: { platform: SocialPlatform; size?: number }) {
  if (platform === "email") return <Mail size={size} aria-hidden="true" />;
  if (platform === "website") return <Globe size={size} aria-hidden="true" />;

  const icon = brandIcons[platform];
  if (!icon) return null;

  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
