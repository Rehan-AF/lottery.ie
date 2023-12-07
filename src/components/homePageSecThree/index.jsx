import greenBack from '../../assets/greenBack.png';
import '../shadow.css';
import './styles.css';
const HomePageSecThree = () => {
  return (
    <>
      <div className="greenCardSecTwo pt-[2rem] pb-[2rem] text-center text-white md:px-[105px] w-full flex flex-col items-center relative rounded-lg overflow-hidden xl:flex-row-reverse xl:items-center xl:justify-center xl:h-80 xl:text-left xl:px-1/12">
        <h2 className="text-white text-center z-10 md:text-[36px] md:pr-[0px] md:text-center lg:text-end whitespace-pre-wrap  lg:p-0 lg:flex-grow lg:max-w-2xl lg:pr-4 font-black text-[1.75rem] md:text-4xl md:text-4xl-xtra lg:justify-end">
          <span className="flex lg:justify-end items-end">
            Good Causes
            <br />
            and The National Lottery
          </span>
        </h2>
        <div className="relative flex justify-center -mt-4 md:ml-[0px] lg:m-0 lg:ml-11 z-10">
          <img
            className="w-64 h-64"
            src="https://www.lottery.ie/mkd/images/StarOnAWideCloud.svg"
            alt="Good Causes"
          />
          <p className="absolute top-[135px] text-center leading-none flex items-end text-gray-700 font-black text-4xl lg:justify-end ">
            €4.5 million*
          </p>
        </div>
        <div className="xl:w-60 flex flex-col items-center xl:items-start z-10">
          <h3 className=" w-full -mt-4 font-black text-3xl text-center md:text-[27px] lg:text-end">
            Thank you!
          </h3>
          <p className="text-white  font-bold w-full px-4 mt-2 lg:p-0 lg:text-end">
            €4.5 million* has been raised for Good Causes just last week.
          </p>
          <div className="w-full flex  justify-center lg:justify-end">
            <button
              className="hover:shadow-lg flex md:p-[1rem] items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-60 mt-4 p-4 lg:w-32 px-4 py-1 text-gray-700 bg-white active:bg-blue-lighter-04 lg:text-center"
              data-selected="false"
            >
              <span className="">LEARN MORE</span>
            </button>
          </div>
          <div className="w-full flex justify-center lg:justify-end lg:text-end">
            <p className="text-white  mt-4 text-sm pb-8 lg:p-0 lg:text-end">
              *estimated amount
            </p>
          </div>
        </div>
      </div>
      <SecondPart />
    </>
  );
};

export default HomePageSecThree;

const SecondPart = () => {
  return (
    <div className="mt-[4.5rem] pb-[2rem]  flex flex-col xl:gap-[5rem] items-center text-center my-25 xl:flex-row xl:justify-center xl:text-right">
      <img
        className="w-40 xl:w-52"
        src="https://www.lottery.ie/mkd/images/StarWithClipboard.svg"
        alt="Play Responsibly, Play for Fun"
      />
      <div className="mt-[36px] justify-center flex flex-col md:justify-end w-auto items-center xl:items-start xl:ml-18">
        <h2 className="  text-gray-700 text-3xl font-extrabold self-end md:w-full md:text-center lg:text-end  md:text-4xl">
          <span>Play Responsibly, Play for Fun</span>
        </h2>
        <p className="text-[#49636e] mt-4 mb-8 lg:text-end">
          Set limits, take breaks, lock games. We have a variety of tools to
          help you play safely.
        </p>

        <button
          className=" flex md:self-center items-center hover:shadow-xl justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-72 p-4 text-gray-700 bg-[#c4dc33]  border-green-400 active:bg-green-400 lg:text-end lg:self-end"
          data-selected="false"
        >
          <span>learn more</span>
        </button>
      </div>
    </div>
  );
};
