import { X } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  const Icon = product.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-auto rounded-2xl bg-card p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:bg-secondary transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-md">
          <Icon size={28} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-primary">{product.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>
        <a
          href="/contact"
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm hover:shadow-md"
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
}
