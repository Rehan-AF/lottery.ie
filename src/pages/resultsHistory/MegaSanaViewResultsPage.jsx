import RangeSelectorModal from '../../components/dataRangeSelector/rangeSelectorModal';
import ResultsHistory from '../../components/resultHistory';
import backgroundImage_1 from '../../assets/backgrounds/1_Mega-da-virada.svg';

const MegaSanaViewResultsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <RangeSelectorModal />
      <div className="flex justify-end w-[1146.7px] pt-[2rem]">
        <h2
          aria-label="rtl Last draw, Thursday, December 7th, 2023"
          className="font-black text-2xl color-[#2c444e]"
        >
          Thu 07/12/23
        </h2>
      </div>
      <ResultsHistory
        name="game 1"
        JackportAmount="6,431,246"
        date="Sun 26/11/23"
        winingNumbers={[12, 34, 54, 64, 3, 9]}
        secondLogo="01"
        nextDraw="Tomorrow, 12:45am"
        drawAmount="6.8 Million"
        playFor="4"
        winingColor="#068e5a"
        backgroundImage={backgroundImage_1}
      />
    </div>
  );
};

export default MegaSanaViewResultsPage;
