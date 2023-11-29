import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white shadow-button">
            <div className="flex h-16 items-center justify-between pt-4 flex-row-reverse lg:flex-row">
              <div className="flex items-center w-2/3 justify-between">
                <div className="flex-shrink-0">
                  <img
                    className="w-32 h-14"
                    src="https://www.lottery.ie/mkd/images/star-logo-with-text.webp"
                    alt="Your Company"
                  />
                </div>
                <div>
                  <span className="inline-flex flex-col justify-center px-4 text-sm font-bold leading-none uppercase border border-gray-900 rounded-full box-content hover:text-blue-light py-3 lg:hidden ">
                    Sign In{" "}
                  </span>
                </div>
                <div className="hidden lg:ml-6 lg:block ">
                  <div className="flex space-x-4 justify-center items-center pt-5">
                    <a
                      href="#"
                      className="text-gray-700 relative mx-3 py-4 text-base leading-5 font-bold flex justify-center items-center "
                    >
                      Games
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 relative mx-3 py-4 text-base leading-5 font-bold flex justify-center items-center"
                    >
                      Results
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 relative mx-3 py-4 text-base leading-5 font-bold flex justify-center items-center"
                    >
                      Good Causes & Winners
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden lg:ml-6 lg:block ">
                <div className="flex space-x-4 justify-center items-center pt-5">
                  <a
                    href="#"
                    className="px-2 text-xs font-medium hover:text-blue-light text-gray-700  "
                  >
                    Responsible Play
                  </a>
                  <a
                    href="#"
                    className="px-2 text-sm font-bold hover:text-blue-light text-gray-700 "
                  >
                    Register &nbsp;&nbsp;{" "}
                    <span className=" border-l-2 pr-2 border-gray-700 ">
                      {" "}
                      &nbsp;
                    </span>
                    <span className="text-gray-700 ">Sign In </span>
                  </a>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.034 20a2.665 2.665 0 0 0 2.662-2.662 2.665 2.665 0 0 0-2.662-2.661 2.665 2.665 0 0 0-2.661 2.661A2.665 2.665 0 0 0 16.034 20Zm0-3.67a1.01 1.01 0 0 1 0 2.017 1.01 1.01 0 0 1 0-2.018ZM20.3 5.027a.826.826 0 0 0-.65-.316H5.52l-.448-2.252C4.798 1.034 3.535 0 2.067 0H.827a.826.826 0 0 0 0 1.653h1.24c.688 0 1.256.46 1.383 1.12v.005l1.856 9.335a2.67 2.67 0 0 0 2.612 2.143h8.368c1.21 0 2.27-.818 2.576-1.988l.004-.014 1.587-6.521a.826.826 0 0 0-.154-.706Zm-3.038 6.828a1.01 1.01 0 0 1-.976.748H7.918c-.48 0-.897-.342-.991-.813L5.848 6.364h12.75l-1.336 5.49ZM8.109 14.677a2.665 2.665 0 0 0-2.662 2.661A2.665 2.665 0 0 0 8.11 20a2.665 2.665 0 0 0 2.662-2.662 2.665 2.665 0 0 0-2.662-2.661Zm0 3.67a1.01 1.01 0 0 1 0-2.018 1.01 1.01 0 0 1 0 2.018Z"
                      fill="#2D4550"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-6 py-3 text-base font-bold text-gray-900 border-gray-300 border-b-[1px]"
              >
                Games
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-6 py-3 text-base font-bold text-gray-900 border-gray-300 border-b-[1px]"
              >
                Results
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-6 py-3 text-base font-bold text-gray-900 border-gray-300 border-b-[1px]"
              >
                Scratch Cards
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-6 py-3 text-base font-bold text-gray-900 border-gray-300 border-b-[1px]"
              >
                Good Causes & Winners
              </Disclosure.Button>
            </div>
            <div className="pb-3">
              <div className="">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-900 "
                >
                  How to Play
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-900 "
                >
                  Responsible Play
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-900 "
                >
                  Accessible results
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-900 "
                >
                  Gaeilge | English
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
