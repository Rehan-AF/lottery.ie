import { useState, useEffect } from 'react';
import backgroundImage from '../../assets/backgrounds/footerBack.svg';
import './styles.css';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const [lotteryVisible, setLotteryVisible] = useState(true);
  const [infoVisible, setInfoVisible] = useState(true);

  const toggleLotteryVisibility = () => {
    if (window.innerWidth < 1200) {
      setLotteryVisible(!lotteryVisible);
    }
  };

  const toggleInfoVisibility = () => {
    if (window.innerWidth < 1200) {
      setInfoVisible(!infoVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setLotteryVisible(true);
        setInfoVisible(true);
      } else {
        setLotteryVisible(false);
        setInfoVisible(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        <div className=" flex items-center justify-center rtl">
          <p className="pl-[9px] text-[0.75rem] font-bold heght-[1rem] border-r border-white pr-[18px]">
            شانس آنقدرها هم که فکر می کنید تصادفی نیست، قبل از این که بلیط بخت
            آزمایی برنده جکپات شود باید شخصی آن را خریداری کرده باشد. (ورا
            نظریان)
          </p>
        </div>
        <a
          className="sm:hidden md:flex pl-[18px] text-[0.75rem]"
          href="/useful-info/play-responsibly"
        >
          همین حالا تنها با یک بلیط، شانس خودتو محک بزن
        </a>
      </section>
      <section className="sm:flex flex-row-reverse text-right md:hidden py-[12px] px-[16px] bg-[#49636e] text-white items-center justify-start pl-[1rem] ">
        <div className=" self-start mt-[10px] text-[#49636e] text-[12px] font-bold h-[32px] w-[32px] bg-white rounded-full flex justify-center items-center">
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
      <div className="pt-[3rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="flex ">
          <div className="flex flex-row mb-8 lg:flex-row-reverse flex-wrap w-full mx-4 ">
            <div className="w-full  lg:w-1/4">
              <div
                onClick={toggleLotteryVisibility}
                className="flex lg:justify-end border-b lg:border-b-0 border-gray-300 lg:hover:bg-inherit  sm:flex-row-reverse mt-4 lg:mt-0 lg:flex-row"
              >
                <p className="font-bold mx-2 flex  lg:justify-end  w-1/2 tracking-wide cursor-pointer text-gray-700 py-3 sm:justify-end">
                  لوتوایران در یک نگاه
                </p>
                <span className="lg:hidden flex items-center w-1/2 mx-5 sm:justify-start">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.589585 1.30342C0.0670926 1.94531 0.157045 2.89232 0.793881 3.42252L4.9406 6.87489C5.54298 7.3764 6.4602 7.37377 7.05941 6.87489L11.2061 3.42252C11.843 2.89232 11.9329 1.94531 11.4104 1.30342C10.8839 0.656532 9.93347 0.562464 9.29163 1.09683L6.00001 3.83729L2.70838 1.09683C2.06654 0.562464 1.11615 0.656532 0.589585 1.30342Z"
                      fill="#2D4550"
                    ></path>
                  </svg>
                </span>
              </div>
              {lotteryVisible && (
                <ul className="lg:text-end space-y-2 my-3 sm:flex md:flex sm:self-end md:self-end sm:flex-col sm:items-end md:items-end">
                  <li>
                    <Link
                      to="/useful-info/faq"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      سوالات متداول
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      تماس با پشتیبانی
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      وبلاگ لوتوایران
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      درباره لوتوایران
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      شرایط و قوانین
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      دریافت نمایندگی
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      استاندارد و امنیت قرعه کشی
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-full  lg:w-1/4">
              <div
                onClick={toggleInfoVisibility}
                className="flex lg:justify-end border-b lg:border-b-0 border-gray-300 lg:hover:bg-inherit  sm:flex-row-reverse mt-4 lg:mt-0 lg:flex-row"
              >
                <p className="font-bold mx-2 flex lg:justify-end  w-1/2 tracking-wide cursor-pointer text-gray-700 py-3 sm:justify-end ">
                  لوتوهای فعال
                </p>
                <span className="lg:hidden flex items-center w-1/2 mx-5 sm:justify-start">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.589585 1.30342C0.0670926 1.94531 0.157045 2.89232 0.793881 3.42252L4.9406 6.87489C5.54298 7.3764 6.4602 7.37377 7.05941 6.87489L11.2061 3.42252C11.843 2.89232 11.9329 1.94531 11.4104 1.30342C10.8839 0.656532 9.93347 0.562464 9.29163 1.09683L6.00001 3.83729L2.70838 1.09683C2.06654 0.562464 1.11615 0.656532 0.589585 1.30342Z"
                      fill="#2D4550"
                    ></path>
                  </svg>
                </span>
              </div>
              {infoVisible && (
                <ul className="lg:text-end space-y-2 my-3 sm:flex md:flex sm:self-end md:self-end sm:flex-col sm:items-end md:items-end">
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      میلیونر
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      مگاسنا
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      لوتوفسیل
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      کوئینا
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      لوتومانیا
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      دوپلاسنا
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      سوپرست
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-full   mt-4  lg:mt-0  lg:w-1/4">
              <div className="py-3 mx-2">
                <p className="lg:text-end font-bold tracking-wide text-gray-700 mb-4 sm:flex sm:justify-end">
                  شبکه های اجتماعی
                </p>
                <div className="flex flex-row lg:gap-[1rem] lg:justify-end sm:flex sm:justify-end">
                  <div className="mr-4">
                    <a href="/" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        version="1.1"
                      >
                        <title>telegram</title>
                        <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="/" className="">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5444 1.9566C12.0644 1.9566 12.3695 1.9566 13.3985 2.00892C13.9914 2.00892 14.5843 2.11355 15.1424 2.3141C15.962 2.66289 16.616 3.3343 16.9386 4.16266C17.1392 4.72071 17.2438 5.31364 17.2438 5.90658C17.2961 6.93549 17.2961 7.18836 17.2961 9.76064C17.2961 12.3329 17.2961 12.5858 17.2438 13.6147C17.2438 14.2076 17.1392 14.8006 16.9386 15.3586C16.6247 16.187 15.9707 16.841 15.1424 17.1549C14.5843 17.3554 13.9914 17.46 13.3985 17.46C12.3695 17.5124 12.1167 17.5124 9.5444 17.5124C6.97212 17.5124 6.71925 17.5124 5.69034 17.46C5.0974 17.46 4.50447 17.3554 3.94642 17.1549C3.11806 16.841 2.46409 16.187 2.15018 15.3586C1.94963 14.8006 1.845 14.2076 1.845 13.6147C1.78396 12.5945 1.78396 12.3329 1.78396 9.76936C1.78396 7.2058 1.78396 6.94421 1.83628 5.9153C1.83628 5.32236 1.94091 4.72943 2.14146 4.17138C2.45537 3.34302 3.10934 2.68033 3.9377 2.36642C4.50447 2.17459 5.08868 2.05252 5.68162 2.00892C6.71925 2.00892 7.02443 1.9566 9.5444 1.9566ZM9.5444 0.264999C6.97212 0.264999 6.61461 0.264999 5.63802 0.317317C4.84454 0.308597 4.05977 0.46555 3.32733 0.779455C2.03683 1.25031 1.02535 2.26179 0.554495 3.55229C0.292907 4.30217 0.144674 5.07822 0.0923566 5.86298C0.0400391 6.83957 0.0400391 7.19708 0.0400391 9.76936C0.0400391 12.3416 0.0400391 12.6991 0.0923566 13.6757C0.0923566 14.4692 0.249309 15.254 0.554495 15.9864C1.05151 17.2508 2.06299 18.2535 3.32733 18.7505C4.07721 19.0034 4.85326 19.1604 5.63802 19.2127C6.66693 19.265 6.97212 19.265 9.5444 19.265C12.1167 19.265 12.4742 19.265 13.4508 19.2127C14.2443 19.2127 15.029 19.0557 15.7615 18.7505C17.0258 18.2535 18.0286 17.2508 18.5343 15.9777C18.7872 15.2278 18.9441 14.4518 18.9964 13.667C19.0488 12.6381 19.0488 12.3329 19.0488 9.76064C19.0488 7.18836 19.0488 6.83085 18.9964 5.85426C18.9964 5.06078 18.8395 4.27601 18.5343 3.54357C18.0373 2.27051 17.0345 1.26775 15.7615 0.770736C15.0116 0.517868 14.2355 0.360915 13.4508 0.308597C12.4655 0.264999 12.108 0.264999 9.5444 0.264999ZM9.5444 4.88639C6.85004 4.88639 4.66143 7.075 4.66143 9.76936C4.66143 12.4637 6.85004 14.6523 9.5444 14.6523C12.2388 14.6523 14.4274 12.4637 14.4274 9.76936C14.4099 7.075 12.2388 4.90382 9.5444 4.88639ZM9.5444 12.952C7.78304 12.952 6.36175 11.5307 6.35303 9.76936C6.34431 8.008 7.77432 6.58671 9.53568 6.57799C11.297 6.56927 12.7183 7.99928 12.7271 9.76064V9.76936C12.7183 11.522 11.297 12.9433 9.5444 12.952ZM15.7615 4.67711C15.7615 5.30493 15.2557 5.81066 14.6279 5.81066C14.0001 5.81066 13.4944 5.30493 13.4944 4.67711C13.4944 4.0493 14.0001 3.54357 14.6279 3.54357C15.247 3.55229 15.7528 4.05802 15.7615 4.67711Z"
                          fill="#2D4550"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full   mt-4  lg:mt-0  lg:w-1/4"></div>
              <div className="py-3 mx-2">
                <p className="lg:text-end font-bold tracking-wide text-gray-700 mb-5 sm:flex sm:justify-end">
                  راهنمای شرکت کنندگان
                </p>
                <ul className="lg:text-end space-y-2 my-3 sm:flex md:flex sm:self-end md:self-end sm:flex-col sm:items-end md:items-end">
                  <li>
                    <a
                      href="/"
                      className=" text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      نحوه مشاهده برنامه زنده
                    </a>
                  </li>
                </ul>
                <ul className="lg:text-end space-y-2 my-3 sm:flex md:flex sm:self-end md:self-end sm:flex-col sm:items-end md:items-end">
                  <li>
                    <a
                      href="/"
                      className=" text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      نحوه شرکت در قرعه کشی ها
                    </a>
                  </li>
                </ul>
                <ul className="lg:text-end space-y-2 my-3 sm:flex md:flex sm:self-end md:self-end sm:flex-col sm:items-end md:items-end">
                  <li>
                    <Link
                      to="/useful-info/how-to-claim"
                      className=" text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      نحوه دریافت جایزه
                    </Link>
                  </li>
                </ul>
                <ul className="lg:text-end space-y-2 my-3 sm:flex md:flex sm:self-end md:self-end sm:flex-col sm:items-end md:items-end">
                  <li>
                    <a
                      href="/"
                      className=" text-[14px] text-[#49636e] transition-colors duration-300 md:text-[15.75px] font-extralight hover:text-deep-purple-accent-200"
                    >
                      نتایج لوتوها
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:py-0 py-4 mx-2 lg:mx-0 lg:order-3 mt-4 lg:mt-0  lg:w-1/4">
              <div className="flex flex-row-reverse sm:justify-center sm:items-center gap-[1rem]">
                <span className="text-base py-3 font-bold tracking-wide text-gray-700">
                  نیاز به پشتیبانی دارید؟
                </span>
                <form className="flex flex-col items-center  md:flex-row">
                  <button className="h-8 px-[18px] rounded-full py-[4.5px] font-bold text-[13.5px] ms-[18px] bg-[#c4dc33] active:bg-[#b1cc10] tracking-wide text-gray-700 transition duration-200  hover:shadow-lg shadow-md focus:shadow-outline focus:outline-none">
                    تماس با ما
                  </button>
                </form>
              </div>
              <div className="flex  md:border-t-0 border-t border-gray-300 py-4 lg:w-full items-start sm:flex-row-reverse lg:flex-col lg:items-end ]">
                <div className="svg mx-2 md:mx-0">
                  <svg
                    width="47"
                    height="45"
                    viewBox="0 0 47 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0696 16.5701C15.545 16.5492 17.1222 18.7053 17.1222 21.0314C17.1222 24.2011 15.1567 25.9141 11.2423 25.9141C10.528 25.9141 9.92332 25.8723 9.51275 25.8505V30.0148C9.51275 30.0148 8.51791 30.29 7.48127 30.29C6.33502 30.29 5.75168 29.9104 5.64393 29.3391C5.57984 28.7896 5.55754 27.0131 5.55754 24.1385C5.55754 22.2148 5.57984 19.3193 5.57984 19.3193C5.57984 18.8116 5.31975 18.4946 4.17443 18.6C4.17443 17.4165 5.16834 16.571 7.17845 16.571H11.0696V16.5701ZM9.51275 18.9379V23.5672C10.0106 23.609 10.4853 23.6308 11.2637 23.6308C12.7564 23.6308 13.5125 23.0604 13.5125 21.5382C13.5125 19.699 11.8907 18.7689 9.51275 18.9379ZM23.4582 18.4728L23.4368 27.7733H24.7345C27.0037 27.7733 28.6906 27.3927 29.1875 26.9068C29.4253 27.1602 29.4904 27.4563 29.4904 27.8577C29.4904 29.1892 28.15 30.2891 24.388 30.2891C20.195 30.2891 19.7398 30.0993 19.567 29.2328C19.502 28.6833 19.4797 27.0131 19.4797 24.1385V19.3193C19.4797 18.8116 19.2206 18.4946 18.0752 18.6C18.0752 17.4165 19.0478 16.4229 21.0802 16.4229C22.6798 16.422 23.4582 17.0142 23.4582 18.4728ZM35.869 27.964C36.6465 27.964 37.1453 27.8577 37.5336 27.6888C37.6637 27.8577 37.7714 28.2383 37.7714 28.5344C37.7714 29.4644 37.1658 30.2673 35.1557 30.2673L30.4425 30.2464C30.031 29.2319 30.5502 28.1747 31.9343 28.0267C31.9343 28.0267 31.912 25.4264 31.912 23.8415L31.9343 18.8743C31.2859 18.8743 30.7016 18.9587 30.4648 19.085C30.2706 18.8943 30.162 18.5355 30.162 18.1758C30.162 17.1822 31.1345 16.5691 32.5613 16.5691H35.4575C36.3233 16.5691 37.3608 16.5265 37.7064 16.2949C37.8792 16.5274 37.9228 16.7599 37.9228 17.0769C37.9228 18.0705 37.1453 18.8525 35.869 18.8525V27.964ZM46.0227 22.5C46.0227 34.9257 35.7195 45 23.0114 45C10.3014 45 0 34.9257 0 22.5C0 21.342 0.0891735 20.2058 0.262876 19.0959C0.191351 19.7798 0.156054 20.4755 0.156054 21.1785C0.156054 32.6179 9.64001 41.8902 21.3394 41.8902C33.0387 41.8902 42.5227 32.6179 42.5227 21.1785C42.5227 9.73913 33.0387 0.465022 21.3394 0.465022C19.0887 0.465022 16.9225 0.810156 14.8892 1.44684C17.4148 0.514067 20.1513 0 23.0123 0C35.7195 0 46.0227 10.0734 46.0227 22.5Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="6.39495"
                        y1="10.7819"
                        x2="41.1297"
                        y2="36.4027"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.1684" stopColor="#BED630" />
                        <stop offset="0.215" stopColor="#AFD233" />
                        <stop offset="0.3053" stopColor="#86C939" />
                        <stop offset="0.4288" stopColor="#46B944" />
                        <stop offset="0.551" stopColor="#00A84F" />
                        <stop offset="0.8673" stopColor="#006835" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="para flex flex-col rtl">
                  <p className="text-end md:mt-4 text-[12px] mx-2 md:text-[13.5px] text-[#49636e] right leading-[2]">
                    لوتوایران اولین برگزار کننده لوتوهای بین المللی در ایران با
                    نمایندگی لاتاری های رسمی دنیا.
                    <br /> با انتخاب گسترده ای از لاتاری های بین المللی، قرعه
                    کشی دولتی ایمن و تجربه کاربرپسند شانس خود را برای رسیدن به
                    رویاهایتان محک بزنید.
                  </p>
                  <a
                    href="/"
                    className="text-[13.5px] mx-2  text-[#49636e] mt-2 underline text-end"
                  >
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-5 flex-col md:flex-row pb-[1rem] border-t border-[#1222282c] mr-4">
          <div className="flex px-2  w-full items-center mt-4 space-x-4 sm:mt-0 justify-center lg:justify-end">
            <h6 className="text-[13.5px] text-[#49636e] mt-2">
              &copy;2023 تمامی حقوق مادی و معنوی این وب سایت به شرکت لوتوایران
              تعلق دارد.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
