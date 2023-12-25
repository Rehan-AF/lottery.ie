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
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      AffiliateCode: '',
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
      <div className="border-b border-gray-300 flex h-14 items-center w-full justify-center lg:h-24">
        <button
          className="left-2 top-0 bottom-0  flex items-center lg:hidden"
          aria-label="Open Menu"
          role="button"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1219 6.81753C13.6929 6.153 14.7128 6.05914 15.404 6.60435C16.1007 7.15381 16.202 8.14552 15.6265 8.81526L12.6752 12.25L15.6265 15.6847C16.202 16.3545 16.1007 17.3462 15.404 17.8956C14.7128 18.4409 13.6929 18.347 13.1219 17.6825L9.404 13.3555C8.86675 12.7302 8.86392 11.7731 9.404 11.1445L13.1219 6.81753Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C11.6288 21 11.2463 20.9775 10.8863 20.9325C10.2787 20.8537 9.82875 20.3475 9.82875 19.74V18.6825C9.82875 18.57 9.75 18.48 9.6375 18.435C9.44625 18.3675 9.255 18.2888 9.075 18.1988C8.9625 18.1425 8.83875 18.1537 8.76 18.2325L8.02875 18.9637C7.60125 19.3912 6.92625 19.4362 6.465 19.0762C5.8575 18.6037 5.3175 18.0412 4.845 17.4225C4.49625 16.9612 4.5525 16.2975 4.96875 15.87L5.7225 15.1162C5.8125 15.0262 5.80125 14.8912 5.75625 14.8012C5.6775 14.6213 5.61 14.4525 5.5425 14.2612C5.4975 14.1375 5.4075 14.0588 5.295 14.0588H4.26C3.6525 14.0588 3.135 13.5975 3.0675 12.99C3.0225 12.6862 3 12.3375 3 12C3 11.595 3.03375 11.19 3.07875 10.785C3.1575 10.1887 3.675 9.73875 4.27125 9.73875H5.34C5.46375 9.73875 5.55375 9.6375 5.5875 9.5475C5.655 9.37875 5.7225 9.21 5.80125 9.04125C5.84625 8.94 5.835 8.8275 5.7675 8.76L5.025 8.0175C4.5975 7.59 4.5525 6.915 4.9125 6.45375C5.385 5.84625 5.9475 5.30625 6.56625 4.83375C7.0275 4.485 7.69125 4.54125 8.11875 4.9575L8.88375 5.7225C8.9625 5.80125 9.08625 5.79 9.15375 5.75625C9.31125 5.6775 9.48 5.61 9.64875 5.55375C9.75 5.52 9.8175 5.43 9.8175 5.34V4.26C9.8175 3.6525 10.2787 3.14625 10.8863 3.0675C11.6287 2.9775 12.3713 2.9775 13.1138 3.0675C13.7213 3.14625 14.1713 3.6525 14.1713 4.26V5.34C14.1713 5.43 14.2388 5.52 14.34 5.55375C14.5088 5.61 14.6775 5.6775 14.8463 5.75625C14.9138 5.79 15.0375 5.80125 15.1163 5.7225L15.8813 4.9575C16.2975 4.54125 16.9613 4.485 17.4338 4.83375C18.0525 5.30625 18.615 5.84625 19.0875 6.45375C19.4475 6.915 19.4025 7.59 18.975 8.0175L18.2213 8.77125C18.1538 8.83875 18.1425 8.95125 18.1875 9.0525C18.2663 9.22125 18.345 9.39 18.4012 9.55875C18.4462 9.67125 18.5363 9.75 18.6488 9.75H19.7175C20.3138 9.75 20.82 10.2 20.91 10.7963C20.9662 11.19 20.9888 11.6062 20.9888 12.0112C20.9888 12.3487 20.9662 12.6975 20.9325 13.035C20.865 13.6425 20.3475 14.1037 19.74 14.1037H18.705C18.5925 14.1037 18.5025 14.1825 18.4575 14.3062C18.39 14.4862 18.3225 14.6662 18.2438 14.835C18.1988 14.925 18.1875 15.06 18.2775 15.15L19.0312 15.9037C19.4475 16.32 19.5038 16.995 19.155 17.4562C18.6825 18.075 18.1425 18.6375 17.535 19.11C17.0738 19.47 16.3988 19.425 15.9713 18.9975L15.24 18.2662C15.1613 18.1875 15.0375 18.1762 14.925 18.2325C14.745 18.3225 14.5538 18.4012 14.3625 18.4688C14.2388 18.5137 14.1713 18.615 14.1713 18.7162V19.7738C14.1713 20.3813 13.71 20.8875 13.1138 20.9662C12.7538 20.9775 12.3713 21 12 21ZM8.9175 17.2312C9.0975 17.2312 9.28875 17.2762 9.46875 17.355C9.62625 17.4337 9.795 17.5012 9.9525 17.5575C10.4475 17.7375 10.7625 18.1762 10.7625 18.6825V19.74C10.7625 19.875 10.8637 19.9762 10.9988 19.9988C11.6512 20.0775 12.3488 20.0775 12.99 19.9988C13.125 19.9762 13.2263 19.875 13.2263 19.74V18.6825C13.2263 18.1762 13.5413 17.7375 14.0363 17.5575C14.205 17.5012 14.3625 17.4337 14.52 17.355C15.0038 17.13 15.5437 17.22 15.9038 17.58L16.635 18.3113C16.725 18.4012 16.8713 18.4125 16.9613 18.345C17.5013 17.9175 17.9963 17.4225 18.4125 16.86C18.48 16.77 18.4688 16.635 18.3787 16.545L17.625 15.7912C17.2763 15.4425 17.1863 14.9025 17.3888 14.43C17.4563 14.2837 17.5125 14.1262 17.5688 13.9688C17.7375 13.4738 18.1988 13.1362 18.705 13.1362H19.74C19.875 13.1362 19.9875 13.035 19.9988 12.9C20.0325 12.5962 20.055 12.2925 20.055 11.9887C20.055 11.6287 20.0325 11.2575 19.9762 10.9088C19.9538 10.7738 19.8525 10.6725 19.7175 10.6725H18.6488C18.1538 10.6725 17.715 10.3575 17.5238 9.885C17.4675 9.73875 17.4 9.5925 17.3325 9.44625C17.1188 8.985 17.1975 8.445 17.5463 8.09625L18.3 7.3425C18.39 7.2525 18.4013 7.10625 18.3338 7.01625C17.9063 6.47625 17.4113 5.98125 16.8488 5.565C16.7587 5.4975 16.6125 5.52 16.5338 5.59875L15.7688 6.36375C15.42 6.7125 14.9025 6.79125 14.4525 6.58875C14.3063 6.52125 14.1713 6.465 14.025 6.40875C13.5525 6.24 13.2375 5.80125 13.2375 5.30625V4.22625C13.2375 4.09125 13.1363 3.99 13.0013 3.9675C12.3375 3.9225 11.6625 3.9225 10.9988 4.00125C10.8637 4.0125 10.7625 4.125 10.7625 4.26V5.34C10.7625 5.82375 10.4475 6.27375 9.975 6.4425C9.82875 6.49875 9.6825 6.555 9.5475 6.61125C9.08625 6.825 8.56875 6.735 8.22 6.38625L7.455 5.62125C7.365 5.53125 7.23 5.50875 7.14 5.5875C6.58875 6.00375 6.0825 6.49875 5.655 7.03875C5.5875 7.12875 5.59875 7.275 5.68875 7.365L6.4425 8.11875C6.79125 8.4675 6.87 9.0075 6.65625 9.46875C6.58875 9.615 6.52125 9.76125 6.465 9.9075C6.285 10.3913 5.84625 10.695 5.34 10.695H4.27125C4.13625 10.695 4.035 10.7962 4.0125 10.9312C3.9675 11.2913 3.93375 11.6512 3.93375 12.0112C3.93375 12.315 3.95625 12.6187 3.99 12.9225C4.00125 13.0575 4.11375 13.1588 4.24875 13.1588H5.28375C5.79 13.1588 6.24 13.4962 6.42 13.9912C6.47625 14.1487 6.5325 14.3062 6.6 14.4525C6.81375 14.925 6.72375 15.4537 6.36375 15.8138L5.61 16.5675C5.52 16.6575 5.50875 16.8038 5.57625 16.8937C5.9925 17.445 6.4875 17.9512 7.0275 18.3787C7.1175 18.4462 7.26375 18.435 7.35375 18.345L8.085 17.6137C8.31 17.355 8.61375 17.2312 8.9175 17.2312Z"
              fill="currentColor"
            ></path>
            <path
              d="M12.0001 9.09732C13.5976 9.09732 14.9026 10.4023 14.9026 11.9998C14.9026 13.5973 13.5976 14.9023 12.0001 14.9023C10.4026 14.9023 9.0976 13.5973 9.0976 11.9998C9.0976 10.4023 10.4026 9.09732 12.0001 9.09732ZM12.0001 8.16357C9.8851 8.16357 8.16385 9.88482 8.16385 11.9998C8.16385 14.1148 9.8851 15.8361 12.0001 15.8361C14.1151 15.8361 15.8363 14.1148 15.8363 11.9998C15.8363 9.88482 14.1151 8.16357 12.0001 8.16357Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <h1 className="font-black text-lg md:text-xl text-[#32444e]">
          My Details
        </h1>
      </div>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col items-center"
        >
          <div className="flex flex-col gap-[1rem]">
            <div className="sm:flex flex-col  md:block justify-end items-end">
              <span className=" justify-end font-bold pt-4 pb-1 text-[#334A54] flex item-end">
                Enter your current password
              </span>
              <DynamicLabel
                label="Current Password"
                id="password"
                name="password"
                type="text"
                tooltip
                tooltipText="To update your name please contact us on 01-8891000 from 8am to 9pm Monday to Sunday."
                disable={true}
                onChange={formik.handleChange}
                value={formik.values.password}
                errors={formik.errors.password}
                touched={formik.touched.password}
              />
            </div>
            <div className="sm:flex flex-col items-end md:block">
              <span className=" justify-end font-bold pt-4 pb-1 text-[#334A54] flex item-end">
                Enter your new password
              </span>
              <DynamicLabel
                id="Newpassword"
                label="New Password"
                type="text"
                name="Newpassword"
                disable={true}
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
