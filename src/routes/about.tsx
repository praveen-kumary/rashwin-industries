import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  Target,
  Eye,
  CheckCircle2,
  Award,
  ShieldCheck,
  BadgeCheck,
  User,
  Quote,
  Rocket,
  Handshake,
  Lightbulb,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rashwin Industries" },
      {
        name: "description",
        content:
          "Rashwin Industries is a leading manufacturer and supplier of industrial computing networking products.",
      },
      { property: "og:title", content: "About Rashwin Industries" },
      {
        property: "og:description",
        content:
          "System Integration and IT Solutions company — enabling business transformation through technology.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      {/* ========== HERO SECTION - SPLIT LAYOUT WITH STATS ========== */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Animated Mesh & Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -right-16 -top-16 md:-right-32 md:-top-32 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-accent/20 blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -left-16 -bottom-16 md:-left-32 md:-bottom-32 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-accent/15 blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="relative mx-auto max-w-4xl p-4 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out text-center flex flex-col items-center">
            <div className="relative z-10 mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-accent/90 border border-accent/20 bg-accent/10 px-3 py-1.5 rounded-full">
                Since 2012
              </span>
            </div>

            <h1 className="relative z-10 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-accent">Transforming</span> businesses
              <br />
              through intelligent technology
            </h1>

            <div className="relative z-10 mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-primary-foreground/80 max-w-3xl">
              <p>
                Rashwin Industries is a leading{" "}
                <span className="font-semibold text-accent">
                  System Integration and IT Solutions
                </span>{" "}
                company.
              </p>
              <p>
                We provide comprehensive services in IT consulting, infrastructure design,
                integration, and security — enabling enterprises to build resilient,
                high-performing, and secure digital environments.
              </p>
              <div className="mx-auto my-8 max-w-2xl rounded-2xl border border-accent/20 bg-white/5 p-6 backdrop-blur-sm shadow-inner">
                <p className="font-display text-lg sm:text-xl font-medium italic text-primary-foreground">
                  "We don't just implement technology — we enable transformation."
                </p>
              </div>
              <p>
                From network and data center solutions to security and managed services, we
                deliver end-to-end support designed to simplify management, reduce risk, and
                improve agility. Our long-term partnerships are built on trust, transparency, and
                measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 ease-out fill-mode-both">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "50+", label: "Enterprise Clients", icon: Building2 },
                { value: "25+", label: "Technology Partners", icon: Handshake },
                { value: "100%", label: "Project Success Rate", icon: TrendingUp },
                { value: "24/7", label: "Technical Support", icon: ShieldCheck },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 text-center flex flex-col items-center"
                >
                  <stat.icon size={28} className="text-accent mb-3" />
                  <div className="font-display text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-sm text-primary-foreground/60 uppercase tracking-wide font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-10 mx-auto flex flex-wrap items-center justify-center gap-4 rounded-full border border-accent/20 bg-accent/10 px-8 py-3 max-w-fit shadow-md">
              <Award size={20} className="text-accent" />
              <span className="text-sm font-semibold tracking-wide">ISO & CE Certified</span>
              <div className="hidden sm:block h-5 w-px bg-white/20" />
              <BadgeCheck size={20} className="text-accent" />
              <span className="text-sm font-semibold tracking-wide">Industry Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE STAUNCH (4 Pillars) ========== */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Choose Rashwin
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
              Your trusted technology partner
            </h2>
            <p className="mt-3 text-muted-foreground">
              We combine expertise, partnerships, and customer focus to deliver exceptional results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1 */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-0" />
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                <Building2 size={28} />
              </div>
              <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">End-to-End Expertise</h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                One-stop partner for designing, deploying, and supporting complete IT and AV
                infrastructure solutions — spanning Enterprise Networking, AV Integration,
                Surveillance, and Security Systems.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-0" />
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                <Handshake size={28} />
              </div>
              <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                Trusted Technology Partnerships
              </h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                We collaborate with leading global IT brands to provide reliable, future-ready
                solutions backed by world-class technology and proven industry standards.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-0" />
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                <Users size={28} />
              </div>
              <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">Customer-Centric Approach</h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                Every project begins with understanding your goals. We focus on measurable outcomes
                — enhancing efficiency, security, and customer experience at every step.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-0" />
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                <TrendingUp size={28} />
              </div>
              <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">Commitment to Excellence</h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                Our team combines technical expertise, disciplined execution, and a passion for
                innovation to deliver projects on time, within budget, and beyond expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY SECTION ========== */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Story
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                We Got Started Because We Want to Make the Future Business
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  When we started Rashwin Industries, our goal was simple — to create a company that doesn't
                  just deliver technology, but builds the foundation for our customers' success.
                </p>
                <p>
                  We believe technology should be more than infrastructure; it should be an enabler
                  of transformation — helping businesses connect better, work smarter, and grow
                  stronger.
                </p>
                <p>
                  At Rashwin, we take pride in being a trusted partner, not just a service provider.
                  Every solution we design is driven by our passion for innovation, precision, and
                  long-term value creation.
                </p>
                <p>
                  As the world of IT and security evolves, our focus remains on staying ahead of
                  change — delivering intelligent, reliable, and future-ready solutions that make a
                  real difference.
                </p>
                <p className="font-semibold text-primary">
                  Together with our clients and partners, we're not just keeping pace with
                  technology — we're shaping the future of it.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="group relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground lg:p-14 shadow-2xl transition-all duration-500 hover:shadow-accent/20">
                {/* Decorative Elements */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
                <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-accent/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
                
                <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/30 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent/50" />
                
                <div className="relative z-10 mt-6">
                  <p className="font-display text-xl sm:text-2xl italic leading-relaxed font-light">
                    "Technology should be more than infrastructure — it should be an enabler of
                    transformation, helping businesses connect better, work smarter, and grow
                    stronger."
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-accent transition-all duration-500 group-hover:w-16" />
                    <span className="font-semibold text-accent uppercase tracking-widest text-sm">
                      Our Vision
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Meet The Team
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
              Our Leadership
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Driven by passion, guided by experience — the people behind Rashwin's success.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto mt-12">

            {/* CEO - Ashhwini Singh */}
            <div className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-primary p-8 text-center text-primary-foreground">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <User size={48} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Ashhwini Singh</h3>
                <p className="text-sm text-primary-foreground/70">CEO</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Every great transformation begins with a bold idea. Our vision is to integrate
                  innovation with execution — bridging strategy, technology, and people to create
                  solutions that empower businesses to lead with confidence in the digital age."
                </p>
              </div>
            </div>

            {/* VP - Vilaas Balakrishna Naik */}
            <div className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-primary p-8 text-center text-primary-foreground">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <User size={48} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Vilaas Balakrishna Naik, CTS</h3>
                <p className="text-sm text-primary-foreground/70">
                  Vice President – Strategic Business
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Our strategy is built on one core belief: technology should drive measurable
                  business outcomes. We combine deep domain expertise with strategic foresight to
                  help organizations modernize infrastructure, secure their digital assets, and
                  accelerate transformation with confidence. We don't just integrate systems; we
                  integrate strategy, performance, and innovation to deliver long-term value."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GET STARTED / CTA SECTION ========== */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
            <Rocket size={26} />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
            Start Connecting With Us Today!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            To explore how technology can transform your business. Together, we'll design solutions
            that drive growth, security, and success. Our experts are ready to turn your vision into
            reality with intelligent IT solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS SECTION ========== */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Credentials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
            Quality & Trust
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Backed by industry standards and technology partnerships that ensure reliability.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Award, label: "ISO Certified" },
              { icon: ShieldCheck, label: "Global Technology Partners" },
              { icon: BadgeCheck, label: "Industry Standards Compliant" },
            ].map(({ icon: Icon, label }) => (
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
    </SiteLayout>
  );
}
