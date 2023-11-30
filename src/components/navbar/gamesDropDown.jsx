import GamesCard from './gamesCard';
import lottoLogo from '../../assets/results/LottoWhite.svg';
import EuroMillionsWhite from '../../assets/results/EuroMillionsWhite.svg';
import EuroDreams from '../../assets/results/EuroDreams.svg';
import DailyMillions from '../../assets/results/DailyMillion.svg';
import MillionaireRaffle from '../../assets/results/MillionaireRaffle.svg';
import redbg from '../../assets/results/redbg.svg';
import yellowBg from '../../assets/results/yellowBg.svg';
import blueBg from '../../assets/cards/DailyMillion-back.png';
import lottoBackStar from '../../assets/cards/Lotto-back-star.png';
import greenBg from '../../assets/results/greenBg.svg';
const data = [
  {
    logo: lottoLogo,
    background: redbg,
    date: 'Sunday, 12:45am',
    amount: '7.2 Millions',
    playFor: '4',
  },
  {
    logo: EuroMillionsWhite,
    background: yellowBg,
    date: 'Saturday, 12:30am',
    amount: '200 Millions',
    playFor: '2.50',
  },
  {
    logo: EuroDreams,
    background: 'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    date: 'Tomorrow, 12:30am',
    amount: '20,000',
    playFor: '2.50',
    gradient: true,
  },
  {
    logo: DailyMillions,
    background: blueBg,
    date: 'Only €1 per line',
    amount: '1 Million',
    playFor: '1',
  },
  {
    logo: lottoLogo,
    background: lottoBackStar,
    date: 'Sunday, 12:45am',
    amount: '125,000',
    playFor: '1',
  },
  {
    logo: MillionaireRaffle,
    background: greenBg,
    date: '32 days to go!',
    amount: '1 Million',
    playFor: '25',
  },
];

