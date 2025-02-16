import React, { useState, useEffect } from "react";
import { FiBell, FiUser } from "react-icons/fi";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(storedNotifications);
  }, []);

  return (
    <header className="w-full bg-[--hitam] text-[--putih] p-4 shadow-md flex justify-between items-center relative">
      <h1 className="text-lg md:text-xl ml-14 font-bold text-[--putih]">Admin Dashboard</h1>

      <button className="md:hidden p-2 text-[--putih]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute md:relative top-16 right-4 md:top-0 md:right-0 bg-[--hitam] md:bg-transparent 
                    p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none 
                    flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-6 
                    transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:flex`}
      >
        <div className="relative">
          <button className="relative p-2 hover:bg-gray-700 rounded" onClick={() => setNotifOpen(!notifOpen)}>
            <FiBell size={20} style={{ color: "var(--putih)" }} />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-[--merah] text-[--putih] text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-[--hitam] shadow-lg rounded-lg p-3 z-10">
              <h3 className="text-sm font-bold mb-2">Notifikasi</h3>
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <div key={index} className="p-2 text-sm border-b border-gray-600 last:border-none">
                    {notif.message} <br />
                    <span className="text-xs text-gray-400">{notif.timestamp}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">Tidak ada notifikasi</p>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <FiUser size={20} style={{ color: "var(--putih)" }} />
          <span className="text-[--putih] font-bold">Raffi</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
