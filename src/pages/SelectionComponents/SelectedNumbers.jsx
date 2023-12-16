const SelectedNumbers = () => {
  return (
    <div className="">
      {/* ::::::::::::::::: display selected Numbers start  :::::::::::::::::::::*/}
      <div className="flex justify-center flex-col items-center bg-red-200 h-[126x] p-5 rounded-tr-lg rounded-tl-lg">
        <div className=" uppercase font-bold text-gray-700 flex justify-center py-3">
          Game line 1{' '}
        </div>
        <div className=" flex space-x-1">
          <div className=" ">
            <div
              className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className=" ">
            <div
              className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className=" ">
            <div
              className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className=" ">
            <div
              className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className=" ">
            <div
              className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className=" ">
            <div
              className="rounded-full flex font-bold justify-center items-center relative bg-red-800 opacity-30 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
              aria-hidden="true"
            >
              <span className="absolute opacity-0 w-full h-full"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
      {/* ::::::::::::::::: display selected Numbers end  :::::::::::::::::::::*/}
      <div className="bg-white px-2 mt-2">
        <div className="border-gray-300 border-b-1 py-1 mb-2 flex justify-between">
          <span className="p-1 text-base text-left flex gap-x-3">
            <h6 className="font-bold">Pick 6 numbers</h6>
          </span>
          <p className="py-1">
            <span>
              <b>0</b> of 6
            </span>
          </p>
        </div>
      </div>
      <hr />
      <label className=" border-2 flex items-center justify-center cursor-pointer rounded-full w-8 h-8 md:w-11 md:h-11 border-1 border-gray-600 bg-white text-base font-bold">
        <div aria-hidden="true">1</div>
        <input
          type="checkbox"
          className="opacity-0 absolute"
          name="balls"
          aria-label="1"
          value="1"
        />
      </label>
    </div>
  );
};

export default SelectedNumbers;
