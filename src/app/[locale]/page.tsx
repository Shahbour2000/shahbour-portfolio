import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  Container,
  Section,
  Button,
  Badge,
  Divider,
  Display,
  Heading,
  Text,
  Eyebrow,
} from "@/components/ui";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Phase 2 preview only — exercises every design-system primitive so it's
 * visually verifiable end to end (including on /ar). Replaced by the real
 * Hero and sections starting Phase 4.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Section id="preview" reveal={false} tone="background">
        <Container>
          <Eyebrow>Phase 2 — Design System Preview</Eyebrow>
          <Display className="mt-4">
            Visual Designer crafting meaningful visual identities.
          </Display>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Brand Identity</Badge>
            <Badge>Visual Design</Badge>
            <Badge tone="gold">Social Media Design</Badge>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#preview">View My Work</Button>
            <Button href="#preview" variant="secondary" showIcon={false}>
              Contact Me
            </Button>
            <Button variant="ghost" showIcon={false}>
              Ghost action
            </Button>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section id="preview-typography" tone="surface">
        <Container width="narrow">
          <Heading level={2}>Typography Scale</Heading>
          <Text tone="secondary" className="mt-3">
            Body copy sits on Manrope in English and Cairo in Arabic, swapped
            automatically by document direction — no per-component logic.
          </Text>
          <Heading level={3} size="sm" className="mt-8">
            A smaller editorial heading
          </Heading>
        </Container>
      </Section>
    </main>
  );
}
