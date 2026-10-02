import { useState } from "react";
import { ArrowRight, HelpCircle, Minus, Plus } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 bg-white py-20 sm:py-28" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-cream-50 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700">
            <HelpCircle className="h-3.5 w-3.5 text-gold-600" />
            FAQ
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            Questions? <span className="italic text-forest-700">Answered.</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-forest-700/25 bg-cream-50 shadow-[0_16px_40px_-20px_rgb(11_47_36/0.35)]"
                      : "border-forest-800/10 bg-cream-50/50 hover:border-forest-800/20 hover:bg-cream-50"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-[15px] font-extrabold tracking-tight text-charcoal-900 sm:text-[16px]">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "bg-forest-800 text-white" : "bg-white text-forest-800 shadow-sm ring-1 ring-forest-800/10"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-charcoal-500 sm:px-7">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-[15px] font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
          >
            Still curious? Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
