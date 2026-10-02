import { ArrowRight, Camera, Heart, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-cream-50 py-20 sm:py-28" aria-label="About Faithful Touch Cleanings">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo side */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 overflow-hidden rounded-[28px] shadow-[0_20px_50px_-20px_rgb(11_47_36/0.4)]">
                  <img
                    src={IMAGES.team}
                    alt="Professional cleaners caring for a bright modern kitchen"
                    loading="lazy"
                    className="h-full min-h-[320px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-4">
                  <div className="flex-1 overflow-hidden rounded-[28px] shadow-[0_20px_50px_-20px_rgb(11_47_36/0.4)]">
                    <img
                      src={IMAGES.cozy}
                      alt="Warm welcoming living room after a faithful clean"
                      loading="lazy"
                      className="h-full min-h-[150px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                    />
                  </div>
                  {/* Owner photo placeholder */}
                  <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-[28px] border-2 border-dashed border-forest-800/20 bg-white p-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                      <Camera className="h-5 w-5" />
                    </span>
                    <p className="text-[13px] font-extrabold text-charcoal-900">Owner / Team Photo</p>
                    <p className="text-[12px] leading-relaxed text-charcoal-500">
                      A welcoming space reserved for real Faithful Touch photography.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-forest-800 px-5 py-3.5 text-white shadow-xl">
                <Heart className="h-5 w-5 fill-gold-400 text-gold-400" />
                <p className="text-[13px] font-bold">Care • Integrity • Attention to Detail</p>
              </div>
            </div>
          </Reveal>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
                About Us
              </p>
              <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-charcoal-900 sm:text-[46px]">
                Cleaning With Care. <span className="italic text-forest-700">Service With Purpose.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal-500 sm:text-[16px]">
                <p>
                  Faithful Touch Cleanings was built on a simple belief — that a clean space brings{" "}
                  <span className="font-bold text-charcoal-900">comfort, peace, and confidence</span>{" "}
                  to the people who live and work in it.
                </p>
                <p>
                  Based in <span className="font-bold text-charcoal-900">Bloomington, Indiana</span>,
                  we serve customers throughout Indiana with dependable residential and commercial
                  cleaning — from family homes and offices to Airbnb turnovers, PadSplit properties,
                  and move-in/move-out cleans.
                </p>
                <p>
                  Every visit is guided by <span className="font-bold text-charcoal-900">care,
                  integrity, and attention to detail</span> — so your space doesn't just look clean,
                  it feels fresh, welcoming, and beautifully cared for.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <figure className="mt-7 rounded-3xl border border-gold-600/20 bg-gold-100/50 p-6">
                <Quote className="h-6 w-6 text-gold-600" />
                <blockquote className="mt-2 font-display text-[18px] italic leading-relaxed text-wood-800">
                  Clean spaces, brighter days — that's the feeling we want to leave behind in every
                  home and business we touch.
                </blockquote>
              </figure>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-[14px] font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-800/15 bg-white px-7 py-3.5 text-[14px] font-bold text-forest-800 transition hover:border-forest-800"
                >
                  See How It Works
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
