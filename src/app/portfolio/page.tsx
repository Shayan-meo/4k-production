import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ImageBanner from "@/components/ImageBanner";
import Portfolio from "@/components/Portfolio";
import { PORTFOLIO } from "@/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected wedding cinema from 2023 to 2025 — Lahore, Karachi, Islamabad, Dubai and London.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio · 4K Production",
    description:
      "Selected wedding cinema from 2023 to 2025 — Lahore, Karachi, Islamabad, Dubai and London.",
    url: "/portfolio",
    type: "website",
    images: [{ url: PORTFOLIO[0].image, width: 1600, alt: PORTFOLIO[0].title }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio · 4K Production",
    description: "Selected wedding cinema from 2023 to 2025.",
    images: [PORTFOLIO[0].image],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <ImageBanner
        eyebrow="Selected Work"
        title="A portfolio of quiet moments,"
        accent="grandly remembered."
        subtitle="A small, curated collection of films and frames from the last three seasons."
        image={PORTFOLIO[0].image}
      />
      <Portfolio variant="full" />
      <CTASection
        title="See yourself in this work?"
        accent="Let’s talk."
        description="We accept a small number of weddings each season. Share your date to begin."
      />
    </>
  );
}
