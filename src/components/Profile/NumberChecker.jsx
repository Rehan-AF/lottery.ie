import { useMediaQuery } from 'react-responsive';
import '../../components/dataRangeSelector/Modal.css';
const NumberCheckerModal = ({
  open = false,
  setOpen,
  numberOfWiningNumber = 50,
  mainColor = 'red',
  winingNumber = [45, 6, 5, 8, 12, 1],
  selectedSlip = [23, 45, 34, 5, 6],
}) => {
  const isLargeScreen = useMediaQuery({ minWidth: 786 });
  const numberOfColumns = isLargeScreen ? 12 : 8;
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const renderNumbers = () => {
    const elements = [];
    for (let i = 1; i <= numberOfWiningNumber; i++) {
      elements.push(
        <div
          className={` border flex items-center justify-center cursor-pointer rounded-full  sm:w-9 md:w-[49px] sm:h-9 md:h-[49px] border-1 bg-white text-base font-bold ${
            winingNumber.includes(i)
              ? `!bg-[${mainColor}] ${
                  selectedSlip.includes(i) ? 'opacity-[1]' : 'opacity-[0.6]'
                } text-white border-[${mainColor}]`
              : ' text-[#2f4751] border-gray-500'
          } `}
          key={i}
        >
          <div aria-hidden="true">{i}</div>
          <input
            type="checkbox"
            className="opacity-0 absolute"
            name="balls"
            aria-label={i}
            value={i}
          />
        </div>
      );
    }
    return elements;
  };
  return (
    <>
      {open && (
        <div className="modal-container" onClick={handleCancel}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 pb-2">
              <div className="flex flex-col justify-end mb-4">
                <div className="rtl mb-3">
                  <p className="mb-2">Selected Slip</p>
                  <hr />
                </div>

                <div
                  className="grid justify-end rtl gap-[4px]"
                  style={{
                    gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
                  }}
                >
                  {selectedSlip.map((val, index) => {
                    return (
                      <div
                        className={` border flex items-center justify-center cursor-pointer rounded-full  sm:w-9 md:w-[49px] sm:h-9 md:h-[49px] border-1 bg-white text-base font-bold ${
                          winingNumber.includes(val)
                            ? `!bg-[${mainColor}] ${
                                selectedSlip.includes(val)
                                  ? 'opacity-[1]'
                                  : 'opacity-[0.5]'
                              } text-white border-[${mainColor}]`
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
              <div className="flex flex-col justify-start">
                <div className="rtl mb-4">
                  <p className="mb-3">Winning numbers</p>
                  <hr />
                </div>
                <div
                  className="grid justify-end rtl gap-[4px]"
                  style={{
                    gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
                  }}
                >
                  {/* {renderNumbers()} */}
                  {winingNumber.map((val, index) => {
                    return (
                      <div
                        className={` border flex items-center justify-center cursor-pointer rounded-full  sm:w-9 md:w-[49px] sm:h-9 md:h-[49px] border-1 bg-white text-base font-bold ${
                          winingNumber.includes(val)
                            ? `!bg-[${mainColor}] ${
                                selectedSlip.includes(val)
                                  ? 'opacity-[1]'
                                  : '!bg-green-500 text-[#2f4751] border-green-500'
                              } text-white border-[${mainColor}]`
                            : '!bg-green-500 text-[#2f4751] border-green-500'
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
              <div className="justify-center flex flex-row w-full md:w-auto mt-10">
                <button
                  className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 mr-2  p-4 text-gray-700 bg-white border-gray-700"
                  data-selected="false"
                  onClick={handleCancel}
                >
                  <span className="text-gray-700">cancle</span>
                </button>
                <button
                  className="shadow_md flex items-center justify-center rounded-full border text-sm transition duration-150 uppercase font-bold w-full sm:w-44 md:w-48 lg:w-64 h-12 shadow-button hover:shadow-button-hov p-4 text-gray-700 bg-[#c4dc33] active:bg-[#b1cc10] border-[#b1cc10] "
                  data-selected="false"
                  onClick={handleOk}
                >
                  <span>Confirm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NumberCheckerModal;
