import { createFileRoute, Link } from "@tanstack/react-router";
import { Utensils, Coffee, HeartHandshake, Users } from "lucide-react";
import heroImg from "@/assets/dream-cafe-interior.jpg";
import galleryOne from "@/assets/dream-cafe-gallery-01.jpg";
import drinksImg from "@/assets/dream-cafe-drinks.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dream Cafe — Cafe in Mirpur-1, Dhaka" },
      {
        name: "description",
        content:
          "About Dream Cafe on Mazar Road, Mirpur-1, Dhaka — our food, our atmosphere, our hospitality and the community we serve every day.",
      },
      { property: "og:title", content: "About Dream Cafe, Mirpur-1" },
      {
        property: "og:description",
        content: "A place where dreams meet great food, in the heart of Mirpur-1, Dhaka.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Utensils,
    title: "Our Food",
    body: "Cafe favourites, fast food, pizza, pasta and Thai dishes, cooked to order through the day.",
  },
  {
    icon: Coffee,
    title: "Our Atmosphere",
    body: "A light, comfortable room made for lingering — coffee in the afternoon, dinner in the evening.",
  },
  {
    icon: HeartHandshake,
    title: "Our Hospitality",
    body: "Friendly service that treats regulars and first-time guests exactly the same way.",
  },
  {
    icon: Users,
    title: "Our Community",
    body: "A neighbourhood table in Mirpur-1 for families, friends, students and coworkers.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dream Cafe"
        title="A Place Where Dreams Meet Great Food"
        description="Mazar Road, 2nd Colony, Mirpur-1 — open every day from 11:00 AM to 11:00 PM."
        image={heroImg}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Built around the table"
              description="Dream Cafe was created to bring together delicious food, welcoming hospitality, and a comfortable place where people can spend meaningful time together."
            >
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The idea is simple and hasn't changed: cook food people want to come back
                for, keep the room comfortable, and make sure everyone who walks in feels
                looked after. Everything else follows from that.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={120} className="img-zoom overflow-hidden rounded-3xl">
            <img
              src={galleryOne}
              alt="Guests enjoying a meal together at Dream Cafe"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow="What we care about" title="Four things, done well" />
          </Reveal>
          <ol className="mt-14 space-y-10 border-l border-sand pl-8">
            {pillars.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 90} className="relative">
                <span className="absolute top-2 -left-[2.28rem] size-3 rounded-full border border-clay bg-background" />
                <p.icon className="size-5 text-clay" strokeWidth={1.3} />
                <h3 className="mt-3 font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="img-zoom overflow-hidden rounded-3xl">
            <img
              src={drinksImg}
              alt="Coffee served at Dream Cafe"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Visit us"
              title="Find us on Mazar Road"
              description="1/A/B, 2nd Colony, Mazar Road, Mirpur-1, Dhaka. Open every day, 11:00 AM – 11:00 PM."
            >
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/menu"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
                >
                  See the Menu
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-primary/30 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Contact Us
                </Link>
              </div>
            </SectionHeading>
          </Reveal>
        </div>
      </section>
    </>
  );
}
