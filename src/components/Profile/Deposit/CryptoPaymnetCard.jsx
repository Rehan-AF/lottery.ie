const CryptoPaymnetCard = ({ logo, title }) => {
  return (
    <div className="rtl flex text-[#32444e]">
      <div className="bg-white p-5 rounded-lg shadow_md shadow-md flex flex-col items-center">
        <img src={logo} className="w-[100px] h-[100px]" />
        <h3 className="mt-3 font-semibold">{title}</h3>
        <button className="bg-[#c4dc33] shadow_md py-2 px-4 mt-4 rounded-full text-sm font-semibold ">
          Payment
        </button>
      </div>
    </div>
  );
};

export default CryptoPaymnetCard;
