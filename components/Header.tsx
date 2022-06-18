import { NextPage } from "next";
import { LogoComponent } from "./Images";
import { Popover, Transition, Dialog, Tab } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { BRAND_NAME, classNames, currencies, navigation } from "../lib";
import Link from "next/link";
import CartComponent from "./Cart";
import CartIconComponent from "./CartIcon";
import { useSession, signIn } from "next-auth/react";
import Banner from "./Banner";

const HeaderComponent: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <CartComponent />
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-green-600 border-green-600"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category, categoryIdx) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 pt-10 pb-6 space-y-12"
                      >
                        <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                          <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                            <div>
                              <p
                                id={`mobile-featured-heading-${categoryIdx}`}
                                className="font-medium text-gray-900"
                              >
                                Featured
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                className="mt-6 space-y-6"
                              >
                                {category.featured.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                            <div>
                              <p
                                id="mobile-collection-heading"
                                className="font-medium text-gray-900"
                              >
                                Collection
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="mobile-collection-heading"
                                className="mt-6 space-y-6"
                              >
                                {category.collection.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    {session && session?.user?.email ? (
                      <>
                        <Link href={"/account"}>
                          <div className="-m-2 p-2 block font-medium text-gray-900 cursor">
                            Account
                          </div>
                        </Link>
                        <span
                          className="h-6 w-px bg-gray-600"
                          aria-hidden="true"
                        />
                        <Link href={"/api/auth/signout"}>
                          <div className="-m-2 p-2 block font-medium text-gray-900 cursor">
                            Sign out
                          </div>
                        </Link>
                      </>
                    ) : (
                      <>
                        <span
                          onClick={() => signIn("cognito")}
                          className="-m-2 p-2 block font-medium text-gray-900 cursor"
                        >
                          Create an account
                        </span>
                        <span
                          className="h-6 w-px bg-gray-600"
                          aria-hidden="true"
                        />
                        <span
                          onClick={() => signIn("cognito")}
                          className="-m-2 p-2 block font-medium text-gray-900 cursor"
                        >
                          Sign in
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                          <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M6 8l4 4 4-4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-red-900">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="-ml-2 group relative bg-red-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="bg-none bg-red-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-gray-300"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <Banner />

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {session && session?.user?.email ? (
                  <>
                    <Link href={"/account"}>
                      <div className="text-sm font-medium text-white hover:text-gray-100 cursor">
                        Account
                      </div>
                    </Link>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                    <Link href={"/api/auth/signout"}>
                      <div className="text-sm font-medium text-white hover:text-gray-100 cursor">
                        Sign out
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <span
                      onClick={() => signIn("cognito")}
                      className="text-sm font-medium text-white hover:text-gray-100 cursor"
                    >
                      Create an account
                    </span>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                    <span
                      onClick={() => signIn("cognito")}
                      className="text-sm font-medium text-white hover:text-gray-100 cursor"
                    >
                      Sign in
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <Link href="/">
                      <div style={{ cursor: "pointer" }}>
                        <span className="sr-only">{BRAND_NAME}</span>
                        <LogoComponent height={50} width={50} />
                      </div>
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <Popover.Group className="ml-8">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-green-600 text-green-600"
                                        : "border-transparent text-gray-700 hover:text-gray-800",
                                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="max-w-7xl mx-auto px-8">
                                        <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                            <div>
                                              <p
                                                id={`desktop-featured-heading-${categoryIdx}`}
                                                className="font-medium text-gray-900"
                                              >
                                                Featured
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.featured.map(
                                                  (item) => (
                                                    <li
                                                      key={item.name}
                                                      className="flex"
                                                    >
                                                      <a
                                                        href={item.href}
                                                        className="hover:text-gray-800"
                                                      >
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                            <div>
                                              <p
                                                id="desktop-collection-heading"
                                                className="font-medium text-gray-900"
                                              >
                                                Collection
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-collection-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.collection.map(
                                                  (item) => (
                                                    <li
                                                      key={item.name}
                                                      className="flex"
                                                    >
                                                      <a
                                                        href={item.href}
                                                        className="hover:text-gray-800"
                                                      >
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <Link href="/search/s">
                      <div className="ml-2 p-2 text-gray-400 hover:text-gray-500 cursor">
                        <span className="sr-only">Search</span>
                        <SearchIcon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </Link>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href="/">
                    <div className="lg:hidden" style={{ cursor: "pointer" }}>
                      <span className="sr-only">{BRAND_NAME}</span>
                      <LogoComponent height={50} width={50} />
                    </div>
                  </Link>

                  <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <Link href="/search/s">
                            <div className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Search</span>
                              <SearchIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </div>
                          </Link>
                        </div>

                        <div className="flex">
                          <Link href="/account">
                            <div className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor">
                              <span className="sr-only">Account</span>
                              <UserIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>

                      <span
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                        aria-hidden="true"
                      />

                      <CartIconComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
