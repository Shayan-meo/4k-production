import Image from "next/image";
import Link from "next/link";
import type { ServicePackage } from "@/constants";

interface ServiceCardProps {
  readonly service: ServicePackage;
  readonly index: number;
  readonly variant?: "grid" | "feature";
}

export default function ServiceCard({
  service,
  index,
  variant = "grid",
}: ServiceCardProps) {
  if (variant === "feature") {
    const reverse = index % 2 === 1;
    return (
      <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
        <div
          className={[
            "md:col-span-6",
            reverse ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <Link href={`/services/${service.slug}`} className="group block">
            <div className="relative overflow-hidden">
              <div className="absolute -inset-2 -z-10 bg-ivory" />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
                <Image
                  src={service.thumbImage}
                  alt={`${service.name} — ${service.tagline}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out will-change-transform group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                  №&nbsp;{String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                  {service.tagline}
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className={[
            "md:col-span-6",
            reverse ? "md:order-1 md:pr-6 lg:pr-12" : "md:order-2 md:pl-6 lg:pl-12",
          ].join(" ")}
        >
          <div className="group transition-transform duration-500 hover:-translate-y-2">
            <p className="eyebrow eyebrow--muted">{service.tagline}</p>
            <h3 className="mt-4 font-serif text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-[-0.01em] text-charcoal">
              {service.name}
            </h3>
            <span className="mt-5 block h-px w-12 bg-gold" />
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal/75">
              {service.summary}
            </p>

            <ul className="mt-7 space-y-3">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-[14px] leading-relaxed text-charcoal/80"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-5 flex-shrink-0 bg-gold"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-center gap-6">
              <span className="font-serif text-lg text-charcoal">
                {service.price}
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="text-[11px] uppercase tracking-[0.28em] text-charcoal/80 transition-colors hover:text-gold"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Compact grid card
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
        <Image
          src={service.thumbImage}
          alt={`${service.name} — ${service.tagline}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-6 transition-transform duration-500 group-hover:-translate-y-1">
        <p className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
          №&nbsp;{String(index + 1).padStart(2, "0")} · {service.tagline}
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-tight text-charcoal">
          {service.name}
        </h3>
        <span className="mt-4 block h-px w-10 bg-gold" />
        <p className="mt-4 text-[14px] leading-relaxed text-charcoal/75">
          {service.summary}
        </p>
        <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-charcoal/70 transition-colors group-hover:text-gold">
          Discover →
        </p>
      </div>
    </Link>
  );
}
