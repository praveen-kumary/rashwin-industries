import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { products } from "@/data/products";
import {
  ArrowRight,
  ChevronRight,
  LayoutGrid,
  Image as ImageIcon,
} from "lucide-react";

const seriesImages: Record<string, string> = {
  "industrial-edge-computing": "/products/industrial-edge-computing.webp",
  "industrial-touch-panel-pc": "/products/industrial-touch-panel-pc.webp",
  "industrial-server-motherboard": "/products/industrial-server-motherboard.webp",
  "android-motherboard": "/products/android-motherboard.webp",
  "industrial-rackmount-server-pc": "/products/industrial-rackmount-server-pc.webp",
  "industrial-rugged-laptop-with-gpu": "/products/industrial-rugged-laptop-with-gpu.webp",
  "industrial-motherboards": "/products/industrial-motherboards.webp",
  "amd-ryzen-motherboard": "/products/amd-ryzen-motherboard.webp",
  "touch-screen-kiosk": "/products/touch-screen-kiosk.webp",
  "touch-screen": "/products/touch-screen.webp",
  "touch-screen-monitor": "/products/touch-screen-monitor.webp",
  "industrial-serial-device-server": "/products/industrial-serial-device-server.webp",
  "industrial-modbus-gateway": "/products/industrial-modbus-gateway.webp",
  "industrial-serial-to-fiber-modem": "/products/industrial-serial-to-fiber-modem.webp",
  "industrial-serial-converter": "/products/industrial-serial-converter.webp",
  "industrial-media-converter": "/products/industrial-media-converter.webp",
  "industrial-can-device-networking": "/products/industrial-can-device-networking.webp",
  "industrial-4g-iot-router": "/products/industrial-4g-iot-router.webp",
  "industrial-managed-switches": "/products/industrial-managed-switches.webp",
  "industrial-unmanaged-switches": "/products/industrial-unmanaged-switches.webp",
  "industrial-poe-managed-switches": "/products/industrial-poe-managed-switches.webp",
  "industrial-poe-unmanaged-switches": "/products/industrial-poe-unmanaged-switches.webp",
  "industrial-managed-fiber-switches": "/products/industrial-managed-fiber-switches.webp",
  "tsn-switches": "/products/tsn-switches.webp",
  "iec61850-switches": "/products/iec61850-switches.webp",
};

// This is the index page for /products/$categorySlug (exact match).
// It shows the list of series/sub-products for a given category.
export const Route = createFileRoute("/products/$categorySlug/")({
  component: CategoryIndexPage,
});

function CategoryIndexPage() {
  const { categorySlug } = Route.useParams();
  const category = products.find((c) => c.slug === categorySlug);

  if (!category) {
    return (
      <SiteLayout>
        <div className="flex min-h-[50vh] flex-col items-center justify-center bg-background px-4 py-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary">
            Category Not Found
          </h2>
          <p className="mt-2 text-muted-foreground">
            The product category you are looking for does not exist.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Back to Products
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const Icon = category.icon;

  return (
    <SiteLayout>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative bg-primary py-10 sm:py-14 text-primary-foreground overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.06),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground/60 mb-6">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <ChevronRight size={12} />
            <span className="text-accent">{category.title}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold text-accent border border-accent/25 backdrop-blur-sm">
                <Icon size={14} />
                <span>{category.series.length} Product Series</span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.1]">
                {category.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Series Grid ──────────────────────────────────────────── */}
      <section className="bg-secondary py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {category.series.map((sub) => (
              <Link
                to="/products/$categorySlug/$seriesSlug"
                params={{ categorySlug: category.slug, seriesSlug: sub.slug }}
                key={sub.slug}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/40 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
                  {seriesImages[sub.slug] ? (
                    <img
                      src={seriesImages[sub.slug]}
                      alt={sub.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ImageIcon className="opacity-15 text-muted-foreground" size={56} />
                  )}


                  {/* Items count badge */}
                  {sub.items && sub.items.length > 0 && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-primary/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow-md">
                      <LayoutGrid size={11} />
                      {sub.items.length}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary leading-snug transition-colors group-hover:text-accent">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {sub.short}
                    </p>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-200">
                    <span>View More</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <section className="relative bg-primary py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Custom Solutions
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
            Need a custom hardware configuration?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/70 leading-relaxed">
            We provide custom OEM/ODM solutions, tailored motherboard designs,
            special memory/storage upgrades, and wide temperature testing.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Custom Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
