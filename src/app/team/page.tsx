import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ImageBanner from "@/components/ImageBanner";
import TeamCard from "@/components/TeamCard";
import { TEAM } from "@/constants";

export const metadata: Metadata = {
  title: "Team & Crew",
  description:
    "The small, director-led team behind 4K Production — director, cinematographer, colorist and producer.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team & Crew · 4K Production",
    description:
      "The small, director-led team behind 4K Production.",
    url: "/team",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team & Crew · 4K Production",
    description: "The small, director-led team behind 4K Production.",
  },
};

export default function TeamPage() {
  return (
    <>
      <ImageBanner
        eyebrow="Behind the Lens"
        title="A small team,"
        accent="long held together."
        subtitle="We are four people, working in long-running collaboration. Every commission is led by the same four hands."
        image={TEAM[0].image}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-10">
            {TEAM.map((m, idx) => (
              <TeamCard key={m.id} member={m} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want us on your wedding?"
        accent=""
        description="Share your date and venue — we typically reply within 48 hours."
      />
    </>
  );
}
