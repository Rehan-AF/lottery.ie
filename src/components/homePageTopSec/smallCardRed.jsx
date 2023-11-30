import React from 'react';

const SmallCardRed = ({
  backgroundImage,
  logoSrc,
  playLink,
  playLabel,
  drawDay,
  drawTime,
  jackpotAmount,
  estimatedLabel,
  price,
  drew,
}) => {
  return (
    <div className="md:min-h-30 lg:min-h-0 h-full w-full lg:w-auto lg:h-full">
      {/*for mobile   */}
      <div
        className="maindiv md:hidden flex justify-between  bg-lottoCardBackground bg-left bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden flex-row-reverse"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col justify-between ">
          <img
            alt="white Lotto logo"
            className="h-12"
            src={logoSrc}
            role="img"
          />
          <button className=" rounded-full border border-solid text-center px-3 py-1 border-white text-white   lg: group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
            {/* Play from €4 */}
            {playLabel}
          </button>
        </div>

        <div className="2">
          <div>
            <p className="text-sm md:text-base shadow-text font-bold">
              {/* Next draw */}
              {drew}
            </p>
            <p className=" md:text-lg shadow-text leading-5 font-black text-lg">
              {/* Tomorrow, 12:45am */}
              {`${drawDay}, ${drawTime}`}
            </p>
            <p className=" shadow-text break-words sm:text-2xl md:text-3xl font-black text-lg">
              {' '}
              <strong className="text-5xl md:text-5xl-xtra lg:text-5xl">
                {/* €6.8 */}
                {jackpotAmount}
              </strong>
              {/* Million */}{price}
            </p>
          </div>
          <div>
            <p className="text-white text-x-sm font-bold pr-4  pt-[14px] md:w-auto">
              {/* *estimated */}
              {estimatedLabel}
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      {/* for desktop */}

      <div
        className="maindiv items-center md:flex xl:hidden justify-between hidden md  bg-lottoCardBackground bg-left bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden flex-row-reverse justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="  filter drop-shadow w-1/2 md:w-1/3 lg:w-auto flex justify-end">
          <img
            alt="white Daily Million logo"
            class="h-12"
            src="https://www.lottery.ie/content/dam/pli/logos/left/white/DailyMillion.svg"
            role="img"
          />
        </div>
        <div>
          <h2 class=" shadow-text font-bold text-lg">
            {/* Only €1 per line */}
            {playLabel}
          </h2>
          <h2 class=" md:text-lg shadow-text leading-5 font-black text-lg">
            {/* 1 hour to go! */}
            {/* {estimatedLabel} */}
            {`${drawDay}, ${drawTime}`}
          </h2>
          <h3
            aria-label="1 Million Euro *"
            class="shadow-text break-words text-xl sm:text-2xl md:text-3xl font-black "
          >
            <span aria-hidden="true" class="text-lg md:text-3xl">
              <span>
                <strong class=" lg:text-5xl">
                  {/* €1 */}
                  {playLabel}
                </strong>{' '}
                {/* Million* */}
                {price}
              </span>
            </span>
          </h3>
        </div>
        <div>
          <div class="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
            <div class="uppercase text-sm font-bold leading-none xsm:text-sm">
              <span aria-label="play from €1">Play from €1</span>
            </div>
          </div>

          <p class="text-left text-white text-x-sm font-bold  w-1/2 md:w-auto md:pt-10">
            {/* *estimated */}
            {estimatedLabel}
          </p>
        </div>
      </div>

      <button
        className="hover:shadow-2xl group cursor-pointer text-left w-full h-full xl:flex hidden items-end  "
        role="link"
      >
        <div
          className="bg-lottoCardBackground bg-left bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden h-[261px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-row md:flex-row flex-wrap md:no-wrap flex-end  lg:flex-col h-full justify-between md:justify-start lg:space-y-4 items-end">
            <div className="mr-[-10px]  self-end  filter drop-shadow w-1/2 md:w-1/3 lg:w-auto  ">
              <img
                alt="white Lotto logo"
                className="h-12"
                src={logoSrc}
                role="img"
              />
            </div>
            <div className="flex flex-start h-auto -mt-3 md:mt-0 bottom-4 w-1/2 md:w-1/3 md:order-last lg:w-auto md:justify-end lg:justify-start lg:absolute false">
              <a
                aria-label={playLabel}
                className="flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-blue-900 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href={playLink}
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                    <span aria-label={playLabel}>{playLabel}</span>
                  </div>
                </div>
              </a>
            </div>
            <p className=" pl-2 text-white text-x-sm font-bold pr-4 absolute bottom-0 left-0 pb-2.5 w-1/2 md:w-auto">
              {estimatedLabel}
            </p>
            <div className="flex flex-col space-y-1 w-1/2 md:w-1/3 lg:w-auto">
              <div className="flex flex-col">
                <h1 className="flex self-end pr-2 md:text-base shadow-text font-bold text-lg">
                  {drew}
                </h1>
                <h2 className="flex self-end pr- md:text-lg shadow-text leading-5 font-black text-lg">
                  {`${drawDay} ${drawTime}`}
                </h2>
              </div>
              <h3
                aria-label={`${jackpotAmount} *`}
                className="shadow-text break-words text-xl sm:text-2xl md:text-3xl font-black "
              >
                <span aria-hidden="true" className="text-lg md:text-3xl">
                  <span>
                    <strong className="text-5xl md:text-5xl-xtra lg:text-5xl">
                      {jackpotAmount}
                    </strong>{' '}
                    {price}
                  </span>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SmallCardRed;
