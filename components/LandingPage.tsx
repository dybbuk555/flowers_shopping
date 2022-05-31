import { NextPage } from "next";
import { BRAND_BUTTON_TEXT, BRAND_DESCRIPTION, BRAND_TAGLINE } from "../lib";
import {
  HeroImageComponent,
  CollectionsImageComponent,
  FeaturedImageComponent,
  DecorativeImageComponent,
} from "./Images";
import HeaderComponent from "./Header";
import ActionComponent from "./Action";
import TestimonialsComponent from "./Testimonials";
import FooterComponent from "./Footer";
import { collections } from "../lib";


const trendingProducts = [
    {
      id: 1,
      name: "Product",
  
      price: "$35",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1534121222821-9e2e2936f059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    {
      id: 1,
      name: "Product",
  
      price: "$35",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1534121222821-9e2e2936f059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    {
      id: 1,
      name: "Product",
  
      price: "$35",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1534121222821-9e2e2936f059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    {
      id: 1,
      name: "Product",
  
      price: "$35",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1534121222821-9e2e2936f059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
  ];


const LandingPageComponent: NextPage = () => {

    return(<>
     <div className="bg-white">
        <HeaderComponent />

        <main>
          {/* Hero */}
          <div className="flex flex-col border-b border-gray-200 lg:border-0">
            <ActionComponent />

            <div className="relative">
              <div
                aria-hidden="true"
                className="hidden absolute w-1/2 h-full bg-gray-100 lg:block"
              />
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                  <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                        {BRAND_TAGLINE}
                      </h1>
                      <p className="mt-4 text-xl text-gray-600">
                        {BRAND_DESCRIPTION}
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-block bg-green-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-green-700"
                        >
                          {BRAND_BUTTON_TEXT}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                <HeroImageComponent />
              </div>
            </div>
          </div>

          {/* Trending products */}
          <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
              <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <h2
                  id="trending-heading"
                  className="text-2xl font-extrabold tracking-tight text-gray-900"
                >
                  Trending foods
                </h2>
                <a
                  href="#"
                  className="hidden sm:block text-sm font-semibold text-green-600 hover:text-green-500"
                >
                  See everything<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>

              <div className="mt-8 relative">
                <div className="relative w-full overflow-x-auto">
                  <ul
                    role="list"
                    className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
                  >
                    {trendingProducts.map((product) => (
                      <li
                        key={product.id}
                        className="w-64 inline-flex flex-col text-center lg:w-auto"
                      >
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                            <FeaturedImageComponent
                              src={product.imageSrc}
                              alt={product.imageAlt}
                            />
                          </div>
                          <div className="mt-6">
                            <h3 className="mt-1 font-semibold text-gray-900">
                              <a href={product.href}>
                                <span className="absolute inset-0" />
                                {product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-gray-900">
                              {product.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 px-4 sm:hidden">
                <a
                  href="#"
                  className="text-sm font-semibold text-green-600 hover:text-green-500"
                >
                  See everything<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </section>

          {/* Collections */}
          <section
            aria-labelledby="collections-heading"
            className="bg-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2
                  id="collections-heading"
                  className="text-2xl font-extrabold text-gray-900"
                >
                  Collections
                </h2>

                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  {collections.map((collection) => (
                    <div key={collection.name} className="group relative">
                      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <CollectionsImageComponent
                          src={collection.imageSrc}
                          alt={collection.imageAlt}
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">
                        {collection.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sale and testimonials */}
          <div className="relative overflow-hidden">
            {/* Decorative background image and gradient */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                <DecorativeImageComponent />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            {/* Sale */}
            <section
              aria-labelledby="sale-heading"
              className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
            >
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <h2
                  id="sale-heading"
                  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                >
                  Get 25% off during our one-time sale
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
                  Most of our products are limited releases that wont come back.
                  Get your favorite items while theyre in stock.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Get access to our one-time sale
                </a>
              </div>
            </section>

            <TestimonialsComponent />
          </div>
        </main>

        <FooterComponent />
      </div>
    </>)
}

export default LandingPageComponent;