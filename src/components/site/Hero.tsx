import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Factory, Cpu, Clock, TrendingUp, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Animated Mesh & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.1),transparent_50%)]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -right-16 -top-16 md:-right-32 md:-top-32 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-accent/20 blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -left-16 -bottom-16 md:-left-32 md:-bottom-32 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-accent/15 blur-[60px] md:blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Hero Text */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Zap size={14} /> Established in 2012
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Rashwin Industries <span className="text-accent">Pvt. Ltd.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Under the direction and flagship of its able founder, Mrs. Ashwini Singh, Rashwin
              Industries was established in the year 2012 as one of the leading manufacturers and
              suppliers of industrial panel computers, embedded box PCs, rackmount computers,
              motherboards, Ethernet switches, and industrial networking products. Our long-term,
              consistent product availability provides operational certainty — partner with us to
              meet today's most crucial demands.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
          <div className="relative mt-8 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
              {[
                { k: "12+", v: "Years of Excellence", icon: TrendingUp },
                { k: "8", v: "Core Product Lines", icon: Cpu },
                { k: "100%", v: "Made in India", icon: Globe },
                { k: "24/7", v: "Technical Support", icon: Clock },
              ].map((s) => (
                <div
                  key={s.v}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/10"
                >
                  <s.icon size={22} className="mb-3 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <div className="font-display text-2xl font-bold text-accent">{s.k}</div>
                  <div className="mt-1 text-sm text-primary-foreground/70">{s.v}</div>
                </div>
              ))}
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4">
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
