/**
 * Runs synchronously in <head>, before hydration. Reads the persisted
 * choice, falls back to the OS preference, and sets data-theme on <html>
 * immediately — the only way to avoid a flash of the wrong theme on
 * load. Deliberately not a hook: hooks run after first paint.
 */
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "dark" || stored === "light"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
