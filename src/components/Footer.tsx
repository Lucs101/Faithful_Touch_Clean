import { ArrowRight, ArrowUp, MapPin } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data";

const SERVICES = [
  { label: "Residential Cleaning", href: "#service-residential" },
  { label: "Commercial Cleaning", href: "#service-commercial" },
  { label: "Move-In Cleaning", href: "#service-move-in" },
  { label: "Move-Out Cleaning", href: "#service-move-out" },
  { label: "Airbnb Cleaning", href: "#service-airbnb" },
  { label: "PadSplit Cleaning", href: "#service-padsplit" },
  { label: "Hourly Cleaning", href: "#service-hourly" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream-50" aria-label="Footer">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest-700/20 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="inline-block rounded-[28px] bg-cream-50 px-8 py-6 shadow-xl">
              <Logo variant="stacked" />
            </div>
            <p className="mt-6 flex items-center gap-2 text-[14px] font-bold text-gold-300">
              <MapPin className="h-4 w-4" />
              Bloomington, Indiana — Serving Indiana
            </p>
            <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-white/60">
              Dependable residential and commercial cleaning with care, integrity, and attention to
              detail.
            </p>
            <a
              href="#quote"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-[14px] font-extrabold text-forest-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Links */}
          <nav className="lg:col-span-3" aria-label="Footer quick links">
            <h3 className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14.5px] font-semibold text-white/75 transition hover:text-white hover:underline hover:decoration-gold-500/60 hover:underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#pricing" className="text-[14.5px] font-semibold text-white/75 transition hover:text-white hover:underline hover:decoration-gold-500/60 hover:underline-offset-4">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[14.5px] font-semibold text-white/75 transition hover:text-white hover:underline hover:decoration-gold-500/60 hover:underline-offset-4">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Footer services">
            <h3 className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-[14.5px] font-semibold text-white/75 transition hover:text-white hover:underline hover:decoration-gold-500/60 hover:underline-offset-4">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Booking card */}
          <div className="lg:col-span-2">
            <h3 className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300">Get Started</h3>
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <p className="font-display text-[18px] font-semibold leading-snug text-white">
                Clean Spaces, Brighter Days.
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                Request a quote or book your cleaning online today.
              </p>
              <a href="#quote-booking" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-[13.5px] font-extrabold text-forest-900 transition hover:bg-gold-300">
                Book a Cleaning
              </a>
              <a
                href="#home"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[13px] font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] font-semibold text-white/55">
            © {new Date().getFullYear()} Faithful Touch Cleanings • Bloomington, Indiana
          </p>
          <p className="text-[12.5px] font-medium tracking-wide text-white/40">
            Clean Spaces, Brighter Days • Serving Customers Throughout Indiana
          </p>
        </div>
      </div>
    </footer>
  );
}
