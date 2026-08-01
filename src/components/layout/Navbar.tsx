"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { ContactPopover } from "@/components/shared/ContactPopover";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { duration, easing } from "@/theme/motion";

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = site.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  const links = (
    <>
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          {t(item.labelKey)}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="font-display text-xl text-text-primary" aria-label={site.name}>
          {initials}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">{links}</div>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <ContactPopover />
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center text-text-primary md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: duration.normal, ease: easing.standard }}
            className="overflow-hidden border-t border-border/60 bg-background md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              <div className="flex flex-col gap-5">{links}</div>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <ContactPopover />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
