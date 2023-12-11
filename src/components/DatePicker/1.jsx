import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import jalali from 'react-tailwindcss-datepicker/plugin/jalali';
import '../../App.css';

const CustomDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    const currentDate = new Date();
    const lastYear = new Date();
    lastYear.setFullYear(currentDate.getFullYear() - 1);

    const filteredDate =
      newDate && newDate >= lastYear && newDate <= currentDate ? newDate : null;

    setSelectedDate(filteredDate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded shadow p-4">
        <h1 className="text-2xl font-bold mb-4">Jalali Calendar Datepicker</h1>
        <Datepicker
          value={selectedDate}
          onChange={handleDateChange}
          showShortcuts={true}
          plugins={[jalali]}
          format="jYYYY/jMM/jDD"
          locale="fa"
        />
        {selectedDate && (
          <p className="mt-2">
            Selected Date: {selectedDate.toLocaleDateString('fa-IR')}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomDatepicker;
