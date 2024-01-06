import { useFormik } from 'formik';
import FloatingLabelInput from '../../components/InputField/InputField';
import { useEffect, useState } from 'react';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'اجباری';
  }

  if (!values.surName) {
    errors.surName = 'اجباری';
  }
  if (!values.email) {
    errors.email = 'آدرس ایمیل اجباری می باشد';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'آدرس ایمیل نامعتبر است';
  }
  if (!values.password) {
    errors.password = 'اجباری';
  } else if (values.password.length < 8) {
    errors.password = 'رمزعبور می بایستی حداقل شامل ۸ کاراکتر باشد';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'اجباری';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'رمزعبور وارد شده مطابقت ندارد';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'تلفن همراه اجباری می باشد';
  }
  // if (!values.affiliateCode) {
  //   errors.affiliateCode = 'required';
  // }
  // if (!values.acceptTermsAndConditions) {
  //   errors.acceptTermsAndConditions = 'required';
  // }

  return errors;
};
const SignUp = () => {
  const [steps, setSteps] = useState(1);
  const [unlock, setUnlock] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      surName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      affiliateCode: '',
      // acceptTermsAndConditions: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    if (
      formik.errors.firstName === undefined &&
      formik.errors.lastName === undefined &&
      formik.errors.email === undefined &&
      formik.errors.password === undefined &&
      formik.errors.confirmPassword === undefined
    ) {
      setUnlock(1);
    }
    if (formik.errors.phoneNumber === undefined) {
      setUnlock(2);
    }
    // if (formik.errors.acceptTermsAndConditions === undefined) {
    //   setUnlock(3);
    // }
    if (
      formik.errors.firstName ||
      formik.errors.lastName ||
      formik.errors.email ||
      formik.errors.password ||
      formik.errors.confirmPassword
    ) {
      setUnlock(0);
    }
  }, [formik.errors]);

  return (
    <div className="sm:bg-white md:bg-[#d6e4ea] pt-[2rem] pb-[2rem]">
      <div className="max-w-[810px] pb-[2rem] bg-white rounded-xl sm:shadow-none md:shadow-md  w-full mr-auto ml-auto flex flex-col items-center justify-center">
        <div className="flex items-center w-full justify-between lg:justify-between pb-8 px-6 lg:pt-6 md:pt-6 lg:px-22 md:px-11">
          <svg
            className="h-12 w-13"
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
            ثبت نام در لوتوایران
          </h3>
          <svg
            className="w-10 h-13"
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
        <div className="p-5 pb-7 flex justify-center">
          <div className="flex">
            <div
              className="w-13 justify-center cursor-default"
              role="button"
              tabIndex="0"
            >
              {/* <div className="-z-1 absolute bg-blue-200 ml-1.5 h-10 w-10 rounded-full"></div> */}
              {steps === 1 ? (
                <div
                  className={`h-10 w-10 text-center flex items-center justify-center rounded-full m-auto animate-pop ${
                    steps === 1 ? 'bg-[#2d4550]' : 'bg-gray-300'
                  } `}
                >
                  <span
                    className={`text-2xl font-bold ${
                      steps === 1 ? ' text-white' : 'text-gray-400'
                    }`}
                  >
                    1{' '}
                  </span>
                </div>
              ) : null}
              {steps === 2 || steps === 3 ? (
                <div className="h-10 w-10 text-center flex items-center justify-center rounded-full m-auto relative bg-blue-200">
                  <span className="text-2xl font-bold">1 </span>
                  <div className="absolute top-0 right-0">
                    <svg
                      className="animate-pop"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM4.78932 8.63341L5.95295 9.79704L6.83135 10.6754C6.83135 10.6754 7.09933 10.8876 7.36166 10.6754C7.624 10.4633 8.24571 9.79704 8.24571 9.79704L11.2107 6.83202C11.5273 6.51544 11.5273 6.00218 11.2107 5.6856C10.8942 5.36902 10.3811 5.36902 10.0646 5.6856L7.09933 8.65082L5.9355 7.487C5.61893 7.17042 5.1059 7.17042 4.78932 7.487C4.63561 7.64071 4.55183 7.84716 4.55183 8.06009C4.55183 8.27312 4.63551 8.4796 4.78932 8.63341Z"
                        fill="#208337"
                      ></path>
                    </svg>
                  </div>
                </div>
              ) : null}

              <div className="flex justify-center">
                <p
                  className={`text-center leading-none font-bold uppercase pt-2 text-sm ${
                    steps === 1 ? 'text-[#2d4550]' : 'text-gray-400'
                  }`}
                >
                  اطلاعات
                  شخصی
                </p>
              </div>
            </div>
            <hr className="w-6 sm:w-10 md:w-11 mx-3 sm:mx-5 md:mx-6 my-5 h-px bg-[#2d4550]" />
          </div>
          {steps === 1 || steps === 2 ? (
            <div className="flex">
              <div
                className="w-13 justify-center cursor-default"
                role="button"
                tabIndex="0"
              >
                <div
                  className={`h-10 w-10 text-center flex items-center justify-center rounded-full m-auto ${
                    steps === 2 ? 'bg-[#2d4550]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`text-2xl font-bold ${
                      steps === 2 ? ' text-white' : 'text-gray-400'
                    }`}
                  >
                    2{' '}
                  </span>
                </div>
                <div className="flex justify-center">
                  <p
                    className={`text-center leading-none font-bold uppercase pt-2 text-sm  text-gray-400 ${
                      steps === 2 ? 'text-[#2d4550]' : 'text-gray-400'
                    }`}
                  >
                    تأیید تلفن همراه
                    
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {steps === 3 && (
            <div
              className="w-13 justify-center cursor-pointer"
              role="button"
              tabIndex="0"
            >
              <div className="h-10 w-10 text-center flex items-center justify-center rounded-full m-auto relative bg-blue-200">
                <span className="text-2xl font-bold">2 </span>
                <div className="absolute top-0 right-0">
                  <svg
                    className="animate-pop"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM4.78932 8.63341L5.95295 9.79704L6.83135 10.6754C6.83135 10.6754 7.09933 10.8876 7.36166 10.6754C7.624 10.4633 8.24571 9.79704 8.24571 9.79704L11.2107 6.83202C11.5273 6.51544 11.5273 6.00218 11.2107 5.6856C10.8942 5.36902 10.3811 5.36902 10.0646 5.6856L7.09933 8.65082L5.9355 7.487C5.61893 7.17042 5.1059 7.17042 4.78932 7.487C4.63561 7.64071 4.55183 7.84716 4.55183 8.06009C4.55183 8.27312 4.63551 8.4796 4.78932 8.63341Z"
                      fill="#208337"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-center leading-none font-bold uppercase pt-2 text-sm text-gray-400">
                  User <br /> Details
                </p>
              </div>
            </div>
          )}
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-[1rem]"
        >
          {steps === 1 && (
            <>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="نام"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  errors={formik.errors.firstName}
                  touched={formik.touched.firstName}
                />
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="نام خانوادگی"
                  id="surName"
                  name="surName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.surName}
                  errors={formik.errors.surName}
                  touched={formik.touched.surName}
                />
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="آدرس ایمیل"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email}
                  touched={formik.touched.email}
                />
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="رمز عبور"
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  errors={formik.errors.password}
                  touched={formik.touched.password}
                />
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="تأیید رمز عبور"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  errors={formik.errors.confirmPassword}
                  touched={formik.touched.confirmPassword}
                />
              </div>
            </>
          )}
          {steps === 2 ? (
            <>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="تلفن همراه"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  errors={formik.errors.phoneNumber}
                  touched={formik.touched.phoneNumber}
                />
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="کد نمایندگی"
                  id="affiliateCode"
                  name="affiliateCode"
                  type="text"
                  onChange={formik.handleChange}
                  // value={}
                  // errors={}
                  // touched={}
                />
              </div>
            </>
          ) : null}
          {/* {steps === 3 && (
            <div className="px-4 sm:w-[350px] md:w-[414px]">
              <h3 className="mb-2 font-black text-end rtl text-3xl">
                One last thing!
              </h3>
              <p className="rtl text-end mb-6">
                You need to be a resident of the Republic of Ireland to
                register.
              </p>
              <div className="flex flex-row gap-[10px] rtl cursor-pointer justify-start items-start">
                <div className="w-5 h-5 relative-stacking">
                  <input
                    className="inset-0 w-5 h-5 z-10 cursor-pointer"
                    type="checkbox"
                    id="acceptTermsAndConditions"
                    name="acceptTermsAndConditions"
                    onChange={formik.handleChange}
                    value={formik.values.acceptTermsAndConditions}
                  />
                </div>
                <label
                  htmlFor="confirmation"
                  className="cursor-pointer w-full text-blue ml-2"
                >
                  <div className="text-end rtl text-md pl-3">
                    <p>I confirm that:</p>
                    <p className="mb-2">
                      - I am a legal resident of the Republic of Ireland and
                      have no other online account with the National Lottery
                      (multiple accounts may be closed).
                    </p>
                    <div className="mb-2">
                      <p>- I am over 18 years of age</p>
                      <p className="text-gray-600 text-sm pl-2">
                        (Please note, prize payouts over €500 and withdrawals
                        over €200 will require proof of ID)
                      </p>
                    </div>
                    <p>
                      - I hereby confirm that I have read, understood and agree
                      to be bound by the
                      <a
                        className="underline"
                        href="/useful-info/terms-conditions"
                      >
                        Terms &amp; Conditions
                      </a>
                      of Premier Lotteries Ireland. Please read our
                      <a className="underline" href="/useful-info/privacy">
                        Data Privacy Statement
                      </a>
                      here.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )} */}

          {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

          <div className="flex flex-col w-72 mt-16 mx-auto">
            {steps === 1 ? (
              unlock === 1 ? (
                <button
                  id="signInButton"
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
                  onClick={() => setSteps(2)}
                >
                  <span>مرحله بعد</span>
                </button>
              ) : (
                <button
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                  data-selected="false"
                >
                  <span>مرحله بعد</span>
                </button>
              )
            ) : null}
            {steps === 2 ? (
              unlock === 2 ? (
                <button
                  id="signInButton"
                  onClick={() => alert(formik.values)}
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
                >
                  <span>ثبت نام و ورود به سایت</span>
                </button>
              ) : (
                <button
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                >
                  <span>ثبت نام و ورود به سایت</span>
                </button>
              )
            ) : null}
            {/* {steps === 3 ? (
              unlock === 3 ? (
                <button
                  id="signInButton"
                  type="submit"
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
                >
                  <span>Sign up</span>
                </button>
              ) : (
                <button
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                >
                  <span>Continue</span>
                </button>
              )
            ) : null} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
