import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MobileNav from '../navbar/MobileNav';
import Navbar from '../navbar';
import { Footer } from '../footer';

const ProfileLayout = () => {
  return (
    <div className="">
      <div className="sm:block lg:hidden px-[1rem] py-[2px]">
        <MobileNav />
      </div>
      <div className="sm:hidden lg:block">
        <Navbar />
      </div>
      <div className="bg-[#c5d8e1] mt-4 p-5">
        <div className="bg-white max-w-[1200px] lg:rounded-xl lg:flex lg:flex-row lg:shadow lg:overflow-hidden col-span-full mx-auto">
          <div className="self-stretch flex-1 items-stretch flex justify-center bg-blue-lighter-03 lg:bg-blue-lighter-05 h-full">
            <Outlet />
          </div>
          <div className="bg-[#dde9ee] hidden lg:block flex-shrink-0 bg-blue-lighter-03 py-10">
            <div className="hidden text-[#2c444e] lg:block flex-shrink-0 bg-blue-lighter-03 py-10 rtl">
              <nav>
                <section
                  aria-labelledby="header-Profile"
                  className="pb-10 lg:pb-4"
                >
                  <h3
                    id="header-Profile"
                    className="text-lg font-bold pb-2 lg:px-7"
                  >
                    Dashboard
                  </h3>
                  <div className="bg-white flex flex-col px-5 py-2 rounded-lg shadow text-base lg:px-0 lg:bg-transparent lg:shadow-none">
                    <a
                      href="/account/dashboard"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3.25796 1.00037C2.0129 1.00037 1.00018 2.01333 1.00018 3.25814C1.00018 4.50295 2.01315 5.51592 3.25796 5.51592C4.50276 5.51592 5.51573 4.5032 5.51573 3.25814C5.51573 2.01308 4.50302 1.00037 3.25796 1.00037Z"></path>
                          <path d="M3.25778 7.776C2.01272 7.776 1 8.78897 1 10.0338C1 11.2786 2.01297 12.2916 3.25778 12.2916C4.50258 12.2916 5.51555 11.2786 5.51555 10.0338C5.51555 8.78897 4.50283 7.776 3.25778 7.776Z"></path>
                          <path d="M3.25778 14.5531C2.01272 14.5531 1 15.5658 1 16.8109C1 18.0559 2.01297 19.0687 3.25778 19.0687C4.50258 19.0687 5.51555 18.0557 5.51555 16.8109C5.51555 15.5661 4.50283 14.5531 3.25778 14.5531Z"></path>
                          <path d="M9.62844 1C8.38338 1 7.37067 2.01297 7.37067 3.25777C7.37067 4.50258 8.38363 5.51555 9.62844 5.51555C10.8732 5.51555 11.8862 4.50283 11.8862 3.25777C11.8862 2.01272 10.8735 1 9.62844 1Z"></path>
                          <path d="M9.62844 7.776C8.38338 7.776 7.37067 8.78897 7.37067 10.0338C7.37067 11.2786 8.38363 12.2916 9.62844 12.2916C10.8732 12.2916 11.8862 11.2786 11.8862 10.0338C11.8862 8.78897 10.8735 7.776 9.62844 7.776Z"></path>
                          <path d="M9.62844 14.5531C8.38338 14.5531 7.37067 15.5658 7.37067 16.8109C7.37067 18.0559 8.38363 19.0687 9.62844 19.0687C10.8732 19.0687 11.8862 18.0557 11.8862 16.8109C11.8862 15.5661 10.8735 14.5531 9.62844 14.5531Z"></path>
                          <path d="M15.9997 5.51555C17.2448 5.51555 18.2575 4.50283 18.2575 3.25777C18.2575 2.01272 17.2445 1 15.9997 1C14.7549 1 13.7419 2.01297 13.7419 3.25777C13.7419 4.50258 14.7547 5.51555 15.9997 5.51555Z"></path>
                          <path d="M15.9997 7.776C14.7547 7.776 13.7419 8.78897 13.7419 10.0338C13.7419 11.2786 14.7549 12.2916 15.9997 12.2916C17.2445 12.2916 18.2575 11.2786 18.2575 10.0338C18.2575 8.78897 17.2445 7.776 15.9997 7.776Z"></path>
                          <path d="M15.9997 14.5531C14.7547 14.5531 13.7419 15.5658 13.7419 16.8109C13.7419 18.0559 14.7549 19.0687 15.9997 19.0687C17.2445 19.0687 18.2575 18.0557 18.2575 16.8109C18.2575 15.5661 17.2445 14.5531 15.9997 14.5531Z"></path>
                        </svg>
                      </div>
                      My Dashboard
                    </a>
                    <a
                      href="/account/details"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.4 3H3.6C2.72 3 2 3.72 2 4.6V15.8C2 16.68 2.72 17.4 3.6 17.4H16.4C17.28 17.4 18 16.68 18 15.8V4.6C18 3.72 17.28 3 16.4 3ZM16.4 15.8H3.6V4.6H16.4V15.8Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.928 8.93599L14.792 7.79999L12.256 10.336L11.128 9.19999L10 10.328L12.256 12.6L15.928 8.93599Z"
                          ></path>
                          <path d="M8.40002 6.20001H4.40002V7.80001H8.40002V6.20001Z"></path>
                          <path d="M8.40002 9.40002H4.40002V11H8.40002V9.40002Z"></path>
                          <path d="M8.40002 12.6H4.40002V14.2H8.40002V12.6Z"></path>
                        </svg>
                      </div>
                      My Details
                    </a>
                    <a
                      href="/account/tickets"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41412 3.72972C4.36916 3.72972 4.27031 3.78032 4.27031 3.92323V16.1156L5.79191 15.5025C5.79232 15.5023 5.79274 15.5022 5.79315 15.502C5.99271 15.4206 6.20354 15.3807 6.414 15.3807C6.60452 15.3807 6.79433 15.4142 6.9749 15.4794C6.97506 15.4795 6.97474 15.4794 6.9749 15.4794L9.91038 16.5319L12.8489 15.4785C13.2321 15.3415 13.6493 15.3489 14.0279 15.5016L15.551 16.1155V3.92323C15.551 3.78031 15.4521 3.72972 15.4072 3.72972H4.41412ZM9.81821 16.565C9.81874 16.5648 9.81927 16.5646 9.8198 16.5644L9.81821 16.565ZM3.91642 16.2582C3.91701 16.2579 3.9176 16.2577 3.91819 16.2574L3.91642 16.2582ZM3.24329 3.92323C3.24329 3.28489 3.73274 2.7027 4.41412 2.7027H15.4072C16.0886 2.7027 16.578 3.28489 16.578 3.92323V16.471C16.578 16.8183 16.3773 17.024 16.264 17.1105L16.2572 17.1158L16.2502 17.1208C16.1486 17.1931 15.8703 17.3526 15.5184 17.2097C15.5181 17.2096 15.5178 17.2095 15.5175 17.2093L13.6437 16.4541C13.4996 16.396 13.3423 16.3928 13.1952 16.4454L10.168 17.5306C10.1677 17.5307 10.1674 17.5308 10.1671 17.5309C10.0009 17.5909 9.81968 17.5909 9.65348 17.5309C9.65325 17.5308 9.65302 17.5307 9.65278 17.5306L6.62741 16.4459L6.62607 16.4454C6.55591 16.42 6.48405 16.4077 6.414 16.4077C6.33348 16.4077 6.25444 16.4229 6.18048 16.4532L6.17811 16.4541L4.3038 17.2093C4.30349 17.2095 4.30318 17.2096 4.30287 17.2097C3.95224 17.352 3.67446 17.1954 3.56785 17.118L3.5641 17.1153L3.5604 17.1125C3.44408 17.0247 3.24329 16.8184 3.24329 16.471V3.92323Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.5205 9.89046H6.62578C6.40674 9.89046 6.22723 9.67651 6.22723 9.41544C6.22723 9.15438 6.40674 8.94043 6.62578 8.94043H13.5205C13.7396 8.94043 13.9195 9.15438 13.9195 9.41544C13.9195 9.67651 13.7396 9.89046 13.5205 9.89046Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.5399 12.7367H11.2784C11.0352 12.7367 10.8368 12.5222 10.8368 12.2611C10.8368 12.0001 11.0352 11.7861 11.2784 11.7861H13.5399C13.7826 11.7861 13.982 12.0001 13.982 12.2611C13.982 12.5222 13.7826 12.7367 13.5399 12.7367Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.5205 7.04475H6.62578C6.40674 7.04475 6.22723 6.8308 6.22723 6.56973C6.22723 6.30866 6.40674 6.09418 6.62578 6.09418H13.5205C13.7396 6.09418 13.9195 6.30866 13.9195 6.56973C13.9195 6.8308 13.7396 7.04475 13.5205 7.04475Z"
                          ></path>
                        </svg>
                      </div>
                      My Tickets
                    </a>
                  </div>
                </section>
                <section
                  aria-labelledby="header-responsible-play"
                  className="pb-10 lg:pb-4"
                >
                  <h3
                    id="header-responsible-play"
                    className="text-lg font-bold pb-2 lg:px-7"
                  >
                    Finincial
                  </h3>
                  <div className="bg-white flex flex-col px-5 py-2 rounded-lg shadow text-base lg:px-0 lg:bg-transparent lg:shadow-none">
                    <a
                      href="/account/take-a-break"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.2002 5.28667V3.46667H1.3335V10.4C1.33583 11.3851 1.54804 12.3584 1.95602 13.255C2.36399 14.1517 2.95835 14.9511 3.6995 15.6H1.3335V17.3333H15.2002V15.6H12.8342C13.3988 15.1031 13.8789 14.5177 14.2555 13.8667H14.3335C15.4081 13.8678 16.4448 13.4695 17.2423 12.7492C18.0398 12.0289 18.5412 11.038 18.6492 9.96884C18.7572 8.89965 18.4641 7.82848 17.8268 6.96326C17.1894 6.09805 16.2533 5.50052 15.2002 5.28667ZM13.4668 10.4C13.4668 11.7791 12.919 13.1018 11.9438 14.077C10.9686 15.0522 9.64596 15.6 8.26683 15.6C6.8877 15.6 5.56506 15.0522 4.58987 14.077C3.61469 13.1018 3.06683 11.7791 3.06683 10.4V5.20001H13.4668V10.4ZM16.1795 11.3707C15.8525 11.6933 15.4458 11.9236 15.0008 12.038C15.1322 11.5019 15.1992 10.952 15.2002 10.4V7.08934C15.6116 7.23613 15.9794 7.48421 16.2696 7.81068C16.5599 8.13715 16.7632 8.53149 16.8608 8.95728C16.9584 9.38307 16.9471 9.82659 16.828 10.2469C16.709 10.6672 16.4859 11.0507 16.1795 11.362V11.3707Z"></path>
                        </svg>
                      </div>
                      Deposit
                    </a>
                    <a
                      href="/account/locked-games"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.19439 17.62H15.2667C16.04 17.62 16.6667 16.993 16.6667 16.22V8.94117C16.6667 8.1679 16.04 7.54117 15.2667 7.54117H14.9972V7.26653H14.9883C14.9874 4.63407 12.8529 2.5 10.2202 2.5C7.58675 2.5 5.47486 4.63477 5.47486 7.26817C5.47486 7.36453 5.47112 7.4539 5.47089 7.54117H5.19462C4.42135 7.54117 3.79462 8.1679 3.79462 8.94117V16.22C3.79439 16.9933 4.42089 17.62 5.19439 17.62ZM10.2106 4.1807C11.9118 4.1807 13.2908 5.5597 13.2915 7.26047H13.2974V7.54117H7.14342V7.519C7.13549 7.4378 7.12942 7.3538 7.12942 7.26163C7.12965 5.56017 8.50912 4.1807 10.2106 4.1807ZM5.46622 9.7877C5.46622 9.4783 5.71705 9.2277 6.02622 9.2277H14.4335C14.7426 9.2277 14.9935 9.4783 14.9935 9.7877V15.3828C14.9935 15.6922 14.7426 15.9428 14.4335 15.9428H6.02622C5.71705 15.9428 5.46622 15.692 5.46622 15.3828V9.7877ZM10.0942 14.2549H10.3742C10.7594 14.2549 11.0716 13.9427 11.0716 13.5574V11.6226C11.0716 11.2374 10.7594 10.9252 10.3742 10.9252H10.0942C9.70892 10.9252 9.39672 11.2374 9.39672 11.6226V13.5574C9.39649 13.9427 9.70892 14.2549 10.0942 14.2549Z"
                            fill="#2D4550"
                          ></path>
                        </svg>
                      </div>
                      Withdraw
                    </a>
                    <a
                      href="/account/spending-limits"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.75 2C4.92494 2 1 5.76791 1 10.4C1 15.0321 4.92494 18.8 9.75 18.8C14.5751 18.8 18.5 15.0321 18.5 10.4C18.5 9.2475 18.2536 8.10768 17.7749 7.05078C17.7435 6.97668 17.697 6.90935 17.6382 6.85275C17.5793 6.79615 17.5092 6.75143 17.432 6.72121C17.3549 6.69099 17.2722 6.67589 17.1889 6.67679C17.1055 6.67769 17.0233 6.69458 16.9468 6.72646C16.8704 6.75834 16.8014 6.80457 16.7438 6.86242C16.6863 6.92028 16.6414 6.9886 16.6117 7.06337C16.5821 7.13813 16.5683 7.21783 16.5712 7.29778C16.5741 7.37773 16.5937 7.45631 16.6287 7.5289C17.039 8.43484 17.25 9.41213 17.25 10.4C17.25 14.3835 13.8996 17.6 9.75 17.6C5.6005 17.6 2.25 14.3835 2.25 10.4C2.25 6.41644 5.6005 3.2 9.75 3.2C10.7782 3.2 11.7953 3.40322 12.7383 3.79648C12.8139 3.83011 12.8958 3.84887 12.9791 3.85167C13.0624 3.85448 13.1454 3.84127 13.2233 3.81282C13.3012 3.78436 13.3723 3.74125 13.4326 3.686C13.4929 3.63076 13.5411 3.5645 13.5743 3.49112C13.6075 3.41775 13.6251 3.33873 13.626 3.25874C13.627 3.17874 13.6112 3.09937 13.5797 3.02529C13.5483 2.95122 13.5017 2.88393 13.4427 2.8274C13.3837 2.77087 13.3136 2.72622 13.2364 2.6961C12.1362 2.23729 10.9495 2 9.75 2Z"
                            fill="#2D4550"
                          ></path>
                          <path
                            d="M15.512 4.28509C15.3234 4.28269 15.1637 4.31791 15.0005 4.36595C14.6742 4.46203 14.3333 4.62157 13.9507 4.82767C13.1856 5.23986 12.2718 5.84168 11.358 6.48587C10.4441 7.13007 9.53554 7.8159 8.80547 8.38665C8.07547 8.9574 7.55166 9.38525 7.30891 9.6183C6.33779 10.5505 6.33779 12.0798 7.30891 13.012C8.27997 13.9443 9.87303 13.9443 10.844 13.012C11.0868 12.779 11.5325 12.2762 12.127 11.5753C12.7215 10.8745 13.436 10.0023 14.107 9.12494C14.778 8.24759 15.4049 7.37041 15.8343 6.63587C16.049 6.2686 16.2152 5.94133 16.3152 5.62806C16.3652 5.47142 16.402 5.31812 16.3995 5.13705C16.3995 4.95597 16.342 4.71279 16.148 4.5265C15.954 4.3402 15.7007 4.28757 15.512 4.28509ZM14.9041 5.72064C14.8453 5.83748 14.8253 5.90992 14.7442 6.04876C14.3623 6.70218 13.7547 7.55867 13.0999 8.41478C12.4451 9.27088 11.7407 10.1312 11.1578 10.8183C10.5748 11.5054 10.0836 12.0452 9.96028 12.1636C9.46691 12.6372 8.6861 12.6373 8.19266 12.1636C7.69929 11.69 7.69929 10.9404 8.19266 10.4667C8.31604 10.3483 8.87828 9.8767 9.59403 9.31712C10.3098 8.75754 11.206 8.08127 12.0977 7.45267C12.9895 6.82407 13.8817 6.24083 14.5623 5.87415C14.707 5.79624 14.7824 5.77681 14.9041 5.72064Z"
                            fill="#2D4550"
                          ></path>
                        </svg>
                      </div>
                      Finincial Transaction
                    </a>
                  </div>
                </section>
                <section
                  aria-labelledby="header-settings"
                  className="pb-10 lg:pb-4"
                >
                  <h3
                    id="header-settings"
                    className="text-lg font-bold pb-2 lg:px-7"
                  >
                    Settings
                  </h3>
                  <div className="bg-white flex flex-col px-5 py-2 rounded-lg shadow text-base lg:px-0 lg:bg-transparent lg:shadow-none">
                    <a
                      href="/account/notifications"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.4 3H3.6C2.72 3 2.008 3.72 2.008 4.6L2 14.2C2 15.08 2.72 15.8 3.6 15.8H16.4C17.28 15.8 18 15.08 18 14.2V4.6C18 3.72 17.28 3 16.4 3ZM15.6 14.2H4.4C3.96 14.2 3.6 13.84 3.6 13.4V6.2L9.152 9.672C9.672 10 10.328 10 10.848 9.672L16.4 6.2V13.4C16.4 13.84 16.04 14.2 15.6 14.2ZM10 8.6L3.6 4.6H16.4L10 8.6Z"></path>
                        </svg>
                      </div>
                      Support
                    </a>
                    <a
                      href="/account/id-verification"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.3333 9.74167L17.3 7.41667L17.5833 4.34167L14.575 3.65833L13 1L10.1667 2.21667L7.33333 1L5.75833 3.65833L2.75 4.33333L3.03333 7.41667L1 9.74167L3.03333 12.0667L2.75 15.15L5.75833 15.8333L7.33333 18.5L10.1667 17.275L13 18.4917L14.575 15.8333L17.5833 15.15L17.3 12.075L19.3333 9.74167ZM16.0417 10.975L15.575 11.5167L15.6417 12.225L15.7917 13.85L14.2083 14.2083L13.5083 14.3667L13.1417 14.9833L12.3167 16.3833L10.8333 15.7417L10.1667 15.4583L9.50833 15.7417L8.025 16.3833L7.2 14.9917L6.83333 14.375L6.13333 14.2167L4.55 13.8583L4.7 12.225L4.76667 11.5167L4.3 10.975L3.225 9.75L4.3 8.51667L4.76667 7.975L4.69167 7.25833L4.54167 5.64167L6.125 5.28333L6.825 5.125L7.19167 4.50833L8.01667 3.10833L9.5 3.75L10.1667 4.03333L10.825 3.75L12.3083 3.10833L13.1333 4.50833L13.5 5.125L14.2 5.28333L15.7833 5.64167L15.6333 7.26667L15.5667 7.975L16.0333 8.51667L17.1083 9.74167L16.0417 10.975Z"></path>
                          <path d="M8.57499 11.2083L6.64166 9.26662L5.40833 10.5083L8.57499 13.6833L14.6917 7.54995L13.4583 6.30829L8.57499 11.2083Z"></path>
                        </svg>
                      </div>
                      My Referrals
                    </a>
                    <Link
                     to="account"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.0001 5.14624C8.50015 5.14624 7.28011 6.36646 7.28011 7.86622V8.92408H6.93991C6.52267 8.92408 6.18445 9.2623 6.18445 9.67954V13.6842C6.18445 14.1012 6.52267 14.4396 6.93991 14.4396H13.0601C13.4773 14.4396 13.8155 14.1012 13.8155 13.6842V9.67972C13.8155 9.26248 13.4773 8.92426 13.0601 8.92426H12.7201V7.8664C12.7201 6.36646 11.4998 5.14624 10.0001 5.14624ZM8.79103 7.8664C8.79103 7.19986 9.33355 6.65752 10.0001 6.65752C10.6666 6.65752 11.209 7.19986 11.209 7.8664V8.92426H8.79103V7.8664ZM12.3046 12.9287H7.69555V10.4354H12.3044V12.9287H12.3046Z"></path>
                          <path d="M18.2444 9.24454C17.8271 9.24454 17.4889 9.58276 17.4889 10C17.4889 14.1294 14.1294 17.4889 10.0002 17.4889C5.87062 17.4889 2.5111 14.1294 2.5111 10C2.5111 5.87062 5.87062 2.51128 10 2.51128C11.5793 2.51128 13.098 3.0079 14.3571 3.90916H13.3597C12.9425 3.90916 12.6041 4.24738 12.6041 4.6648C12.6041 5.08204 12.9425 5.42026 13.3597 5.42026H16.2687C16.6859 5.42026 17.0241 5.08204 17.0241 4.6648V1.75564C17.0241 1.33822 16.6861 1 16.2687 1C15.8513 1 15.513 1.33822 15.513 1.75564V2.88694C13.9485 1.67338 12.0156 1 10 1C7.5961 1 5.33584 1.93618 3.6361 3.6361C1.936 5.33602 1 7.5961 1 10C1 12.4039 1.936 14.6642 3.6361 16.3639C5.33584 18.064 7.5961 19 10 19C12.4037 19 14.664 18.064 16.3637 16.3639C18.0638 14.6642 19 12.4039 19 10C19 9.58276 18.6616 9.24454 18.2444 9.24454Z"></path>
                        </svg>
                      </div>
                      Change Password
                    </Link>
                    <a
                      href="/account/marketing-preferences"
                      className="py-2 flex lg:px-7 lg:rounded-lg lg:active:bg-blue-lighter-01 lg:hover:bg-blue-lighter-04 lg:hover:text-blue text-base font-bold"
                    >
                      <div className="pl-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.2 4.2H13.6C13.6 2.432 12.168 1 10.4 1C8.632 1 7.2 2.432 7.2 4.2H5.6C4.72 4.2 4 4.92 4 5.8V15.4C4 16.28 4.72 17 5.6 17H15.2C16.08 17 16.8 16.28 16.8 15.4V5.8C16.8 4.92 16.08 4.2 15.2 4.2ZM10.4 2.6C11.28 2.6 12 3.32 12 4.2H8.8C8.8 3.32 9.52 2.6 10.4 2.6ZM15.2 15.4H5.6V5.8H7.2V7.4C7.2 7.84 7.56 8.2 8 8.2C8.44 8.2 8.8 7.84 8.8 7.4V5.8H12V7.4C12 7.84 12.36 8.2 12.8 8.2C13.24 8.2 13.6 7.84 13.6 7.4V5.8H15.2V15.4Z"></path>
                        </svg>
                      </div>
                      Log Out
                    </a>
                  </div>
                </section>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
