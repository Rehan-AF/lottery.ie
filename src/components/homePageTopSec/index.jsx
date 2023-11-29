import BigCard from './bigCard';
import SmallCard from './smallCardBlue';
import SmallCardRed from './smallCardRed';
import SmallCardPurple from './smallCardPurple';
import SmallCardStar from './smallCardStar';
import CardGreen from './CardGreen';
import MediumCardBlue from './mediumCardBlue';

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
              <SmallCard />
            </div>
            <div className="w-full xl:w-1/2 ">
              <SmallCardRed />
            </div>
          </div>
          <div className="flex  flex-col xl:flex-row gap-[1rem]">
            <div className="w-full xl:w-1/2 ">
              <SmallCard />
            </div>
            <div className="w-full xl:w-1/2 ">
              <SmallCard />
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
