"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";
const ATTR = "data-theme";

function getSnapshot(): Theme {
  return document.documentElement.getAttribute(ATTR) === "dark" ? "dark" : "light";
}

// No real SSR value exists (localStorage/matchMedia are client-only);
// "light" matches the blocking script's own fallback in ThemeScript.
function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributeFilter: [ATTR] });
  return () => observer.disconnect();
}

/**
 * Syncs with the data-theme attribute the blocking head script already
 * set, via useSyncExternalStore rather than useState+useEffect — avoids
 * the extra render pass (and the lint error) that comes from calling
 * setState directly inside an effect body.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute(ATTR, next);
    document.documentElement.setAttribute("data-theme-transition", "");
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return { theme, toggleTheme };
}
