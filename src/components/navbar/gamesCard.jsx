import '../homePageTopSec/styles.css';
import './navStyles.css';
const GamesCard = ({
  logo,
  background,
  date,
  amount,
  playFor,
  gradient = false,
  animationDuration,
}) => {
  return (
    <div
      className="flex-1 w-full card_container animate-fadeToTop"
      style={{
        opacity: 100,
      }}
    >
      <button
        className="group w-full card cursor-pointer h-45"
        style={{
          animationDuration: `${animationDuration}s`,
        }}
      >
        <div
          className="bg-lottoCardBackground on_hover bg-left bg-cover bg-no-repeat text-white rounded-lg hover:shadow-hover relative p-3 h-full"
          style={{
            width: 179,
            height: 202,
            backgroundImage: `${
              gradient === true ? `${background}` : `url("${background}")`
            }`,
          }}
        >
          <div className="flex flex-col items-end flex-start text-left">
            <div className="filter drop-shadow">
              <img
                alt="white Lotto logo"
                className="h-10 w-auto"
                src={logo}
                role="img"
              />
            </div>
            <h2 className="text-sm leading-5 font-bold mt-1 mb-1 shadow-text">
              {date}
            </h2>
            <h3 className="font-black mb-3 shadow-text text-xl">
              <span
                aria-hidden="true"
                className="text-lg md:text-3xl lg:text-xl"
              >
                <span>
                  <strong className="lg:text-2xl">€{amount}*</strong>
                </span>
              </span>
            </h3>
            <div className="flex flex-col justify-between w-full absolute bottom-0 left-0 p-2">
              <p className="text-white text-x-sm font-bold pb-1 text-end">
                *estimated
              </p>
              <div className="flex justify-end">
                <a
                  aria-label="Play from €4 link"
                  className="flex justify-center cursor-pointer group-hover:text-gray-800 group-hover:shadow-hover group-hover:bg-white rounded-full ease-in-out duration-200"
                  href="/"
                >
                  <div className="m-auto rounded-full border on_hover border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-800 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                    <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                      <span aria-label="play from €4">
                        Play from €{playFor}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default GamesCard;
