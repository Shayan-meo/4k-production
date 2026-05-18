import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ImageBanner from "@/components/ImageBanner";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SERVICE_GROUPS } from "@/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twelve wedding commissions across three disciplines — the wedding films, portraits & pre-wedding, and heirloom deliverables. One studio, one sensibility.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · 4K Production",
    description:
      "Twelve wedding commissions across three disciplines — films, portraits and heirloom deliverables.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services · 4K Production",
    description:
      "Twelve wedding commissions across three disciplines.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ImageBanner
        eyebrow="Our Atelier"
        title="Twelve commissions."
        accent="One sensibility."
        subtitle="From a three-day wedding film to a forty-five-minute family portrait window — every commission is hand-tailored. Choose a starting point and we shape the rest around your day."
        image={SERVICES[0].heroImage}
      />

      {SERVICE_GROUPS.map((group, groupIdx) => {
        const items = SERVICES.filter((s) => s.group === group.id);
        const isAlt = groupIdx % 2 === 1;
        return (
          <section
            key={group.id}
            id={group.id}
            className={[
              "py-24 sm:py-32",
              isAlt ? "bg-ivory" : "bg-white",
            ].join(" ")}
          >
            <div className="container-luxe">
              {/* Group header */}
              <Reveal>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="eyebrow eyebrow--muted">
                    Part {String(groupIdx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 font-serif text-[clamp(1.85rem,4vw,3rem)] font-medium leading-tight tracking-[-0.01em] text-charcoal">
                    {group.label}
                  </h2>
                  <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                    <span className="rule-gold" />
                    <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
                      {group.tagline}
                    </span>
                    <span className="rule-gold" />
                  </div>
                  <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
                    {group.description}
                  </p>
                </div>
              </Reveal>

              {/* Cards */}
              <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                {items.map((service, idx) => (
                  <Reveal key={service.slug} delay={idx * 90}>
                    <ServiceCard
                      service={service}
                      index={idx}
                      variant="grid"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Not sure where to begin?"
        accent="We'll guide you."
        description="A short conversation is often enough. We'll help you choose the right starting point and shape it around your wedding — the functions, the family, the venue."
      />
    </>
  );
}
