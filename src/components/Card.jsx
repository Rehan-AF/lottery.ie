import React from 'react';
import GameLogos from './svg/GameLogos';

const Card = () => {
  return (
    <>
    <div>
        <span className='text-gray-700  font-black text-xl flex rtl pb-4' >Your basket items</span>
   
    <div className='flex justify-center flex-col w-full items-center'>
    <div class=" bg-white rounded-lg w-[350px] lg:w-[880px] flex flex-col justify-center shadow shadow-slate-600 ">
      <div class="bg-white rounded-t-lg flex items-center justify-between px-4 mt-8 pt-3">
        <GameLogos logoName="05"  color='orange' width="120" />
        <div class="flex items-center">
          <button aria-label="edit" role="link" class="pr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.4012 4.99878C16.2068 4.99878 16.0046 5.07656 15.8568 5.22433L14.4335 6.64767L17.3501 9.56433L18.7735 8.141C19.0768 7.83767 19.0768 7.34767 18.7735 7.04433L16.9535 5.22433C16.7979 5.06878 16.6035 4.99878 16.4012 4.99878ZM13.6012 9.68087L14.3168 10.3964L7.27013 17.4431H6.55457V16.7275L13.6012 9.68087ZM4.99902 16.0818L13.6012 7.47955L16.5179 10.3962L7.91569 18.9984H4.99902V16.0818Z"
                fill="#2D4550"
              ></path>
            </svg>
          </button>
          <button aria-label="delete">
            <svg
              class="w-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.71412 14.1074C8.06586 14.1074 8.35366 13.8196 8.35366 13.4679V9.31092C8.35366 8.95918 8.06586 8.67139 7.71412 8.67139C7.36238 8.67139 7.07458 8.95918 7.07458 9.31092V13.4679C7.07458 13.8196 7.36238 14.1074 7.71412 14.1074Z"
                fill="#2D4550"
              ></path>
              <path
                d="M10.2083 14.1074C10.56 14.1074 10.8478 13.8196 10.8478 13.4679V9.31092C10.8478 8.95918 10.56 8.67139 10.2083 8.67139C9.85652 8.67139 9.56873 8.95918 9.56873 9.31092V13.4679C9.56873 13.8196 9.85652 14.1074 10.2083 14.1074Z"
                fill="#2D4550"
              ></path>
              <path
                d="M12.7025 14.1074C13.0543 14.1074 13.3421 13.8196 13.3421 13.4679V9.31092C13.3421 8.95918 13.0543 8.67139 12.7025 8.67139C12.3508 8.67139 12.063 8.95918 12.063 9.31092V13.4679C12.063 13.8196 12.3508 14.1074 12.7025 14.1074Z"
                fill="#2D4550"
              ></path>
              <path
                d="M16.4438 5.01017H13.2142L12.8145 3.66715C12.6066 2.97965 11.9671 2.5 11.2476 2.5H9.16913C8.44965 2.5 7.81012 2.97965 7.60227 3.66715L7.20256 5.01017H3.97291C3.62116 5.01017 3.33337 5.29797 3.33337 5.64971C3.33337 6.00145 3.62116 6.28924 3.97291 6.28924H4.46855V16.1541C4.46855 17.0015 5.15605 17.7049 6.01942 17.7049H14.4133C15.2607 17.7049 15.9642 17.0174 15.9642 16.1541V6.27326H16.4438C16.7956 6.27326 17.0834 5.98546 17.0834 5.63372C17.0834 5.28198 16.7956 5.01017 16.4438 5.01017ZM8.83337 4.03488C8.88134 3.89099 9.00925 3.77907 9.16913 3.77907H11.2636C11.4235 3.77907 11.5514 3.875 11.5994 4.03488L11.8872 5.01017H8.52959L8.83337 4.03488ZM14.6691 16.1381C14.6691 16.282 14.5412 16.4099 14.3973 16.4099H6.01942C5.87552 16.4099 5.74762 16.282 5.74762 16.1381V6.27326H14.6851V16.1381H14.6691Z"
                fill="#2D4550"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-white flex items-start justify-between px-4 pt-4 pb-4">
        <div>
          <p className='text-gray-700'>2 Lines </p>
          <p className='text-gray-700'>for 1 Draw</p>
        </div>
        <div class="bg-blue-100 rounded-md py-1 px-2">
          <p class="text-gray-700 font-bold">€5.00</p>
        </div>
      </div>
     
     
      </div>
    </div>
    </div>
    </>
  );
};

export default Card;
