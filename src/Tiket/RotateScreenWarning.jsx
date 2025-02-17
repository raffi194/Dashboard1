import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';

export default function RotateScreenWarning({ onLoaded }) {
  const [showWarning, setShowWarning] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768; // Deteksi apakah mobile
      const isPortrait = window.innerHeight > window.innerWidth; // Cek apakah dalam mode portrait
      setShowWarning(isMobile && isPortrait);
    };

    checkOrientation(); // Cek saat pertama kali dimuat
    window.addEventListener("resize", checkOrientation); // Deteksi perubahan orientasi

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false); // Hanya tampilkan loading di awal
      if (onLoaded) onLoaded();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (showLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
        <div className="text-4xl font-semibold mb-5 animate__animated animate__swing">Loading...</div>
        
        <div class="hover:scale-110 transition-all ease-in-out cursor-pointer hover:shadow-xl hover:shadow-neutral-700 delay-250 animate-spin delay-50 duration-1000 bg-gradient-to-br border-4 shadow-inner shadow-neutral-700 border-neutral-950 from-white/80 to-gray-600 rounded-full grid place-items-center z-0 h-20 w-20 relative">
          <div class="rounded-full bg-neutral-900 absolute rotate-[90deg] z-20 h-20 scale-50 w-2"></div>
          <div class="rounded-full bg-neutral-900 absolute rotate-[180deg] z-20 h-20 scale-50 w-2"></div>
        </div>
      </div>
    );
  }

  if (showWarning) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
        <div className="text-2xl font-bold mb-4">Rotate Your Device</div>
        <div className="relative w-24 h-24 flex flex-col items-center justify-center">
          {/* Simulasi layar HP */}
          <FontAwesomeIcon
            icon={faMobileScreen}
            className="text-6xl text-white transform transition-transform animate-rotate-phone"
          />
        </div>
      </div>
    );
  }

  return null;
}
