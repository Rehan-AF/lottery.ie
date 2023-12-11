const Banner = () => {
  return (
    <a className="w-full h-6.5 bg-gray-600 via-blue-300 to-blue-700 lg:mt-[1rem] text-white overflow-hidden flex justify-center banner-container">
      <a
        className="whitespace-nowrap px-1 banner-text"
        style={{
          transitionProperty: 'none',
          transform: 'translateX(0)',
          transitionDuration: '0s',
        }}
      >
        <span className="inline-block align-middle hover:underline">
          <b>
            Win €20k a month for 30 years with our brand new game Eurodreams!
          </b>{' '}
          Click here to watch our new ad.{' '}
        </span>
      </a>
    </a>
  );
};

export default Banner;
