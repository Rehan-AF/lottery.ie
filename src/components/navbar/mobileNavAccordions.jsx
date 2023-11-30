import React from 'react';

export const GamesAccordions = () => {
  return (
    <div>
      <div
        style={{ maxHeight: '385px' }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out flex-1 bg-gray-100"
      >
        <div className="flex flex-col">
          <button className="text-left">
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.3s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">Lotto</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>€7.2 Million*</span>
                  </span>
                </p>
                <p>
                  <span>Sunday, 12:45am</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.4s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">EuroMillions</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>€200 Million**</span>
                  </span>
                </p>
                <p>
                  <span>Saturday, 12:30am</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.5s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">EuroDreams</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  <span className="text-sm md:text-sm lg:text-3xl">
                    €20,000
                    <div className="text-sm md:text-sm">
                      per month for 30 years*
                    </div>
                  </span>
                </p>
                <p>
                  <span>Tomorrow, 12:30am</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.6000000000000001s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">Daily Million</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>€1 Million**</span>
                  </span>
                </p>
                <p>
                  <span>Tomorrow, 2:00am</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.7s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">Lotto 5-4-3-2-1</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  <span>€125,000**</span>
                </p>
                <p>
                  <span>Sunday, 12:45am</span>
                </p>
              </div>
            </div>
          </button>
          <button className="text-left">
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.8s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">Millionaire Raffle</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  <span
                    aria-hidden="true"
                    className="text-lg md:text-3xl text-sm md:text-sm"
                  >
                    <span>€1 Million**</span>
                  </span>
                </p>
                <p>
                  <span>32 days to go!</span>
                </p>
              </div>
            </div>
          </button>
          <button
            aria-label="Instant Win Games, Win prizes up to €250,000"
            className="text-left"
          >
            <div
              className="animate-fadeToLeft flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12"
              style={{ animationDuration: '0.9000000000000001s' }}
            >
              <h6 className="w-1/2 font-bold text-lg">Instant Win Games</h6>
              <div className="w-1/2 text-sm">
                <p className="font-bold text-gray-800">
                  Win prizes up to €250,000
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="w-full border-t-1 text-sm px-6 py-2">
          <p>*estimated</p>
          <p>**guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export const ResultsAccordion = () => {
  return (
    <div
      style={{ maxHeight: ' 282px' }}
      className="overflow-hidden transition-max-height duration-700 ease-in-out flex-1 bg-gray-100"
    >
      <div className="flex flex-col text-lg space-y-4 font-bold mb-2 px-6 py-4">
        <div
          className="animate-fadeToLeft"
          style={{ animationDuration: '0.3s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Lotto
          </div>
        </div>
        <div
          className="animate-fadeToLeft"
          style={{ animationDuration: '0.4s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            EuroMillions
          </div>
        </div>
        <div
          className="animate-fadeToLeft"
          style={{ animationDuration: '0.5s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            EuroDreams
          </div>
        </div>
        <div
          className="animate-fadeToLeft"
          style={{ animationDuration: '0.6000000000000001s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Daily Million
          </div>
        </div>
        <div
          className="animate-fadeToLeft"
          style={{ animationDuration: '0.7s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Lotto 5-4-3-2-1
          </div>
        </div>
        <div
          className="animate-fadeToLeft"
          style={{ animationDuration: '0.8s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Telly Bingo
          </div>
        </div>
        <div
          style={{ animationDuration: '0.9000000000000001s' }}
          className="flex flex-col items-start animate-fadeToLeft"
        >
          <a
            role="button"
            className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov px-4 py-1 text-gray-800 bg-white border-blue-800 active:bg-blue-lighter-04"
            href="/results"
          >
            <span>view all results</span>
          </a>
        </div>
      </div>
    </div>
  );
};
