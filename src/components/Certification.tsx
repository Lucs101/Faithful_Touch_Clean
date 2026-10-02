import { Award, CheckCircle2, FileBadge, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Certification() {
  return (
    <section id="certification" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-forest-50 py-20 sm:py-24" aria-label="State certification">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-gold-600" />
                Professional Care
              </p>
              <h2 className="mt-5 font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-charcoal-900 sm:text-[44px]">
                Serving Indiana With <span className="italic text-forest-700">Professional Care</span>
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal-500">
                Faithful Touch Cleanings is state certified and provides cleaning services throughout
                Indiana — dependable care for homes, businesses, and rental properties alike.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Residential & commercial cleaning expertise",
                  "Clear communication from quote to completion",
                  "Careful attention to kitchens, baths & details",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[14.5px] font-semibold text-charcoal-900">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-800 text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            {/* Certification card — easy to update with real details later */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-gold-400/30 via-transparent to-forest-700/20 blur-xl" aria-hidden="true" />
              <article className="relative overflow-hidden rounded-[32px] border border-gold-600/25 bg-white p-8 shadow-[0_28px_70px_-24px_rgb(11_47_36/0.4)] sm:p-10">
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800" aria-hidden="true" />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-forest-800 to-forest-600 text-gold-300 shadow-lg">
                    <Award className="h-8 w-8" strokeWidth={1.6} />
                  </span>
                  <span className="rounded-full bg-forest-50 px-4 py-2 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-forest-700 ring-1 ring-forest-800/10">
                    Verified Status
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[28px] font-semibold tracking-tight text-charcoal-900 sm:text-[32px]">
                  Indiana State Certified
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-500">
                  Faithful Touch Cleanings holds state certification. Official certification details
                  will be listed here.
                </p>

                {/* Placeholder slots — owner can fill in later without redesign */}
                <dl className="mt-6 space-y-3">
                  {[
                    { k: "Certification", v: "Details coming soon — easy to update" },
                    { k: "Issuing agency", v: "To be added" },
                    { k: "Coverage", v: "Serving customers throughout Indiana" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-center justify-between gap-4 rounded-2xl bg-cream-100 px-5 py-3.5">
                      <dt className="flex items-center gap-2 text-[12.5px] font-extrabold uppercase tracking-[0.1em] text-forest-800">
                        <FileBadge className="h-4 w-4 text-gold-600" />
                        {row.k}
                      </dt>
                      <dd className="text-right text-[13px] font-semibold text-charcoal-500">{row.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 rounded-2xl border border-dashed border-forest-800/20 bg-forest-50/60 px-5 py-3.5 text-[12.5px] leading-relaxed text-charcoal-500">
                  <span className="font-bold text-forest-800">For the owner:</span> share your official
                  certificate wording and we'll place it here — no layout changes needed.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
