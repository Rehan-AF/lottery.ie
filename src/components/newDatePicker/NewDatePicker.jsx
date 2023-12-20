import { useState, useEffect } from 'react';
// import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';
// import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import 'react-multi-date-picker/styles/colors/purple.css';
import InputIcon from 'react-multi-date-picker/components/input_icon';
// import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
// import Toolbar from 'react-multi-date-picker/plugins/toolbar';
import { Calendar } from 'react-multi-date-picker';
import moment from 'jalali-moment';
import './stylesIndex.css';
const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
// const convertToShamsi = (date) => {
//   const moment = require('jalali-moment');
//   return moment(date).locale('fa').format('jYYYY/jMM/jDD');
// };

const convertToShamsi = (date) => {
  return moment(date).locale('fa').format('jYYYY/jMM/jDD');
};
const NewDatePicker = ({ setDateValue }) => {
  const [numberOfMonths, setNumberOfMonths] = useState(
    getInitialNumberOfMonths()
  );

  const handleYesterdayClick = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    setValue(yesterday);
    setDateValue(yesterday);
  };

  const handleLast7DaysClick = () => {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - 6);

    const formattedStartDate = convertToShamsi(startDate);
    const formattedEndDate = convertToShamsi(today);

    setValue([startDate, today]);
    setDateValue([startDate, today]);
    console.log(
      `Start Date: ${formattedStartDate}, End Date: ${formattedEndDate}`
    );
  };

  const handleLast30DaysClick = () => {
    const last30Days = Array.from({ length: 30 }, (_, index) => {
      const day = new Date();
      day.setDate(day.getDate() - index);
      return day;
    });
    setValue(last30Days);
    setDateValue(last30Days);
  };

  useEffect(() => {
    // Update numberOfMonths when the window is resized
    const handleResize = () => {
      setNumberOfMonths(getInitialNumberOfMonths());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getInitialNumberOfMonths() {
    // Set the initial numberOfMonths based on the screen width
    return window.innerWidth < 600 ? 1 : 2;
  }

  const customInputIconStyles = {
    padding: '20px 40px',
    color: 'black',
    fontSize: '14px',
  };
  // const [dates, setDates, allDates, setAllDates] = useState([]);

  const arrows = {};
  const [value, setValue] = useState();
  // const handleChange = (val) => {
  //   setDateValue(val);
  // };
  return (
    <div
      style={{
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 'bolder',
      }}
    >
      <Calendar
        value={value}
        onChange={setDateValue}
        // renderButton={(direction, handleClick) => (
        //   <button onClick={handleClick}>
        //     {direction === "right" ? ">" : "<"}
        //   </button>
        // )}

        render={<InputIcon style={customInputIconStyles} />}
        numberOfMonths={numberOfMonths}
        weekDays={weekDays}
        highlightToday={false}
        style={{
          arrows,
        }}
        placeholder="انتخاب کنید"
        plugins={
          [
            // <Toolbar   position="bottom"  />,
            // <DatePanel header=" "   sort="date" removeButton={false} position="left" />,
          ]
        }
        range
        monthYearSeparator=" "
        rangeHover
        showOtherDays
        calendar={persian}
        locale={persian_fa}
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        calendarPosition="bottom-center"
      >
        <div className="pb-4 flex flex-col md:flex-row justify-center gap-2">
          <div className="flex gap-2 justify-center">
            <button
              className="shadow-lg bg-[#c5dc32] text-xs	  p-2 "
              style={{ color: 'white', borderRadius: '10px' }}
              onClick={() => setValue(undefined)}
            >
              لغو انتخاب
            </button>
            <button
              className="shadow-lg bg-[#c5dc32]  text-xs	  px-4  py-2"
              style={{ color: 'white', borderRadius: '10px' }}
              onClick={() => setValue(new Date())}
            >
              امروز
            </button>
            <button
              className="shadow-lg bg-[#c5dc32]  text-xs	 px-4  py-2"
              style={{ color: 'white', borderRadius: '10px' }}
              onClick={handleYesterdayClick}
            >
              دیروز
            </button>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              className="shadow-lg bg-[#c5dc32] text-xs	  p-2  "
              style={{ color: 'white', borderRadius: '10px' }}
              onClick={handleLast7DaysClick}
              dir="rtl"
            >
              7 روز پیش
            </button>
            <button
              className="shadow-lg bg-[#c5dc32] text-xs	  p-2  "
              style={{ color: 'white', borderRadius: '10px' }}
              onClick={handleLast30DaysClick}
              dir="rtl"
            >
              30 روز پیش{' '}
            </button>
          </div>
        </div>
        {/* <button style={{ margin: "5px" }} onClick={handleLastMonthClick}>

ماه پیش      </button> */}

        {/* <div>
<input
class=""
style={{border:"1px solid", borderRadius:"10px",padding:"4px"}}
      value={value}
      readOnly
    /></div> */}
      </Calendar>
    </div>
  );
};

export default NewDatePicker;
