import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiUsers, FiSettings, FiLogOut, FiUser, FiFolder } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Menggunakan useNavigate untuk navigasi programatik

  const handleLogout = () => {
    // Anda bisa menambahkan logika untuk logout, misalnya menghapus token atau session
    navigate('/');  // Arahkan ke halaman utama setelah logout
  };

  return (
    <div className="w-64 bg-[--hitam] text-[--putih] p-5 flex flex-col shadow-lg min-h-screen">
      <h2 className="text-xl font-bold mb-6">Portofolio</h2>
      <nav className="flex flex-col space-y-2">
        <NavItem to="/dashboard/Isidashboard" icon={<FiHome />} text="Dashboard" location={location} /> 
        <NavItem to="/dashboard/users" icon={<FiUsers />} text="Users" location={location} />

        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-semibold mb-2">Edit</h3>
          <NavItem to="/dashboard/editprofile" icon={<FiUser />} text="Edit Profile" location={location} />
          <NavItem to="/dashboard/projects" icon={<FiFolder />} text="Projects" location={location} />
        </div>

        <NavItem to="/dashboard/settings" icon={<FiSettings />} text="Settings" location={location} />

        <div className="mt-auto">
          <div onClick={handleLogout} className="flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 bg-red-500 text-white hover:bg-red-600 cursor-pointer">
            <FiLogOut />
            <span>Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text, location, specialColor }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 
        ${isActive ? 'bg-[--ijo] font-bold border-l-4 border-[--ijo] pl-2' : 'hover:bg-[--ijo]'} 
        ${specialColor || 'text-[--putih]'}`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
