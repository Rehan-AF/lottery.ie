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
    <div className=" md:min-h-30 lg:min-h-0 h-full w-full lg:w-auto lg:h-full">
      {/*for mobile   */}
      <div
        className="on_hover maindiv sm:w-full md:hidden flex justify-between  bg-lottoCardBackground bg-left bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden flex-row-reverse"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="flex flex-col justify-between ">
          <img
            alt="white Lotto logo"
            className="h-12"
            src={logoSrc}
            role="img"
          />
          <button className="no_hover_shadow rounded-full border border-solid text-center px-3 py-1 border-white text-white   lg: group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
            {/* Play from €4 */}
            {playLabel}
          </button>
        </div>

        <div className="sm:w-[50%]">
          <div>
            <p className="sm:w-full text-[12px] md:text-base shadow-text font-bold text-end">
              {/* Next draw */}
              {drew}
            </p>
            <p className=" md:text-lg shadow-text leading-5 font-black text-[14px] text-end">
              {/* Tomorrow, 12:45am */}
              {`${drawDay}, ${drawTime}`}
            </p>
            <p className="text-end shadow-text mt-[0.7rem] break-words sm:text-2xl md:text-3xl font-black text-lg">
              {' '}
              <strong className="text-[32px] md:text-5xl-xtra lg:text-5xl">
                {/* €6.8 */}
                {jackpotAmount}
              </strong>
              {/* Million */}
              {price}
            </p>
          </div>
          <div>
            <p className="text-end text-white text-x-sm font-bold pl-4  pt-[14px] md:w-auto">
              {/* *estimated */}
              {estimatedLabel}
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      {/* for medium screen */}

      <div
        className="on_hover maindiv items-center md:flex md:w-full xl:hidden justify-between hidden md  bg-lottoCardBackground bg-left bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden flex-row-reverse justify-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="filter drop-shadow w-1/2 md:w-1/3 lg:w-auto flex justify-end">
          <img
            alt="white Daily Million logo"
            className="h-12"
            src={logoSrc}
            role="img"
          />
        </div>
        <div className="md:text-end md:w-1/3">
          <h2 className="shadow-text font-bold text-lg">
            {/* Only €1 per line */}
            {playLabel}
          </h2>
          <h2 className="md:text-lg shadow-text leading-5 font-black text-lg">
            {/* 1 hour to go! */}
            {/* {estimatedLabel} */}
            {`${drawDay}, ${drawTime}`}
          </h2>
          <h3
            aria-label="1 Million Euro *"
            className="md:pt-[12px] shadow-text break-words text-xl sm:text-2xl md:text-3xl font-black "
          >
            <span aria-hidden="true" className="text-lg md:text-3xl">
              <span>
                <strong className=" lg:text-5xl">
                  {/* €1 */}
                  {jackpotAmount}
                </strong>{' '}
                {/* Million* */}
                {price}
              </span>
            </span>
          </h3>
        </div>
        <div className="md:text-end md:flex md:flex-col md:items-end md:w-1/3">
          <div className="rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
            <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
              <span aria-label="play from €1">Play from €1</span>
            </div>
          </div>

          <p className="text-left text-white text-x-sm font-bold  w-1/2 md:w-auto md:pt-10">
            {/* *estimated */}
            {estimatedLabel}
          </p>
        </div>
      </div>
      {/* full size screen start  */}
      <button
        className=" group cursor-pointer text-left w-full h-full xl:flex hidden items-end  "
        role="link"
      >
        <div
          className="on_hover bg-lottoCardBackground bg-left bg-cover bg-no-repeat text-white rounded-lg relative py-3 px-3 w-full transition-shadow duration-200 hover:shadow-cardHov overflow-hidden h-[261px]"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
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
                className="on_hover no_hover_shadow flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-gray-800 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href={playLink}
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
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
                <h1 className="flex self-end pr-2 md:text-base md:text-[16px] shadow-text font-bold text-lg">
                  {drew}
                </h1>
                <h2 className="flex self-end pr- md:text-lg shadow-text leading-5 font-black text-lg">
                  {`${drawDay} ${drawTime}`}
                </h2>
              </div>
              <h3
                aria-label={`${jackpotAmount} *`}
                className=" shadow-text break-words text-xl sm:text-2xl md:text-3xl font-black "
              >
                <span aria-hidden="true" className="text-lg md:text-3xl">
                  <span>
                    <strong className=" md:text-5xl-xtra lg:text-5xl">
                      {jackpotAmount}
                    </strong>
                    <span className="text-[16px]">{price}</span>
                  </span>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </button>
      {/* full size screen start  */}
    </div>
  );
};

export default SmallCardRed;
