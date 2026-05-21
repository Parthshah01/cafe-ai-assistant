import flatwhite from "@/assets/menu-flatwhite.jpg";
import coldbrew from "@/assets/menu-coldbrew.jpg";
import matcha from "@/assets/menu-matcha.jpg";
import croissant from "@/assets/menu-croissant.jpg";
import cake from "@/assets/menu-cake.jpg";
import toast from "@/assets/menu-toast.jpg";

export type Category = "Coffee" | "Tea" | "Pastries" | "Brunch";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  tags: string[];
  caffeineMg?: number;
  vegan?: boolean;
  glutenFree?: boolean;
}

export const menu: MenuItem[] = [
  {
    id: "flat-white",
    name: "Flat White",
    category: "Coffee",
    price: 4.5,
    description: "Double ristretto under velvet steamed milk. Our house Ethiopia Guji blend, citrus and cocoa.",
    image: flatwhite,
    tags: ["espresso", "milk"],
    caffeineMg: 130,
  },
  {
    id: "cold-brew",
    name: "24h Cold Brew",
    category: "Coffee",
    price: 5.0,
    description: "Slow-steeped Colombian beans, dark chocolate finish. Served over a single hand-cut ice cube.",
    image: coldbrew,
    tags: ["iced", "strong"],
    caffeineMg: 200,
    vegan: true,
  },
  {
    id: "matcha-latte",
    name: "Ceremonial Matcha",
    category: "Tea",
    price: 5.5,
    description: "Stone-ground Uji matcha whisked with oat milk and a whisper of vanilla.",
    image: matcha,
    tags: ["green tea", "oat"],
    caffeineMg: 70,
    vegan: true,
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    category: "Pastries",
    price: 3.75,
    description: "72-hour cold-fermented dough laminated with French AOP butter. Baked at dawn.",
    image: croissant,
    tags: ["butter", "flaky"],
  },
  {
    id: "olive-oil-cake",
    name: "Olive Oil & Citrus Cake",
    category: "Pastries",
    price: 4.25,
    description: "Sicilian olive oil, blood orange zest, candied lemon. Naturally moist for days.",
    image: cake,
    tags: ["citrus", "moist"],
  },
  {
    id: "avocado-toast",
    name: "Avocado & Sumac Toast",
    category: "Brunch",
    price: 9.5,
    description: "Sourdough, smashed avocado, soft egg, sumac, chili crisp, and pickled shallot.",
    image: toast,
    tags: ["savory", "egg"],
    vegan: false,
  },
];

export const cafeInfo = {
  name: "Brewline",
  tagline: "Slow-crafted coffee. Honest pastries.",
  hours: {
    weekdays: "9:00 – 22:00",
    saturday: "10:00 – 23:00",
    sunday: "10:00 – 20:00",
  },
  address: "Shop 12, Solaris Plaza, SG Highway, Ahmedabad, Gujarat 380054",
  phone: "+91 98765 43210",
  wifi: "Free wifi · plenty of plugs",
  seating: "32 seats indoors, 12 on the patio",
  philosophy:
    "We work directly with three farms in Ethiopia, Colombia, and Guatemala. Beans are roasted weekly in small drums and rested 7 days before brew.",
};