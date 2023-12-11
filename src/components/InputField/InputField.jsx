import React, { useState } from 'react';
import './styles.css';

const FloatingLabelInput = ({
  label = 'label',
  id,
  type,
  name,
  onChange,
  value = '',
  errors = false,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  console.log(errors);
  const handleFocus = () => {
    setIsFocused(true);
  };

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

  return (
    <div
      className={`rtl input_container ${
        isFocused || inputValue ? 'focused' : ''
      } ${errors ? '!border-red-500' : ''}`}
    >
      <label
        className={`rtl text-end floating-label ${
          errors ? '!text-red-500' : ''
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className="rtl text-end"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FloatingLabelInput;
