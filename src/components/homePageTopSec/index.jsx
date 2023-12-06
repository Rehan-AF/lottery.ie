import BigCard from './bigCard';
import SmallCard from './smallCardBlue';
import SmallCardRed from './smallCardRed';
import SmallCardPurple from './smallCardPurple';
import SmallCardStar from './smallCardStar';
import CardGreen from './CardGreen';
import MediumCardBlue from './mediumCardBlue';
import backImage from '../../assets/redbg.svg';
import backImg from '../../assets/mediumcardblue.svg';
import yelloBg from '../../assets/results/yellowBg.svg';
import redStartBg from '../../assets/redstars.svg';
import backgroundImage2 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage4 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage5 from '../../assets/backgrounds/5_Lotomania.svg';
import backgroundImage7 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage8 from '../../assets/backgrounds/8_Super-Sete.svg';
import logo2 from '../../assets/gameLogos/02.svg';
import logo3 from '../../assets/gameLogos/03.svg';
import logo4 from '../../assets/gameLogos/04.svg';
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
                playLabel="Play from €4"
                drawDay="Sunday"
                drawTime=", 12:45am"
                jackpotAmount="€200"
                estimatedLabel="*estimated"
                price=" Million*"
                drew="Next draw"
              />
            </div>
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardPurple /> */}
              <SmallCardRed
                logoSrc={logo2}
                playLink="/"
                playLabel="Play from €1"
                drawDay="3 hours"
                drawTime=" to go!"
                jackpotAmount="€1"
                estimatedLabel="*estimated"
                price=" Million*"
                drew="Only €1 per line"
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
                playLabel="Play from €1"
                drawDay="Thursday"
                drawTime="12:45am"
                jackpotAmount="€125,000"
                estimatedLabel="*estimated"
                price=""
                drew="Next draw"
              />
            </div>
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardStar /> */}

              <SmallCardRed
                backgroundImage={backgroundImage5}
                logoSrc={logo7}
                playLink="/"
                playLabel="Play from €4"
                drawDay="Sunday"
                drawTime="12:45am"
                jackpotAmount="€7.2"
                estimatedLabel="*estimated"
                price=" Million*"
                drew="Next draw"
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
