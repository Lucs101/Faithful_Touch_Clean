import { ArrowRight, CalendarCheck, ClipboardList, Tag } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Tell Us What You Need",
    desc: "Choose your service and provide a few details about your property.",
  },
  {
    num: "02",
    icon: Tag,
    title: "Get Your Quote",
    desc: "Faithful Touch Cleanings reviews your request and provides pricing based on your specific needs.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Schedule Your Cleaning",
    desc: "Choose an appointment and get your space ready for a cleaner, brighter day.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28" aria-label="How it works">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-forest-800/15 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-cream-50 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700">
            Simple Process
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            Three Steps to a <span className="italic text-forest-700">Brighter Space</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Connector line */}
          <div className="absolute left-[13%] right-[13%] top-10 hidden h-px bg-gradient-to-r from-forest-800/10 via-gold-500/50 to-forest-800/10 lg:block" aria-hidden="true" />
          <ol className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i as 0 | 1 | 2}>
                <li className="group relative flex h-full flex-col items-center rounded-[28px] border border-forest-800/10 bg-cream-50 p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-forest-700/25 hover:bg-white hover:shadow-[0_24px_50px_-20px_rgb(11_47_36/0.3)] sm:p-10">
                  <span className="absolute right-6 top-6 font-display text-[44px] font-semibold leading-none text-forest-800/8 transition-colors duration-300 group-hover:text-gold-500/20">
                    {step.num}
                  </span>
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-[24px] bg-forest-800 text-gold-300 shadow-[0_16px_36px_-12px_rgb(11_47_36/0.55)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    <step.icon className="h-8 w-8" strokeWidth={1.7} />
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-[13px] font-extrabold text-forest-950 ring-4 ring-cream-50">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 text-[20px] font-extrabold tracking-tight text-charcoal-900">{step.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-500">{step.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={2} className="mt-10 text-center">
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-[15px] font-extrabold text-white shadow-[0_16px_36px_-14px_rgb(11_47_36/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
          >
            Start Step 1 — Tell Us What You Need
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
