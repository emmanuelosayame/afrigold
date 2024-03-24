import React from 'react';

const HeartIcon = ({ filled, onClick }) => {
  return (
    <button className="favorite-button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={filled ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="heart-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l-1-1-1 1M5.06 8.935A7.992 7.992 0 0112 4.2a7.992 7.992 0 016.94 4.734L12 17l-6.94-8.066z"
        />
      </svg>
    </button>
  );
};

export default HeartIcon;
