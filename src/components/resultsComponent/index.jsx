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
    name: 'mega-da-virada',
    JackportAmount: '120,940,000,000',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [12, 34, 54, 64, 3, 9],
    secondLogo: '01',
    nextDraw: 'فردا ساعت ۱۸:۰۰ ',
    drawAmount: '۱۲۰',
    amountMultiplier: 'میلیارد',
    playFor: '۷۰',
    winingColor: '#068e5a',
    backgroundImage: backgroundImage_1,
    link: 'megaSanaVirda',
  },
  {
    name: 'lotofacil',
    JackportAmount: '6,431,246',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [13, 17, 21, 22, 37, 42, 23, 32, 43, 54, 12, 34, 56, 43, 23],
    secondLogo: '02',
    nextDraw: 'شنبه ساعت ۱۸:۰۰',
    drawAmount: '۸۷',
    amountMultiplier: 'میلیارد',
    playFor: '4',
    winingColor: '#781ea5',
    columnNumber: 8,
    backgroundImage:
      'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,
    link: 'lotofacil',
  },
  {
    name: 'quina',
    JackportAmount: '6,431,246',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [12, 34, 54, 3, 9],
    secondLogo: '03',
    nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
    drawAmount: '۹',
    amountMultiplier: 'میلیارد',
    playFor: '4',
    winingColor: '#0094b3',
    backgroundImage: backgroundImage_3,
    columnNumber: 5,
    link: 'quina',
  },
  {
    name: 'megasena',
    JackportAmount: '6,431,246',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [12, 16, 27, 33, 44, 23],
    winingColor: '#128631',
    secondLogo: '04',
    nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
    drawAmount: '۱۷',
    amountMultiplier: 'میلیارد',
    playFor: '4',
    backgroundImage: backgroundImage_4,
    link: 'mega-sana',
  },
  {
    name: 'lotomania',
    JackportAmount: '6,431,246',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [
      12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64, 3, 12, 34, 54, 64,
      3,
    ],
    secondLogo: '07',
    nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
    drawAmount: '۴۹',
    amountMultiplier: 'میلیارد',
    playFor: '4',
    winingColor: '#f6a500',
    columnNumber: 10,
    backgroundImage: backgroundImage_7,
    link: 'loto-mania',
  },
  {
    name: 'dupla-sena',
    JackportAmount: '83,068,817',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    winingNumbers2: [64, 3, 12, 34, 54, 64],
    secondLogo: '06',
    nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
    drawAmount: '۵۸۹',
    amountMultiplier: 'میلیارد',
    playFor: '2.50',
    winingColor: '#e3262d',
    backgroundImage: backgroundImage_6,
    link: 'dupla-sena',
  },
  {
    name: 'milionaria',
    JackportAmount: '83,068,817',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [12, 34, 54, 64, 3, 12],
    specialNumbers: [12, 34],
    secondLogo: '05',
    nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
    drawAmount: '۱۰۷۸',
    amountMultiplier: 'میلیارد',
    playFor: '2.50',
    winingColor: '#2a2a85',
    backgroundImage: backgroundImage_5,
    link: 'millionaria',
  },
  {
    name: 'seper-sete',
    JackportAmount: '83,068,817',
    date: 'یکشنبه ۱۴ آبان ماه',
    winingNumbers: [12, 16, 27, 33, 44, 23, 45],
    winingColor: '#82c342',
    secondLogo: '08',
    nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
    drawAmount: '۱۲۸',
    amountMultiplier: 'میلیارد',
    playFor: '2.50',
    backgroundImage: backgroundImage_8,
    columnNumber: '7',
    link: 'super-sete',
  },
];
const Results = () => {
  return (
    <div>
      <div className="justify-start">
        <h1 className="capitalize text-[#2c444e] mt-2 mb-8 font-black text-3xl md:text-5xl-xtra text-end">
          آخرین نتایج
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
                amountMultiplier={val.amountMultiplier}
                playFor={val.playFor}
                backgroundImage={val.backgroundImage}
                gradient={val.gradient}
                specialNumbers={val.specialNumbers}
                columnNumber={val.columnNumber}
                customClass={index}
                link={val.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
