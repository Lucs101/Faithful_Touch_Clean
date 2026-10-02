import { useRef, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Bath,
  Building2,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileText,
  Home,
  ImagePlus,
  Mail,
  MapPin,
  Phone,
  Repeat,
  Ruler,
  Sparkles,
  Trash2,
  User,
  X,
} from "lucide-react";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------
   INTEGRATION POINT — Quote & Booking submissions
   ------------------------------------------------------------------
   This demo stores submissions in local state and shows a success
   screen. To go live, connect `handleSubmit` to your preferred system:

   Option A — Form service (simplest, no backend):
     await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ mode, ...form }),
     });

   Option B — Booking platform (Calendly, Square, Housecall Pro…):
     Replace the success screen with an embedded scheduler, or
     redirect: window.location.href = "https://your-booking-link";

   Option C — Custom API / email notifications:
     POST to your endpoint or trigger via Vercel serverless function.

   Photo uploads: for production, upload to your storage (Uploadthing,
   Cloudinary, S3) and attach URLs to the submission.
------------------------------------------------------------------- */

type Mode = "quote" | "booking";

const PROPERTY_TYPES = ["Residential", "Commercial", "Airbnb / Short-Term Rental", "PadSplit", "Other"];
const SERVICES = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Move-In Cleaning",
  "Move-Out Cleaning",
  "Airbnb / Short-Term Rental",
  "PadSplit",
  "Hourly Cleaning",
  "Other",
];
const FREQUENCIES = ["One-Time", "Weekly", "Biweekly", "Monthly", "Contract", "Other"];
const TIMES = ["Morning (8am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 7pm)", "Flexible"];

const inputCls =
  "field w-full rounded-2xl border border-forest-800/12 bg-cream-50 px-4 py-3.5 text-[14px] font-medium text-charcoal-900 placeholder:text-charcoal-300";
const labelCls = "mb-1.5 flex items-center gap-1.5 text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-forest-800";

