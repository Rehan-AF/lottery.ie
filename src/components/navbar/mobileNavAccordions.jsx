import { Link } from 'react-router-dom';

export const GamesAccordions = ({ isVisible }) => {
  return (
    <div>
      <div className="transition-max-height duration-700 ease-in-out flex-1 bg-gray-100">
        <div className="flex flex-col gap-[0.7rem]">
          <button className="text-left">
            <div
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.3s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                Lotto
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
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
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.4s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                EuroMillions
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
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
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.5s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                EuroDreams
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
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
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.6000000000000001s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                Daily Million
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
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
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.7s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                Lotto 5-4-3-2-1
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
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
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.8s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                Millionaire Raffle
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
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
              className={`${
                isVisible ? 'Accordioncard animate-fadeToLeft' : ''
              } Accordioncard flex items-center space-x-1 active:bg-blue-100 w-full px-6 h-12 sm:flex-row-reverse md:flex-row-reverse`}
              style={{ animationDuration: '0.9000000000000001s' }}
            >
              <h6 className="w-1/2 font-bold text-lg sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                Instant Win Games
              </h6>
              <div className="w-1/2 text-sm sm:flex md:flex sm:flex-col md:flex-col sm:items-end md:items-end">
                <p className="font-bold text-gray-700">
                  Win prizes up to €250,000
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="w-full border-t text-sm px-6 py-2">
          <p className="text-end">*estimated</p>
          <p className="text-end">**guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export const ResultsAccordion = ({ setPanelVisible, isVisible }) => {
  return (
    <div className="overflow-hidden transition-max-height duration-700 ease-in-out flex-1 bg-gray-100">
      <div className="flex flex-col sm:gap-[0.7rem] md:gap-[0.7rem] text-lg space-y-4 font-bold mb-2 px-6 py-4 sm:items-end md:items-end">
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.3s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Lotto
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.4s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            EuroMillions
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.5s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            EuroDreams
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.6000000000000001s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Daily Million
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.7s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Lotto 5-4-3-2-1
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard`}
          style={{ animationDuration: '0.8s' }}
        >
          <div className="font-bold text-lg" role="link" tabIndex="0">
            Telly Bingo
          </div>
        </div>
        <div
          className={`${
            isVisible ? 'Accordioncard animate-fadeToLeft' : ''
          } Accordioncard flex flex-col items-start`}
          style={{ animationDuration: '0.9000000000000001s' }}
        >
          <Link to="/results ">
            <button
              className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov px-4 py-1 text-gray-700 bg-white border-blue-800 active:bg-blue-lighter-04"
              onClick={() => setPanelVisible(false)}
            >
              <span>view all results</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
