import { cafeInfo } from "@/data/menu";

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
      <p>© {new Date().getFullYear()} {cafeInfo.name}. Roasted, baked, and brewed in-house.</p>
      <p>Made with patience and good beans.</p>
    </div>
  </footer>
);
