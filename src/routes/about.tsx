import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Snowflake, FlaskConical, Sparkles, Package } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import heroImg from "@/assets/hero-kamvara.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Kamvara | How Clean Protein Is Made" },
      { name: "description", content: "From farm to sachet. Discover the five-step ritual behind every gram of Kamvara plant protein — sourcing, cold processing, lab testing, flavor crafting, and eco-friendly packaging." },
      { property: "og:title", content: "How Kamvara Is Made" },
      { property: "og:description", content: "The five-step ritual behind every sachet of Kamvara." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: About,
});

const steps = [
  { icon: Sprout, title: "Sourcing", body: "Pea and brown rice proteins from certified farms practicing regenerative agriculture. We know every grower by name." },
  { icon: Snowflake, title: "Cold Processing", body: "Low-temperature filtration preserves amino acid integrity. No heat damage. No denaturing. Just the protein, intact." },
  { icon: FlaskConical, title: "Lab Testing", body: "Every batch is third-party tested for purity, potency, and heavy metals. Results published. Nothing hidden." },
  { icon: Sparkles, title: "Flavor Crafting", body: "Real cocoa, slow-steeped coffee, sun-ripe fruit. Natural flavoring only. Stevia for the gentle sweetness." },
  { icon: Package, title: "Packaging", body: "Resealable, eco-friendly pouches printed with plant-based inks. Designed to compost back into the earth that fed it." },
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-gold/15">
        <img src={heroImg} alt="Kamvara protein collection" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Our Story</span>
          <h1 className="mt-6 font-display text-6xl md:text-8xl">Good for you.<br/><span className="gold-text italic">Good for the planet.</span></h1>
          <div className="gold-divider mx-auto mt-8 w-32" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Kamvara was born from a simple frustration: the world's "clean" proteins were anything but.
            We set out to build the protein we wanted to drink — rooted in plants, free of artifice,
            and honest enough to print every ingredient on the front.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">The Ritual</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">From Farm to <span className="gold-text italic">Sachet.</span></h2>
        </div>
        <ol className="relative space-y-16 before:absolute before:left-8 before:top-0 before:h-full before:w-px before:bg-gold/30 md:before:left-1/2">
          {steps.map((s, i) => (
            <li key={s.title} className={`relative grid gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="flex items-start gap-6 md:justify-end">
                <div className="md:text-right">
                  <span className="font-display text-7xl gold-text">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="absolute -left-9 top-1 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-card text-gold md:-left-8 md:left-auto md:-translate-x-[calc(50%+1px)]" style={{ left: "calc(-2rem)" }}>
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="pt-2 text-base leading-relaxed text-muted-foreground md:pt-4">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-y border-gold/15 bg-olive-deep py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Certified</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Trust, Verified.</h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {["GMP Certified", "Informed Sport", "Non-GMO", "FSSAI Approved"].map((c) => (
              <div key={c} className="border border-gold/30 px-6 py-8">
                <p className="text-gold text-3xl">❋</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold">A Note From The Founder</span>
        <blockquote className="mt-8 font-display text-3xl italic leading-relaxed md:text-4xl">
          "We named it <span className="gold-text">Kamvara</span> — from the Sanskrit for 'desire fulfilled.'
          Because nourishment shouldn't ask you to compromise."
        </blockquote>
        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">— The Kamvara Team</p>
      </section>

      <SiteFooter />
    </div>
  );
}
