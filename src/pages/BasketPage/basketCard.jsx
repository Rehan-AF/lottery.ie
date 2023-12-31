import { Link } from 'react-router-dom';
import background from '../../assets/backgrounds/5_Lotomania.svg';

export const BasketCard = ({
  background,
  logo,
  amount,
  playFor,
  date,
  gradient = false,
  link,
}) => {
  return (
    <div className="md:flex-grow">
      <a
        className="sm:w-[163px] md:w-[281px] md:h-[198px] flex flex-col group rounded-xl md:m-0 px-2 py-3 items-center justify-evenly space-y-2 text-white h-40 min-w-38"
        style={
          gradient === false
            ? { backgroundImage: `url("${background}")` }
            : { background: `${background}` }
        }
      >
        <span>
          <img
            alt=" EuroMillions logo"
            className="h-12 sm:w-[116px] w-26"
            src={logo}
            role="img"
          />
        </span>
        <div className="flex flex-col text-center">
          <p className="text-lg sm:text-[20px] md:text-2xl font-black text-white rtl">
            {amount} تومان
          </p>
          <p className="text-white text-sm xsm:text-base">{date}</p>
        </div>
        <Link to={`/draw-games/${link}`}>
          <button className="flex justify-center cursor-pointer">
            <div className="m-auto rounded-full border border-solid text-center px-3 py-1.5 border-white text-white group-hover:text-gray-700 bg-blue-900 bg-opacity-20 group-hover:shadow-hover group-hover:bg-white">
              <div className="uppercase sm:text-[12px] md:text-sm font-bold leading-none xsm:text-sm">
                <span aria-label="play from €2.50">خرید با  {playFor} هزار تومان </span>
              </div>
            </div>
          </button>
        </Link>
      </a>
    </div>
  );
};
