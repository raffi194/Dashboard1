import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TicketFooter = ({ setTicketData, isSubmitted }) => {
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [passengerName, setPassengerName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInputLimit = (e) => {
    const { id, value, dataset } = e.target;
    const maxLength = dataset.maxlength ? parseInt(dataset.maxlength) : null;
    let isValid = true;

    if (id === "passengerName") {
      isValid = /^[A-Za-z\s]*$/.test(value);
    } else if (["day", "month", "year"].includes(id)) {
      isValid = /^[0-9]*$/.test(value);
    }

    if (!isValid || (maxLength && value.length > maxLength)) return;

    switch (id) {
      case "day":
        setDate((prevDate) => ({ ...prevDate, day: value }));
        break;
      case "month":
        setDate((prevDate) => ({ ...prevDate, month: value }));
        break;
      case "year":
        setDate((prevDate) => ({ ...prevDate, year: value }));
        break;
      case "passengerName":
        setPassengerName(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (setTicketData) {
      setTicketData({ date, passengerName, email });
    }
  }, [date, passengerName, email, setTicketData]);

  // Redirect setelah submit ditekan di Tombol1.jsx
  useEffect(() => {
    if (isSubmitted) {
      console.log("isSubmitted:", isSubmitted);
      console.log("Passenger Name:", passengerName); // Debugging
  
      if (passengerName.trim() === "Raffiii") {
        console.log("Navigating to /dashboard");
        navigate("/dashboard");  // Pastikan path ini sesuai dengan Route di App.js
      } else {
        console.log("Navigating to /portofolio");
        navigate("/portofolio"); 
      }
    }
  }, [isSubmitted, passengerName, navigate]);  

  return (
    <div className="flex w-full mt-auto justify-between">
      <div className="flex flex-col">
        <span className="text-xs text-[--abuabu]">Date</span>
        <div className="flex flex-nowrap">
          <input
            id="day"
            type="text"
            placeholder="DD"
            className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-6"
            data-maxlength="2"
            onChange={handleInputLimit}
            value={date.day}
          />
          <span className="font-mono">/</span>
          <input
            id="month"
            type="text"
            placeholder="MM"
            className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-6"
            data-maxlength="2"
            onChange={handleInputLimit}
            value={date.month}
          />
          <span className="font-mono">/</span>
          <input
            id="year"
            type="text"
            placeholder="YYYY"
            className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-10"
            data-maxlength="4"
            onChange={handleInputLimit}
            value={date.year}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-[--abuabu]">Passenger</span>
        <input
          id="passengerName"
          type="text"
          placeholder="Name"
          className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-24"
          data-maxlength="10"
          onChange={handleInputLimit}
          value={passengerName}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-[--abuabu]">Email</span>
        <input
          id="email"
          type="email"
          placeholder="example@mail.com"
          className="font-mono text-[--putih] bg-transparent border-2 border-[--hitam] rounded-lg w-44"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
    </div>
  );
};

export default TicketFooter;