import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white py-32">
      <div className="container-luxe text-center">
        <p className="eyebrow eyebrow--muted">Error 404</p>
        <h1 className="mt-5 font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.01em] text-charcoal">
          A page <span className="italic">left the frame.</span>
        </h1>
        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          <span className="rule-gold" />
          <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
            4K Production
          </span>
          <span className="rule-gold" />
        </div>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
          The link you followed may be outdated, or the page has been moved.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-500 hover:bg-gold sm:w-auto"
          >
            Return Home
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex w-full items-center justify-center rounded-full border border-charcoal/80 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-[color,border-color] duration-500 hover:border-gold hover:text-gold sm:w-auto"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
