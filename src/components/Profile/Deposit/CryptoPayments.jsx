import CryptoPaymnetCard from './CryptoPaymnetCard';
import bitcoinlogo from '../../../assets/coins/bitcoin.svg';
import bitcoincashlogo from '../../../assets/coins/bitcoinCash.svg';
import dogecoin from '../../../assets/coins/dogecoin.svg';
import ethlogo from '../../../assets/coins/eth.svg';
import litecoin from '../../../assets/coins/liteCoin.svg';
import shib from '../../../assets/coins/shib.svg';
import solana from '../../../assets/coins/solana.svg';
import tron from '../../../assets/coins/tron.svg';
import ustd from '../../../assets/coins/ustd.svg';
import xpr from '../../../assets/coins/xpr.svg';
const data = [
  {
    logo: bitcoinlogo,
    title: 'Bitcoin',
  },
  {
    logo: bitcoincashlogo,
    title: 'Bitcoin Cash',
  },
  {
    logo: dogecoin,
    title: 'dogecoin',
  },
  {
    logo: ethlogo,
    title: 'ETH',
  },
  {
    logo: shib,
    title: 'SHIB',
  },
  {
    logo: litecoin,
    title: 'Litecoin',
  },
  {
    logo: solana,
    title: 'Solana',
  },
  {
    logo: tron,
    title: 'TRON',
  },
  {
    logo: ustd,
    title: 'USDT',
  },
  {
    logo: xpr,
    title: 'XPR',
  },
];

const CryptoPayments = () => {
  return (
    <div>
      <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
        <h1 className="font-black text-lg md:text-xl text-[#32444e]">
          Deposit Crypto
        </h1>
      </div>
      <div className="px-5 rtl">
        <h3 className="text-[22px] font-bold">Select Method</h3>
      </div>
      <div className="flex flex-wrap gap-[1rem] mt-6 mb-6 justify-evenly">
        {data?.map((val, index) => {
          return (
            <CryptoPaymnetCard key={index} logo={val.logo} title={val.title} />
          );
        })}
      </div>
    </div>
  );
};

export default CryptoPayments;
