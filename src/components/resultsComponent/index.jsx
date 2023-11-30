import ResultsCard from './resultsCard';
import lottoLogoRed from '../../assets/results/Lotto.svg';
import lottoLogoWhite from '../../assets/results/LottoWhite.svg';
import redImage from '../../assets/results/redbg.svg';
import EuroMillions from '../../assets/results/EuroMillions.svg';
import EuroMillionsWhite from '../../assets/results/EuroMillionsWhite.svg';
import yelloBg from '../../assets/results/yellowBg.svg';
/**
 * 
  logo,
  JackportAmount,
  date,
  winingNumbers,
  winingColor,
  secondLogo,
  nextDraw,
  drawAmount,
  playFor,
 */
const data = [
  {
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [13, 17, 21, 22, 37, 42, 23, 32, 43, 54, 12, 34, 56, 43, 23],
    winingColor: '#e3262d',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: redImage,
  },
  {
    logo: EuroMillions,
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 16, 27, 33, 44, 23],
    winingColor: '#f6a500',
    secondLogo: EuroMillionsWhite,
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: yelloBg,
  },
  {
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 64, 3],
    winingColor: '#e3262d',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: redImage,
  },
  {
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [
      12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64,
      3,
    ],
    winingColor: '#e3262d',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: redImage,
  },
  {
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    winingColor: '#e3262d',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage:
      'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,
  },
  {
    logo: EuroMillions,
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 78, 5],
    winingColor: '#f6a500',
    secondLogo: EuroMillionsWhite,
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: yelloBg,
  },
  {
    logo: EuroMillions,
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 16, 27, 33, 44, 23, 45],
    winingColor: '#f6a500',
    secondLogo: EuroMillionsWhite,
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: yelloBg,
  },
];
const Results = () => {
  return (
    <div>
      <div className="justify-start">
        <h1 className="capitalize text-[#2c444e] mt-2 mb-8 font-black text-5xl md:text-5xl-xtra text-end">
          Latest Results
        </h1>
      </div>
      <div className="flex flex-col gap-[0.4rem]">
        {data?.map((val, index) => {
          return (
            <div key={index}>
              <ResultsCard
                logo={val.logo}
                JackportAmount={val.JackportAmount}
                date={val.date}
                winingNumbers={val.winingNumbers}
                winingColor={val.winingColor}
                secondLogo={val.secondLogo}
                nextDraw={val.nextDraw}
                drawAmount={val.drawAmount}
                playFor={val.playFor}
                backgroundImage={val.backgroundImage}
                gradient={val.gradient}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
