import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl text-foreground">Dream Cafe</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
          <a
            href={site.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MapPin className="size-4" /> Get Directions
          </a>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Visit &amp; Call</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-clay" />
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-clay" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-clay" />
              <span>
                {site.hoursNote}
                <br />
                {site.hours}
              </span>
            </li>
            <li className="flex gap-2">
              <Facebook className="mt-0.5 size-4 shrink-0 text-clay" />
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
          © 2026 Dream Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
