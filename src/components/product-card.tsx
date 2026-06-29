import { Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { cart } from "@/lib/cart-store";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="hover-lift group relative overflow-hidden rounded-sm border border-gold/20 bg-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-olive-deep">
        <img
          src={product.image}
          alt={`Kamvara ${product.name} plant protein`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur">
          {product.emoji} {product.flavor}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-foreground">{product.name}</h3>
          <div className="flex items-center gap-1 text-gold">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs">{product.rating}</span>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-2xl gold-text">₹{product.price}</span>
          <button
            onClick={() => {
              cart.add(product.id);
              toast.success(`${product.name} added to cart`);
            }}
            className="rounded-sm border border-gold/50 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
