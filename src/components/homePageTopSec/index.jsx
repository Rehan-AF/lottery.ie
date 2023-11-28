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
      <div className="flex gap-[1rem]">
        <div>
          <BigCard />
        </div>
        <div className="grid grid-cols-2 gap-[1rem]">
          <SmallCard />
          <SmallCardRed />
          <SmallCardPurple />
          <SmallCardStar />
        </div>
      </div>
      <CardGreen />
      <div className="flex gap-[1rem]">
        <MediumCardBlue />
        <MediumCardBlue />
      </div>
    </div>
  );
};

export default HomePageTopSection;
