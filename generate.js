const fs = require("fs");

// ✅ Minimal menu (NO dynamic logic needed)
const menu = [
  {
    id: "flat-white",
    name: "Flat White",
    category: "Coffee",
    price: 4.5,
    description: "Double ristretto with steamed milk.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
    tags: ["espresso", "milk"],
    caffeineMg: 130
  },
  {
    id: "cold-brew",
    name: "24h Cold Brew",
    category: "Coffee",
    price: 5.0,
    description: "Slow-steeped smooth cold coffee.",
    image: "https://images.unsplash.com/photo-1461023058943-07fc2d0ef923",
    tags: ["cold", "strong"],
    caffeineMg: 200,
    vegan: true
  },
  {
    id: "matcha",
    name: "Ceremonial Matcha",
    category: "Tea",
    price: 5.5,
    description: "Premium matcha with oat milk.",
    image: "https://images.unsplash.com/photo-1536934331-c9fa40f4e240",
    tags: ["green tea"],
    caffeineMg: 70,
    vegan: true
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    category: "Pastries",
    price: 3.75,
    description: "Flaky buttery pastry.",
    image: "https://images.unsplash.com/photo-1509365465974-eb6b0a68d839",
    tags: ["buttery"]
  },
  {
    id: "cake",
    name: "Olive Oil & Citrus Cake",
    category: "Pastries",
    price: 4.25,
    description: "Moist citrus cake.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    tags: ["sweet"]
  },
  {
    id: "avocado-toast",
    name: "Avocado & Sumac Toast",
    category: "Brunch",
    price: 9.5,
    description: "Sourdough toast with avocado and egg.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa14424e20",
    tags: ["savory"]
  }
];

// ✅ TypeScript output (clean)
const tsCode = `
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
}

export const menu: MenuItem[] = ${JSON.stringify(menu, null, 2)};

export const cafeInfo = {
  name: "Brewline",
  tagline: "Slow-crafted coffee. Honest pastries.",
  hours: {
    weekdays: "7:00 – 18:00",
    saturday: "8:00 – 19:00",
    sunday: "8:00 – 16:00",
  },
  address: "42 Linden Lane, Eastside",
  phone: "+1 (415) 555-0142",
};
`;

fs.writeFileSync("src/data/menu.ts", tsCode);

console.log("✅ Clean menu generated!");