"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { GalleryItem } from "@/types";
import { PlatformIcon } from "@/components/shared/PlatformIcon";
import { Eyebrow, Heading, Text, Badge } from "@/components/ui";
import { useScrollLock } from "@/hooks/useScrollLock";
import { duration, easing } from "@/theme/motion";

export function GalleryModal({
  item,
  onClose,
}: {
  item: GalleryItem | null;
  onClose: () => void;
}) {
  const t = useTranslations("gallery");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useScrollLock(item !== null);

  useEffect(() => {
    if (!item) return;
    closeButtonRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.normal, ease: easing.standard }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-text-primary/60 p-4 backdrop-blur-md sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: duration.normal, ease: easing.entrance }}
            className="relative grid w-full max-w-5xl gap-0 overflow-hidden rounded-card bg-surface shadow-medium lg:grid-cols-[3fr_2fr]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t("close")}
              className="absolute end-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-surface/90 text-text-primary shadow-soft transition-colors hover:text-gold-dark"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[4/3] w-full bg-background lg:aspect-auto">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-5 overflow-y-auto p-6 sm:p-8">
              <div>
                <Eyebrow>{item.category}</Eyebrow>
                <Heading level={2} size="sm" className="mt-2">
                  {item.title}
                </Heading>
                {item.organization && (
                  <Text tone="secondary" size="sm" className="mt-1">
                    {item.organization}
                  </Text>
                )}
              </div>

              <Text size="sm" tone="secondary">
                {item.description}
              </Text>

              <dl className="grid grid-cols-2 gap-4 border-y border-border py-4">
                <div>
                  <dt className="font-mono text-xs uppercase text-text-secondary">{t("year")}</dt>
                  <dd className="mt-1 font-mono text-sm text-text-primary">{item.year}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase text-text-secondary">{t("tools")}</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <Badge key={tool}>{tool}</Badge>
                    ))}
                  </dd>
                </div>
              </dl>

              {item.credits && (
                <Text size="sm" tone="secondary" className="italic">
                  {item.credits}
                </Text>
              )}

              {item.links.filter((l) => l.available).length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {item.links
                    .filter((link) => link.available)
                    .map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-gold-dark hover:text-gold-dark"
                      >
                        <PlatformIcon platform={link.platform} size={16} />
                      </a>
                    ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
