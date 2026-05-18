import Link from "next/link";
import { BRAND, NAV_LINKS, SOCIALS } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-24 sm:pt-32">
      <div className="container-luxe">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 font-serif text-[17px] font-semibold tracking-tight text-charcoal">
                {BRAND.monogram}
              </span>
              <div>
                <p className="font-serif text-2xl tracking-tight text-charcoal">
                  {BRAND.name}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                  {BRAND.tagline}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <blockquote className="font-serif text-[clamp(1.25rem,2.2vw,1.875rem)] italic leading-snug text-charcoal/85">
              “{BRAND.quote}”
            </blockquote>
          </div>
        </div>

        <div className="my-14 hairline" />

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="eyebrow eyebrow--muted">Studio</p>
            <ul className="mt-5 space-y-3 text-[14px] text-charcoal/75">
              <li>{BRAND.city}</li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow eyebrow--muted">Navigate</p>
            <ul className="mt-5 space-y-3 text-[14px] text-charcoal/75">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow eyebrow--muted">Follow</p>
            <ul className="mt-5 space-y-3 text-[14px] text-charcoal/75">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="eyebrow eyebrow--muted">Commission</p>
            <p className="mt-5 text-[14px] leading-relaxed text-charcoal/75">
              Dates are reserved twelve months in advance. Begin your enquiry
              by sharing your wedding date and venue.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-charcoal px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-[color,background-color,border-color] duration-500 hover:border-gold hover:bg-gold hover:text-white"
            >
              Begin Enquiry
            </Link>
          </div>
        </div>

        <div className="mt-16 hairline" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-[11px] uppercase tracking-[0.28em] text-charcoal/45">
            © {year} {BRAND.name}. All films reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-charcoal/45">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
