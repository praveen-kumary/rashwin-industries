import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      subject: (search.subject as string) || "",
    };
  },
  head: () => ({
    meta: [
      { title: "Contact — Rashwin Industries" },
      {
        name: "description",
        content:
          "Reach Rashwin Industries for product inquiries, support, or partnership opportunities.",
      },
      { property: "og:title", content: "Contact Rashwin Industries" },
      { property: "og:description", content: "Get in touch with our team in Bangalore, India." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { subject } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!fd.get("name")) errs.name = "Name is required";
    const email = String(fd.get("email") || "");
    if (!email) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email";
    if (!fd.get("subject")) errs.subject = "Subject is required";
    if (!fd.get("message")) errs.message = "Message is required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  };

  return (
    <SiteLayout>
      <section className="bg-primary py-10 text-primary-foreground sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Get In Touch</h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            We'd love to hear from you. Reach out for product inquiries, support, or partnership
            opportunities.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-primary">Contact Information</h2>
            {[
              {
                Icon: MapPin,
                title: "Address",
                body: "No. 859/B, SY28/2 NTI LAYOUT 2ND PHASE, RAJIV GANDHI NAGAR, BANGALORE URBAN, KARNATAKA - 560097",
              },
              {
                Icon: Mail,
                title: "Email",
                body: "info@rashwinindustries.com",
                href: "mailto:info@rashwinindustries.com",
              },
              { Icon: Phone, title: "Phone", body: "+91 9620994949", href: "tel:+919620994949" },
              {
                Icon: Clock,
                title: "Business Hours",
                body: "Monday to Friday, 9:00 AM to 6:00 PM IST",
              },
            ].map(({ Icon, title, body, href }) => (
              <div key={title} className="group relative flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                  <Icon size={20} className="transition-transform duration-300" />
                </div>
                <div className="relative z-10 flex flex-col justify-center">
                  <div className="font-display font-bold text-primary text-lg transition-colors duration-300 group-hover:text-accent">{title}</div>
                  {href ? (
                    <a href={href} className="mt-1 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                      {body}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</div>
                  )}
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Rashwin Industries Location"
                src="https://www.google.com/maps?q=859%2FB%2C+SY28%2F2+NTI+LAYOUT+2ND+PHASE%2C+RAJIV+GANDHI+NAGAR%2C+BANGALORE+URBAN%2C+KARNATAKA+-+560097&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xl transition-all hover:border-accent/30 hover:shadow-2xl">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
            <h2 className="font-display text-2xl font-bold text-primary">Send Us a Message</h2>
            {sent && (
              <div className="mt-4 flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 p-3 text-sm font-medium text-primary">
                <CheckCircle2 size={18} className="text-accent" /> Thanks! Your message has been
                sent.
              </div>
            )}
            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              <Field label="Full Name" name="name" required error={errors.name} />
              <Field
                label="Email Address"
                name="email"
                type="email"
                required
                error={errors.email}
              />
              <Field label="Phone Number" name="phone" type="tel" />
              <Field
                label="Subject"
                name="subject"
                required
                error={errors.subject}
                defaultValue={subject}
              />
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-accent px-5 py-3.5 text-sm font-bold tracking-wide text-accent-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message <Mail size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
