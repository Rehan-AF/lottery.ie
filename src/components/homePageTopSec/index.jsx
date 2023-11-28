import BigCard from "./bigCard";
import SmallCard from "./smallCardBlue";
import SmallCardRed from "./smallCardRed";
import SmallCardPurple from "./smallCardPurple";
import SmallCardStar from "./smallCardStar";
import CardGreen from "./CardGreen";
import MediumCardBlue from "./mediumCardBlue";

const HomePageTopSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  ">
        <div className="p-2 w-full md:w-1/2">
          <BigCard />
        </div>
        <div className="side w-full md:w-1/2 ">
        <div className="flex p-2 flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-2">

              <SmallCard />
          </div>
          <div className="w-full md:w-1/2 p-2">

              
              <SmallCardRed />
          </div>
        </div>
        <div className="flex p-2 flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-2">
              <SmallCard />

              
          </div>
          <div className="w-full md:w-1/2 p-2">
              <SmallCard />

              
          </div>
        </div>
        </div>
        
      </div>
      {/* <CardGreen /> */}
      <div className="flex gap-[1rem]">
      </div>
    </div>
  );
};

export default HomePageTopSection;
