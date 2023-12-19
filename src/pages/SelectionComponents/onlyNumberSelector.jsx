import { useState } from 'react';
import { Modal } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { pushNumbersToWiningNumbers } from '../../Store';
const OnlyNumberSelector = ({
  numberOfWiningNumber = 50,
  index,
  mainColor = 'sky',
  numbersToBeSelected = 5,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const winingNumbers = useSelector(
    (state) => state.productsSlice.winingNumber
  );
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const handleSubmit = () => {
    handleCancel();
    dispatch(pushNumbersToWiningNumbers(selectedNumbers));

    setSelectedNumbers([]);
  };
  const handleCheckboxChange = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length < numbersToBeSelected) {
      setSelectedNumbers([...selectedNumbers, number].sort((a, b) => a - b));
    }
  };
  const isNumbersAlreadySelected = () => {
    const sortedSelectedNumbers = selectedNumbers.slice().sort((a, b) => a - b);

    return winingNumbers.some((numbersArray) =>
      numbersArray.every((num, index) => num === sortedSelectedNumbers[index])
    );
  };

  const renderNumbers = () => {
    const elements = [];
    for (let i = 1; i <= numberOfWiningNumber; i++) {
      const isDisabled =
        selectedNumbers.length >= numbersToBeSelected &&
        !selectedNumbers.includes(i);
      elements.push(
        <div
          className={` border flex items-center justify-center cursor-pointer rounded-full  sm:w-9 md:w-[49px] sm:h-9 md:h-[49px] border-1 bg-white text-base font-bold ${
            selectedNumbers.includes(i)
              ? `!bg-${mainColor}-500 text-white border-${mainColor}-500`
              : ' text-[#2f4751] border-gray-500'
          } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          key={i}
          onClick={() => !isDisabled && handleCheckboxChange(i)}
        >
          <div aria-hidden="true">{i}</div>
          <input
            type="checkbox"
            className="opacity-0 absolute"
            name="balls"
            aria-label={i}
            value={i}
            disabled={isDisabled}
          />
        </div>
      );
    }
    return elements;
  };
  const renderSelectedNumbers = () => {
    const elements = [];
    for (let i = 0; i <= numbersToBeSelected - 1; i++) {
      elements.push(
        <div className="" key={i}>
          {selectedNumbers[i] ? (
            <div
              className={`self-auto bg-${mainColor}-500 border-${mainColor}-500 flex font-bold rounded-full justify-center items-end relative w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl text-white bg-game-lotto popAnimation`}
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full text-x-sm">
                {selectedNumbers[i]}
              </span>
              <span aria-hidden="true">{selectedNumbers[i]}</span>
            </div>
          ) : (
            <div
              className={`rounded-full flex font-bold justify-center items-center relative bg-${mainColor}-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl`}
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          )}
        </div>
      );
    }
    return elements;
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    // setLoading(true);
    setTimeout(() => {
      // setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="shadow_md relative text-center rounded-full p-2 border border-gray-300 hover:shadow-hover cursor-pointer bg-white w-min"
        onClick={showModal}
      >
        <div className="inline-flex justify-center z-2 mx-1 space-x-1">
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div className="absolute inline z-1 w-auto mx-auto sm:top-1/5 md:top-1/4 left-0 right-0 text-center">
            <p aria-label="Enter Numbers" className="font-bold text-lg">
              <span className="inline-flex relative">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7625 5.26325C13.7218 5.26325 14.4991 6.04055 14.4991 6.99984C14.4991 7.46593 14.313 7.90555 13.9902 8.22831C13.6676 8.55093 13.2279 8.73678 12.7622 8.73678L9.23582 8.73703L9.23582 12.2631C9.23582 12.7292 9.04976 13.1688 8.727 13.4915C8.40439 13.8142 7.96466 14 7.49888 14C6.53959 14 5.7623 13.2227 5.7623 12.2634L5.7623 8.73678H2.23565C1.27635 8.73678 0.49906 7.95949 0.49906 7.00019C0.49906 6.0409 1.27671 5.26325 2.236 5.26325L5.76204 5.26325L5.7623 1.73696C5.7623 0.777663 6.53994 1.80256e-05 7.49924 1.86999e-05C8.45853 1.85313e-05 9.23582 0.777313 9.23582 1.73661L9.23582 5.26325L12.7625 5.26325Z"
                    fill="#2D4550"
                  ></path>
                </svg>
              </span>
              <span> Enter Numbers</span>
            </p>
          </div>
        </div>
      </button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={756}
      >
        <div className="flex flex-col justify-between sm:h-[100vh] md:h-full">
          <div>
            {/* ::::::::::::::::: display selected Numbers start  :::::::::::::::::::::*/}
            <div
              className={`flex justify-center flex-col items-center bg-${mainColor}-200 h-[126x] p-5 sm:rounded-none md:rounded-tr-lg md:rounded-tl-lg`}
            >
              <div className=" uppercase font-bold text-gray-700 flex justify-center py-3">
                Game line 1
              </div>
              <div className=" flex space-x-1">{renderSelectedNumbers()}</div>
            </div>
            {/* :::::::::::::::: display selected Numbers end  :::::::::::::::::::::*/}
            {isNumbersAlreadySelected() ? (
              <div className="bg-[#fcf3f3] text-red-500 flex flex-row items-center bg-message-error-light py-2 px-6 text-sm text-message-error">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8ZM11.0227 11.0224C11.4369 10.6081 11.4369 9.93687 11.0227 9.52265L9.49987 7.99985L11.0227 6.47705C11.4369 6.06283 11.4369 5.39156 11.0227 4.97733C10.6084 4.56311 9.93687 4.56311 9.52265 4.97733L7.99989 6.49987L6.47735 4.97733C6.06313 4.56311 5.39156 4.56311 4.97733 4.97733C4.56311 5.39156 4.56311 6.06283 4.97733 6.47705L6.50013 7.99985L4.97733 9.52265C4.56311 9.93687 4.56311 10.6081 4.97733 11.0224C5.17845 11.2235 5.44858 11.3331 5.72719 11.3331C6.00593 11.3331 6.2761 11.2236 6.47735 11.0224L7.99989 9.49982L9.52269 11.0224C9.72377 11.2235 9.9939 11.3331 10.2725 11.3331C10.5512 11.3331 10.8214 11.2236 11.0227 11.0224Z"
                    fill="#DD1D1D"
                  ></path>
                </svg>
                <div className="pl-2">
                  <span>
                    This line already appears in your playslip.
                    <br />
                    Please choose different numbers.
                  </span>
                </div>
              </div>
            ) : null}
            <div className="bg-white px-2 mt-2">
              <div className="border-gray-300 border-b-1 py-1 flex justify-between">
                <span className="p-1 text-base text-left flex gap-x-3">
                  <h6 className="font-bold">
                    Pick {numbersToBeSelected} numbers
                  </h6>
                </span>
                <p className="py-1">
                  <span>
                    <b>{selectedNumbers.length}</b> of {numbersToBeSelected}
                  </span>
                </p>
              </div>
            </div>
            <hr className="mb-[9px]" />
            {/* ::::::::::::::::: render Number Start :::::::::::::::::: */}
            <div className="ml-3 flex flex-wrap gap-2">{renderNumbers()}</div>
            {/* ::::::::::::::::: render Number End :::::::::::::::::: */}
          </div>
          <div className="flex flex-col sm:mb-[20px] md:mb-[0]">
            <hr className="sm:my-[10px] md:my-[20px] " />
            <div className="flex">
              {selectedNumbers.length > 0 ? (
                <button
                  role="button"
                  data-elem-reset-num-button="true"
                  onClick={() => setSelectedNumbers([])}
                  className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2  p-4 text-gray-700 bg-white border-gray-400"
                  data-selected="false"
                  key="back"
                >
                  <span>Reset</span>
                </button>
              ) : (
                <button
                  role="button"
                  data-elem-reset-num-button="true"
                  disabled
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                  data-selected="false"
                  key="back"
                >
                  <span>Reset</span>
                </button>
              )}
              {selectedNumbers.length === numbersToBeSelected &&
              isNumbersAlreadySelected() === false ? (
                <button
                  data-elem-add-num-button="true"
                  className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2 shadow-button hover:shadow-button-hov p-4 text-gray-700 bg-[#c4dc33] border-green-400 active:bg-green-400"
                  data-selected="false"
                  onClick={() => handleSubmit()}
                >
                  <span>Add numbers</span>
                </button>
              ) : (
                <button
                  data-elem-add-num-button="true"
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                  data-selected="false"
                  key="submit"
                >
                  <span>Add numbers</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default OnlyNumberSelector;