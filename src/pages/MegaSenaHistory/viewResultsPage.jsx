// import RangeSelectorModal from '../../components/dataRangeSelector/rangeSelectorModal';
import ResultsHistory from '../../components/resultHistory';
// import backgroundImage_1 from '../../assets/backgrounds/1_Mega-da-virada.svg';
// import CustomDatepicker from '../../components/DatePicker/1';
import backgroundImage_4 from '../../assets/backgrounds/6_Mega-Sena.svg';
import RangeSelectorModal from '../../components/dataRangeSelector/rangeSelectorModal';
import NewModalDateRangePicker from '../../components/dataRangeSelector/newModal';
const tableData = [
  {
    match: 'Jackpot',
    winners: '0',
    prize: '7,564,749',
  },
  {
    match: 'Match 5 + Bonus',
    winners: '0',
    prize: '40,178',
  },
  {
    match: 'Match 5',
    winners: '16',
    prize: '1,506',
  },
  {
    match: 'Match 5 + Bonus',
    winners: '0',
    prize: '40,178',
  },
];
const ViewResultsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <NewModalDateRangePicker />
      {/* <RangeSelectorModal />  */}
      {/* <CustomDatepicker /> */}
      <div className="flex justify-end sm:w-full lg:w-[880px] pt-[2rem]">
        <h2
          aria-label="rtl Last draw, Thursday, December 7th, 2023"
          className="font-black text-2xl color-[#2c444e]"
        >
          Thu 07/12/23
        </h2>
      </div>
      <ResultsHistory
        name="megasena"
        JackportAmount="6,431,246"
        date="یکشنبه ۱۴ آبان ماه"
        winingNumbers={[12, 16, 27, 33, 44, 23]}
        winingColor="#128631"
        secondLogo="04"
        nextDraw="دوشنبه ساعت ۱۹:۰۰"
        drawAmount="۱۷"
        amountMultiplier="میلیارد"
        playFor="4"
        backgroundImage={backgroundImage_4}
        data={tableData}
      />
      <button
        id="signInButton"
        type="submit"
        className="flex items-center my-[2rem] justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
        style={{ width: '270px' }}
      >
        <span>Load more</span>
      </button>
    </div>
  );
};

export default ViewResultsPage;
