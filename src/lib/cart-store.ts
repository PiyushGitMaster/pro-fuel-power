import { useEffect, useState, useSyncExternalStore } from "react";
import type { Product } from "./products";
import { products } from "./products";

export type CartItem = { id: string; qty: number };

const KEY = "kamvara_cart_v1";

let state: CartItem[] = [];
const listeners = new Set<() => void>();

function load() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = JSON.parse(raw);
  } catch {}
}
load();

function persist() {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
  listeners.forEach((l) => l());
}

export const cart = {
  subscribe(cb: () => void) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  get() {
    return state;
  },
  add(id: string, qty = 1) {
    const existing = state.find((i) => i.id === id);
    if (existing) state = state.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
    else state = [...state, { id, qty }];
    persist();
  },
  setQty(id: string, qty: number) {
    state = qty <= 0 ? state.filter((i) => i.id !== id) : state.map((i) => (i.id === id ? { ...i, qty } : i));
    persist();
  },
  remove(id: string) {
    state = state.filter((i) => i.id !== id);
    persist();
  },
  clear() {
    state = [];
    persist();
  },
};

export function useCart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const items = useSyncExternalStore(
    (cb) => cart.subscribe(cb),
    () => cart.get(),
    () => [] as CartItem[],
  );
  const detailed = items.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) as Product })).filter((i) => i.product);
  const count = mounted ? detailed.reduce((s, i) => s + i.qty, 0) : 0;
  const subtotal = detailed.reduce((s, i) => s + i.product.price * i.qty, 0);
  return { items: detailed, count, subtotal, mounted };
}
