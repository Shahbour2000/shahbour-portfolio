import type { GalleryItem } from "@/types";
import { GalleryTile } from "./GalleryTile";

/**
 * CSS multi-column masonry: 1 column on mobile, 2 from lg up, per spec.
 * Each tile's own intrinsic aspect ratio is preserved (no cropping) and
 * `break-inside-avoid` (set on GalleryTile) stops an image splitting
 * across the column break — genuine masonry with zero JavaScript
 * measurement and no extra dependency. The one real trade-off: columns
 * fill top-to-bottom in DOM order rather than always picking the
 * shortest column, which a JS-computed masonry would do — a fine
 * trade for a gallery this size, not worth a dependency for.
 */
export function MasonryGrid({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <div className="columns-1 gap-6 lg:columns-2 lg:gap-8">
      {items.map((item) => (
        <GalleryTile key={item.id} item={item} onOpen={onOpen} />
      ))}
    </div>
  );
}
