import { useEffect, useState } from 'react';
import './styles.css';
const FAQAccorion = ({
  children,
  title = 'title',
  center = false,
  pading = false,
  navbar = false,
  animate = false,
  border = false,
  heading = false,
}) => {
  const [visibility, setvisibility] = useState(false);

  const toggleLotteryVisibility = () => {
    setvisibility(!visibility);
  };

  useEffect(() => {
    if (animate) {
      animate(visibility);
    }
  }, [animate, visibility]);

  return (
    <div className="text-[#4b636e]">
      <div
        onClick={toggleLotteryVisibility}
        className={`flex ltr ${
          center === true ? 'justify-center' : 'justify-between'
        } ${pading === true ? 'px-[27px]' : 'px[0rem] py-2'} ${
          navbar === true ? 'pb-[12px]' : 'pb[0px]'
        } m-h-[100%] gap-[1rem] items-center sm:flex-row-reverse md:flex-row-reverse md:hover:bg-[#f2f6f8] text-[#2C444E]`}
        style={
          border
            ? {
                borderBottom: '1px solid #ddd',
                borderTop: '1px solid #ddd',
                paddingLeft: '10px',
                paddingRight: '10px',
              }
            : {
                paddingLeft: '10px',
                paddingRight: '10px',
              }
        }
      >
        <p
          className={`rtl font-bold tracking-wide cursor-pointer text-[#2C444E] ${
            heading ? 'text-[19px] font-bold' : 'font-semibold'
          }`}
        >
          {title}
        </p>
        <span className="">
          {border ? (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                visibility
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
          ) : (
            <svg
              width="14"
              height="14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                visibility
                  ? 'transform rotate-45 transition-transform ease-in-out'
                  : 'transform rotate-0 transition-transform ease-in-out'
              }`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.59182 11.8214C8.59182 12.7002 7.8798 13.4122 7.00108 13.4122C6.57414 13.4122 6.17144 13.2417 5.87578 12.9461C5.58026 12.6506 5.41001 12.2478 5.41001 11.8212L5.40978 8.59098L2.17988 8.59098C1.75294 8.59098 1.35024 8.42055 1.05458 8.12489C0.75906 7.82937 0.588814 7.42658 0.588814 6.99992C0.588814 6.12119 1.30083 5.40918 2.17955 5.40918L5.41001 5.40918L5.41001 2.17872C5.41001 1.29999 6.12203 0.587978 7.00076 0.587977C7.87948 0.587978 8.59182 1.30031 8.59182 2.17904L8.59182 5.40895L11.822 5.40918C12.7007 5.40918 13.413 6.12151 13.413 7.00024C13.413 7.87897 12.701 8.59098 11.8223 8.59098H8.59182V11.8214Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </span>
      </div>
      <div className="">
        <div
          className={`${
            visibility === true
              ? ' opening_animation_accordionCustom'
              : 'closing_animation_accordionCustom'
          } rtl element_style_accordionCustom animate-slide-in element_style element_style `}
        >
          <div className={border ? `m-5` : 'm-0'}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccorion;
