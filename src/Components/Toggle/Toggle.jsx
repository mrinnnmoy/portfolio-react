import React from 'react';
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const Toggle = () => {
  return (
    <div className='toggle'>
        <Moon />
        <Sun />
      
      <div className="t-button" style={{left: "2px", right: "2px"}}></div>
    </div>
  );
};

export default Toggle;