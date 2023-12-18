import { useEffect, useState } from 'react';
import { Modal } from 'antd';

import OnlySelect from './onlySelect';
const OnlyNumberSelector = ({ numberOfWiningNumber = 50, index }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    // setLoading(true);
    setTimeout(() => {
      // setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="shadow_md relative text-center rounded-full p-2 border border-gray-300 hover:shadow-hover cursor-pointer bg-white w-min"
        onClick={showModal}
      >
        <div className="inline-flex justify-center z-2 pt-1 mx-1 space-x-1">
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div
            className="rounded-full flex font-bold justify-center items-center relative bg-gray-100 w-7 md:w-10 h-7 md:h-10 text-base md:text-2xl"
            aria-hidden="true"
          >
            <span className="absolute opacity-0 w-full h-full"></span>
            <span aria-hidden="true"></span>
          </div>
          <div className="absolute inline z-1 w-auto mx-auto top-1/3 left-0 right-0 text-center">
            <p aria-label="Enter Numbers" className="font-bold text-lg">
              <span className="inline-flex relative">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7625 5.26325C13.7218 5.26325 14.4991 6.04055 14.4991 6.99984C14.4991 7.46593 14.313 7.90555 13.9902 8.22831C13.6676 8.55093 13.2279 8.73678 12.7622 8.73678L9.23582 8.73703L9.23582 12.2631C9.23582 12.7292 9.04976 13.1688 8.727 13.4915C8.40439 13.8142 7.96466 14 7.49888 14C6.53959 14 5.7623 13.2227 5.7623 12.2634L5.7623 8.73678H2.23565C1.27635 8.73678 0.49906 7.95949 0.49906 7.00019C0.49906 6.0409 1.27671 5.26325 2.236 5.26325L5.76204 5.26325L5.7623 1.73696C5.7623 0.777663 6.53994 1.80256e-05 7.49924 1.86999e-05C8.45853 1.85313e-05 9.23582 0.777313 9.23582 1.73661L9.23582 5.26325L12.7625 5.26325Z"
                    fill="#2D4550"
                  ></path>
                </svg>
              </span>
              <span> Enter Numbers</span>
            </p>
          </div>
        </div>
      </button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="">
          <OnlySelect
            number={numberOfWiningNumber}
            handleCancel={handleCancel}
          />
        </div>
      </Modal>
    </>
  );
};
export default OnlyNumberSelector;
