import DepositTypeCard from './DepositTypeCard';
import creditCardLogo from '../../../assets/credit-card-svgrepo-com.svg';
import CryptoLogo from '../../../assets/crypto-wallet-svgrepo-com.svg';
import { Tabs } from 'antd';
import CreditCardPayment from './CreditCardPayment';
import CryptoPayments from './CryptoPayments';
const DepositPage = () => {
  return (
    <div>
      <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
        <h1 className="font-black text-lg md:text-xl text-[#32444e]">
          Deposit
        </h1>
      </div>
      <div className="">
        <div className=" ">
          <Tabs
            defaultActiveKey="2"
            items={[
              {
                label: 'Credit Card',
                key: '1',
                children: <CreditCardPayment />,
              },
              {
                label: 'Crypto Payment',
                key: '2',
                children: <CryptoPayments />,
              },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 px-5 py-5">
        {/* <DepositTypeCard
          logo={creditCardLogo}
          title={'Credit Card'}
          subTitle={'instant'}
          description={'Visa, Visa Debit, Mastercard, and More'}
          link={'/account/deposit-card'}
        />
        <DepositTypeCard
          logo={CryptoLogo}
          title={'Crypto Payment'}
          subTitle={'instant'}
          description={
            'USDT(TRC20), Bitcoin, Bitcoin Cash, Lite coin, Doge coin and More'
          }
          link={'/account/deposit-crypto'}
        /> */}
      </div>
    </div>
  );
};

export default DepositPage;
