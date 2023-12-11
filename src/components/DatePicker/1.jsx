import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import jalali from 'react-tailwindcss-datepicker/plugin/jalali';

const CustomDatepicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
      plugins={[jalali]}
      format="jYYYY/jMM/jDD"
      locale="fa"
    />
  );
};

export default CustomDatepicker;
