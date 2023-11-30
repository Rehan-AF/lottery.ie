import backImg from '../../assets/cards/MillionaireRaffle-back.png';
const CardGreen = () => {
  return (
    <div
      className="xsm:h-30 md:min-h-30 h-full w-full  mb-[1rem] xl:mb-[0rem] mt-[1rem]"
      role="link"
    >
      <button className="hover:shadow-2xl group cursor-pointer text-left w-full h-full">
        <div
          className="bg-millionaireRaffleCardBackground bg-left-bottom bg-cover bg-no-repeat text-white rounded-lg relative py-4 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov"
          style={{
            backgroundImage: `url("${backImg}")`,
          }}
        >
          <div className="flex flex-row flex-wrap md:no-wrap items-center h-full justify-between">
            <div className="self-start md:self-center filter drop-shadow w-1/2 md:w-1/3">
              <img
                alt="white millionaire raffle logo"
                className="h-12 lg:h-16"
                src="https://www.lottery.ie/content/dam/pli/logos/left/white/MillionaireRaffle.svg"
                role="img"
              />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/3 lg:items-center">
              <div className="flex flex-col h-full space-y-3">
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold shadow-text">
                    One Millionaire Guaranteed
                  </span>
                  <span className="text-base md:text-lg shadow-text font-black leading-5">
                    34 days to go!
                  </span>
                </div>
                <span
                  className="font-black shadow-text text-2xl md:text-3xl break-words"
                  aria-label="1 Million Euro *"
                >
                  <span aria-hidden="true" className="text-lg md:text-3xl">
                    <span>
                      <strong className="text-5xl md:text-5xl-xtra lg:text-5xl">
                        €1
                      </strong>{' '}
                      Million*
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-start h-auto -mt-3 md:mt-0 bottom-4 w-1/2 md:w-1/3 md:justify-end false">
              <a
                aria-label="Play for €25 link"
                className="flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-gray-800 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href="/"
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                    <span aria-label="play for €25">Play for €25</span>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-white text-sm font-normal pr-4 absolute bottom-0 right-0 pb-2.5 w-1/2 md:w-auto">
              *guaranteed
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardGreen;
