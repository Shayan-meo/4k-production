"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  readonly children: ReactNode;
  readonly as?: ElementType;
  readonly className?: string;
  /** Delay before settling in, ms. Defaults to 0. */
  readonly delay?: number;
  /** Use a pure fade (no translate). */
  readonly fade?: boolean;
  /** Only reveal once — default true. */
  readonly once?: boolean;
  /** Root margin for the IO; tweak to fire sooner/later. */
  readonly rootMargin?: string;
}

/**
 * Cinematic scroll reveal.
 * Adds `.reveal is-visible` once the element enters the viewport.
 * Honors prefers-reduced-motion via globals.css.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  fade = false,
  once = true,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IO is unsupported (very old browsers), show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { rootMargin, threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);

  const cls = [
    "reveal",
    fade ? "reveal--fade" : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as never}
      className={cls}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
