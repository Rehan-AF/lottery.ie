import { Link } from 'react-router-dom';
import './styles.css';
const MediumCardBlue = ({ backgroundImage, logo, link }) => {
  return (
    <div
      className="xsm:h-30 md:min-h-30 h-full w-full xl:mt-[1rem]"
      role="link"
    >
      <button className="group cursor-pointer text-left w-full h-full">
        <div
          className="on_hover bg-millionaireRaffleCardBackground bg-left-bottom bg-cover bg-no-repeat text-white rounded-lg relative py-4 px-3 w-full h-full transition-shadow duration-200 hover:shadow-cardHov"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="sm:flex-row md:flex-row-reverse flex flex-row flex-wrap md:no-wrap items-center h-full justify-between md:items-end ">
            <div className="sm:flex sm:justify-start md:justify-end self-start md:self-center filter drop-shadow w-1/2 md:w-1/3">
              <img
                alt="white millionaire raffle logo"
                className="h-12 lg:h-16"
                src={logo}
                role="img"
              />
            </div>
            <div className="flex flex-col w-1/2 md:w-1/3 items-end">
              <div className="sm:text-end flex flex-col h-full space-y-3">
                <div className="flex flex-col">
                  <span className="sm:text-[12px] md:text-base font-bold shadow-text">
                    قرعه کشی بعدی
                  </span>
                  <span className="text-base md:text-lg shadow-text font-black leading-5">
                    دوشنبه ساعت ۱۸:۰۰
                  </span>
                </div>
                <span
                  className="font-black shadow-text text-2xl md:text-3xl break-words rtl"
                  aria-label="1 Million Euro *"
                >
                  <span aria-hidden="true" className="text-lg md:text-3xl">
                    <span>
                      <strong className="sm:text-[32px] text-5xl md:text-5xl-xtra lg:text-5xl">
                        ۲۸
                      </strong>{' '}
                      میلیارد تومان
                    </span>
                  </span>
                </span>
                <p className="sm:text-end text-white md:absolute md:hidden text-sm font-normal pr-4 absolute bottom-0 right-[0px] pb-2.5 w-1/2 md:w-auto">
                  مبلغ تقریبی*
                </p>
              </div>
            </div>
            <div className="sm:justify-start flex flex-start h-auto md:flex-col md:items-start -mt-3 md:mt-0 bottom-4 w-1/2 md:w-1/3 md:justify-end false">
              <Link
                to={link}
                aria-label="Play from €2.50 link"
                className="no_hover_shadow self-start on_hover flex justify-center cursor-pointer transition-colors duration-200 group-hover:text-gray-800 shadow-boxButton hover:shadow-boxButtonHov group-hover:bg-white rounded-full"
              >
                <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:bg-white">
                  <div className="uppercase text-sm font-bold leading-none sm:text-[12px]">
                    <span aria-label="play from €2.50">
                      خرید بلیط با ۸۰ هزار تومان
                    </span>
                  </div>
                </div>
              </Link>
              <p className="sm:text-start  hidden md:block text-white md:none text-sm  font-normal pr-4 bottom-0 left-[16px] pt-2.5 w-1/2">
                مبلغ تقریبی
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MediumCardBlue;
