import { useEffect, useState } from 'react';
import DynamicLabel from '../label/Label';
import { useFormik } from 'formik';
const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (!values.Newpassword) {
    errors.Newpassword = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  return errors;
};
const MyDetails = () => {
  const [unlock, setUnlock] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: 'test name',
      surname: 'test surname',
      email: 'testemail@@example.com',
      phoneNumber: '123445567',
      AffiliateCode: '12570',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    if (
      formik.errors.password === undefined &&
      formik.errors.Newpassword === undefined
    ) {
      setUnlock(true);
    } else {
      setUnlock(false);
    }
  }, [formik.errors]);
  return (
    <div>
      <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
        <h1 className="font-black text-lg md:text-xl text-[#32444e]">
          My Details
        </h1>
      </div>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col items-center mt-5"
        >
          <div className="flex flex-col gap-[1rem]">
            <div className="sm:flex flex-col  md:block justify-end items-end">
              <DynamicLabel
                label="Name"
                id="name"
                name="name"
                type="text"
                tooltip
                tooltipText="To update your name please contact us on 01-8891000 from 8am to 9pm Monday to Sunday."
                disable={true}
                onChange={formik.handleChange}
                value={formik.values.name}
                errors={formik.errors.name}
                touched={formik.touched.name}
              />
            </div>
            <div className="sm:flex flex-col items-end md:block">
              <DynamicLabel
                id="surname"
                label="Surname"
                type="text"
                name="surname"
                tooltip
                tooltipText="To update your name please contact us on 01-8891000 from 8am to 9pm Monday to Sunday."
                disable={true}
                onChange={formik.handleChange}
                value={formik.values.surname}
                errors={formik.errors.surname}
                touched={formik.touched.surname}
              />
            </div>
            <div className="text-[#32444e] text-lg mb-3">
              <b>Contact Info</b>
            </div>
            <div className="sm:flex flex-col items-end md:block">
              <DynamicLabel
                id="email"
                label="Email"
                type="email"
                name="email"
                tooltip
                tooltipText="To update your name please contact us on 01-8891000 from 8am to 9pm Monday to Sunday."
                disable={true}
                onChange={formik.handleChange}
                value={formik.values.email}
                errors={formik.errors.email}
                touched={formik.touched.email}
              />
            </div>
            <div className="sm:flex flex-col items-end md:block">
              <DynamicLabel
                id="phoneNumber"
                label="Phone Number"
                type="text"
                name="phoneNumber"
                tooltip
                tooltipText="To update your name please contact us on 01-8891000 from 8am to 9pm Monday to Sunday."
                disable={true}
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                errors={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
              />
            </div>
            <div className="sm:flex flex-col items-end md:block">
              <DynamicLabel
                id="AffiliateCode"
                label="Affiliate Code"
                type="text"
                name="AffiliateCode"
                tooltip
                tooltipText="To update your name please contact us on 01-8891000 from 8am to 9pm Monday to Sunday."
                disable={true}
                onChange={formik.handleChange}
                value={formik.values.AffiliateCode}
                errors={formik.errors.AffiliateCode}
                touched={formik.touched.AffiliateCode}
              />
            </div>
          </div>

          <div className="mx-lg:mx-12 mt-20 mb-6 justify-center flex items-center">
            {formik.values.Newpassword &&
            formik.values.password &&
            unlock === true ? (
              <button
                id="signInButton"
                type="submit"
                className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold  p-4 shadow_md text-[#2c444e] bg-[#c4dd32] border-[#c4dd32] active:bg-[#b4ca39]"
                style={{ width: '270px' }}
              >
                <span>save changes</span>
              </button>
            ) : (
              <button
                id="signInButton"
                disabled
                className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                style={{ width: '270px' }}
              >
                <span>save changes</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyDetails;
