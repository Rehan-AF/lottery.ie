import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.Amount) {
    errors.Amount = 'Required';
  }
  if (!values.WalletAddress) {
    errors.WalletAddress = 'Required';
  }

  return errors;
};

const NewWithdrawModal = ({ opneValue = false, setOpneValue, setUnlock }) => {
  const handleOk = () => {
    setUnlock(true);
    setOpneValue(false);
  };

  const formik = useFormik({
    initialValues: {
      Amount: '',
      WalletAddress: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setOpneValue(false);
    },
  });
  const handleCancel = () => {
    formik.values.Amount = '';
    formik.values.WalletAddress = '';
    setOpneValue(false);
    setUnlock(false);
  };
  return (
    <>
      {opneValue && (
        <div className="modal-container" onClick={handleCancel}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 pb-2">
              <h2 className="text-center font-bold text-[#32444e]">Withdraw</h2>
              <div className="justify-between md:justify-end flex flex-row w-full md:w-auto">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mt-4 rtl">
                    <label
                      className="block text-sm text-gray-00 px-[1rem]"
                      htmlFor="cus_name"
                    >
                      Amount<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full px-[1rem] py-2 text-gray-700 rounded bg-[#f5f9fa] outline-none"
                      id="Amount"
                      name="Amount"
                      type="number"
                      required=""
                      placeholder="Amount"
                      aria-label="Amount"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Amount}
                    />
                    {formik.touched.Amount && formik.errors.Amount ? (
                      <div className="pr-[1rem] text-red-500">
                        {formik.errors.Amount}
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-4 rtl">
                    <label
                      className="block text-sm text-gray-00 px-[1rem]"
                      htmlFor="cus_name"
                    >
                      Amount<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full px-[1rem] py-2 text-gray-700 rounded bg-[#f5f9fa] outline-none"
                      id="WalletAddress"
                      name="WalletAddress"
                      type="text"
                      required=""
                      placeholder="WalletAddress"
                      aria-label="WalletAddress"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.WalletAddress}
                    />
                    {formik.touched.WalletAddress &&
                    formik.errors.WalletAddress ? (
                      <div className="pr-[1rem] text-red-500">
                        {formik.errors.WalletAddress}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex mt-4">
                    <button
                      className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 mr-2 cursor-default p-4 text-gray-400 bg-gray-200 border-gray-400"
                      data-selected="false"
                      onClick={handleCancel}
                    >
                      <span className="text-gray-700">cancle</span>
                    </button>
                    <button
                      className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 shadow-button hover:shadow-button-hov p-4 text-gray-700 bg-[#c4dc33] active:bg-[#b1cc10] border-[#b1cc10] "
                      data-selected="false"
                      type="submit"
                    >
                      <span>Confirm</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NewWithdrawModal;
