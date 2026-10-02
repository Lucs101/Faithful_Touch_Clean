import { ArrowRight, ArrowUpRight, BedDouble, Building2, Clock3, Home, KeyRound, LogOut, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

type Service = {
  id: string;
  num: string;
  icon: typeof Home;
  title: string;
  desc: string;
  image: string;
  alt: string;
  price?: string;
  priceNote?: string;
  bullets?: string[];
  cta: string;
  accent: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "residential",
    num: "01",
    icon: Home,
    title: "Residential Cleaning",
    desc: "Professional cleaning for homes that need a fresh, comfortable, and well-maintained space — kitchens, bathrooms, living areas, and bedrooms handled with care.",
    image: IMAGES.residential,
    alt: "Bright, freshly cleaned modern living room in Indiana home",
    price: "Starting at $200+",
    priceNote: "Final price depends on the property and cleaning requirements.",
    cta: "Request a Residential Quote",
    accent: "bg-forest-800",
    featured: true,
  },
  {
    id: "commercial",
    num: "02",
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Reliable cleaning for businesses and commercial spaces, helping keep work environments clean, presentable, and welcoming for staff and visitors.",
    image: IMAGES.commercial,
    alt: "Clean modern commercial office space ready for business",
    price: "Starting at $250+",
    priceNote: "Varies by size, requirements, frequency & scope. Contract pricing available by discussion.",
    cta: "Request a Commercial Quote",
    accent: "bg-wood-700",
    featured: true,
  },
  {
    id: "move-in",
    num: "03",
    icon: KeyRound,
    title: "Move-In Cleaning",
    desc: "Give your new space a fresh start with detailed cleaning before you settle in — arrive to a home that already feels like yours.",
    image: IMAGES.moveInEmpty,
    alt: "Empty bright home being prepared with move-in cleaning",
    bullets: ["New homeowners", "Renters", "Property managers", "Newly occupied properties"],
    cta: "Get a Move-In Quote",
    accent: "bg-forest-700",
  },
  {
    id: "move-out",
    num: "04",
    icon: LogOut,
    title: "Move-Out Cleaning",
    desc: "Leave your previous space clean, refreshed, and ready for its next occupant — a smooth, respectful handoff.",
    image: IMAGES.moveOut,
    alt: "Freshly cleaned empty living room after move-out cleaning",
    bullets: ["Renters", "Homeowners", "Landlords", "Property managers"],
    cta: "Request a Move-Out Quote",
    accent: "bg-forest-700",
  },
  {
    id: "airbnb",
    num: "05",
    icon: BedDouble,
    title: "Airbnb & Short-Term Rental Cleaning",
    desc: "Keep rental properties clean, fresh, and ready for the next guest with dependable turnover cleaning between every stay.",
    image: IMAGES.bedroom,
    alt: "Neatly prepared Airbnb bedroom with fresh linens",
    bullets: ["Freshly made beds", "Clean bathrooms", "Clean kitchens", "Fresh towels & tidy rooms"],
    cta: "Request Rental Cleaning",
    accent: "bg-gold-600",
  },
  {
    id: "padsplit",
    num: "06",
    icon: Sparkles,
    title: "PadSplit Cleaning",
    desc: "Cleaning support for PadSplit properties and shared residential spaces, with attention to the areas that matter most to residents and property operators.",
    image: IMAGES.shared,
    alt: "Welcoming shared residential living space cleaned for PadSplit residents",
    cta: "Request PadSplit Cleaning",
    accent: "bg-forest-800",
  },
  {
    id: "hourly",
    num: "07",
    icon: Clock3,
    title: "Hourly Cleaning",
    desc: "Need help with a specific cleaning task or want to customize the amount of cleaning time? Hourly cleaning is available starting at $25/hour.",
    image: IMAGES.wipe,
    alt: "Detail cleaning of a glass table during hourly cleaning service",
    price: "Starting at $25/hour",
    priceNote: "Final pricing may vary depending on the work requested and time required.",
    cta: "Request Hourly Cleaning",
    accent: "bg-wood-600",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isWide = service.featured;
  return (
    <Reveal delay={(index % 2) as 0 | 1} className={isWide ? "lg:col-span-6" : "lg:col-span-6"}>
      <article
        id={`service-${service.id}`}
        className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-[28px] border border-forest-800/10 bg-white shadow-[0_14px_40px_-18px_rgb(11_47_36/0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-20px_rgb(11_47_36/0.35)]"
      >
        <div className={`relative overflow-hidden ${isWide ? "h-64 sm:h-72" : "h-60 sm:h-64"}`}>
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${service.accent} text-cream-50 shadow-lg`}>
              <service.icon className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <span className="rounded-full bg-cream-50/95 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-forest-900 backdrop-blur">
              {service.num}
            </span>
          </div>
          {service.price && (
            <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-2 text-[13px] font-extrabold text-forest-950 shadow-lg">
              {service.price}
            </span>
          )}
          <span className="absolute bottom-4 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-forest-900 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="font-display text-[24px] font-semibold leading-tight tracking-tight text-charcoal-900 sm:text-[26px]">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-charcoal-500">{service.desc}</p>

          {service.bullets && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-forest-800/12 bg-forest-50 px-3 py-1.5 text-[12.5px] font-semibold text-forest-800"
                >
                  {b}
                </li>
              ))}
            </ul>
          )}

          {service.priceNote && (
            <p className="mt-4 rounded-2xl bg-cream-100 px-4 py-3 text-[12.5px] leading-relaxed text-wood-800">
              <span className="font-bold">Good to know: </span>
              {service.priceNote}
            </p>
          )}

          <a
            href="#quote"
            className="mt-6 inline-flex items-center justify-between rounded-2xl bg-forest-800 px-5 py-4 text-[14px] font-bold text-white transition-all duration-300 hover:bg-forest-700"
            aria-label={`${service.cta} — Faithful Touch Cleanings`}
          >
            {service.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default function Services() {
  const featuredPair = [SERVICES[0], SERVICES[1]];
  const midPair = [SERVICES[2], SERVICES[3]];
  const rentalPair = [SERVICES[4], SERVICES[5]];
  const hourly = SERVICES[6];

  return (
    <section id="services" className="relative scroll-mt-24 bg-cream-50 py-20 sm:py-28" aria-label="Cleaning services">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold-600" />
            Our Services
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            Cleaning Services <span className="italic text-forest-700">Tailored</span> to Your Space
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-charcoal-500 sm:text-[17px]">
            Whether it's your home, business, rental property, or a space between tenants, Faithful Touch
            Cleanings provides dependable cleaning tailored to your needs.
          </p>
        </Reveal>

        {/* Featured: Residential + Commercial */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {featuredPair.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Move in / out */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {midPair.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Airbnb / PadSplit */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {rentalPair.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Hourly — full width banner card */}
        <Reveal className="mt-6">
          <article id="service-hourly" className="group grid scroll-mt-32 overflow-hidden rounded-[28px] border border-gold-600/20 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 shadow-[0_20px_60px_-20px_rgb(11_47_36/0.5)] lg:grid-cols-2">
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-[340px]">
              <img
                src={hourly.image}
                alt={hourly.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-900/40 lg:bg-gradient-to-r lg:from-transparent lg:to-forest-900/60" />
              <span className="absolute left-5 top-5 rounded-full bg-cream-50/95 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-forest-900">
                {hourly.num}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500/15 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-300 ring-1 ring-gold-500/30">
                <Clock3 className="h-4 w-4" />
                Flexible Option
              </span>
              <h3 className="mt-4 font-display text-[30px] font-semibold tracking-tight text-white sm:text-[36px]">
                {hourly.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">{hourly.desc}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold-500 px-5 py-2.5 text-[14px] font-extrabold text-forest-950">
                  {hourly.price}
                </span>
                <span className="text-[12.5px] text-white/70">{hourly.priceNote}</span>
              </div>
              <a
                href="#quote"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-extrabold text-forest-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
              >
                {hourly.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
