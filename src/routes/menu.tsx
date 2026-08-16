import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import heroImg from "@/assets/dream-cafe-food-01.jpg";
import { PageHero } from "@/components/site/PageHero";
import { MenuCard } from "@/components/site/MenuCard";
import { Reveal } from "@/components/site/Reveal";
import { menuItems } from "@/lib/menu-data";
import { menuCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Dream Cafe, Mirpur-1 Dhaka" },
      {
        name: "description",
        content:
          "Browse the Dream Cafe menu in Mirpur-1, Dhaka: starters, fast food, pizza, pasta, Thai dishes, main course, beverages and desserts.",
      },
      { property: "og:title", content: "Dream Cafe Menu — Mirpur-1, Dhaka" },
      {
        property: "og:description",
        content:
          "Pizza, pasta, Thai, fast food, coffee and desserts at Dream Cafe on Mazar Road, Mirpur-1.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter(
      (i) =>
        (active === "All" || i.category === active) &&
        (q === "" ||
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)),
    );
  }, [active, query]);

  return (
    <>
      <PageHero
        eyebrow="Dream Cafe · Menu"
        title="Our Menu"
        description="Cafe classics, fast food, pizza, pasta and Thai dishes. Item names and prices below are editable placeholders until the full menu is supplied."
        image={heroImg}
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="flex flex-col gap-5">
          <div className="relative max-w-md">
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              aria-label="Search the menu"
              className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
            {["All", ...menuCategories].map((c) => (
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
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            Nothing matches that search yet. Try another category or keyword.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={`${item.category}-${item.name}`} delay={(i % 3) * 80}>
                <MenuCard item={item} />
              </Reveal>
            ))}
          </div>
        )}

        <p className="mt-12 text-xs text-muted-foreground">
          Prices and availability are confirmed in-store. Call {""}
          <a href="tel:+8801319240502" className="text-primary">
            01319240502
          </a>{" "}
          for today's dishes.
        </p>
      </section>
    </>
  );
}
