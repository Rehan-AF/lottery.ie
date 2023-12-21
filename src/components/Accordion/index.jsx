import { useEffect, useState } from 'react';
import './styles.css';
const Accorion = ({
  children,
  title,
  center = false,
  pading = false,
  navbar = false,
  animate = false,
  icon = false,
  direction = false,
}) => {
  const [lotteryVisible, setLotteryVisible] = useState(false);

  const toggleLotteryVisibility = () => {
    setLotteryVisible(!lotteryVisible);
  };

  useEffect(() => {
    if (animate) {
      animate(lotteryVisible);
    }
  }, [animate, lotteryVisible]);

  return (
    <>
      <div
        onClick={toggleLotteryVisibility}
        className={`flex ${
          center === true ? 'justify-center' : 'justify-end '
        } 
        ${pading === true ? 'px-[27px]' : 'px[0rem] py-3'} 
        ${navbar === true ? 'pb-[12px]' : 'pb[0px]'} 
       
        ${
          direction === false
            ? 'm-h-[100%] items-center sm:flex-row-reverse md:flex-row-reverse md:hover:bg-inherit border-b lg:border-b-0 border-gray-300 text-[#2C444E]'
            : 'm-h-[100%] items-center sm:flex-row md:flex-row md:hover:bg-inherit border-b lg:border-b-0 border-gray-300 text-[#2C444E]'
        } `}
      >
        <p className=" tracking-wide cursor-pointer text-[#2C444E] font-black  px-3">
          {title}
        </p>
        {icon ? (
          <svg
            width="14"
            height="14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              lotteryVisible
                ? 'transform rotate-45 transition-transform ease-in-out'
                : 'transform rotate-0 transition-transform ease-in-out'
            }`}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.59182 11.8214C8.59182 12.7002 7.8798 13.4122 7.00108 13.4122C6.57414 13.4122 6.17144 13.2417 5.87578 12.9461C5.58026 12.6506 5.41001 12.2478 5.41001 11.8212L5.40978 8.59098L2.17988 8.59098C1.75294 8.59098 1.35024 8.42055 1.05458 8.12489C0.75906 7.82937 0.588814 7.42658 0.588814 6.99992C0.588814 6.12119 1.30083 5.40918 2.17955 5.40918L5.41001 5.40918L5.41001 2.17872C5.41001 1.29999 6.12203 0.587978 7.00076 0.587977C7.87948 0.587978 8.59182 1.30031 8.59182 2.17904L8.59182 5.40895L11.822 5.40918C12.7007 5.40918 13.413 6.12151 13.413 7.00024C13.413 7.87897 12.701 8.59098 11.8223 8.59098H8.59182V11.8214Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
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
        )}
      </div>
      <div className="">
        <div
          className={`${
            lotteryVisible === true
              ? ' opening_animation_accordion'
              : 'closing_animation_accordion'
          } element_style_accordion animate-slide-in element_style element_style`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Accorion;
