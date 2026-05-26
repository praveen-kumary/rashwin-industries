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
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden cursor-pointer"
    >
      {/* Premium Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-0" />

      {/* Decorative Blur Orb */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-all duration-500 group-hover:bg-accent/30 group-hover:scale-150" />

      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary border border-border/50 shadow-sm transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:border-accent/50">
        <Icon size={26} className="transition-transform duration-500" />
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="font-display text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
          {product.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {full ? product.description : product.short}
        </p>
      </div>

      <div className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent">
        <span>Learn More</span>
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
