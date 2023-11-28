import img1 from '../../assets/cards/img1.png';
import YelloBack from '../../assets/cards/hero-background-4.png';
import EuroMill from '../../assets/cards/EuroMillions.svg';
const BigCard = () => {
  return (
    <>
      <div className="relative duration-200 transition-shadow w-[621px]">
        <div
          className="rounded-tl-[0.5rem] rounded-tr-[0.5rem] md:bg-top md:bg-no-repeat  bg-cover"
          style={{ backgroundImage: `url(${img1})`, height: 160 }}
        ></div>
        <div
          className="rounded-bl-[0.5rem] rounded-br-[0.5rem] absolute top-[7.5rem] z-10 bg-cover"
          style={{
            backgroundImage: `url(${YelloBack})`,
            height: 416,
            width: 621,
          }}
        >
          <div className="w-full flex flex-row flex-wrap md:flex-nowrap lg:flex-col items-center lg:items-start justify-between md:space-y-4 relative pb-4 px-4 top-[35px] text-[#fff]">
            <div className="self-start md:self-center w-1/2 md:w-1/3 lg:w-full">
              <img
                alt="white EuroMillions logo"
                className="h-12 lg:h-16 filter drop-shadow"
                src="https://www.lottery.ie/content/dam/pli/logos/left/white/EuroMillions.svg"
                role="img"
              />
            </div>
            <div
              className="flex-col text-left md:mt-0 w-1/2 md:w-1/3 lg:w-full"
              style={{ textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px' }}
            >
              <h1 className="leading-none text-sm md:text-base font-bold">
                Next draw
              </h1>
              <h2 className="font-black text-base md:text-lg leading-6">
                Tomorrow, 12:30am
              </h2>
              <h3
                className="pr-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black pt-1"
                aria-label="85 Million Euro *"
              >
                <span
                  aria-hidden="true"
                  className="text-lg md:text-3xl lg:text-5xl"
                >
                  <span>
                    <strong className="text-4xl-xtra md:text-6xl lg:text-6xl-xtra">
                      €85
                    </strong>{' '}
                    Million*
                  </span>
                </span>
              </h3>
              <div
                className="w-full text-white"
                style={{ textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px' }}
              >
                <p className="text-left text-white text-sm font-bold absolute md:right-3 bottom-3 w-1/2 md:w-auto">
                  *estimated
                </p>
              </div>
            </div>
            <div className="flex flex-row w-1/2 md:w-1/3 lg:w-auto md:justify-end lg:justify-start">
              <a
                aria-label="Play from €2.50 link"
                className="flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-blue-900 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href="/draw-games/euromillions"
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                  <div className="uppercase text-xs font-bold leading-none sm:text-xs">
                    <span aria-label="play from €2.50">Play from €2.50</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div
            className="h-auto w-auto rounded-b-lg p-2 pl-4 text-[#fff]"
            style={{ backgroundColor: ' rgba(0,0,0,.3)' }}
          >
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
                <h4 className="text-base font-bold">EuroMillions Mega Draw</h4>
                <p className="text-base text-white">
                  On Fri 1st December, the EuroMillions Mega Draw is a
                  GUARANTEED €200 Million!
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
