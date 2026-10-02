import { ArrowRight, BadgeCheck, Building2, Clock3, Home, Info } from "lucide-react";
import Reveal from "./Reveal";

const PLANS = [
  {
    icon: Home,
    name: "Residential",
    price: "$200+",
    prefix: "Starting at",
    desc: "For residential cleaning — homes that need a fresh, comfortable, well-maintained space.",
    features: ["Homes of all sizes", "Personalized quote", "One-time or recurring"],
    cta: "Get My Quote",
    highlight: false,
  },
  {
    icon: Building2,
    name: "Commercial",
    price: "$250+",
    prefix: "Starting at",
    desc: "For businesses and commercial spaces — clean, presentable, welcoming work environments.",
    features: ["Offices & businesses", "Scope-based pricing", "Contract options available"],
    cta: "Get My Quote",
    highlight: true,
  },
  {
    icon: Clock3,
    name: "Hourly",
    price: "$25/hr",
    prefix: "Starting at",
    desc: "For customers who prefer an hourly cleaning option — customize the time you need.",
    features: ["Specific tasks", "Flexible time", "Work-based pricing"],
    cta: "Get My Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-forest-900 py-20 sm:py-28" aria-label="Starting prices">
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-forest-600/20 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold-600/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300 backdrop-blur">
            <BadgeCheck className="h-4 w-4" />
            Honest Starting Prices
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[48px]">
            Simple Starting Prices. <span className="italic text-gold-300">Personalized Quotes.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-[16px]">
            These are starting prices — not rigid packages or guaranteed flat rates. Every space is
            different, so every quote is personalized to your property and needs.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i as 0 | 1 | 2}>
              <article
                className={`relative flex h-full flex-col rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-2 sm:p-9 ${
                  plan.highlight
                    ? "bg-cream-50 shadow-[0_30px_70px_-20px_rgb(0_0_0/0.5)] ring-2 ring-gold-400"
                    : "border border-white/12 bg-white/[0.06] backdrop-blur-md hover:border-white/25 hover:bg-white/[0.09]"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-forest-950 shadow-lg">
                    Most Requested
                  </span>
                )}
                <span
                  className={`flex h-13 w-13 items-center justify-center rounded-2xl p-3.5 ${
                    plan.highlight ? "bg-forest-800 text-gold-300" : "bg-white/10 text-gold-300"
                  }`}
                >
                  <plan.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className={`mt-5 text-[13px] font-extrabold uppercase tracking-[0.22em] ${plan.highlight ? "text-forest-700" : "text-gold-300"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-[14px] font-medium ${plan.highlight ? "text-charcoal-500" : "text-white/60"}`}>{plan.prefix}</p>
                <p className={`font-display text-[56px] font-semibold leading-none tracking-tight ${plan.highlight ? "text-forest-900" : "text-white"}`}>
                  {plan.price}
                </p>
                <p className={`mt-4 text-[14px] leading-relaxed ${plan.highlight ? "text-charcoal-500" : "text-white/70"}`}>{plan.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-[13.5px] font-semibold ${plan.highlight ? "text-charcoal-900" : "text-white/85"}`}>
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.highlight ? "bg-forest-800 text-white" : "bg-gold-500/20 text-gold-300"}`}>
                        <BadgeCheck className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[14px] font-extrabold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-forest-800 text-white hover:bg-forest-700"
                      : "bg-white text-forest-900 hover:bg-gold-300"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-start gap-3 rounded-3xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md sm:items-center sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-300">
              <Info className="h-5 w-5" />
            </span>
            <p className="text-[13.5px] leading-relaxed text-white/80 sm:text-[14px]">
              <span className="font-bold text-white">Commercial contracts & specialized needs</span> are
              priced according to the property, scope of work, frequency, and specific requirements.{" "}
              <a href="#quote" className="font-bold text-gold-300 underline decoration-gold-500/50 underline-offset-4 hover:text-gold-200">
                Get My Quote
              </a>{" "}
              to receive personalized pricing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
