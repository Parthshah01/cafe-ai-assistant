import { Plus, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/data/menu";

export const ProductCard = ({ item, index }: { item: MenuItem; index: number }) => (
  <article
    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
          {item.category}
        </span>
        {item.vegan && (
          <span className="inline-flex items-center gap-1 rounded-full bg-moss/90 px-2.5 py-1 text-xs font-medium text-background">
            <Leaf className="h-3 w-3" /> Vegan
          </span>
        )}
      </div>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-semibold leading-tight">{item.name}</h3>
        <span className="font-display text-lg text-accent">${item.price.toFixed(2)}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      <Button size="sm" className="mt-5 self-start gap-1.5 rounded-full">
        <Plus className="h-4 w-4" /> Add to order
      </Button>
    </div>
  </article>
);
