"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { PortfolioItem } from "@/constants";

interface LightboxProps {
  readonly items: readonly PortfolioItem[];
  readonly activeIdx: number | null;
  readonly onClose: () => void;
  readonly onChange: (idx: number) => void;
}

export default function Lightbox({
  items,
  activeIdx,
  onClose,
  onChange,
}: LightboxProps) {
  const active: PortfolioItem | null =
    activeIdx === null ? null : items[activeIdx] ?? null;

  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const next = useCallback(() => {
    if (activeIdx === null) return;
    onChange((activeIdx + 1) % items.length);
  }, [activeIdx, items.length, onChange]);

  const prev = useCallback(() => {
    if (activeIdx === null) return;
    onChange((activeIdx - 1 + items.length) % items.length);
  }, [activeIdx, items.length, onChange]);

  // Focus trap, keyboard navigation, scroll lock
  useEffect(() => {
    if (activeIdx === null) return;

    previouslyFocused.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = "hidden";

    // Move focus into the dialog
    const dialog = dialogRef.current;
    const focusables = dialog?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        next();
        return;
      }
      if (e.key === "ArrowLeft") {
        prev();
        return;
      }
      if (e.key === "Tab" && dialog) {
        const f = dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [activeIdx, onClose, next, prev]);

  return (
    <div
      ref={dialogRef}
      className={[
        "fixed inset-0 z-[70] flex items-center justify-center modal-scroll",
        active ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-modal="true"
      role="dialog"
      aria-label={
        active ? `${active.title} — ${active.couple}` : "Image viewer"
      }
      aria-hidden={!active}
    >
      <button
        type="button"
        aria-label="Close viewer"
        tabIndex={active ? 0 : -1}
        onClick={onClose}
        className={[
          "absolute inset-0 bg-white/40 backdrop-blur-2xl transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div
        className={[
          "relative z-10 mx-4 w-full max-w-5xl transition-[opacity,transform] duration-500",
          active
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        ].join(" ")}
      >
        {active && (
          <div className="bg-white shadow-2xl">
            <div className="relative w-full overflow-hidden bg-ivory">
              <div className="relative mx-auto aspect-[4/3] w-full max-h-[80vh]">
                <Image
                  src={active.image}
                  alt={`${active.title} — ${active.couple}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="font-serif text-xl text-charcoal">
                  {active.title}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-charcoal/55">
                  {active.couple} · {active.category}
                </p>
              </div>
              <span className="tabular text-[11px] uppercase tracking-[0.28em] text-charcoal/45">
                {active.location} · {active.year}
              </span>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            tabIndex={active ? 0 : -1}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-colors hover:bg-gold hover:text-white"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            tabIndex={active ? 0 : -1}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-colors hover:bg-gold hover:text-white"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          tabIndex={active ? 0 : -1}
          className="absolute -top-3 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white shadow-md transition-colors hover:bg-gold sm:-top-5 sm:-right-5"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}
