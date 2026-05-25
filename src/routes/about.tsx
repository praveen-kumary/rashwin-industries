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
      { title: "About — Staunch On Demand Solutions" },
      {
        name: "description",
        content:
          "Staunch On Demand Solutions is a next-generation System Integration and IT Solutions company dedicated to driving business transformation through technology.",
      },
      { property: "og:title", content: "About Staunch On Demand Solutions" },
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
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Since 2012
                </span>
              </div>

              <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                <span className="text-accent">Transforming</span> businesses
                <br />
                through intelligent technology
              </h1>

              <div className="mt-6 space-y-3">
                <p className="text-base leading-relaxed text-primary-foreground/80">
                  Staunch On Demand Solutions is a next-generation{" "}
                  <span className="font-semibold text-accent">
                    System Integration and IT Solutions
                  </span>{" "}
                  company.
                </p>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  We provide comprehensive services in IT consulting, infrastructure design,
                  integration, and security — enabling enterprises to build resilient,
                  high-performing, and secure digital environments.
                </p>
                <div className="mt-4 rounded-lg border-l-4 border-accent bg-white/5 p-4">
                  <p className="text-sm italic text-primary-foreground/75">
                    "We don't just implement technology — we enable transformation."
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  From network and data center solutions to security and managed services, we
                  deliver end-to-end support designed to simplify management, reduce risk, and
                  improve agility. Our long-term partnerships are built on trust, transparency, and
                  measurable outcomes.
                </p>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="mt-12 flex-1 lg:mt-0">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: "50+", label: "Enterprise Clients", icon: Building2 },
                  { value: "25+", label: "Technology Partners", icon: Handshake },
                  { value: "100%", label: "Project Success Rate", icon: TrendingUp },
                  { value: "24/7", label: "Technical Support", icon: ShieldCheck },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <stat.icon size={24} className="text-accent" />
                    <div className="mt-3 font-display text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-4 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <Award size={20} className="text-accent" />
                <span className="text-xs font-medium">ISO & CE Certified</span>
                <div className="h-4 w-px bg-white/20" />
                <BadgeCheck size={20} className="text-accent" />
                <span className="text-xs font-medium">Industry Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE STAUNCH (4 Pillars) ========== */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Choose Staunch
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
            <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Building2 size={26} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">End-to-End Expertise</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                One-stop partner for designing, deploying, and supporting complete IT and AV
                infrastructure solutions — spanning Enterprise Networking, AV Integration,
                Surveillance, and Security Systems.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Handshake size={26} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">
                Trusted Technology Partnerships
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We collaborate with leading global IT brands to provide reliable, future-ready
                solutions backed by world-class technology and proven industry standards.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Users size={26} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">Customer-Centric Approach</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every project begins with understanding your goals. We focus on measurable outcomes
                — enhancing efficiency, security, and customer experience at every step.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <TrendingUp size={26} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">Commitment to Excellence</h3>
              <p className="mt-2 text-sm text-muted-foreground">
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
                  When we started Staunch, our goal was simple — to create a company that doesn't
                  just deliver technology, but builds the foundation for our customers' success.
                </p>
                <p>
                  We believe technology should be more than infrastructure; it should be an enabler
                  of transformation — helping businesses connect better, work smarter, and grow
                  stronger.
                </p>
                <p>
                  At Staunch, we take pride in being a trusted partner, not just a service provider.
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
              <div className="relative rounded-2xl bg-primary p-8 text-primary-foreground lg:p-12">
                <Quote className="absolute -top-3 -left-3 h-10 w-10 text-accent opacity-50" />
                <p className="relative text-lg italic leading-relaxed">
                  "Technology should be more than infrastructure — it should be an enabler of
                  transformation, helping businesses connect better, work smarter, and grow
                  stronger."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-accent" />
                  <span className="text-sm font-semibold">Staunch On Demand Solutions</span>
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
              Driven by passion, guided by experience — the people behind Staunch's success.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* CEO - Hitesh Singh */}
            <div className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-primary p-8 text-center text-primary-foreground">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <User size={48} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Hitesh Singh</h3>
                <p className="text-sm text-primary-foreground/70">CEO</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Our vision has always been clear — to empower businesses with technology that
                  drives growth, security, and transformation. As technology continues to evolve,
                  our commitment remains the same: to deliver excellence, build trust, and create
                  long-term value for every client we serve. Together, we don't just adapt to change
                  — we lead it."
                </p>
              </div>
            </div>

            {/* Co-Founder - Aswwini Singh */}
            <div className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-primary p-8 text-center text-primary-foreground">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <User size={48} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Aswwini Singh</h3>
                <p className="text-sm text-primary-foreground/70">Co-Founder</p>
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
