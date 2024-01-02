import { Link } from 'react-router-dom';

const DepositTypeCard = ({ logo, title, subTitle, description, link }) => {
  return (
    <Link to={link}>
      <div className="rtl bg-[#dde9ee4b] text-[#2c444e] shadow_md shadow-md flex items-center gap-5 py-3 px-5 rounded-lg">
        <div>
          <img src={logo} alt="logo" className="sm:w-[100px] lg:w-[120px]" />
        </div>
        <div>
          <h3 className="text-[28px] font-bold">{title}</h3>
          <h5 className="text-[14px] text-green-500">{subTitle}</h5>
          <h5>{description}</h5>
        </div>
      </div>
    </Link>
  );
};

export default DepositTypeCard;
