import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { projectLinks, personalContact } from "@/content/socials";
import { PlatformIcon } from "@/components/shared/PlatformIcon";

export function Footer() {
  const t = useTranslations("layout");
  const year = new Date().getFullYear();
  // Footer surfaces whichever links are actually live, from either set —
  // visitors don't care which content file a link came from.
  const available = [...personalContact, ...projectLinks].filter((l) => l.available);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:px-10 md:text-start lg:px-16">
        <p className="font-body text-sm text-text-secondary">
          {t("copyright", { year, name: site.name })}
        </p>

        {available.length > 0 && (
          <div className="flex items-center gap-4">
            {available.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-secondary transition-colors hover:text-gold-dark"
              >
                <PlatformIcon platform={link.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
