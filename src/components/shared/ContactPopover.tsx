"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { personalContact } from "@/content/socials";
import { PlatformIcon } from "./PlatformIcon";
import { duration, easing } from "@/theme/motion";

/**
 * Renders nothing if no contact channel is actually live yet — a trigger
 * that opens onto an empty panel is worse than no trigger. Starts
 * invisible today (content/socials.ts placeholders are all
 * available: false) and appears automatically the moment real URLs land.
 */
export function ContactPopover() {
  const t = useTranslations("nav");
  const available = personalContact.filter((link) => link.available);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (available.length === 0) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-pill bg-text-primary px-5 py-2.5 font-body text-sm font-medium text-background transition-colors hover:bg-gold-dark"
      >
        {t("letsWorkTogether")}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: duration.fast, ease: easing.standard }}
            className="absolute end-0 top-full z-50 mt-2 min-w-48 rounded-card border border-border bg-surface p-2 shadow-medium"
          >
            {available.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-text-primary transition-colors hover:bg-background hover:text-gold-dark"
              >
                <PlatformIcon platform={link.platform} />
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
