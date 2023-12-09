import HomePageSecThree from '../../components/homePageSecThree';
import HomePageTopSection from '../../components/homePageTopSec';

import Template from '../../components/template';
import backgroundImage from '../../assets/background.png';
const Home = () => {
  return (
    <div>
      <Template>
        <HomePageTopSection />
      </Template>
      <div
        className="flex justify-center pt-[3rem] pb-[2rem]"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <button
          className="self-center flex md:self-center items-center hover:shadow-xl justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-72 p-4 text-gray-700 bg-[#c4dc33]  border-green-400 active:bg-green-400 lg:text-end lg:self-end"
          data-selected="false"
        >
          <span>see all instant win games</span>
        </button>
      </div>
      <Template>
        <HomePageSecThree />
      </Template>
    </div>
  );
};

export default Home;
