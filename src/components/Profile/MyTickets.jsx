import { useRef } from 'react';
import './scroll.css';
import Card from '../../components/Card';
import Starlogo from '../../assets/starLogo.svg';
import backgroundimage1 from '../../assets/backgrounds/EuroMillions.svg';
import backgroundimage2 from '../../assets/backgrounds/card2.svg';
import backgroundimage3 from '../../assets/backgrounds/card3.svg';
import backgroundimage4 from '../../assets/backgrounds/card4.svg';
import backgroundimage6 from '../../assets/backgrounds/card6.svg';
import ReusableCard from './TicketComponent';
const MyTickets = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 550;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 550;
    }
  };
  return (
    <div>
      <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
        <h1 className="font-black text-lg md:text-xl text-[#32444e]">
          بلیط های من
        </h1>
      </div>

      <Card
        LotteryName=""
        Time="20:34"
        date="15/10/1402"
        serialID="1045"
        WinningAmount="766,777,890"
        logoSrc="01"
        color="red"
        TicketID="247444fdb66777"
        status="برنده نشده"
      />
      <NoRecordComponent />
      <div>
        <div className="flex justify-between pb-4 pr-4 text-[#2C444E] rtl">
          <h3 className="font-black text-3xl">خرید بلیط</h3>
        </div>
        <div
          className=" overflow-x-scroll space-x-3 max-w-[936px] w-full flex mx-3  p-2  custom-scrollbar "
          ref={carouselRef}
        >
          {/* 1 */}
          <ReusableCard
            backgroundUrl={backgroundimage1}
            logoSrc="01"
            nextDraw="یکشنبه ۱۲ مهر"
            jackpotAmount="€17"
            buttonText="خرید با ۵۰ هزار تومان"
            DrawText="ساعت ۱۸:۰۰"
            Millions="Million*"
            guaranteedEstamated="مبلغ تقریبی می باشد *"
          />
          {/* 2 */}
          <ReusableCard
            backgroundUrl={backgroundimage2}
            logoSrc="02"
            DrawText="ساعت ۱۸:۰۰"
            nextDraw="یکشنبه ۱۲ مهر"
            jackpotAmount="€1"
            buttonText="خرید با ۵۰ هزار تومان"
            Millions="Million*"
            guaranteedEstamated="مبلغ تقریبی می باشد *"
          />
          {/* 3 */}
          <ReusableCard
            backgroundUrl={backgroundimage3}
            logoSrc="03"
            DrawText="ساعت ۱۸:۰۰"
            nextDraw="یکشنبه ۱۲ مهر"
            jackpotAmount="€10.2"
            buttonText="خرید با ۵۰ هزار تومان"
            Millions="Million*"
            guaranteedEstamated="مبلغ تقریبی می باشد *"
          />
          {/* 4 */}
          <ReusableCard
            backgroundUrl={backgroundimage4}
            logoSrc="04"
            useBackgroundImage={false}
            DrawText="ساعت ۱۸:۰۰"
            nextDraw="یکشنبه ۱۲ مهر"
            jackpotAmount="€20 "
            buttonText="خرید با ۵۰ هزار تومان"
            Millions="Million*"
            guaranteedEstamated="مبلغ تقریبی می باشد *"
          />
          {/* 5 */}

          <ReusableCard
            backgroundUrl={backgroundimage4}
            logoSrc="05"
            DrawText="ساعت ۱۸:۰۰"
            nextDraw="یکشنبه ۱۲ مهر"
            jackpotAmount="€125,000*"
            buttonText="خرید با ۵۰ هزار تومان"
            Millions=""
            guaranteedEstamated="مبلغ تقریبی می باشد *"
          />
          {/* 6 */}
          <ReusableCard
            backgroundUrl={backgroundimage6}
            logoSrc="07"
            DrawText="ساعت ۱۸:۰۰"
            nextDraw="یکشنبه ۱۲ مهر"
            jackpotAmount="€1"
            buttonText="خرید با ۵۰ هزار تومان"
            Millions="Million*"
            guaranteedEstamated="مبلغ تقریبی می باشد *"
          />
        </div>
        <div className="flex justify-end pt-2 mr-4 my-6">
          <button
            className="border border-gray-400 rounded-full w-[45px] h-[45px] flex justify-center items-center mr-3 hover:bg-[#49636E]  hover:text-white shadow-xl font-extrabold text-[#4A626E  text-[1.5rem]"
            data-elem-next-button="true"
            aria-label="previous"
            onClick={scrollLeft}
          >
            {`<`}
          </button>

          <button
            className="border border-gray-400 rounded-full w-[45px] h-[45px] flex justify-center items-center mr-3 hover:bg-[#49636E]  hover:text-white shadow-xl font-extrabold text-[#4A626E  text-[1.5rem]"
            data-elem-next-button="true"
            aria-label="next"
            onClick={scrollRight}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;

export const NoRecordComponent = () => {
  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="mb-2 lg:mb-4">
          <img src={Starlogo} alt="" />
        </div>
        <div className="max-w-xs font-bold text-lg text-[#2C444E]">
        <p className="font-black sm:text-[20px] md:text-2xl text-blue-dark text-[#2f4751]">
                !بلیطی برای نمایش وجود ندارد
              </p>
              <p className="sm:text-[14px] md:text-[15.5px] text-[#2f4751]">
                از گزینه های زیر برای خرید بلیط استفاده کنید
              </p>
        </div>
      </div>
    </div>
  );
};
