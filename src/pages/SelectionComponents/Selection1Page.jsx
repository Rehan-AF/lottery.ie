import React from 'react';
import logo from '../../assets/logo.svg';
import background from '../../assets/backgrounds/LottoPlaySlipBack-dsk.svg';
import NumberSelector from './selection';
// import background from '../../assets/backgrounds/LottoPlaySlipBack-dsk.svg';
// import logo from '../../assets/logo.svg';
import Accorion from '../../components/Accordion';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OnlyNumberSelector from './onlyNumberSelector';
import deleteLogo from '../../assets/deleteLogo.svg';
import { deleteWiningNumber } from '../../Store';

const Selection1Page = () => {
  const dispatch = useDispatch();
  const winingNumbers = useSelector(
    (state) => state.productsSlice.winingNumber
  );
  const handleDelele = (i) => {
    dispatch(deleteWiningNumber(i));
  };
  return (
    <div className="bg-blue-100 relative flex justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row w-full h-full lg:max-w-screen-lg lg:justify-center">
        <div
          className=" absolute bg-cover bg-no-repeat w-full h-60 md:h-56 lg:h-80 top-0"
          style={{
            backgroundImage: `url("${background}")`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="flex flex-col lg:flex-row w-full px-4 md:px-6 lg:px-0 lg:pl-0 h-full z-1 lg:justify-center">
          <div className="flex flex-col">
            <div className="flex items-start z-10 absolute lg:static mt-2">
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
            <div className="flex flex-col w-full md:w-125 mx-auto md:mt-9 lg:mt-4 lg:mx-0 lg:pr-14 items-between mt-8">
              <div className="mb-3 mt-2 lg:mt-3">
                <img
                  src={logo}
                  alt="logo"
                  className="drop-shadow filter w-25 h-12 w-[200px] lg:h-full mb-3"
                />
              </div>
              <div className="flex lg:block justify-between flex-col z-10">
                <div className="flex flex-col">
                  <h3 className="text-white shadow-text text-3xl md:text-4xl lg:text-5xl font-black">
                    <span
                      aria-label="€9.2 Million Jackpot   estimated"
                      className=""
                    >
                      <span>€9.2 Million Jackpot *</span>
                    </span>
                  </h3>
                </div>
                <div className="flex flex-row lg:flex-col justify-between">
                  <p className="text-white shadow-text font-bold lg:mt-2 lg:text-xl">
                    Thursday, 12:45am
                  </p>
                  <div className="flex lg:flex-col justify-between lg:justify-start sm:mt-0.5 items-baseline">
                    <div className="text-white shadow-text font-bold lg:py-8 text-sm lg:text-base">
                      * estimated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col m-4 w-full md:w-125 lg:w-5/12 self-center lg:flex-grow">
            <div className="md:px-0 z-10 w-full">
              <div className="bg-white rounded-lg shadow w-full p-4 md:p-8 mb-8 flex flex-col at-element-marker">
                <div className="flex flex-col items-start mb-4">
                  <div className="flex flex-row space-x-2 pb-1">
                    <h3
                      className="text-gray-700 text-2xl capitalize font-bold"
                      aria-level="3"
                    >
                      Play Lotto
                    </h3>
                  </div>
                  <h2 className="text-blue">
                    Enter a minimum of 2 lines below.
                  </h2>
                </div>
                <ol className="hidden" aria-hidden="true"></ol>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center mb-9 w-min">
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

                    <p
                      className="my-3 uppercase font-bold text-xl"
                      aria-label="or"
                    >
                      <span>or</span>
                    </p>
                    <button className="relative text-center rounded-full py-3 pl-3 pr-1 border border-gray-300 w-full hover:shadow-hover cursor-pointer">
                      <div className="flex justify-center z-2 items-center">
                        <div
                          className="invisible rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
                          aria-hidden="true"
                        >
                          <span className="absolute opacity-0 w-full h-full"></span>
                          <span aria-hidden="true"></span>
                        </div>
                        <div
                          className="invisible rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
                          aria-hidden="true"
                        >
                          <span className="absolute opacity-0 w-full h-full"></span>
                          <span aria-hidden="true"></span>
                        </div>
                        <div
                          className="invisible rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
                          aria-hidden="true"
                        >
                          <span className="absolute opacity-0 w-full h-full"></span>
                          <span aria-hidden="true"></span>
                        </div>
                        <div
                          className="invisible rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
                          aria-hidden="true"
                        >
                          <span className="absolute opacity-0 w-full h-full"></span>
                          <span aria-hidden="true"></span>
                        </div>
                        <div
                          className="invisible rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
                          aria-hidden="true"
                        >
                          <span className="absolute opacity-0 w-full h-full"></span>
                          <span aria-hidden="true"></span>
                        </div>
                        <div
                          className="invisible rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
                          aria-hidden="true"
                        >
                          <span className="absolute opacity-0 w-full h-full"></span>
                          <span aria-hidden="true"></span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-1 absolute z-1 left-0 right-0 mx-auto top-1/3">
                        <span className="inline-flex relative">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
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
                        </span>
                        <h6 className="font-bold text-gray-700">Add Quick Pick Line</h6>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 md:px-0">
              <div className="w-full">
                <div className="flex flex-col rounded-md shadow mb-3 bg-white  px-4">
                
                  <Accorion title="Lotto win odds" icon={true} pading={false}>
                    <div className=" px-4 ">
                      <hr className="border w-full" />
                      <p className="w-full  text-gray-700 pt-2  ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Earum dolorum, nostrum illo vitae necessitatibus
                        fugiat aspernatur quae ad! Saepe consequatur corporis
                        voluptatibus officiis quam assumenda voluptas ratione
                        perspiciatis sapiente perferendis.
                      </p>
                    </div>
                  </Accorion>
                
                </div>
              </div>
              <div className="flex flex-col rounded-md shadow mb-3 bg-white  px-4">
           
                <Accorion title="How to Play" icon={true} pading={false}>
                  <div className="px-4  ">
                    <hr className="border w-full" />
                    <p className="w-full text-gray-700 mt-2 ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum dolorum, nostrum illo vitae necessitatibus fugiat
                      aspernatur quae ad! Saepe consequatur corporis
                      voluptatibus officiis quam assumenda voluptas ratione
                      perspiciatis sapiente perferendis.
                    </p>
                  </div>
                </Accorion>
              </div>
              <div className="flex flex-col rounded-md shadow mb-3 bg-white  px-4">
                <Accorion title="How to Play" icon={true} pading={false}>
                  <div className=" ">
                    <hr className="border w-full" />
                    <p className="w-full text-gray-700 mt-2 ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum dolorum, nostrum illo vitae necessitatibus fugiat
                      aspernatur quae ad! Saepe consequatur corporis
                      voluptatibus officiis quam assumenda voluptas ratione
                      perspiciatis sapiente perferendis.
                    </p>
                  </div>
                </Accorion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row flex bg-white shadow fixed bottom-0 w-full z-20 py-4 px-4 md:px-7 lg:px-28 rounded-t-lg justify-between lg:justify-end items-center">
        <div className="flex justify-between lg:justify-end w-full">
          <div className="flex flex-row md:flex-col justify-between w-full md:w-auto lg:mr-4 mb-2 md:mb-0">
            <div className="flex justify-end font-bold text-gray-700">
              from €2.00 per line
            </div>
          </div>
        </div>
        <div className="justify-between md:justify-end flex flex-row w-full md:w-auto">
          <button
            disabled=""
            className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 mr-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
            data-selected="false"
          >
            <span className='text-gray-700'>back</span>
          </button>
          <button
            disabled=""
            className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
            data-selected="false"
          >
            <span className='text-gray-700'>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selection1Page;
