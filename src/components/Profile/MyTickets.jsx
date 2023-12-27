import React from 'react'
import { useRef } from 'react';
import "./scroll.css";
import Card from "../../components/Card"
import Starlogo from "../../assets/starLogo.svg"
import backgroundimage1 from "../../assets/backgrounds/EuroMillions.svg"
import backgroundimage2 from "../../assets/backgrounds/card2.svg"
import backgroundimage3 from "../../assets/backgrounds/card3.svg"
import backgroundimage4 from "../../assets/backgrounds/card4.svg"
import backgroundimage6 from "../../assets/backgrounds/card6.svg"

import logo1 from "../../assets/ticketsCard1.svg"
import logo2 from "../../assets/cards/DailyMillion.svg"
import logo3 from "../../assets/cards/Lotto.svg"
import logo4 from "../../assets/cards/logo4.svg"
import logo6 from "../../assets/cards/logo6.svg"
import ReusableCard from './TicketComponent'
const MyTickets = () => {

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 550;
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 550;
        }
    };
    return (
        <div>

            <div className="border-b border-gray-300  h-14 sm:hidden lg:flex items-center w-full justify-center lg:h-24">
                <h1 className="font-black text-lg md:text-xl text-[#32444e]">
                    My Tickets
                </h1>
            </div>

            <Card
                LotteryName="first lottery"
                Time="12:am"
                WinningAmount="1200$"
                logoSrc='01'
                color="red"
                TicketId="1"
                SerialId="247#444"
            />
            <div className="px-4 py-6 max-w-lg mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-2 lg:mb-4">

                        <img src={Starlogo} alt="" />
                    </div>
                    <div className="max-w-xs font-bold text-lg text-[#2C444E]">You haven't got any Draw Based Games at the moment</div>
                </div>
            </div>
            <div>


                <div className="flex justify-between pb-4 pr-4 text-[#2C444E] rtl">
                    <h3 className="font-black text-3xl">Play Now:</h3>
                </div>
                <div className=' overflow-x-scroll space-x-3 max-w-[960px] w-full flex mx-3  p-2  custom-scrollbar ' ref={carouselRef}>
                    {/* 1 */}
                    <ReusableCard
                        backgroundUrl={backgroundimage1}
                        logoSrc={logo1}
                        nextDraw="Tomorrow, 12:30am"
                        jackpotAmount="€17"
                        buttonText="Play from €2.50"
                        DrawText="Next draw"
                        Millions="Million*"
                        guaranteedEstamated="*guaranteed"
                    />
                    {/* 2 */}
                    <ReusableCard
                        backgroundUrl={backgroundimage2}
                        logoSrc={logo2}
                        DrawText="Only €1 per line"
                        nextDraw="Tomorrow, 2:00am"
                        jackpotAmount="€1"
                        buttonText="Play from €1"
                        Millions="Million*"
                        guaranteedEstamated="*guaranteed"
                    />
                    {/* 3 */}
                    <ReusableCard
                        backgroundUrl={backgroundimage3}
                        logoSrc={logo3}
                        DrawText="Next draw"
                        nextDraw="Thursday, 12:45am"
                        jackpotAmount="€10.2"
                        buttonText="Play from €4"
                        Millions="Million*"
                        guaranteedEstamated="*estimated"
                    />
                    {/* 4 */}
                    <ReusableCard
                        backgroundUrl={backgroundimage4}
                        logoSrc={logo4}
                        useBackgroundImage={false}
                        DrawText="Next draw"
                        nextDraw="Friday, 12:30am"
                        jackpotAmount="€20,000 "
                        buttonText="Play from €2.50"
                        Millions="per month for 30 years*"
                        guaranteedEstamated="*guaranteed"
                    />
                    {/* 5 */}

                    <ReusableCard
                        backgroundUrl={backgroundimage4}
                        logoSrc={logo4}
                        DrawText="Next draw"
                        nextDraw="Thursday, 12:45am"
                        jackpotAmount="€125,000*"
                        buttonText="Play from €1"
                        Millions=""
                        guaranteedEstamated="*guaranteed"
                    />
                    {/* 6 */}
                    <ReusableCard
                        backgroundUrl={backgroundimage6}
                        logoSrc={logo6}
                        DrawText="One Millionaire Guaranteed"
                        nextDraw="Monday, 3:00am"
                        jackpotAmount="€1"
                        buttonText="Play for €25"
                        Millions="Million*"
                        guaranteedEstamated="*guaranteed"
                    />
                </div>
                <div className="flex justify-end pt-2 mr-4 my-6">
                    <button className="border border-gray-400 rounded-full w-[45px] h-[45px] flex justify-center items-center mr-3 hover:bg-[#49636E]  hover:text-white shadow-xl" data-elem-next-button="true" aria-label="previous" onClick={scrollLeft}>

                        <span className='font-extrabold text-[#4A626E] hover:text-white  text-[1.5rem] text'>{`>`}</span>
                    </button>


                    <button className="border border-gray-400 rounded-full w-[45px] h-[45px] flex justify-center items-center mr-3 hover:bg-[#49636E]  hover:text-white shadow-xl" data-elem-next-button="true" aria-label="next" onClick={scrollRight}>

                        <span className='font-extrabold text-[#4A626E] hover:text-white  text-[1.5rem] text'>{`<`}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyTickets