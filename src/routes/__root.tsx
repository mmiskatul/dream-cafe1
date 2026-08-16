import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dream Cafe Mirpur — Cafe & Restaurant on Mazar Road, Mirpur-1" },
      {
        name: "description",
        content:
          "Dream Cafe is a warm cafe and restaurant in Mirpur-1, Dhaka serving pizza, pasta, Thai, fast food and coffee. Open every day 11:00 AM – 11:00 PM.",
      },
      { property: "og:site_name", content: "Dream Cafe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Dream Cafe Mirpur — Cafe & Restaurant on Mazar Road, Mirpur-1" },
      { name: "twitter:title", content: "Dream Cafe Mirpur — Cafe & Restaurant on Mazar Road, Mirpur-1" },
      { property: "og:description", content: "Dream Cafe is a warm cafe and restaurant in Mirpur-1, Dhaka serving pizza, pasta, Thai, fast food and coffee. Open every day 11:00 AM – 11:00 PM." },
      { name: "twitter:description", content: "Dream Cafe is a warm cafe and restaurant in Mirpur-1, Dhaka serving pizza, pasta, Thai, fast food and coffee. Open every day 11:00 AM – 11:00 PM." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ed2b19fff66d54288e463cd70490257/id-preview-5fe38cfa--6d7a3fd1-c53f-45e8-bcb6-b2249948c45a.lovable.app-1786856685978.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7ed2b19fff66d54288e463cd70490257/id-preview-5fe38cfa--6d7a3fd1-c53f-45e8-bcb6-b2249948c45a.lovable.app-1786856685978.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Dream Cafe",
          servesCuisine: ["Cafe", "Fast Food", "Pizza", "Thai"],
          telephone: "+8801319240502",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1/A/B, 2nd Colony, Mazar Road",
            addressLocality: "Mirpur-1, Dhaka",
            addressCountry: "BD",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "11:00",
              closes: "23:00",
            },
          ],
          hasMap: site.maps,
          sameAs: [site.facebook],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </QueryClientProvider>
  );
}