function Field({
  label,
  icon: Icon,
  children,
  optional = false,
}: {
  label: string;
  icon?: typeof User;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelCls}>
        {Icon && <Icon className="h-3.5 w-3.5 text-gold-600" />}
        {label}
        {optional && <span className="font-semibold normal-case tracking-normal text-charcoal-300">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

export default function QuoteForm() {
  const [mode, setMode] = useState<Mode>("quote");
  const [submitted, setSubmitted] = useState(false);
  const [photos, setPhotos] = useState<{ name: string; url: string }[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    propertyType: "Residential",
    service: "Residential Cleaning",
    date: "",
    time: "Morning (8am – 12pm)",
    frequency: "One-Time",
    size: "",
    bedrooms: "",
    bathrooms: "",
    details: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handlePhotos = (files: FileList | null) => {
    if (!files) return;
    Array.from(files)
      .slice(0, 6 - photos.length)
      .forEach((file) => {
        const reader = new FileReader();
        reader.onload = () =>
          setPhotos((p) => [...p, { name: file.name, url: reader.result as string }].slice(0, 6));
        reader.readAsDataURL(file);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // INTEGRATION: POST { mode, ...form, photoCount: photos.length } to your endpoint here.
    setSubmitted(true);
    document.getElementById("quote-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const reset = () => {
    setSubmitted(false);
    setPhotos([]);
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      propertyType: "Residential",
      service: "Residential Cleaning",
      date: "",
      time: "Morning (8am – 12pm)",
      frequency: "One-Time",
      size: "",
      bedrooms: "",
      bathrooms: "",
      details: "",
    });
  };

  return (
    <section id="quote" className="relative scroll-mt-24 bg-cream-50 py-20 sm:py-28" aria-label="Request a quote or book a cleaning">
      <div className="texture-linen pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-800/12 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-forest-700 shadow-sm">
            <ClipboardList className="h-3.5 w-3.5 text-gold-600" />
            Online Quote & Booking
          </p>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-[48px]">
            Get a Quote. <span className="italic text-forest-700">Book with Ease.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-charcoal-500">
            Tell us about your space and what you need — Faithful Touch Cleanings will review your
            request and follow up with personalized pricing and scheduling.
          </p>
        </Reveal>

        {/* Mode toggle */}
        <Reveal delay={1} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <div className="inline-flex rounded-full border border-forest-800/12 bg-white p-1.5 shadow-sm" role="tablist" aria-label="Choose request type">
            <button
              role="tab"
              aria-selected={mode === "quote"}
              onClick={() => setMode("quote")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-extrabold transition-all duration-300 ${
                mode === "quote" ? "bg-forest-800 text-white shadow-lg" : "text-charcoal-500 hover:text-forest-800"
              }`}
            >
              <FileText className="h-4 w-4" />
              Get a Quote
            </button>
            <button
              id="quote-booking"
              role="tab"
              aria-selected={mode === "booking"}
              onClick={() => setMode("booking")}
              className={`flex scroll-mt-32 items-center gap-2 rounded-full px-6 py-3 text-[14px] font-extrabold transition-all duration-300 ${
                mode === "booking" ? "bg-gold-500 text-forest-950 shadow-lg" : "text-charcoal-500 hover:text-forest-800"
              }`}
            >
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left — reassurance panel */}
          <Reveal className="lg:col-span-4">
            <aside className="flex h-full flex-col overflow-hidden rounded-[28px] bg-forest-900 p-8 text-white shadow-[0_24px_60px_-20px_rgb(11_47_36/0.5)] sm:p-9">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-gold-300">
                {mode === "quote" ? "How quoting works" : "How booking works"}
              </p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight">
                {mode === "quote" ? "Simple. Personal. No pressure." : "Pick a time. We'll confirm."}
              </h3>
              <ol className="mt-6 space-y-5">
                {[
                  { t: "Share a few details", d: "Service, property type, size, and location." },
                  { t: mode === "quote" ? "Get personalized pricing" : "Choose your preferred time", d: mode === "quote" ? "We review your request and respond with a quote." : "Tell us your ideal date and time window." },
                  { t: "Schedule your cleaning", d: "Pick what works and enjoy a brighter space." },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 text-[14px] font-extrabold text-forest-950">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-bold">{s.t}</span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-white/65">{s.d}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-white/12 bg-white/[0.06] p-5">
                <p className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.14em] text-gold-300">
                  <Sparkles className="h-4 w-4" /> Starting prices
                </p>
                <ul className="mt-3 space-y-2 text-[13.5px] font-semibold text-white/85">
                  <li className="flex justify-between"><span>Residential</span><span className="text-white">$200+</span></li>
                  <li className="flex justify-between"><span>Commercial</span><span className="text-white">$250+</span></li>
                  <li className="flex justify-between"><span>Hourly</span><span className="text-white">$25/hr</span></li>
                </ul>
                <p className="mt-3 text-[12px] leading-relaxed text-white/55">
                  Starting prices only — final pricing depends on property & scope.
                </p>
              </div>

              <div className="mt-auto pt-8 text-[12.5px] leading-relaxed text-white/55">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold-400" /> Bloomington, IN • Serving Throughout Indiana</p>
              </div>
            </aside>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={1} className="lg:col-span-8">
            <div id="quote-result" className="scroll-mt-32 overflow-hidden rounded-[28px] border border-forest-800/10 bg-white shadow-[0_24px_60px_-24px_rgb(11_47_36/0.3)]">
              {submitted ? (
                <div className="p-8 text-center sm:p-14">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    <CheckCircle2 className="h-10 w-10" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-[30px] font-semibold tracking-tight text-charcoal-900 sm:text-[36px]">
                    {mode === "quote" ? "Quote request received!" : "Appointment requested!"}
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-charcoal-500">
                    Thank you, <span className="font-bold text-charcoal-900">{form.name || "friend"}</span>.
                    Faithful Touch Cleanings will review your {form.service.toLowerCase()} request
                    {form.city ? ` in ${form.city}` : ""} and follow up
                    {form.email ? ` at ${form.email}` : ""} shortly.
                  </p>
                  <div className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
                    <div className="rounded-2xl bg-cream-100 p-4 text-[13px]">
                      <p className="font-extrabold uppercase tracking-wide text-forest-800">Service</p>
                      <p className="mt-1 font-semibold text-charcoal-900">{form.service}</p>
                    </div>
                    <div className="rounded-2xl bg-cream-100 p-4 text-[13px]">
                      <p className="font-extrabold uppercase tracking-wide text-forest-800">Preferred</p>
                      <p className="mt-1 font-semibold text-charcoal-900">{form.date || "Flexible"} • {form.time}</p>
                    </div>
                  </div>
                  <p className="mx-auto mt-5 max-w-md text-[12.5px] leading-relaxed text-charcoal-300">
                    Demo note: this form is ready to connect to your email or booking system — see the
                    integration notes in the code.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-forest-800/15 px-7 py-3.5 text-[14px] font-bold text-forest-800 transition hover:border-forest-800 hover:bg-forest-800 hover:text-white"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-10">
                  {/* Contact */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest-800 text-white"><User className="h-5 w-5" /></span>
                    <div>
                      <h3 className="text-[17px] font-extrabold tracking-tight text-charcoal-900">Your contact details</h3>
                      <p className="text-[13px] text-charcoal-500">So we can send your quote & confirm scheduling.</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" icon={User}>
                      <input required value={form.name} onChange={set("name")} placeholder="Jane Smith" className={inputCls} autoComplete="name" />
                    </Field>
                    <Field label="Phone" icon={Phone}>
                      <input required value={form.phone} onChange={set("phone")} placeholder="(812) 555-0123" type="tel" className={inputCls} autoComplete="tel" />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Email" icon={Mail}>
                        <input required value={form.email} onChange={set("email")} placeholder="you@example.com" type="email" className={inputCls} autoComplete="email" />
                      </Field>
                    </div>
                  </div>

                  {/* Property */}
                  <div className="mt-9 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-wood-600 text-white"><Home className="h-5 w-5" /></span>
                    <div>
                      <h3 className="text-[17px] font-extrabold tracking-tight text-charcoal-900">Property details</h3>
                      <p className="text-[13px] text-charcoal-500">Where is the space that needs cleaning?</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Field label="Property Address" icon={MapPin}>
                        <input required value={form.address} onChange={set("address")} placeholder="123 Maple Street" className={inputCls} autoComplete="street-address" />
                      </Field>
                    </div>
                    <Field label="City" icon={MapPin}>
                      <input required value={form.city} onChange={set("city")} placeholder="Bloomington" className={inputCls} autoComplete="address-level2" />
                    </Field>
                    <Field label="ZIP Code" icon={MapPin}>
                      <input required value={form.zip} onChange={set("zip")} placeholder="47401" inputMode="numeric" className={inputCls} autoComplete="postal-code" />
                    </Field>
                    <Field label="Property Type" icon={Building2}>
                      <div className="relative">
                        <select value={form.propertyType} onChange={set("propertyType")} className={`${inputCls} appearance-none pr-10`}>
                          {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-300" />
                      </div>
                    </Field>
                    <Field label="Service Needed" icon={Sparkles}>
                      <div className="relative">
                        <select value={form.service} onChange={set("service")} className={`${inputCls} appearance-none pr-10`}>
                          {SERVICES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-300" />
                      </div>
                    </Field>
                    <Field label="Approx. Property Size" icon={Ruler} optional>
                      <input value={form.size} onChange={set("size")} placeholder="e.g. 1,600 sq ft" className={inputCls} />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Bedrooms" icon={BedDouble} optional>
                        <input value={form.bedrooms} onChange={set("bedrooms")} placeholder="3" inputMode="numeric" className={inputCls} />
                      </Field>
                      <Field label="Bathrooms" icon={Bath} optional>
                        <input value={form.bathrooms} onChange={set("bathrooms")} placeholder="2" inputMode="numeric" className={inputCls} />
                      </Field>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="mt-9 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-500 text-forest-950"><CalendarCheck className="h-5 w-5" /></span>
                    <div>
                      <h3 className="text-[17px] font-extrabold tracking-tight text-charcoal-900">Schedule preferences</h3>
                      <p className="text-[13px] text-charcoal-500">Your ideal timing — we'll confirm availability.</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <Field label="Preferred Date" icon={CalendarCheck} optional>
                      <input value={form.date} onChange={set("date")} type="date" className={inputCls} />
                    </Field>
                    <Field label="Preferred Time" icon={Clock3}>
                      <div className="relative">
                        <select value={form.time} onChange={set("time")} className={`${inputCls} appearance-none pr-10`}>
                          {TIMES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-300" />
                      </div>
                    </Field>
                    <Field label="Frequency" icon={Repeat}>
                      <div className="relative">
                        <select value={form.frequency} onChange={set("frequency")} className={`${inputCls} appearance-none pr-10`}>
                          {FREQUENCIES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-300" />
                      </div>
                    </Field>
                  </div>

                  {/* Details + photos */}
                  <div className="mt-9 grid gap-4">
                    <Field label="Additional Details" icon={FileText} optional>
                      <textarea
                        value={form.details}
                        onChange={set("details")}
                        rows={4}
                        placeholder="Tell us about the space, priorities, pets, access notes, or anything else helpful…"
                        className={`${inputCls} resize-none`}
                      />
                    </Field>
                    <div>
                      <span className={labelCls}>
                        <Camera className="h-3.5 w-3.5 text-gold-600" /> Upload Photos{" "}
                        <span className="font-semibold normal-case tracking-normal text-charcoal-300">(optional — up to 6)</span>
                      </span>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handlePhotos(e.target.files)}
                        aria-label="Upload photos of your space"
                      />
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-forest-800/20 bg-cream-50 px-6 py-7 text-center transition hover:border-forest-700 hover:bg-forest-50"
                      >
                        <ImagePlus className="h-7 w-7 text-forest-700" strokeWidth={1.7} />
                        <span className="text-[14px] font-bold text-forest-800">Add photos of your space</span>
                        <span className="text-[12.5px] text-charcoal-500">Photos help us prepare a more accurate quote.</span>
                      </button>
                      {photos.length > 0 && (
                        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
                          {photos.map((p, i) => (
                            <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-forest-800/10">
                              <img src={p.url} alt={`Uploaded photo ${i + 1}`} className="h-full w-full object-cover" />
                              <button
                                type="button"
                                onClick={() => setPhotos((arr) => arr.filter((_, idx) => idx !== i))}
                                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-forest-950/70 text-white opacity-0 transition group-hover:opacity-100"
                                aria-label="Remove photo"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ))}
                          {photos.length < 6 && (
                            <button
                              type="button"
                              onClick={() => fileRef.current?.click()}
                              className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-forest-800/20 text-[12px] font-bold text-forest-700"
                            >
                              + Add
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-forest-800 px-8 py-4 text-[15px] font-extrabold text-white shadow-[0_16px_36px_-14px_rgb(11_47_36/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
                    >
                      {mode === "quote" ? "Request My Quote" : "Book an Appointment"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode(mode === "quote" ? "booking" : "quote")}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-forest-800/15 px-8 py-4 text-[14px] font-bold text-forest-800 transition hover:border-forest-800"
                    >
                      {mode === "quote" ? "Or Book an Appointment" : "Or Just Get a Quote"}
                    </button>
                  </div>
                  <p className="mt-4 flex items-start gap-2 text-center text-[12.5px] leading-relaxed text-charcoal-300 sm:justify-center">
                    <Trash2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    No payment required today. Submitting this form simply sends your request for review.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
