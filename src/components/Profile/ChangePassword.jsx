import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import DynamicLabel from '../label/Label';
const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'الزامی است';
  } else if (values.password.length < 8) {
    errors.password = 'کلمه عبور می بایست حداقل ۸ کاراکتر باشد';
  }

  if (!values.Newpassword) {
    errors.Newpassword = 'الزامی است';
  } else if (values.password.length < 8) {
    errors.password = 'کلمه عبور می بایست حداقل ۸ کاراکتر باشد';
  }

  return errors;
};
const ChangePassword = () => {
  const [unlock, setUnlock] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      Newpassword: '',
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
    <div className=" w-full flex flex-col items-center">
      <div className="border-b border-gray-300 h-14 items-center justify-center sm:hidden lg:flex lg:h-24  w-full mb-6">
        <h1 className="font-black text-lg md:text-xl text-[#334A54]">
          تغییر کلمه عبور
        </h1>
      </div>
      <form onSubmit={formik.handleSubmit} className="mt-14">
        <div className="flex flex-col gap-[1rem]">
          <div className="sm:flex flex-col  md:block justify-end items-end">
            <span className=" justify-end font-bold pt-4 pb-1 text-[#334A54] flex item-end">
              رمزعبور فعلی
            </span>
            <DynamicLabel
              label="رمزعبور فعلی"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password}
              touched={formik.touched.password}
            />
          </div>
          <div className="sm:flex flex-col items-end md:block">
            <span className=" justify-end font-bold pt-4 pb-1 text-[#334A54] flex item-end">
              رمز عبور جدید
            </span>
            <DynamicLabel
              id="Newpassword"
              label="رمز عبور جدید"
              type="password"
              name="Newpassword"
              onChange={formik.handleChange}
              value={formik.values.Newpassword}
              errors={formik.errors.Newpassword}
              touched={formik.touched.Newpassword}
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
              <span>تغییر رمز ورود</span>
            </button>
          ) : (
            <button
              id="signInButton"
              disabled
              className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
              style={{ width: '270px' }}
            >
              <span>تغییر رمز ورود</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
