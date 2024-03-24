// Dropdown.js
// Dropdown.js
import React from 'react';

const DropdownLeft = ({ options, onSelect, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="dropdown-left">
      {options.map((option) => (
        <div key={option} onClick={() => onSelect(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default DropdownLeft;