const GamesDropDown = () => {
  return (
    <div>
      <div>
        <h6 className="leading-6 mb-2 mt-4 font-black text-lg">
          Play Draw Games
        </h6>
      </div>
      <div className="flex flex-row gap-[0.5rem]">
        {data?.map((val, index) => {
          return (
            <div key={index}>
              <GamesCard
                logo={val.logo}
                background={val.background}
                date={val.date}
                amount={val.amount}
                playFor={val.playFor}
                gradient={val.gradient}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-[1rem]">
        <svg
          className="ml-5 w-10 h-10"
          viewBox="0 0 52 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.4306 39.5352C25.4306 39.5352 27.8217 41.0118 28.8862 41.9485C28.8862 41.9485 32.8616 41.4074 33.9048 41.3861C33.9048 41.3861 33.6435 42.9466 31.5363 45.3816C31.5363 45.3816 32.5355 47.8162 31.9704 50.0003C31.9704 50.0003 29.8632 48.3986 27.668 47.6695C27.668 47.6695 24.4954 48.7313 22.3012 48.8563C22.3012 48.8563 23.3234 47.0454 23.67 46.0682C23.67 46.0682 21.0642 44.9443 20.1504 44.6525L24.8437 43.0303C24.8437 43.0303 25.7998 41.3657 25.4306 39.5352Z"
            fill="#BED62F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.15589 24.4395C4.15589 24.4395 6.03642 25.685 6.87473 26.4716C6.87473 26.4716 10.0052 26.0182 10.8278 25.9993C10.8278 25.9993 10.6217 27.3148 8.96349 29.3663C8.96349 29.3663 9.74935 31.4168 9.30477 33.2572C9.30477 33.2572 7.6449 31.9063 5.91797 31.2943C5.91797 31.2943 3.41979 32.1879 1.6934 32.2926C1.6934 32.2926 2.49764 30.7682 2.77131 29.9439C2.77131 29.9439 0.717707 28.9971 0 28.7521L3.69454 27.3852C3.69454 27.3852 4.44632 25.9821 4.15589 24.4395Z"
            fill="#BED62F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.4744 31.3994C29.4744 31.3994 30.237 31.9039 30.5761 32.2226C30.5761 32.2226 31.8427 32.0391 32.1754 32.0308C32.1754 32.0308 32.0921 32.5635 31.4214 33.3933C31.4214 33.3933 31.7389 34.2243 31.5593 34.9682C31.5593 34.9682 30.8887 34.4216 30.1883 34.1738C30.1883 34.1738 29.1774 34.5358 28.4792 34.5774C28.4792 34.5774 28.8048 33.961 28.9146 33.6267C28.9146 33.6267 28.0844 33.2448 27.7939 33.1439L29.2883 32.5912C29.2883 32.5912 29.5928 32.0236 29.4744 31.3994Z"
            fill="#BED62F"
          ></path>
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.0843 0C34.0843 0 39.139 3.34758 41.389 5.46123C41.389 5.46123 49.7954 4.24448 51.9999 4.18905C51.9999 4.18905 51.4536 7.7251 46.9959 13.2318C46.9959 13.2318 49.1063 18.7451 47.9116 23.6831C47.9116 23.6831 43.4593 20.0578 38.8134 18.4153C38.8134 18.4153 32.1026 20.8122 27.4735 21.0905C27.4735 21.0905 29.632 17.0001 30.3637 14.7806C30.3637 14.7806 24.852 12.2462 22.9238 11.5771L32.8452 7.90914C32.8452 7.90914 34.8647 4.14027 34.0843 0Z"
            fill="#BED62F"
          ></path>
        </svg>
        <svg
          className="ml-5 w-10 h-10"
          viewBox="0 0 52 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.4306 39.5352C25.4306 39.5352 27.8217 41.0118 28.8862 41.9485C28.8862 41.9485 32.8616 41.4074 33.9048 41.3861C33.9048 41.3861 33.6435 42.9466 31.5363 45.3816C31.5363 45.3816 32.5355 47.8162 31.9704 50.0003C31.9704 50.0003 29.8632 48.3986 27.668 47.6695C27.668 47.6695 24.4954 48.7313 22.3012 48.8563C22.3012 48.8563 23.3234 47.0454 23.67 46.0682C23.67 46.0682 21.0642 44.9443 20.1504 44.6525L24.8437 43.0303C24.8437 43.0303 25.7998 41.3657 25.4306 39.5352Z"
            fill="#BED62F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.15589 24.4395C4.15589 24.4395 6.03642 25.685 6.87473 26.4716C6.87473 26.4716 10.0052 26.0182 10.8278 25.9993C10.8278 25.9993 10.6217 27.3148 8.96349 29.3663C8.96349 29.3663 9.74935 31.4168 9.30477 33.2572C9.30477 33.2572 7.6449 31.9063 5.91797 31.2943C5.91797 31.2943 3.41979 32.1879 1.6934 32.2926C1.6934 32.2926 2.49764 30.7682 2.77131 29.9439C2.77131 29.9439 0.717707 28.9971 0 28.7521L3.69454 27.3852C3.69454 27.3852 4.44632 25.9821 4.15589 24.4395Z"
            fill="#BED62F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.4744 31.3994C29.4744 31.3994 30.237 31.9039 30.5761 32.2226C30.5761 32.2226 31.8427 32.0391 32.1754 32.0308C32.1754 32.0308 32.0921 32.5635 31.4214 33.3933C31.4214 33.3933 31.7389 34.2243 31.5593 34.9682C31.5593 34.9682 30.8887 34.4216 30.1883 34.1738C30.1883 34.1738 29.1774 34.5358 28.4792 34.5774C28.4792 34.5774 28.8048 33.961 28.9146 33.6267C28.9146 33.6267 28.0844 33.2448 27.7939 33.1439L29.2883 32.5912C29.2883 32.5912 29.5928 32.0236 29.4744 31.3994Z"
            fill="#BED62F"
          ></path>
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.0843 0C34.0843 0 39.139 3.34758 41.389 5.46123C41.389 5.46123 49.7954 4.24448 51.9999 4.18905C51.9999 4.18905 51.4536 7.7251 46.9959 13.2318C46.9959 13.2318 49.1063 18.7451 47.9116 23.6831C47.9116 23.6831 43.4593 20.0578 38.8134 18.4153C38.8134 18.4153 32.1026 20.8122 27.4735 21.0905C27.4735 21.0905 29.632 17.0001 30.3637 14.7806C30.3637 14.7806 24.852 12.2462 22.9238 11.5771L32.8452 7.90914C32.8452 7.90914 34.8647 4.14027 34.0843 0Z"
            fill="#BED62F"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default GamesDropDown;
