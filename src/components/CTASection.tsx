import Link from "next/link";

interface CTASectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly accent?: string;
  readonly description?: string;
  readonly primary?: { readonly label: string; readonly href: string };
  readonly secondary?: { readonly label: string; readonly href: string };
  readonly tone?: "light" | "dark";
}

export default function CTASection({
  eyebrow = "Begin Your Commission",
  title = "A handful of dates remain",
  accent = "for this season.",
  description = "We accept a small number of weddings each year. Begin your enquiry by sharing your date and venue — we’ll write back within 48 hours.",
  primary = { label: "Begin Enquiry", href: "/contact" },
  secondary = { label: "View Portfolio", href: "/portfolio" },
  tone = "light",
}: Partial<CTASectionProps> = {}) {
  const isLight = tone === "light";
  return (
    <section
      className={[
        "relative py-24 sm:py-32",
        isLight ? "bg-ivory" : "bg-charcoal",
      ].join(" ")}
    >
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={[
              "eyebrow",
              isLight ? "eyebrow--muted" : "text-white/65",
            ].join(" ")}
          >
            {eyebrow}
          </p>
          <h2
            className={[
              "mt-5 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-tight tracking-[-0.01em]",
              isLight ? "text-charcoal" : "text-white",
            ].join(" ")}
          >
            {title}
            {accent && (
              <>
                {" "}
                <span className="italic">{accent}</span>
              </>
            )}
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <span className="rule-gold" />
            <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
              By Invitation
            </span>
            <span className="rule-gold" />
          </div>
          {description && (
            <p
              className={[
                "mx-auto mt-6 max-w-xl text-[15px] leading-relaxed",
                isLight ? "text-charcoal/70" : "text-white/70",
              ].join(" ")}
            >
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href={primary.href}
              className={[
                "inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-500 sm:w-auto",
                isLight
                  ? "bg-charcoal text-white hover:bg-gold"
                  : "bg-white text-charcoal hover:bg-gold hover:text-white",
              ].join(" ")}
            >
              {primary.label}
            </Link>
            <Link
              href={secondary.href}
              className={[
                "inline-flex w-full items-center justify-center rounded-full border px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] transition-[color,border-color] duration-500 sm:w-auto",
                isLight
                  ? "border-charcoal/80 text-charcoal hover:border-gold hover:text-gold"
                  : "border-white/70 text-white hover:border-gold hover:text-gold",
              ].join(" ")}
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
