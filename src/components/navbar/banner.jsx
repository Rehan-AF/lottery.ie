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
          <b>*****{' '}
            تماشای مراسم قرعه کشی، روزانه ساعت ۲:۳۰ بامداد در کانال رسمی یوتیوب مجموعه بین المللی لاتاری
          </b>{' '}
          *****{' '}
        </span>
      </a>
    </a>
  );
};

export default Banner;
