"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { GalleryItem } from "@/types";
import { fadeUp, duration, easing } from "@/theme/motion";

/**
 * Reveals individually as each tile enters the viewport, rather than
 * the whole grid firing at once (which is what Section's own reveal
 * would do) — matters more here since the masonry grid can run much
 * taller than one screen.
 */
export function GalleryTile({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-card text-start last:mb-0 lg:mb-8"
    >
      <div className="relative w-full" style={{ aspectRatio: item.aspectRatio }}>
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: duration.fast, ease: easing.standard }}
        className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-text-primary/70 via-text-primary/0 to-transparent p-5"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-background/80">
          {item.category}
        </span>
        <span className="font-display text-xl text-background">{item.title}</span>
      </motion.div>
    </motion.button>
  );
}
