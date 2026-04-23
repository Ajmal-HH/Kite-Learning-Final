import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/kite-logo.png";

const nav = [
  { label: "Home", to: "#hero", type: "scroll" },
  { label: "Programs", to: "#programs", type: "scroll" },
  { label: "Testimonials", to: "#testimonials", type: "scroll" },
  { label: "About", to: "#about", type: "scroll" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <span className="text-xl font-extrabold flex items-center">
            <span className="text-foreground">KITE</span>
            <span className="text-gradient-brand ml-1">LEARNING</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) =>
            n.type === "scroll" ? (
              <a
                key={n.label}
                href={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition"
              >
                {n.label}
              </a>
            ) : (
              <Link
                key={n.label}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition"
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <a
            href="https://chat.whatsapp.com/L6hZgCxa72ZAuMoexCOZhu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
          >
            Join <ArrowRight className="h-4 w-4" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-3 space-y-1">
            {nav.map((n) =>
              n.type === "scroll" ? (
                <a
                  key={n.label}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm hover:bg-muted"
                >
                  {n.label}
                </a>
              ) : (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm hover:bg-muted"
                >
                  {n.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}