import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { Hero } from "@/components/site/Hero";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Network,
  Monitor,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Users,
  TrendingUp,
  Scissors,
  Rocket,
  Train,
  Wifi,
  Building2,
  Car,
  Bot,
  Settings,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rashwin Industries — Industrial Computing & Networking Since 2012" },
      {
        name: "description",
        content:
          "Leading manufacturer of industrial panel PCs, embedded box PCs, rackmount computers, Ethernet switches, and networking products.",
      },
      { property: "og:title", content: "Rashwin Industries — Industrial Computing & Networking" },
      {
        property: "og:description",
        content:
          "Manufacturers of industrial panel PCs, embedded box PCs, switches and networking products since 2012.",
      },
    ],
  }),
  component: Home,
});

function Home() {

  return (
    <SiteLayout>
      <Hero />

      {/* ========== PRODUCTS PREVIEW SECTION ========== */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Range
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Industrial Products & Services
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Precisely engineered industrial computing and networking solutions, built for the
                long haul.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} full />
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES WE SERVE SECTION ========== */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Title and Industries Grid */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Sectors We Support
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Industries We Serve
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Our industrial computing and networking solutions provide the reliability and robust
                performance required by the world's most critical sectors.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Textile Industry",
                    desc: "High-speed automation for weaving and processing.",
                    icon: Scissors,
                  },
                  {
                    name: "Aerospace Industry",
                    desc: "Rugged computer systems for flight control & testing.",
                    icon: Rocket,
                  },
                  {
                    name: "Transport Industry",
                    desc: "Reliable tracking and signaling systems for rail & transit.",
                    icon: Train,
                  },
                  {
                    name: "Telecommunication Industry",
                    desc: "Robust communication switches & protocol converters.",
                    icon: Wifi,
                  },
                  {
                    name: "Construction Industry",
                    desc: "Durable displays and panel PCs for heavy machinery.",
                    icon: Building2,
                  },
                  {
                    name: "Automobile Manufacturing",
                    desc: "Seamless assembly lines and manufacturing integration.",
                    icon: Car,
                  },
                  {
                    name: "Industrial Robotics",
                    desc: "Advanced logic controllers and processing units.",
                    icon: Bot,
                  },
                  {
                    name: "Industrial Automation",
                    desc: "Edge computing for connected smart factory ecosystems.",
                    icon: Settings,
                  },
                ].map((ind, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-lg border border-border/55 bg-card p-4 transition-all hover:border-accent/45 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <ind.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-sm">{ind.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-normal">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent/20 to-primary/10 blur-xl opacity-70" />
              <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl">
                <img
                  src="/industrial_sectors.png"
                  alt="Modern Industrial Sectors and Automation Collage"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Rashwin
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              We combine innovation, quality, and reliability to deliver industrial solutions that
              perform.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Long-term Availability",
                description:
                  "Consistent product availability providing operational certainty for your endeavours.",
              },
              {
                icon: Users,
                title: "Skilled Team",
                description:
                  "Highly experienced professionals assisting you with exceptional innovation.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                description:
                  "Trusted manufacturer and supplier since 2012 under able founder leadership.",
              },
              {
                icon: TrendingUp,
                title: "Cutting-edge Products",
                description:
                  "Advanced industrial computing and networking solutions for modern demands.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <item.icon size={26} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRUST & CERTIFICATIONS SECTION ========== */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <ShieldCheck size={26} />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-primary sm:text-4xl">
            A leading name in industrial computing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are the leading name in manufacturing, wholesaling, trading and exporting of
            Industrial Panel PCs, Industrial Embedded Box PCs, Industrial Rackmount Computers, Touch
            Screens, Ethernet Converters, and RS232 Repeaters.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "ISO Certified", icon: Award },
              { label: "CE Compliant", icon: ShieldCheck },
              { label: "RoHS Approved", icon: CheckCircle },
              { label: "Quality Assured", icon: Award },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-sm"
              >
                <Icon size={16} className="text-accent" /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION / CONTACT SECTION ========== */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to discuss your industrial requirements?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Get in touch with our team for product inquiries, technical support, or partnership
            opportunities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact Us Today <ArrowRight size={16} />
            </Link>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Phone size={18} />
              <span>+91 8608520520</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Mail size={18} />
              <span>mani@rashwin.com</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
