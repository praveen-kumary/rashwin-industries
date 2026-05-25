import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { products } from "@/data/products";
import { ChevronRight, LayoutGrid, ArrowRight, Image as ImageIcon } from "lucide-react";
import { productImages } from "@/data/productImages";

export const Route = createFileRoute("/products/$categorySlug/$seriesSlug/$productSlug")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const category = products.find((c) => c.slug === params.categorySlug);
    if (!category) throw new Error("Category not found");
    const series = category.series.find((s) => s.slug === params.seriesSlug);
    if (!series) throw new Error("Series not found");
    const product = series.items?.find((p) => p.slug === params.productSlug);
    if (!product) throw new Error("Product not found");
    return { category, series, product };
  },
});

function ProductDetailPage() {
  const { categorySlug, seriesSlug } = Route.useParams();
  const { category, series, product } = Route.useLoaderData();
  const subItems = product.subItems || [];

  return (
    <SiteLayout>
      {/* ── Breadcrumb Bar ───────────────────────────────────────── */}
      <div className="border-b border-border bg-card/80 sticky top-16 z-20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <ChevronRight size={14} />
            <Link
              to="/products/$categorySlug"
              params={{ categorySlug }}
              className="hover:text-accent transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight size={14} />
            <Link
              to="/products/$categorySlug/$seriesSlug"
              params={{ categorySlug, seriesSlug }}
              className="hover:text-accent transition-colors"
            >
              {series.title}
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-foreground">{product.title}</span>
          </div>
        </div>
      </div>

      {/* ── Sub-Items Grid ───────────────────────────────────────── */}
      <section className="bg-secondary py-16 min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                {product.title}
              </h2>
              {subItems.length > 0 && (
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Browse available models and variants.
                </p>
              )}
            </div>
            {subItems.length > 0 && (
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card px-3.5 py-1.5 rounded-lg border border-border shadow-sm">
                <LayoutGrid size={14} className="text-accent" />
                <span>{subItems.length} Models</span>
              </div>
            )}
          </div>

          {subItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {subItems.map((sub) => (
                <div
                  key={sub.slug}
                  className="group flex flex-col rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/40 hover:border-accent/30"
                >
                  {/* Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-muted/80 to-muted/40 flex items-center justify-center overflow-hidden">
                    {productImages[sub.slug] ? (
                      <img
                        src={productImages[sub.slug]}
                        alt={sub.title}
                        className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <ImageIcon className="opacity-10 text-muted-foreground" size={52} />
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5 flex flex-col gap-2">
                    {sub.modelNo && (
                      <span className="text-[11px] font-bold text-accent uppercase tracking-wider break-words">
                        {sub.modelNo}
                      </span>
                    )}
                    <h3 className="font-display text-sm sm:text-[15px] font-bold text-primary leading-snug">
                      {sub.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <ImageIcon size={48} className="mx-auto text-muted-foreground opacity-20 mb-4" />
              <p className="text-muted-foreground text-sm">No models available yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA Banner ───────────────────────────────────────── */}
      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Need a custom configuration?
          </h2>
          <p className="mt-4 text-base text-primary-foreground/70 leading-relaxed">
            Our engineers offer OEM/ODM solutions, custom thermal designs, and bulk procurement
            pricing tailored to your project requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
