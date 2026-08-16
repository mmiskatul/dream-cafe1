// Central, editable content configuration for Dream Cafe.
// Replace placeholder menu items / offers with real data when supplied.

export const site = {
  name: "Dream Cafe",
  tagline: "Good food, warm moments, and memorable experiences in Mirpur.",
  phone: "01319240502",
  phoneHref: "tel:+8801319240502",
  address: {
    line1: "1/A/B, 2nd Colony, Mazar Road",
    line2: "Mirpur-1, Dhaka, Bangladesh",
  },
  hours: "11:00 AM – 11:00 PM",
  hoursNote: "Open every day",
  maps: "https://maps.app.goo.gl/hTJyXUZxrRTrd85k6",
  mapEmbed:
    "https://www.google.com/maps?q=Mazar+Road,+Mirpur-1,+Dhaka,+Bangladesh&output=embed",
  facebook: "https://www.facebook.com/DreamCafeMirpur/",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
] as const;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  veg?: boolean;
  spicy?: boolean;
};

// NOTE: names, descriptions and prices are editable placeholders until the
// real Dream Cafe menu is supplied.
export const menuCategories = [
  "Starters",
  "Fast Food",
  "Pizza",
  "Pasta",
  "Thai",
  "Main Course",
  "Beverages",
  "Desserts",
] as const;
