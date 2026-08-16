import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/dream-cafe-food-02.jpg";
import foodOne from "@/assets/dream-cafe-food-01.jpg";
import galleryTwo from "@/assets/dream-cafe-gallery-02.jpg";
import drinksImg from "@/assets/dream-cafe-drinks.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Specials — Dream Cafe, Mirpur-1" },
      {
        name: "description",
        content:
          "Offer slots for Dream Cafe in Mirpur-1, Dhaka. Call 01319240502 to confirm today's specials at our Mazar Road cafe.",
      },
      { property: "og:title", content: "Dream Cafe Offers — Mirpur-1" },
      {
        property: "og:description",
        content: "Something special for you at Dream Cafe, Mazar Road, Mirpur-1.",
      },
      { property: "og:url", content: "/offers" },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: OffersPage,
});

// Editable offer slots — replace with real, currently running promotions.
const offers = [
  {
    title: "Weekend Special",
    body: "Enjoy selected Dream Cafe favourites with a special weekend offer.",
    validity: "Validity to be confirmed",
    image: foodOne,
  },
  {
    title: "Family Combo",
    body: "A shared platter built for family tables and larger groups.",
    validity: "Validity to be confirmed",
    image: galleryTwo,
  },
  {
    title: "Coffee Hour",
    body: "An afternoon offer on hot and iced drinks from the cafe counter.",
    validity: "Validity to be confirmed",
    image: drinksImg,
  },
];

function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Dream Cafe · Offers"
        title="Something Special for You"
        description="Offers change from time to time. Call the cafe to confirm what's running today."
        image={heroImg}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-2xl border border-sand bg-cream p-5 text-sm text-muted-foreground">
            These are editable offer slots prepared for Dream Cafe. They are not confirmed
            as currently active — real promotions can be added here at any time.
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <div className="img-zoom aspect-[4/3]">
                  <img
                    src={o.image}
                    alt={`${o.title} at Dream Cafe`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-foreground">{o.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {o.body}
                  </p>
                  <p className="mt-4 text-xs tracking-widest text-clay uppercase">
                    {o.validity}
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-5 inline-flex justify-center rounded-full border border-primary/30 px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Call to Confirm
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <SectionHeading
            align="center"
            eyebrow="Planning a visit?"
            title="Book a table or just drop by"
            description="Dream Cafe is open every day from 11:00 AM to 11:00 PM on Mazar Road, Mirpur-1."
          >
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
              >
                Request a Reservation
              </Link>
              <Link
                to="/menu"
                className="rounded-full border border-primary/30 px-7 py-3.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Menu
              </Link>
            </div>
          </SectionHeading>
        </Reveal>
      </section>
    </>
  );
}
