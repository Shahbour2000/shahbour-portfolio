import { useTranslations } from "next-intl";
import { Container, Section, Badge, Eyebrow, Text } from "@/components/ui";
import { ToolIcon } from "@/components/shared/ToolIcon";
import { skills } from "@/content/skills";
import { tools } from "@/content/tools";

/**
 * One section (nav has a single #skills anchor, per content/navigation.ts)
 * with two sub-groups. CSS transitions only in this file — no Motion
 * import — per this phase's explicit "no animation libraries" scope.
 */
export function Skills() {
  const t = useTranslations("skills");
  const tSkillLabels = useTranslations("skills.labels");
  const tTools = useTranslations("tools");

  return (
    <Section id="skills" tone="background">
      <Container>
        <div className="mb-14 flex items-center gap-3">
          <Eyebrow>{t("index")}</Eyebrow>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Design skills — clean textual chips, wrap freely */}
          <div>
            <Text tone="secondary" size="sm" className="mb-5 font-mono uppercase tracking-widest">
              {t("skillsLabel")}
            </Text>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill.id}
                  className="px-4 py-2 text-sm transition-colors duration-200 hover:border-gold-dark hover:text-gold-dark"
                >
                  {tSkillLabels(skill.id)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools — logo only, name revealed on hover or keyboard focus */}
          <div>
            <Text tone="secondary" size="sm" className="mb-5 font-mono uppercase tracking-widest">
              {t("toolsLabel")}
            </Text>
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-6">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  tabIndex={0}
                  aria-label={tTools(tool.id)}
                  className="group relative flex aspect-square items-center justify-center rounded-card border border-border text-text-secondary outline-none transition-colors duration-200 hover:border-gold-dark hover:text-gold-dark focus-visible:border-gold-dark focus-visible:text-gold-dark"
                >
                  <ToolIcon slug={tool.icon} />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-text-primary px-2.5 py-1 font-mono text-xs text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    {tTools(tool.id)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
