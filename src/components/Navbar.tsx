import { Disclosure, Popover, Transition } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    label: "About us",
    href: "/",
  },
  {
    label: "Markets",
    href: "/",
    popupContent: (
      <>
        <div className="py-2 flex flex-col p-4">
          <a
            href="/"
            className="text-white py-1 px-2 rounded  flex flex-row w-full"
          >
            Option 1
          </a>
          <a
            href="/"
            className="text-white py-1 px-2 rounded  flex flex-row w-full"
          >
            Option 2
          </a>
          <a
            href="/"
            className="text-white py-1 px-2 rounded  flex flex-row w-full"
          >
            Option 3
          </a>
        </div>
      </>
    ),
  },
  {
    label: "Crypto",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
  {
    label: "Affiliate",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="md:px-8 md:py-4 main items-center grid z-10">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <img
                  src="/assets/logo.svg"
                  width={200}
                  height={200}
                  alt="notfound"
                  className="md:flex hidden"
                />
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {menu.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.popupContent ? (
                        <Popover className="relative">
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={`px-5 py-2 text-base font-medium text-[#798DA3] hover:text-white focus:outline-none ${
                                  open ? "text-gray-300" : ""
                                }`}
                              >
                                {item.label}
                              </Popover.Button>

                              <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel className="absolute z-10 mt-2 space-y-2 px-4 py-2 main rounded shadow-md">
                                  {item.popupContent}
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ) : (
                        <Link
                          to={item.href}
                          key={index}
                          className="px-5 py-2 text-base font-medium text-[#798DA3] hover:text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                  <div className="flex gap-4">
                    <button className="leading-3 p-3 bg-[#F9DA0A] rounded-md text-[#000000] font-semibold">
                      Login
                    </button>
                    <button className="leading-3 p-3 rounded-md bg-[#8484848A] text-white font-semibold">
                      Sign up
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto p-4">
                  <img
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="notfound"
                    className="md:hidden"
                  />
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto rounded-md md:hidden text-white focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col main z-20 items-center justify-start order-2 w-full md:hidden bg-slate-900 h-full">
                  {menu.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.popupContent ? (
                        <Popover className="relative">
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={`p-3 text-sm font-medium w-full text-[#798DA3] hover:text-white focus:outline-none ${
                                  open ? "text-gray-300" : ""
                                }`}
                              >
                                {item.label}
                              </Popover.Button>

                              <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel className="absolute z-10 mt-2 w-full space-y-2 px-4 py-2 main rounded shadow-md">
                                  {item.popupContent}
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ) : (
                        <Link
                          to={item.href}
                          className="p-3 text-sm font-medium text-[#798DA3] hover:text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                  <div className="flex gap-4 flex-col w-fit">
                    <button className="leading-3 p-3 bg-[#F9DA0A] rounded-md text-[#000000] font-semibold">
                      Login
                    </button>
                    <button className="leading-3 p-3 rounded-md bg-[#8484848A] text-white font-semibold">
                      Sign up
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}
