import BigCard from './bigCard';
import SmallCard from './smallCardBlue';
import SmallCardRed from './smallCardRed';
import SmallCardPurple from './smallCardPurple';
import SmallCardStar from './smallCardStar';
import CardGreen from './CardGreen';
import MediumCardBlue from './mediumCardBlue';
import backImage from '../../assets/redbg.svg';
import backImg from '../../assets/mediumcardblue.svg';
import yelloBg from "../../assets/results/yellowBg.svg"
import redStartBg from "../../assets/redstars.svg"
const HomePageTopSection = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-[1rem]  ">
        <div className=" w-full xl:w-1/2">
          <BigCard />
        </div>
        <div className="side w-full xl:w-1/2 flex flex-col gap-[1rem]">
          <div className="flex  flex-col xl:flex-row gap-[1rem]">
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardRed /> */}
              <SmallCardRed
      backgroundImage={yelloBg}
      logoSrc="https://www.lottery.ie/content/dam/pli/logos/left/white/EuroMillions.svg"
      playLink="/"
      playLabel="Play from €4"
      drawDay="Sunday"
      drawTime=", 12:45am"
      jackpotAmount="€200"
      estimatedLabel="*estimated"
      price=" Million*"
      drew= "Next draw"
    />
            </div>
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardPurple /> */}
              <SmallCardRed
      backgroundImage={backImg}
      logoSrc="	https://www.lottery.ie/content/dam/pli/logos/left/white/DailyMillion.svg"
      playLink="/"
      playLabel="Play from €1"
      drawDay="3 hours"
      drawTime=" to go!"
      jackpotAmount="€1"
      estimatedLabel="*estimated"
      price=" Million*"
      drew= "Only €1 per line"
    />
            </div>
          </div>
          <div className="flex  flex-col xl:flex-row gap-[1rem]">
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCard /> */}
              <SmallCardRed
      backgroundImage={backImage}
      logoSrc="	https://www.lottery.ie/content/dam/pli/logos/left/white/Lotto.svg"
      playLink="/"
      playLabel="Play from €4"
      drawDay="Sunday"
      drawTime="12:45am"
      jackpotAmount="€7.2"
      estimatedLabel="*estimated"
      price=" Million*"
      drew= "Next draw"
    />
            </div>
            <div className="w-full xl:w-1/2 ">
              {/* <SmallCardStar /> */}

              <SmallCardRed
      backgroundImage={redStartBg}
      logoSrc="https://www.lottery.ie/content/dam/pli/logos/left/white/Lotto54321.svg"
      playLink="/"
      playLabel="Play from €1"
      drawDay="Thursday"
      drawTime="12:45am"
      jackpotAmount="€125,000"
      estimatedLabel="*estimated"
      price=""
      drew= "Next draw"
    />
            </div>
          </div>
        </div>
      </div>
      <CardGreen />
      <div className="flex flex-col xl:flex-row gap-[1rem]">
        <MediumCardBlue />
        <MediumCardBlue />
      </div>
      <div className="flex gap-[1rem]"></div>
    </div>
  );
};

export default HomePageTopSection;
