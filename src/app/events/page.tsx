import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import ImageBanner from "@/components/ImageBanner";
import { EVENTS } from "@/constants";

export const metadata: Metadata = {
  title: "Wedding Events",
  description:
    "How we film a Pakistani wedding — Mehndi, Barat and Walima — across three nights.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Wedding Events · 4K Production",
    description:
      "How we film a Pakistani wedding — Mehndi, Barat and Walima — across three nights.",
    url: "/events",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Events · 4K Production",
    description: "Mehndi, Barat and Walima — three nights, one heirloom film.",
  },
};

export default function EventsPage() {
  return (
    <>
      <ImageBanner
        eyebrow="Wedding Events"
        title="Three nights,"
        accent="one heirloom film."
        subtitle="From the henna to the last dance, here is how we shape coverage across the three traditional functions."
        image={EVENTS[1].image}
      />

      {/* Timeline */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical rule */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 top-2 bottom-2 hidden w-px bg-charcoal/10 md:left-1/2 md:block"
            />

            <ol className="space-y-20 sm:space-y-28">
              {EVENTS.map((event, idx) => {
                const reverse = idx % 2 === 1;
                return (
                  <li
                    key={event.id}
                    className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-12"
                  >
                    {/* Node on the rule */}
                    <span
                      aria-hidden
                      className="absolute left-4 top-2 hidden h-3 w-3 -translate-x-[5px] rounded-full bg-gold md:left-1/2 md:block md:-translate-x-1/2"
                    />

                    <div
                      className={[
                        "md:col-span-6",
                        reverse ? "md:order-2" : "md:order-1",
                      ].join(" ")}
                    >
                      <div className="relative overflow-hidden">
                        <div className="absolute -inset-2 -z-10 bg-ivory" />
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
                          <Image
                            src={event.image}
                            alt={`${event.name} — ${event.venue}`}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-3 text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                          №&nbsp;{String(idx + 1).padStart(2, "0")} · {event.name}
                        </p>
                      </div>
                    </div>

                    <div
                      className={[
                        "md:col-span-6",
                        reverse
                          ? "md:order-1 md:pr-8 lg:pr-14"
                          : "md:order-2 md:pl-8 lg:pl-14",
                      ].join(" ")}
                    >
                      <p className="eyebrow eyebrow--muted">{event.dressCode}</p>
                      <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-[-0.01em] text-charcoal">
                        {event.name}
                      </h3>
                      <span className="mt-5 block h-px w-12 bg-gold" />
                      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75">
                        {event.description}
                      </p>

                      <dl className="mt-8 space-y-3 text-[14px] text-charcoal/80">
                        <div className="flex items-baseline gap-4">
                          <dt className="w-24 text-[10px] uppercase tracking-[0.28em] text-charcoal/50">
                            Date
                          </dt>
                          <dd>{event.date}</dd>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <dt className="w-24 text-[10px] uppercase tracking-[0.28em] text-charcoal/50">
                            Time
                          </dt>
                          <dd>{event.time}</dd>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <dt className="w-24 text-[10px] uppercase tracking-[0.28em] text-charcoal/50">
                            Venue
                          </dt>
                          <dd>
                            <span className="block">{event.venue}</span>
                            <span className="text-charcoal/55">
                              {event.address}
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        title="One commission, three nights,"
        accent="one heirloom film."
        description="Our Documentary Package is designed for couples filming across all three traditional functions."
        primary={{ label: "View Documentary Package", href: "/services/documentary-package" }}
        secondary={{ label: "Begin Enquiry", href: "/contact" }}
      />
    </>
  );
}
