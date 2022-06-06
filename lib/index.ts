import {
  ShieldCheckIcon,
  CursorClickIcon,
  SupportIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { CollectionsType, FooterType } from "./types";

export const BRAND_NAME: string = "Fosuaa Whole Green Foods";

export const BRAND_TAGLINE: string = "Eat, and Enjoy Healthy Whole Foods";

export const BRAND_DESCRIPTION: string =
  "100% Healthy, Organic, Whole Foods. We are committed to providing you with the best quality of food and products.";

export const BRAND_URL: string = "https://www.fosuaawholegreenfoods.com";

export const BRAND_BUTTON_TEXT: string = "Shop Now";

export const BRAND_IMAGE: string =
  "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,w_32/v1653917523/fosuaa/fosuaa_logo.webp";

export const BRAND_ICON: string =
  "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,w_32/v1653917514/fosuaa/fosuaa_icon.webp";

export const BRAND_FAVICON: string =
  "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,w_16/v1653917523/fosuaa/fosuaa_logo.webp";

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const footerNavigation: FooterType = {
  products: [
    { name: "Mud Fish", href: "#" },
    { name: "Koobi", href: "#" },
    { name: "Emai", href: "#" },
    { name: "Red Pepper", href: "#" },
    { name: "Gari", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "/contact" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Warranty", href: "/warranty" },
  ],
  company: [
    { name: "Who we are", href: "/about-us" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Return Policy", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  bottomLinks: [
    { name: "Accessibility", href: "/accessibility" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export const currencies: Array<string> = [
  // "CAD",
  "USD",
  // "AUD",
  // "EUR",
  // "GBP"
];

export const collections: CollectionsType = [
  {
    name: "All",
    description: "Variaties to choose from",
    imageSrc:
      "https://images.unsplash.com/photo-1577193459085-2da60ca7fd77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "all collection of whole foods",
    href: "#",
  },
  {
    name: "New Arrivals",
    description: "Fresh and restocked",
    imageSrc:
      "https://images.unsplash.com/photo-1577193459085-2da60ca7fd77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "fresh and restocked collection of whole foods",
    href: "#",
  },
  {
    name: "On Sale",
    description: "Check out our items on sale",
    imageSrc:
      "https://images.unsplash.com/photo-1577193459085-2da60ca7fd77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "collections on sale",
    href: "#",
  },
];
