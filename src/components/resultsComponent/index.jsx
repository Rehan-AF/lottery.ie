import backgroundImage_1 from '../../assets/backgrounds/1_Mega-da-virada.svg';
import backgroundImage_3 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage_4 from '../../assets/backgrounds/6_Mega-Sena.svg';
import backgroundImage_5 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage_6 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage_7 from '../../assets/backgrounds/5_Lotomania.svg';
import backgroundImage_8 from '../../assets/backgrounds/8_Super-Sete.svg';
import ResultsCard from './resultsCard';

const data = [
  {
    name: 'game 1',
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 9],
    secondLogo: '01',
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    winingColor: '#068e5a',
    backgroundImage: backgroundImage_1,
  },
  {
    name: 'game 2',
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [13, 17, 21, 22, 37, 42, 23, 32, 43, 54, 12, 34, 56, 43, 23],
    secondLogo: '02',
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    winingColor: '#781ea5',
    backgroundImage:
      'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,
  },
  {
    name: 'game 3',
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 34, 54, 3, 9],
    secondLogo: '03',
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    winingColor: '#0094b3',
    backgroundImage: backgroundImage_3,
    columnNumber: 5,
  },
  {
    name: 'game 4',
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [12, 16, 27, 33, 44, 23],
    winingColor: '#128631',
    secondLogo: '04',
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    backgroundImage: backgroundImage_4,
  },
  {
    name: 'game 5',
    JackportAmount: '6,431,246',
    date: 'Sun 26/11/23',
    winingNumbers: [
      12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64,
      3,
    ],
    secondLogo: '07',
    nextDraw: 'Tomorrow, 12:45am',
    drawAmount: '6.8 Million',
    playFor: '4',
    winingColor: '#f6a500',
    backgroundImage: backgroundImage_7,
  },
  {
    name: 'game 6',
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    winingNumbers2: [64, 3, 12, 34, 54, 64],
    secondLogo: '06',
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    winingColor: '#e3262d',
    backgroundImage: backgroundImage_6,
  },
  {
    name: 'game 7',
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    specialNumbers: [12, 34],
    secondLogo: '05',
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    winingColor: '#2a2a85',
    backgroundImage: backgroundImage_5,
  },
  {
    name: 'game 8',
    JackportAmount: '83,068,817',
    date: 'Wed 29/11/23',
    winingNumbers: [12, 16, 27, 33, 44, 23, 45],
    winingColor: '#82c342',
    secondLogo: '08',
    nextDraw: 'Saturday, 12:30am',
    drawAmount: '200 Million',
    playFor: '2.50',
    backgroundImage: backgroundImage_8,
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
                customClass={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
