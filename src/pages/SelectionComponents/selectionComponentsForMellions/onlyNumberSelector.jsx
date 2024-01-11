import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { pushNumbersToWiningNumbers } from '../../../Store';
import ConfirmationModal from '../ConfirmationModal';
import {
  milliSpecialPush,
  milliSpecialupdate,
  milliSpecialDelete,
  milliSpecialreset,
} from '../../../Store/index';
const OnlyNumberSelectorMilli = ({
  numberOfWiningNumber,
  index,
  mainColor,
  backgroundColor,
  buttonNotSelectedColor,
  numbersToBeSelected,
  numberOfColumns,
  dispatchFunction,
  winingNumbers,
  specialNum,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [unlock, setUnlock] = useState(false);
  const [selectedSpeicalNumbers, setSelectedSpeicalNumbers] = useState([]);

  const dispatch = useDispatch();
  const milliSpecialNumber = useSelector(
    (state) => state.productsSlice.milliSpecialNumber
  );
  const handleSubmit = () => {
    handleCancel();
    dispatch(dispatchFunction(selectedNumbers));
    dispatch(milliSpecialPush(selectedSpeicalNumbers));
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
    const sortedSpecialNumbers = selectedSpeicalNumbers
      .slice()
      .sort((a, b) => a - b);

    const mainNumber = winingNumbers.some((numbersArray) =>
      numbersArray.every((num, index) => num === sortedSelectedNumbers[index])
    );
    const mainSpecial = milliSpecialNumber.some((numbersArray) =>
      numbersArray.every((num, index) => num === sortedSpecialNumbers[index])
    );
    return mainNumber && mainSpecial;
  };
  const renderSkeletonForNumbers = () => {
    const elements = [];
    for (let i = 0; i < numbersToBeSelected; i++) {
      elements.push(
        <div
          className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 sm:w-8 md:w-[45px] sm:h-8 md:h-[45px] text-base md:text-2xl !m-0"
          aria-hidden="true"
        >
          <span className="absolute opacity-0 w-full h-full"></span>
          <span aria-hidden="true"></span>
        </div>
      );
    }
    return elements;
  };
  const renderNumbers = () => {
    const elements = [];
    for (let i = 1; i <= numberOfWiningNumber; i++) {
      const isDisabled =
        selectedNumbers.length >= numbersToBeSelected &&
        !selectedNumbers.includes(i);
      elements.push(
        <div
          className={`border flex items-center justify-center cursor-pointer rounded-full  sm:w-9 md:w-[49px] sm:h-9 md:h-[49px] border-1 bg-white text-base font-bold ${
            selectedNumbers.includes(i)
              ? `!bg-[${mainColor}] text-white border-[${mainColor}]`
              : ' text-[#2f4751] border-gray-500'
          } ${isDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
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
        <div className="!m-0" key={i}>
          {selectedNumbers[i] ? (
            <div
              className={`self-auto bg-[${mainColor}] border-[${mainColor}] flex font-bold rounded-full justify-center items-center relative sm:w-8 md:w-[45px] sm:h-8 md:h-[45px] text-base md:text-2xl text-white bg-game-lotto popAnimation`}
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full text-x-sm">
                {selectedNumbers[i]}
              </span>
              <span aria-hidden="true">{selectedNumbers[i]}</span>
            </div>
          ) : (
            <div
              className={`rounded-full flex font-bold justify-center items-center relative bg-[${buttonNotSelectedColor}] opacity-30 sm:w-8 md:w-[45px] sm:h-8 md:h-[45px] text-base md:text-2xl`}
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
  const renderSpecialNumbers = () => {
    const elements = [];
    for (let i = 0; i <= 1; i++) {
      elements.push(
        <div className="!m-0" key={i}>
          <div
            className={selectedSpeicalNumbers[i] ? `popAnimation` : ''}
            style={{ position: 'relative' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 511.999 511.999"
              className="sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]"
              style={
                selectedSpeicalNumbers[i]
                  ? { fill: '#E0AA3E' }
                  : { fill: '#929bdc' }
              }
            >
              <path d="M420.364,255.999L420.364,255.999l-185.261-20.898L256,420.364  c9.672,24.942,23.54,48.725,43.281,68.465c30.894,30.894,80.984,30.894,111.878,0c15.089-15.089,22.788-34.758,23.137-54.532  c19.775-0.35,39.443-8.048,54.532-23.137c30.895-30.894,30.895-80.984,0-111.878C469.088,279.54,445.305,265.671,420.364,255.999z"></path>
              <path d="M420.364,255.999c24.942-9.672,48.725-23.54,68.465-43.281c30.895-30.895,30.895-80.984,0-111.878  c-15.089-15.089-34.757-22.788-54.532-23.137c-0.35-19.775-8.048-39.443-23.137-54.532c-30.894-30.894-80.984-30.894-111.878,0  c-19.74,19.74-33.609,43.523-43.281,68.465l0,0l-20.898,164.363H420.364z"></path>
              <path d="M91.637,255.999c-24.942,9.672-48.725,23.54-68.466,43.281c-30.894,30.895-30.894,80.984,0,111.878  c15.089,15.089,34.757,22.788,54.532,23.137c0.35,19.775,8.048,39.443,23.137,54.532c30.895,30.895,80.984,30.895,111.878,0  c19.741-19.741,33.609-43.524,43.281-68.465l0,0V235.101L91.637,255.999z"></path>
              <path d="M256,91.636c-9.672-24.942-23.54-48.725-43.281-68.465c-30.895-30.894-80.984-30.894-111.878,0  C85.752,38.259,78.053,57.928,77.703,77.702c-19.775,0.35-39.443,8.048-54.532,23.137c-30.894,30.894-30.894,80.984,0,111.878  c19.741,19.741,43.524,33.61,68.466,43.282H256V91.636z"></path>
              <polygon points="381.705,152.46 359.539,130.295 256,233.834 245.551,255.999 256,278.165 359.539,381.704   381.705,359.538 278.166,255.999 "></polygon>
              <polygon points="152.461,130.295 130.296,152.46 233.835,255.999 130.296,359.538 152.461,381.704   256,278.165 256,233.834 "></polygon>
            </svg>
            <div className="md:text-[20px] sm:text-[0.875rem] absolute font-black text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {selectedSpeicalNumbers[i]}
            </div>
          </div>
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
    setSelectedNumbers([]);
    setSelectedSpeicalNumbers([]);
  };

  /**
   * 
   *  className={`grid gap-[0.5rem] space-x-1`}
      style={{
      gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
      }}
   */

  const handleElementClick = (value) => {
    setSelectedSpeicalNumbers((prevNumbers) => {
      const isValueSelected = prevNumbers.includes(value);

      const updatedNumbers = isValueSelected
        ? prevNumbers.filter((prevValue) => prevValue !== value)
        : [...prevNumbers, value];

      // Sort the array
      return updatedNumbers.sort((a, b) => a - b);
    });
  };

  // Render the element five times
  const renderElements = () => {
    const elements = [];
    for (let i = 0; i < 5; i++) {
      const elementValue = i + 1; // Assuming the values are 1, 2, 3, 4, 5
      const isElementSelected = selectedSpeicalNumbers.includes(elementValue);

      elements.push(
        <button
          key={i}
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={() => handleElementClick(elementValue)}
          type="button"
          disabled={
            selectedSpeicalNumbers.length > 1 &&
            !selectedSpeicalNumbers.includes(i + 1)
          }
          className={`
            ${
              isElementSelected === false && selectedSpeicalNumbers.length >= 2
                ? 'opacity-[0.5]'
                : 'opacity-[1]'
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 511.999 511.999"
            className="sm:w-[28px] sm:h-[28px] md:w-[45px] md:h-[45px]"
            style={{
              fill: isElementSelected ? '#E0AA3E' : 'rgba(106,115,128,255)',
              // opacity: isElementSelected ? '1' : '0.8',
            }}
          >
            <path d="M420.364,255.999L420.364,255.999l-185.261-20.898L256,420.364  c9.672,24.942,23.54,48.725,43.281,68.465c30.894,30.894,80.984,30.894,111.878,0c15.089-15.089,22.788-34.758,23.137-54.532  c19.775-0.35,39.443-8.048,54.532-23.137c30.895-30.894,30.895-80.984,0-111.878C469.088,279.54,445.305,265.671,420.364,255.999z"></path>
            <path d="M420.364,255.999c24.942-9.672,48.725-23.54,68.465-43.281c30.895-30.895,30.895-80.984,0-111.878  c-15.089-15.089-34.757-22.788-54.532-23.137c-0.35-19.775-8.048-39.443-23.137-54.532c-30.894-30.894-80.984-30.894-111.878,0  c-19.74,19.74-33.609,43.523-43.281,68.465l0,0l-20.898,164.363H420.364z"></path>
            <path d="M91.637,255.999c-24.942,9.672-48.725,23.54-68.466,43.281c-30.894,30.895-30.894,80.984,0,111.878  c15.089,15.089,34.757,22.788,54.532,23.137c0.35,19.775,8.048,39.443,23.137,54.532c30.895,30.895,80.984,30.895,111.878,0  c19.741-19.741,33.609-43.524,43.281-68.465l0,0V235.101L91.637,255.999z"></path>
            <path d="M256,91.636c-9.672-24.942-23.54-48.725-43.281-68.465c-30.895-30.894-80.984-30.894-111.878,0  C85.752,38.259,78.053,57.928,77.703,77.702c-19.775,0.35-39.443,8.048-54.532,23.137c-30.894,30.894-30.894,80.984,0,111.878  c19.741,19.741,43.524,33.61,68.466,43.282H256V91.636z"></path>
            <polygon points="381.705,152.46 359.539,130.295 256,233.834 245.551,255.999 256,278.165 359.539,381.704   381.705,359.538 278.166,255.999 "></polygon>
            <polygon points="152.461,130.295 130.296,152.46 233.835,255.999 130.296,359.538 152.461,381.704   256,278.165 256,233.834 "></polygon>
          </svg>
          <div
            className={`md:text-[20px] sm:text-[0.875rem] absolute font-black ${
              isElementSelected ? 'text-white' : 'text-white'
            } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            {elementValue}
          </div>
        </button>
      );
    }
    return elements;
  };

  // enaksdlaksjd
  return (
    <>
      <button
        className="shadowCustom relative text-center rounded-full p-4 border border-gray-300 hover:shadow-hover cursor-pointer bg-white w-min lg:min-w-[301px]"
        onClick={showModal}
      >
        <div className="inline-flex justify-center z-2 mx-1 space-x-1 lg:min-w-[295px]">
          <div
            className={`grid gap-[4px] space-x-1`}
            style={{
              gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
            }}
          >
            {renderSkeletonForNumbers()}
            {specialNum && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 511.999 511.999"
                // xml:space="preserve"
                className="sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]"
              >
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M420.364,255.999L420.364,255.999l-185.261-20.898L256,420.364  c9.672,24.942,23.54,48.725,43.281,68.465c30.894,30.894,80.984,30.894,111.878,0c15.089-15.089,22.788-34.758,23.137-54.532  c19.775-0.35,39.443-8.048,54.532-23.137c30.895-30.894,30.895-80.984,0-111.878C469.088,279.54,445.305,265.671,420.364,255.999z"
                />
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M420.364,255.999c24.942-9.672,48.725-23.54,68.465-43.281c30.895-30.895,30.895-80.984,0-111.878  c-15.089-15.089-34.757-22.788-54.532-23.137c-0.35-19.775-8.048-39.443-23.137-54.532c-30.894-30.894-80.984-30.894-111.878,0  c-19.74,19.74-33.609,43.523-43.281,68.465l0,0l-20.898,164.363H420.364z"
                />
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M91.637,255.999c-24.942,9.672-48.725,23.54-68.466,43.281c-30.894,30.895-30.894,80.984,0,111.878  c15.089,15.089,34.757,22.788,54.532,23.137c0.35,19.775,8.048,39.443,23.137,54.532c30.895,30.895,80.984,30.895,111.878,0  c19.741-19.741,33.609-43.524,43.281-68.465l0,0V235.101L91.637,255.999z"
                />
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M256,91.636c-9.672-24.942-23.54-48.725-43.281-68.465c-30.895-30.894-80.984-30.894-111.878,0  C85.752,38.259,78.053,57.928,77.703,77.702c-19.775,0.35-39.443,8.048-54.532,23.137c-30.894,30.894-30.894,80.984,0,111.878  c19.741,19.741,43.524,33.61,68.466,43.282H256V91.636z"
                />
                <polygon
                  style={{ fill: '#F4F4F5' }}
                  points="381.705,152.46 359.539,130.295 256,233.834 245.551,255.999 256,278.165 359.539,381.704   381.705,359.538 278.166,255.999 "
                />
                <polygon
                  style={{ fill: '#F4F4F5' }}
                  points="152.461,130.295 130.296,152.46 233.835,255.999 130.296,359.538 152.461,381.704   256,278.165 256,233.834 "
                />
              </svg>
            )}
            {specialNum && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 511.999 511.999"
                // xml:space="preserve"
                className="sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]"
              >
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M420.364,255.999L420.364,255.999l-185.261-20.898L256,420.364  c9.672,24.942,23.54,48.725,43.281,68.465c30.894,30.894,80.984,30.894,111.878,0c15.089-15.089,22.788-34.758,23.137-54.532  c19.775-0.35,39.443-8.048,54.532-23.137c30.895-30.894,30.895-80.984,0-111.878C469.088,279.54,445.305,265.671,420.364,255.999z"
                />
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M420.364,255.999c24.942-9.672,48.725-23.54,68.465-43.281c30.895-30.895,30.895-80.984,0-111.878  c-15.089-15.089-34.757-22.788-54.532-23.137c-0.35-19.775-8.048-39.443-23.137-54.532c-30.894-30.894-80.984-30.894-111.878,0  c-19.74,19.74-33.609,43.523-43.281,68.465l0,0l-20.898,164.363H420.364z"
                />
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M91.637,255.999c-24.942,9.672-48.725,23.54-68.466,43.281c-30.894,30.895-30.894,80.984,0,111.878  c15.089,15.089,34.757,22.788,54.532,23.137c0.35,19.775,8.048,39.443,23.137,54.532c30.895,30.895,80.984,30.895,111.878,0  c19.741-19.741,33.609-43.524,43.281-68.465l0,0V235.101L91.637,255.999z"
                />
                <path
                  style={{ fill: '#F4F4F5' }}
                  d="M256,91.636c-9.672-24.942-23.54-48.725-43.281-68.465c-30.895-30.894-80.984-30.894-111.878,0  C85.752,38.259,78.053,57.928,77.703,77.702c-19.775,0.35-39.443,8.048-54.532,23.137c-30.894,30.894-30.894,80.984,0,111.878  c19.741,19.741,43.524,33.61,68.466,43.282H256V91.636z"
                />
                <polygon
                  style={{ fill: '#F4F4F5' }}
                  points="381.705,152.46 359.539,130.295 256,233.834 245.551,255.999 256,278.165 359.539,381.704   381.705,359.538 278.166,255.999 "
                />
                <polygon
                  style={{ fill: '#F4F4F5' }}
                  points="152.461,130.295 130.296,152.46 233.835,255.999 130.296,359.538 152.461,381.704   256,278.165 256,233.834 "
                />
              </svg>
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[#49636e]">
            <p
              aria-label="Enter Numbers"
              className="font-bold text-lg items-center flex justify-center"
            >
              <span className="text-[#49636E] pl-1 pr-1"> انتخاب اعداد</span>
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
        <div className="flex flex-col justify-between sm:min-h-[100vh] md:min-h-[auto] md:h-full">
          <div>
            {/* ::::::::::::::::: display selected Numbers start  :::::::::::::::::::::*/}
            <div
              className={`flex justify-center flex-col items-center bg-[${backgroundColor}] h-[126x] p-5 sm:rounded-none md:rounded-tr-lg md:rounded-tl-lg`}
            >
              <div className=" uppercase font-bold text-gray-700 flex justify-center py-3">
                اعداد انتخاب شده
              </div>
              <div
                className={`grid gap-[4px] space-x-1`}
                style={{
                  gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
                }}
              >
                {renderSelectedNumbers()}
                {renderSpecialNumbers()}
              </div>
            </div>
            {/* :::::::::::::::: display selected Numbers end  :::::::::::::::::::::*/}
            <ConfirmationModal
              opneValue={isNumbersAlreadySelected()}
              setUnlock={setUnlock}
            />
            {/* {isNumbersAlreadySelected() === true && unlock === false ? (
              <div className="bg-[#fcf3f3] text-red-500 flex flex-row items-center bg-message-error-light py-2 px-6 text-sm text-message-error gap-2 rtl">
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
            ) : null} */}
            <div className="bg-white px-2 mt-2">
              <div className="border-gray-300 border-b-1 py-1 flex flex-row-reverse justify-between ">
                <span className="p-1 text-base text-left flex gap-x-3">
                  <h6 className="font-bold rtl">
                    {numbersToBeSelected} عدد انتخاب کنید
                  </h6>
                </span>
                <p className="py-1 flex flex-row-reverse rtl">
                  <span>
                    <b>{selectedNumbers.length}</b> از {numbersToBeSelected}
                  </span>
                </p>
              </div>
            </div>
            <hr className="mb-[9px]" />
            {/* ::::::::::::::::: render Number Start :::::::::::::::::: */}
            <div className="ml-3 flex flex-wrap gap-2">{renderNumbers()}</div>

            <div className="bg-white px-2 mt-4">
              <div className="border-gray-300 border-b-1 py-1 flex flex-row-reverse justify-between ">
                <span className="p-1 text-base text-left flex gap-x-3">
                  <h6 className="font-bold rtl">۲ شبدر انتخاب کنید</h6>
                </span>
                <p className="py-1 flex flex-row-reverse rtl">
                  <span>
                    <b>{selectedSpeicalNumbers.length}</b> از 2
                  </span>
                </p>
              </div>
            </div>
            <hr className="mb-[9px]" />
            <div className="ml-3 flex flex-wrap gap-2">{renderElements()}</div>
            {/* ::::::::::::::::: render Number End :::::::::::::::::: */}
          </div>
          <div className="flex flex-col sm:mb-[20px] md:mb-[0]">
            <hr className="sm:my-[10px] md:my-[20px] " />
            <div className="flex">
              {selectedNumbers.length > 0 ||
              selectedSpeicalNumbers.length > 0 ? (
                <button
                  role="button"
                  data-elem-reset-num-button="true"
                  onClick={() => {
                    setSelectedNumbers([]);
                    setSelectedSpeicalNumbers([]);
                  }}
                  className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2  p-4 text-gray-700 bg-white border-gray-400"
                  data-selected="false"
                  key="back"
                >
                  <span>پاک کردن اعداد</span>
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
                  <span>پاک کردن اعداد</span>
                </button>
              )}
              {(selectedNumbers.length === numbersToBeSelected &&
                selectedSpeicalNumbers.length === 2 &&
                isNumbersAlreadySelected() === false) ||
              unlock === true ? (
                <button
                  data-elem-add-num-button="true"
                  className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2 shadow-button hover:shadow-button-hov p-4 text-gray-700 bg-[#c4dc33] active:bg-[#b1cc10] border-[#b1cc10] "
                  data-selected="false"
                  onClick={() => handleSubmit()}
                >
                  <span>تأیید</span>
                </button>
              ) : (
                <button
                  data-elem-add-num-button="true"
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-1/2 mx-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                  data-selected="false"
                  key="submit"
                >
                  <span>تأیید</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default OnlyNumberSelectorMilli;
