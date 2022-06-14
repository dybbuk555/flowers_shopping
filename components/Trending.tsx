import { NextPage } from "next";
import { FeaturedImageComponent } from "./Images";
import { Products } from "../src/models";
import { useDataWithLimit } from "../lib/hooks";

const TrendingProducts: NextPage = () => {
  const products: Products[] = useDataWithLimit(Products, 4);

  return (
    <>
      <div className="mt-8 relative">
        <div className="relative w-full overflow-x-auto">
          <ul
            role="list"
            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
          >
            {products.map((product) => (
              <li
                key={product.id}
                className="w-64 inline-flex flex-col text-center lg:w-auto"
              >
                <div className="group relative">
                  <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                    <FeaturedImageComponent
                      src={product.image as unknown as string}
                      alt={`${product.title} image`}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="mt-1 font-semibold text-gray-900">
                      <a href={`/product/${product.slug}`}>
                        <span className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-gray-900">{`$${product.price}`}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
