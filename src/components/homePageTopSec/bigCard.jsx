import backgroundImage2 from '../../assets/backgrounds/hero-background-43-cropped.svg';
import logo from '../../assets/gameLogos/01.svg';
import './styles.css';
const BigCard = () => {
  return (
    <>
      <button
        role="link"
        // style={{
        //   backgroundImage: `url("${backgroundImage}")`,
        //   height: 160,
        // }}
        className="on_hover HeroBanner_halfBasis__d_3Ul group w-full rounded-lg h-full lg:basis-3/6 lg:flex-grow transition-shadow duration-200 hover:shadow-cardHov relative overflow-hidden grid grid-rows-hero-banner lg:flex lg:flex-col cursor-pointer"
      >
        <div
          className="-z-1 bg-no-repeat bg-cover lg:bg-right md:bg-top bg-bottom rounded-t-lg w-full h-full flex-grow bg-gradient-to-t from-blue-hero-from to-blue-hero-to"
          style={{
            backgroundImage: `url(${'https://www.lottery.ie/content/dam/pli/banners/euromillions-dream-inspector-web-home.png'})`,
            height: 160,
          }}
        ></div>
        <div className="relative flex flex-col text-white rounded-lg md:rounded-l-lg flex-shrink w-full">
          <div className="absolute lg:top-[-4rem] xl:top[-2rem] md:-top-14 lg:-top-8 w-full -z-1 bottom-0">
            <img
              src={backgroundImage2}
              alt="logo background"
              className="sm:h-[190px] md:h-full !w-full !object-cover object-top"
            />
          </div>
          <div className="md:flex-row-reverse sm:flex-row-reverse w-full flex flex-row flex-wrap md:flex-nowrap lg:flex-col items-center lg:items-start px-4 py-4 justify-between md:space-y-4 relative md:items-end">
            <div className="sm:flex sm:justify-start  sm:pr-[0px] sm:text-end lg:flex lg:justify-end md:self-center w-1/2 md:w-1/3 lg:w-full md:justify-end md:flex">
              <img
                alt="white EuroMillions logo"
                className="h-12 lg:h-16 filter drop-shadow"
                src={logo}
                role="img"
              />
            </div>
            <div
              className="flex-col sm:text-righ text-left md:mt-0 w-1/2 md:w-1/3 lg:w-full"
              style={{ textShadow: ' rgba(0, 0, 0, 0.3) 1px 1px' }}
            >
              <h1 className="lg:flex lg:justify-end leading-none sm:text-right text-sm md:text-base font-bold">
                قرعه کشی بعدی
              </h1>
              <h2 className="lg:flex lg:justify-end font-black sm:text-right text-base md:text-lg leading-6">
                چهارشنبه ساعت ۱۸:۰۰
              </h2>
              <h3
                className="pl-1 text-xl sm:text-end sm:text-2xl md:text-3xl lg:text-4xl font-black pt-1 rtl"
                aria-label="85 Million Euro *"
              >
                <span
                  aria-hidden="true"
                  className="lg:flex text-lg md:text-3xl lg:text-5xl"
                >
                  <span>
                    <strong className="text-4xl-xtra  md:text-6xl lg:text-6xl-xtra sm:text-[32px]">
                      ۴۸۹
                    </strong>{' '}
                    میلیارد تومان
                  </span>
                </span>
              </h3>
              <div
                className="w-full text-white"
                style={{ textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px' }}
              >
                <p className="lg:text-start lg:left-[1rem] sm:text-end sm:pr-[16px] text-white text-x-sm font-bold absolute bottom-3 w-1/2 md:right-[1.5rem] md:w-auto">
                  مبلغ تقریبی می باشد*
                </p>
              </div>
            </div>
            <div className="flex lg:w-full justify-end md:justify-start lg:justify-end lg:flex-row md:w-1/3">
              <a
                aria-label="Play from €2.50 link"
                className="no_hover_shadow on_hover flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-gray-800 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href="/draw-games/euromillions"
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none sm:text-[12px]">
                    <span aria-label="play from €2.50">خرید بلیط با ۱۰۰ هزار تومان</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="w-full text-white text-left">
            <div className="h-auto w-auto rounded-b-lg p-2 pl-4 bg-black-alpha-30">
              <div className="flex items-start w-full">
                <div className="flex self-center max-w-xs relative justify-end items-center">
                  <div
                    role="button"
                    tabIndex="0"
                    aria-label="EuroMillions hero banner tooltip"
                    className=""
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                        stroke="#fff"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M8.88867 8.88894C8.88867 8.27529 9.38613 7.77783 9.99978 7.77783C10.6134 7.77783 11.1109 8.27529 11.1109 8.88894V15.0001C11.1109 15.6137 10.6134 16.1112 9.99978 16.1112C9.38613 16.1112 8.88867 15.6137 8.88867 15.0001V8.88894Z"
                        fill="#fff"
                      ></path>
                      <rect
                        x="8.61133"
                        y="3.88867"
                        width="2.77778"
                        height="2.77778"
                        rx="1.38889"
                        fill="#fff"
                      ></rect>
                    </svg>
                  </div>
                </div>
                <div className="flex-col pl-3 items-left">
                  <h4 className="text-base font-bold">PLAY IN ADVANCE:</h4>
                  <h4 className="text-base font-bold">
                    EuroMillions Mega Draw
                  </h4>
                  <p className="text-base text-white">
                    On Fri 1st December, the EuroMillions Mega Draw is a
                    GUARANTEED €200 Million!
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </button>
    </>
  );
};

export default BigCard;
