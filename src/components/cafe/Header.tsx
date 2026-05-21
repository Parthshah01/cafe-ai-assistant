import { Coffee, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => (
  <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between">
      <a href="#top" className="flex items-center gap-2">
        <Coffee className="h-5 w-5 text-accent" />
        <span className="font-display text-xl font-semibold tracking-tight">Brewline</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm md:flex">
        <a href="#menu" className="text-muted-foreground transition-colors hover:text-foreground">Menu</a>
        <a href="#story" className="text-muted-foreground transition-colors hover:text-foreground">Our story</a>
        <a href="#visit" className="text-muted-foreground transition-colors hover:text-foreground">Visit</a>
      </nav>
      <Button size="sm" className="gap-2 rounded-full">
        <ShoppingBag className="h-4 w-4" /> Order
      </Button>
    </div>
  </header>
);
