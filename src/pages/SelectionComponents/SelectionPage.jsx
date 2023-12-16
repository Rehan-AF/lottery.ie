import NumberSelector from './selection';
import background from '../../assets/backgrounds/LottoPlaySlipBack-dsk.svg';
import logo from '../../assets/logo.svg';
import Accorion from '../../components/Accordion';

const SelectionPage = () => {
  return (
    <div>
      <div
        className="h-[369px] relative"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-[75%] m-auto  ">
          <div className="pt-4">
            <button className="flex text-blue-900  hover:text-white bg-yellow-400 rounded-full cursor-pointer items-center   pl-1.5 pr-3 mb-3  z-1">
              <span>
                <svg
                  class="fill-current leading-none"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1219 6.81753C13.6928 6.153 14.7127 6.05914 15.404 6.60435C16.1006 7.15381 16.2019 8.14552 15.6264 8.81526L12.6752 12.25L15.6264 15.6847C16.2019 16.3545 16.1006 17.3462 15.404 17.8956C14.7127 18.4409 13.6928 18.347 13.1219 17.6825L9.40394 13.3555C8.86669 12.7302 8.86386 11.7731 9.40394 11.1445L13.1219 6.81753Z"
                    fill="#2D4550"
                  ></path>
                </svg>
              </span>
              HOME
            </button>
          </div>

          <div>
            <div className="mt-10">
              <img
                src={logo}
                alt="logo"
                className="drop-shadow filter w-25 h-12 w-[200px] lg:h-full mb-3"
              />
              <span className="text-white shadow-text text-2xl md:text-3xl lg:text-4xl font-black">
                €9 Million Jackpot *
              </span>
              <div className="flex justify-between xl:flex-col pb-5 xl:pb-0">
                <p className="text-white shadow-text font-bold lg:mt-2 lg:text-xl">
                  Tomorrow, 12:45am
                </p>
                <p className="text-white shadow-text font-bold lg:py-8 text-sm lg:text-base ">
                  * estimated
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  xl:right-[10%] xl:top-[5%]  sm:w-[100%] xl:max-w-[601px] h-fit  ">
          <div className=" bg-white rounded-lg p-4 md:p-5 lg:p-[2rem]  xl:max-w-[601px] mb-8 mx-4 md:mx-32 xl:mx-[0px]  ">
            <div className="mb-3">
              <span className="text-gray-700 font-bold text-2xl capitalize">
                Play Lotto
              </span>
              <p className="text-blue text-gray-700">
                Enter a minimum of 2 lines below.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="mb-4">
                <NumberSelector />
              </div>
              <div className="mb-4">
                <NumberSelector />
              </div>
              <span className="my-3 text-gray-700 uppercase font-bold text-xl">
                OR
              </span>

              <div className="mb-9">
                <button className="flex relative text-center rounded-full py-3 pt-3 p-[3rem] border border-gray-300 w-full hover:shadow-hover cursor-pointer">
                  <svg
                    class="w-6 h-6"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0941 20.893C16.9661 20.893 20.9157 16.9434 20.9157 12.0714C20.9157 7.19934 16.9661 3.24977 12.0941 3.24977C7.22205 3.24977 3.27247 7.19934 3.27247 12.0714C3.27247 16.9434 7.22205 20.893 12.0941 20.893ZM12.0941 22.1254C17.6468 22.1254 22.1481 17.6241 22.1481 12.0714C22.1481 6.51869 17.6468 2.01733 12.0941 2.01733C6.54139 2.01733 2.04004 6.51869 2.04004 12.0714C2.04004 17.6241 6.54139 22.1254 12.0941 22.1254Z"
                      fill="#2D4550"
                    ></path>
                    <path
                      d="M9.52979 15.0838C9.93454 15.0838 10.316 15.0059 10.6584 14.8736L11.0398 15.3406L11.9739 14.5934L11.647 14.1964C12.0595 13.7372 12.3008 13.1145 12.3008 12.3984C12.3008 10.8182 11.1177 9.71295 9.52979 9.71295C7.9419 9.71295 6.75098 10.8182 6.75098 12.3984C6.75098 13.9785 7.9419 15.0838 9.52979 15.0838ZM9.52979 13.9006C8.66579 13.9006 8.11314 13.239 8.11314 12.3984C8.11314 11.5499 8.66579 10.8961 9.52979 10.8961C10.386 10.8961 10.9387 11.5499 10.9387 12.3984C10.9387 12.6708 10.8764 12.9199 10.7752 13.1378L10.2848 12.5462L9.35854 13.2935L9.83336 13.8695C9.73217 13.8928 9.63098 13.9006 9.52979 13.9006Z"
                      fill="#2D4550"
                    ></path>
                    <path
                      d="M14.4436 14.9904V13.2468H15.7046C16.8722 13.2468 17.5104 12.4606 17.5104 11.5266C17.5104 10.5847 16.8722 9.79857 15.7046 9.79857H13.1048V14.9904H14.4436ZM15.5256 12.0792H14.4436V10.9661H15.5256C15.8836 10.9661 16.1483 11.1685 16.1483 11.5266C16.1483 11.8768 15.8836 12.0792 15.5256 12.0792Z"
                      fill="#2D4550"
                    ></path>
                  </svg>
                  <span className="pl-1 text-gray-700">
                    {' '}
                    Add Quick Pick Line
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <span className="flex">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.48508 4.58337C6.07258 4.58337 5.68425 4.67004 5.32841 4.84087C4.62425 5.18004 4.11175 5.76837 3.88591 6.49837C3.59425 7.44171 3.77591 8.55837 4.41091 9.72587C4.72175 10.2984 5.12425 10.8334 5.67925 11.4084C6.14675 11.8925 6.71175 12.4 7.56841 13.1059C7.97258 13.4392 9.41258 14.5909 10.0001 15.06C10.5942 14.585 12.0267 13.4392 12.4292 13.1075C13.2734 12.4134 13.8567 11.89 14.3209 11.4075C14.8759 10.8325 15.2792 10.2975 15.5892 9.72671C16.2251 8.55754 16.4059 7.44171 16.1142 6.49837C15.8884 5.76837 15.3759 5.18004 14.6701 4.84004C13.4709 4.26171 11.7767 4.76587 11.0559 5.90421L10.0001 7.57004L8.94425 5.90421C8.43591 5.10171 7.47091 4.58337 6.48508 4.58337ZM10.0009 16.6625L9.47091 16.2375C9.03924 15.8925 7.23591 14.4517 6.77341 14.0709C5.87841 13.3334 5.28258 12.7967 4.78008 12.2759C4.14424 11.6175 3.67758 10.9967 3.31258 10.3225C2.51258 8.85337 2.29841 7.40254 2.69174 6.12837C3.02174 5.06337 3.76591 4.20587 4.78674 3.71504C5.31174 3.46171 5.88341 3.33337 6.48508 3.33337C7.90924 3.33337 9.25674 4.06254 10.0001 5.23504C10.7434 4.06254 12.0901 3.33337 13.5151 3.33337C14.1167 3.33337 14.6884 3.46171 15.2126 3.71421C16.2342 4.20587 16.9784 5.06337 17.3084 6.12837C17.7017 7.40171 17.4867 8.85171 16.6876 10.3234C16.3226 10.9959 15.8559 11.6159 15.2209 12.275C14.7217 12.7942 14.1059 13.3475 13.2242 14.0725C11.6351 15.3825 10.9092 15.9817 10.5151 16.2325L10.5234 16.2417L10.0009 16.6625Z"
                    fill="#2D4550"
                  ></path>
                </svg>
                <span>Favourite Numbers</span>
              </span>

              <span className="flex">
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.41412 3.72972C4.36916 3.72972 4.27031 3.78032 4.27031 3.92323V16.1156L5.79191 15.5025C5.79232 15.5023 5.79274 15.5022 5.79315 15.502C5.99271 15.4206 6.20354 15.3807 6.414 15.3807C6.60452 15.3807 6.79433 15.4142 6.9749 15.4794C6.97506 15.4795 6.97474 15.4794 6.9749 15.4794L9.91038 16.5319L12.8489 15.4785C13.2321 15.3415 13.6493 15.3489 14.0279 15.5016L15.551 16.1155V3.92323C15.551 3.78031 15.4521 3.72972 15.4072 3.72972H4.41412ZM9.81821 16.565C9.81874 16.5648 9.81927 16.5646 9.8198 16.5644L9.81821 16.565ZM3.91642 16.2582C3.91701 16.2579 3.9176 16.2577 3.91819 16.2574L3.91642 16.2582ZM3.24329 3.92323C3.24329 3.28489 3.73274 2.7027 4.41412 2.7027H15.4072C16.0886 2.7027 16.578 3.28489 16.578 3.92323V16.471C16.578 16.8183 16.3773 17.024 16.264 17.1105L16.2572 17.1158L16.2502 17.1208C16.1486 17.1931 15.8703 17.3526 15.5184 17.2097C15.5181 17.2096 15.5178 17.2095 15.5175 17.2093L13.6437 16.4541C13.4996 16.396 13.3423 16.3928 13.1952 16.4454L10.168 17.5306C10.1677 17.5307 10.1674 17.5308 10.1671 17.5309C10.0009 17.5909 9.81968 17.5909 9.65348 17.5309C9.65325 17.5308 9.65302 17.5307 9.65278 17.5306L6.62741 16.4459L6.62607 16.4454C6.55591 16.42 6.48405 16.4077 6.414 16.4077C6.33348 16.4077 6.25444 16.4229 6.18048 16.4532L6.17811 16.4541L4.3038 17.2093C4.30349 17.2095 4.30318 17.2096 4.30287 17.2097C3.95224 17.352 3.67446 17.1954 3.56785 17.118L3.5641 17.1153L3.5604 17.1125C3.44408 17.0247 3.24329 16.8184 3.24329 16.471V3.92323Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5205 9.89046H6.62578C6.40674 9.89046 6.22723 9.67651 6.22723 9.41544C6.22723 9.15438 6.40674 8.94043 6.62578 8.94043H13.5205C13.7396 8.94043 13.9195 9.15438 13.9195 9.41544C13.9195 9.67651 13.7396 9.89046 13.5205 9.89046Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5399 12.7367H11.2784C11.0352 12.7367 10.8368 12.5222 10.8368 12.2611C10.8368 12.0001 11.0352 11.7861 11.2784 11.7861H13.5399C13.7826 11.7861 13.982 12.0001 13.982 12.2611C13.982 12.5222 13.7826 12.7367 13.5399 12.7367Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5205 7.04475H6.62578C6.40674 7.04475 6.22723 6.8308 6.22723 6.56973C6.22723 6.30866 6.40674 6.09418 6.62578 6.09418H13.5205C13.7396 6.09418 13.9195 6.30866 13.9195 6.56973C13.9195 6.8308 13.7396 7.04475 13.5205 7.04475Z"
                  ></path>
                </svg>
                <span>Last Ticket</span>
              </span>
            </div>
          </div>
       
        </div>
      </div>
      <div className=" bg-gray-300 flex flex-col justify-end items-end xl:pr-[128px]  2xl:pr-[146px] xl:pt-32 pt-[250px] md:pt-[340px] lg:pt-[360px] w-full ">


      <div className="  m-auto bg-white rounded-lg px-5   lg:p-[0.5rem]  xl:max-w-[601px] mb-4 mt-4 mx-4 md:mx-32 xl:mx-[0px]">
            <Accorion title="Lotto win odds" pading={false}>
              <div className="  ">
                <p className="w-full   ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum dolorum, nostrum illo vitae necessitatibus fugiat
                  aspernatur quae ad! Saepe consequatur corporis voluptatibus
                  officiis quam assumenda voluptas ratione perspiciatis sapiente
                  perferendis.
                </p>
              </div>
            </Accorion>
          </div>
          {/* 2 */}
          <div className="  m-auto bg-white rounded-lg px-5   lg:p-[0.5rem]  xl:max-w-[601px] mb-4 mx-4 md:mx-32 xl:mx-[0px]">
            <Accorion title="Lotto win odds" pading={false}>
              <div className="  ">
                <p className="w-full   ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum dolorum, nostrum illo vitae necessitatibus fugiat
                  aspernatur quae ad! Saepe consequatur corporis voluptatibus
                  officiis quam assumenda voluptas ratione perspiciatis sapiente
                  perferendis.
                </p>
              </div>
            </Accorion>
          </div>
          {/* 3 */}
          <div className="   m-auto bg-white rounded-lg px-5   lg:p-[0.5rem]  xl:max-w-[601px] mb-8 mx-4 md:mx-32 xl:mx-[0px]">
            <Accorion title="Lotto win odds" pading={false}>
              <div className=" mb-8 ">
                <p className="w-full   ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum dolorum, nostrum illo vitae necessitatibus fugiat
                  aspernatur quae ad! Saepe consequatur corporis voluptatibus
                  officiis quam assumenda voluptas ratione perspiciatis sapiente
                  perferendis.
                </p>
              </div>
            </Accorion>
          </div>
      </div>
      </div>

  );
};

export default SelectionPage;
