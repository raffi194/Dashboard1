import React, { useState, useEffect } from 'react';

const TicketDeparture = ({ setInstitution }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const value = e.target.value.toUpperCase();
    setInputValue(value);
  };

  useEffect(() => {
    if (typeof setInstitution === 'function') {
      setInstitution(inputValue);
    }
  }, [inputValue, setInstitution]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        className="uppercase text-4xl font-bold text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-36 text-center"
        maxLength={5}
        placeholder="....."
        aria-label="Institution"
      />
      <span className="text-[--abuabu] text-sm">Institution</span>
    </div>
  );
};

export default TicketDeparture;