import FloatingLabelInput from '../../components/InputField/InputField';
import backgroundImage from '../../assets/backgrounds/SigninPage.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useEffect, useState } from 'react';
const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
const SignIn = () => {
  const [unlock, setUnlock] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: ['off'],
    },

    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    if (
      formik.errors.email === undefined &&
      formik.errors.password === undefined
    ) {
      setUnlock(true);
    } else {
      setUnlock(false);
    }
  }, [formik.errors]);
  return (
    <div className="sm:bg-white md:bg-[#d2e1e8] sm:px-[0rem] md:px-[2rem] pt-[2rem] pb-[2rem] ">
      <div className=" bg-white rounded-[20px] sm:shadow-none md:shadow-md max-w-[810px] w-full ml-auto mr-auto flex flex-col ">
        <div className="flex items-center justify-center md:justify-between lg:justify-between pb-8 px-6 lg:pt-6 md:pt-6 lg:px-22 md:px-11">
          <svg
            className="hidden h-12 md:block lg:block w-13"
            viewBox="0 0 52 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.4306 39.5352C25.4306 39.5352 27.8217 41.0118 28.8862 41.9485C28.8862 41.9485 32.8616 41.4074 33.9048 41.3861C33.9048 41.3861 33.6435 42.9466 31.5363 45.3816C31.5363 45.3816 32.5355 47.8162 31.9704 50.0003C31.9704 50.0003 29.8632 48.3986 27.668 47.6695C27.668 47.6695 24.4954 48.7313 22.3012 48.8563C22.3012 48.8563 23.3234 47.0454 23.67 46.0682C23.67 46.0682 21.0642 44.9443 20.1504 44.6525L24.8437 43.0303C24.8437 43.0303 25.7998 41.3657 25.4306 39.5352Z"
              fill="#BED62F"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.15589 24.4395C4.15589 24.4395 6.03642 25.685 6.87473 26.4716C6.87473 26.4716 10.0052 26.0182 10.8278 25.9993C10.8278 25.9993 10.6217 27.3148 8.96349 29.3663C8.96349 29.3663 9.74935 31.4168 9.30477 33.2572C9.30477 33.2572 7.6449 31.9063 5.91797 31.2943C5.91797 31.2943 3.41979 32.1879 1.6934 32.2926C1.6934 32.2926 2.49764 30.7682 2.77131 29.9439C2.77131 29.9439 0.717707 28.9971 0 28.7521L3.69454 27.3852C3.69454 27.3852 4.44632 25.9821 4.15589 24.4395Z"
              fill="#BED62F"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.4744 31.3994C29.4744 31.3994 30.237 31.9039 30.5761 32.2226C30.5761 32.2226 31.8427 32.0391 32.1754 32.0308C32.1754 32.0308 32.0921 32.5635 31.4214 33.3933C31.4214 33.3933 31.7389 34.2243 31.5593 34.9682C31.5593 34.9682 30.8887 34.4216 30.1883 34.1738C30.1883 34.1738 29.1774 34.5358 28.4792 34.5774C28.4792 34.5774 28.8048 33.961 28.9146 33.6267C28.9146 33.6267 28.0844 33.2448 27.7939 33.1439L29.2883 32.5912C29.2883 32.5912 29.5928 32.0236 29.4744 31.3994Z"
              fill="#BED62F"
            ></path>
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.0843 0C34.0843 0 39.139 3.34758 41.389 5.46123C41.389 5.46123 49.7954 4.24448 51.9999 4.18905C51.9999 4.18905 51.4536 7.7251 46.9959 13.2318C46.9959 13.2318 49.1063 18.7451 47.9116 23.6831C47.9116 23.6831 43.4593 20.0578 38.8134 18.4153C38.8134 18.4153 32.1026 20.8122 27.4735 21.0905C27.4735 21.0905 29.632 17.0001 30.3637 14.7806C30.3637 14.7806 24.852 12.2462 22.9238 11.5771L32.8452 7.90914C32.8452 7.90914 34.8647 4.14027 34.0843 0Z"
              fill="#BED62F"
            ></path>
          </svg>
          <h3 className="mt-auto text-center text-[#2c444e] font-black text-3xl">
            Sign in to continue
          </h3>
          <svg
            className="hidden w-10 h-13 md:block lg:block"
            viewBox="0 0 42 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.254 20.2432C27.254 20.2432 31.4146 22.9677 33.267 24.6961C33.267 24.6961 40.1846 23.6977 41.9997 23.6585C41.9997 23.6585 41.5452 26.5376 37.8784 31.0305C37.8784 31.0305 39.6171 35.5227 38.6338 39.5526C38.6338 39.5526 34.967 36.5973 31.1473 35.252C31.1473 35.252 25.6267 37.2111 21.8084 37.4419C21.8084 37.4419 23.5872 34.1005 24.1903 32.2974C24.1903 32.2974 19.6561 30.2236 18.0659 29.6852L26.2328 26.6922C26.2328 26.6922 27.8964 23.6208 27.254 20.2432Z"
              fill="#BED62F"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.3827 35.6904C2.3827 35.6904 3.32335 36.3454 3.7403 36.7599C3.7403 36.7599 5.30272 36.521 5.71301 36.5109C5.71301 36.5109 5.6116 37.2026 4.78303 38.28C4.78303 38.28 5.1753 39.3581 4.95381 40.3247C4.95381 40.3247 4.12591 39.6143 3.26197 39.2941C3.26197 39.2941 2.01511 39.7626 1.15385 39.8173C1.15385 39.8173 1.55546 39.0177 1.69088 38.5837C1.69088 38.5837 0.668176 38.0871 0.308594 37.9561L2.15187 37.2378C2.15187 37.2378 2.5288 36.5016 2.3827 35.6904Z"
              fill="#BED62F"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.7894 0.161133C32.7894 0.161133 33.8644 0.816075 34.3409 1.23063C34.3409 1.23063 36.1265 0.991687 36.5954 0.98161C36.5954 0.98161 36.4795 1.67326 35.5326 2.75068C35.5326 2.75068 35.9809 3.82881 35.7278 4.79539C35.7278 4.79539 34.7816 4.08503 33.7942 3.76476C33.7942 3.76476 32.3692 4.23329 31.3849 4.28799C31.3849 4.28799 31.8439 3.48839 31.9987 3.0544C31.9987 3.0544 30.8299 2.55779 30.4189 2.4268L32.5255 1.70852C32.5255 1.70852 32.9563 0.972254 32.7894 0.161133Z"
              fill="#BED62F"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.427 47.2764C13.427 47.2764 15.1697 48.3688 15.9477 49.0572C15.9477 49.0572 18.8489 48.6613 19.61 48.6428C19.61 48.6428 19.4224 49.7958 17.8841 51.5914C17.8841 51.5914 18.6109 53.3899 18.2014 55.0001C18.2014 55.0001 16.6623 53.8183 15.0584 53.2836C15.0584 53.2836 12.7437 54.065 11.1451 54.1552C11.1451 54.1552 11.8895 52.8212 12.1412 52.0974C12.1412 52.0974 10.2406 51.2708 9.57324 51.0522L12.9992 49.8556C12.9992 49.8556 13.697 48.6266 13.427 47.2764Z"
              fill="#BED62F"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col sm:w-full md:w-auto items-stretch self-center ">
          <div className="px-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-[1rem]">
                <div className="sm:flex flex-col items-center md:block">
                  <FloatingLabelInput
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    errors={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </div>
                <div className="sm:flex flex-col items-center md:block">
                  <FloatingLabelInput
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    errors={formik.errors.password}
                    touched={formik.touched.password}
                  />
                </div>
              </div>
              <div className="flex flex-row cursor-pointer sm:w-[295px] md:w-full sm:mr-auto md:mr-o sm:ml-auto md:ml-o md:justify-start items-center mt-6 mb-11">
                <input
                  className="inset-0 w-5 h-5 z-10 cursor-pointer "
                  type="checkbox"
                  id="remember"
                  name="remember"
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="Remember_email"
                  className="w-full text-blue-dark ml-2"
                >
                  Remember my email
                </label>
                {/* <div className="absolute text-white border-2 border-blue-dark flex inset-0 items-center justify-center pointer-events-none z-20 rounded bg-blue-dark">
                    <svg
                      className="w-3 h-2"
                      viewBox="0 0 12 8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.45168 7.5694C4.23824 7.5694 4.02457 7.48799 3.86175 7.32504L0.911413 4.3747C0.585518 4.04881 0.585518 3.52052 0.911413 3.19462C1.23731 2.86873 1.7656 2.86873 2.09149 3.19462L4.45168 5.55481L9.7622 0.244384C10.0881 -0.0814121 10.6165 -0.0815107 10.9422 0.244384C11.2682 0.570279 11.2682 1.09869 10.9422 1.42446L5.04173 7.32504C4.87878 7.48789 4.66522 7.5694 4.45168 7.5694Z"></path>
                    </svg>
                  </div> */}
              </div>
              <div className="mx- lg:mx-12">
                <div className="flex justify-center">
                  {formik.values.email &&
                  formik.values.password &&
                  unlock === true ? (
                    <button
                      id="signInButton"
                      type="submit"
                      className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
                      style={{ width: '270px' }}
                    >
                      <span>Sign in</span>
                    </button>
                  ) : (
                    <button
                      id="signInButton"
                      disabled
                      className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                      style={{ width: '270px' }}
                    >
                      <span>Sign in</span>
                    </button>
                  )}
                </div>
                <div className="flex flex-col sm:items-center mt-6 mb-12 gap-1 text-blue-900 underline">
                  <div className="flex flex-wrap w-full justify-center">
                    <Link className="text-sm" to="/auth/forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="relative inline-flex justify-between px-4 py-6 bg-cover bg-register-here-tablet sm:mx-[16px] md:mx-0 sm:rounded-tl-xl sm:rounded-tr-xl md:rounded-tl-none md:rounded-tr-none sm:rounded-bl-xl sm:rounded-br-xl sm:mb-[10rem] md:mb-[0px]"
          style={{
            background: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p className="w-6/12 sm:text-[16px] md:text-lg font-bold text-white">
            Create an account &amp; start playing!
          </p>
          <div className="mt-auto mb-auto text-center whitespace-pre">
            <Link
              role="link"
              className="flex items-center justify-center rounded-full border sm:text-[12px] md:text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov px-4 py-1 hover:shadow-md text-[#2c444e] bg-white active:bg-blue-lighter-04"
              to="/auth/sign-up"
            >
              <span>Register Here</span>
            </Link>
          </div>
          <svg
            className="absolute sm:w-[40px] md:w-[51px] h-[49px] sm:top-[4rem] md:top-14 sm:right-[-12px] md:-right-4"
            viewBox="0 0 48.84 45.2"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <style>
                {`.prefix__cls-1,.prefix__cls-2{fill:#bed62f;fill-rule:evenodd}.prefix__cls-2{fill:#40606f}`}
              </style>
            </defs>
            <path
              className="prefix__cls-1"
              d="M6.92 3.34a12.72 12.72 0 011.37 1s1.58-.24 2-.25a4.09 4.09 0 01-.94 1.71 3.91 3.91 0 01.18 2 6.76 6.76 0 00-1.71-1 9.52 9.52 0 01-2.13.51 11.58 11.58 0 00.54-1.19s-1-.48-1.4-.61l1.87-.69a2.53 2.53 0 00.22-1.48zM4.31.78a6.63 6.63 0 01.69.51s.79-.12 1-.12a2.08 2.08 0 01-.48.83 2 2 0 01.08 1 3.36 3.36 0 00-.85-.49 5.22 5.22 0 01-1.06.25A5.54 5.54 0 004 2.17s-.51-.24-.69-.3l.92-.35a1.26 1.26 0 00.08-.74zM9.44.32a10 10 0 01.85.64s1-.14 1.24-.15A2.54 2.54 0 0111 1.88a2.28 2.28 0 01.1 1.22 4.45 4.45 0 00-1.1-.62 5.75 5.75 0 01-1.32.32A7.74 7.74 0 009 2.06s-.65-.3-.87-.38l1.17-.43a1.6 1.6 0 00.14-.93zM13.79 2.79a5.51 5.51 0 01.55.41s.64-.09.81-.09a1.65 1.65 0 01-.38.69 1.57 1.57 0 01.07.8 2.63 2.63 0 00-.69-.4 4 4 0 01-.86.2s.16-.31.22-.48c0 0-.42-.2-.57-.25l.75-.28a1 1 0 00.1-.6zM17.86 4.4a4 4 0 01.35.26s.39-.06.5-.06a1.16 1.16 0 01-.24.43.92.92 0 010 .49 1.76 1.76 0 00-.43-.25 2.13 2.13 0 01-.53.13 2.05 2.05 0 00.13-.3l-.31-.1.47-.18a.6.6 0 00.06-.42zM.53 0a3.07 3.07 0 01.34.26s.4-.06.5-.06a1 1 0 01-.23.43 1 1 0 010 .5A1.47 1.47 0 00.75.88 2.48 2.48 0 01.22 1 2.05 2.05 0 00.35.7L0 .55.47.38A.71.71 0 00.53 0zM15 13.1a3.07 3.07 0 01.34.26s.4-.06.5-.06a1 1 0 01-.23.43.92.92 0 010 .49 1.76 1.76 0 00-.43-.25 2.26 2.26 0 01-.54.13 1.77 1.77 0 00.14-.3l-.35-.15.47-.18a.69.69 0 00.1-.37zM2.17 17.78a4 4 0 01.35.26S2.91 18 3 18a1.09 1.09 0 01-.24.43 1 1 0 01.05.5 2 2 0 00-.43-.25 2.46 2.46 0 01-.54.12s.1-.19.14-.3l-.35-.15.46-.17a.62.62 0 00.08-.4zM6.74 16.33a5.9 5.9 0 01.56.42s.65-.09.82-.1a1.61 1.61 0 01-.39.7 1.5 1.5 0 01.07.81 2.78 2.78 0 00-.7-.41 3.76 3.76 0 01-.87.21 5.12 5.12 0 00.23-.49l-.57-.25.76-.28a1.05 1.05 0 00.09-.61zM4.47 8.61A5.9 5.9 0 015 9s.65-.09.82-.1a1.77 1.77 0 01-.39.7 1.62 1.62 0 01.07.81 2.78 2.78 0 00-.7-.41 3.76 3.76 0 01-.87.21 5.12 5.12 0 00.23-.49s-.43-.19-.58-.24l.77-.29a1.05 1.05 0 00.12-.58zM8.46 8.71a24.12 24.12 0 012.29 1.73s2.63-.39 3.32-.4a6.9 6.9 0 01-1.57 2.85 6.36 6.36 0 01.29 3.29 11.25 11.25 0 00-2.85-1.66 16.28 16.28 0 01-3.55.85 18.9 18.9 0 00.9-2s-1.73-.8-2.33-1l3.11-1.16a4.29 4.29 0 00.39-2.5z"
            ></path>
            <path
              className="prefix__cls-1"
              d="M12.51 6.75a13.63 13.63 0 011.37 1s1.57-.23 2-.24a4.1 4.1 0 01-.94 1.7 3.74 3.74 0 01.17 2 6.78 6.78 0 00-1.69-1 9.76 9.76 0 01-2.12.5 12.17 12.17 0 00.54-1.18s-1-.48-1.39-.6l1.85-.69a2.51 2.51 0 00.21-1.49z"
            ></path>
            <path
              className="prefix__cls-1"
              d="M48.48 14.55c-.53-.16-2.36-.29-7-.12s-9.66.33-9.87.29-4-4.2-7-6.85-3.38-2.82-3.42-2.69-1.15 9.58-4 12.19l-15.77 4S12.53 27.25 12.24 28a50 50 0 01-5.87 9.3 61.53 61.53 0 0018.92-2.19s5.09 2.27 13.49 10.13c0 0 2.36-7.06 1.38-11.85s-1.22-5.09-.08-6.14a36 36 0 006.57-8c2.03-3.69 2.35-4.53 1.83-4.7z"
            ></path>
            <path
              className="prefix__cls-2"
              d="M20.27 29a28.79 28.79 0 0014.19.29s-6.22 6.48-14.19-.29zM30.18 18.39a.93.93 0 00-.8.86c0 .46.1 3.28.25 4.62s.44 2.56 1.2 2.7 1.23-.08 1.23-1.51a26.22 26.22 0 00-.55-4.77c-.27-1.21-.7-1.92-1.33-1.9zM22.19 19.05a.92.92 0 00-.8.85c-.05.48.19 2.86.34 4.22s.35 3 1.11 3.11 1.24-.09 1.24-1.52a26.2 26.2 0 00-.56-4.71c-.27-1.27-.7-2-1.33-1.95z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
