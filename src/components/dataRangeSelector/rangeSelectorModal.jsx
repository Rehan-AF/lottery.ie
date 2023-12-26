import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import DateRangeSelector from './index';
import './styles.css';
import NewDatePicker from '../newDatePicker/NewDatePicker';
import NewModal from './newModal';
const RangeSelectorModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDateValue] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // console.log(val[0].day, val[0].month.name, val[0].year, 'vvalues');
    // console.log(val[1].day, val[1].month.name, val[1].year, 'vvalues');

    setShowDate([
      {
        day: date[0].day,
        month: date[0].month.name,
        year: date[0].year,
      },
      {
        day: date[1].day,
        month: date[1].month.name,
        year: date[1].year,
      },
    ]);

    setOpen(false);
    // console.log(showDate, 'showdate');
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="bg-white shadow-md  p-[9px] rounded-md max-w-[880px] w-full rtl flex justify-between"
        onClick={showModal}
      >
        <p className="text-[#2c445e] text-[1rem] font-bold">
          {showDate ? (
            <div className="flex gap-2">
              <div>
                {showDate[0].day}/{showDate[0].month}/{showDate[0].year}
              </div>
              -
              <div>
                {showDate[1].day}/{showDate[1].month}/{showDate[1].year}`
              </div>
            </div>
          ) : (
            'Filter By Date'
          )}
        </p>
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        closeIcon={false}
      >
        <div className="">
          <NewDatePicker setDateValue={setDateValue} />
        </div>
        <div className="flex justify-around">
          <button
            className="w-[144px] h-[54px] flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov p-4 text-[#1f2937] bg-white active:bg-blue-lighter-04"
            key="back"
            onClick={handleCancel}
          >
            Cancle
          </button>
          <button
            key="submit"
            type="primary"
            loading={loading}
            disabled={date === false ? true : false}
            onClick={handleOk}
            className="w-[144px] h-[54px] flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov p-4 text-[#1f2937] bg-[#c4dc33] active:bg-[#b1cc10] active:bg-blue-lighter-04"
          >
            Ok
          </button>
        </div>
      </Modal>
    </>
  );
};

export default RangeSelectorModal;
