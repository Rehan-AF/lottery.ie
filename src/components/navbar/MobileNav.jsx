import { Bars3Icon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };
  return (
    <div className="sm:flex  w-[100%] lg:hidden">
      <div className="sm:flex w-1/3 hidden lg:hidden">
        <div className="flex space-x-4 justify-center items-center pt-5 lg:justify-start">
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
            <span className=" border-l-2 pr-2 border-gray-700 "> &nbsp;</span>
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
      <div className="flex-shrink-0 w-1/3 lg:mr-6">
        <Link to="/">
          <img
            className="h-14"
            src="https://www.lottery.ie/mkd/images/star-logo-with-text.webp"
            alt="Your Company"
          />
        </Link>
      </div>
      <div className="-mr-2 w-1/3 flex lg:hidden justify-end">
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
  );
};

export default MobileNav;
