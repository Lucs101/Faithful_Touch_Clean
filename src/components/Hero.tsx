import { ArrowRight, CalendarCheck, ChevronDown, MapPin, Sparkles, Star } from "lucide-react";
import { HERO_VIDEO_HD, HERO_VIDEO_UHD, HERO_POSTER } from "../data";

const SERVICE_PILLS = [
  "Residential",
  "Commercial",
  "Airbnb",
  "PadSplit",
  "Move-In / Move-Out",
  "Hourly",
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-950 sm:items-center" aria-label="Welcome to Faithful Touch Cleanings">
      {/* Video background — HD first for performance, UHD fallback */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_HD} type="video/mp4" />
          <source src={HERO_VIDEO_UHD} type="video/mp4" />
        </video>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-forest-950/40" />
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6 sm:pb-28 sm:pt-44 lg:px-8">
        <div className="max-w-3xl">
          <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12.5px] font-semibold tracking-wide text-cream-50 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-gold-300" />
            <span>Bloomington, Indiana • Serving Customers Throughout Indiana</span>
          </div>

          <p className="hero-enter hero-enter-2 mt-5 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.28em] text-gold-300">
            <Sparkles className="h-4 w-4" />
            Faithful Touch Cleanings
          </p>

          <h1 className="hero-enter hero-enter-2 mt-3 font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-white sm:text-[68px] lg:text-[80px]">
            Clean Spaces.
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold-200 via-gold-300 to-gold-400 bg-clip-text text-transparent">
                Brighter Days.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 14" fill="none" aria-hidden="true">
                <path d="M4 10 C 80 3, 200 3, 296 8" stroke="#CFA14A" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              </svg>
            </span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-6 max-w-xl text-[16px] leading-relaxed text-white/85 sm:text-[18px]">
            Reliable residential and commercial cleaning services throughout Indiana — from homes and
            businesses to Airbnb, PadSplit, and move-in/move-out cleaning.
          </p>

          <div className="hero-enter hero-enter-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-[15px] font-extrabold text-forest-950 shadow-[0_18px_40px_-12px_rgb(183_138_46/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_22px_48px_-12px_rgb(183_138_46/0.8)]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#quote-booking"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-forest-900"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Cleaning
            </a>
          </div>

          <a
            href="#services"
            className="hero-enter hero-enter-5 group mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-white/75 transition hover:text-white"
          >
            Explore Our Services
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 transition group-hover:border-white/60">
              <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
            </span>
          </a>

          {/* Service pills */}
          <div className="hero-enter hero-enter-5 mt-8 flex flex-wrap gap-2">
            {SERVICE_PILLS.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full bg-forest-950/50 px-3.5 py-1.5 text-[12.5px] font-semibold text-cream-100 ring-1 ring-white/15 backdrop-blur-md"
              >
                <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom curve into trust strip */}
      <div className="absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 72" className="h-[48px] w-full sm:h-[72px]" preserveAspectRatio="none">
          <path d="M0 72h1440V36C1200 8 960 0 720 10 480 20 240 30 0 44v28z" fill="#FDFBF6" />
        </svg>
      </div>
    </section>
  );
}
