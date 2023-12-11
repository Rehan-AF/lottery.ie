const ResultsTable = ({ data }) => {
  return (
    <div className="p-[1rem]">
      <div className="text-center p-2 m-2 bg-message-info-light rounded-md border-1 border-blue-lighter-02">
        <p className="text-sm">
          There was no winner of the Lotto jackpot. In total, over 68,000
          players won prizes in the Lotto and Lotto Plus draws.
        </p>
      </div>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-sm">
            <th className="rtl p-2 pr-3 md:pr-9 min-h-12 w-1/4 text-left">
              Prize
            </th>
            <th className="rtl sm:px-3 p-2 min-h-12 w-1/4 text-right">
              Winners{' '}
            </th>
            <th className="rtl p-2 md:pl-9 min-h-12 w-1/4 text-right">Match</th>
          </tr>
          {data?.map((val, index) => {
            return (
              <tr
                className="min-h-12 border-b-[1px] border-gray-300 "
                key={index}
              >
                <td className="rtl text-left pr-2 py-2 pl-3 md:pr-9 text-sm flex flex-row flex-wrap justify-start">
                  €{val.prize}
                  <div className="ml-1"></div>
                </td>
                <td className="rtl text-right pr-2 text-sm">{val.winners}</td>
                <td className="rtl text-right pr-2 md:pl-9 pl-2 text-sm text-gray-600">
                  {val.match}
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
      <div className="py-2">
        <p className="rtl text-sm leading-normal text-right">
          *Prize is redeemable as per above for retail players and as a cash to
          wallet prize for online players - for full details see Game Rules.
        </p>
      </div>
    </div>
  );
};

export default ResultsTable;
