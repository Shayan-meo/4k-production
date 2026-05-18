/**
 * 4K Production — central content registry.
 * Every route in `src/app/*` consumes its content from here.
 */

// ---------- Types ----------

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly titleAccent: string;
  readonly subtitle: string;
  readonly ctaPrimary: { readonly label: string; readonly href: string };
  readonly ctaSecondary: { readonly label: string; readonly href: string };
  readonly backgroundImage: string;
}

export interface ServiceBullet {
  readonly title: string;
  readonly body: string;
}

export type ServiceGroupId = "films" | "portraits" | "deliverables";

export interface ServiceGroup {
  readonly id: ServiceGroupId;
  readonly label: string;
  readonly tagline: string;
  readonly description: string;
}

export interface ServicePackage {
  readonly slug: string;
  readonly group: ServiceGroupId;
  readonly name: string;
  readonly tagline: string;
  readonly summary: string;
  readonly description: string;
  readonly heroImage: string;
  readonly thumbImage: string;
  readonly bullets: readonly string[];
  readonly inclusions: readonly ServiceBullet[];
  readonly gallery: readonly string[];
  readonly price: string;
  readonly duration: string;
}

export type PortfolioCategory =
  | "Weddings"
  | "Portraits"
  | "Corporate"
  | "Events";

export interface PortfolioItem {
  readonly id: string;
  readonly title: string;
  readonly couple: string;
  readonly location: string;
  readonly year: string;
  readonly category: PortfolioCategory;
  readonly subCategory: string;
  readonly image: string;
  readonly orientation: "portrait" | "landscape" | "square";
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly image: string;
}

export interface EventDetail {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly time: string;
  readonly venue: string;
  readonly address: string;
  readonly dressCode: string;
  readonly description: string;
  readonly image: string;
}

// ---------- Brand ----------

export const BRAND = {
  name: "4K Production",
  monogram: "4K",
  tagline: "Cinematic Wedding Films & Portraits",
  quote:
    "We don’t film weddings. We preserve the feeling of being there — frame by frame, forever.",
  email: "studio@4kproduction.co",
  phone: "+92 300 0000000",
  whatsapp: "+92 300 0000000",
  city: "Lahore · Dubai · London",
  address: "12 Mall Studios, The Mall Road, Lahore 54000, Pakistan",
} as const;

// ---------- Navigation ----------

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------- Hero ----------

export const HERO: HeroContent = {
  eyebrow: "Est. 2014 · Cinematic Wedding House",
  title: "Where every glance",
  titleAccent: "becomes cinema.",
  subtitle:
    "An editorial wedding house crafting heirloom films, portraits and bound albums for discerning couples across Lahore, Dubai and London.",
  ctaPrimary: { label: "View Portfolio", href: "/portfolio" },
  ctaSecondary: { label: "Book a Consultation", href: "/contact" },
  backgroundImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80",
};

// ---------- About ----------

