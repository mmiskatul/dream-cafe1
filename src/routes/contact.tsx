import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/dream-cafe-hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Dream Cafe, Mazar Road Mirpur-1" },
      {
        name: "description",
        content:
          "Visit Dream Cafe at 1/A/B, 2nd Colony, Mazar Road, Mirpur-1, Dhaka. Call 01319240502. Open every day 11:00 AM – 11:00 PM.",
      },
      { property: "og:title", content: "Come Visit Dream Cafe, Mirpur-1" },
      {
        property: "og:description",
        content: "Address, phone, opening hours and directions for Dream Cafe in Mirpur-1, Dhaka.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  // Prepared for a backend/API integration later.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Reservation request noted", {
        description: "Please call 01319240502 to confirm your table.",
      });
      e.currentTarget?.reset?.();
    }, 500);
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Dream Cafe · Contact"
        title="Come Visit Dream Cafe"
        description="Mazar Road, Mirpur-1, Dhaka — open every day from 11:00 AM to 11:00 PM."
        image={heroImg}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              label: "Address",
              value: `${site.address.line1}, ${site.address.line2}`,
            },
            { icon: Phone, label: "Phone", value: site.phone },
            { icon: Clock, label: "Opening Hours", value: `Every day · ${site.hours}` },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <c.icon className="size-5 text-clay" strokeWidth={1.3} />
                <p className="mt-4 text-xs tracking-widest text-muted-foreground uppercase">
                  {c.label}
                </p>
                <p className="mt-2 leading-relaxed text-foreground">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
          >
            <Phone className="size-4" /> Call Dream Cafe
          </a>
          <a
            href={site.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MapPin className="size-4" /> Get Directions
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Facebook className="size-4" /> Visit Facebook
          </a>
        </Reveal>
      </section>

      {/* Map */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Find us"
            title="Dream Cafe — Mazar Road, Mirpur-1, Dhaka"
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Dream Cafe location on Google Maps"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full sm:h-[460px]"
            />
          </div>
          <a
            href={site.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* Reservation inquiry */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <SectionHeading
          align="center"
          eyebrow="Reservation inquiry"
          title="Request a Table"
          description="Send us your details and we'll get back to you. Reservation requests are subject to confirmation."
        />
        <form onSubmit={onSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
          <input required name="name" placeholder="Name" className={fieldClass} aria-label="Name" />
          <input
            required
            name="phone"
            type="tel"
            placeholder="Phone"
            className={fieldClass}
            aria-label="Phone"
          />
          <input name="date" type="date" className={fieldClass} aria-label="Date" />
          <input name="time" type="time" className={fieldClass} aria-label="Time" />
          <input
            name="guests"
            type="number"
            min={1}
            placeholder="Number of guests"
            className={`${fieldClass} sm:col-span-2`}
            aria-label="Number of guests"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message (optional)"
            className={`${fieldClass} sm:col-span-2`}
            aria-label="Message"
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2"
          >
            {submitting ? "Sending…" : "Request a Reservation"}
          </button>
          <p className="text-xs text-muted-foreground sm:col-span-2">
            Reservation requests are subject to confirmation. For an immediate booking,
            please call{" "}
            <a href={site.phoneHref} className="text-primary">
              {site.phone}
            </a>
            .
          </p>
        </form>
      </section>
    </>
  );
}
