import React from 'react';
import GameLogos from './svg/GameLogos';
const data2 = [[1, 2, 7, 6, 3, 8], [1, 2, 7, 6, 3, 8], [1, 2, 7, 6, 3, 8]]

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
      <div className='bg-blue-400'>
      <div className="flex justify-between items-center py-6  px-2 md:px-4  lg:px-8">
        <div>

          <h5 className=' font-bold md:font-extrabold  text-base md:text-2xl text-white '>{LotteryName}</h5>
        </div>
        <div>

          <h5 className=' font-bold md:font-extrabold  text-base md:text-2xl text-white '> {Time}</h5>
        </div>
        <div>

          <h5 className=' font-bold md:font-extrabold  text-base md:text-2xl text-white '> {WinningAmount}</h5>
        </div>
      </div>
      <div className='flex justify-between items-center py-3 bg-blue-400 px-2 md:px-4  lg:px-8'>
        <div>
          {/* <img src={logoSrc} alt="" /> */}
          <GameLogos  logoName={logoSrc} color={color} width="150"/>
        </div>
        <div>
          <h5 className=' font-bold md:font-extrabold  text-base md:text-2xl text-white'> {TicketId}</h5>
        </div>
        <div>
          <h5 className=' font-bold md:font-extrabold  text-base md:text-2xl text-white'>{SerialId}</h5>
        </div>
      </div>
      </div>
      <hr />
      {/*  */}
      <div className=' py-3 px-2 md:px-4  lg:px-8 flex flex-col justify-center items-center'>
        {data2.map((val, index) => {
          return (<div key={index} className='flex my-10'>

            <h5 className=' pr-1 md:pr-1 md:font-extrabold text-base md:text-2xl text-gray-700 font-bold'>line {index + 1}</h5>
            {val.map((value, index) => {
              return (
                <div key={index} className=' mr-1 md:mr-1  text-white border-none flex items-center justify-center cursor-pointer rounded-full w-8 h-8 md:w-11 md:h-11 border-1 border-gray-600 bg-[#E3262D] text-base font-bold '>{value}</div>
              )
            })}
          </div>)
        })}
      </div>



    </div>
  );
};

export default GameCard;
