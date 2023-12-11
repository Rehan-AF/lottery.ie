import { useFormik } from 'formik';
import FloatingLabelInput from '../InputField/InputField';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.surName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      surName: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className="p-5 pb-7 flex justify-center">
        <div className="flex">
          <div
            className="w-13 justify-center cursor-default"
            role="button"
            tabIndex="0"
          >
            {/* <div className="-z-1 absolute bg-blue-200 ml-1.5 h-10 w-10 rounded-full"></div> */}
            <div className="h-10 w-10 text-center flex items-center justify-center rounded-full m-auto animate-pop bg-[#2d4550]">
              <span className="text-2xl font-bold text-white">1 </span>
            </div>
            <div className="flex justify-center">
              <p className="text-center leading-none font-bold uppercase pt-2 text-sm text-[#2d4550]">
                Account <br />
                Details
              </p>
            </div>
          </div>
          <hr className="w-6 sm:w-10 md:w-11 mx-3 sm:mx-5 md:mx-6 my-5 h-px bg-[#2d4550]" />
        </div>
        <div className="flex">
          <div
            className="w-13 justify-center cursor-default"
            role="button"
            tabIndex="0"
          >
            <div className="h-10 w-10 text-center flex items-center justify-center rounded-full m-auto bg-gray-300">
              <span className="text-2xl font-bold text-gray-400">2 </span>
            </div>
            <div className="flex justify-center">
              <p className="text-center leading-none font-bold uppercase pt-2 text-sm  text-gray-400">
                User Details
              </p>
            </div>
          </div>
          <hr className="w-6 sm:w-10 md:w-11 mx-3 sm:mx-5 md:mx-6 my-5 h-px bg-[#2d4550]" />
        </div>
        <div className="flex">
          <div
            className="w-13 justify-center cursor-default"
            role="button"
            tabIndex="0"
          >
            <div className="h-10 w-10 text-center flex items-center justify-center rounded-full m-auto bg-gray-300">
              <span className="text-2xl font-bold text-gray-400">3 </span>
            </div>
            <div className="flex justify-center">
              <p className="text-center leading-none font-bold uppercase pt-2 text-sm  text-gray-400">
                Contact Details
              </p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <FloatingLabelInput
          label="Name"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          errors={formik.errors.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
