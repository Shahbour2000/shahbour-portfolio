import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware wrappers around Next.js navigation APIs.
 * Components should import Link/useRouter/usePathname from here,
 * never from "next/link" or "next/navigation" directly, so locale
 * prefixes are handled automatically everywhere (including the
 * future Arabic routes).
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
