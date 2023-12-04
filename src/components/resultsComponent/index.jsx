import ResultsCard from './resultsCard';
import lottoLogoRed from '../../assets/results/Lotto.svg';
import lottoLogoWhite from '../../assets/results/LottoWhite.svg';
import redImage from '../../assets/results/redbg.svg';
import EuroMillions from '../../assets/results/EuroMillions.svg';
import EuroMillionsWhite from '../../assets/results/EuroMillionsWhite.svg';
import yelloBg from '../../assets/results/yellowBg.svg';
import backgroundImage1 from '../../assets/backgrounds/1_Mega-da-virada.svg';
import backgroundImage2 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage4 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage5 from '../../assets/backgrounds/5_Lotomania.svg';
import backgroundImage6 from '../../assets/backgrounds/6_Mega-Sena.svg';
import backgroundImage7 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage8 from '../../assets/backgrounds/8_Super-Sete.svg';

const data = [
  {
    name: 'game 1',
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [13, 17, 21, 22, 37, 42, 23, 32, 43, 54, 12, 34, 56, 43, 23],
    winingColor: '#068e5a',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: backgroundImage1,
  },
  {
    name: 'game 2',
    logo: EuroMillions,
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 16, 27, 33, 44, 23],
    winingColor: '#2a2a85',
    secondLogo: EuroMillionsWhite,
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: backgroundImage2,
  },
  {
    name: 'game 3',
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 9],
    winingColor: '#781ea5',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage:
      'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,
  },
  {
    name: 'game 4',
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 3, 9],
    winingColor: '#e3262d',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: backgroundImage4,
    columnNumber: 5,
  },
  {
    name: 'game 5',
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [
      12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64,
      3,
    ],
    winingColor: '#f6a500',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: backgroundImage5,
  },
  {
    name: 'game 6',
    logo: lottoLogoRed,
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    specialNumbers: [12, 34],
    winingColor: '#128631',
    secondLogo: lottoLogoWhite,
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: backgroundImage6,
  },
  {
    name: 'game 7',
    logo: EuroMillions,
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    winingNumbers2: [64, 3, 12, 34, 54, 64],
    winingColor: '#0094b3',
    secondLogo: EuroMillionsWhite,
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: backgroundImage7,
  },
  {
    name: 'game 8',
    logo: EuroMillions,
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 16, 27, 33, 44, 23, 45],
    winingColor: '#82c342',
    secondLogo: EuroMillionsWhite,
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: backgroundImage8,
    columnNumber: '7',
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
                winingNumbers2={val.winingNumbers2}
                winingColor={val.winingColor}
                secondLogo={val.secondLogo}
                nextDraw={val.nextDraw}
                drawAmount={val.drawAmount}
                playFor={val.playFor}
                backgroundImage={val.backgroundImage}
                gradient={val.gradient}
                specialNumbers={val.specialNumbers}
                columnNumber={val.columnNumber}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
