import GameLogos from '../../components/svg/GameLogos';
import radient_left from '../../assets/backgrounds/3_Purple- Lotofacil/radiant-left.svg';
import radient_right from '../../assets/backgrounds/3_Purple- Lotofacil/radiant-right.svg';

const SideCard = ({
  backgroundImage,

  secondLogo,
  nextDraw,
  drawAmount,
  amountMultiplier,
  playFor,
  gradient = false,
}) => {
  return (
    <div className="">
      <div className="lg:justify-end">
        <div className="h-2 md:h-3 lg:hidden"></div>
        <div
          className={`shadow_md pr-[1rem] py-2 md:py-0 lg:py-2 sm:rounded-none md:rounded-lg h-full flex overflow-hidden relative bg-game-lotto lg:bg-lottoCrossSellBackground bg-cover ${
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
              {/* <img
            alt="logo"
            className="ml-[1rem] w-11 md:w-12 lg:w-24 h-10"
            src={secondLogo}
            role="img"
          /> */}
              <GameLogos
                logoName={secondLogo}
                width={108}
                className="pl-[1rem]"
                color="#fff"
              />
            </div>
            <div className="text_shadow_results items-center ml-2 my-auto md:flex md:ml-0 md:my-3 lg:ml-3 lg:flex-col lg:flex-grow lg:h-full lg:mt-0 lg:items-start">
              <div className="text-end w-full">
                <h1 className="text-white text-xl md:text-4xl lg:text-base lg:font-bold font-black mb-1 hidden lg:block">
                  قرعه کشی بعدی
                </h1>
                <div className="text-white lg:font-bold text-base md:text-lg lg:text-xl">
                  {nextDraw}
                </div>
              </div>
              <div className="w-full flex lg:flex-col leading-4 justify-between lg:justify-start lg:my-auto flex-row items-end sm:items-center">
                <div className="lg:flex justify-end ml-2 lg:ml-8 lg:mt-6 xsm:whitespace-nowrap ">
                  <div className="lg:text-[49.7px] text-white text-base md:text-lg lg:text-6xl lg:flex hidden font-bold lg:font-black rtl">
                    {drawAmount} {amountMultiplier}
                    <span style={{ fontSize: '30px' }}>تومان</span>
                  </div>
                  <div className="text-white text-base md:text-lg lg:text-6xl lg:hidden font-bold lg:font-black rtl">
                    {drawAmount} {amountMultiplier} تومان
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:ml-11 md:mt-1.5 lg:mb-4 ml-auto md:ml-2 md:mb-2 lg:justify-end mr-2 lg:mr-3 pt-1 shrink-0 whitespace-nowrap">
              <a
                aria-label="Play from link"
                className="flex justify-center group"
                href="/draw-games/lotto"
              >
                <div className="on_hover_results lg:py-[10px] lg:px-[17px] m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none xsm:text-base">
                    <span aria-label="play from">
                      خرید بلیط با {playFor} هزار تومان
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="text-white justify-start lg:flex font-normal text-sm ml-2 mr-6 lg:flex-grow hidden">
              <div className="text_shadow_results lg:mt-auto lg:mb-2">
                مبلغ تقریبی می باشد
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
  );
};

export default SideCard;
