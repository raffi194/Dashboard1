import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Ambil data dari localStorage
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  return (
    <div className="p-6 bg-[--putih] shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-[--hitam]">
          <thead>
            <tr className="bg-[--abuabu]">
              <th className="border border-[--hitam] p-2">Institution</th>
              <th className="border border-[--hitam] p-2">Date</th>
              <th className="border border-[--hitam] p-2">Passenger</th>
              <th className="border border-[--hitam] p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className="text-center hover:bg-gray-100 transition">
                  <td className="border border-[--hitam] p-2">{user.institution}</td>
                  <td className="border border-[--hitam] p-2">{`${user.date.day}/${user.date.month}/${user.date.year}`}</td>
                  <td className="border border-[--hitam] p-2">{user.passengerName}</td>
                  <td className="border border-[--hitam] p-2 break-words">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center border border-[--hitam] p-2">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