export const ABOUT = {
  eyebrow: "Our Studio",
  title: "A quiet atelier for",
  titleAccent: "loud, beautiful days.",
  intro:
    "4K Production is a small, director-led wedding house. We work with a handful of couples each year — never more — to craft heirloom films, portraits and albums that feel like the day itself, only sharper, slower, and somehow more honest.",
  philosophy: [
    {
      title: "Editorial first",
      body: "We come from a fashion-film background. Every frame is composed with the eye of a magazine spread — light, texture, restraint.",
    },
    {
      title: "Story over spectacle",
      body: "We don’t chase coverage. We watch your families, the quiet glances, the unscripted laughter — and build a film around them.",
    },
    {
      title: "Heirloom craftsmanship",
      body: "Films are graded on calibrated reference monitors, mixed in stereo, and delivered on archival drives meant to outlive the trends.",
    },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80",
  portraitImage:
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1400&q=80",
  numbers: [
    { label: "Projects filmed", value: "240+" },
    { label: "Cities worked in", value: "31" },
    { label: "Years of practice", value: "12" },
    { label: "Clients each year", value: "≤ 30" },
  ],
} as const;

// ---------- Service Groups ----------

export const SERVICE_GROUPS: readonly ServiceGroup[] = [
  {
    id: "films",
    label: "The Wedding Films",
    tagline: "Editorial cinema for the day itself",
    description:
      "Director-led film and photography for every function of the wedding — Mehndi, Barat, Walima, Nikkah and destination celebrations — captured as heirloom cinema.",
  },
  {
    id: "portraits",
    label: "Portraits & Pre-Wedding",
    tagline: "The frames you set before the day",
    description:
      "Bridal portraits, engagement shoots, save-the-date films and pre-wedding storytelling — composed with cinema lenses and the eye of a fashion magazine.",
  },
  {
    id: "deliverables",
    label: "Heirloom Deliverables",
    tagline: "How your wedding arrives, and lives on",
    description:
      "The bound albums, private galleries, social reels and discreet workflows that turn the day's footage into something your family will hold for generations.",
  },
] as const;

// ---------- Services (12) ----------

export const SERVICES: readonly ServicePackage[] = [
  // ─── The Wedding Films ───────────────────────────────────────────
  {
    slug: "complete-wedding-coverage",
    group: "films",
    name: "Complete Wedding & Multi-Day Coverage",
    tagline: "Mehndi · Barat · Walima",
    summary:
      "A three-day editorial story across all functions — directed, scored and finished like a feature short.",
    description:
      "Our most-loved commission. A director-led film unit shadows you across all three functions — Mehndi, Barat and Walima — capturing the day with the patience of a documentary and the eye of a fashion film. The footage is then assembled into a 12–15 minute feature with custom score and title design.",
    heroImage:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "3 events · 3-person film crew",
      "12–15 min cinematic feature",
      "Bespoke score · custom title design",
      "Heirloom USB box + archival drive",
    ],
    inclusions: [
      {
        title: "Three-day coverage",
        body: "Mehndi, Barat and Walima — each documented in full from prep to the last dance.",
      },
      {
        title: "Director-led crew",
        body: "A director, a DOP and a second operator working in concert.",
      },
      {
        title: "Feature-length edit",
        body: "A 12–15 minute editorial film with custom score and chapter titles.",
      },
      {
        title: "Heirloom delivery",
        body: "Linen-bound USB box, archival SSD and a private streaming gallery.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "From PKR 1,250,000",
    duration: "3 days · Mehndi · Barat · Walima",
  },
  {
    slug: "wedding-highlight-documentary",
    group: "films",
    name: "Wedding Highlights & Full Documentaries",
    tagline: "Highlight Reels + Full Films",
    summary:
      "Two films from one wedding — a tight 5–7 minute editorial cut, plus the full 45–60 minute documentary.",
    description:
      "For couples who want both the editorial highlight and the long-form record, this commission delivers a 5–7 minute cinematic film alongside a 45–60 minute documentary edit covering ceremonies, speeches and dances in full — color-graded, scored and ready to revisit for a lifetime.",
    heroImage:
      "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "5–7 min editorial highlight",
      "45–60 min full documentary",
      "Calibrated cinema color",
      "Dolby stereo mix",
    ],
    inclusions: [
      {
        title: "Editorial highlight",
        body: "A 5–7 minute film scored to a piece of music chosen with you.",
      },
      {
        title: "Full documentary",
        body: "Ceremonies, speeches and dances cut in full, in sequence.",
      },
      {
        title: "Heirloom delivery",
        body: "4K private gallery + archival SSD.",
      },
      {
        title: "Vertical reel companion",
        body: "A 60-second vertical edit included for social.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "From PKR 650,000",
    duration: "Single event · 8 hours",
  },
  {
    slug: "nikkah-ceremony-film",
    group: "films",
    name: "Nikkah Ceremony Film",
    tagline: "Intimate Ceremony Coverage",
    summary:
      "A reverent, quietly cinematic film of the Nikkah itself — vows, signatures, prayers and the families who witness them.",
    description:
      "A two-camera unit shoots the Nikkah end-to-end with reverence and restraint — the sermon, the signing, the prayers, the embrace. Delivered as a 4–5 minute editorial film plus a curated stills set, finished within ten days so the memory is still warm.",
    heroImage:
      "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "2-camera discreet unit",
      "Lavalier audio for vows",
      "4–5 min editorial film",
      "10-day post turnaround",
    ],
    inclusions: [
      {
        title: "Discreet two-camera coverage",
        body: "Wide ceremony angle and a tight prime for vows, signatures and prayer.",
      },
      {
        title: "Broadcast audio",
        body: "Wireless lavalier on the Nikkah-khwaan and a redundant boom — every word preserved.",
      },
      {
        title: "Editorial film",
        body: "A 4–5 minute graded film with title cards and a piece of music chosen with you.",
      },
      {
        title: "Stills companion",
        body: "60+ retouched archival frames from the same ceremony.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "From PKR 280,000",
    duration: "Half-day · One venue",
  },
  {
    slug: "destination-wedding-films",
    group: "films",
    name: "Destination Wedding Films",
    tagline: "Dubai · Istanbul · Bali · The Lakes",
    summary:
      "A fully-travelled film crew for destination weddings abroad — visas, gear logistics and a four-day shooting plan handled end-to-end.",
    description:
      "We travel with our own crew, our own cameras and a producer who has run destination shoots from Dubai to the Italian Lakes. A four-day commission covers arrival rituals, the welcome dinner, the main day and the morning-after — finished as a feature film designed for a big-screen first watch.",
    heroImage:
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Travel-ready 4-person crew",
      "4 shoot days incl. welcome",
      "Feature-length 15–18 min film",
      "Visas + gear logistics handled",
    ],
    inclusions: [
      {
        title: "Travel-ready crew",
        body: "Four people, full kit, ATA carnet — we have run shoots from Lahore to Lake Como.",
      },
      {
        title: "Four-day coverage",
        body: "Arrival dinner, main day, party night and a morning-after couple session.",
      },
      {
        title: "Feature-length film",
        body: "A 15–18 minute editorial film designed to be watched on a big screen, together.",
      },
      {
        title: "Logistics handled",
        body: "Visas, gear carnets, on-ground transport and venue liaison — we run point.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "From PKR 2,200,000",
    duration: "4 days · Travel included",
  },

  // ─── Portraits & Pre-Wedding ─────────────────────────────────────
  {
    slug: "bridal-engagement-portraits",
    group: "portraits",
    name: "Signature Bridal & Engagement Portraits",
    tagline: "Editorial Portrait Sessions",
    summary:
      "A one-location editorial portrait session captured with cinema lenses and studio-grade lighting.",
    description:
      "A four-hour portrait session for brides, grooms or couples before the wedding. Shot on prime cinema lenses with a styled set and a dedicated lighting plan, the result is a small collection of Vogue-style frames — calibrated, retouched and delivered as archival prints.",
    heroImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "1 location · 4-hour session",
      "Director-led styling consult",
      "Cinema-lens stills + 60-sec reel",
      "20 retouched archival frames",
    ],
    inclusions: [
      {
        title: "Creative direction",
        body: "A pre-shoot consultation covering wardrobe, location and references.",
      },
      {
        title: "Cinema-grade stills",
        body: "Shot on the same prime lenses we use for film — every frame is editorial.",
      },
      {
        title: "Retouch & print",
        body: "20 high-resolution archival prints, hand-retouched and color matched.",
      },
      {
        title: "60-second reel",
        body: "A short vertical edit from the same session — ready for social.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1594552072238-2c4a05ba8d4f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "From PKR 350,000",
    duration: "4 hours · One location",
  },
  {
    slug: "pre-wedding-couple-film",
    group: "portraits",
    name: "Pre-Wedding Couple Film",
    tagline: "Save-the-Date Cinema",
    summary:
      "A short cinematic love-letter film, shot on location before the wedding — perfect as a save-the-date or first-look reveal.",
    description:
      "Half a day on a chosen location — a heritage haveli, a garden, a beach — directed by us and styled with you. We come away with a 90-second editorial film and a small set of stills. The film is delivered in time to play on your Mehndi night or share as a save-the-date.",
    heroImage:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Half-day on-location shoot",
      "Director-led styling",
      "90-second editorial film",
      "15 retouched stills",
    ],
    inclusions: [
      {
        title: "Location scouting",
        body: "We scout and confirm a location that suits the mood — heritage, garden or coast.",
      },
      {
        title: "Director-led shoot",
        body: "A small crew, cinema lenses and a styling brief we develop with you.",
      },
      {
        title: "Cinematic film",
        body: "A 90-second graded film scored to a piece of music chosen with you.",
      },
      {
        title: "Stills companion",
        body: "15 retouched archival stills from the same session.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "From PKR 220,000",
    duration: "Half-day · One location",
  },
  {
    slug: "mehndi-night-portraits",
    group: "portraits",
    name: "Mehndi Night Portraits",
    tagline: "The Bride, Before The Dhol",
    summary:
      "An intimate portrait session on Mehndi day itself — the bride dressed, hennaed and lit before the function begins.",
    description:
      "A 60-minute window before the Mehndi crowd arrives: the bride in full styling, lit on the same stage that will hold her later, photographed with cinema primes. The session yields a small set of editorial frames and a 45-second vertical reel — both delivered within five days.",
    heroImage:
      "https://images.unsplash.com/photo-1594552072238-2c4a05ba8d4f?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1594552072238-2c4a05ba8d4f?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "60-minute pre-Mehndi window",
      "Studio-grade portable lighting",
      "12 retouched frames",
      "45-sec vertical reel",
    ],
    inclusions: [
      {
        title: "On-stage portable studio",
        body: "We bring portable cinema lighting and shoot on the same set the function uses.",
      },
      {
        title: "Cinematic portraits",
        body: "Cinema-prime stills capturing the styling at its most pristine.",
      },
      {
        title: "Retouch & archive",
        body: "12 hand-retouched archival frames ready for print.",
      },
      {
        title: "Vertical reel",
        body: "A 45-second vertical edit perfect for the next day's reveal.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1594552072238-2c4a05ba8d4f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "From PKR 150,000",
    duration: "60 minutes · On-venue",
  },
  {
    slug: "family-portrait-sessions",
    group: "portraits",
    name: "Wedding Day Family Portraits",
    tagline: "The Frames Families Frame",
    summary:
      "A dedicated 45-minute family-portrait window on the wedding day — the photographs your mothers will print and frame.",
    description:
      "A planned 45-minute window between functions, shot on a calibrated portable studio set up at your venue. We work through a family-portrait list you provide — couple, parents, grandparents, siblings, cousins — capturing the formal group shots families always wish they had taken.",
    heroImage:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "45-minute dedicated window",
      "Portable studio backdrop",
      "Pre-planned family list",
      "30 retouched archival frames",
    ],
    inclusions: [
      {
        title: "Planning consult",
        body: "We build the family shot-list with you a week before so the day runs to time.",
      },
      {
        title: "Portable studio",
        body: "A calibrated backdrop set with consistent lighting for the whole family.",
      },
      {
        title: "Retouched frames",
        body: "30 hand-retouched archival prints, color matched and framed-ready.",
      },
      {
        title: "Print folio",
        body: "Six 8×10 prints in a matching folio — included as standard.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606800052052-7c3e9c0c4d10?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "From PKR 120,000",
    duration: "45 minutes · On-venue",
  },

  // ─── Heirloom Deliverables ───────────────────────────────────────
  {
    slug: "luxury-photo-albums",
    group: "deliverables",
    name: "Luxury Photo Albums & Archival Prints",
    tagline: "Linen · Leather · Italian Stock",
    summary:
      "Hand-bound editorial albums printed on Italian archival stock — designed in-house, delivered in a presentation box.",
    description:
      "A bound book that lives on a coffee table, not a hard drive. Each album is laid out in-house in editorial spreads, printed on 200gsm Italian archival stock, and bound in linen or leather. Presented in a debossed solander box with a matching set of fine-art prints.",
    heroImage:
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "30 × 30 cm · 40+ spreads",
      "Italian 200gsm archival stock",
      "Linen or leather binding",
      "Debossed presentation box",
    ],
    inclusions: [
      {
        title: "In-house layout",
        body: "Editorial spreads designed by our art director — not template-driven.",
      },
      {
        title: "Italian printing",
        body: "Archival stock, color-managed press, lifetime fade warranty.",
      },
      {
        title: "Bespoke binding",
        body: "Linen or leather, with a debossed monogram on the cover.",
      },
      {
        title: "Fine-art prints",
        body: "Six 8×10 prints in a matching folio for framing.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "From PKR 95,000",
    duration: "3–4 weeks from selection",
  },
  {
    slug: "private-online-galleries",
    group: "deliverables",
    name: "Private Online Galleries",
    tagline: "Secure Digital Delivery",
    summary:
      "Password-protected, brand-styled galleries for streaming films and downloading stills — built for sharing.",
    description:
      "Every commission ships with a private streaming gallery on our own infrastructure: branded with your monogram, password-protected, and built for downloading stills in print-ready and web-ready resolutions. Lives online for two years, archived to cold storage thereafter.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Brand-matched gallery",
      "Password + IP protection",
      "Print + web-res downloads",
      "2-year hosting · cold-storage backup",
    ],
    inclusions: [
      {
        title: "Branded interface",
        body: "Your monogram, your fonts, your colors — not a generic photo-host page.",
      },
      {
        title: "Access control",
        body: "Password protection, optional IP whitelisting, expiring share links.",
      },
      {
        title: "Smart downloads",
        body: "One-click switch between print-res, web-res and social-cropped formats.",
      },
      {
        title: "Lifetime archive",
        body: "Cold-storage backup of the full master files for ten years.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "Included with every commission",
    duration: "2-year hosting included",
  },
  {
    slug: "wedding-reels-vertical-edits",
    group: "deliverables",
    name: "Wedding Reels & Vertical Edits",
    tagline: "For Reels, Stories & Save-the-Dates",
    summary:
      "Hand-cut vertical edits of your wedding — built for Reels, Stories and the family WhatsApp groups, not just a sideways crop of the main film.",
    description:
      "Vertical wedding content recut from the original rushes — not a 9:16 squeeze of the 16:9 master. Each reel is paced for the first three seconds, scored to a song chosen with you and captioned for sound-off viewing. Delivered as a series of 3–6 reels per wedding — one per function, plus a couple-only edit.",
    heroImage:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "3–6 vertical reels per wedding",
      "One reel per function",
      "Hand-recut · not auto-cropped",
      "Reels · Stories · Save-the-Date",
    ],
    inclusions: [
      {
        title: "Native vertical edit",
        body: "Cut from the wedding rushes, not from the horizontal master.",
      },
      {
        title: "One per function",
        body: "Mehndi, Barat and Walima each get their own reel — plus a couple-only edit.",
      },
      {
        title: "Captions baked in",
        body: "Sound-off-ready captions in a brand-matched serif type.",
      },
      {
        title: "Multi-platform export",
        body: "Reels, Stories and a square save-the-date aspect — delivered together.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1611162617474-f3789e4f7c1f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "From PKR 80,000",
    duration: "Per commission · 5-day turnaround",
  },
  {
    slug: "private-mode-production",
    group: "deliverables",
    name: "Private Mode Wedding Production",
    tagline: "For High-Profile Couples",
    summary:
      "A discreet, NDA-bound wedding workflow for couples who need the day to stay private — nothing published, posted or shared.",
    description:
      "For couples in public life: a fully NDA-bound wedding production where nothing is published, posted or shared. Encrypted in-flight transfers, on-premises post-production, no portfolio inclusion, no name in our team's social, and a hand-couriered final delivery. Quiet, by design.",
    heroImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2400&q=80",
    thumbImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Full NDA · no portfolio use",
      "Encrypted transfers",
      "On-premises post-production",
      "Hand-couriered delivery",
    ],
    inclusions: [
      {
        title: "Full confidentiality",
        body: "Mutual NDA, named crew only, zero portfolio or social use.",
      },
      {
        title: "Secure pipeline",
        body: "Encrypted transfers, air-gapped backup, on-premises edit suite.",
      },
      {
        title: "Discreet crew",
        body: "Smallest possible crew, dressed for the room, formally briefed.",
      },
      {
        title: "Hand-couriered delivery",
        body: "Final master delivered in person on an encrypted drive — no cloud links.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    ],
    price: "By invitation",
    duration: "Bespoke",
  },
] as const;

// ---------- Portfolio (24 items, 4 categories) ----------

export const PORTFOLIO: readonly PortfolioItem[] = [
  // ── Weddings (8) ────────────────────────────────────────────────
  {
    id: "p01",
    title: "Golden Hour",
    couple: "Sara & Hamza",
    location: "Lahore Fort",
    year: "2025",
    category: "Weddings",
    subCategory: "Barat",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p02",
    title: "Garden of Henna",
    couple: "Anaya & Rayyan",
    location: "Karachi",
    year: "2024",
    category: "Weddings",
    subCategory: "Mehndi",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p03",
    title: "Marble & Light",
    couple: "Rida & Talha",
    location: "Lahore",
    year: "2024",
    category: "Weddings",
    subCategory: "Walima",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p04",
    title: "The Vow",
    couple: "Hiba & Usman",
    location: "Islamabad",
    year: "2024",
    category: "Weddings",
    subCategory: "Nikkah",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p05",
    title: "Crimson Couture",
    couple: "Zoya & Bilal",
    location: "Dubai",
    year: "2024",
    category: "Weddings",
    subCategory: "Barat",
    image:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p06",
    title: "Cathedral Light",
    couple: "Maryam & Asad",
    location: "Lahore",
    year: "2025",
    category: "Weddings",
    subCategory: "Nikkah",
    image:
      "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p07",
    title: "Desert Vow",
    couple: "Mahnoor & Arsalan",
    location: "Dubai",
    year: "2023",
    category: "Weddings",
    subCategory: "Destination",
    image:
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p08",
    title: "The First Look",
    couple: "Ayesha & Faraz",
    location: "London",
    year: "2023",
    category: "Weddings",
    subCategory: "Couple Story",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },

  // ── Portraits (6) ───────────────────────────────────────────────
  {
    id: "p09",
    title: "Ivory Bloom",
    couple: "Mehr & Daniyal",
    location: "Lahore",
    year: "2025",
    category: "Portraits",
    subCategory: "Bridal Portrait",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p10",
    title: "Velvet Hour",
    couple: "Noor & Imran",
    location: "Lahore",
    year: "2023",
    category: "Portraits",
    subCategory: "Bridal Portrait",
    image:
      "https://images.unsplash.com/photo-1594552072238-2c4a05ba8d4f?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p11",
    title: "Editorial Black",
    couple: "Studio Session",
    location: "Lahore",
    year: "2025",
    category: "Portraits",
    subCategory: "Editorial",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p12",
    title: "Studio Light",
    couple: "Hina & Awais",
    location: "Lahore",
    year: "2024",
    category: "Portraits",
    subCategory: "Engagement",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p13",
    title: "Couture in White",
    couple: "Aiman & Saad",
    location: "Lahore",
    year: "2025",
    category: "Portraits",
    subCategory: "Bridal Portrait",
    image:
      "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p14",
    title: "Garden Engagement",
    couple: "Sana & Hashir",
    location: "Islamabad",
    year: "2024",
    category: "Portraits",
    subCategory: "Engagement",
    image:
      "https://images.unsplash.com/photo-1606800052052-7c3e9c0c4d10?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },

  // ── Corporate (6) ───────────────────────────────────────────────
  {
    id: "p15",
    title: "TEDx Lahore",
    couple: "TEDx Lahore",
    location: "Alhamra Arts Council",
    year: "2024",
    category: "Corporate",
    subCategory: "Conference",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p16",
    title: "Founders Series",
    couple: "Granite Capital",
    location: "Dubai",
    year: "2025",
    category: "Corporate",
    subCategory: "Executive Interview",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p17",
    title: "Headshot Day",
    couple: "Ascentum Group",
    location: "Lahore",
    year: "2025",
    category: "Corporate",
    subCategory: "Headshots",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
  {
    id: "p18",
    title: "Product Launch",
    couple: "Ferra Beauty",
    location: "Karachi",
    year: "2024",
    category: "Corporate",
    subCategory: "Commercial",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p19",
    title: "Brand Day",
    couple: "Lumen Studios",
    location: "Lahore",
    year: "2024",
    category: "Corporate",
    subCategory: "Brand Content",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p20",
    title: "Keynote, Closing Night",
    couple: "Pakistan Tech Summit",
    location: "Islamabad",
    year: "2025",
    category: "Corporate",
    subCategory: "Conference",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },

  // ── Events (4) ──────────────────────────────────────────────────
  {
    id: "p21",
    title: "Anniversary No. 25",
    couple: "The Sheikh Family",
    location: "Lahore",
    year: "2025",
    category: "Events",
    subCategory: "Anniversary",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p22",
    title: "Bridal Shower",
    couple: "Mehreen’s Shower",
    location: "Lahore",
    year: "2024",
    category: "Events",
    subCategory: "Shower",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p23",
    title: "Sweet Sixteen",
    couple: "Amal turns 16",
    location: "Lahore",
    year: "2025",
    category: "Events",
    subCategory: "Birthday",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
  },
  {
    id: "p24",
    title: "Garden Soirée",
    couple: "The Khan Family",
    location: "Islamabad",
    year: "2024",
    category: "Events",
    subCategory: "Private Dinner",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    orientation: "portrait",
  },
] as const;

// ---------- Team ----------

export const TEAM: readonly TeamMember[] = [
  {
    id: "t1",
    name: "Hassan Raza",
    role: "Founder · Director",
    bio: "Trained in fashion film at the NCA, Hassan founded 4K Production in 2014 to bring an editorial sensibility to the wedding film. He directs every commission personally.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t2",
    name: "Mariam Khalid",
    role: "Lead Cinematographer",
    bio: "A graduate of the London Film School, Mariam has shot for Vogue Arabia and Hello! Pakistan. Her work is patient, quiet, and unmistakably hers.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t3",
    name: "Zain Abbas",
    role: "Editor · Colorist",
    bio: "Zain edits and grades every film we ship. Twelve years of post and a Davinci Resolve panel later, he still color-corrects on a calibrated reference monitor.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t4",
    name: "Sana Ahmed",
    role: "Producer",
    bio: "Sana keeps the studio quietly running — scheduling, logistics, vendor relationships, and the small kindnesses families remember years later.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

// ---------- Events ----------

export const EVENTS: readonly EventDetail[] = [
  {
    id: "mehndi",
    name: "Mehndi",
    date: "Friday, 14 February 2026",
    time: "7:00 PM onwards",
    venue: "The Garden Pavilion",
    address: "Gulberg III, Lahore",
    dressCode: "Mustard · Emerald · Ivory",
    description:
      "An evening of henna, dhol and yellow light — documented with handheld primes and ambient sound for a film that feels exactly as warm as the night did.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "barat",
    name: "Barat",
    date: "Saturday, 15 February 2026",
    time: "8:00 PM onwards",
    venue: "Royal Palm Estate",
    address: "Canal Road, Lahore",
    dressCode: "Formal Eastern",
    description:
      "The film's emotional center. A two-camera unit captures arrivals, vows and family in the warm reds and golds of the night, finished in cinematic color.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "walima",
    name: "Walima",
    date: "Sunday, 16 February 2026",
    time: "7:30 PM onwards",
    venue: "Faletti’s Grand Ballroom",
    address: "The Mall, Lahore",
    dressCode: "Black Tie · Ivory",
    description:
      "A black-tie evening of toasts and slow dances, filmed with a quieter hand and graded into the soft, ivory palette the night deserves.",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

// ---------- Social ----------

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;

// ---------- Portfolio filters ----------

export const PORTFOLIO_CATEGORIES: readonly PortfolioCategory[] = [
  "Weddings",
  "Portraits",
  "Corporate",
  "Events",
] as const;
