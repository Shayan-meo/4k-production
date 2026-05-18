interface SectionHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly accent?: string;
  readonly description?: string;
  readonly align?: "center" | "left";
  readonly tone?: "light" | "dark";
  readonly ruleLabel?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  tone = "light",
  ruleLabel,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={[
        "max-w-2xl",
        isCenter ? "mx-auto text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow && (
        <p
          className={[
            "eyebrow",
            isLight ? "eyebrow--muted" : "text-white/70",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={[
          "mt-5 font-serif text-[clamp(1.85rem,3.8vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.012em] text-balance",
          isLight ? "text-charcoal" : "text-white",
        ].join(" ")}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="italic">{accent}</span>
          </>
        )}
      </h2>
      {ruleLabel && (
        <div
          className={[
            "mt-6 flex items-center gap-4",
            isCenter ? "justify-center" : "justify-start",
          ].join(" ")}
        >
          <span className="rule-gold" />
          <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
            {ruleLabel}
          </span>
          <span className="rule-gold" />
        </div>
      )}
      {description && (
        <p
          className={[
            "mt-6 text-[15px] leading-relaxed",
            isLight ? "text-charcoal/70" : "text-white/70",
            isCenter ? "mx-auto max-w-xl" : "max-w-xl",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
