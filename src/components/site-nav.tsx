import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function SiteNav() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-gold text-2xl">❋</span>
          <span className="font-display text-xl tracking-[0.3em] text-foreground">KAMVARA</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <Link to="/" className="text-sm uppercase tracking-[0.25em] text-foreground/80 transition hover:text-gold [&.active]:text-gold">Shop</Link>
          <Link to="/about" className="text-sm uppercase tracking-[0.25em] text-foreground/80 transition hover:text-gold [&.active]:text-gold">Our Story</Link>
          <Link to="/cart" className="text-sm uppercase tracking-[0.25em] text-foreground/80 transition hover:text-gold [&.active]:text-gold">Cart</Link>
        </div>
        <Link to="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-primary-foreground">
          <ShoppingBag className="h-4 w-4" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-primary-foreground">
              {count}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-gold/15 bg-olive-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-2xl">❋</span>
              <span className="font-display text-lg tracking-[0.3em]">KAMVARA</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Nourished by nature. Clean plant protein, nothing hidden.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>All Flavors</li><li>Subscriptions</li><li>Bundles</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Our Story</li><li>How It's Made</li><li>Sustainability</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@kamvara.in</li><li>+91 00000 00000</li><li>@kamvara.nutrition</li>
            </ul>
          </div>
        </div>
        <div className="gold-divider mt-12" />
        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Kamvara · Nourished By Nature
        </p>
      </div>
    </footer>
  );
}
