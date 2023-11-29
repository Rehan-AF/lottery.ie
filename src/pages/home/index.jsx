import HomePageSecThree from '../../components/homePageSecThree';
import HomePageSecTwo from '../../components/homePageSecTwo';
import HomePageTopSection from '../../components/homePageTopSec';

import Template from '../../components/template';

const Home = () => {
  return (
    <div>
      <Template>
        <HomePageTopSection />
      </Template>

      {/* <HomePageSecTwo /> */}
      <Template>
        <HomePageSecThree />
      </Template>
    </div>
  );
};

export default Home;
