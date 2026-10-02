import { HeartHandshake, Leaf, MessagesSquare, ScanSearch } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Care",
    text: "Every space deserves thoughtful attention.",
  },
  {
    icon: MessagesSquare,
    title: "Integrity",
    text: "Clear communication and dependable service.",
  },
  {
    icon: ScanSearch,
    title: "Attention to Detail",
    text: "A thorough approach to the areas that matter.",
  },
  {
    icon: Leaf,
    title: "A Fresh Start",
    text: "Clean spaces designed to feel comfortable and welcoming.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-20 sm:py-28" aria-label="Why Faithful Touch Cleanings">
      <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-forest-50 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-cream-50 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700">
                Our Philosophy
              </p>
              <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-charcoal-900 sm:text-[46px]">
                A Cleaner Space Brings More <span className="italic text-forest-700">Peace</span> to Your Day
              </h2>
              <blockquote className="mt-6 border-l-4 border-gold-500 pl-5 font-display text-[20px] italic leading-relaxed text-forest-900 sm:text-[22px]">
                “At Faithful Touch Cleanings, we believe a clean space brings comfort, peace, and
                confidence.”
              </blockquote>
              <p className="mt-5 text-[15px] leading-relaxed text-charcoal-500 sm:text-[16px]">
                We provide dependable residential and commercial cleaning with care, integrity, and
                attention to detail. From homes and offices to Airbnb, PadSplit, move-in, and
                move-out cleaning, we're committed to making every space feel fresh, welcoming, and
                beautifully clean.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) as 0 | 1}>
                  <div className="group flex h-full items-start gap-3.5 rounded-3xl border border-forest-800/10 bg-cream-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-18px_rgb(11_47_36/0.3)]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-gold-300 transition-transform duration-300 group-hover:scale-105">
                      <v.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[15px] font-extrabold text-charcoal-900">{v.title}</span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-charcoal-500">{v.text}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={1}>
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-[0_30px_70px_-24px_rgb(11_47_36/0.45)]">
                <img
                  src={IMAGES.detail}
                  alt="Close-up of detailed cleaning with care and attention"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-4 right-4 sm:left-8 sm:right-auto">
                <div className="flex items-center gap-4 rounded-3xl border border-forest-800/10 bg-white/95 p-5 shadow-xl backdrop-blur-md">
                  <img
                    src={IMAGES.mirror}
                    alt="Freshly cleaned mirror reflecting a bright room"
                    loading="lazy"
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="font-display text-[17px] font-semibold italic text-forest-900">
                      “Comfort, peace & confidence.”
                    </p>
                    <p className="mt-0.5 text-[12.5px] font-semibold text-charcoal-500">
                      The Faithful Touch standard
                    </p>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -right-3 -top-4 rotate-3 rounded-2xl bg-gold-500 px-5 py-3 shadow-lg sm:-right-4">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-forest-950">Bloomington, IN</p>
                <p className="text-[13px] font-bold text-forest-950">Serving Indiana</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
