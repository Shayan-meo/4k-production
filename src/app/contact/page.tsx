import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ImageBanner from "@/components/ImageBanner";
import { BRAND, SOCIALS } from "@/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a commission with 4K Production — Lahore · Dubai · London. We reply within 48 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · 4K Production",
    description:
      "Begin a commission with 4K Production — Lahore · Dubai · London. We reply within 48 hours.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · 4K Production",
    description: "Begin a commission. We reply within 48 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ImageBanner
        eyebrow="Begin Your Commission"
        title="Tell us about"
        accent="your day."
        subtitle="A short note — your wedding date, venues, and the feeling you want the film to hold — is more than enough to start."
        image="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
            {/* Studio details */}
            <div className="md:col-span-5">
              <p className="eyebrow eyebrow--muted">Studio</p>
              <h2 className="mt-5 font-serif text-[clamp(1.75rem,3.4vw,2.5rem)] font-medium leading-tight tracking-[-0.01em] text-charcoal">
                {BRAND.name}
              </h2>
              <span className="mt-5 block h-px w-12 bg-gold" />

              <dl className="mt-10 space-y-7 text-[14px] text-charcoal/80">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                    Address
                  </dt>
                  <dd className="mt-2 max-w-xs leading-relaxed">
                    {BRAND.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="border-b border-transparent transition-colors hover:border-gold hover:text-gold"
                    >
                      {BRAND.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                      className="border-b border-transparent transition-colors hover:border-gold hover:text-gold"
                    >
                      {BRAND.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                    WhatsApp
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="border-b border-transparent transition-colors hover:border-gold hover:text-gold"
                    >
                      Message us on WhatsApp →
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                    Hours
                  </dt>
                  <dd className="mt-2">Tue – Sat · 11:00 – 19:00 (PKT)</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.36em] text-charcoal/50">
                    Follow
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-4">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="border-b border-transparent transition-colors hover:border-gold hover:text-gold"
                      >
                        {s.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Enquiry form */}
            <div className="md:col-span-7 md:pl-6 lg:pl-12">
              <div className="border border-black/5 bg-ivory p-8 sm:p-10 lg:p-12">
                <p className="eyebrow eyebrow--muted">Enquiry</p>
                <h3 className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight text-charcoal">
                  Start the conversation.
                </h3>
                <span className="mt-5 block h-px w-10 bg-gold" />

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

