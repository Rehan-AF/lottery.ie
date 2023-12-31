import { useEffect, useState } from 'react';
import flag from '../../assets/iranFlag.svg';

const FloatingLabelInput = ({
  label = 'label',
  id,
  type,
  name,
  onChange,
  value = '',
  errors = false,
  touched = false,
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
        className={`rtl input_container ${
          isFocused || inputValue ? 'focused' : ''
        } ${
          (errors && isFieldUsed) || (errors && touched)
            ? '!border-red-500'
            : ''
        } max-w-[378px] sm:w-[295px] md:w-[378px]`}
      >
        <label
          className={`rtl floating-label ${
            (errors && isFieldUsed) || (errors && touched)
              ? '!text-red-500'
              : ''
          }`}
        >
          {label}
        </label>
        <div
          className={`rtl relative ${
            type === 'password' ? 'flex justify-between items-center' : ''
          }`}
        >
          {type === 'tel' && (
            <div className="absolute left-0 flex flex-row-reverse items-center top-1/2 transform -translate-y-1/2">
              <img src={flag} className="w-[38px]" />
              <div className="ml-2" style={{ direction: 'ltr' }}>
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
            name={name}
            className={`rtl bg-transparent ${
              type === 'password' ? 'w-[calc(100%-35px)]' : 'w-full'
            } `}
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
        </div>
      </div>
      {(errors && isFieldUsed) || (errors && touched) ? (
        <div className="rtl max-w-[378px] sm:w-[300px] md:w-[378px] text-end text-red-500">
          {errors}
        </div>
      ) : null}
    </div>
  );
};

export default FloatingLabelInput;
