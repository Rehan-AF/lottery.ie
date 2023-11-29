import HomePageSecThree from '../../components/homePageSecThree';
import HomePageSecTwo from '../../components/homePageSecTwo';
import HomePageTopSection from '../../components/homePageTopSec';

import Template from '../../components/template';

const Home = () => {
  return (
    <div>
      <Template>
        <HomePageTopSection />
        {/* first ad start */}
        <div className="w-full flex justify-center pt-[4rem]">
          <a href="https://lotteryie.page.link/?link=https://dbg-dashboard/euromillions/4&amp;ibi=com.agency.lotto&amp;apn=com.agency.lotto&amp;ifl=https://www.lottery.ie/draw-games/euromillions?utm_source=internal%26utm_medium=%26utm_campaign=euromillions_smjg%26cid=internal::euromillions_smjg&amp;afl=https://www.lottery.ie/draw-games/euromillions?utm_source=internal%26utm_medium=%26utm_campaign=euromillions_smjg%26cid=internal::euromillions_smjg&amp;ofl=https://www.lottery.ie/draw-games/euromillions?utm_source=internal%26utm_medium=%26utm_campaign=euromillions_smjg%26cid=internal::euromillions_smjg">
            <img
              src="https://www.lottery.ie/content/dam/pli/banners/smjg-dec-2023/smjg-dec-23-tap-2-web.gif"
              alt="promo banner"
              className="max-w-full object-contain"
            />
          </a>
        </div>

        {/* first ad end */}
      </Template>

      <HomePageSecTwo />
      <Template>
        {/* second ad start */}
        <div className="w-full flex justify-center">
          <a href="https://christmasbonus.lottery.ie/">
            <img
              src="https://www.lottery.ie/content/dam/pli/scratch-cards/christmas-23/xmas-bonus-draw-entry-web-v2.png"
              alt="promo banner"
              className="max-w-full object-contain"
            />
          </a>
        </div>
        {/* second ad end */}
        <HomePageSecThree />
      </Template>
    </div>
  );
};

export default Home;
