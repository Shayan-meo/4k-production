import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import ImageBanner from "@/components/ImageBanner";
import { ABOUT, BRAND } from "@/constants";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "4K Production is a small, director-led wedding film studio crafting editorial cinema for a handful of couples each year.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Studio · 4K Production",
    description:
      "A small, director-led wedding film studio crafting editorial cinema for a handful of couples each year.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Studio · 4K Production",
    description:
      "A small, director-led wedding film studio for a handful of couples each year.",
  },
};

export default function AboutPage() {
  return (
    <>
      <ImageBanner
        eyebrow={ABOUT.eyebrow}
        title={ABOUT.title}
        accent={ABOUT.titleAccent}
        subtitle={ABOUT.intro}
        image={ABOUT.heroImage}
        height="tall"
      />

      {/* Editorial split: portrait + philosophy */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="relative overflow-hidden">
                <div className="absolute -inset-2 -z-10 bg-ivory" />
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
                  <Image
                    src={ABOUT.portraitImage}
                    alt="A portrait moment from a 4K Production wedding film"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                  Lahore · 2024 · Bridal Portrait
                </p>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-6 lg:pl-12">
              <p className="eyebrow eyebrow--muted">Our Philosophy</p>
              <h2 className="mt-5 font-serif text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-tight tracking-[-0.01em] text-charcoal">
                Three principles. <span className="italic">Held quietly.</span>
              </h2>
              <span className="mt-5 block h-px w-12 bg-gold" />

              <dl className="mt-10 space-y-9">
                {ABOUT.philosophy.map((item, idx) => (
                  <div key={item.title}>
                    <dt className="flex items-baseline gap-5">
                      <span className="text-[10px] uppercase tracking-[0.36em] text-charcoal/45">
                        №&nbsp;{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl text-charcoal">
                        {item.title}
                      </span>
                    </dt>
                    <dd className="mt-3 max-w-xl text-[15px] leading-relaxed text-charcoal/75">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-luxe">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-6">
            {ABOUT.numbers.map((n) => (
              <div key={n.label} className="text-center">
                <p className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none text-charcoal">
                  {n.value}
                </p>
                <span className="mx-auto mt-4 block h-px w-8 bg-gold" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.36em] text-charcoal/55">
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <blockquote className="mx-auto max-w-3xl text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] italic leading-snug text-charcoal/85">
            “{BRAND.quote}”
          </blockquote>
          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.42em] text-gold">
            — {BRAND.name}
          </p>
        </div>
      </section>

      <CTASection
        title="Tell us about your day —"
        accent="we'll listen carefully."
        description="We meet every couple in person or on a call before accepting a commission. Begin the conversation by sharing your date and venue."
        primary={{ label: "Begin Enquiry", href: "/contact" }}
        secondary={{ label: "Meet the Team", href: "/team" }}
      />
    </>
  );
}
