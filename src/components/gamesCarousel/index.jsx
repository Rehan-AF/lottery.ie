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

const data = [
  {
    logo: gameLogo_1,
    background: backgroundImage_1,
    date: 'شنبه ساعت ۱۸:۰۰',
    amount: '۱۲۰ میلیارد تومان',
    playFor: '۷۰',
    animationDuration: 0.2,
  },
  {
    logo: gameLogo_2,
    background: 'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
    gradient: true,
    date: 'Saturday, 12:30am',
    amount: '200 Millions',
    playFor: '2.50',
    animationDuration: 0.26,
  },
  {
    logo: gameLogo_3,
    background: backgroundImage_3,
    date: 'Tomorrow, 12:30am',
    amount: '20,000',
    playFor: '2.50',
    animationDuration: 0.32,
  },
  {
    logo: gameLogo_4,
    background: backgroundImage_4,
    date: 'Only €1 per line',
    amount: '1 Million',
    playFor: '1',
    animationDuration: 0.38,
  },
  {
    logo: gameLogo_5,
    background: backgroundImage_5,
    date: 'Sunday, 12:45am',
    amount: '125,000',
    playFor: '1',
    animationDuration: 0.44,
  },
  {
    logo: gameLogo_6,
    background: backgroundImage_6,
    date: '32 days to go!',
    amount: '1 Million',
    playFor: '25',
    animationDuration: 0.5,
  },
  {
    logo: gameLogo_7,
    background: backgroundImage_7,
    date: 'Sunday, 12:45am',
    amount: '125,000',
    playFor: '1',
    animationDuration: 0.55,
  },
  {
    logo: gameLogo_8,
    background: backgroundImage_8,
    date: '32 days to go!',
    amount: '1 Million',
    playFor: '25',
    animationDuration: 0.6,
  },
];

const ResultsCarousel = () => {
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
                <GamesCard
                  logo={val.logo}
                  background={val.background}
                  date={val.date}
                  amount={val.amount}
                  playFor={val.playFor}
                  gradient={val.gradient}
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

export default ResultsCarousel;
