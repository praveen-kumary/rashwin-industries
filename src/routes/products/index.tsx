import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { products } from "@/data/products";
import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Industrial Products — Rashwin Industries" },
      {
        name: "description",
        content:
          "Explore Rashwin Industries' comprehensive range of Industrial PCs, Workstations, Touch Screens, Ethernet Switches, and Data Communication solutions.",
      },
      { property: "og:title", content: "Industrial Products — Rashwin Industries" },
      {
        property: "og:description",
        content: "Precisely engineered industrial computing and networking solutions.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary py-12 text-primary-foreground sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Products & Solutions
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl max-w-3xl leading-tight">
            Our Industrial Range
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl leading-relaxed">
            Reliable, durable, and precisely engineered solutions for industrial computing,
            automation, and networking.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-secondary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
              Browse Categories
            </h2>
            <p className="mt-2 text-muted-foreground">
              Select an industrial division below to view dedicated sub-product details and
              specifications.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
                >
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary transition-colors group-hover:text-accent">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>

                    {/* Inline list of sub-products for quick view */}
                    <div className="mt-6 border-t border-border/60 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Includes:
                      </span>
                      <div className="space-y-2 mt-4">
                        <ul className="space-y-1.5">
                          {category.series.slice(0, 3).map((sub) => (
                            <li
                              key={sub.slug}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent/60" />
                              <span className="truncate">{sub.title}</span>
                            </li>
                          ))}
                          {category.series.length > 3 && (
                            <li className="text-xs text-muted-foreground italic pl-3 mt-1.5 opacity-70">
                              + {category.series.length - 3} more products
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/products/$categorySlug"
                      params={{ categorySlug: category.slug }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-accent hover:text-accent-foreground shadow-sm"
                    >
                      Explore Products
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards Banner */}
      <section className="bg-background py-12 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Engineered for Extremes
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                Industrial Grade Quality
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                All products are designed, tested, and certified to meet international standards for
                heavy industrial environments.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4 p-5 rounded-xl border border-border/55 bg-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Extreme Temperature Tolerant</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    Operations from -40°C to +85°C, ensuring stability in steel mills, deserts, and
                    freezing climates.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl border border-border/55 bg-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Anti-Interference & Isolation</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    Fitted with advanced ESD, EFT, and surge protection to survive high EMI
                    substation environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
