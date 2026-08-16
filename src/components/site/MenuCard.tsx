import { Leaf, Flame } from "lucide-react";
import type { MenuItem } from "@/lib/site";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]">
      <div className="img-zoom aspect-[4/3] w-full">
        <img
          src={item.image}
          alt={`${item.name} at Dream Cafe, Mirpur-1`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-foreground">{item.name}</h3>
          <div className="mt-1 flex shrink-0 gap-1.5">
            {item.veg ? <Leaf className="size-4 text-olive" aria-label="Vegetarian" /> : null}
            {item.spicy ? <Flame className="size-4 text-clay" aria-label="Spicy" /> : null}
          </div>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            {item.category}
          </span>
          <span className="text-sm font-medium text-primary">{item.price}</span>
        </div>
      </div>
    </article>
  );
}
