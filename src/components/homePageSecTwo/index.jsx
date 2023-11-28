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
  return (
    <div
      className="pt-[4rem] mt-[4rem]"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex justify-center">
        <div className=" flex flex-col">
          <div className="pb-3 pt-4 ">
            <h3 className="font-black text-3xl">Win up to €250k</h3>
            <h6 className="font-bold text-lg">with our Instant Win Games</h6>
          </div>
          <div className="flex ">
            <LargeCard />
            <div className="grid grid-cols-3">
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
      <div className="flex justify-center">
        <div className="w-76 ">
          <a
            role="button"
            className="flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold shadow-button hover:shadow-button-hov p-4 text-blue-800 bg-[#c4dc33] border-green-400 active:bg-green-400"
            href="/instant-win-games"
          >
            <span>See All Instant Win Games</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecTwo;
