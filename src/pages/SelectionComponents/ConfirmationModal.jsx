import { useEffect, useState } from 'react';
import '../../components/dataRangeSelector/Modal.css';
const ConfirmationModal = ({ opneValue = false, setUnlock }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (opneValue) {
      setOpen(true);
    }
  }, [opneValue]);

  const handleOk = () => {
    setUnlock(true);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
    setUnlock(false);
  };
  return (
    <>
      {open && (
        <div className="modal-container" onClick={handleCancel}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 pb-2">
              <div className="p-4 rtl flex flex-col justify-center items-center">
                <div className="flex gap-2 font-bold items-center mb-[1rem]">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="exclamation-circle"
                    width="1.5em"
                    height="1.5em"
                    fill="orange"
                    aria-hidden="true"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                  </svg>
                  <p className="text-[20px]">تأیید</p>
                </div>
                <p>بلیط با این اعداد قبلا انتخاب شده است</p>
                <p>آیا از انتخاب دو بلیط با اعداد یکسان مطمعن هستید؟</p>
              </div>
              <div className="justify-between md:justify-end flex flex-row w-full md:w-auto">
                <button
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 mr-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                  data-selected="false"
                  onClick={handleCancel}
                >
                  <span className="text-gray-700">انصراف</span>
                </button>
                <button
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 shadow-button hover:shadow-button-hov p-4 text-gray-700 bg-[#c4dc33] active:bg-[#b1cc10] border-[#b1cc10] "
                  data-selected="false"
                  onClick={handleOk}
                >
                  <span>تأیید</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ConfirmationModal;
