import Image from "next/image";
import type { TeamMember } from "@/constants";

interface TeamCardProps {
  readonly member: TeamMember;
  readonly index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/10" />
      </div>
      <div className="pt-6">
        <p className="text-[10px] uppercase tracking-[0.36em] text-charcoal/45">
          №&nbsp;{String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-tight text-charcoal">
          {member.name}
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-gold">
          {member.role}
        </p>
        <span className="mt-4 block h-px w-10 bg-charcoal/15" />
        <p className="mt-4 text-[14px] leading-relaxed text-charcoal/75">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
