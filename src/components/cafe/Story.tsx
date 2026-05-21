import { cafeInfo } from "@/data/menu";

export const Story = () => (
  <section id="story" className="py-20">
    <div className="container grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Our story</p>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl text-balance">
          Three farms, one small roaster, a lot of patience.
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground md:pt-4">
        <p>{cafeInfo.philosophy}</p>
        <p>
          Our pastries come from a single bakery two blocks away. Brunch is short and seasonal — what's good this week is what we serve.
        </p>
      </div>
    </div>
  </section>
);
