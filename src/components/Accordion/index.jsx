import { useState } from 'react';

const Accorion = ({ children, title }) => {
  const [lotteryVisible, setLotteryVisible] = useState(true);

  const toggleLotteryVisibility = () => {
    if (window.innerWidth < 768) {
      setLotteryVisible(!lotteryVisible);
    }
  };
  return (
    <>
      <div
        onClick={toggleLotteryVisibility}
        className="flex  py-3 md:hover:bg-inherit border-b md:border-b-0 border-gray-300 flex-row mt-4 md:mt-0"
      >
        <p className="font-bold mx-2 flex justify-start  w-1/2 tracking-wide cursor-pointer text-black ">
          {title}
        </p>
        <span className="flex items-center justify-end w-1/2 mx-5">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              lotteryVisible
                ? 'transform rotate-180 transition-transform ease-in-out'
                : 'transform rotate-0 transition-transform ease-in-out'
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.589585 1.30342C0.0670926 1.94531 0.157045 2.89232 0.793881 3.42252L4.9406 6.87489C5.54298 7.3764 6.4602 7.37377 7.05941 6.87489L11.2061 3.42252C11.843 2.89232 11.9329 1.94531 11.4104 1.30342C10.8839 0.656532 9.93347 0.562464 9.29163 1.09683L6.00001 3.83729L2.70838 1.09683C2.06654 0.562464 1.11615 0.656532 0.589585 1.30342Z"
              fill="#2D4550"
            ></path>
          </svg>
        </span>
      </div>
      {lotteryVisible && <div className="animate-slide-in">{children}</div>}
    </>
  );
};

export default Accorion;
