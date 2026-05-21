import hero from "@/assets/hero-coffee.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
      <div className="animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> New: AI barista, ask anything about the menu
        </span>
        <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
          Slow-crafted coffee.<br />
          <span className="italic text-accent">Honest</span> pastries.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          Single-origin beans, baked-this-morning butter croissants, and a quiet corner with strong wifi. Open from 7am.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" className="gap-2 rounded-full" asChild>
            <a href="#menu">See the menu <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full" asChild>
            <a href="#visit">Visit us</a>
          </Button>
        </div>
        <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
          {[
            ["3", "Origin farms"],
            ["7d", "Rested beans"],
            ["7am", "Doors open"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-3xl font-semibold text-foreground">{n}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-warm blur-2xl opacity-70" />
        <div className="relative overflow-hidden rounded-[2rem] shadow-warm">
          <img src={hero} alt="Hand pouring espresso into a ceramic cup" className="h-[420px] w-full object-cover md:h-[560px]" />
          <div className="absolute inset-0 bg-gradient-espresso" />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-background/90 px-4 py-3 backdrop-blur">
            <p className="font-display text-sm">Today's pour</p>
            <p className="text-xs text-muted-foreground">Ethiopia Guji · floral, citrus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
