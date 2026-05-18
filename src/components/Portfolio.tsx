"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Lightbox from "@/components/Lightbox";
import SectionHeader from "@/components/SectionHeader";
import {
  PORTFOLIO,
  PORTFOLIO_CATEGORIES,
  type PortfolioCategory,
} from "@/constants";

interface PortfolioProps {
  readonly variant?: "preview" | "full";
}

type Filter = "All" | PortfolioCategory;

const FILTERS: readonly Filter[] = ["All", ...PORTFOLIO_CATEGORIES] as const;

export default function Portfolio({ variant = "full" }: PortfolioProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const items = useMemo(() => {
    const base = variant === "preview" ? PORTFOLIO.slice(0, 6) : PORTFOLIO;
    if (filter === "All") return base;
    return base.filter((item) => item.category === filter);
  }, [filter, variant]);

  return (
    <section className="relative bg-ivory py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Selected Work"
          title="A portfolio of quiet moments,"
          accent="grandly remembered."
          ruleLabel="2023 — 2025"
        />

        {/* Category filter tabs — only on full variant */}
        {variant === "full" && (
          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {FILTERS.map((f) => {
              const active = f === filter;
              const count =
                f === "All"
                  ? PORTFOLIO.length
                  : PORTFOLIO.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={[
                    "group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] transition-[color,background-color,border-color] duration-500",
                    active
                      ? "border-charcoal bg-charcoal text-white"
                      : "border-charcoal/20 text-charcoal/75 hover:border-charcoal hover:text-charcoal",
                  ].join(" ")}
                >
                  <span>{f}</span>
                  <span
                    aria-hidden="true"
                    className={[
                      "tabular text-[10px] tracking-[0.2em]",
                      active ? "text-white/65" : "text-charcoal/45",
                    ].join(" ")}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Live result count */}
        {variant === "full" && (
          <p
            aria-live="polite"
            className="mt-6 text-center text-[10px] uppercase tracking-[0.32em] text-charcoal/45"
          >
            Showing {items.length} {items.length === 1 ? "frame" : "frames"}
            {filter !== "All" && ` · ${filter}`}
          </p>
        )}

        {/* Masonry */}
        {items.length === 0 ? (
          <p className="mt-16 text-center text-[14px] text-charcoal/60">
            No items in this category yet.
          </p>
        ) : (
          <div
            key={filter}
            className="mt-12 columns-1 gap-5 animate-fade-in sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-7"
          >
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={`Open ${item.title} — ${item.couple}`}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden bg-white text-left sm:mb-6 lg:mb-7"
              >
                <div
                  className={[
                    "relative w-full overflow-hidden bg-ivory",
                    item.orientation === "portrait"
                      ? "aspect-[4/5]"
                      : item.orientation === "landscape"
                        ? "aspect-[4/3]"
                        : "aspect-square",
                  ].join(" ")}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.couple}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15" />
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-end justify-between opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-charcoal backdrop-blur">
                      View
                    </span>
                    <span className="tabular rounded-full bg-charcoal/85 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur">
                      {item.subCategory}
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-1 pt-4">
                  <div>
                    <p className="font-serif text-lg leading-snug text-charcoal">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.24em] text-charcoal/55">
                      {item.couple}
                    </p>
                  </div>
                  <span className="tabular whitespace-nowrap text-[11px] uppercase tracking-[0.28em] text-charcoal/45">
                    {item.location} · {item.year}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {variant === "preview" && (
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-charcoal/80 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-[color,border-color] duration-500 hover:border-gold hover:text-gold"
            >
              View full portfolio
            </Link>
          </div>
        )}
      </div>

      <Lightbox
        items={items}
        activeIdx={activeIdx}
        onClose={() => setActiveIdx(null)}
        onChange={setActiveIdx}
      />
    </section>
  );
}
