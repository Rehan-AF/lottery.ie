import backImage from '../../assets/redstars.svg';

const SmallCardStar = () => {
  return (
    <div className="xsm:h-30 md:min-h-30 lg:min-h-0 h-full w-full lg:w-auto lg:h-full">
      <button
        className="hover:shadow-2xl group cursor-pointer text-left w-full h-full"
        role="link"
      >
        <div
          className="bg-lotto54321CardBackground xl:w-[301.5px] xl:h-[261px] bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden"
          style={{
            backgroundImage: `url(${backImage})`,
          }}
        >
          <div className="flex flex-col md:flex-row flex-wrap md:no-wrap items-center lg:items-start lg:flex-col h-full justify-between md:justify-start lg:space-y-4">
            <div className="self-start md:self-center lg:self-start filter drop-shadow w-1/2 md:w-1/3 lg:w-auto">
              <img
                alt="white lotto 5-4-3-2-1 logo"
                className="h-12"
                src="https://www.lottery.ie/content/dam/pli/logos/left/white/Lotto54321.svg"
                role="img"
              />
            </div>
            <div className="flex flex-start h-auto -mt-3 md:mt-0 bottom-4 w-1/2 md:w-1/3 md:order-last lg:w-auto md:justify-end lg:justify-start lg:absolute false">
              <a
                aria-label="Play from €1 link"
                className="flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-blue-900 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href="/"
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                    <span aria-label="play from €1">Play from €1</span>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-white text-sm font-normal pr-4 absolute bottom-0 right-0 pb-2.5 w-1/2 md:w-auto">
              *guaranteed
            </p>
            <div className="flex flex-col space-y-1 w-1/2 md:w-1/3 lg:w-auto">
              <div className="flex flex-col">
                <h1 className="text-sm md:text-base shadow-text font-bold text-lg">
                  Next draw
                </h1>
                <h2 className="text-base md:text-lg shadow-text leading-5 font-black text-lg">
                  Thursday, 12:45am
                </h2>
              </div>
              <h3
                aria-label="125,000 Euro *"
                className="shadow-text break-words text-xl sm:text-2xl md:text-3xl font-black text-lg"
              >
                <span>
                  <strong className="text-5xl md:text-5xl-xtra lg:text-5xl">
                    €125,000*
                  </strong>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SmallCardStar;
