import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiSettings, FiLogOut, FiUser, FiBriefcase, FiCalendar, FiGlobe, FiFolder } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[--hitam] text-[--putih] p-5 flex flex-col shadow-lg">
      <h2 className="text-xl font-bold mb-6">Portofolio</h2>
      <nav className="flex flex-col space-y-5">
        <NavItem to="/IsiDashboard" icon={<FiHome />} text="Dashboard" location={location} />
        <NavItem to="/users" icon={<FiUsers />} text="Users" location={location} />

        <div className="mt-4 space-y-3">
          <h3 className="text-lg font-semibold mb-2">Edit</h3>
          <NavItem to="/editprofile" icon={<FiUser />} text="Edit Profile" location={location} />
          <NavItem to="/projects" icon={<FiFolder />} text="Projects" location={location} />
        </div>

        <NavItem to="/settings" icon={<FiSettings />} text="Settings" location={location} />
        <NavItem to="/logout" icon={<FiLogOut />} text="Logout" location={location} specialColor="bg-red-500" />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text, location, specialColor }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 p-2 rounded transition-all duration-300 ${
        isActive ? 'bg-[--ijo]' : 'hover:bg-[--ijo]'
      } ${specialColor || ''}`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
