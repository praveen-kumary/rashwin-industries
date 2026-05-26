import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Factory, ChevronDown, ChevronRight, Cpu, Monitor, Network, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  
  // Track which left-side division is active on desktop hover
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMenuOpen(false);
    }, 200);
  };

  const divisions = [
    {
      name: "Computing & Systems",
      tagline: "High-performance edge nodes & rackmount computing platforms.",
      icon: Cpu,
      categories: products.filter((p) =>
        ["industrial-pc", "industrial-rackmount-pc"].includes(p.slug),
      ),
    },
    {
      name: "Display & HMI",
      tagline: "IP65-rated resilient visualization controls and rugged touch interfaces.",
      icon: Monitor,
      categories: products.filter((p) => ["industrial-touch-screen-display"].includes(p.slug)),
    },
    {
      name: "Data & Networking",
      tagline: "Substation switches and protocol communication units.",
      icon: Network,
      categories: products.filter((p) =>
        ["industrial-data-communication", "industrial-ethernet-switches"].includes(p.slug),
      ),
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-border/40"
          : "bg-background border-b border-transparent"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center max-w-[60%] sm:max-w-[70%]">
          <img src="/images/rashwin-logo.webp" alt="Rashwin Industries Logo" className="h-14 sm:h-16 md:h-16 w-auto object-contain scale-110 origin-left drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            activeProps={{ className: "text-accent font-semibold" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            activeProps={{ className: "text-accent font-semibold" }}
          >
            About
          </Link>

          {/* Mega Menu Toggle Element */}
          <div onMouseEnter={handleMouseEnter} className="inline-block">
            <Link
              to="/products"
              className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                desktopMenuOpen ? "text-accent font-semibold" : "text-foreground hover:text-accent"
              }`}
              activeProps={{ className: "text-accent font-semibold" }}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${desktopMenuOpen ? "rotate-180 text-accent" : ""}`}
              />
            </Link>
          </div>

          <Link
            to="/contact"
            className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            activeProps={{ className: "text-accent font-semibold" }}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="ml-4 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 shadow-sm"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-primary md:hidden hover:bg-secondary transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Premium Full-Width Segmented Desktop Dropdown */}
      {desktopMenuOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          className="absolute left-0 right-0 top-full w-full border-b border-border bg-background shadow-2xl animate-in fade-in slide-in-from-top-1.5 duration-200 hidden md:block"
        >
          {/* Inner Centered Layout Container matching the Navbar exactly */}
          <div className="mx-auto max-w-7xl grid grid-cols-12 min-h-[380px]">
            
            {/* Left Side Navigation Sidebar */}
            <div className="col-span-4 border-r border-border/60 bg-secondary/10 p-6 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 block mb-4">
                  Hardware Categories
                </span>
                
                {divisions.map((div, idx) => {
                  const DivIcon = div.icon;
                  const isCurrent = activeDivisionIndex === idx;
                  
                  return (
                    <div
                      key={div.name}
                      onMouseEnter={() => setActiveDivisionIndex(idx)}
                      className={`flex items-start gap-3.5 p-3.5 rounded-xl transition-all duration-150 cursor-pointer group border ${
                        isCurrent 
                          ? "bg-background border-border shadow-sm ring-1 ring-black/[0.02]" 
                          : "hover:bg-secondary/40 border-transparent"
                      }`}
                    >
                      <div className={`p-2 rounded-lg border transition-colors ${
                        isCurrent 
                          ? "bg-accent/10 border-accent/20 text-accent" 
                          : "bg-background border-border/50 text-muted-foreground group-hover:text-primary"
                      }`}>
                        <DivIcon size={16} />
                      </div>
                      <div className="space-y-0.5">
                        <span className={`text-xs font-bold block transition-colors ${isCurrent ? "text-accent" : "text-primary"}`}>
                          {div.name}
                        </span>
                        <p className="text-[11px] leading-normal text-muted-foreground line-clamp-2">
                          {div.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Left Utility Action Link */}
              <div className="border-t border-border/60 pt-4 mt-6">
                <Link
                  to="/products"
                  className="flex items-center justify-between group/all rounded-lg p-2 hover:bg-background/80 transition-all border border-transparent hover:border-border/40"
                >
                  <span className="text-[11px] font-bold text-primary">All Infrastructure Layers</span>
                  <span className="text-xs font-semibold text-accent flex items-center gap-0.5 group-hover/all:gap-1 transition-all">
                    View Matrix <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side Pane: Dynamically spacing columns out based on available items */}
            <div className="col-span-8 p-8 flex flex-col justify-between bg-background">
              
              <div className="space-y-6 max-h-[340px] overflow-y-auto pr-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 block">
                  Systems Inventory — {divisions[activeDivisionIndex].name}
                </span>
                
                {/* FIX: Switched grid to custom flex container with equal-basis child widths.
                  If there are 2 main columns, they fill up the page split 50/50 instead of creating an empty hole on the right.
                */}
                <div className="flex flex-row flex-wrap gap-x-12 gap-y-8 items-start">
                  {divisions[activeDivisionIndex].categories.map((cat) => (
                    <div key={cat.slug} className="flex-1 min-w-[200px] max-w-[320px] space-y-3">
                      <Link
                        to="/products/$categorySlug"
                        params={{ categorySlug: cat.slug }}
                        className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors group/cat"
                      >
                        {cat.title}
                        <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 transition-all text-accent" />
                      </Link>
                      
                      <ul className="space-y-2 border-l border-border/80 pl-3 ml-0.5">
                        {cat.series?.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              to="/products/$categorySlug/$seriesSlug"
                              params={{ categorySlug: cat.slug, seriesSlug: sub.slug }}
                              className="text-[11px] text-muted-foreground hover:text-primary block py-0.5 transition-colors whitespace-normal leading-normal"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Bottom Action Strip bounding box alignment */}
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Looking for bespoke alterations or custom thermal architectures?</span>
                <Link to="/contact" className="font-bold text-accent hover:underline flex items-center gap-0.5">
                  Contact Architecture Team <ChevronRight size={12} />
                </Link>
              </div>

            </div>
          </div>

          {/* Global Bottom Status Bar */}
          <div className="border-t border-border/60 bg-secondary/40 px-4 py-3 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground font-medium flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ISO 9001:2015 cert compliance certified structural frameworks.
              </span>
              <span className="text-muted-foreground">
                Rashwin Engineering Labs • Last Updated May 2026
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Code remains unchanged below... */}
      {open && (
        <div className="border-t border-border bg-background md:hidden shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors">About</Link>
            
            <div className="my-2 border-y border-border/40 py-4">
              <span className="mb-3 block px-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Products Portfolio</span>
              <div className="space-y-4">
                {divisions.map((div) => (
                  <div key={div.name} className="px-3">
                    <span className="mb-1.5 block text-sm font-bold text-primary">{div.name}</span>
                    <div className="ml-1 space-y-1 border-l-2 border-border/50 pl-3">
                      {div.categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to="/products/$categorySlug"
                          params={{ categorySlug: cat.slug }}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/products" onClick={() => setOpen(false)} className="mt-4 block px-3 text-sm font-bold text-accent hover:underline">
                View All Categories &rarr;
              </Link>
            </div>
            
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors">Contact</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 rounded-md bg-accent px-4 py-3 text-center text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90">Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}