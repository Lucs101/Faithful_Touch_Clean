import { Building2, Home, MapPinned, SlidersHorizontal } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Home,
    title: "Residential Cleaning",
    text: "Homes cleaned with care and attention to detail.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    text: "Professional cleaning for businesses and commercial spaces.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Services",
    text: "From recurring cleaning to specialized cleaning needs.",
  },
  {
    icon: MapPinned,
    title: "Indiana Service Area",
    text: "Serving customers throughout Indiana.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-20 bg-cream-50" aria-label="Why choose Faithful Touch Cleanings">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 pb-4 pt-2 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group flex h-full items-start gap-4 rounded-3xl border border-forest-800/10 bg-white p-6 shadow-[0_10px_30px_-14px_rgb(11_47_36/0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/25 hover:shadow-[0_20px_44px_-16px_rgb(11_47_36/0.28)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-gold-300 transition-colors duration-300 group-hover:bg-forest-700">
                  <item.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[15px] font-extrabold tracking-tight text-charcoal-900">{item.title}</span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-charcoal-500">{item.text}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
