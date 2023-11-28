const LargeCard = () => {
  return (
    <button
      className="relative rounded-md md:my-3 md:mr-3 flex-col md:flex-row md:items-center cursor-pointer group"
      role="link"
      style={{
        backgroundImage: `url('https://www.lottery.ie/content/dam/pli/games/festive-fortune/square-bg1x.jpg')`,
        backgroundSize: 'cover',
        width: 616.5,
        height: 459,
      }}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center">
        <div className="flex-1 flex justify-center">
          <img
            className="relative h-32 md:h-60 lg:h-80 w-full md:w-4/5 object-contain p-3"
            alt="Festive Fortune logo"
            src="https://www.lottery.ie/content/dam/pli/games/festive-fortune/logo-original1x.png"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-xl font-bold shadow-text text-white text-center pb-1">
            Win up to
          </h1>
          <h2 className="font-black text-5xl-xtra shadow-text text-white text-center leading-none text-[2.444444rem]">
            €30,000
          </h2>
          <div className="py-4 self-center mb-5 md:mb-0">
            <a
              aria-label="€3 to play link"
              className="flex justify-center"
              href="/"
            >
              <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-blue-900 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
                <div className="uppercase text-sm font-bold leading-none xsm:text-sm">
                  <span aria-label="€3 to play">€3 to play</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default LargeCard;
