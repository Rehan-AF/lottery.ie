import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import backgroundImage_1 from '../../assets/backgrounds/1_Mega-da-virada.svg';
import backgroundImage_3 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage_4 from '../../assets/backgrounds/6_Mega-Sena.svg';
import backgroundImage_5 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage_6 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage_7 from '../../assets/backgrounds/5_Lotomania.svg';
import backgroundImage_8 from '../../assets/backgrounds/8_Super-Sete.svg';
import gameLogo_1 from '../../assets/gameLogos/01.svg';
import gameLogo_2 from '../../assets/gameLogos/02.svg';
import gameLogo_3 from '../../assets/gameLogos/03.svg';
import gameLogo_4 from '../../assets/gameLogos/04.svg';
import gameLogo_5 from '../../assets/gameLogos/05.svg';
import gameLogo_6 from '../../assets/gameLogos/06.svg';
import gameLogo_7 from '../../assets/gameLogos/07.svg';
import gameLogo_8 from '../../assets/gameLogos/08.svg';
import GamesCard from '../navbar/gamesCard';
import ResultsCard from '../navbar/resultsCard';

const data = [
  {
    logo: gameLogo_1,
    gradient: false,
    backgroundImage: backgroundImage_1,
    animationDuration: 0.2,
  },
  {
    logo: gameLogo_2,
    backgroundImage:
      'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,

    animationDuration: 0.26,
  },
  {
    logo: gameLogo_3,
    backgroundImage: backgroundImage_3,
    animationDuration: 0.32,
    gradient: false,
  },
  {
    logo: gameLogo_4,
    gradient: false,
    backgroundImage: backgroundImage_4,
    animationDuration: 0.38,
  },
  {
    logo: gameLogo_5,
    gradient: false,
    backgroundImage: backgroundImage_5,
    animationDuration: 0.44,
  },
  {
    logo: gameLogo_6,
    gradient: false,
    backgroundImage: backgroundImage_6,
    animationDuration: 0.5,
  },
  {
    logo: gameLogo_7,
    gradient: false,
    backgroundImage: backgroundImage_7,
    animationDuration: 0.55,
  },
  {
    logo: gameLogo_8,
    gradient: false,
    backgroundImage: backgroundImage_8,
    animationDuration: 0.6,
  },
];
const GameCarousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    accessibility: true,
    draggable: true,
  };

  return (
    <div className="w-[1100px]">
      <Slider {...settings}>
        {data?.map((val, index) => {
          return (
            <>
              <div key={index} className="flex">
                <ResultsCard
                  logo={val.logo}
                  gradient={val.gradient}
                  backgroundImage={val.backgroundImage}
                  animationDuration={val.animationDuration}
                />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default GameCarousel;
