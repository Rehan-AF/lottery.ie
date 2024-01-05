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
import { useState } from 'react';
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
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (cardNumber) => {
    setSelectedCard(selectedCard === cardNumber ? null : cardNumber);
    console.log(selectedCard);
  };
  return (
    <div>
      <div className="px-5 rtl">
        <h3 className="text-[22px] font-bold">Select Method</h3>
      </div>
      <div className="flex flex-wrap sm:gap-[0.7rem] md:gap-[1rem] mt-6 mb-6 sm:justify-center md:justify-end sm:pr-0 md:pr-[1rem]">
        {data?.map((val, index) => {
          return (
            <CryptoPaymnetCard
              key={index}
              logo={val.logo}
              title={val.title}
              cardNumber={index}
              onSelect={handleCardSelection}
              isSelected={selectedCard === index}
            />
          );
        })}
      </div>
      <div className="w-full">
        <div className="leading-loose p-[1rem]">
          <form
            className=" rtl p-10 bg-white w-full rounded shadow-xl"
            onSubmit={onSubmit}
          >
            <div className="mt-4">
              <label
                className="block text-sm text-gray-00 px-[1rem] mb-2"
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
                placeholder="Amount"
                aria-label="Name"
              />
            </div>

            <div className="mt-4">
              {selectedCard ? (
                <button
                  className="px-4 py-1 shadow_md text-[#374151] border ease-in-out transition-all border-[#c4dc33] font-bold tracking-wider bg-[#c4dc33] rounded-full"
                  type="submit"
                  // disabled={!selectedCard ? true : false}
                >
                  Continue
                </button>
              ) : (
                <button
                  className="px-4 py-1 text-[#374151] border border-[#374151] ease-in-out transition-all font-bold tracking-wider bg-[#e5e7eb] rounded-full"
                  type="submit"
                  disabled={true}
                >
                  Continue
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CryptoPayments;
