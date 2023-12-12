import { useFormik } from 'formik';
import FloatingLabelInput from '../InputField/InputField';
import { useEffect, useState } from 'react';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.surName) {
    errors.surName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 8) {
    errors.password = 'must be at least 8 characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'password does not match';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'required';
  }
  if (!values.affiliateCode) {
    errors.affiliateCode = 'required';
  }
  if (!values.acceptTermsAndConditions) {
    errors.acceptTermsAndConditions = 'required';
  }

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
      acceptTermsAndConditions: false,
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
    if (
      formik.errors.phoneNumber === undefined &&
      formik.errors.affiliateCode === undefined
    ) {
      setUnlock(2);
    }
    if (formik.errors.acceptTermsAndConditions === undefined) {
      setUnlock(3);
    }
  }, [formik.errors]);
  const handleStep = () => {
    setSteps(2);
  };
  return (
    <div className="sm:bg-white md:bg-[#d6e4ea] pt-[2rem] pb-[2rem]">
      <div className="max-w-[810px] pb-[2rem] bg-white rounded-xl sm:shadow-none md:shadow-md  w-full mr-auto ml-auto flex flex-col items-center justify-center">
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
                  Account <br />
                  Details
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
                    User <br />
                    Details
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
                  label="Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  errors={formik.errors.firstName}
                />
                {formik.errors.firstName ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="Surname"
                  id="surName"
                  name="surName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.surName}
                  errors={formik.errors.surName}
                />
                {formik.errors.surName ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.surName}
                  </div>
                ) : null}
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email}
                />
                {formik.errors.email ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  errors={formik.errors.password}
                />
                {formik.errors.password ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="Confirm Pasword"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  errors={formik.errors.confirmPassword}
                />
                {formik.errors.confirmPassword ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </>
          )}
          {steps === 2 ? (
            <>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  errors={formik.errors.phoneNumber}
                />
                {formik.errors.phoneNumber ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div className="sm:w-full md:w-[378px]">
                <FloatingLabelInput
                  label="Affiliate Code"
                  id="affiliateCode"
                  name="affiliateCode"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.affiliateCode}
                  errors={formik.errors.affiliateCode}
                />
                {formik.errors.affiliateCode ? (
                  <div className="rtl text-end text-red-500">
                    {formik.errors.affiliateCode}
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
          {steps === 3 && (
            <div className="px-4 sm:w-full md:w-[414px]">
              <h3 className="mb-2 font-black text-end rtl text-3xl">
                One last thing!
              </h3>
              <p className="rtl text-end mb-6">
                You need to be a resident of the Republic of Ireland to
                register.
              </p>
              <div className="flex flex-row-reverse rtl cursor-pointer justify-start items-start">
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
          )}

          {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

          <div className="flex flex-col w-72 mt-16 mx-auto">
            {steps === 1 ? (
              unlock === 1 ? (
                <button
                  className="flex items-center justify-center hover:shadow-md rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-700 bg-green-500 border-[#c4dd32]"
                  onClick={handleStep}
                >
                  <span>Continue</span>
                </button>
              ) : (
                <button
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                  data-selected="false"
                >
                  <span>Continue</span>
                </button>
              )
            ) : null}
            {steps === 2 ? (
              unlock === 2 ? (
                <button
                  className="flex items-center hover:shadow-md justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-700 bg-[#c4dd32] border-[#c4dd32]"
                  type="submit"
                  onClick={() => setSteps(3)}
                >
                  <span>Continue</span>
                </button>
              ) : (
                <button
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                >
                  <span>Continue</span>
                </button>
              )
            ) : null}
            {steps === 3 ? (
              unlock === 3 ? (
                <button
                  className="flex items-center hover:shadow-md justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-700 bg-[#c4dd32] border-[#c4dd32]"
                  type="submit"
                >
                  <span>Continue</span>
                </button>
              ) : (
                <button
                  disabled=""
                  className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                >
                  <span>Continue</span>
                </button>
              )
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
