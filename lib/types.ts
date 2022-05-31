import { type } from "os";

export type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ImageType = {
  src: string;
  alt: string;
};

export type FooterType = {
  products: Array<{ name: string; href: string }>;
  customerService: Array<{ name: string; href: string }>;
  company: Array<{ name: string; href: string }>;
  legal: Array<{ name: string; href: string }>;
  bottomLinks: Array<{ name: string; href: string }>;
};

export type CollectionsType = Array<{
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}>;
