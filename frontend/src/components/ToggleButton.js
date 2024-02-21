import React, { useState } from 'react';
import './Toggle.css';export default function ToggleButton() {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleChange = () => {
      setIsToggled(!isToggled);
    };
  
    return (
        <button
        onClick={handleChange}
        className={`toggle-button ${isToggled ? 'on' : 'off'}`}
        aria-label="Toggle button"
      >
        {isToggled ? 'ON' : 'OFF'}
      </button>
    );
  }
  
    