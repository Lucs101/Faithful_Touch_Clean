import { MessageSquareHeart, Plus, Star } from "lucide-react";
import Reveal from "./Reveal";

const PLACEHOLDERS = [
  { name: "Client Name", detail: "Residential Cleaning • Indiana" },
  { name: "Client Name", detail: "Commercial Cleaning • Indiana" },
  { name: "Client Name", detail: "Airbnb / Rental Cleaning • Indiana" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 bg-cream-100 py-20 sm:py-28" aria-label="Client testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
            <MessageSquareHeart className="h-3.5 w-3.5 text-gold-600" />
            Kind Words
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            Loved by Homes & <span className="italic text-forest-700">Businesses</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal-500">
            Real reviews from Faithful Touch Cleanings clients will live here — ready to add as soon
            as they're available.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLACEHOLDERS.map((t, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2}>
              <figure className="flex h-full flex-col rounded-[28px] border-2 border-dashed border-forest-800/20 bg-white/70 p-8 text-center">
                <div className="flex justify-center gap-1" aria-label="Five star placeholder rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-300 text-gold-300" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-[19px] italic leading-relaxed text-charcoal-300">
                  “Client testimonial will appear here.”
                </blockquote>
                <figcaption className="mt-6 border-t border-forest-800/10 pt-5">
                  <p className="text-[14px] font-extrabold text-charcoal-500">{t.name}</p>
                  <p className="mt-0.5 text-[12.5px] font-semibold text-charcoal-300">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-forest-800/12 bg-white px-6 py-3.5 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-800 text-white">
              <Plus className="h-4 w-4" />
            </span>
            <p className="text-left text-[13px] font-semibold leading-snug text-charcoal-500">
              Had a great clean? Your review can be featured here soon.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
