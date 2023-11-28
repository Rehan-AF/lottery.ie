const Banner = () => {
  return (
    <a
      className="w-full h-6.5 mt-4 bg-gray-600 via-blue-300 to-blue-700 text-white overflow-hidden flex justify-center"
      href="https://www.lottery.ie/how-to-play/eurodreams"
    >
      <a
        className="whitespace-nowrap px-1"
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
