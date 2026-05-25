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
      { property: "og:description", content: "Get in touch with our team in Chennai, India." },
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
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
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

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-primary">Contact Information</h2>
            {[
              {
                Icon: MapPin,
                title: "Address",
                body: "No. 20, First Floor, East Jones Road, Saidapet, Chennai-600015, India.",
              },
              {
                Icon: Mail,
                title: "Email",
                body: "mani@rashwin.com",
                href: "mailto:mani@rashwin.com",
              },
              { Icon: Phone, title: "Phone", body: "+91 8608520520", href: "tel:+918608520520" },
              {
                Icon: Clock,
                title: "Business Hours",
                body: "Monday to Friday, 9:00 AM to 6:00 PM IST",
              },
            ].map(({ Icon, title, body, href }) => (
              <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-semibold text-primary">{title}</div>
                  {href ? (
                    <a href={href} className="text-sm text-muted-foreground hover:text-accent">
                      {body}
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">{body}</div>
                  )}
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Rashwin Industries Location"
                src="https://www.google.com/maps?q=Saidapet,+Chennai,+India&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
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
              <button
                type="submit"
                className="w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Send Message
              </button>
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
