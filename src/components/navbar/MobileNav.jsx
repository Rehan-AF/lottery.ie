import { Bars3Icon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../../assets/smallLogo.svg';
import { Disclosure } from '@headlessui/react';
import Accorion from '../Accordion';
import { GamesAccordions, ResultsAccordion } from './mobileNavAccordions';
const MobileNav = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [gamesPanelVisible, setGamesPanelVisible] = useState(false);
  const [resultsPanelVisible, setResultsPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };
  return (
    <div className="">
      <div className="sm:flex items-center lg:hidden">
        <div className="sm:flex w-1/3  justify-end sm:items-center sm:flex-row-reverse lg:hidden sm:gap-3">
          <span className=" h-[31px] inline-flex flex-col justify-center px-[12px] text-[12px] font-bold uppercase border border-gray-900 rounded-full box-content lg:hidden ">
            Sign In
          </span>
          <div className="sm:flex items-center lg:hidden">
            <svg
              className="sm:block lg:hidden w-5 h-5"
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
        <div className="flex-shrink-0 w-1/3 lg:mr-6 flex justify-center">
          <Link to="/">
            <img className="h-14" src={smallLogo} alt="Your Company" />
          </Link>
        </div>
        <div className="-mr-2 w-1/3 flex lg:hidden justify-end">
          {/* Mobile menu button */}
          <button
            className="relative inline-flex items-center justify-center rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => {
              setPanelVisible(true);
              console.log('clicked');
            }}
          >
            <svg
              className="block"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="22.6667"
                width="24"
                height="3.46667"
                rx="1.73333"
                fill="#2D4550"
              ></rect>
              <rect
                x="4"
                y="14.6667"
                width="24"
                height="3.46667"
                rx="1.73333"
                fill="#2D4550"
              ></rect>
              <rect
                x="4"
                y="6.66666"
                width="24"
                height="3.46667"
                rx="1.73333"
                fill="#2D4550"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
      {/* start nav */}
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
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
                <Accorion
                  title="Games"
                  pading={true}
                  navbar={true}
                  animate={setGamesPanelVisible}
                >
                  <GamesAccordions isVisible={gamesPanelVisible} />
                </Accorion>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block text-base font-bold text-gray-800 "
              >
                <Accorion
                  title="Results"
                  pading={true}
                  navbar={true}
                  animate={setResultsPanelVisible}
                >
                  <ResultsAccordion
                    setPanelVisible={setPanelVisible}
                    isVisible={resultsPanelVisible}
                  />
                </Accorion>
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="#"
                className="block px-6 py-3 text-base font-bold text-gray-800 border-gray-300 border-b-[1px] text-end"
              >
                Scratch Cards
              </Disclosure.Button>
            </div>
            <div className="pb-3">
              <div className="sm:flex md:flex sm:items-end md:items sm:justify-end md:justify-end sm:flex-col md:flex-col">
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
        )}
      </Disclosure>
    </div>
  );
};

export default MobileNav;
