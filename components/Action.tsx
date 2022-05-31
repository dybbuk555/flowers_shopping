import { NextPage } from "next";

const offers = [
  {
    name: "Fully Online",
    description: "Shop and pay in one go",
    href: "#",
  },
  {
    name: "Countrywide delivery",
    description: "Free on all USA orders",
    href: "#",
  },
  {
    name: "Sign up on our website",
    description: "Save so much money",
    href: "#",
  },
];
const ActionComponent: NextPage = () => {
  return (
    <nav aria-label="Offers" className="order-last lg:order-first">
      <div className="max-w-7xl mx-auto lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
        >
          {offers.map((offer) => (
            <li key={offer.name} className="flex flex-col">
              <a
                href={offer.href}
                className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-gray-500">{offer.name}</p>
                <p className="font-semibold text-gray-900">
                  {offer.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ActionComponent;
