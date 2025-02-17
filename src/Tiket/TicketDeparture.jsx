import React, { useState } from 'react';

const TicketDeparture = ({ setInstitution }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const value = e.target.value.toUpperCase().slice(0, 5); // Batasi 5 karakter
    setInputValue(value);

    if (typeof setInstitution === 'function') { 
      setInstitution(value); // Hanya panggil jika setInstitution adalah fungsi
    }
  };

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
