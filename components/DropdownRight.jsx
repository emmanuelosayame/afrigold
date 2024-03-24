// Dropdown.js
// Dropdown.js
import React from 'react';

const DropdownRight = ({ options, onSelect, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="dropdown-right">
      {options.map((option) => (
        <div key={option} onClick={() => onSelect(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default DropdownRight;

