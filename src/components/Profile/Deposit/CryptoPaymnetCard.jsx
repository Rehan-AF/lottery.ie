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
            ? 'bg-[#e3a800] ease-in transition-all'
            : 'bg-[#f5f6f9] ease-in transition-all'
        } p-5 rounded-lg shadow_md shadow-md flex flex-col items-center`}
      >
        <img src={logo} className="w-[100px] h-[40px]" />
        <h3 className="mt-3 font-semibold">{title}</h3>
        <button
          className={`${
            isSelected
              ? 'bg-[#ffff] ease-in transition-all'
              : 'bg-[#dbe0ee] ease-in transition-all'
          } text-[#324792] w-full shadow_md py-2 px-4 mt-4 rounded-lg text-sm font-semibold `}
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
