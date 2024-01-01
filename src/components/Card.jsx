import React from "react";
import GameLogos from "./svg/GameLogos";
const data2 = [[1, 2, 7, 6, 3, 8]];
import copyicon from "../assets/cards/copy-icon.svg"

const GameCard = ({
  LotteryColor="#E3262D",
  Time,
  WinningAmount,
  logoSrc,
  SerialId,
  color,
  data = data2,
}) => {
  return (
    <div className="  rounded-lg border border-gray-300  shadow-lg mx-6 mt-5 ">
      <div className="flex justify-between items-center bg-[#E7EFF3] border-t rounded-lg px-2 md:px-4 py-2 lg:px-8 ">
        <div className="flex justify-center items-center"> 
          <h5 className=" font-bold md:font-bold  text-xs md:text-base text-[#32444e] pr-2">
            {SerialId}
          </h5>
          <img src={copyicon} alt="" className="w-4 h-4" />
        </div>

        <div>
          <h5 className="font-bold md:font-bold  text-xs md:text-base text-[#2C444E]">
            {" "}
            {Time}
          </h5>
        </div>
        <div>
          <div className={ `bg-[${LotteryColor}] w-8  rounded-full border-transparent h-8`}>
            
          </div>
        </div>
      </div>

      <div className="flex md:justify-between items-center py-2  px-2 md:px-4 lg:px-8  flex-col md:flex-row gap-2 ">
        <div className="w-full md:w-1/4 lg:w-1/3">
          <GameLogos
            logoName={logoSrc}
            color={color}
            customClass={"ticket"}
            width={100}
          />
        </div>

        <div className="  px-2 md:px-4  lg:px-8 flex flex-col md:justify-center md:items-center w-full md:w-1/3">
          {data2.map((val, index) => {
            return (
              <div key={index} className="flex my-2">
                {val.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={` mr-1 md:mr-1  text-white border-none flex items-center justify-center cursor-pointer rounded-full w-8 h-8 md:w-11 md:h-11 border-1 border-gray-600 bg-[${LotteryColor}] text-xl font-bold`}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/3 flex md:justify-end">
          <div className="bg-[#E7EFF3] rounded-md  px-3">
            <h5 className=" font-bold md:font-extrabold  text-xs md:text-base text-[#2C444E] ">
              {" "}
              {WinningAmount}
            </h5>
          </div>
          <h5 className=" pl-2 md:pr-1 md:font-[600]  text-sm md:text-base text-[#2C444E] font-bold flex justify-center items-center">
           : Win Amount
          </h5>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default GameCard;
