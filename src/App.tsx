import { ArrowRight, CalendarCheck } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import QuoteForm from "./components/QuoteForm";
import HowItWorks from "./components/HowItWorks";
import BeforeAfter from "./components/BeforeAfter";
import WhyUs from "./components/WhyUs";
import Certification from "./components/Certification";
import ServiceArea from "./components/ServiceArea";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
      <div className="flex gap-2.5 rounded-3xl border border-white/10 bg-forest-950/92 p-2.5 shadow-[0_20px_50px_-12px_rgb(0_0_0/0.55)] backdrop-blur-xl">
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-gold-500 px-4 py-3.5 text-[14px] font-extrabold text-forest-950"
        >
          Get a Quote <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#quote-booking"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-white/12 px-4 py-3.5 text-[14px] font-bold text-white ring-1 ring-white/20"
        >
          <CalendarCheck className="h-4 w-4" /> Book Now
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans text-charcoal-900 antialiased">
      {/* Skip link for accessibility */}
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to services
      </a>

      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Pricing />
        <QuoteForm />
        <HowItWorks />
        <BeforeAfter />
        <WhyUs />
        <Certification />
        <ServiceArea />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
      <MobileStickyCTA />

      {/* Spacer so sticky mobile CTA never covers footer content */}
      <div className="h-20 bg-forest-950 lg:hidden" aria-hidden="true" />
    </div>
  );
}
