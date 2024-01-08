const ResultsTable = ({ data }) => {
  return (
    <div className="p-[1rem]">
      <div className="border-[1px] border-blue-100 bg-[#eef0fd] text-[#49636e] text-[13.5px] text-center p-2 bg-message-info-light rounded-md border-1 border-blue-lighter-02">
        <p className="text-sm">
        جزئیات تعداد بلیط های برنده شده به همراه تعداد حدس درست و مبالغ جایزه برای این سری از قرعه کشی
        </p>
      </div>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-sm">
            <th className="rtl p-2 md:pl-9 min-h-12 w-1/4 !text-center">
              تعداد حدس درست
            </th>
            <th className="rtl sm:px-3 p-2 min-h-12 w-1/4 !text-center">
              تعداد برندگان{' '}
            </th>
            <th className="rtl p-2 pl-3 md:pr-9 min-h-12 w-1/4 !text-center">
              <div>مبلغ جایزه</div>
            </th>
          </tr>
          {data?.map((val, index) => {
            return (
              <tr
                className="min-h-12 border-b-[1px] border-gray-300 "
                key={index}
              >
                <td className="rtl !text-center pr-2 md:pl-9 pl-2 text-sm text-gray-600">
                  {val.match}
                </td>

                <td className="rtl !text-center pr-2 text-sm ">
                  {val.winners}
                </td>
                <td className="rtl !text-center pr-2 py-2 pl-3 md:pr-9 text-sm flex flex-row flex-wrap justify-center">
                  €{val.prize}
                  <div className="ml-1"></div>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
      <div className="py-2">
        <p className="rtl text-sm leading-normal text-right">
        * برای دریافت جایزه خود درصورتی که تعداد حدس درست بلیط شما در این جدول می باشد به پنل کاربری و یا نمایندگی های خود مراجعه کنید.
        </p>
      </div>
    </div>
  );
};

export default ResultsTable;
