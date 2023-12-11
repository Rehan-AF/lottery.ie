import './styles.css';
import backgroundImage from '../../assets/backgrounds/footerBack.svg';
const SignFooter = () => {
  return (

<div
style={{
  backgroundImage: `url("${backgroundImage}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
}}
>

  <section className="sm:hidden md:flex bg-[#49636e] text-white items-center justify-center md:h-[63px]">
        <div className=" flex items-center justify-center">
          <div className=" text-[#49636e] font-bold h-[36px] sm:w-[42px] md:w-[36px] bg-white rounded-full flex justify-center items-center">
            18+
          </div>
          <p className="pl-[9px] text-[0.75rem] font-bold heght-[1rem] border-r border-white pr-[18px]">
            Play responsibly, Play for fun. National Lottery funds Good Causes
            around Ireland.
          </p>
        </div>
        <a
          className="sm:hidden md:flex pl-[18px] text-[0.75rem]"
          href="/useful-info/play-responsibly"
        >
          Responsible play information
        </a>
      </section>
      <section className="sm:flex flex-row-reverse text-right md:hidden py-[12px] px-[16px] bg-[#49636e] text-white items-center justify-start pl-[1rem] ">
        <div className=" self-start mt-[10px] text-[#49636e] text-[12px] font-bold h-[32px] w-[44px] bg-white rounded-full flex justify-center items-center">
          18+
        </div>
        <div className=" flex flex-col justify-center">
          <p className="pl-[9px] text-[0.75rem] font-bold heght-[1rem]  pr-[18px]">
            Play responsibly, Play for fun. National Lottery funds Good Causes
            around Ireland.
          </p>
          <a
            className="flex justify-end pr-[18px] text-[12px] underline"
            href="/useful-info/play-responsibly"
          >
            Responsible play information
          </a>
        </div>
      </section>

    <div id="main-footer" className="styles_footer__UG76L max-w-[1200px] m-auto px-4 md:pt-[2.5rem]">
      <div className="styles_footer-body__NVka8 styles_footer-mini-body__qKLyM">
        <p className="styles_footer-mini__paragraph__NrAp5 text-gray-700 text-[14px] my-6">
          We are committed to operating the National Lottery in a socially
          responsible way. Our aim is to provide exciting and engaging lottery
          games that bring fun and entertainment to everyone, while ensuring as
          far as possible that individuals play within their means and that
          vulnerable and persons less than 18 years of age are protected.
        </p>
        <hr className="topSec_hr" />
      </div>
      <div className='xl:hidden mb-28'>

      <ul role="navigation" className="md:flex  ">
          <li role="none" className='pb-2 pr-7'>
            <a href="/useful-info/cookies" className='underline font-normal text-gray-700 text-[14px]   '>Cookie Policy</a>
          </li>
          <li role="none" className='pb-2 pr-7'>
            <a href="/useful-info/privacy" className='underline  font-normal text-gray-700 text-[14px]  '>Data Privacy Statement</a>
          </li>
          <li role="none" className='pb-2 pr-7'>
            <a href="/useful-info/terms-conditions" className='underline  font-normal text-gray-700 text-[14px]  '>Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
      <div className="styles_section__bottom__p0DFq flex justify-between mt-12 ">
      <p className="styles_copyright__uerFS  text-gray-700 text-[14px]">©2023 National Lottery</p>
      
        <ul role="navigation" className=" hidden lg:flex justify-between">
          <li role="none">
            <a href="/useful-info/cookies" className='underline px-6  text-gray-700 text-[14px]'>Cookie Policy</a>
          </li>
          <li role="none">
            <a href="/useful-info/privacy" className='underline px-6  text-gray-700 text-[14px]'>Data Privacy Statement</a>
          </li>
          <li role="none">
            <a href="/useful-info/terms-conditions" className='underline px-6  text-gray-700 text-[14px]'>Terms &amp; Conditions</a>
          </li>
        </ul>
        <ul role="navigation" className="styles_section__list-languages__9HVsm flex justify-between pb-2">
          <li role="none">
            <button className=' border-r-2 px-2 text-gray-700 text-[14px]'>Gaeilge</button>
          </li>
          <li role="none">
            <button className='px-2  text-gray-700 text-[14px]'>English</button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SignFooter;
