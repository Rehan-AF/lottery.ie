import { useEffect, useState } from 'react';
import flag from '../../assets/iranFlag.svg';
import { Tooltip } from 'antd';

const DynamicLabel = ({
  label = 'label',
  id,
  type,
  name,
  onChange,
  value = false,
  errors = false,
  touched = false,
  disable = false,
  tooltip = false,
  tooltipText = '',
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFieldUsed, setIsFieldUsed] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsFieldUsed(true);
  };
  useEffect(() => {
    if (disable === true) {
      setIsFocused(true);
    }
  }, [disable]);
  useEffect(() => {
    if (inputValue === '') {
      setIsFieldUsed(false);
    }
    if (inputValue == true) {
      setIsFieldUsed(true);
    }
  }, [inputValue]);
  const handleBlur = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div
        className={`rtl input_container1 ${
          isFocused || inputValue ? 'focused' : ''
        } ${
          (errors && isFieldUsed) || (errors && touched)
            ? '!border-red-500'
            : ''
        } ${
          disable === true ? 'border-[#adadad]' : ''
        } max-w-[503px] sm:w-[309px] md:w-[503px]`}
      >
        <label
          className={`rtl floating-label ${
            (errors && isFieldUsed) || (errors && touched)
              ? '!text-red-500'
              : ''
          } ${disable === true ? '!text-[#adadad]' : ''}`}
        >
          {label}
        </label>
        <div
          className={`rtl relative ${
            type === 'password' ? 'flex justify-between items-center' : ''
          }`}
        >
          {type === 'tel' && (
            <div className="absolute left-0">
              <img src={flag} className="w-[48px]" />
              <div
                className="absolute left-[60px] top-[15px]"
                style={{ direction: 'ltr' }}
              >
                +98
              </div>
            </div>
          )}
          <input
            id={id}
            type={
              type === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : 'text'
            }
            disabled={disable}
            name={name}
            className={`rtl bg-transparent ${
              type === 'password' ? 'w-[calc(100%-35px)]' : 'w-full'
            } ${disable === true ? '!text-[#adadad]' : ''}`}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ appearance: 'none', outline: 'none' }}
          />
          {type === 'password' && (
            <button
              type="button"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <path d="M21.9084 11.6627C20.8925 9.93822 19.444 8.50871 17.7063 7.51556C15.9685 6.5224 14.0016 6 12 6C9.99843 6 8.03151 6.5224 6.29373 7.51556C4.55595 8.50871 3.10749 9.93822 2.09155 11.6627C2.0316 11.765 2 11.8814 2 12C2 12.1186 2.0316 12.235 2.09155 12.3373C3.10749 14.0618 4.55595 15.4913 6.29373 16.4844C8.03151 17.4776 9.99843 18 12 18C14.0016 18 15.9685 17.4776 17.7063 16.4844C19.444 15.4913 20.8925 14.0618 21.9084 12.3373C21.9684 12.235 22 12.1186 22 12C22 11.8814 21.9684 11.765 21.9084 11.6627ZM12 16.6665C10.2983 16.6648 8.62409 16.2369 7.13032 15.4217C5.63656 14.6066 4.37081 13.4302 3.44867 12C4.36958 10.5687 5.63506 9.39137 7.12911 8.57607C8.62315 7.76077 10.298 7.33353 12 7.33353C13.702 7.33353 15.3768 7.76077 16.8709 8.57607C18.3649 9.39137 19.6304 10.5687 20.5513 12C19.6292 13.4302 18.3634 14.6066 16.8697 15.4217C15.3759 16.2369 13.7017 16.6648 12 16.6665ZM12 8.6668C11.3407 8.6668 10.6963 8.86229 10.1481 9.22854C9.59996 9.5948 9.17272 10.1154 8.92043 10.7244C8.66814 11.3335 8.60213 12.0037 8.73074 12.6503C8.85936 13.2969 9.17683 13.8908 9.643 14.3569C10.1092 14.8231 10.7031 15.1405 11.3497 15.2692C11.9963 15.3978 12.6665 15.3318 13.2756 15.0795C13.8847 14.8272 14.4053 14.4 14.7715 13.8518C15.1378 13.3037 15.3333 12.6592 15.3333 12C15.3323 11.1163 14.9807 10.2691 14.3559 9.64422C13.731 9.01935 12.8837 8.66784 12 8.6668ZM12 13.9999C11.6044 13.9999 11.2178 13.8826 10.8889 13.6629C10.56 13.4431 10.3036 13.1308 10.1523 12.7653C10.0009 12.3999 9.96128 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1157 11.6098 10.0385C11.9978 9.96134 12.3999 10.0009 12.7654 10.1523C13.1308 10.3037 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6045 14 12C13.9994 12.5302 13.7885 13.0386 13.4136 13.4135C13.0386 13.7884 12.5302 13.9993 12 13.9999Z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <path d="M21.9084 11.6627C20.8925 9.93822 19.444 8.50871 17.7063 7.51556C15.9685 6.5224 14.0016 6 12 6C9.99843 6 8.03151 6.5224 6.29373 7.51556C4.55595 8.50871 3.10749 9.93822 2.09155 11.6627C2.0316 11.765 2 11.8814 2 12C2 12.1186 2.0316 12.235 2.09155 12.3373C3.10749 14.0618 4.55595 15.4913 6.29373 16.4844C8.03151 17.4776 9.99843 18 12 18C14.0016 18 15.9685 17.4776 17.7063 16.4844C19.444 15.4913 20.8925 14.0618 21.9084 12.3373C21.9684 12.235 22 12.1186 22 12C22 11.8814 21.9684 11.765 21.9084 11.6627ZM12 16.6665C10.2983 16.6648 8.62409 16.2369 7.13032 15.4217C5.63656 14.6066 4.37081 13.4302 3.44867 12C4.36958 10.5687 5.63506 9.39137 7.12911 8.57607C8.62315 7.76077 10.298 7.33353 12 7.33353C13.702 7.33353 15.3768 7.76077 16.8709 8.57607C18.3649 9.39137 19.6304 10.5687 20.5513 12C19.6292 13.4302 18.3634 14.6066 16.8697 15.4217C15.3759 16.2369 13.7017 16.6648 12 16.6665ZM12 8.6668C11.3407 8.6668 10.6963 8.86229 10.1481 9.22854C9.59996 9.5948 9.17272 10.1154 8.92043 10.7244C8.66814 11.3335 8.60213 12.0037 8.73074 12.6503C8.85936 13.2969 9.17683 13.8908 9.643 14.3569C10.1092 14.8231 10.7031 15.1405 11.3497 15.2692C11.9963 15.3978 12.6665 15.3318 13.2756 15.0795C13.8847 14.8272 14.4053 14.4 14.7715 13.8518C15.1378 13.3037 15.3333 12.6592 15.3333 12C15.3323 11.1163 14.9807 10.2691 14.3559 9.64422C13.731 9.01935 12.8837 8.66784 12 8.6668ZM12 13.9999C11.6044 13.9999 11.2178 13.8826 10.8889 13.6629C10.56 13.4431 10.3036 13.1308 10.1523 12.7653C10.0009 12.3999 9.96128 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1157 11.6098 10.0385C11.9978 9.96134 12.3999 10.0009 12.7654 10.1523C13.1308 10.3037 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6045 14 12C13.9994 12.5302 13.7885 13.0386 13.4136 13.4135C13.0386 13.7884 12.5302 13.9993 12 13.9999Z"></path>
                  <path d="M17.3844 5.54774C17.6818 5.24523 18.2045 5.27687 18.5519 5.61842C18.8994 5.95996 18.9399 6.48206 18.6426 6.78457L6.79656 18.8348C6.49918 19.1373 5.97646 19.1057 5.62903 18.7641C5.2816 18.4226 5.24103 17.9005 5.53841 17.598L17.3844 5.54774Z"></path>
                </svg>
              )}
            </button>
          )}
          <div className="absolute flex items-center gap-2 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {tooltip === true ? (
              <Tooltip
                placement="bottom"
                color={'#2c444e'}
                key={'red'}
                title={tooltipText}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                    stroke="#2D4550"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M8.88867 8.88894C8.88867 8.27529 9.38613 7.77783 9.99978 7.77783C10.6134 7.77783 11.1109 8.27529 11.1109 8.88894V15.0001C11.1109 15.6137 10.6134 16.1112 9.99978 16.1112C9.38613 16.1112 8.88867 15.6137 8.88867 15.0001V8.88894Z"
                    fill="#2D4550"
                  ></path>
                  <rect
                    x="8.61133"
                    y="3.88867"
                    width="2.77778"
                    height="2.77778"
                    rx="1.38889"
                    fill="#2D4550"
                  ></rect>
                </svg>
              </Tooltip>
            ) : null}
            {disable === true ? (
              <svg
                className="w-4 "
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.23324 18.144H14.32C15.2479 18.144 16 17.3916 16 16.464V7.7294C16 6.80148 15.2479 6.0494 14.32 6.0494H13.9966V5.71984H13.986C13.9848 2.56088 11.4234 0 8.26416 0C5.10408 0 2.5698 2.56172 2.5698 5.7218C2.5698 5.83744 2.56532 5.94468 2.56504 6.0494H2.23352C1.3056 6.0494 0.55352 6.80148 0.55352 7.7294V16.464C0.55324 17.3919 1.30504 18.144 2.23324 18.144ZM8.25268 2.01684C10.2942 2.01684 11.949 3.67164 11.9498 5.71256H11.9568V6.0494H4.57208V6.0228C4.56256 5.92536 4.55528 5.82456 4.55528 5.71396C4.55556 3.6722 6.21092 2.01684 8.25268 2.01684ZM2.55944 8.74524C2.55944 8.37396 2.86044 8.07324 3.23144 8.07324H13.3201C13.6911 8.07324 13.9921 8.37396 13.9921 8.74524V15.4594C13.9921 15.8306 13.6911 16.1314 13.3201 16.1314H3.23144C2.86044 16.1314 2.55944 15.8304 2.55944 15.4594V8.74524ZM8.11296 14.1058H8.44896C8.91124 14.1058 9.28588 13.7312 9.28588 13.2689V10.9472C9.28588 10.4849 8.91124 10.1102 8.44896 10.1102H8.11296C7.65068 10.1102 7.27604 10.4849 7.27604 10.9472V13.2689C7.27576 13.7312 7.65068 14.1058 8.11296 14.1058Z"
                  fill="#ADADAD"
                ></path>
              </svg>
            ) : null}
          </div>
        </div>
      </div>
      {(errors && isFieldUsed) || (errors && touched) ? (
        <div className="rtl max-w-[503px] sm:w-[309px] md:w-[503px] text-end text-red-500">
          {errors}
        </div>
      ) : null}
    </div>
  );
};

export default DynamicLabel;
