const CreditCardPayment = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="leading-loose flex justify-center items-center">
        <form
          className="rtl max-w-xl m-4 p-10 bg-white w-full rounded shadow-xl"
          onSubmit={onSubmit}
        >
          <p className="text-gray-800 text-lg font-bold">
            Customer information
          </p>
          <div className="mt-4">
            <label
              className="block text-sm text-gray-00 px-[1rem]"
              htmlFor="cus_name"
            >
              Amount<span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-[1rem] py-2 text-gray-700 rounded bg-[#f5f9fa] outline-none"
              id="cus_name"
              name="cus_name"
              type="number"
              required=""
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>

          <div className="mt-4">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardPayment;
