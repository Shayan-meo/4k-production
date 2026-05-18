import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import ImageBanner from "@/components/ImageBanner";
import { SERVICES, SERVICE_GROUPS, type ServicePackage } from "@/constants";
import { SITE_NAME, SITE_URL } from "@/lib/site";

interface PageProps {
  readonly params: { readonly slug: string };
}

function getService(slug: string): ServicePackage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);
  if (!service) {
    return {
      title: "Service not found",
      robots: { index: false, follow: false },
    };
  }
  const url = `/services/${service.slug}`;
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} · ${SITE_NAME}`,
      description: service.summary,
      url,
      type: "article",
      images: [
        {
          url: service.heroImage,
          width: 2400,
          height: 1600,
          alt: `${service.name} — ${service.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} · ${SITE_NAME}`,
      description: service.summary,
      images: [service.heroImage],
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const group = SERVICE_GROUPS.find((g) => g.id === service.group);
  const relatedServices = SERVICES.filter(
    (s) => s.group === service.group && s.slug !== service.slug,
  ).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: group?.label ?? service.tagline,
    description: service.description,
    image: service.heroImage,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact`,
    },
    areaServed: ["Lahore", "Karachi", "Islamabad", "Dubai", "London"],
  } as const;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ImageBanner
        eyebrow={group?.label ?? service.tagline}
        title={service.name}
        subtitle={service.summary}
        image={service.heroImage}
        height="tall"
      />

      {/* Detail body */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
            {/* Description */}
            <div className="md:col-span-7">
              <p className="eyebrow eyebrow--muted">{service.tagline}</p>
              <h2 className="mt-5 font-serif text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-tight tracking-[-0.01em] text-charcoal">
                A commission that <span className="italic">earns its frames.</span>
              </h2>
              <span className="mt-5 block h-px w-12 bg-gold" />
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75">
                {service.description}
              </p>

              <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {service.inclusions.map((b, idx) => (
                  <div key={b.title}>
                    <dt className="flex items-baseline gap-4">
                      <span className="text-[10px] uppercase tracking-[0.36em] text-charcoal/45">
                        №&nbsp;{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-lg text-charcoal">
                        {b.title}
                      </span>
                    </dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-charcoal/75">
                      {b.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Aside */}
            <aside className="md:col-span-5 md:pl-6 lg:pl-10">
              <div className="border border-black/5 bg-ivory p-8 sm:p-10">
                <p className="eyebrow eyebrow--muted">Commission</p>
                <p className="mt-4 font-serif text-3xl leading-tight text-charcoal">
                  {service.price}
                </p>
                <span className="mt-5 block h-px w-10 bg-gold" />
                <dl className="mt-6 space-y-4 text-[14px] text-charcoal/80">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[10px] uppercase tracking-[0.28em] text-charcoal/50">
                      Duration
                    </dt>
                    <dd className="text-right">{service.duration}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[10px] uppercase tracking-[0.28em] text-charcoal/50">
                      Format
                    </dt>
                    <dd className="text-right">4K UHD · Stereo</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[10px] uppercase tracking-[0.28em] text-charcoal/50">
                      Lead Time
                    </dt>
                    <dd className="text-right">10–14 weeks</dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-gold"
                >
                  Begin Enquiry
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-luxe">
          <p className="eyebrow eyebrow--muted text-center">A glimpse</p>
          <h3 className="mt-4 text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-[-0.01em] text-charcoal">
            Selected frames from <span className="italic">{service.name}.</span>
          </h3>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
            {service.gallery.map((src, idx) => (
              <div
                key={src}
                className={[
                  "relative overflow-hidden bg-white",
                  idx === 1 ? "aspect-[4/5]" : "aspect-[4/5] sm:aspect-[3/4]",
                ].join(" ")}
              >
                <Image
                  src={src}
                  alt={`${service.name} — frame ${idx + 1}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related commissions from same group */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div className="container-luxe">
            <p className="eyebrow eyebrow--muted text-center">
              Continue exploring
            </p>
            <h3 className="mt-4 text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-[-0.01em] text-charcoal">
              More from <span className="italic">{group?.label}.</span>
            </h3>
            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
                    <Image
                      src={s.thumbImage}
                      alt={s.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                      {s.tagline}
                    </p>
                    <p className="mt-2 font-serif text-xl text-charcoal">
                      {s.name}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-charcoal/70 transition-colors group-hover:text-gold">
                      Discover →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to commission this?"
        description="Share your event details — we typically reply within 48 hours and accept a small number of dates per season."
      />
    </>
  );
}
