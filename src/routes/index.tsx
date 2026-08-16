import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Phone, MapPin, Coffee, Users, Utensils, Facebook } from "lucide-react";
import heroImg from "@/assets/dream-cafe-hero.jpg";
import interiorImg from "@/assets/dream-cafe-interior.jpg";
import drinksImg from "@/assets/dream-cafe-drinks.jpg";
import galleryOne from "@/assets/dream-cafe-gallery-01.jpg";
import galleryTwo from "@/assets/dream-cafe-gallery-02.jpg";
import foodOne from "@/assets/dream-cafe-food-01.jpg";
import foodThree from "@/assets/dream-cafe-food-03.jpg";
import { site } from "@/lib/site";
import { menuItems } from "@/lib/menu-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MenuCard } from "@/components/site/MenuCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Cafe Mirpur — Cafe & Restaurant on Mazar Road, Mirpur-1" },
      {
        name: "description",
        content:
          "Dream Cafe is a warm cafe and restaurant in Mirpur-1, Dhaka serving pizza, pasta, Thai, fast food and coffee. Open every day 11:00 AM – 11:00 PM.",
      },
      { property: "og:title", content: "Dream Cafe Mirpur — Cafe & Restaurant on Mazar Road, Mirpur-1" },
      {
        property: "og:description",
        content:
          "Dream Cafe is a warm cafe and restaurant in Mirpur-1, Dhaka serving pizza, pasta, Thai, fast food and coffee. Open every day 11:00 AM – 11:00 PM.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  {
    icon: Utensils,
    title: "Delicious Food",
    body: "A menu designed for satisfying meals, snacks, and refreshing drinks.",
  },
  {
    icon: Coffee,
    title: "Cozy Atmosphere",
    body: "A comfortable environment for friends, families, and casual gatherings.",
  },
  {
    icon: Users,
    title: "Great for Groups",
    body: "A welcoming place to enjoy food and spend quality time together.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    body: "Easy to find in Mirpur-1 on Mazar Road.",
  },
];

function Home() {
  const featured = menuItems.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Dream Cafe interior in Mirpur-1, Dhaka, with warm lighting and guests dining"
          width={1920}
          height={1280}
          className="hero-drift absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.22_0.02_60/0.62),oklch(0.22_0.02_60/0.42)_45%,oklch(0.22_0.02_60/0.72))]" />

        <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pt-32 pb-16 sm:pb-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-primary-foreground/85">Dream Cafe · Mirpur</p>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.08] text-primary-foreground sm:text-6xl md:text-7xl">
              Good Food. Great Moments. Dream Cafe.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Come together over delicious food, refreshing drinks, and a cozy cafe
              experience in the heart of Mirpur.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Our Menu
              </Link>
              <a
                href={site.maps}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-foreground/50 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-10 sm:mt-14">
            <div className="grid max-w-xl gap-px overflow-hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/15 backdrop-blur-md sm:grid-cols-2">
              <div className="flex items-center gap-3 bg-transparent p-5">
                <Clock className="size-5 text-primary-foreground/80" />
                <div>
                  <p className="text-xs tracking-widest text-primary-foreground/70 uppercase">
                    Open Today
                  </p>
                  <p className="text-primary-foreground">{site.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5">
                <Phone className="size-5 text-primary-foreground/80" />
                <div>
                  <p className="text-xs tracking-widest text-primary-foreground/70 uppercase">
                    Call Us
                  </p>
                  <a href={site.phoneHref} className="text-primary-foreground">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="img-zoom overflow-hidden rounded-3xl">
            <img
              src={interiorImg}
              alt="Dream Cafe seating area with warm daylight"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Welcome to Dream Cafe"
              title="A Place Made for Good Moments"
              description="Dream Cafe is more than a place to eat. It is a place to meet, relax, celebrate, and enjoy great food with the people who matter."
            >
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tucked into 2nd Colony on Mazar Road, the cafe keeps its doors open from
                late morning to late night — for long lunches, evening coffee, family
                dinners and the conversations in between.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Discover Our Story
              </Link>
            </SectionHeading>
          </Reveal>
        </div>
      </section>

      {/* Why Dream Cafe */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Why Dream Cafe"
              title="Small things that make a visit feel right"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <f.icon className="size-6 text-clay" strokeWidth={1.3} />
                <h3 className="mt-4 font-display text-2xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
                <div className="mt-6 h-px w-12 bg-sand" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured menu */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            title="Something Delicious Is Waiting"
            description="A short look at what comes out of the Dream Cafe kitchen. Item names and prices are placeholders until the full menu is confirmed."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            to="/menu"
            className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Full Menu
          </Link>
        </Reveal>
      </section>

      {/* Editorial showcase */}
      <section className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-12">
            <Reveal className="img-zoom overflow-hidden rounded-3xl md:col-span-7">
              <img
                src={galleryOne}
                alt="Friends sharing a meal at Dream Cafe"
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96"
              />
            </Reveal>
            <Reveal delay={100} className="img-zoom overflow-hidden rounded-3xl md:col-span-5">
              <img
                src={drinksImg}
                alt="Coffee and iced drinks at Dream Cafe"
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96"
              />
            </Reveal>
            <Reveal delay={60} className="md:col-span-5">
              <blockquote className="flex h-full flex-col justify-center rounded-3xl border border-border bg-card p-8">
                <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                  “Every visit deserves a moment worth remembering.”
                </p>
                <p className="mt-4 text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  Dream Cafe, Mirpur-1
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={120} className="img-zoom overflow-hidden rounded-3xl md:col-span-4">
              <img
                src={foodOne}
                alt="Stone-baked pizza served at Dream Cafe"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </Reveal>
            <Reveal delay={180} className="img-zoom overflow-hidden rounded-3xl md:col-span-3">
              <img
                src={galleryTwo}
                alt="Burger and fries platter at Dream Cafe"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Atmosphere"
              title="Come for the Food. Stay for the Atmosphere."
              description="Dream Cafe is built for staying a while — a comfortable room for hanging out, long conversations, quiet work, and time with friends and family."
            >
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Soft lighting, easy seating and space enough for a table of two or a table
                of ten. Whatever the reason for coming in, the room makes it easy to stay.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="img-zoom overflow-hidden rounded-3xl">
              <img
                src={interiorImg}
                alt="Dream Cafe interior seating"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-72"
              />
            </Reveal>
            <Reveal delay={120} className="img-zoom overflow-hidden rounded-3xl sm:mt-10">
              <img
                src={foodThree}
                alt="Thai curry platter at Dream Cafe"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-72"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Food, drinks, interior, moments"
              align="center"
            />
          </Reveal>
          <div className="mt-12 columns-2 gap-4 md:columns-4 [&>*]:mb-4">
            {[galleryOne, foodOne, drinksImg, interiorImg, galleryTwo, foodThree].map(
              (src, i) => (
                <Reveal key={i} delay={i * 70} className="img-zoom overflow-hidden rounded-2xl break-inside-avoid">
                  <img
                    src={src}
                    alt="Dream Cafe photograph"
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </Reveal>
              ),
            )}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Full Gallery
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Social */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
        <Reveal>
          <Facebook className="mx-auto size-7 text-clay" strokeWidth={1.3} />
          <h2 className="mt-5 font-display text-3xl text-foreground sm:text-4xl">
            Follow Dream Cafe
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            See what's happening at Dream Cafe, discover new dishes, and stay updated with
            our latest offers.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Visit Our Facebook
          </a>
        </Reveal>
      </section>
    </>
  );
}
