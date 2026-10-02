import { ArrowRight, MapPin, Navigation, Send } from "lucide-react";
import Reveal from "./Reveal";

/* Stylized Indiana silhouette — decorative, not to survey scale */
function IndianaMap() {
  return (
    <svg viewBox="0 0 320 520" className="h-full w-full" role="img" aria-label="Stylized map of Indiana highlighting Bloomington">
      <defs>
        <linearGradient id="in-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14543F" />
          <stop offset="100%" stopColor="#0B2F24" />
        </linearGradient>
        <radialGradient id="in-glow" cx="50%" cy="62%" r="55%">
          <stop offset="0%" stopColor="#CFA14A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#CFA14A" stopOpacity="0" />
        </radialGradient>
        <filter id="in-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#0B2F24" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Backdrop rings */}
      <circle cx="160" cy="330" r="150" fill="url(#in-glow)" />
      {[190, 150, 112].map((r) => (
        <circle key={r} cx="160" cy="330" r={r} fill="none" stroke="#0E3B2E" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="6 8" />
      ))}

      {/* Indiana shape */}
      <g filter="url(#in-shadow)">
        <path
          d="M118 18 L196 18 L202 60 L208 120 L214 180 L220 250 L226 320 L210 352 L196 372 L188 396 L172 420 L150 446 L128 470 L104 486 L88 470 L78 440 L70 400 L64 350 L58 290 L54 220 L52 150 L50 90 L56 40 Z"
          fill="url(#in-fill)"
          stroke="#CFA14A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Subtle topography lines */}
        <path d="M70 140 L200 140" stroke="#fff" strokeOpacity="0.07" strokeWidth="14" strokeLinecap="round" />
        <path d="M66 230 L214 230" stroke="#fff" strokeOpacity="0.06" strokeWidth="18" strokeLinecap="round" />
        <path d="M72 320 L220 320" stroke="#fff" strokeOpacity="0.07" strokeWidth="14" strokeLinecap="round" />
      </g>

      {/* Bloomington marker */}
      <g>
        <circle cx="138" cy="352" r="26" fill="#CFA14A" opacity="0.25">
          <animate attributeName="r" values="18;30;18" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.08;0.4" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="138" cy="352" r="9" fill="#EED9A8" stroke="#0B2F24" strokeWidth="3" />
        <circle cx="138" cy="352" r="3.2" fill="#0B2F24" />
      </g>

      {/* Labels */}
      <g fontFamily="'Plus Jakarta Sans', sans-serif">
        <text x="160" y="120" textAnchor="middle" fill="#fff" fillOpacity="0.9" fontSize="15" fontWeight="800" letterSpacing="4">INDIANA</text>
        <text x="160" y="140" textAnchor="middle" fill="#EED9A8" fillOpacity="0.75" fontSize="9.5" fontWeight="600" letterSpacing="2.5">STATEWIDE SERVICE</text>
      </g>

      {/* Bloomington callout */}
      <g>
        <rect x="158" y="330" width="132" height="52" rx="14" fill="#FDFBF6" stroke="#CFA14A" strokeWidth="1.5" />
        <circle cx="150" cy="352" r="4" fill="#CFA14A" />
        <text x="172" y="351" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12.5" fontWeight="800" fill="#0B2F24">Bloomington, IN</text>
        <text x="172" y="367" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="600" fill="#5C6861">Home base ★</text>
      </g>
    </svg>
  );
}

export default function ServiceArea() {
  return (
    <section id="service-area" className="relative scroll-mt-24 overflow-hidden bg-forest-950 py-20 sm:py-28" aria-label="Service area">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-forest-600/20 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300 backdrop-blur">
                <Navigation className="h-3.5 w-3.5" />
                Service Area
              </p>
              <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Serving Customers <span className="italic text-gold-300">Throughout Indiana</span>
              </h2>
              <p className="mt-4 flex items-center gap-2 text-[15px] font-bold text-white">
                <MapPin className="h-5 w-5 text-gold-400" />
                Based in Bloomington, IN — traveling to customers statewide
              </p>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
                From homes and businesses to rentals and move-in/move-out cleans, Faithful Touch
                Cleanings brings dependable service to communities across Indiana.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Residential homes", d: "Houses, condos & apartments" },
                  { t: "Businesses", d: "Offices & commercial spaces" },
                  { t: "Rentals & Airbnb", d: "Turnovers & guest-ready" },
                  { t: "Transitions", d: "Move-in / move-out" },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                    <p className="text-[14px] font-extrabold text-white">{c.t}</p>
                    <p className="mt-0.5 text-[12.5px] text-white/60">{c.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-gold-500/25 bg-gold-500/10 p-6 backdrop-blur">
                <p className="text-[15px] font-bold text-white">
                  Not sure if we service your area?
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-white/70">
                  Send us your location and we'll let you know.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-[14px] font-extrabold text-forest-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
                  >
                    Check My Service Area
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-white/10"
                  >
                    <Send className="h-4 w-4" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative mx-auto aspect-[320/520] w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-white/[0.07] to-transparent" aria-hidden="true" />
              <IndianaMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
