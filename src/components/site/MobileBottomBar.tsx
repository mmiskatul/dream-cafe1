import { Link } from "@tanstack/react-router";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { site } from "@/lib/site";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-xs text-foreground"
        >
          <Phone className="size-5 text-primary" /> Call Now
        </a>
        <a
          href={site.maps}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs text-foreground"
        >
          <MapPin className="size-5 text-primary" /> Directions
        </a>
        <Link
          to="/menu"
          className="flex flex-col items-center gap-1 py-3 text-xs text-foreground"
        >
          <UtensilsCrossed className="size-5 text-primary" /> Menu
        </Link>
      </div>
    </div>
  );
}
