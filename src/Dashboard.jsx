import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Dashboard/Sidebar";
import Header from "./Dashboard/Header";
import IsiDashboard from "./Dashboard/IsiDashboard";
import Users from "./Dashboard/Users";
import Settings from "./Dashboard/Settings";
import EditProfile from './Dashboard/pages/EditProfile';
import Projects from './Dashboard/pages/Projects';
import { Menu, X } from 'lucide-react'; 

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fungsi untuk menutup sidebar saat klik di luar sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar-container") && !event.target.closest(".hamburger-btn")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      {/* Sidebar (Responsif) */}
      <div
        className={`fixed md:relative top-0 left-0 h-full bg-[--hitam] text-white z-50 
                    transition-transform duration-300 sidebar-container 
                    w-64 md:w-60 lg:w-72 
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0`}
        onClick={(e) => e.stopPropagation()} // Mencegah event klik menutup sidebar langsung
      >
        <Sidebar />
      </div>

      {/* Tombol Hamburger (Hanya tampil di Mobile) */}
      <button
        className="absolute top-4 left-4 md:hidden text-white p-2 rounded z-50 hamburger-btn"
        onClick={(e) => {
          e.stopPropagation(); // Mencegah event klik menutup sidebar langsung
          setSidebarOpen(!sidebarOpen);
        }}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 md:p-6 flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<IsiDashboard />} /> {/* Default ke IsiDashboard */}
          <Route path="Isidashboard" element={<IsiDashboard />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Routes>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
