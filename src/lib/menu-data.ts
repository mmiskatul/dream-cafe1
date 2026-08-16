import pizza from "@/assets/dream-cafe-food-01.jpg";
import pasta from "@/assets/dream-cafe-food-02.jpg";
import thai from "@/assets/dream-cafe-food-03.jpg";
import drinks from "@/assets/dream-cafe-drinks.jpg";
import burger from "@/assets/dream-cafe-gallery-02.jpg";
import table from "@/assets/dream-cafe-gallery-01.jpg";
import type { MenuItem } from "./site";

// Editable placeholder menu — swap names, descriptions and prices with the
// real Dream Cafe menu when it is provided.
export const menuItems: MenuItem[] = [
  {
    name: "Signature Dish",
    description: "The Dream Cafe house speciality, plated the way regulars love it.",
    price: "Price on menu",
    category: "Main Course",
    image: thai,
    spicy: true,
  },
  {
    name: "Chef's Special",
    description: "A rotating kitchen favourite prepared fresh through the day.",
    price: "Price on menu",
    category: "Main Course",
    image: pasta,
  },
  {
    name: "Popular Pizza",
    description: "Stone-baked, generously topped and made to be shared at the table.",
    price: "Price on menu",
    category: "Pizza",
    image: pizza,
    veg: true,
  },
  {
    name: "Special Pasta",
    description: "Creamy, comforting pasta finished with herbs and cheese.",
    price: "Price on menu",
    category: "Pasta",
    image: pasta,
    veg: true,
  },
  {
    name: "Refreshing Beverage",
    description: "Hot coffee, iced drinks and shakes for every part of the day.",
    price: "Price on menu",
    category: "Beverages",
    image: drinks,
    veg: true,
  },
  {
    name: "House Favourite",
    description: "Burger and fries platter — the go-to order for friends dropping by.",
    price: "Price on menu",
    category: "Fast Food",
    image: burger,
  },
  {
    name: "Crispy Starter",
    description: "Light bites to open the meal while the table fills up.",
    price: "Price on menu",
    category: "Starters",
    image: burger,
  },
  {
    name: "Soup of the Day",
    description: "Warm, simple and made fresh in the Dream Cafe kitchen.",
    price: "Price on menu",
    category: "Starters",
    image: thai,
    veg: true,
  },
  {
    name: "Thai Curry Platter",
    description: "Aromatic Thai curry served with steamed rice and noodles.",
    price: "Price on menu",
    category: "Thai",
    image: thai,
    spicy: true,
  },
  {
    name: "Thai Noodles",
    description: "Wok-tossed noodles with vegetables and a fragrant sauce.",
    price: "Price on menu",
    category: "Thai",
    image: thai,
    veg: true,
  },
  {
    name: "Loaded Burger",
    description: "Grilled patty, melted cheese and house sauces in a soft bun.",
    price: "Price on menu",
    category: "Fast Food",
    image: burger,
  },
  {
    name: "Sharing Platter",
    description: "Built for groups — a spread of Dream Cafe favourites in one order.",
    price: "Price on menu",
    category: "Fast Food",
    image: table,
  },
  {
    name: "Cheese Pizza",
    description: "Classic cheese and tomato on a hand-stretched base.",
    price: "Price on menu",
    category: "Pizza",
    image: pizza,
    veg: true,
  },
  {
    name: "Coffee & Latte",
    description: "Espresso-based coffee, served hot or over ice.",
    price: "Price on menu",
    category: "Beverages",
    image: drinks,
    veg: true,
  },
  {
    name: "Sweet Finish",
    description: "A dessert to close the evening on a soft note.",
    price: "Price on menu",
    category: "Desserts",
    image: drinks,
    veg: true,
  },
];
