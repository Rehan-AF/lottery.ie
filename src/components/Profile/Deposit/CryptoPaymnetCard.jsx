const CryptoPaymnetCard = ({ logo, title }) => {
  return (
    <div className="rtl flex text-[#32444e]">
      <div className="bg-white p-10 rounded-lg shadow_md shadow-md flex flex-col items-center">
        <img src={logo} className="w-[120px] h-[120px]" />
        <h3 className="mt-3 font-semibold">{title}</h3>
        <button className="bg-[#c4dc33] shadow_md py-3 px-8 mt-4 rounded-full text-sm font-semibold ">
          Payment
        </button>
      </div>
    </div>
  );
};

export default CryptoPaymnetCard;
