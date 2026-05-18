import Image from "next/image";

interface ImageBannerProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly accent?: string;
  readonly subtitle?: string;
  readonly image: string;
  readonly height?: "short" | "tall";
  readonly priority?: boolean;
}

export default function ImageBanner({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  height = "short",
  priority = true,
}: ImageBannerProps) {
  return (
    <section
      className={[
        "relative w-full overflow-hidden bg-white",
        height === "tall"
          ? "h-[68vh] min-h-[460px]"
          : "h-[54vh] min-h-[380px]",
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(255,255,255,0.45)_100%)]"
        aria-hidden="true"
      />

      <div className="container-luxe relative z-10 flex h-full flex-col items-center justify-center pt-20 text-center">
        {eyebrow && (
          <p
            className="eyebrow opacity-0 animate-fade-up"
            style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="mt-5 max-w-3xl font-serif text-[clamp(2rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.012em] text-charcoal opacity-0 animate-fade-up text-balance"
          style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
        >
          {title}
          {accent && (
            <>
              <br />
              <span className="italic">{accent}</span>
            </>
          )}
        </h1>
        <div
          className="mt-6 flex items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "420ms", animationFillMode: "forwards" }}
        >
          <span className="rule-gold" />
          <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
            4K Production
          </span>
          <span className="rule-gold" />
        </div>
        {subtitle && (
          <p
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/70 opacity-0 animate-fade-up sm:text-base"
            style={{ animationDelay: "560ms", animationFillMode: "forwards" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
