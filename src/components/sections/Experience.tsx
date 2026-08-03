import { useTranslations } from "next-intl";
import { Container, Section, Button, Badge, Heading, Text, Eyebrow } from "@/components/ui";
import { experience } from "@/content/experience";

/**
 * Cover image placeholder — same honest-gap treatment as Hero's portrait
 * (see Phase 4 report). Structured for next/image once real project
 * visuals exist; nothing else changes when that swap happens.
 */
function CoverPlaceholder({ label, placeholderText }: { label: string; placeholderText: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex aspect-[4/3] w-full items-center justify-center rounded-card bg-gradient-to-br from-border/60 via-surface to-gold-light/15"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-text-secondary/60">
        {placeholderText}
      </span>
    </div>
  );
}

function ExperienceRow({ id, caseStudySlug, reverse }: { id: string; caseStudySlug?: string; reverse: boolean }) {
  const t = useTranslations(`experience.${id}`);
  const tCommon = useTranslations("experience");
  const responsibilities = t.raw("responsibilities") as string[];

  const image = <CoverPlaceholder label={t("organization")} placeholderText={tCommon("coverPlaceholder")} />;
  const content = (
    <div>
      <Eyebrow>{t("organization")}</Eyebrow>
      <Heading level={3} size="md" className="mt-2">
        {t("role")}
      </Heading>
      <Text tone="secondary" className="mt-4 max-w-lg">
        {t("description")}
      </Text>
      <div className="mt-5 flex flex-wrap gap-2">
        {responsibilities.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      {caseStudySlug && (
        <div className="mt-7">
          <Button href={`/work/${caseStudySlug}`} variant="secondary">
            {tCommon("caseStudyCta")}
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/*
        Alternation via which element actually comes first in the JSX,
        not flex-row-reverse or CSS `order` — plain document order
        following dir="rtl" is the one RTL behavior already confirmed
        concretely (compiled output, multiple components) elsewhere in
        this project. Reusing that same well-verified mechanism here
        rather than a property whose RTL interaction I can't check
        without a browser.
      */}
      {reverse ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
}

export function Experience() {
  const t = useTranslations("experience");

  return (
    <Section id="experience" tone="background">
      <Container>
        <div className="mb-14 flex items-center gap-3">
          <Eyebrow>{t("index")}</Eyebrow>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </div>

        <div className="space-y-20">
          {experience.map((item, i) => (
            <ExperienceRow
              key={item.id}
              id={item.id}
              caseStudySlug={item.caseStudySlug}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
