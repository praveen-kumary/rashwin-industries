import { Link } from "@tanstack/react-router";
import { type Product, type ProductSeries } from "@/data/products";
import { ArrowRight, ChevronRight, LayoutGrid, Image as ImageIcon } from "lucide-react";
import { productImages } from "@/data/productImages";

interface Props {
  category: Product;
  series: ProductSeries;
}

export function EdgeComputingPage({ category, series }: Props) {
  const items = series.items || [];

  return (
    <div className="bg-secondary min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card/80 sticky top-16 z-20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 py-3 text-[11px] sm:text-xs text-muted-foreground">
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
              params={{ categorySlug: category.slug }}
              className="hover:text-accent transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-foreground">{series.title}</span>
          </div>
        </div>
      </div>

      {/* Sub-Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                Available Models & Series
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Select a specific sub-product to view detailed features, layout configurations, and
                technical specifications.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card px-3.5 py-1.5 rounded-lg border border-border shadow-sm">
              <LayoutGrid size={14} className="text-accent" />
              <span>{items.length} Products</span>
            </div>
          </div>

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
        </div>
      </section>
    </div>
  );
}
