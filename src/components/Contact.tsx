import { ArrowRight, AtSign, Clock3, Globe, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Phone",
    main: "Phone number coming soon",
    sub: "Call or text details will be listed here.",
  },
  {
    icon: Mail,
    title: "Email",
    main: "Email address coming soon",
    sub: "Quote requests via the online form for now.",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    main: "Hours coming soon",
    sub: "Share your preferred date & time in the form.",
  },
  {
    icon: MapPin,
    title: "Location",
    main: "Bloomington, Indiana",
    sub: "Serving customers throughout Indiana.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-cream-50 py-20 sm:py-28" aria-label="Contact Faithful Touch Cleanings">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
                Get In Touch
              </p>
              <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[44px]">
                Let's Talk About <span className="italic text-forest-700">Your Space</span>
              </h2>
              <p className="mt-4 text-[15px] font-bold text-charcoal-900">Faithful Touch Cleanings</p>
              <p className="text-[14.5px] text-charcoal-500">Bloomington, Indiana • Serving Throughout Indiana</p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {CONTACT_CARDS.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) as 0 | 1}>
                  <div className="flex h-full items-start gap-3.5 rounded-3xl border border-forest-800/10 bg-white p-5 shadow-[0_10px_30px_-14px_rgb(11_47_36/0.25)]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-gold-300">
                      <c.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-forest-700">{c.title}</span>
                      <span className="mt-1 block text-[14px] font-extrabold text-charcoal-900">{c.main}</span>
                      <span className="mt-0.5 block text-[12.5px] leading-relaxed text-charcoal-500">{c.sub}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={1}>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#contact"
                  aria-label="Facebook — link coming soon"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/12 bg-white text-forest-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-800 hover:text-white"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  aria-label="Instagram — link coming soon"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800/12 bg-white text-forest-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-800 hover:text-white"
                >
                  <AtSign className="h-5 w-5" />
                </a>
                <p className="text-[12.5px] font-semibold text-charcoal-300">Social links coming soon</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1} className="lg:col-span-7">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[32px] bg-forest-900 p-8 shadow-[0_28px_70px_-24px_rgb(11_47_36/0.5)] sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-[80px]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
              <div className="relative">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-gold-300">
                  Fastest way to reach us
                </p>
                <h3 className="mt-3 font-display text-[30px] font-semibold leading-tight text-white sm:text-[38px]">
                  Request your quote online in under 2 minutes.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                  Share your property details and preferred timing — we'll follow up with personalized
                  pricing and next steps.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-[15px] font-extrabold text-forest-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#quote-booking"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[15px] font-bold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Book an Appointment
                  </a>
                </div>
                <dl className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                  {[
                    { k: "Residential", v: "from $200+" },
                    { k: "Commercial", v: "from $250+" },
                    { k: "Hourly", v: "from $25/hr" },
                  ].map((r) => (
                    <div key={r.k}>
                      <dt className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-white/50">{r.k}</dt>
                      <dd className="mt-1 font-display text-[22px] font-semibold text-gold-300">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
