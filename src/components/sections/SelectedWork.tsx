"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Section, Eyebrow, Text } from "@/components/ui";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { GalleryModal } from "@/components/gallery/GalleryModal";
import { gallery } from "@/content/gallery";
import type { GalleryItem } from "@/types";

/**
 * Unlike ContactPopover (which disappears entirely with no data),
 * this section always renders its shell. The "Work" nav link points
 * to #work — if the section returned null while empty, that link
 * would go nowhere. The grid itself is what's conditional.
 */
export function SelectedWork() {
  const t = useTranslations("gallery");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const handleOpen = useCallback((item: GalleryItem) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setSelected(item);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
    lastFocused.current?.focus();
  }, []);

  return (
    <Section id="work" tone="surface">
      <Container width="wide">
        <div className="mb-14 flex items-center gap-3">
          <Eyebrow>{t("index")}</Eyebrow>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </div>

        {gallery.length > 0 ? (
          <MasonryGrid items={gallery} onOpen={handleOpen} />
        ) : (
          <Text tone="secondary" className="max-w-md">
            {t("empty")}
          </Text>
        )}
      </Container>

      <GalleryModal item={selected} onClose={handleClose} />
    </Section>
  );
}
