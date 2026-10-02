import { useEffect, useState } from "react";
import { Menu, X, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      {/* Top ribbon */}
      <div className="fixed inset-x-0 top-0 z-[60] bg-forest-900 text-cream-50">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-[12px] font-medium tracking-wide sm:justify-between sm:text-[12.5px]">
          <p className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="h-3.5 w-3.5 text-gold-300" />
            <span>Bloomington, Indiana — Serving Customers Throughout Indiana</span>
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <MapPin className="h-3.5 w-3.5 text-gold-300" />
            <span>Bloomington, IN • Serving Indiana</span>
          </p>
          <a href="#quote" className="hidden items-center gap-1 text-gold-200 transition hover:text-white sm:flex">
            Request a quote online <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 top-[30px] z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/95 shadow-[0_8px_30px_-12px_rgb(11_47_36/0.25)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/55 to-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center" aria-label="Faithful Touch Cleanings — Home">
            <span
              className={`rounded-2xl px-2 py-1 transition-all duration-300 ${
                scrolled ? "bg-transparent" : "bg-cream-50/95 shadow-lg backdrop-blur"
              }`}
            >
              <Logo variant="horizontal" />
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-200 ${
                    scrolled
                      ? "text-charcoal-900 hover:bg-forest-50 hover:text-forest-800"
                      : "text-white/95 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-[14px] font-bold text-white shadow-[0_10px_28px_-10px_rgb(11_47_36/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-[0_16px_34px_-10px_rgb(11_47_36/0.65)]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              scrolled ? "bg-forest-800 text-white" : "bg-cream-50 text-forest-900 shadow-lg"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-x-3 top-[104px] overflow-hidden rounded-3xl bg-cream-50 shadow-2xl transition-all duration-400 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="max-h-[70vh] overflow-y-auto p-4">
            <ul className="divide-y divide-forest-800/8">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-[16px] font-bold text-charcoal-900 transition hover:bg-forest-50"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-forest-700" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid gap-3 p-2 pt-4">
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-forest-800 px-6 py-4 text-[15px] font-bold text-white shadow-lg"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-forest-800/15 bg-white px-6 py-4 text-[15px] font-bold text-forest-800"
              >
                Book a Cleaning
              </a>
              <p className="pb-2 text-center text-[12px] font-medium tracking-wide text-charcoal-500">
                Bloomington, IN • Serving Throughout Indiana
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
