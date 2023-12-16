import GameLogos from '../svg/GameLogos';
import ResultsAccorion from './ResultsAccordion';
import ResultsTable from './ResultsTable';

const ResultsHistory = ({
  secondLogo,
  winingColor,
  customClass,
  JackportAmount,
  date,
  columnNumber = 6,
  winingNumbers,
  specialNumbers,
  data,
  winingType = 'اعداد برنده شده',
}) => {
  return (
    <div className="bg-white shadow-md rounded-t-lg max-w-[880px] w-full mt-[0.3rem] mb-[0.7rem]">
      <div className="px-4 md:px-9">
        <div className="bg-white flex flex-row justify-between pt-3 sm:pb-[0px] md:pb-2 rounded-t-lg">
          <div className="w-22 -mb-1">
            <GameLogos
              logoName={secondLogo}
              width={108}
              color={winingColor}
              customClass={customClass}
            />
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
        <div className="pb-[12px]">
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
                  {winingType}
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
        </div>
      </div>
      <hr />
      <ResultsAccorion title="View prize breakdown" center={true}>
        <ResultsTable data={data} />
        <div className="flex justify-center p-4 bg-white">
          <a className="underline">How to claim your prize</a>
        </div>
      </ResultsAccorion>
    </div>
  );
};

export default ResultsHistory;
