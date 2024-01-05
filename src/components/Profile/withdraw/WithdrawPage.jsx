import { Table } from 'antd';
import NewWithdrawModal from './NewWithdrawModal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import banCircle from '../../../assets/banCircle.svg';
import cancleCircle from '../../../assets/cancleCircle.svg';
import checkCircle from '../../../assets/checkCircle.svg';
import { NoRecordComponent } from '../MyTickets';
// NoRecordComponent
const WithdrawPage = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 786 });
  const [opneValue, setOpneValue] = useState();
  if (modifiedDataSource.length > 0) {
    return (
      <div>
        <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
          <h1 className="font-black text-lg md:text-xl text-[#32444e]">
            Withdraw
          </h1>
        </div>
        <div className="justify-between gap-[1rem] items-center rtl px-[1rem] flex md:flex-row flex-wrap sm:flex-col-reverse md:items-center sm:items-start w-full md:w-auto mt-10">
          <button
            className={
              'shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov py-3 px-6 text-gray-700 bg-[#c4dc33] active:bg-[#b1cc10] border-[#b1cc10] '
            }
            onClick={() => {
              setOpneValue(true);
            }}
          >
            Withdraw
          </button>
          <div className="glassEffect sm:text-[12px] sm:w-full md:w-auto sm:text-center md:text-start md:text-[16px] p-5 gap-[0.5rem] grid sm:grid-cols-3 md:grid-cols-5">
            <div className="pl-[0.5rem] border-l">
              <h3 className="font-bold mb-2">Payment Name</h3>
              <h3>PerfectMoney</h3>
            </div>
            <div className="pl-[0.5rem] border-l">
              <h3 className="font-bold mb-2">Fee</h3>
              <h3>Free</h3>
            </div>
            <div className="pr-[0.5rem] sm:border-l-0 md:border-l lg:border-l">
              <h3 className="font-bold mb-2">Process Time</h3>
              <h3>0-12 Hours</h3>
            </div>
            <div className="pl-[0.5rem] border-l">
              <h3 className="font-bold mb-2">Min</h3>
              <h3>5000 TOM</h3>
            </div>
            <div>
              <h3 className="font-bold mb-2">Max</h3>
              <h3>2500000 TOM</h3>
            </div>
          </div>
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
  } else {
    return (
      <div className="relative">
        <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
          <h1 className="font-black text-lg md:text-xl text-[#32444e]">
            Withdraw
          </h1>
        </div>
        <div>
          <NoRecordComponent />
        </div>
      </div>
    );
  }
};

export default WithdrawPage;

const Status = (status) => {
  if (status === 'new') {
    return (
      <div className="flex items-center gap-[4px]">
        <div className="w-[10px] h-[10px] bg-[#54b0e9] rounded-full mb-[1px]"></div>
        <div className="capitalize text-[#54b0e9]">{status}</div>
      </div>
    );
  } else if (status === 'cancelled') {
    return (
      <div className="flex items-center gap-[4px] ">
        <img
          className="w-[18px] h-[18px] rounded-full mb-[2px]"
          src={cancleCircle}
        />
        <div className="capitalize text-red-500">{status}</div>
      </div>
    );
  } else if (status === 'rejected') {
    return (
      <div className="flex items-center gap-[4px]">
        <img
          className="w-[15px] h-[15px] rounded-full mb-[3px]"
          src={banCircle}
        />
        <div className="capitalize text-red-700">{status}</div>
      </div>
    );
  } else if (status === 'paided') {
    return (
      <div className="flex items-center gap-[4px]">
        <img
          className="w-[15px] h-[15px] rounded-full mb-[2px]"
          src={checkCircle}
        />
        <div className="capitalize text-green-700">{status}</div>
      </div>
    );
  }
};

const convertTime = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className="w-[125px]">
      {day}/{month}/{year} | {hours}:{minutes}
    </div>
  );
};
const action = (status, item) => {
  if (status === 'new') {
    return (
      <button
        className={`
            bg-red-300 ease-in transition-all
          }text-[#324792]  shadow_md rounded-md py-[2px] px-3 text-[12px] font-[600] `}
        onClick={() => alert(`id: ${item}`)}
      >
        Cancle
      </button>
    );
  } else {
    return null;
  }
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
    status: 'cancelled',
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
    status: 'rejected',
    information: 'info',
    dateTime: 1704376951003,
  },
  {
    key: '2',
    id: 89,
    amountTom: 132,
    amountUSDT: 20,
    balance: 89,
    status: 'paided',
    information: 'info',
    dateTime: 1704376951003,
  },
];

const modifiedDataSource = dataSource.map((item) => ({
  ...item,
  status: Status(item.status),
  dateTime: convertTime(item.dateTime),
  id: <div className="text-[#4199d2] font-bold">{item.id}</div>,
  action: action(item.status, item.id),
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
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];
