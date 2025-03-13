import React from 'react';
import copyToClipboard from '../utils/copyToClipboard'; // Importa la función

const LargeContent = ({ display, content, className }) => {

  const handleClick = (event) => {
    event.target.classList.add("selected");
  };

  return (
    <div>
      <div
        className={`clickable ${className}`}

        onClick={(event) => {
          handleClick(event);
          copyToClipboard(content);
        }}
      >
        {display}
      </div>
    </div>
  );
};

export default LargeContent;