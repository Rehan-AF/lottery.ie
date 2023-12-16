import BigCard from './bigCard';
import SmallCardRed from './smallCardRed';
import CardGreen from './CardGreen';
import MediumCardBlue from './mediumCardBlue';
import backgroundImage2 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage4 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage5 from '../../assets/backgrounds/5_Lotomania.svg';
import backgroundImage7 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage8 from '../../assets/backgrounds/8_Super-Sete.svg';
import logo2 from '../../assets/gameLogos/02.svg';
import logo3 from '../../assets/gameLogos/03.svg';
import logo5 from '../../assets/gameLogos/05.svg';
import logo6 from '../../assets/gameLogos/06.svg';
import logo7 from '../../assets/gameLogos/07.svg';
import logo8 from '../../assets/gameLogos/08.svg';
const HomePageTopSection = () => {
  return (
    <div className="">
      <div className="flex flex-col xl:flex-row gap-[1rem]  ">
        <div className=" w-full xl:w-1/2">
          <BigCard />
        </div>
        <div className="side w-full xl:w-1/2 flex flex-col gap-[1rem]">
          <div className="flex  flex-col xl:flex-row gap-[1rem]">
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardRed /> */}
              <SmallCardRed
                backgroundImage={backgroundImage2}
                logoSrc={logo5}
                playLink="/"
                playLabel="خرید بلیط با ۷۰ هزار تومان"
                drawDay="یکشنبه"
                drawTime="ساعت ۱۸:۰۰"
                jackpotAmount="۱۷"
                estimatedLabel="مبلغ تقریبی*"
                price="میلیارد تومان"
                drew="قرعه کشی بعدی"
              />
            </div>
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardPurple /> */}
              <SmallCardRed
                logoSrc={logo2}
                playLink="/"
                playLabel="خرید بلیط با ۷۰ هزار تومان"
                drawDay="یکشنبه"
                drawTime="ساعت ۱۸:۰۰"
                jackpotAmount="۳۴۸"
                estimatedLabel="مبلغ تقریبی*"
                price="میلیارد تومان"
                drew="قرعه کشی بعدی"
                gradient={true}
              />
            </div>
          </div>
          <div className="flex  flex-col xl:flex-row gap-[1rem]">
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCard /> */}
              <SmallCardRed
                backgroundImage={backgroundImage4}
                logoSrc={logo6}
                playLink="/"
                playLabel="خرید بلیط با ۷۰ هزار تومان"
                drawDay="یکشنبه"
                drawTime="ساعت ۱۸:۰۰"
                jackpotAmount="۴۹"
                estimatedLabel="مبلغ تقریبی*"
                price="میلیارد تومان"
                drew="قرعه کشی بعدی"
              />
            </div>
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardStar /> */}

              <SmallCardRed
                backgroundImage={backgroundImage5}
                logoSrc={logo7}
                playLink="/"
                playLabel="خرید بلیط با ۷۰ هزار تومان"
                drawDay="یکشنبه"
                drawTime="ساعت ۱۸:۰۰"
                jackpotAmount="۸۴۹"
                estimatedLabel="مبلغ تقریبی*"
                price="میلیارد تومان"
                drew="قرعه کشی بعدی"
              />
            </div>
          </div>
        </div>
      </div>
      <CardGreen />
      <div className="flex flex-col xl:flex-row gap-[1rem]">
        <MediumCardBlue backgroundImage={backgroundImage7} logo={logo3} />
        <MediumCardBlue backgroundImage={backgroundImage8} logo={logo8} />
      </div>
      <div className="flex gap-[1rem]"></div>
    </div>
  );
};

export default HomePageTopSection;
