import { Table } from 'antd';
// import NewWithdrawModal from './NewWithdrawModal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import banCircle from '../../../assets/banCircle.svg';
import cancleCircle from '../../../assets/cancleCircle.svg';
import checkCircle from '../../../assets/checkCircle.svg';
import { NoRecordComponent } from '../MyTickets';
// NoRecordComponent
const SupportPage = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 786 });
  const [opneValue, setOpneValue] = useState();
  if (modifiedDataSource.length > 0) {
    return (
      <div>
        <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
          <h1 className="font-black text-lg md:text-xl text-[#32444e]">
            تراکنش های مالی
          </h1>
        </div>

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

export default SupportPage;

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

let dataSource = [
  {
    key: '1',
    name: 'John',
    image: 'https://picsum.photos/200',
    message: 'lorem ipsum dolor sit amet tempor invid id in reprehenderit in',
    dateTime: 1704376951003,
  },
  {
    key: '1',
    name: 'Elen',
    image: 'https://picsum.photos/200',
    message: 'lorem ipsum image tempor invid ',
    dateTime: 1704376951003,
  },
  {
    key: '1',
    name: 'Wasi Sirshar',
    image: 'https://picsum.photos/200',
    message: 'random message',
    dateTime: 1704376951003,
  },
  {
    key: '1',
    name: 'John',
    image: 'https://picsum.photos/200',
    message: 'lorem ipsum dolor sit amet tempor invid id in reprehenderit in',
    dateTime: 1704376951003,
  },
  {
    key: '1',
    name: 'Elen',
    image: 'https://picsum.photos/200',
    message: 'lorem ipsum image tempor invid ',
    dateTime: 1704376951003,
  },
  {
    key: '1',
    name: 'Wasi Sirshar',
    image: 'https://picsum.photos/200',
    message: 'random message',
    dateTime: 1704376951003,
  },
];

const modifiedDataSource = dataSource.map((item) => ({
  ...item,

  dateTime: convertTime(item.dateTime),
  support: (
    <div className="flex justify-start items-center gap-[4px]">
      <img src={item.image} className="w-[20px] rounded-full" />
      <div className="font-bold">{item.name}</div>
    </div>
  ),
  message: <div className="font-bold">{item.message}</div>,
}));

const columns = [
  {
    title: '...',
    dataIndex: 'support',
    key: 'support',
  },
  {
    title: '',
    dataIndex: 'message',
    key: 'message',
  },
  {
    title: 'Time and Date',
    dataIndex: 'dateTime',
    key: 'dateTime',
  },
];
