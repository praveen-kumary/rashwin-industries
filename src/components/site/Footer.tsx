import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter, Factory } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/rashwin-logo.webp" alt="Rashwin Industries Logo" className="h-14 sm:h-16 md:h-16 w-auto object-contain scale-110 origin-left drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
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
              <a href="tel:+919620994949" className="hover:text-accent">
                +91 9620994949
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
            <li>
              <Link to="/products/$categorySlug" params={{ categorySlug: "industrial-pc" }} className="hover:text-accent transition-colors">
                Industrial PC
              </Link>
            </li>
            <li>
              <Link to="/products/$categorySlug" params={{ categorySlug: "industrial-rackmount-pc" }} className="hover:text-accent transition-colors">
                Industrial Rackmount PC
              </Link>
            </li>
            <li>
              <Link to="/products/$categorySlug" params={{ categorySlug: "industrial-touch-screen-display" }} className="hover:text-accent transition-colors">
                Industrial Touch Screen Display
              </Link>
            </li>
            <li>
              <Link to="/products/$categorySlug" params={{ categorySlug: "industrial-data-communication" }} className="hover:text-accent transition-colors">
                Industrial Data Communication
              </Link>
            </li>
            <li>
              <Link to="/products/$categorySlug" params={{ categorySlug: "industrial-ethernet-switches" }} className="hover:text-accent transition-colors">
                Industrial Ethernet Switches
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            Copyright 2026, Rashwin Industries. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Designed by{" "}
            <a 
              href="https://www.metromindz.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium hover:text-accent transition-colors"
            >
              Metromindz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
