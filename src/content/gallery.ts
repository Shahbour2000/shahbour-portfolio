import type { GalleryItem } from "@/types";

/**
 * Empty by design — no real project photography exists yet. The full
 * gallery architecture (masonry, modal, RTL, accessibility) is built
 * and verified against temporary placeholder data during development;
 * none of that placeholder data ships here. Populate this array with
 * real GalleryItem entries once project imagery is ready — everything
 * downstream (SelectedWork, MasonryGrid, GalleryTile, GalleryModal) is
 * already fully data-driven and needs no changes to pick it up.
 */
export const gallery: GalleryItem[] = [];
