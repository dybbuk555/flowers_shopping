export type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ImageType = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
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

export type InfosType = {
  infos: Array<{
    id: string;
    title: string;
    content: string;
    page: string;
    header: string;
  }>;
};

export type ProductsType = {
  products: Array<{
    title: string;
    price: string;
    image: string;
    tags: string;
    availability: string;
    category: string;
    slug: string;
    description: string;
  }>;
  slug?: string;
};

export type Context = {
  req?: any;
  modules?: any[];
};

export type CartStateType = {
  open: boolean;
  setOpen: (val: boolean) => void;
};
