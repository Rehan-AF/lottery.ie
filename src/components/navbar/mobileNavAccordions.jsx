import { Link } from 'react-router-dom';
import logo_01 from '../../assets/gameLogoBlack/01.svg';
import logo_02 from '../../assets/gameLogoBlack/02.svg';
import logo_03 from '../../assets/gameLogoBlack/03.svg';
import logo_04 from '../../assets/gameLogoBlack/04.svg';
import logo_05 from '../../assets/gameLogoBlack/05.svg';
import logo_06 from '../../assets/gameLogoBlack/06.svg';
import logo_07 from '../../assets/gameLogoBlack/07.svg';
import logo_08 from '../../assets/gameLogoBlack/08.svg';
import './style.css';
export const GamesAccordions = ({ isVisible }) => {
  return (
    <div>
      <div className="transition-max-height duration-700 ease-in-out flex-1 bg-gray-100">
        <div className="flex flex-col gap-[0.7rem]">
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.3s' }}
            >
              <h6 className="flex justify-center sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_01} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem]  md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>۳۸۵ میلیارد تومان</span>
                  </span>
                </p>
                <p>
                  <span>یکشنبه ۱۲ مهر</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.4s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_02} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>۵۰۰ میلیارد تومان</span>
                  </span>
                </p>
                <p>
                  <span>شنبه ۱۲ مهر</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.5s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_03} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span className="text-sm md:text-sm lg:text-3xl">
                    ۱۰۰ میلیارد تومن
                  </span>
                </p>
                <p>
                  <span>پنجشنبه ۱۸ آذر ساعت ۱۸:۰۰</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.6000000000000001s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_04} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>۸۴۰ میلیارد تومن</span>
                  </span>
                </p>
                <p>
                  <span>فردا ساعت ۱۲:۰۰</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.7s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_05} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span>۱۹۲ میلیارد تومان</span>
                </p>
                <p>
                  <span>دوشنبه ۱۸ مهر ساعت ۱۸:۰۰</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.8s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_06} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>۳۴ میلیارد تومان</span>
                  </span>
                </p>
                <p>
                  <span>فردا ساعت ۱۸:۰۰</span>
                </p>
              </div>
            </div>
          </button>
          <button
            aria-label="Instant Win Games, Win prizes up to €250,000"
            className="text-left"
          >
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.9000000000000001s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_07} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>۳۴ میلیارد تومان</span>
                  </span>
                </p>
                <p>
                  <span>فردا ساعت ۱۸:۰۰</span>
                </p>
              </div>
            </div>
          </button>
          <button
            aria-label="Instant Win Games, Win prizes up to €250,000"
            className="text-left"
          >
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.9900000000000001s' }}
            >
              <h6 className="sm:w-1/3 md:w-1/2  font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <img src={logo_08} className="w-[80px]" />
              </h6>
              <div className="sm:pr-[1rem] md:pr-[0rem] sm:w-full md:w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end rtl">
                <p className="font-bold text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>۳۴ میلیارد تومان</span>
                  </span>
                </p>
                <p>
                  <span>فردا ساعت ۱۸:۰۰</span>
                </p>
              </div>            </div>
          </button>
        </div>
        <div className="w-full border-t text-sm px-6 py-2">
          <p className="text-end">مبالغ تقریبی می باشند***</p>
        </div>
      </div>
    </div>
  );
};

export const ResultsAccordion = ({ setPanelVisible, isVisible }) => {
  return (
    <div className="overflow-hidden transition-max-height duration-700 ease-in-out flex-1 bg-gray-100">
      <div className="flex flex-col sm:gap-[0.7rem] md:gap-[0.7rem] text-lg space-y-4 font-bold mb-2 px-6 py-4 sm:items-end md:items-end">
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.3s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_01} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.4s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_02} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.5s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_03} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.6s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_04} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.7s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_05} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.8s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_06} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.89s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_07} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.99s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            <img src={logo_08} className="w-[80px]" />
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard flex flex-col items-start`}
          style={{ animationDuration: '1.09s' }}
        >
          <Link to="/results ">
            <button
              className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov px-4 py-1 text-gray-700 bg-white border-blue-800 active:bg-blue-lighter-04"
              onClick={() => setPanelVisible(false)}
            >
              <span>مشاهده تمام نتایج</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
