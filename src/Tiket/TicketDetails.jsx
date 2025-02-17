import React from 'react';

const TicketDetails = () => {
  return (
    <div className="flex flex-col flex-grow items-center px-10">
      <span className="font-bold text-xs text-[--putih]">SI 23</span>
      <div className="w-full flex items-center mt-2">
        <div className="w-3 h-3 rounded-full border-2 border-[--hitam]" />
        <div className="flex-grow border-t-2 border-[--ijo] border-dotted h-px" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 mx-2 text-[--putih]"
        >
          <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
        </svg>
        <div className="flex-grow border-t-2 border-[--ijo] border-dotted h-px" />
        <div className="w-3 h-3 rounded-full border-2 border-[--hitam]" />
      </div>
      <div className="flex items-center px-3 rounded-full bg-[--ijo] h-8 mt-2">
        <span className="text-sm text-[--hitam]">19h 04m</span>
      </div>
    </div>
  );
};

export default TicketDetails;