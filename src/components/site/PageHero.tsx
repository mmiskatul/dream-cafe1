import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt="Dream Cafe in Mirpur-1, Dhaka"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.24_0.014_60/0.55),oklch(0.24_0.014_60/0.35))]" />
      <div className="mx-auto max-w-6xl px-5 pt-36 pb-20 text-center sm:pt-44 sm:pb-28">
        <p className="eyebrow text-primary-foreground/80">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
