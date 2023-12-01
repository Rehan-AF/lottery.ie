import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DropDown from '../dropDown';
import SmallCard from '../homePageTopSec/smallCardBlue';
import GamesCard from './gamesCard';
import GamesDropDown from './gamesDropDown';
import ResultsDropDown from './resultsDropDown';
import Accorion from '../Accordion/index';
import './navStyles.css';
import { useState } from 'react';
import { GamesAccordions, ResultsAccordion } from './mobileNavAccordions';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white shadow-button">
            <div className="flex h-16 items-center justify-between pt-4 flex-row lg:flex-row-reverse">
              <div className="flex items-center w-2/3 justify-between flex-row-reverse">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      className="w-32 h-14"
                      src="https://www.lottery.ie/mkd/images/star-logo-with-text.webp"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div>
                  <span className="inline-flex flex-col justify-center px-4 text-sm font-bold leading-none uppercase border border-gray-900 rounded-full box-content hover:text-gray-light py-3 lg:hidden ">
                    Sign In
                  </span>
                </div>
                <div className="hidden lg:ml-6 lg:block ">
                  <div className="flex space-x-4 justify-center items-center pt-5">
                    <DropDown title={'Games'} position={-400}>
                      <div className="w-[100%] p-[1rem]">
                        <GamesDropDown />
                      </div>
                    </DropDown>
                    <DropDown title={'Results'} position={-500}>
                      <div className="w-[100%]">
                        <ResultsDropDown />
                      </div>
                    </DropDown>
                  </div>
                </div>
              </div>

              <div className="hidden lg:ml-6 lg:block ">
                <div className="flex space-x-4 justify-center items-center pt-5">
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
                  <a
                    href="#"
                    className="px-2 text-sm font-bold hover:text-gray-light text-gray-700 "
                  >
                    Register &nbsp;&nbsp;{' '}
                    <span className=" border-l-2 pr-2 border-gray-700 ">
                      {' '}
                      &nbsp;
                    </span>
                    <span className="text-gray-700 ">Sign In </span>
                  </a>

                  <a
                    href="#"
                    className="px-2 text-xs font-medium hover:text-gray-light text-gray-700  "
                  >
                    Responsible Play
                  </a>
                </div>
              </div>

              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => {
                    setPanelVisible(true);
                    console.log('clicked');
                  }}
                >
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`pt-[15px] navPanel ${panelVisible ? 'open' : 'close'}`}
          >
            <li className="flex items-center justify-between border-b-1 border-gray-300 w-screen py-3.5">
              <div className="px-2 mx-auto">
                <span>Don&apos;t have an account?</span>&nbsp;
                <a
                  href=""
                  className="sm:px-1 py-3 text-base font-bold text-gray-800 underline uppercase"
                >
                  Register today
                </a>
              </div>
              <button
                aria-label="Close Menu"
                className="mr-6 text-gray-800"
                onClick={() => {
                  setPanelVisible(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.73907 2.46994C4.11249 1.84335 3.0966 1.84335 2.47001 2.46994C1.84343 3.09652 1.84343 4.11241 2.47001 4.739L9.73098 12L2.46994 19.261C1.84335 19.8876 1.84335 20.9035 2.46994 21.5301C3.09652 22.1567 4.11241 22.1567 4.739 21.5301L12 14.269L19.261 21.53C19.8876 22.1566 20.9035 22.1566 21.5301 21.53C22.1567 20.9034 22.1567 19.8875 21.5301 19.261L14.2691 12L21.53 4.73904C22.1566 4.11246 22.1566 3.09657 21.53 2.46998C20.9034 1.8434 19.8875 1.8434 19.261 2.46998L12 9.73091L4.73907 2.46994Z"
                    fill="#2D4550"
                  ></path>
                </svg>
              </button>
            </li>

            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="block  py-3 text-base font-bold text-gray-800 pb-[12px]"
              >
                <Accorion title="Games" pading={true}>
                  <GamesAccordions />
                </Accorion>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block text-base font-bold text-gray-800 "
              >
                <Accorion title="Results" pading={true}>
                  <ResultsAccordion />
                </Accorion>
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="#"
                className="block px-6 py-3 text-base font-bold text-gray-800 border-gray-300 border-b-[1px]"
              >
                Scratch Cards
              </Disclosure.Button>
            </div>
            <div className="pb-3">
              <div className="">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-800 "
                >
                  How to Play
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-800 "
                >
                  Responsible Play
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-800 "
                >
                  Accessible results
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-6 pb-2 text-sm font-medium text-gray-800 "
                >
                  Gaeilge | English
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
