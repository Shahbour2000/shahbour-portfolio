import { useTranslations } from "next-intl";
import { Container, Section, Display, Eyebrow } from "@/components/ui";
import { PlatformIcon } from "@/components/shared/PlatformIcon";
import { personalContact } from "@/content/socials";

/**
 * Reuses content/socials.ts's personalContact directly rather than
 * defining its own list — same data source as the Navbar popover and
 * Footer, same available:true filtering. Section always renders (the
 * CTA text alone is a complete, non-broken section); only the methods
 * row beneath it is conditional on any link actually being live.
 */
export function Contact() {
  const t = useTranslations("contact");
  const available = personalContact.filter((link) => link.available);

  return (
    <Section id="contact" tone="surface">
      <Container width="narrow">
        <div className="mb-8 flex items-center gap-3">
          <Eyebrow>{t("index")}</Eyebrow>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </div>

        <Display as="h2" className="text-4xl sm:text-5xl lg:text-6xl">
          {t("cta")}
        </Display>

        {available.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {available.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-pill border border-border px-5 py-3 font-body text-sm text-text-primary transition-colors hover:border-gold-dark hover:text-gold-dark"
              >
                <PlatformIcon platform={link.platform} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
