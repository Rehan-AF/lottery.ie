import SideCard from './SideCard';
import backgroundImage_1 from '../../assets/backgrounds/1_Mega-da-virada.svg';
import backgroundImage_3 from '../../assets/backgrounds/7_Quina.svg';
import backgroundImage_4 from '../../assets/backgrounds/6_Mega-Sena.svg';
import backgroundImage_5 from '../../assets/backgrounds/2_Milionaria.svg';
import backgroundImage_6 from '../../assets/backgrounds/4_Dupla-Sena.svg';
import backgroundImage_7 from '../../assets/backgrounds/5_Lotomania.svg';
import backgroundImage_8 from '../../assets/backgrounds/8_Super-Sete.svg';
import { useSelector } from 'react-redux';
const HowToClaim = () => {
  const cardDataState = useSelector(
    (state) => state.productsSlice.upcomingLotteryDetails
  );
  const data = [
    {
      name: 'mega-da-virada',
      JackportAmount: '120,940,000,000',
      date: 'یکشنبه ۱۴ آبان ماه',

      secondLogo: '01',
      nextDraw: 'فردا ساعت ۱۸:۰۰ ',
      drawAmount: '۱۲۰',
      amountMultiplier: 'میلیارد',
      playFor: '۷۰',
      winingColor: '#068e5a',
      backgroundImage: backgroundImage_1,
      link: 'megaSanaVirda',
    },
    {
      name: cardDataState[1].name,
      JackportAmount: '6,431,246',
      date: 'یکشنبه ۱۴ آبان ماه',

      secondLogo: '02',
      nextDraw: 'شنبه ساعت ۱۸:۰۰',
      drawAmount: '۸۷',
      amountMultiplier: 'میلیارد',
      playFor: cardDataState[1].playFor,
      winingColor: '#781ea5',
      columnNumber: 8,
      backgroundImage:
        'linear-gradient(162.45deg,#781ea5 51.95%,#ff3c69 126.15%)',
      gradient: true,
      link: 'lotofacil',
    },
    {
      name: cardDataState[2].name,
      JackportAmount: '6,431,246',
      date: 'یکشنبه ۱۴ آبان ماه',

      secondLogo: '03',
      nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
      drawAmount: '۹',
      amountMultiplier: 'میلیارد',
      playFor: cardDataState[2].playFor,
      winingColor: '#0094b3',
      backgroundImage: backgroundImage_3,
      columnNumber: 5,
      link: 'quina',
    },
    {
      name: cardDataState[3].name,
      JackportAmount: '6,431,246',
      date: 'یکشنبه ۱۴ آبان ماه',

      winingColor: '#128631',
      secondLogo: '04',
      nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
      drawAmount: '۱۷',
      amountMultiplier: 'میلیارد',
      playFor: cardDataState[3].playFor,
      backgroundImage: backgroundImage_4,
      link: 'mega-sana',
    },
    {
      name: cardDataState[4].name,
      JackportAmount: '6,431,246',
      date: 'یکشنبه ۱۴ آبان ماه',

      secondLogo: '07',
      nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
      drawAmount: '۴۹',
      amountMultiplier: 'میلیارد',
      playFor: cardDataState[4].playFor,
      winingColor: '#f6a500',
      columnNumber: 10,
      backgroundImage: backgroundImage_7,
      link: 'loto-mania',
    },
    {
      name: cardDataState[5].name,
      JackportAmount: '83,068,817',
      date: 'یکشنبه ۱۴ آبان ماه',

      secondLogo: '06',
      nextDraw: 'دوشنبه ساعت ۱۹:۰۰',
      drawAmount: '۵۸۹',
      amountMultiplier: 'میلیارد',
      playFor: '2.50',
      winingColor: '#e3262d',
      backgroundImage: backgroundImage_6,
      link: 'dupla-sena',
    },
  ];
  return (
    <div className="text-[#4b636e] py-[1.5rem] bg-[#ebebeb] flex">
      <div className="max-w-[1200px] flex sm:flex-col lg:flex-row lg:justify-center md:items-center lg:items-start gap-[1rem] w-full m-auto ">
        <div
          className="max-w-[700px] rtl w-full sm:rounded-none md:rounded-lg shadow-2xl  bg-white "
          style={{ padding: '30px 10px 30px 30px' }}
        >
          <div>
            <h2 className=" text-[27px] font-black">How to claim your prize</h2>
            <p className="mt-[0.2rem]">
              How you claim depends on the amount you have won and whether you
              have played online or in store at one of our retail agent
              locations.
            </p>
            <h2 className="text-[23px] mt-[1rem] font-black">Online Players</h2>
            <p className="mt-[0.2rem]">
              Players who have registered with an online account and choose to
              play through our website www.lottery.ie or on the app can claim
              their prizes in the following ways:
            </p>
          </div>
          <div className="mt-[0.5rem]">
            <p className="sm:mr-[20px] md:mr-[40px] mt-[10px]">
              <b>Prize amounts from €1 - €99</b> will automatically be
              transferred to your online wallet.* You may withdraw at any time
              by logging in and selecting your circled balance at the top right
              followed by &ldquo;Withdraw funds&ldquo;. Funds will be
              transferred as an e-payment back to the card linked to your
              account (if ID-Verified). If the e-payment fails or the account is
              not ID-Verified, a cheque will be issued.
            </p>
            <p className="sm:mr-[20px] md:mr-[40px] mt-[10px]">
              <b>For prize amounts from €100 up to €500</b>, funds will be
              transferred as an e-payment back to the card** linked to your
              account (if ID-Verified). If the e-payment fails or the account is
              not ID-Verified, a cheque will be issued.
            </p>
            <p className="sm:mr-[20px] md:mr-[40px] mt-[10px]">
              <b>For prize amounts from €501 up to €9,999,</b> PLI will, subject
              to age and identification details being confirmed, send you a
              Claim Form for completion before a cheque is issued.
            </p>
            <p className="sm:mr-[20px] md:mr-[40px] mt-[10px]">
              <b>For prizes of €10,000 and above</b>, please contact the
              National Lottery Claims Department on 1800 666 222 Mon-Fri
              9.15am-5.30pm where arrangements will be made to process your
              prize.
            </p>
          </div>
          <div>
            <p className="my-[10px] ">
              *If you win a prize under €100 that will result in your wallet
              balance going over €750, we will issue the full amount of the
              prize as an e-payment back to the card linked to your account; if
              the e-payment fails, we will issue the full amount by cheque.
            </p>
            <p className="mb-[10px]">
              If you need further assistance please contact our support team at
              (01) 889 1000 or email&nbsp;
              <a href="#">support@lottery.ie</a>. Our office hours are from 8am
              to 9pm, Monday to Sunday.
            </p>
            <p className="mb-[10px]">
              <u>
                <a href="#">
                  <b>See details of current unclaimed prizes</b>
                </a>
              </u>
            </p>
          </div>
          <div>
            <h2 className="text-[23px] mt-[1rem] font-black">Retail players</h2>
            <p className="mt-[0.2rem]">
              If you hold a winning ticket that you bought in a shop, you must
              claim your prize within 90 days of the applicable draw date(s).
            </p>
            <p className="mt-[10px]">
              Your ticket is a bearer instrument, so treat it as if it were
              cash. It is the only valid proof of a game played and must be
              presented to claim a prize.
            </p>
            <p>
              You should sign the back of all winning tickets before presenting
              for payment.
            </p>
            <h3 className="text-[19px] mt-[1rem] font-black">Retail players</h3>
            <ul
              style={{ listStyleType: ' none' }}
              className="sm:pr-[20px] md:pr-[40px] mt-[0.2rem]"
            >
              <li>€1-€100 Any National Lottery Agent</li>
              <li>€1-€2,500 Any An Post Office nationwide</li>
              <li>
                €1-€14,999 An Post Prize Claim Centre&nbsp;
                <u>
                  <a href="#" target="_blank">
                    Download a list of&nbsp;Prize Claim Centres (PDF)
                  </a>
                </u>
              </li>
            </ul>
            <p className="my-[10px]">
              NB: Please note that Photo ID verification&nbsp;and completion of
              a Prizewinner Claim Form may be required to complete the claims
              process.&nbsp;
            </p>
            <p className="mb-[10px]">
              Prizes may also be claimed at claimant’s risk by posting to The
              National Lottery, Abbey Street Lower, Dublin 1. The ticket must be
              signed on the reverse side and the name and address of the
              claimant provided.*&nbsp;
            </p>
            <p className="mb-[10px]">
              For prizes of €15,000 and above, please contact the National
              Lottery Claims Department on 1800 666 222 Mon-Fri 9.15am-5.30pm
              where arrangements will be made to process your prize. Any player
              who has a winning ticket of €15,000 and above should take the
              following steps:
            </p>
            <ol className="sm:p-[20px] md:p-[40px] mb-[10px]">
              <li>Sign the back of the winning ticket.</li>
              <li>Put the ticket in a safe place.</li>
              <li>Contact the National Lottery as soon as possible.</li>
            </ol>
            <p className="mb-[10px]">(1800 666 222, Mon-Fri 9.15am - 5.30pm)</p>
            <p className="mb-[10px]">
              Some&nbsp;<b>scratch card</b>&nbsp;prizes may have already been
              won. Prizes must be claimed within 90 days after&nbsp;
              <u>
                <a href="#">game end announcement</a>
              </u>
              .&nbsp;
            </p>
            <p className="mb-[10px]">
              *Winners of prizes of €15,000 and above cannot post their ticket
              to the National Lottery and should contact the Claims team on 1800
              666 222 between 9.15am and 5.30pm Mon-Fri.
            </p>
            <p className="mb-[10px]">
              If you need further assistance please contact our Claims team on
              1800 666 222 between 9.15am and 5.30pm Mon-Fri.
            </p>
            <p>
              <u>
                <a href="#">
                  <b>See details of current unclaimed prizes</b>
                </a>
              </u>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          {data.map((val, index) => {
            return (
              <SideCard
                key={index}
                playFor={val.playFor}
                amountMultiplier={val.amountMultiplier}
                drawAmount={val.drawAmount}
                nextDraw={val.nextDraw}
                secondLogo={val.secondLogo}
                backgroundImage={val.backgroundImage}
                winingColor={val.winingColor}
                gradient={val.gradient}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowToClaim;
