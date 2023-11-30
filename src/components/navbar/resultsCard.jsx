const ResultsCard = () => {
  return (
    <div
      tabIndex="0"
      role="link"
      className="flex-1 relative"
      aria-label="Lotto"
    >
      <div
        className="group cursor-pointer flex flex-col items-center h-52 rounded-md bg-cover flex-1 bg-lottoCardBackground bg-left shadow-headerCard hover:shadow-headerCardHover transition-all ease-linear animate-fadeToTop"
        style="animation-duration: 0.2s; opacity: 100;"
      >
        <div className="flex flex-col pt-10 h-full w-full justify-end items-center mb-6">
          <div className="relative mb-10 filter drop-shadow">
            <img
              alt="white Lotto logo"
              className="w-38"
              src="https://www.lottery.ie/content/dam/pli/logos/centered/white/Lotto.svg"
              role="img"
            />
          </div>
          <button
            role="link"
            className="py-1.5 px-3 mx-2 bg-black-alpha-20 rounded-full border border-solid border-white text-white group-hover:text-blue-900 group-hover:shadow-hover group-hover:bg-white ease-in-out duration-200"
          >
            <h5 className="uppercase text-sm font-bold">View Results</h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
