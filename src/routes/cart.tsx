import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, cart } from "@/lib/cart-store";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Kamvara" },
      { name: "description", content: "Review your Kamvara plant protein order and complete checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, count, mounted } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = subtotal > 0 && subtotal < 1999 ? 99 : 0;
  const total = subtotal + shipping;

  if (placed) {
    return (
      <div className="min-h-screen">
        <SiteNav />
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <p className="text-gold text-5xl">❋</p>
          <h1 className="mt-6 font-display text-5xl">Order Placed.</h1>
          <p className="mt-4 text-muted-foreground">Thank you. A confirmation is on its way to your inbox.</p>
          <Link to="/" className="mt-10 inline-block border border-gold/50 px-8 py-3 text-xs uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-primary-foreground transition">
            Continue Shopping
          </Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Checkout</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Your <span className="gold-text italic">Cart.</span></h1>
        </div>

        {mounted && count === 0 ? (
          <div className="border border-gold/20 bg-card py-24 text-center">
            <p className="font-display text-3xl">Your cart is empty.</p>
            <p className="mt-3 text-muted-foreground">Start with a flavor that calls you.</p>
            <Link to="/" className="mt-8 inline-block border border-gold/50 px-8 py-3 text-xs uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-primary-foreground transition">
              Shop Flavors
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-6 border border-gold/15 bg-card p-4">
                  <img src={i.product.image} alt={i.product.name} className="h-32 w-28 object-cover" loading="lazy" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{i.product.emoji} {i.product.flavor}</p>
                      <h3 className="mt-1 font-display text-xl">{i.product.name}</h3>
                      <p className="text-sm gold-text font-display">₹{i.product.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gold/30">
                        <button onClick={() => cart.setQty(i.id, i.qty - 1)} className="px-3 py-2 text-gold hover:bg-gold/10"><Minus className="h-3 w-3"/></button>
                        <span className="min-w-10 text-center text-sm">{i.qty}</span>
                        <button onClick={() => cart.setQty(i.id, i.qty + 1)} className="px-3 py-2 text-gold hover:bg-gold/10"><Plus className="h-3 w-3"/></button>
                      </div>
                      <button onClick={() => { cart.remove(i.id); toast("Removed"); }} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                cart.clear();
                setPlaced(true);
              }}
              className="h-fit space-y-6 border border-gold/20 bg-card p-8"
            >
              <h2 className="font-display text-2xl">Order Summary</h2>
              <div className="gold-divider" />
              <div className="space-y-3 text-sm">
                <Row label="Subtotal" value={`₹${subtotal}`} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : `₹${shipping}`} />
                <div className="gold-divider" />
                <Row label="Total" value={`₹${total}`} bold />
              </div>

              <div className="space-y-3 pt-4">
                <Input placeholder="Full Name" required />
                <Input placeholder="Email" type="email" required />
                <Input placeholder="Address" required />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="City" required />
                  <Input placeholder="Pincode" required />
                </div>
                <Input placeholder="Card Number  •  4242 4242 4242 4242" required />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="MM / YY" required />
                  <Input placeholder="CVC" required />
                </div>
              </div>

              <button className="w-full bg-gold py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-gold-soft">
                Place Order · ₹{total}
              </button>
              <p className="text-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Demo checkout · no charge</p>
            </form>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-display text-xl gold-text" : "text-muted-foreground"}`}>
      <span>{label}</span><span>{value}</span>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full border border-gold/25 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none" />;
}
