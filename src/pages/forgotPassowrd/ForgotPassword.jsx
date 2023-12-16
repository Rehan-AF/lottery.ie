import FloatingLabelInput from '../../components/InputField/InputField';
import { useFormik } from 'formik';
import '../../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
const ForgotPassword = () => {
  const [unlock, setUnlock] = useState();
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    if (formik.errors.email === undefined) {
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
            Reset password
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
        <div className="flex justify-center">
          <p className=" max-w-[378px] lg:w-[378px] text-[#49636e] mb-3">
            We will send you an email with a link to reset your password. Please
            insert your email and date of birth to confirm your identity.
          </p>
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
              </div>
              <div className="my-[2rem]  lg:mx-12">
                <div className="flex justify-center">
                  {unlock === true ? (
                    <button
                      id="signInButton"
                      type="submit"
                      className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
                      style={{ width: '270px' }}
                    >
                      <span>Send me the LInk</span>
                    </button>
                  ) : (
                    <button
                      id="signInButton"
                      disabled
                      className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                      style={{ width: '270px' }}
                    >
                      <span>Send me the LInk</span>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-4 mb-11">
          <Link to="/auth/sign-in">
            <button
              className="flex justify-center cursor-pointer leading-normal text-base font-bold group-hover:text-blue-prompt items-center"
              role="button"
            >
              <span className="pr-1 pl-2">
                <svg
                  className="w-3 h-3"
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.49589 1.09044C6.2572 0.204412 7.61701 0.0792607 8.53868 0.806206C9.46754 1.53882 9.60261 2.8611 8.83533 3.75409L4.90033 8.33374L8.83533 12.9134C9.60261 13.8064 9.46754 15.1287 8.53868 15.8613C7.61701 16.5882 6.2572 16.4631 5.49589 15.577L0.538668 9.80769C-0.177665 8.974 -0.181445 7.69787 0.538668 6.85979L5.49589 1.09044Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Back to sign in
            </button>
          </Link>
        </div>
        <div className="flex w-full text-[#49636e] items-center justify-center space-x-2 mb-11">
          <p>Need Help?</p>
          <a href="#" className="underline">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
