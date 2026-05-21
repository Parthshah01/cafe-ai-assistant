const fs = require('fs');
const menu = JSON.parse(fs.readFileSync('backend/data/menu.json'));

const unsplash = (id) => `'"https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80"'`;

const pools = {
  coffee: [
    'imgFlatWhite',
    'imgColdBrew',
    unsplash('1497935586351-b67a49e012bf'),
    unsplash('1511920170033-f8396924c348'),
    unsplash('1534040385115-33dcb3acba5b'),
    unsplash('1509042239860-f550ce710b93'),
  ],
  tea: [
    'imgMatcha',
    unsplash('1558160074-4d7d8bdf4256'),
    unsplash('1513558161293-cdaf765ed2fd'),
    unsplash('1505252585461-04db1eb84625'),
  ],
  drinks: [
    unsplash('1505252585461-04db1eb84625'),
    unsplash('1513558161293-cdaf765ed2fd'),
    unsplash('1512621776951-a57141f2eefd'),
  ],
  food: [
    'imgCroissant',
    'imgToast',
    unsplash('1528735602780-2552fd46c7af'),
    unsplash('1512621776951-a57141f2eefd'),
  ],
  desserts: [
    'imgCake',
    unsplash('1578985545062-69928b1d9587'),
    unsplash('1606313564200-e75d5e30476c'),
  ]
};const fs = require("fs");
const menu = JSON.parse(fs.readFileSync("backend/data/menu.json"));

// ✅ Map only your 6 items to correct local images
function getImage(name) {
  const n = name.toLowerCase();

  if (n.includes("flat")) return "imgFlatWhite";
  if (n.includes("cold")) return "imgColdBrew";
  if (n.includes("matcha")) return "imgMatcha";
  if (n.includes("croissant")) return "imgCroissant";
  if (n.includes("cake")) return "imgCake";
  if (n.includes("toast")) return "imgToast";

  return "imgFlatWhite"; // fallback
}

const itemsArrayString = menu.map(m => {
  return `  {
    id: "${m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}",
    name: "${m.name}",
    category: "${m.category}",
    price: ${m.price},
    description: "${m.description}",
    image: ${getImage(m.name)},
    tags: ${JSON.stringify(m.tags)},
    ${m.caffeineMg ? `caffeineMg: ${m.caffeineMg},` : ""}
    ${m.vegan !== undefined ? `vegan: ${m.vegan},` : ""}
  }`;
}).join(",\n");

let tsCode = `import imgFlatWhite from "@/assets/menu-flatwhite.jpg";
import imgColdBrew from "@/assets/menu-coldbrew.jpg";
import imgMatcha from "@/assets/menu-matcha.jpg";
import imgCroissant from "@/assets/menu-croissant.jpg";
import imgCake from "@/assets/menu-cake.jpg";
import imgToast from "@/assets/menu-toast.jpg";

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

export const menu: MenuItem[] = [
${itemsArrayString}
];

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

console.log("✅ Clean menu.ts generated!");

const counters = {
  coffee: 0,
  tea: 0,
  drinks: 0,
  food: 0,
  desserts: 0
};

function getNextImage(category) {
  let poolKey = 'coffee';
  if (category.includes('Coffee')) poolKey = 'coffee';
  else if (category.includes('Tea')) poolKey = 'tea';
  else if (category.includes('Drinks')) poolKey = 'drinks';
  else if (category === 'Food') poolKey = 'food';
  else if (category === 'Desserts') poolKey = 'desserts';

  const pool = pools[poolKey];
  const idx = counters[poolKey] % pool.length;
  counters[poolKey]++;
  return pool[idx];
}

const itemsArrayString = menu.map(m => {
  const imgVal = getNextImage(m.category);
  return `  {
    id: "${m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}",
    name: "${m.name}",
    category: "${m.category}",
    price: ${m.price},
    description: "${m.description}",
    image: ${imgVal},
    tags: ${JSON.stringify(m.tags)}
  }`;
}).join(',\n');

let tsCode = `import imgFlatWhite from "@/assets/menu-flatwhite.jpg";
import imgColdBrew from "@/assets/menu-coldbrew.jpg";
import imgMatcha from "@/assets/menu-matcha.jpg";
import imgCroissant from "@/assets/menu-croissant.jpg";
import imgCake from "@/assets/menu-cake.jpg";
import imgToast from "@/assets/menu-toast.jpg";

export type Category = "Coffee" | "Specialty Coffee" | "Tea" | "Non-Coffee Drinks" | "Vegan Drinks" | "Food" | "Desserts";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  tags: string[];
}

export const menu: MenuItem[] = [
${itemsArrayString}
];

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
  wifi: "Free wifi · plenty of plugs",
  seating: "32 seats indoors, 12 on the patio",
  philosophy:
    "We work directly with three farms in Ethiopia, Colombia, and Guatemala. Beans are roasted weekly in small drums and rested 7 days before brew.",
};
`;

fs.writeFileSync('src/data/menu.ts', tsCode);
console.log('Done!');
