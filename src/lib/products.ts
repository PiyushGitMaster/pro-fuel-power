import orange from "@/assets/flavor-orange.jpg";
import coffee from "@/assets/flavor-coffee.jpg";
import chocolate from "@/assets/flavor-chocolate.jpg";
import strawberry from "@/assets/flavor-strawberry.jpg";
import vanilla from "@/assets/flavor-vanilla.jpg";
import unflavored from "@/assets/flavor-unflavored.jpg";

export type Product = {
  id: string;
  name: string;
  flavor: string;
  emoji: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  accent: string; // gradient hint for hero switcher
};

export const products: Product[] = [
  {
    id: "orange-cream",
    name: "Orange Cream",
    flavor: "Orange Cream",
    emoji: "🍊",
    price: 1499,
    image: orange,
    rating: 4.8,
    description: "Bright citrus meets velvety cream. A sunlit lift for your morning shake.",
    accent: "linear-gradient(135deg, oklch(0.22 0.04 125), oklch(0.45 0.12 60))",
  },
  {
    id: "cold-brew-coffee",
    name: "Cold Brew Coffee",
    flavor: "Cold Brew Coffee",
    emoji: "☕",
    price: 1599,
    image: coffee,
    rating: 4.9,
    description: "Slow-steeped arabica notes with a clean roast finish. Wake the grind.",
    accent: "linear-gradient(135deg, oklch(0.22 0.04 125), oklch(0.3 0.06 55))",
  },
  {
    id: "double-chocolate",
    name: "Double Chocolate",
    flavor: "Double Chocolate",
    emoji: "🍫",
    price: 1599,
    image: chocolate,
    rating: 4.9,
    description: "Twin-pressed cacao. Deep, dark, decadent — without the sugar guilt.",
    accent: "linear-gradient(135deg, oklch(0.22 0.04 125), oklch(0.28 0.06 40))",
  },
  {
    id: "strawberry-burst",
    name: "Strawberry Burst",
    flavor: "Strawberry Burst",
    emoji: "🍓",
    price: 1499,
    image: strawberry,
    rating: 4.7,
    description: "Field-fresh strawberries, naturally vivid. Sweet without compromise.",
    accent: "linear-gradient(135deg, oklch(0.22 0.04 125), oklch(0.45 0.15 15))",
  },
  {
    id: "vanilla-ice-cream",
    name: "Vanilla Ice Cream",
    flavor: "Vanilla Ice Cream",
    emoji: "🍦",
    price: 1499,
    image: vanilla,
    rating: 4.8,
    description: "Madagascar vanilla, creamy depth. The classic — refined.",
    accent: "linear-gradient(135deg, oklch(0.22 0.04 125), oklch(0.55 0.08 85))",
  },
  {
    id: "unflavored",
    name: "Unflavored Raw",
    flavor: "Unflavored",
    emoji: "🌱",
    price: 1399,
    image: unflavored,
    rating: 4.6,
    description: "Pure plant protein, untouched. Mix into anything, taste nothing artificial.",
    accent: "linear-gradient(135deg, oklch(0.22 0.04 125), oklch(0.4 0.08 130))",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
