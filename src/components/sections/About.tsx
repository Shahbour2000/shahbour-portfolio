import { useTranslations } from "next-intl";
import { Container, Section, Text, Eyebrow } from "@/components/ui";

/**
 * Deliberately the quietest section on the page — no background
 * atmosphere, no signature motion moment. Hero already spent that
 * budget; About's job is to read cleanly, per PROJECT_SPEC.md's own
 * "avoid long paragraphs" instruction. Section's default scroll-reveal
 * (from Phase 2) is the only motion here.
 */
export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" tone="surface">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="flex items-start gap-3 lg:flex-col lg:gap-4">
            <Eyebrow>{t("index")}</Eyebrow>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </div>

          <div className="max-w-2xl space-y-6">
            <Text size="lg">{t("paragraph1")}</Text>
            <Text size="lg" tone="secondary">
              {t("paragraph2")}
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
