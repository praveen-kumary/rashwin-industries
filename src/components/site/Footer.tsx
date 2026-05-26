import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter, Factory } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
              <Factory size={20} />
            </span>
            <span className="font-display text-lg font-bold">Rashwin Industries</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Manufacturers and suppliers of industrial computing & networking products since 2012.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Get In Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" /> No. 859/B, SY28/2 NTI LAYOUT 2ND PHASE, RAJIV GANDHI NAGAR, BANGALORE URBAN, KARNATAKA - 560097
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />{" "}
              <a href="mailto:info@rashwinindustries.com" className="hover:text-accent">
                info@rashwinindustries.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />{" "}
              <a href="tel:+918608520520" className="hover:text-accent">
                +91 8608520520
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Products
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Industrial PC</li>
            <li>Rackmount & Workstation PC</li>
            <li>Touch Screen Displays</li>
            <li>Ethernet Switches</li>
            <li>Protocol Converters</li>
            <li>GPS Vehicle Tracking</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          Copyright 2026, Rashwin Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
