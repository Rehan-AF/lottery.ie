const ResultsCard = ({ logo, gradient, backgroundImage }) => {
  return (
    <div
      tabIndex="0"
      role="link"
      className="w-[176px] h-[234px]"
      aria-label="Lotto"
    >
      <div
        className="group cursor-pointer flex flex-col items-center h-52 rounded-md bg-cover flex-1 bg-lottoCardBackground bg-left shadow-headerCard hover:shadow-headerCardHover transition-all ease-linear animate-fadeToTop"
        style={{
          animationDuration: '0.2s',
          opacity: 100,
          backgroundImage: `${
            gradient === true ? `${backgroundImage}` : `url(${backgroundImage})`
          }`,
        }}
      >
        <div className="flex flex-col pt-10 h-full w-full justify-end items-center mb-6">
          <div className="relative mb-10 filter drop-shadow">
            <img alt="logo" className="w-[171px]" src={logo} role="img" />
          </div>
          <button
            role="link"
            className="py-1.5 px-3 mx-2 bg-black-alpha-20 rounded-full border border-solid border-white text-white group-hover:text-gray-800 group-hover:shadow-hover group-hover:bg-white ease-in-out duration-200"
          >
            <h5 className="uppercase text-sm font-bold">View Results</h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
