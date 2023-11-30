import redbg from '../../assets/results/redbg.svg';
const ResultsCard = ({
  logo,
  JackportAmount,
  date,
  winingNumbers,
  winingColor,
  secondLogo,
  nextDraw,
  drawAmount,
  playFor,
  backgroundImage,
  gradient = false,
}) => {
  return (
    <div>
      <div className="relative shadow my-2 lg:flex lg:justify-between bg-white rounded-md">
        <div className="lg:w-full flex flex-col justify-evenly">
          <div className="px-4 md:px-9">
            <div className="bg-white flex flex-row-reverse justify-between pt-3 pb-3 rounded-t-lg">
              <div className="w-22 -mb-1">
                <img src={logo} alt="Lotto logo" className="w-full h-full" />
              </div>
              <div className="text-right">
                <p className="text-bold text-base">Jackpot</p>
                <p className="font-black text-xl">€{JackportAmount}</p>
              </div>
            </div>
            <div className="pb-4">
              <div className="relative text-end">
                <span
                  aria-hidden="true"
                  className="pt-2 pb-0.5 font-bold text-lg md:text-xl md:pb-4"
                >
                  {date}
                </span>
                {/* <span className="absolute top-0 left-0 w-full h-full opacity-0 whitespace-nowrap">
                  Sunday, November 26th, 2023
                </span> */}
              </div>
              <div className="flex justify-center items-center lg:block">
                <div className="justify-center flex flex-row flex-wrap gap-6 lg:gap-10">
                  <div className="flex-col">
                    <div className="leading-5 font-bold py-1.5 text-end">
                      Winning numbers
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="grid grid-cols-6 gap-1.5 md:gap-2 flex-wrap">
                        {winingNumbers?.map((val, index) => {
                          return (
                            <div
                              className={`flex font-bold rounded-full justify-center items-center relative text-white ${`bg-[${winingColor}]`} w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl`}
                              key={index}
                            >
                              {val}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex-col">
                    <div className="leading-5 font-bold py-1.5">Bonus</div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex gap-1.5 md:gap-2 flex-wrap">
                        <div className="flex font-bold rounded-full justify-center items-center relative text-white bg-red-800 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl ring-red-800 ring-2 ring-offset-4 mx-0.5 md:mx-auto">
                          2
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <hr
            className="lg:w-full border-solid border-t-1 border-gray-300 relative p-0"
            aria-hidden="true"
          />
          <div className="">
            <div className="flex flex-col justify-center md:flex-row md:items-center lg:justify-end px-9">
              <div className="mb-4.5 md:mb-7 md:mt-8 md:flex md:justify-start">
                <div className="uppercase mt-4 md:mt-0 mx-auto lg:mx-0 w-8/10 md:w-72">
                  <a
                    role="button"
                    className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov p-4 text-[#2c4b63] bg-white border-[#2c4b63] active:bg-blue-lighter-04"
                  >
                    <span>more results</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:justify-end lg:w-7/12">
          <div className="h-2 md:h-3 lg:hidden">
            <svg
              className="w-full h-2 md:h-3"
              viewBox="0 0 336 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M0 5.1L336.484 0.5V23.5H0V5.1Z" fill="#FAD3D4"></path>
            </svg>
          </div>
          <div
            className="pr-[1rem] py-2 md:py-0 lg:py-2 rounded-b-md lg:rounded-l-none lg:rounded-r-md h-full flex overflow-hidden relative bg-game-lotto lg:bg-lottoCrossSellBackground bg-cover"
            style={
              gradient === false
                ? { backgroundImage: `url(${backgroundImage})` }
                : { backgroundImage: `${backgroundImage}` }
            }
          >
            <div className="flex flex-1 flex-row md:justify-center lg:justify-start lg:flex-col lg:h-full lg:mb-auto z-1 gap-2 md:gap-0">
              <div className="mt-2 lg:flex hidden justify-end ">
                <img
                  alt="logo"
                  className="w-11 md:w-12 lg:w-24 h-10"
                  src={secondLogo}
                  role="img"
                />
              </div>
              <div className="items-center ml-2 my-auto md:flex md:ml-0 md:my-3 lg:ml-3 lg:flex-col lg:flex-grow lg:h-full lg:mt-0 lg:items-start">
                <div className="text-end w-full">
                  <h1 className="text-white text-xl md:text-4xl lg:text-base lg:font-bold font-black mb-1 hidden lg:block">
                    Next draw
                  </h1>
                  <div className="text-white lg:font-bold text-base md:text-lg lg:text-xl">
                    {nextDraw}
                  </div>
                </div>
                <div className="w-full flex lg:flex-col leading-4 justify-between lg:justify-start lg:my-auto flex-row items-end">
                  <div className="lg:flex justify-end ml-2 lg:ml-8 lg:mt-6 xsm:whitespace-nowrap ">
                    <div className="text-white text-base md:text-lg lg:text-6xl lg:flex hidden font-bold lg:font-black">
                      €{drawAmount}*
                    </div>
                    <div className="text-white text-base md:text-lg lg:text-6xl lg:hidden font-bold lg:font-black">
                      €{drawAmount}
                    </div>
                  </div>
                  <div className="text-white font-normal md:mr-2 ml-2 lg:mt-9 md:ml-1 md:text-lg lg:hidden">
                    (estimated)
                  </div>
                </div>
              </div>
              <div className="flex lg:ml-11 md:mt-1.5 lg:mb-4 ml-auto md:ml-2 md:mb-2 lg:justify-end mr-2 lg:mr-3 pt-1 shrink-0 whitespace-nowrap">
                <a
                  aria-label="Play from €4 link"
                  className="flex justify-center group"
                  href="/draw-games/lotto"
                >
                  <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                    <div className="uppercase text-sm font-bold leading-none xsm:text-base">
                      <span aria-label="play from €4">
                        Play from €${playFor}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-white justify-start lg:flex font-normal text-sm ml-2 mr-6 lg:flex-grow hidden">
                <div className="lg:mt-auto lg:mb-2">*estimated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
