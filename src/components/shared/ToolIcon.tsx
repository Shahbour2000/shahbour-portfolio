import * as simpleIcons from "simple-icons";

type SimpleIconEntry = { path: string; title: string };

/**
 * Looks up a Simple Icons export from a lowercase slug (e.g.
 * "adobephotoshop" -> siAdobephotoshop) rather than hand-maintaining a
 * per-tool map — content/tools.ts stays the only place a new tool needs
 * registering; this resolves whatever slug is given automatically.
 */
function resolveIcon(slug: string): SimpleIconEntry | undefined {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  return (simpleIcons as unknown as Record<string, SimpleIconEntry>)[key];
}

/**
 * Rendered in currentColor rather than each brand's own palette — same
 * restraint as PlatformIcon, so the row reads as one considered toolkit
 * rather than a strip of brand logos.
 */
export function ToolIcon({ slug, size = 28 }: { slug: string; size?: number }) {
  const icon = resolveIcon(slug);
  if (!icon) return null;

  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
