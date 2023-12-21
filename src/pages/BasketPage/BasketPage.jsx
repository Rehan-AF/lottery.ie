import background from '../../assets/basketBack.svg';
import logoBack from '../../assets/basketLogo.svg';
import { BasketCard } from './basketCard';
import backgroundImage_3 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage_4 from '../../assets/backgrounds/6_Mega-Sena.svg';
import backgroundImage_5 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage_6 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage_7 from '../../assets/backgrounds/5_Lotomania.svg';
import gameLogo_2 from '../../assets/gameLogos/02.svg';
import gameLogo_3 from '../../assets/gameLogos/03.svg';
import gameLogo_4 from '../../assets/gameLogos/04.svg';
import gameLogo_5 from '../../assets/gameLogos/05.svg';
import gameLogo_6 from '../../assets/gameLogos/06.svg';
import gameLogo_7 from '../../assets/gameLogos/07.svg';
import Card from './Card';

const data = [
  {
    logo: gameLogo_2,
    background: 'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,
    date: 'Saturday, 12:30am',
    amount: '200 Millions',
    playFor: '2.50',
    animationDuration: 0.26,
    link: 'select',
  },
  {
    logo: gameLogo_3,
    background: backgroundImage_3,
    date: 'Tomorrow, 12:30am',
    amount: '20,000',
    playFor: '2.50',
    animationDuration: 0.32,
    link: 'select',
  },
  {
    logo: gameLogo_4,
    background: backgroundImage_4,
    date: 'Only €1 per line',
    amount: '1 Million',
    playFor: '1',
    animationDuration: 0.38,
    link: 'select',
  },
  {
    logo: gameLogo_5,
    background: backgroundImage_5,
    date: 'Sunday, 12:45am',
    amount: '125,000',
    playFor: '1',
    animationDuration: 0.44,
    link: 'select',
  },
  {
    logo: gameLogo_6,
    background: backgroundImage_6,
    date: '32 days to go!',
    amount: '1 Million',
    playFor: '25',
    animationDuration: 0.5,
    link: 'select',
  },
  {
    logo: gameLogo_7,
    background: backgroundImage_7,
    date: 'Sunday, 12:45am',
    amount: '125,000',
    playFor: '1',
    animationDuration: 0.55,
    link: 'select',
  },
];
const BasketPage = () => {
  return (
    <div>
      <div className="lg:container mx-auto p-4 lg:pl-20  ">
        <div className="whitespace-nowrap w-full  xl:w-[80%] rtl">
          <h1 className="lg:pr-4 text-3xl font-black py-4 mt-5  text-[#4b636e] flex rtl">
            Your Basket
          </h1>
        </div>
      </div>
      <div
        className="bg-[url(../../assets/basketBack.svg)] bg-top bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className="flex justify-center items-center w-full">
          <Card />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center text-center my-3">
            <img src={logoBack} className="" />
            <div className="my-4 flex flex-col items-center text-center">
              <p className="font-black sm:text-[20px] md:text-2xl text-blue-dark text-[#2f4751]">
                Your basket is currently empty!
              </p>
              <p className="sm:text-[14px] md:text-[15.5px] text-[#2f4751]">
                Tap below to play some games
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-[880px] pb-[58px]">
              {data?.map((val, index) => {
                return (
                  <div key={index}>
                    <BasketCard
                      background={val.background}
                      logo={val.logo}
                      amount={val.amount}
                      playFor={val.playFor}
                      date={val.date}
                      gradient={val.gradient}
                      link={val.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="flex-row flex bg-white shadow fixed bottom-0 w-full z-20 py-4 px-4 md:px-7 lg:px-28 rounded-t-lg justify-between lg:justify-end items-center"
           style={{ boxShadow: '0px 0px 10px #80808078' }}>
          <div class="flex justify-between lg:justify-end w-full"
       
          >
            <div class="flex flex-col justify-between lg:mr-24">
              <div class="flex justify-end font-bold ">
                <span class="font-bold text-xl ">
                  <span class="flex flex-col lg:flex-row lg:items-center text-[#2C444E]">
                    Total:{' '}
                    <span class="text-3xl font-black lg:ml-1 text-[#2C444E]">€6.00</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row w-full md:w-auto">
            <button
              class="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-[288px] h-14 shadow-button hover:shadow-button-hov p-6 text-gray-700 bg-[#c4dc33]  active:bg-[#C4DC33]"
              data-selected="false"
            >
              <span className='text-[2C444E]'>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
