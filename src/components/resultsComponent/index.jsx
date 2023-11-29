const Results = () => {
  return (
    <div>
      <h1 className="ml-4 lg:ml-0 capitalize mb-6 font-black text-3xl">
        Latest Lotto Results
      </h1>
      <div className="rs-picker-daterange rs-picker-default rs-picker-toggle-wrapper rs-picker-placement-bottom-start">
        <a
          id="date-range-picker"
          aria-label="Filter by date"
          aria-expanded="true"
          aria-controls="date-range-picker"
          role="combobox"
          tabIndex="0"
          className="rs-btn rs-btn-default rs-picker-toggle rs-btn-md"
        >
          <span className="rs-picker-toggle-placeholder">Filter by date</span>
          <span className="rs-picker-toggle-caret"></span>
        </a>
      </div>
    </div>
  );
};

export default Results;
