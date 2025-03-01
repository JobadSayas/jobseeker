import React from 'react';
import copyToClipboard from '../utils/copyToClipboard'; // Importa la función

const Content = ({ label, content, className }) => {

  const handleClick = (event) => {
    event.target.classList.add("selected");
  };

  return (
    <div>
      <label className='font-bold'>{label}</label>
      <div
        className={`clickable ${className}`}

        onClick={(event) => {
          handleClick(event);
          copyToClipboard(content);
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Content;