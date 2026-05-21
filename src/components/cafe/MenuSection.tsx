import { useState } from "react";
import { menu, type Category } from "@/data/menu";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

const categories: ("All" | Category)[] = ["All", "Coffee", "Tea", "Pastries", "Brunch"];

export const MenuSection = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const items = active === "All" ? menu : menu.filter((m) => m.category === active);

  return (
    <section id="menu" className="bg-secondary/40 py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">The menu</p>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Made each morning</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              A small, seasonal lineup. Prices are fair and the beans are traceable.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  active === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m, i) => (
            <ProductCard key={m.id} item={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
