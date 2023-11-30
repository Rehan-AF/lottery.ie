import { useState } from 'react';

const Accorion = ({ children, title, center = false, pading = false }) => {
  const [lotteryVisible, setLotteryVisible] = useState(false);

  const toggleLotteryVisibility = () => {
    setLotteryVisible(!lotteryVisible);
  };
  return (
    <>
      <div
        onClick={toggleLotteryVisibility}
        className={`flex  ${
          center === true ? 'justify-center' : 'justify-between'
        } ${
          pading === true ? 'px-[27px]' : 'px[0rem] py-3'
        }  md:hover:bg-inherit border-b lg:border-b-0 border-gray-300 text-[#2C444E]`}
      >
        <p className="font-bold tracking-wide cursor-pointer text-black ">
          {title}
        </p>
        <span className="">
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
