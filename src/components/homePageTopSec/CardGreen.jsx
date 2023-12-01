import backImg from '../../assets/cards/MillionaireRaffle-back.png';
import './styles.css';
const CardGreen = () => {
  return (
    <div
      className=" xsm:h-30 md:min-h-30 h-full w-full  mb-[1rem] xl:mb-[0rem] mt-[1rem]"
      role="link"
    >
      <button className=" group cursor-pointer text-left w-full h-full">
        <div
          className="on_hover bg-millionaireRaffleCardBackground bg-left-bottom bg-cover bg-no-repeat text-white rounded-lg relative py-4 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov"
          style={{
            backgroundImage: `url("${backImg}")`,
          }}
        >
          <div className="flex flex-row-reverse flex-wrap md:no-wrap items-center h-full justify-between">
            <div className="flex justify-end self-start md:self-center filter drop-shadow w-1/2 md:w-1/3">
              <img
                alt="white millionaire raffle logo"
                className="h-12 lg:h-16"
                src="https://www.lottery.ie/content/dam/pli/logos/left/white/MillionaireRaffle.svg"
                role="img"
              />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/3 lg:items-center">
              <div className="text-end flex flex-col h-full space-y-3">
                <div className="flex flex-col">
                  <span className="text-end text-sm md:text-base font-bold shadow-text">
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
                      <strong className="sm:text-[32px] text-5xl md:text-5xl-xtra lg:text-5xl">
                        €1
                      </strong>{' '}
                      Million*
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="sm:justify-end flex flex-start md:flex-col md:items-end  h-auto -mt-3 md:mt-0 bottom-4 w-1/2 md:w-1/3 false">
              <a
                aria-label="Play for €25 link"
                className="no_hover_shadow on_hover no_hover_shadow flex justify-center self-end cursor-pointer transition-colors duration-200 group-hover:text-gray-800 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
                href="/"
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                    <span aria-label="play for €25">Play for €25</span>
                  </div>
                </div>
              </a>
              <p className="sm:text-end  hidden md:block text-white md:none text-sm md:pt-[2.5rem] font-normal pr-4 bottom-0 left-[16px] pb-2.5 w-1/2">
                *guaranteed
              </p>
            </div>
            <p className="sm:text-end text-white md:absolute md:hidden text-sm font-normal pr-4 absolute bottom-0 left-[16px] pb-2.5 w-1/2 md:w-auto">
              *guaranteed
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardGreen;
