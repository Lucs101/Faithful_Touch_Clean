import { useState } from "react";
import { ArrowRight, ChevronsLeftRight, Images, Info } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

function CompareSlider({
  beforeLabel,
  afterLabel,
  image,
  alt,
  caption,
}: {
  beforeLabel: string;
  afterLabel: string;
  image: string;
  alt: string;
  caption: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="group overflow-hidden rounded-[28px] border border-forest-800/10 bg-white shadow-[0_16px_44px_-18px_rgb(11_47_36/0.3)]">
      <div className="ba-slider relative h-[300px] select-none overflow-hidden sm:h-[380px]">
        {/* After (base) */}
        <img src={image} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <span className="absolute bottom-4 right-4 rounded-full bg-forest-800/90 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur">
          {afterLabel}
        </span>

        {/* Before (clipped overlay with muted treatment to suggest pre-clean) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden="true"
        >
          <img
            src={image}
            alt=""
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "saturate(0.42) brightness(0.7) sepia(0.3) contrast(0.92)" }}
          />
          <div className="absolute inset-0 bg-forest-950/15" />
        </div>
        <span className="absolute bottom-4 left-4 z-[5] rounded-full bg-charcoal-900/80 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-cream-100 backdrop-blur">
          {beforeLabel}
        </span>

        {/* Divider */}
        <div className="absolute inset-y-0 z-10 w-[3px] bg-white shadow-[0_0_20px_rgb(0_0_0/0.4)]" style={{ left: `calc(${pos}% - 1.5px)` }} aria-hidden="true" />
        <div
          className="absolute top-1/2 z-10 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-forest-800 bg-white p-3 shadow-xl"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <ChevronsLeftRight className="h-5 w-5 text-forest-800" />
        </div>

        <input
          type="range"
          min={4}
          max={96}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full opacity-0"
          aria-label={`Drag to compare before and after: ${caption}`}
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-6 py-4">
        <span className="text-[14px] font-bold text-charcoal-900">{caption}</span>
        <span className="text-[12px] font-semibold text-charcoal-300">Drag to compare</span>
      </figcaption>
    </figure>
  );
}

const GALLERY = [
  { src: IMAGES.kitchen, alt: "Sparkling clean modern kitchen with white cabinets", label: "Kitchens" },
  { src: IMAGES.bathroom, alt: "Freshly cleaned bright bathroom with white towels", label: "Bathrooms" },
  { src: IMAGES.vacuum, alt: "Detailed floor care with professional vacuuming", label: "Floors & Detail" },
  { src: IMAGES.bedroom2, alt: "Freshly prepared guest-ready bedroom", label: "Bedrooms" },
  { src: IMAGES.commercialAlt, alt: "Clean welcoming modern office workspace", label: "Offices" },
  { src: IMAGES.living, alt: "Bright organized living area after cleaning", label: "Living Areas" },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="relative scroll-mt-24 bg-cream-100 py-20 sm:py-28" aria-label="Cleaning results">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
            <Images className="h-3.5 w-3.5 text-gold-600" />
            Transformations
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            See the Difference a <span className="italic text-forest-700">Faithful Touch</span> Makes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal-500">
            From kitchens and bathrooms to floors, bedrooms, and offices — thoughtful, detailed
            cleaning helps every space feel fresh and welcoming.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <CompareSlider
              beforeLabel="Before"
              afterLabel="After"
              image={IMAGES.kitchen2}
              alt="Bright modern kitchen shown after detailed cleaning"
              caption="Kitchen refresh — counters, surfaces & detail"
            />
          </Reveal>
          <Reveal delay={1}>
            <CompareSlider
              beforeLabel="Before"
              afterLabel="After"
              image={IMAGES.bathroom2}
              alt="Contemporary bathroom shown after detailed cleaning"
              caption="Bathroom refresh — fixtures, tile & shine"
            />
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src + i} delay={(i % 3) as 0 | 1 | 2}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-[0_12px_32px_-14px_rgb(11_47_36/0.35)]">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-cream-50/95 px-4 py-1.5 text-[12.5px] font-extrabold text-forest-900 backdrop-blur">
                  {g.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-3xl">
          <p className="flex items-start gap-2.5 rounded-2xl border border-forest-800/10 bg-white/70 px-5 py-4 text-[12.5px] leading-relaxed text-charcoal-500">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            <span>
              <span className="font-bold text-charcoal-900">Representative stock imagery.</span> These
              photos illustrate the kind of results detailed cleaning can achieve. This gallery is
              designed to be replaced with Faithful Touch Cleanings' real project photos at any time.
            </span>
          </p>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-[15px] font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
          >
            Get My Transformation Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
