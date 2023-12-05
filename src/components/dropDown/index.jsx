import { useState } from 'react';
import './style.css';

const DropDown = ({ title, children, position, visible, onToggle }) => {
  return (
    <div className="dropdown-container z-30">
      <button
        className={`flex items-center text-gray-700 relative mx-3 py-4 text-base leading-5 font-bold justify-center ${
          visible === true ? 'border-b-[5px] border-gray-700' : 'border-b-none'
        }`}
        onClick={onToggle}
      >
        {title}
        <svg
          className={`${
            visible === true ? 'rotate-0' : 'rotate-180'
          } transform duration-100 ease-in-out ml-3`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.589585 1.30342C0.0670926 1.94531 0.157045 2.89232 0.793881 3.42252L4.9406 6.87489C5.54298 7.3764 6.4602 7.37377 7.05941 6.87489L11.2061 3.42252C11.843 2.89232 11.9329 1.94531 11.4104 1.30342C10.8839 0.656532 9.93347 0.562464 9.29163 1.09683L6.00001 3.83729L2.70838 1.09683C2.06654 0.562464 1.11615 0.656532 0.589585 1.30342Z"
            fill="#2D4550"
          ></path>
        </svg>
      </button>

      <div
        className={`absolute left-[${position}%] mt-[40px] z-10  w-[w-full]`}
      >
        <div
          className={`flex gap-[1rem] ${
            visible ? 'opening-animation' : 'closing-animation'
          } element_style rounded-md shadow-lg animate__delay-1s bg-white`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
