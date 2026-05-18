"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/constants";

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full animate-kenburns will-change-transform">
          <Image
            src={HERO.backgroundImage}
            alt="Cinematic luxury wedding background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(255,255,255,0.45)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container-luxe w-full">
          <div className="mx-auto max-w-[58rem] text-center">
            <p
              className="eyebrow opacity-0 animate-fade-up"
              style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
            >
              {HERO.eyebrow}
            </p>

            <h1
              className="mx-auto mt-7 max-w-[20ch] font-serif text-[clamp(2.25rem,5.4vw,5rem)] font-medium leading-[1.06] tracking-[-0.015em] text-charcoal opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
            >
              {HERO.title}
              <br />
              <span className="italic text-charcoal">
                {HERO.titleAccent}
              </span>
            </h1>

            <div
              className="mx-auto mt-7 flex items-center justify-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "420ms", animationFillMode: "forwards" }}
            >
              <span className="rule-gold" />
              <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
                Editorial Cinema
              </span>
              <span className="rule-gold" />
            </div>

            <p
              className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/70 opacity-0 animate-fade-up sm:text-base"
              style={{ animationDelay: "560ms", animationFillMode: "forwards" }}
            >
              {HERO.subtitle}
            </p>

            <div
              className="mt-10 flex flex-col items-center justify-center gap-3 opacity-0 animate-fade-up sm:flex-row sm:gap-4"
              style={{ animationDelay: "720ms", animationFillMode: "forwards" }}
            >
              <Link
                href={HERO.ctaPrimary.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-500 hover:bg-gold sm:w-auto"
              >
                {HERO.ctaPrimary.label}
              </Link>
              <Link
                href={HERO.ctaSecondary.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-charcoal/80 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-[color,border-color] duration-500 hover:border-gold hover:text-gold sm:w-auto"
              >
                {HERO.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-charcoal/70 transition-colors hover:text-gold"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-soft">
          <span className="text-[10px] uppercase tracking-[0.42em]">
            Scroll
          </span>
          <span className="block h-10 w-px bg-charcoal/40" />
        </div>
      </a>
    </section>
  );
}
