import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Leaf, ShieldCheck, FlaskConical, Award } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import heroImg from "@/assets/hero-kamvara.jpg";
import bgBotanical from "@/assets/bg-botanical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamvara — Clean Plant Protein | Nourished By Nature" },
      { name: "description", content: "Premium plant-based protein with 24g protein per serving. Six naturally crafted flavors. Clean ingredients. Real nutrition." },
      { property: "og:title", content: "Kamvara — Clean Plant Protein" },
      { property: "og:description", content: "24g of clean plant protein. Six flavors. Nothing artificial." },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeFlavor, setActiveFlavor] = useState(products[1]);

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${bgBotanical})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="fade-up flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Nourished By Nature</span>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              Fuel Your<br/><span className="gold-text italic">Grind.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              A delicious blend of premium plant proteins to support your strength,
              recovery and everyday wellness. 24g protein. Zero artificial.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#shop" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-gold-soft">
                Shop Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <Link to="/about" className="text-xs uppercase tracking-[0.3em] text-foreground/80 underline-offset-8 hover:text-gold hover:underline">
                Our Story
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gold/20 pt-8">
              <Stat label="Protein" value="24g" />
              <Stat label="BCAA" value="5g" />
              <Stat label="Added Sugar" value="0g" />
            </div>
          </div>

          {/* Animated flavor switcher */}
          <div className="relative">
            <div
              key={activeFlavor.id}
              className="scale-in relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/30"
              style={{ background: activeFlavor.accent }}
            >
              <img
                src={activeFlavor.image}
                alt={activeFlavor.name}
                className="h-full w-full object-cover float"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{activeFlavor.emoji} Flavor</p>
                <h3 className="mt-1 font-display text-3xl text-foreground">{activeFlavor.name}</h3>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveFlavor(p)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-lg transition ${
                    activeFlavor.id === p.id
                      ? "border-gold bg-gold text-primary-foreground scale-110"
                      : "border-gold/30 text-foreground/70 hover:border-gold hover:text-gold"
                  }`}
                  aria-label={p.name}
                >
                  {p.emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Our Collection</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Six Flavors. <span className="gold-text italic">One Promise.</span></h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* WHY */}
      <section className="relative border-y border-gold/15 bg-olive-deep py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Why Kamvara</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Clean Ingredients. <br/><span className="gold-text italic">Real Nutrition.</span></h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <Pillar icon={Leaf} title="Plant Based" body="Pea & brown rice protein from certified sources." />
            <Pillar icon={ShieldCheck} title="Non-GMO" body="No artificial flavours, dyes, or fillers." />
            <Pillar icon={FlaskConical} title="Lab Tested" body="Third-party tested for purity and heavy metals." />
            <Pillar icon={Award} title="GMP Certified" body="Manufactured under strict quality control." />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Loved By</span>
          <h2 className="mt-4 font-display text-5xl">The Quiet Believers.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-sm border border-gold/15 bg-card p-8 hover-lift">
              <p className="text-gold text-2xl">"</p>
              <blockquote className="mt-2 font-display text-lg italic leading-relaxed text-foreground/90">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-gold/15 pt-4">
                <p className="text-sm text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-sm border border-gold/30 px-6 py-20 text-center">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="relative">
          <h2 className="font-display text-5xl md:text-6xl">Begin Your <span className="gold-text italic">Ritual.</span></h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">One sachet. Two hundred millilitres. A daily promise to your body.</p>
          <a href="#shop" className="mt-8 inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-gold-soft">
            Shop All Flavors <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-3xl gold-text">{value}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
    </div>
  );
}

function Pillar({ icon: Icon, title, body }: { icon: typeof Leaf; title: string; body: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

const testimonials = [
  { quote: "It actually tastes like coffee — not chalk. Mixes clean, sits light. Part of my morning now.", name: "Arjun M.", role: "Marathoner, Bengaluru" },
  { quote: "Switched from whey for the gut. Strawberry Burst is genuinely good. No bloat, real recovery.", name: "Priya S.", role: "Yoga Instructor" },
  { quote: "The packaging alone tells you they care. The protein tells you they know what they're doing.", name: "Rahul K.", role: "Strength Coach" },
];
