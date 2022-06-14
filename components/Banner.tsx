import { useDataWithLimit } from "../lib/hooks";
import { Banner } from "../src/models";

const BannerComponent = () => {
  const banners: Banner[] = useDataWithLimit(Banner, 1);

  return (
    <>
      {banners.map((banner) => (
        <p
          key={banner.id}
          className="flex-1 text-center text-sm font-medium text-white lg:flex-none"
        >
          {banner.content}
        </p>
      ))}
    </>
  );
};

export default BannerComponent;
