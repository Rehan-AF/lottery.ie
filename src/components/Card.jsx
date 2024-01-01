import React, { useState } from "react";
import GameLogos from "./svg/GameLogos";
const data2 = [1, 2, 7, 6, 3, 8];
import copyicon from "../assets/cards/copy-icon.svg";
import NumberCheckerModal from "./Profile/NumberChecker";
import { message } from "antd";

const GameCard = ({
  LotteryColor = "#E3262D",
  Time,
  WinningAmount,
  logoSrc,
  SerialId,
  color,
  data = data2,
}) => {
  const [opneValue, setOpneValue] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "copied",
    });
  };
  const copyToClipboard = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);
  };
  return (
    <>
      <div className="  rounded-lg border border-gray-300  shadow-lg mx-6 mt-5 cursor-pointer z-0">
        <div className="flex  justify-between items-center  md:grid md:grid-cols-3 bg-[#E7EFF3] border-t rounded-lg px-2 md:px-4 py-2 lg:px-8 ">
          <div className="flex justify-start items-center col-span-1">
            <h5 className=" font-bold md:font-bold  text-xs md:text-base text-[#32444e] pr-2">
              {contextHolder}
              {SerialId}
            </h5>
            <div
              onClick={() => {
                copyToClipboard(SerialId);
                success();
              }}
              className="z-10"
            >
              <img src={copyicon} alt="" className="w-4 h-4" />
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <h5 className=" font-bold md:font-bold  text-xs md:text-base text-[#2C444E]">
              {" "}
              {Time}
            </h5>
          </div>
          <div className="col-span-1 flex justify-end">
            <div
              className={`bg-[${LotteryColor}] w-8  rounded-full border-transparent h-8`}
            ></div>
          </div>
        </div>

        <div
          className=" grid grid-cols-2  md:grid-cols-3 items-center py-2  px-2 md:px-4 lg:px-8    gap-2 "
          onClick={() => setOpneValue(true)}
        >
          <div className="w-full order-1  col-span-1">
            <GameLogos
              logoName={logoSrc}
              color={color}
              customClass={"ticket"}
              width={100}
            />
          </div>

          <div className=" sm:order-3 md:order-2 px-2 md:px-4 md:col-span-1 sm:col-span-2  lg:px-8 flex flex-col md:justify-center md:items-center w-full">
            <div className="flex my-2">
              {data2.map((val, index) => {
                return (
                  <div
                    key={index}
                    className={` mr-1 md:mr-1  text-white border-none flex items-center justify-center cursor-pointer rounded-full w-8 h-8 md:w-11 md:h-11 border-1 border-gray-600 bg-[${LotteryColor}] text-xl font-bold`}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full sm:order-2 md:order-3  flex md:justify-end col-span-1 items-center ">
            <div className="bg-[#E7EFF3] rounded-md px-1 md:px-3">
              <h5 className=" font-bold md:font-extrabold  text-[11px] md:text-base text-[#2C444E] ">
                {" "}
                {WinningAmount}
              </h5>
            </div>
            <h5 className=" pl-1 md:pr-1 md:font-[600]  text-[11px] md:text-base text-[#2C444E] font-bold flex justify-center items-center">
              : Win Amount
            </h5>
          </div>
        </div>
      </div>
      <NumberCheckerModal
        selectedSlip={data2}
        open={opneValue}
        setOpen={setOpneValue}
        winingNumber={[1, 23, 7, 12, 34, 8]}
        mainColor={LotteryColor}
      />
    </>
  );
};

export default GameCard;
