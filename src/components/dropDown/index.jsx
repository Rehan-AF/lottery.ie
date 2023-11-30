import { useState } from 'react';
import './style.css'; // Import your CSS file for styling

const DropDown = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative dropdown-container">
      <button onClick={() => setVisible(!visible)}>Toggle Dropdown</button>
      {visible ? (
        <div
          className={`absolute mt-[10px] z-10 animate__animated animate__pulse w-[w-full] bg-white p-[1rem] rounded-md`}
        >
          <div className=" flex gap-[1rem] animate__delay-1s">{children}</div>
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
