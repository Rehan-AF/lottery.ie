// import RangeSelectorModal from '../../components/dataRangeSelector/rangeSelectorModal';
import NewModalDateRangePicker from '../../components/dataRangeSelector/newModal';
import RangeSelectorModal from '../../components/dataRangeSelector/rangeSelectorModal';
import ResultsHistory from '../../components/resultHistory';
// import CustomDatepicker from '../../components/DatePicker/1';
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
      {/* <RangeSelectorModal /> */}
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
        name="dupla-sena"
        JackportAmount="83,068,817"
        date="یکشنبه ۱۴ آبان ماه"
        winingNumbers={[12, 34, 54, 64, 3, 12]}
        secondLogo="06"
        nextDraw="دوشنبه ساعت ۱۹:۰۰"
        drawAmount="۵۸۹"
        amountMultiplier="میلیارد"
        playFor="2.50"
        winingColor="#e3262d"
        data={tableData}
      />
      <ResultsHistory
        name="dupla-sena"
        JackportAmount="83,068,817"
        date="یکشنبه ۱۴ آبان ماه"
        winingNumbers={[64, 3, 12, 34, 54, 64]}
        secondLogo="06"
        nextDraw="دوشنبه ساعت ۱۹:۰۰"
        drawAmount="۵۸۹"
        amountMultiplier="میلیارد"
        playFor="2.50"
        winingColor="#e3262d"
        data={tableData}
        winingType="اعداد برنده شده سری دوم"
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
