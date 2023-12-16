import { Link } from 'react-router-dom';
import GameCarousel from '../resultsCarousel';
import lotofacillogo from '../../assets/gameLogos/02.svg';
import '../navbar/style.css';

const ResultsDropDown = ({ setResultsVisible }) => {
  return (
    <div>
      <div className="w-[1150px] pt-2 flex justify-center">
        <GameCarousel />
      </div>
      <div>
        <div
          className="w-full flex justify-center ease-in delay-200 mt-6"
          style={{ opacity: 100 }}
        >
          <Link to="/results">
            <button
              className="rtl flex pb-[1rem] justify-center cursor-pointer leading-normal text-base font-bold group-hover:text-gray-prompt items-center"
              role="button"
              onClick={() => {
                setResultsVisible(false);
              }}
            >
              مشاهده تمام نتایج
              <span className="pl-1 pr-2">
                <svg
                  className="w-3 h-3"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84138 0.925646C4.26961 0.427253 5.03451 0.356855 5.55295 0.765762C6.07543 1.17786 6.15141 1.92164 5.71981 2.42395L3.50637 5L5.71981 7.57605C6.15141 8.07836 6.07543 8.82214 5.55295 9.23424C5.03451 9.64314 4.26961 9.57275 3.84138 9.07435L1.05294 5.8291C0.65 5.36015 0.647878 4.64233 1.05294 4.1709L3.84138 0.925646Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
          <hr />
        </div>
        <div>
          <div
            className="w-full h-12 flex flex-row-reverse justify-center items-center gap-6 rounded-b-md bg-game-daily"
            style={{
              backgroundImage:
                'linear-gradient(180deg,#781ea5 51.95%,#ff3c69 206.15%)',
            }}
          >
            <img
              alt="لوگوی لوتوفسیل"
              className="w-16 relative bottom-0.5 lotofacil-logo-dropdown"
              src={lotofacillogo}
              role="img"
            />
            <p className="text-white text-lg">مهلت خرید تا ساعت ۱۸:۰۰</p>
            <span className="flex text-lg font-bold rtl">
              <p className="text-white pr-2">مبلغ جکپات: ۱۷ میلیارد تومان</p>
            </span>
            <a
              aria-label="PLAY TODAY link"
              className="flex justify-center cursor-pointer"
              href="/draw-games/daily-million"
            >
              <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                  <span aria-label="play today">خرید بلیط</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDropDown;
