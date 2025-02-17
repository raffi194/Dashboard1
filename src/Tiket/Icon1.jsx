import React from 'react';

const Icon1 = () => {
  return (
    <div>
      <div className="absolute -top-8 right-28 text-[--kuning]">
        <i class="fa-solid fa-sun text-9xl"></i>
      </div>
      <div className="absolute top-40 left-24 text-[--biru]">
        <i className="fa-solid fa-cloud text-9xl" />
      </div>
      <div className="absolute top-48 left-16 text-[--putih]">
        <i className="fa-solid fa-dove text-2xl" />
      </div>
      <div className="absolute top-20 left-32 text-[--putih]" style={{ transform: 'rotate(160deg)', display: 'inline-block' }}>
        <i className="fa-solid fa-plane text-8xl" />
      </div>
    </div>
  );
};

export default Icon1;