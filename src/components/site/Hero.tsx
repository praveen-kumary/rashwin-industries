import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Factory, Cpu, Clock, TrendingUp, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Hero Text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Zap size={14} /> Established in 2012
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Rashwin Industries <span className="text-accent">Pvt. Ltd.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Under the direction and flagship of its able founder, Mr. Moorthy Dhanarasu, Rashwin
              Industries was established in the year 2012 as one of the leading manufacturers and
              suppliers of industrial panel computers, embedded box PCs, rackmount computers,
              motherboards, Ethernet switches, and industrial networking products. Our long-term,
              consistent product availability provides operational certainty — partner with us to
              meet today's most crucial demands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Read More <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />
            <div className="relative grid grid-cols-2 gap-4 p-6">
              {[
                { k: "12+", v: "Years of Excellence", icon: TrendingUp },
                { k: "8", v: "Core Product Lines", icon: Cpu },
                { k: "100%", v: "Made in India", icon: Globe },
                { k: "24/7", v: "Technical Support", icon: Clock },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-white/10 bg-primary/40 p-6 transition-all hover:border-accent/50"
                >
                  <s.icon size={24} className="mb-3 text-accent" />
                  <div className="font-display text-3xl font-bold text-accent">{s.k}</div>
                  <div className="mt-1 text-sm text-primary-foreground/70">{s.v}</div>
                </div>
              ))}
              <div className="col-span-2 flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-5">
                <Factory className="text-accent" size={22} />
                <div className="text-sm font-medium">
                  Manufacturing • Wholesaling • Trading • Exporting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
