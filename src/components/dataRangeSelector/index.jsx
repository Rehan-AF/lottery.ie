import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import './styles.css';
const DateRangeSelector = ({ setDate }) => {
  const today = new Date();
  const [state, setState] = useState([
    {
      startDate: today,
      endDate: today,
      key: 'selection',
    },
  ]);
  const handleChange = (item) => {
    setState([item.selection]);

    setDate([item.selection]);
  };
  console.log(state);
  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => handleChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={state}
        maxDate={today}
        rangeColors={['#c4dc33']}
        color="#fff"
      />
    </div>
  );
};

export default DateRangeSelector;
