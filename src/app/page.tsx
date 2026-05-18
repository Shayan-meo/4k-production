import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Services from "@/components/Services";
import { ABOUT } from "@/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", type: "website" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section id="intro" className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionHeader
              eyebrow={ABOUT.eyebrow}
              title={ABOUT.title}
              accent={ABOUT.titleAccent}
              ruleLabel="Editorial Cinema"
              description={ABOUT.intro}
            />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <Services variant="preview" />
      </Reveal>
      <Reveal>
        <Portfolio variant="preview" />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
