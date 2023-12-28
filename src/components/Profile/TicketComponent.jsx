import React from 'react';
import GameLogos from '../svg/GameLogos';

const ReusableCard = ({
  backgroundUrl,
  useBackgroundImage = true,
  logoSrc,
  nextDraw,
  jackpotAmount,
  playLink,
  buttonText,
  DrawText,
  Millions,
  guaranteedEstamated,
}) => {
  return (
    <button className="group text-left " role="link">
      <div
        className="bg-left bg-cover bg-no-repeat text-white rounded-lg relative pt-2 w-60 h-80 md:w-62 md:h-88 lg:h-96 lg:w-80 flex-none"
        style={
          useBackgroundImage
            ? { backgroundImage: `url("${backgroundUrl}")` }
            : {
                background:
                  'linear-gradient(to right, #800080, #9932CC, #BA55D3)',
              }
        }
      >
        <div className="container mt-2 ">
          <div className=" flex  md:grid  md:grid-cols-8 lg:grid-cols-12">
            <div className="sm:relative sm:-right-5 md:right-4  md:col-span-12 rtl ">
              <GameLogos logoName={logoSrc} className="h-10 w-[96]" />
              <h1 className="pt-4 pb-1 text-base font-bold text-lg">
                {DrawText}
              </h1>
              <h2 className="leading-5 font-black text-xl w-[200px] md:w-auto">
                {nextDraw}
              </h2>
              <h3
                aria-label={`Jackpot Amount: ${jackpotAmount}`}
                className="pt-8 text-white pb-10 lg:text-4xl font-black text-3xl"
              >
                <span aria-hidden="true" className="text-lg md:text-3xl">
                  <span>
                    <strong className="text-4xl md:text-5xl-xtra lg:text-5xl">
                      {jackpotAmount}
                    </strong>{' '}
                    {Millions}
                  </span>
                </span>
              </h3>
              <div className="flex flex-start h-auto ">
                <a
                  aria-label="Play link"
                  className="flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-blue-900 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                  href={playLink}
                >
                  <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                    <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                      <span aria-label="Play from €2.50">{buttonText}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="text-white text-x-sm font-bold pr-4 absolute bottom-0 right-0 pb-2.5">
            {guaranteedEstamated}
          </p>
        </div>
      </div>
    </button>
  );
};

export default ReusableCard;
