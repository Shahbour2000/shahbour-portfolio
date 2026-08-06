"use client";

import { useEffect } from "react";

/** Disables page scroll while `locked` is true, restoring the previous value on unlock/unmount. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
