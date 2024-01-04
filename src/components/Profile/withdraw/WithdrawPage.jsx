import { Table } from 'antd';
import NewWithdrawModal from './NewWithdrawModal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const WithdrawPage = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 786 });
  const [opneValue, setOpneValue] = useState();
  return (
    <div>
      <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
        <h1 className="font-black text-lg md:text-xl text-[#32444e]">
          Withdraw
        </h1>
      </div>
      <div className="justify-start rtl pr-[1rem] flex flex-row w-full md:w-auto mt-10">
        <button
          className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 capitalize font-bold  shadow-button hover:shadow-button-hov py-2 px-4 text-gray-700 bg-[#c4dc33] active:bg-[#b1cc10] border-[#b1cc10] "
          data-selected="false"
          onClick={() => setOpneValue(true)}
        >
          <span>withdrawal</span>
        </button>
      </div>
      <NewWithdrawModal opneValue={opneValue} setOpneValue={setOpneValue} />
      <div className="p-[1rem]">
        <Table
          dataSource={modifiedDataSource}
          columns={columns}
          className="rtl"
          scroll={
            !isLargeScreen && {
              x: 700,
            }
          }
        />
      </div>
    </div>
  );
};

export default WithdrawPage;

const Status = (status) => {
  if (status === 'new') {
    return (
      <div className="flex items-center gap-[4px]">
        <div className="w-[10px] h-[10px] bg-[#54b0e9] rounded-full"></div>
        <div className="capitalize text-[#54b0e9]">{status}</div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-[4px]">
        <div className="w-[10px] h-[10px] bg-[#54b0e9] rounded-full"></div>
        <div className="capitalize text-[#54b0e9]">{status}</div>
      </div>
    );
  }
};

const convertTime = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className="w-[125px]">
      {day}/{month}/{year} | {hours}:{minutes}
    </div>
  );
};
let dataSource = [
  {
    key: '1',
    id: 1,
    amountTom: 132,
    amountUSDT: 20,
    balance: 4,
    status: 'new',
    information: 'info',
    dateTime: 1704376951003,
  },
  {
    key: '2',
    id: 6,
    amountTom: 132,
    amountUSDT: 20,
    balance: 89,
    status: 'new',
    information: 'info',
    dateTime: 1704376951003,
  },
  {
    key: '2',
    id: 2,
    amountTom: 132,
    amountUSDT: 20,
    balance: 89,
    status: 'new',
    information: 'info',
    dateTime: 1704376951003,
  },
  {
    key: '2',
    id: 5,
    amountTom: 132,
    amountUSDT: 20,
    balance: 89,
    status: 'new',
    information: 'info',
    dateTime: 1704376951003,
  },
  {
    key: '2',
    id: 89,
    amountTom: 132,
    amountUSDT: 20,
    balance: 89,
    status: 'new',
    information: 'info',
    dateTime: 1704376951003,
  },
];

const modifiedDataSource = dataSource.map((item) => ({
  ...item,
  status: Status(item.status),
  dateTime: convertTime(item.dateTime),
}));
const columns = [
  {
    title: 'ID#',
    dataIndex: 'id',
    key: 'id',
    // fixed: 'left',
    // sorter: true,
  },
  {
    title: 'Amount(TOM)',
    dataIndex: 'amountTom',
    key: 'amountTom',
  },
  {
    title: 'Amount(USDT)',
    dataIndex: 'amountUSDT',
    key: 'amountUSDT',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'Information',
    dataIndex: 'information',
    key: 'information',
  },
  {
    title: 'Date and Time',
    dataIndex: 'dateTime',
    key: 'dateTime',
  },
];
