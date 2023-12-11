import { Link } from 'react-router-dom';
import Logo from '../../assets/smallLogo.svg';
const SignNavbar = () => {
  return (
    <div className="flex items-center px-4 py-6 h-16 shadow-button border-b border-gray-300 md:border-0">
      <div className="flex flex-1 justify-between"></div>
      <div className="flex justify-center flex-1">
        <Link aria-label="National Lottery Logo" to="/">
          <img className="w-32 h-14" src={Logo} alt="National Lottery Logo" />
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <button
          aria-label="Close"
          className="inline-flex flex-col justify-center px-3 text-sm font-bold leading-none lg:mr-5 sm:mr-0"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.73907 2.46994C4.11249 1.84335 3.0966 1.84335 2.47001 2.46994C1.84343 3.09652 1.84343 4.11241 2.47001 4.739L9.73098 12L2.46994 19.261C1.84335 19.8876 1.84335 20.9035 2.46994 21.5301C3.09652 22.1567 4.11241 22.1567 4.739 21.5301L12 14.269L19.261 21.53C19.8876 22.1566 20.9035 22.1566 21.5301 21.53C22.1567 20.9034 22.1567 19.8875 21.5301 19.261L14.2691 12L21.53 4.73904C22.1566 4.11246 22.1566 3.09657 21.53 2.46998C20.9034 1.8434 19.8875 1.8434 19.261 2.46998L12 9.73091L4.73907 2.46994Z"
              fill="#2D4550"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignNavbar;
