import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

/* ------------------------------------------------------------------
   PHOTO GALLERY — swap any `src` below with real project photos.
   Keep the same keys and the layout updates automatically.
   Recommended: 1200×800 JPG/WebP, bright natural light.
------------------------------------------------------------------- */

type Cat = "Residential" | "Commercial" | "Airbnb" | "Move-In / Move-Out";

const TABS: ("All" | Cat)[] = ["All", "Residential", "Commercial", "Airbnb", "Move-In / Move-Out"];

const PHOTOS: { src: string; alt: string; cat: Cat; label: string }[] = [
  { src: IMAGES.residentialAlt, alt: "Clean bright residential living room", cat: "Residential", label: "Living Room Refresh" },
  { src: IMAGES.kitchen, alt: "Spotless modern kitchen", cat: "Residential", label: "Kitchen Detail" },
  { src: IMAGES.bathroom, alt: "Freshly cleaned bathroom", cat: "Residential", label: "Bathroom Care" },
  { src: IMAGES.commercial, alt: "Tidy modern office", cat: "Commercial", label: "Office Space" },
  { src: IMAGES.commercialAlt, alt: "Welcoming commercial workspace", cat: "Commercial", label: "Workspace Detail" },
  { src: IMAGES.vacuum, alt: "Professional floor care", cat: "Commercial", label: "Floor Care" },
  { src: IMAGES.bedroom, alt: "Guest-ready Airbnb bedroom", cat: "Airbnb", label: "Guest Bedroom" },
  { src: IMAGES.bedroom3, alt: "Neatly styled rental bedroom", cat: "Airbnb", label: "Rental Styling" },
  { src: IMAGES.bedroom2, alt: "Fresh Airbnb suite with towels", cat: "Airbnb", label: "Turnover Ready" },
  { src: IMAGES.moveInEmpty, alt: "Empty home ready for move-in clean", cat: "Move-In / Move-Out", label: "Move-In Prep" },
  { src: IMAGES.moveOut, alt: "Sunlit empty room after move-out clean", cat: "Move-In / Move-Out", label: "Move-Out Finish" },
  { src: IMAGES.moveIn, alt: "New home transition moment", cat: "Move-In / Move-Out", label: "Fresh Start" },
];

export default function Gallery() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const filtered = tab === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === tab);

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-white py-20 sm:py-28" aria-label="Cleaning photo gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-cream-50 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700">
            <LayoutGrid className="h-3.5 w-3.5 text-gold-600" />
            Our Work
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            Fresh Spaces, <span className="italic text-forest-700">Beautifully Kept</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal-500">
            A look at the kinds of spaces we care for. Demo shown with representative stock
            photography — ready to showcase real Faithful Touch results.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-8 flex justify-center">
          <div className="nice-scroll flex max-w-full gap-2 overflow-x-auto rounded-full border border-forest-800/12 bg-cream-50 p-1.5" role="tablist" aria-label="Gallery categories">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[13.5px] font-extrabold transition-all duration-300 ${
                  tab === t ? "bg-forest-800 text-white shadow-md" : "text-charcoal-500 hover:text-forest-800"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4" aria-live="polite">
          {filtered.map((p, i) => (
            <figure
              key={p.src + p.label}
              className="group relative overflow-hidden rounded-3xl shadow-[0_12px_32px_-14px_rgb(11_47_36/0.35)]"
              style={{ animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both`, animationDelay: `${(i % 8) * 70}ms` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08] sm:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/5 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-3 bottom-3">
                <span className="block rounded-2xl bg-cream-50/95 px-4 py-2.5 text-center backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="block text-[13px] font-extrabold text-charcoal-900">{p.label}</span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-forest-700">{p.cat}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
