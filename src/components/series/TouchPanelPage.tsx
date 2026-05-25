import { Link } from "@tanstack/react-router";
import { type Product, type ProductSeries } from "@/data/products";
import {
  ArrowRight,
  ChevronRight,
  LayoutGrid,
  Image as ImageIcon,
} from "lucide-react";
import { productImages } from "@/data/productImages";

interface Props {
  category: Product;
  series: ProductSeries;
}

export function TouchPanelPage({ category, series }: Props) {
  const items = series.items || [];

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Light Theme Breadcrumb */}
      <div className="border-b border-border bg-card/80 sticky top-16 z-20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight size={14} />
            <Link
              to="/products/$categorySlug"
              params={{ categorySlug: category.slug }}
              className="hover:text-primary transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-foreground">{series.title}</span>
          </div>
        </div>
      </div>

      {/* Sub-Products Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary">Panel PC Lineup</h2>
              <p className="mt-2 text-muted-foreground">
                Industrial-grade displays engineered for harsh factory environments.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card px-3.5 py-1.5 rounded-lg border border-border shadow-sm">
              <LayoutGrid size={14} className="text-accent" />
              <span>{items.length} Products</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const hasSubItems = item.subItems && item.subItems.length > 0;
              
              const cardClasses = hasSubItems
                ? "group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-md cursor-pointer"
                : "flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm";

              const cardContent = (
                <>
                  <div className="flex flex-col gap-4 flex-grow">
                    <div className="w-full aspect-video rounded-lg bg-muted flex items-center justify-center text-muted-foreground border border-border/50 overflow-hidden">
                      {productImages[item.slug] ? (
                        <img src={productImages[item.slug]} alt={item.title} className="w-full h-full object-contain" />
                      ) : (
                        <ImageIcon className="opacity-20" size={48} />
                      )}
                    </div>
                    <div className="text-center flex-grow flex flex-col justify-center">
                      {item.modelNo && (
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          Model No: {item.modelNo}
                        </span>
                      )}
                      <h3 className={`mt-1 font-display text-lg font-bold text-primary ${hasSubItems ? "transition-colors group-hover:text-accent" : ""}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {hasSubItems && (
                    <div className="mt-6 border-t border-border/50 pt-4">
                      <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                        <span className="group-hover:text-accent transition-colors">View More</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1 group-hover:text-accent"
                        />
                      </div>
                    </div>
                  )}
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
