import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 py-2 backdrop-blur-md"
          : "border-b border-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link to="/" onClick={() => setOpen(false)} className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-2xl transition-colors",
              scrolled ? "text-foreground" : "text-primary-foreground",
            )}
          >
            Dream Cafe
          </span>
          <span
            className={cn(
              "mt-0.5 text-[0.6rem] tracking-[0.3em] uppercase transition-colors",
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
            )}
          >
            Mirpur-1, Dhaka
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/85 hover:text-primary-foreground",
              )}
              activeProps={{
                className: scrolled ? "text-primary" : "text-primary-foreground",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="size-4" /> Call Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={site.phoneHref}
            aria-label="Call Dream Cafe"
            className="rounded-full bg-primary p-2.5 text-primary-foreground"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={site.maps}
            target="_blank"
            rel="noreferrer"
            aria-label="Get directions to Dream Cafe"
            className="rounded-full border border-border bg-card p-2.5 text-foreground"
          >
            <MapPin className="size-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              "rounded-full border p-2.5 transition-colors",
              scrolled || open
                ? "border-border bg-card text-foreground"
                : "border-primary-foreground/40 text-primary-foreground",
            )}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="block border-b border-border/60 py-3 text-sm text-foreground last:border-0"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
