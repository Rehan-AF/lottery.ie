import redbg from '../../assets/results/redbg.svg';
import radient_left from '../../assets/backgrounds/3_Purple- Lotofacil/radiant-left.svg';
import radient_right from '../../assets/backgrounds/3_Purple- Lotofacil/radiant-right.svg';

import './styles.css';
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
  specialNumbers = false,
  winingNumbers2 = false,
  columnNumber = 6,
}) => {
  return (
    <div>
      <div className="relative shadow_custom my-2 lg:flex lg:justify-between bg-white rounded-md">
        <div className="lg:w-full flex flex-col justify-evenly">
          <div className="px-4 md:px-9">
            <div className="bg-white flex flex-row-reverse justify-between pt-3 sm:pb-[0px] md:pb-3 rounded-t-lg">
              <div className="w-22 -mb-1">
                <img src={logo} alt="Lotto logo" className="w-full h-full" />
              </div>
              <div className="text-right">
                <p className="text-bold text-base sm:text-[14px] md:text-[15.5px] text-[#49636e]">
                  Jackpot
                </p>
                <p className="font-black text-xl sm:text-[18px] md:text-[20px] text-[#49636e]">
                  €{JackportAmount}
                </p>
              </div>
            </div>
            <div className="pb-4">
              <div className="relative text-end">
                <span
                  aria-hidden="true"
                  className="lg:text-[15.75px] pt-2 pb-0.5 font-bold text-lg md:text-xl md:pb-4 text-[#49636e]"
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
                    <div className="leading-5 font-bold py-1.5 text-end text-[#49636e]">
                      Winning numbers
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div
                        className={`grid grid-cols-${columnNumber} gap-1.5 md:gap-2 flex-wrap`}
                      >
                        {winingNumbers?.map((val, index) => {
                          return (
                            <div
                              className={`flex font-bold  md:w-[45px] md:h-[45px]  rounded-full justify-center items-center text-white ${`bg-[${winingColor}]`} w-7 h-7  md:text-2xl sm:text-[0.875rem]`}
                              key={index}
                            >
                              {val}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {specialNumbers && (
                    <div className="flex-col">
                      <div className="leading-5 text-end font-bold py-1.5 text-[#49636e]">
                        Clovers
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div className="flex gap-1.5">
                          {specialNumbers?.map((val, index) => {
                            return (
                              <div
                                key={index}
                                style={{
                                  position: 'relative',
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                                  height="800px"
                                  width="800px"
                                  version="1.1"
                                  id="Layer_1"
                                  viewBox="0 0 511.999 511.999"
                                  // xml:space="preserve"
                                  className="sm:w-[28px] sm:h-[28px] md:w-[45px] md:h-[45px]"
                                >
                                  <path
                                    style={{ fill: winingColor }}
                                    d="M420.364,255.999L420.364,255.999l-185.261-20.898L256,420.364  c9.672,24.942,23.54,48.725,43.281,68.465c30.894,30.894,80.984,30.894,111.878,0c15.089-15.089,22.788-34.758,23.137-54.532  c19.775-0.35,39.443-8.048,54.532-23.137c30.895-30.894,30.895-80.984,0-111.878C469.088,279.54,445.305,265.671,420.364,255.999z"
                                  />
                                  <path
                                    style={{ fill: winingColor }}
                                    d="M420.364,255.999c24.942-9.672,48.725-23.54,68.465-43.281c30.895-30.895,30.895-80.984,0-111.878  c-15.089-15.089-34.757-22.788-54.532-23.137c-0.35-19.775-8.048-39.443-23.137-54.532c-30.894-30.894-80.984-30.894-111.878,0  c-19.74,19.74-33.609,43.523-43.281,68.465l0,0l-20.898,164.363H420.364z"
                                  />
                                  <path
                                    style={{ fill: winingColor }}
                                    d="M91.637,255.999c-24.942,9.672-48.725,23.54-68.466,43.281c-30.894,30.895-30.894,80.984,0,111.878  c15.089,15.089,34.757,22.788,54.532,23.137c0.35,19.775,8.048,39.443,23.137,54.532c30.895,30.895,80.984,30.895,111.878,0  c19.741-19.741,33.609-43.524,43.281-68.465l0,0V235.101L91.637,255.999z"
                                  />
                                  <path
                                    style={{ fill: winingColor }}
                                    d="M256,91.636c-9.672-24.942-23.54-48.725-43.281-68.465c-30.895-30.894-80.984-30.894-111.878,0  C85.752,38.259,78.053,57.928,77.703,77.702c-19.775,0.35-39.443,8.048-54.532,23.137c-30.894,30.894-30.894,80.984,0,111.878  c19.741,19.741,43.524,33.61,68.466,43.282H256V91.636z"
                                  />
                                  <polygon
                                    style={{ fill: winingColor }}
                                    points="381.705,152.46 359.539,130.295 256,233.834 245.551,255.999 256,278.165 359.539,381.704   381.705,359.538 278.166,255.999 "
                                  />
                                  <polygon
                                    style={{ fill: winingColor }}
                                    points="152.461,130.295 130.296,152.46 233.835,255.999 130.296,359.538 152.461,381.704   256,278.165 256,233.834 "
                                  />
                                </svg>
                                <div className="md:text-[20px] sm:text-[0.875rem] absolute font-black text-white sm:top-[6px] sm:left-[6px] md:top-[9px] md:left-[11px]">
                                  {val}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {winingNumbers2 && (
                <div className="flex mt-[1rem] justify-center items-center lg:block">
                  <div className="justify-center flex flex-row flex-wrap gap-6 lg:gap-10">
                    <div className="flex-col">
                      <div className="leading-5 font-bold py-1.5 text-end">
                        Winning numbers
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-6 gap-1.5 md:gap-2 flex-wrap">
                          {winingNumbers2?.map((val, index) => {
                            return (
                              <div
                                className={`flex font-bold  md:w-[45px] md:h-[45px]  rounded-full justify-center items-center text-white ${`bg-[${winingColor}]`} w-7 h-7  md:text-2xl sm:text-[0.875rem]`}
                                key={index}
                              >
                                {val}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                    className="on_hover_results flex items-center justify-center rounded-full border sm:text-[12px] md:text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov p-4 text-[#2c4b63] bg-white border-[#2c4b63] active:bg-blue-lighter-04"
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
              style={{ marginTop: '1rem' }}
            >
              <path
                d="M0 5.1L336.484 0.5V23.5H0V5.1Z"
                style={{ fill: winingColor, opacity: 0.25 }}
              ></path>
            </svg>
          </div>
          <div
            className={`pr-[1rem] py-2 md:py-0 lg:py-2 rounded-b-md lg:rounded-l-none lg:rounded-r-md h-full flex overflow-hidden relative bg-game-lotto lg:bg-lottoCrossSellBackground bg-cover ${
              gradient === true ? 'relative' : ''
            }`}
            style={
              gradient === false
                ? { backgroundImage: `url("${backgroundImage}")` }
                : { backgroundImage: `${backgroundImage}` }
            }
          >
            {gradient && (
              <div className="absolute top-[-1px] left-[0px] rotate-90 z-0">
                <img src={radient_left} alt="sda" />
              </div>
            )}
            <div className="flex flex-1 flex-row md:justify-center lg:justify-start lg:flex-col lg:h-full lg:mb-auto z-1 gap-2 md:gap-0">
              <div className="mt-2 lg:flex hidden justify-start ">
                <img
                  alt="logo"
                  className="w-11 md:w-12 lg:w-24 h-10"
                  src={secondLogo}
                  role="img"
                />
              </div>
              <div className="text_shadow_results items-center ml-2 my-auto md:flex md:ml-0 md:my-3 lg:ml-3 lg:flex-col lg:flex-grow lg:h-full lg:mt-0 lg:items-start">
                <div className="text-end w-full">
                  <h1 className="text-white text-xl md:text-4xl lg:text-base lg:font-bold font-black mb-1 hidden lg:block">
                    Next draw
                  </h1>
                  <div className="text-white lg:font-bold text-base md:text-lg lg:text-xl">
                    {nextDraw}
                  </div>
                </div>
                <div className="w-full flex lg:flex-col leading-4 justify-between lg:justify-start lg:my-auto flex-row items-end sm:items-center">
                  <div className="lg:flex justify-end ml-2 lg:ml-8 lg:mt-6 xsm:whitespace-nowrap ">
                    <div className="lg:text-[49.7px] text-white text-base md:text-lg lg:text-6xl lg:flex hidden font-bold lg:font-black">
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
                  <div className="on_hover_results lg:py-[10px] lg:px-[17px] m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                    <div className="uppercase text-sm font-bold leading-none xsm:text-base">
                      <span aria-label="play from €4">
                        Play from €${playFor}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-white justify-start lg:flex font-normal text-sm ml-2 mr-6 lg:flex-grow hidden">
                <div className="text_shadow_results lg:mt-auto lg:mb-2">
                  *estimated
                </div>
              </div>
            </div>
            {gradient && (
              <div className="absolute bottom-[-1px] right-[0px] rotate-90 z-0">
                <img src={radient_right} alt="sda" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
