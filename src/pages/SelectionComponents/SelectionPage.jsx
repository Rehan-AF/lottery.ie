import NumberSelector from './selection';
import background from '../../assets/backgrounds/LottoPlaySlipBack-dsk.svg';
import logo from '../../assets/logo.svg';
import Accorion from '../../components/Accordion';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OnlyNumberSelector from './onlyNumberSelector';
import deleteLogo from '../../assets/deleteLogo.svg';
import { deleteWiningNumber, pushNumbersToWiningNumbers } from '../../Store';

const SelectionPage = () => {
  const dispatch = useDispatch();
  const winingNumbers = useSelector(
    (state) => state.productsSlice.winingNumber
  );
  const handleDelele = (i) => {
    dispatch(deleteWiningNumber(i));
  };
  const generateUniqueNumbers = (winingNumbers) => {
    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const isNumbersAlreadySelected = (numbersArray) =>
      winingNumbers.some((existingArray) =>
        existingArray.every((num) => numbersArray.includes(num))
      );

    let uniqueNumbersArray = [];

    while (uniqueNumbersArray.length < 6) {
      const randomNumber = getRandomInt(0, 50);
      if (
        !uniqueNumbersArray.includes(randomNumber) &&
        !isNumbersAlreadySelected([...uniqueNumbersArray, randomNumber])
      ) {
        uniqueNumbersArray.push(randomNumber);
      }
    }

    return uniqueNumbersArray;
  };
  const getRandomNumbers = () => {
    const newNumbersArray = generateUniqueNumbers(winingNumbers);
    dispatch(pushNumbersToWiningNumbers(newNumbersArray));
  };
  return (
    <div>
      <div
        className="h-[369px] relative"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-[75%] m-auto  ">
          <div className="pt-4 flex items-center ">
            <button className="flex text-blue-900  hover:text-white bg-lime-400 rounded-full cursor-pointer items-center px-3   z-1">
              <span>
                <svg
                  className="fill-current leading-none"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1219 6.81753C13.6928 6.153 14.7127 6.05914 15.404 6.60435C16.1006 7.15381 16.2019 8.14552 15.6264 8.81526L12.6752 12.25L15.6264 15.6847C16.2019 16.3545 16.1006 17.3462 15.404 17.8956C14.7127 18.4409 13.6928 18.347 13.1219 17.6825L9.40394 13.3555C8.86669 12.7302 8.86386 11.7731 9.40394 11.1445L13.1219 6.81753Z"
                    fill="#2D4550"
                  ></path>
                </svg>
              </span>
              <span className="text-xs">HOME</span>
            </button>
          </div>

          <div>
            <div className="mt-10">
              <img
                src={logo}
                alt="logo"
                className="drop-shadow filter w-25 h-12 w-[200px] lg:h-full mb-3"
              />
              <span className="text-white shadow-text text-2xl md:text-3xl lg:text-4xl font-black">
                €9 Million Jackpot *
              </span>
              <div className="flex justify-between xl:flex-col pb-5 xl:pb-0">
                <p className="text-white shadow-text font-bold lg:mt-2 lg:text-xl">
                  Tomorrow, 12:45am
                </p>
                <p className="text-white shadow-text font-bold lg:py-8 text-sm lg:text-base ">
                  * estimated
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  xl:right-[10%] xl:top-[5%]  sm:w-[100%] xl:max-w-[601px] h-fit  ">
          <div className=" bg-white rounded-lg p-4 md:p-5 lg:p-[2rem]  xl:max-w-[601px] mb-8 mx-4 md:mx-32 xl:mx-[0px]  ">
            <div className="mb-3">
              <span className="text-gray-700 font-bold text-2xl capitalize">
                Play Lotto
              </span>
              <p className="text-blue text-gray-700">
                Enter a minimum of 2 lines below.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="mb-4">
                {winingNumbers.length > 0 ? (
                  winingNumbers?.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-[0.45rem] mb-[1rem]"
                      >
                        <div className="font-bold text-gray-700 w-4 text-center">
                          {index + 1}
                        </div>
                        <NumberSelector index={index} values={val} />
                        <div
                          onClick={() => handleDelele(index)}
                          className="cursor-pointer"
                        >
                          <img src={deleteLogo} width={22} />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <OnlyNumberSelector />
                )}
              </div>
              {winingNumbers.length < 10 ? (
                <div className="mb-4">
                  <OnlyNumberSelector />
                </div>
              ) : null}
              {winingNumbers.length < 10 ? (
                <span className="my-3 text-gray-700 uppercase font-bold text-xl">
                  OR
                </span>
              ) : null}

              <div className="mb-9">
                {winingNumbers.length < 10 ? (
                  <button
                    className="flex relative text-center rounded-full py-3 pt-3 p-[3rem] border border-gray-300 w-full hover:shadow-hover cursor-pointer"
                    onClick={getRandomNumbers}
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0941 20.893C16.9661 20.893 20.9157 16.9434 20.9157 12.0714C20.9157 7.19934 16.9661 3.24977 12.0941 3.24977C7.22205 3.24977 3.27247 7.19934 3.27247 12.0714C3.27247 16.9434 7.22205 20.893 12.0941 20.893ZM12.0941 22.1254C17.6468 22.1254 22.1481 17.6241 22.1481 12.0714C22.1481 6.51869 17.6468 2.01733 12.0941 2.01733C6.54139 2.01733 2.04004 6.51869 2.04004 12.0714C2.04004 17.6241 6.54139 22.1254 12.0941 22.1254Z"
                        fill="#2D4550"
                      ></path>
                      <path
                        d="M9.52979 15.0838C9.93454 15.0838 10.316 15.0059 10.6584 14.8736L11.0398 15.3406L11.9739 14.5934L11.647 14.1964C12.0595 13.7372 12.3008 13.1145 12.3008 12.3984C12.3008 10.8182 11.1177 9.71295 9.52979 9.71295C7.9419 9.71295 6.75098 10.8182 6.75098 12.3984C6.75098 13.9785 7.9419 15.0838 9.52979 15.0838ZM9.52979 13.9006C8.66579 13.9006 8.11314 13.239 8.11314 12.3984C8.11314 11.5499 8.66579 10.8961 9.52979 10.8961C10.386 10.8961 10.9387 11.5499 10.9387 12.3984C10.9387 12.6708 10.8764 12.9199 10.7752 13.1378L10.2848 12.5462L9.35854 13.2935L9.83336 13.8695C9.73217 13.8928 9.63098 13.9006 9.52979 13.9006Z"
                        fill="#2D4550"
                      ></path>
                      <path
                        d="M14.4436 14.9904V13.2468H15.7046C16.8722 13.2468 17.5104 12.4606 17.5104 11.5266C17.5104 10.5847 16.8722 9.79857 15.7046 9.79857H13.1048V14.9904H14.4436ZM15.5256 12.0792H14.4436V10.9661H15.5256C15.8836 10.9661 16.1483 11.1685 16.1483 11.5266C16.1483 11.8768 15.8836 12.0792 15.5256 12.0792Z"
                        fill="#2D4550"
                      ></path>
                    </svg>
                    <span className="pl-1 text-gray-700">
                      {' '}
                      Add Quick Pick Line
                    </span>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#E7EFF3] flex flex-col justify-end items-end xl:pr-[128px]  2xl:pr-[146px] xl:pt-32 pt-[250px] md:pt-[340px] lg:pt-[360px] w-full ">
        <div className="hover:bg-gray-100 hover:shadow-md hover:bg-opacity-100  m-auto bg-white rounded-lg px-5  lg:px-5 lg:p-[0.5rem]  xl:max-w-[601px] mb-4 mt-4 mx-4 md:mx-32 xl:mx-[0px]">
          <Accorion title="Lotto win odds" icon={true} pading={false}>
            <div className="  ">
              <hr className="border w-full" />
              <p className="w-full  text-gray-700 pt-2  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                dolorum, nostrum illo vitae necessitatibus fugiat aspernatur
                quae ad! Saepe consequatur corporis voluptatibus officiis quam
                assumenda voluptas ratione perspiciatis sapiente perferendis.
              </p>
            </div>
          </Accorion>
        </div>
        {/* 2 */}
        <div className=" hover:bg-gray-100 hover:shadow-md m-auto bg-white rounded-lg px-5  lg:px-5 lg:p-[0.5rem]  xl:max-w-[601px] mb-4 mx-4 md:mx-32 xl:mx-[0px] text-gray-700">
          <Accorion title="How to Play" icon={true} pading={false}>
            <div className="  ">
              <hr className="border w-full" />
              <p className="w-full text-gray-700 mt-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                dolorum, nostrum illo vitae necessitatibus fugiat aspernatur
                quae ad! Saepe consequatur corporis voluptatibus officiis quam
                assumenda voluptas ratione perspiciatis sapiente perferendis.
              </p>
            </div>
          </Accorion>
        </div>
        {/* 3 */}
        <div className="hover:bg-gray-100 hover:shadow-md  m-auto bg-white rounded-lg px-5  lg:px-5 lg:p-[0.5rem]  xl:max-w-[601px] mb-8 mx-4 md:mx-32 xl:mx-[0px]">
          <Accorion title="Responsible Play" icon={true} pading={false}>
            <div className=" mb-8 ">
              <hr className="border w-full" />
              <p className="w-full text-gray-700  mt-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                dolorum, nostrum illo vitae necessitatibus fugiat aspernatur
                quae ad! Saepe consequatur corporis voluptatibus officiis quam
                assumenda voluptas ratione perspiciatis sapiente perferendis.
              </p>
            </div>
          </Accorion>
        </div>
      </div>

      <div className="flex-col md:flex-row flex bg-white shadow-2xl shadow-black fixed bottom-0 w-full z-20 py-4 px-4 md:px-7 lg:px-28 rounded-t-lg justify-between lg:justify-end items-center">
        <div className="flex justify-between lg:justify-end w-full">
          <div className="flex flex-row md:flex-col justify-between w-full md:w-auto lg:mr-4 mb-2 md:mb-0">
            <div className="flex justify-end font-bold text-gray-700">
              from €2.00 per line
            </div>
          </div>
        </div>
        <div className="justify-between md:justify-end w-full flex flex-row  md:w-auto ">
          <button
            disabled=""
            className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 mr-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
            data-selected="false"
          >
            <span>back</span>
          </button>
          <button
            disabled=""
            className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
            data-selected="false"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
