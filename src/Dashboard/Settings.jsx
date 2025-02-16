import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 text-[--putih]">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-[--hitam] p-4 rounded-lg shadow-md">
        <label className="block mb-2">Change Password:</label>
        <input type="password" placeholder="New Password" className="w-full p-2 rounded bg-gray-800 text-white mb-4" />
        <button className="bg-[--ijo] px-4 py-2 rounded hover:bg-green-600">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
