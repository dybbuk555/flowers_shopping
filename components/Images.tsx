import Image from "next/image";
import { BRAND_ICON } from "../lib";
import { ImageType } from "../lib/types";

export const LogoComponent = () => {
  return <Image src={BRAND_ICON} alt="logo" height={32} width={32} />;
};

export const HeroImageComponent = () => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1577193120905-21e0c301d5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt="logo"
      height={838}
      width={720}
    />
  );
};

export const CollectionsImageComponent = ({src, alt}: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={256}
      width={389}
    />
  );
};

export const FeaturedImageComponent = ({src, alt}: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={280}
      width={280}
    />
  );
};


export const DecorativeImageComponent = () => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1551014700-0ca41391f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
      alt="decoorative background image"
      height={896}
      width={1216}
    />
  );
};

export const FlagImageComponent = () => {
  return (
    <Image
      src="https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,h_15,w_20/v1654025327/fosuaa/usa_fflag.webp"
      alt="decoorative background image"
      height={15}
      width={20}
    />
  );
};