import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/dream-cafe-gallery-01.jpg";
import interiorImg from "@/assets/dream-cafe-interior.jpg";
import drinksImg from "@/assets/dream-cafe-drinks.jpg";
import foodOne from "@/assets/dream-cafe-food-01.jpg";
import foodTwo from "@/assets/dream-cafe-food-02.jpg";
import foodThree from "@/assets/dream-cafe-food-03.jpg";
import galleryTwo from "@/assets/dream-cafe-gallery-02.jpg";
import cafeHero from "@/assets/dream-cafe-hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dream Cafe, Mirpur-1 Dhaka" },
      {
        name: "description",
        content:
          "Photos of Dream Cafe in Mirpur-1, Dhaka — food, drinks, interior and cafe moments from Mazar Road.",
      },
      { property: "og:title", content: "Dream Cafe Gallery" },
      {
        property: "og:description",
        content: "Food, drinks, interior and cafe moments at Dream Cafe, Mirpur-1.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = ["All", "Food", "Interior", "Drinks", "Moments"] as const;

const photos = [
  { src: foodOne, category: "Food", alt: "Stone-baked pizza at Dream Cafe" },
  { src: interiorImg, category: "Interior", alt: "Dream Cafe seating area" },
  { src: drinksImg, category: "Drinks", alt: "Coffee and iced drinks" },
  { src: heroImg, category: "Moments", alt: "Friends dining at Dream Cafe" },
  { src: foodTwo, category: "Food", alt: "Creamy pasta plated at Dream Cafe" },
  { src: cafeHero, category: "Interior", alt: "Dream Cafe dining room" },
  { src: galleryTwo, category: "Food", alt: "Burger and fries platter" },
  { src: foodThree, category: "Food", alt: "Thai curry platter" },
];

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = photos.filter((p) => active === "All" || p.category === active);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <PageHero
        eyebrow="Dream Cafe · Gallery"
        title="Moments at Dream Cafe"
        description="Food, drinks, interior and the everyday moments that happen around our tables."
        image={heroImg}
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {visible.map((p, i) => (
            <Reveal key={`${p.alt}-${i}`} delay={(i % 3) * 70}>
              <button
                onClick={() => setLightbox(i)}
                className="img-zoom block w-full overflow-hidden rounded-2xl break-inside-avoid"
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox !== null && visible[lightbox] ? (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[oklch(0.2_0.01_60/0.9)] p-4 duration-300 animate-in fade-in"
        >
          <button
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 rounded-full border border-primary-foreground/40 p-2 text-primary-foreground"
          >
            <X className="size-5" />
          </button>
          <img
            src={visible[lightbox].src}
            alt={visible[lightbox].alt}
            className="max-h-[85vh] w-auto rounded-2xl object-contain duration-300 animate-in zoom-in-95"
          />
        </div>
      ) : null}
    </>
  );
}
