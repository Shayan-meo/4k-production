import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES } from "@/constants";

interface ServicesProps {
  readonly variant?: "preview" | "full";
}

export default function Services({ variant = "full" }: ServicesProps) {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Our Atelier"
          title="Three signatures."
          accent="One sensibility."
          ruleLabel="Bespoke"
          description="Every commission is hand-tailored. Choose a starting point — we shape the rest around your story, your venues and your aesthetic."
        />

        {variant === "full" ? (
          <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
            {SERVICES.map((service, idx) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={idx}
                variant="feature"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
              {SERVICES.map((service, idx) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={idx}
                  variant="grid"
                />
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/80 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-[color,border-color] duration-500 hover:border-gold hover:text-gold"
              >
                Explore all services
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
