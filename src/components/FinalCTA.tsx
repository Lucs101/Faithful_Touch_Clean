import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden" aria-label="Get started with Faithful Touch Cleanings">
      <div className="absolute inset-0">
        <img
          src={IMAGES.living}
          alt="Beautiful bright clean living room interior"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/92 via-forest-950/75 to-forest-950/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Clean Spaces, Brighter Days
            </p>
            <h2 className="mt-5 font-display text-[38px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[56px]">
              Ready for a Cleaner, Brighter Space?
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/80 sm:text-[18px]">
              Tell us what needs cleaning and we'll help you find the right service for your space —
              anywhere in Indiana.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-[15px] font-extrabold text-forest-950 shadow-[0_18px_40px_-12px_rgb(183_138_46/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#quote-booking"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-forest-900"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Cleaning
              </a>
            </div>
            <p className="mt-5 text-[13px] font-semibold text-white/60">
              Residential from $200+ • Commercial from $250+ • Hourly from $25/hr — personalized quotes always.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
