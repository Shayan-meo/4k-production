"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when slide-out is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out",
          scrolled
            ? "border-b border-black/5 bg-white/85 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-[18px]"
            : "border-b border-transparent bg-white/55 backdrop-blur-[10px]",
        ].join(" ")}
      >
        <nav
          aria-label="Primary"
          className="container-luxe flex items-center justify-between py-3 md:py-4"
        >
          <Link
            href="/"
            className="group flex items-center"
            aria-label={`${BRAND.name} — home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/15 font-serif text-[13px] font-semibold tracking-tight text-charcoal transition-colors group-hover:border-gold group-hover:text-gold md:h-9 md:w-9 md:text-[14px]">
              {BRAND.monogram}
            </span>
            <span className="sr-only">{BRAND.name}</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "relative text-[11px] font-medium uppercase tracking-[0.24em] transition-colors",
                      active ? "text-charcoal" : "text-charcoal/65 hover:text-charcoal",
                    ].join(" ")}
                  >
                    <span>{link.label}</span>
                    <span
                      className={[
                        "absolute -bottom-1 left-0 h-px bg-gold transition-[width] duration-500",
                        active ? "w-full" : "w-0",
                      ].join(" ")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full border border-charcoal px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal transition-[color,background-color,border-color] duration-500 hover:border-gold hover:bg-gold hover:text-white md:inline-flex"
          >
            Enquire
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <span
              aria-hidden="true"
              className={[
                "absolute h-px w-6 bg-charcoal transition-transform duration-300",
                open ? "rotate-45" : "-translate-y-2",
              ].join(" ")}
            />
            <span
              aria-hidden="true"
              className={[
                "absolute h-px w-6 bg-charcoal transition-opacity duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              aria-hidden="true"
              className={[
                "absolute h-px w-6 bg-charcoal transition-transform duration-300",
                open ? "-rotate-45" : "translate-y-2",
              ].join(" ")}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-40 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-white/60 backdrop-blur-md transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <aside
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl",
            "flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-7 py-5">
            <span className="font-serif text-[14px] tracking-[0.04em]">
              {BRAND.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-charcoal/45">
              Menu
            </span>
          </div>
          <ul className="flex-1 overflow-y-auto px-7 py-8">
            {NAV_LINKS.map((link, idx) => {
              const active = isActive(link.href);
              return (
                <li
                  key={link.href}
                  className="border-b border-black/[0.06] last:border-b-0"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "group flex items-baseline justify-between py-7 font-serif text-[26px] leading-none tracking-[-0.005em] transition-colors duration-300",
                      active ? "text-gold" : "text-charcoal hover:text-gold",
                    ].join(" ")}
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        aria-hidden="true"
                        className={[
                          "text-[10px] tracking-[0.32em] transition-colors duration-300",
                          active
                            ? "text-gold/70"
                            : "text-charcoal/35 group-hover:text-gold/70",
                        ].join(" ")}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={[
                        "translate-x-[-4px] text-[14px] opacity-0 transition-[opacity,transform] duration-300",
                        active
                          ? "translate-x-0 opacity-100"
                          : "group-hover:translate-x-0 group-hover:opacity-100",
                      ].join(" ")}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-black/5 px-6 py-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-charcoal py-3 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-gold"
            >
              Enquire Now
            </Link>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.28em] text-charcoal/50">
              {BRAND.city}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
