import ResultsCard from './resultsCard';
import lottoLogo from '../../assets/results/LottoWhite.svg';
import EuroMillionsWhite from '../../assets/results/EuroMillionsWhite.svg';
import EuroDreams from '../../assets/results/EuroDreams.svg';
import DailyMillions from '../../assets/results/DailyMillion.svg';
import Lotto54321 from '../../assets/results/Lotto54321.svg';
import TellyBingo from '../../assets/results/TellyBingo.svg';
import redbg from '../../assets/results/redbg.svg';
import yellowBg from '../../assets/results/yellowBg.svg';
import blueBg from '../../assets/cards/DailyMillion-back.png';
import lottoBackStar from '../../assets/cards/Lotto-back-star.png';
import greenBg from '../../assets/results/greenBg.svg';
import purpleBg from '../../assets/results/purpleBg.svg';

const data = [
  {
    logo: lottoLogo,
    gradient: false,
    backgroundImage: redbg,
  },
  {
    logo: EuroMillionsWhite,
    gradient: false,
    backgroundImage: yellowBg,
  },
  {
    logo: EuroDreams,
    gradient: true,
    backgroundImage:
      'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
  },
  {
    logo: DailyMillions,
    gradient: false,
    backgroundImage: blueBg,
  },
  {
    logo: Lotto54321,
    gradient: false,
    backgroundImage: lottoBackStar,
  },
  {
    logo: TellyBingo,
    gradient: false,
    backgroundImage: purpleBg,
  },
];
const ResultsDropDown = () => {
  return (
    <div>
      <div className="flex gap-[0.5rem]">
        {data.map((val, index) => {
          return (
            <div key={index}>
              <ResultsCard
                logo={val.logo}
                gradient={val.gradient}
                backgroundImage={val.backgroundImage}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div
          className="w-full flex justify-center ease-in delay-200 mt-6"
          style={{ opacity: 100 }}
        >
          <button
            className="flex justify-center cursor-pointer leading-normal text-base font-bold group-hover:text-blue-prompt items-center"
            role="button"
          >
            View All Results
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
                  d="M2.15862 0.925646C1.73039 0.427253 0.965493 0.356855 0.447051 0.765762C-0.0754328 1.17786 -0.15141 1.92164 0.28019 2.42395L2.49363 5L0.28019 7.57605C-0.15141 8.07836 -0.0754328 8.82214 0.447051 9.23424C0.965494 9.64314 1.73039 9.57275 2.15862 9.07435L4.94706 5.8291C5.35 5.36015 5.35212 4.64233 4.94706 4.1709L2.15862 0.925646Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div>
          <div className="w-full h-12 flex justify-center items-center gap-6 rounded-b-md bg-game-daily">
            <img
              alt="white Daily Million logo"
              className="w-22 relative bottom-0.5"
              src="https://www.lottery.ie/content/dam/pli/logos/centered/white/DailyMillion.svg"
              role="img"
            />
            <p className="text-white text-lg">1 hour to go!</p>
            <span className="flex text-lg font-bold">
              <p className="text-white">€1 Million Guaranteed Jackpot</p>
            </span>
            <a
              aria-label="PLAY TODAY link"
              className="flex justify-center cursor-pointer"
              href="/draw-games/daily-million"
            >
              <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                  <span aria-label="play today">PLAY TODAY</span>
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
