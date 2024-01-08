import { useState } from 'react';
import GameLogos from './svg/GameLogos';
import copyicon from '../assets/cards/copy-icon.svg';
import NumberCheckerModal from './Profile/NumberChecker';
import { Tooltip, message } from 'antd';
const data2 = [29, 30, 31, 32, 33, 34];

const GameCard = ({
  LotteryColor = '#E3262D',
  Time,
  date,
  WinningAmount,
  logoSrc,
  TicketID,
  serialID,
  color,
  data = data2,
  winingNumbers = [29, 30, 32, 34, 36, 37],
  numberOfColumns = 6,
  status,
}) => {
  const [opneValue, setOpneValue] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'copied',
    });
  };
  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);
  };
  return (
    <>
      <div className="  rounded-lg border border-gray-300  shadow-lg mx-6 mt-5 z-0">
        <div className="flex  justify-between items-center  md:grid md:grid-cols-3 bg-[#E7EFF3] border-t rounded-lg px-2 md:px-4 py-2 lg:px-8 ">
          <div className="flex justify-start items-center col-span-1">
            <h5 className=" font-bold md:font-bold  text-xs md:text-base text-[#32444e] pr-2">
              {contextHolder}
              {TicketID}
            </h5>
            <div
              onClick={() => {
                copyToClipboard(TicketID);
                success();
              }}
              className="z-10  cursor-pointer"
            >
              <img src={copyicon} alt="" className="w-4 h-4" />
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <h5 className=" font-bold md:font-bold  text-xs md:text-base text-[#2C444E]">
              {date} | {Time} | {serialID}
            </h5>
          </div>
          <div className="col-span-1 flex justify-end">
            <Tooltip title={status} className=" cursor-pointer">
              <div
                className={`bg-[${LotteryColor}] w-8  rounded-full border-transparent h-8`}
              ></div>
            </Tooltip>
          </div>
        </div>

        <div
          className=" grid grid-cols-2  cursor-pointer  md:grid-cols-3 items-center py-2  px-2 md:px-4 lg:px-8    gap-2 "
          onClick={() => setOpneValue(true)}
        >
          <div className="w-full order-1  col-span-1">
            <GameLogos
              logoName={logoSrc}
              color={color}
              customClass={'ticket'}
              width={100}
            />
          </div>

          <div className=" sm:order-3 md:order-2 px-2 justify-center md:px-4 md:col-span-1 sm:col-span-2  lg:px-8 flex flex-col md:justify-center md:items-center w-full">
            <div className="flex my-2 gap-[4px] justify-center">
              {data.map((val, index) => {
                return (
                  <div
                    className={` border flex items-center justify-center cursor-pointer rounded-full  sm:w-9 md:w-[49px] sm:h-9 md:h-[49px] border-1 bg-white text-base font-bold ${
                      winingNumbers.includes(val)
                        ? `!bg-[${color}] ${
                            data.includes(val) ? 'opacity-[1]' : 'opacity-[0.5]'
                          } text-white border-[${color}]`
                        : ' !bg-gray-300 text-[#2f4751] border-gray-300'
                    } `}
                    key={index}
                    style={{
                      order: ` ${numberOfColumns - index}`,
                    }}
                  >
                    <div aria-hidden="true">{val}</div>
                    <input
                      type="checkbox"
                      className="opacity-0 absolute"
                      name="balls"
                      aria-label={val}
                      value={val}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full sm:order-2 md:order-3  flex md:justify-end col-span-1 items-center">
            <div className="bg-[#E7EFF3] rounded-md px-1 md:px-3">
              <h5 className="font-bold md:font-extrabold  text-[11px] md:text-base text-[#2C444E]">
              (تومان) {WinningAmount}
              </h5>
            </div>
            <h5 className="pl-1 md:pr-1 md:font-[600]  text-[11px] md:text-base text-[#2C444E] font-bold flex justify-center items-center">
             :مبلغ جایزه
            </h5>
          </div>
        </div>
      </div>
      <NumberCheckerModal
        selectedSlip={data}
        open={opneValue}
        setOpen={setOpneValue}
        winingNumber={winingNumbers}
        mainColor={LotteryColor}
      />
    </>
  );
};

export default GameCard;
