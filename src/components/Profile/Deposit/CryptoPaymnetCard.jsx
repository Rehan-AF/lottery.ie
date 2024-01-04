const CryptoPaymnetCard = ({
  logo,
  title,
  cardNumber,
  onSelect,
  isSelected,
}) => {
  const handleClick = () => {
    onSelect(cardNumber);
  };

  return (
    <div className={`rtl flex text-[#32444e] `}>
      <div
        className={` ${
          isSelected
            ? 'bg-[#c3dc338f] ease-in transition-all'
            : 'bg-[#f5f6f9] ease-in transition-all'
        } sm:p-2 sm:pt-3 md:pt-5 md:p-5 rounded-lg shadow_md shadow-md flex flex-col items-center`}
      >
        <img
          src={logo}
          className="sm:w-[80px] sm:h-[40px] md:w-[100px] md:h-[40px]"
        />
        <h3 className="mt-3 font-semibold">{title}</h3>
        <button
          className={`${
            isSelected
              ? 'bg-[#ffff] ease-in transition-all'
              : 'bg-[#dbe0ee] ease-in transition-all'
          } text-[#324792] w-full shadow_md py-2 px-4 sm:mt-2 md:mt-4 rounded-lg text-sm font-semibold `}
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CryptoPaymnetCard;
// #e3a800
