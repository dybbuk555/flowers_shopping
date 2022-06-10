import { CheckIcon } from "@heroicons/react/solid";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { ProductImageComponent } from "./Images";
import { ProductsType } from "../lib/types";

const ProductComponent = (data: ProductsType) => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          {data.products.map((product, i: number) => (
            <>
              <div className="lg:max-w-lg lg:self-end">
                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {product.title}
                  </h1>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">
                      {product.price}
                    </p>
                  </div>

                  <div className="mt-4 space-y-6">
                    <p className="text-base text-gray-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center">
                    <CheckIcon
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-2 text-sm text-gray-500">
                      {product.availability}
                    </p>
                  </div>
                </section>
              </div>

              {/* Product image */}
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <ProductImageComponent
                    src={product.image}
                    alt={`${product.title} image`}
                  />
                </div>
              </div>
            </>
          ))}

          {/* Product form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                >
                  Add to bag
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="flex-shrink-0 mr-2 h-6 w-6 text-green-400 group-hover:text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Quality Guaranteed
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
