import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  full = false,
}: {
  product: Product;
  full?: boolean;
}) {
  const Icon = product.icon;
  return (
    <Link
      to="/products/$categorySlug"
      params={{ categorySlug: product.slug }}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg cursor-pointer"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors">
        {product.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {full ? product.description : product.short}
      </p>
      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
        <span>Learn More</span> <ArrowRight size={14} />
      </div>
    </Link>
  );
}
