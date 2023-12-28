import React from 'react';
import GameLogos from './svg/GameLogos';
const data2 = [[1, 2, 7, 6, 3, 8]]

const GameCard = ({
  LotteryName,
  Time,
  WinningAmount,
  logoSrc,
  TicketId,
  SerialId,
  color,
  data = data2,
},) => {
  return (
    <div className="  rounded-lg border border-gray-300 shadow-lg mx-6 mt-5  ">
      <div className='py-2 px-2 md:px-4  lg:px-8'>
        {/* 1 */}
        <div className='flex justify-between items-center '>
          <div>
            <GameLogos logoName={logoSrc} color={color} width="100" />
          </div>

          <div>
            <h5 className=' font-bold md:font-extrabold  text-base md:text-lg text-[#32444e]'>{SerialId}</h5>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-between items-center py-2 ">
          <div>

            <h5 className=' font-medium   text-base md:text-lg text-[#32444e]'>{LotteryName}</h5>
          </div>
          <div>

            <h5 className=' font-medium  text-base md:text-lg text-[#32444e] '> {Time}</h5>
          </div>

        </div>

        <div></div>
        {/* 3 */}
        <div className='flex justify-between items-center'>
          <div className='mt-3'>
            <h5 className=' font-bold md:font-extrabold  text-base md:text-lg text-[#32444e]'> {TicketId}</h5>
          </div>
          <div className='bg-[#E7EFF3] rounded-md py-1 px-3'>

            <h5 className=' font-bold md:font-extrabold  text-base md:text-lg text-[#32444e] '> {WinningAmount}</h5>
          </div>
        </div>
      </div>
      <hr />
      <div className='  px-2 md:px-4  lg:px-8 flex flex-col justify-center items-center'>
        {data2.map((val, index) => {
          return (<div key={index} className='flex my-2'>

            <h5 className=' pr-1 md:pr-1 md:font-extrabold text-base md:text-lg text-[#32444e] font-bold flex justify-center items-center'>Line {index + 1}</h5>
            {val.map((value, index) => {
              return (
                <div key={index} className=' mr-1 md:mr-1  text-white border-none flex items-center justify-center cursor-pointer rounded-full w-8 h-8 md:w-11 md:h-11 border-1 border-gray-600 bg-[#E3262D] text-xl font-bold '>{value}</div>
              )
            })}
          </div>)
        })}
      </div>



    </div>
  );
};

export default GameCard;
