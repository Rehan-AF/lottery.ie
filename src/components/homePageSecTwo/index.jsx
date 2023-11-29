import { useEffect, useState } from 'react';
import background from '../../assets/homePageSecTwo/background.png';
import LargeCard from './largeCard';
import {
  SmallCardFive,
  SmallCardFour,
  SmallCardOne,
  SmallCardSix,
  SmallCardThree,
  SmallCardTwo,
} from './smallCards';
const HomePageSecTwo = () => {
  const [Windowwidth, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [Windowwidth]);
  return (
    <div
      className="pt-[4rem] mt-[4rem]"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="xl:flex xl:justify-center pl-[1rem] xl:pl[0rem] pr-[1rem] xl:pr-[0rem]">
        <div className=" flex flex-col">
          <div className="pb-3 pt-4 ">
            <h3 className="font-black text-3xl">Win up to €250k</h3>
            <h6 className="font-bold text-lg">with our Instant Win Games</h6>
          </div>
          <div className="xl:flex  xl:flex-row w-full">
            <LargeCard />
            <div
              className={`flex xl:max-w-[630px] w-[${Windowwidth}px] overflow-x-scroll overflow-hidden xl:grid xl:grid-cols-3`}
            >
              <SmallCardOne />
              <SmallCardTwo />
              <SmallCardThree />
              <SmallCardFour />
              <SmallCardFive />
              <SmallCardSix />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-t from-white to-transparent mb-[2rem]">
        <div className="w-76 mt-[2rem] ">
          <a
            role="button"
            className="flex items-center justify-center hover:shadow-xl rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov p-4 text-blue-800 bg-[#c4dc33] border-green-400 active:bg-green-400"
            href=""
          >
            <span className="text-gray-700 text-[.75rem] px-5">
              See All Instant Win Games
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecTwo;
