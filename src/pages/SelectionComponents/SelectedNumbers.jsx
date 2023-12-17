import { useState } from 'react';

const SelectedNumbers = ({
  numbers = 50,
  setFinalSelectedNumbers,
  handleCancel,
}) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const handleSubmit = () => {
    handleCancel();
    setTimeout(() => {
      setFinalSelectedNumbers(selectedNumbers);
    }, 300);
  };
  const handleCheckboxChange = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number].sort((a, b) => a - b));
    }
  };

  const renderNumbers = () => {
    const elements = [];
    for (let i = 1; i <= numbers; i++) {
      const isDisabled =
        selectedNumbers.length >= 6 && !selectedNumbers.includes(i);
      elements.push(
        <div
          className={` border flex items-center justify-center cursor-pointer rounded-full  sm:w-11 w-[49px] sm:h-11 h-[49px] border-1 bg-white text-base font-bold ${
            selectedNumbers.includes(i)
              ? '!bg-red-500 text-white border-red-500'
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
    for (let i = 0; i <= 5; i++) {
      elements.push(
        <div className="" key={i}>
          {selectedNumbers[i] ? (
            <div
              className="self-auto bg-red-500 border-red-500 flex font-bold rounded-full justify-center items-center relative w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl text-white bg-game-lotto popAnimation"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full text-x-sm">
                {selectedNumbers[i]}
              </span>
              <span aria-hidden="true">{selectedNumbers[i]}</span>
            </div>
          ) : (
            <div className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl">
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          )}
        </div>
      );
    }
    return elements;
  };
  return (
    <div className="">
      {/* ::::::::::::::::: display selected Numbers start  :::::::::::::::::::::*/}
      <div className="flex justify-center flex-col items-center bg-red-200 h-[126x] p-5 rounded-tr-lg rounded-tl-lg">
        <div className=" uppercase font-bold text-gray-700 flex justify-center py-3">
          Game line 1
        </div>
        <div className=" flex space-x-1">{renderSelectedNumbers()}</div>
      </div>
      {/* ::::::::::::::::: display selected Numbers end  :::::::::::::::::::::*/}
      <div className="bg-white px-2 mt-2">
        <div className="border-gray-300 border-b-1 py-1 mb-2 flex justify-between">
          <span className="p-1 text-base text-left flex gap-x-3">
            <h6 className="font-bold">Pick 6 numbers</h6>
          </span>
          <p className="py-1">
            <span>
              <b>{selectedNumbers.length}</b> of 6
            </span>
          </p>
        </div>
      </div>
      <hr className="mb-[9px]" />
      {/* ::::::::::::::::: render Number Start :::::::::::::::::: */}
      <div className="ml-3 flex flex-wrap gap-2">{renderNumbers()}</div>
      {/* ::::::::::::::::: render Number End :::::::::::::::::: */}
      <hr className="my-[20px] " />
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
        {selectedNumbers.length === 6 ? (
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
  );
};

export default SelectedNumbers;
