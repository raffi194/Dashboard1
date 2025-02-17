import React, { useState } from 'react';

const TicketFooter = ({ setTicketData }) => {
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [passengerName, setPassengerName] = useState('');
  const [email, setEmail] = useState('');

  // Fungsi untuk membatasi input berdasarkan maxlength
  const handleInputLimit = (e) => {
    const { id, value, dataset } = e.target;
    const maxLength = dataset.maxlength ? parseInt(dataset.maxlength) : null;
    let isValid = true;

    if (id === 'passengerName') {
      isValid = /^[A-Za-z\s]*$/.test(value); // Hanya huruf dan spasi
    } else if (['day', 'month', 'year'].includes(id)) {
      isValid = /^[0-9]*$/.test(value); // Hanya angka
    }

    if (!isValid) return;
    if (maxLength && value.length > maxLength) return;

    // Update state berdasarkan id input
    switch (id) {
      case 'day': 
        setDate((prevDate) => ({ ...prevDate, day: value })); 
        break;
      case 'month': 
        setDate((prevDate) => ({ ...prevDate, month: value })); 
        break;
      case 'year': 
        setDate((prevDate) => ({ ...prevDate, year: value })); 
        break;
      case 'passengerName': 
        setPassengerName(value); 
        break;
      default: 
        break;
    }
  };

  return (
    <div className="flex w-full mt-auto justify-between">
      <div className="flex flex-col">
        <span className="text-xs text-[--abuabu]">Date</span>
        <div className="flex flex-nowrap">  
          <input id="day" type="text" placeholder="DD" 
            className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-6" 
            data-maxlength="2" onInput={handleInputLimit} value={date.day} />
          <span className="font-mono">/</span>
          <input id="month" type="text" placeholder="MM" 
            className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-6" 
            data-maxlength="2" onInput={handleInputLimit} value={date.month} />
          <span className="font-mono">/</span>
          <input id="year" type="text" placeholder="YYYY" 
            className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-10" 
            data-maxlength="4" onInput={handleInputLimit} value={date.year} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-[--abuabu]">Passenger</span>
        <input id="passengerName" type="text" placeholder="Name" 
          className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-24" 
          data-maxlength="10" onInput={handleInputLimit} value={passengerName} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-[--abuabu]">Email</span>
        <input id="email" type="email" placeholder="example@mail.com" 
          className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-44" 
          onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
    </div>
  );
};

export default TicketFooter;
