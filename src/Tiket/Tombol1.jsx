import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tombol1 = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true);
  };

  return (
    <div className="flex flex-col items-center">
      <button className="cursor-pointer mt-4" onClick={handleClick}>
        <div className="w-[83px] h-[83px] bg-[#389C9A] rounded-full relative shadow-[inset_0px_0px_1px_1px_rgba(0,0,0,0.3),_2px_3px_5px_rgba(0,0,0,0.1)] flex items-center justify-center transition-transform duration-200 ease-in-out transform active:scale-95 active:shadow-[0px_2px_5px_rgba(0,0,0,0.2)]">
          <div className="absolute w-[72px] h-[72px] z-10 bg-black rounded-full left-1/2 -translate-x-1/2 top-[5px] blur-[1px]" />
          <label className="group cursor-pointer absolute w-[72px] h-[72px] bg-gradient-to-b from-[#2B7B77] to-[#3AB8A0] rounded-full left-1/2 -translate-x-1/2 top-[5px] shadow-[inset_0px_4px_2px_rgba(0,0,0,0.5),inset_0px_-4px_0px_rgba(0,0,0,0.5),0px_0px_2px rgba(0,0,0,10)] active:shadow-[inset_0px_4px_2px rgba(56,156,154,0.5),inset_0px_-4px_2px rgba(56,156,154,0.5),0px_0px_2px rgba(0,0,0,10)] z-20 flex items-center justify-center transition-transform duration-200 ease-in-out transform active:scale-95">
            <div className="w-8 group-active:w-[31px] fill-blue-100 drop-shadow-[0px_2px_2px rgba(0,0,0,0.5)]">
              <i className="fa-solid fa-play text-5xl text-white" />
            </div>
          </label>
        </div>
      </button>
      {/* Container untuk Toast Notifikasi */}
      <ToastContainer />
    </div>
  );
};

export default Tombol1;
