import BigCard from '../../components/homePageTopSec/bigCard';
import SmallCard from '../../components/homePageTopSec/smallCard';
import Template from '../../components/template';

const Home = () => {
  return (
    <div className="">
      <Template>
        <div className="flex">
          <div>
            <BigCard />
          </div>
          <div>
            <SmallCard />
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Home;
