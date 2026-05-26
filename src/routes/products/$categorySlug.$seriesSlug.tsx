import { createFileRoute, Link, Outlet, useMatch } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { products } from "@/data/products";
import { ArrowRight, ChevronRight, LayoutGrid, Image as ImageIcon } from "lucide-react";
import { productImages } from "@/data/productImages";
import { EdgeComputingPage } from "@/components/series/EdgeComputingPage";
import { TouchPanelPage } from "@/components/series/TouchPanelPage";

export const Route = createFileRoute("/products/$categorySlug/$seriesSlug")({
  component: SeriesLayoutWrapper,
  loader: ({ params }) => {
    const category = products.find((c) => c.slug === params.categorySlug);
    if (!category) {
      throw new Error("Category not found");
    }
    const series = category.series.find((s) => s.slug === params.seriesSlug);
    if (!series) {
      throw new Error("Series not found");
    }
    return { category, series };
  },
});

function SeriesLayoutWrapper() {
  // Check if a child route (product detail) is active
  let hasChildRoute = false;
  try {
    const match = useMatch({ from: "/products/$categorySlug/$seriesSlug/$productSlug", shouldThrow: false });
    hasChildRoute = !!match;
  } catch {
    hasChildRoute = false;
  }

  // If child route is active, just render the Outlet
  if (hasChildRoute) {
    return <Outlet />;
  }

  // Otherwise render the series page
  return <SeriesRouteHandler />;
}

function SeriesRouteHandler() {
  const { categorySlug, seriesSlug } = Route.useParams();
  const { category, series } = Route.useLoaderData();

  // Conditionally render custom designs if they exist
  if (series.slug === "industrial-edge-computing") {
    return (
      <SiteLayout>
        <EdgeComputingPage category={category} series={series} />
      </SiteLayout>
    );
  }

  if (series.slug === "industrial-touch-panel-pc") {
    return (
      <SiteLayout>
        <TouchPanelPage category={category} series={series} />
      </SiteLayout>
    );
  }

  // Fallback Generic Series Template
  const items = series.items || [];

  return (
    <SiteLayout>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-primary py-14 sm:py-18 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <ChevronRight size={12} />
            <Link
              to="/products/$categorySlug"
              params={{ categorySlug }}
              className="hover:text-accent transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight size={12} />
            <span className="text-accent">{series.title}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
              {series.title}
            </h1>
            {(series.description || series.short) && (
              <p className="mt-4 text-base sm:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
                {series.description || series.short}
              </p>
            )}
          </div>

          {items.length > 0 && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/25 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-accent">
              <LayoutGrid size={13} />
              <span>{items.length} Products found</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────────────── */}
      <section className="bg-secondary py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                
                const cardClasses = hasSubItems
                  ? "group flex flex-col rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/40 hover:border-accent/30"
                  : "flex flex-col rounded-2xl bg-card shadow-sm overflow-hidden border border-border/40";

                const cardContent = (
                  <>
                    {/* Image */}
                    <div className="relative aspect-square bg-white flex items-center justify-center overflow-hidden">
                      {productImages[item.slug] ? (
                        <img
                          src={productImages[item.slug]}
                          alt={item.title}
                          className={`w-full h-full object-contain p-5 ${hasSubItems ? "transition-transform duration-500 group-hover:scale-105" : ""}`}
                        />
                      ) : (
                        <ImageIcon className="opacity-10 text-muted-foreground" size={52} />
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5 flex flex-col gap-2 flex-grow">
                      {item.modelNo && (
                        <span className="text-[11px] font-bold text-accent uppercase tracking-wider break-words">
                          {item.modelNo}
                        </span>
                      )}
                      <h3 className={`font-display text-sm sm:text-[15px] font-bold text-primary leading-snug ${hasSubItems ? "transition-colors group-hover:text-accent" : ""}`}>
                        {item.title}
                      </h3>
                      {hasSubItems && (
                        <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                          <span>View More</span>
                          <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  </>
                );

                if (hasSubItems) {
                  return (
                    <Link
                      to="/products/$categorySlug/$seriesSlug/$productSlug"
                      params={{
                        categorySlug: category.slug,
                        seriesSlug: series.slug,
                        productSlug: item.slug,
                      }}
                      key={item.slug}
                      className={cardClasses}
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div key={item.slug} className={cardClasses}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-border rounded-2xl bg-card">
              <ImageIcon size={48} className="text-muted-foreground opacity-15 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">No Products Listed Yet</h3>
              <p className="text-muted-foreground max-w-md text-sm">
                Individual products for the {series.title} series have not been added yet. Please
                contact us for more information.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
