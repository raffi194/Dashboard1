import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://your-api.com/users`); // Ganti dengan URL API yang sebenarnya
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const data = await response.json();
        setUsers(data);

        // Simpan aktivitas ke notifikasi
        const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
        const newNotification = {
          id: new Date().getTime(),
          message: `📌 Data user diperbarui (${data.length} user terdeteksi).`,
          timestamp: new Date().toLocaleString(),
        };
        localStorage.setItem("notifications", JSON.stringify([...notifications, newNotification]));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-[--putih] shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-[--hitam]">
          <thead>
            <tr className="bg-[--abuabu]">
              <th className="border border-[--hitam] p-2">Name</th>
              <th className="border border-[--hitam] p-2">Institution</th>
              <th className="border border-[--hitam] p-2">Date</th>
              <th className="border border-[--hitam] p-2">Passenger</th>
              <th className="border border-[--hitam] p-2">Email</th>
              <th className="border border-[--hitam] p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="text-center hover:bg-gray-100 transition">
                  <td className="border border-[--hitam] p-2">{user.name}</td>
                  <td className="border border-[--hitam] p-2">{user.institution}</td>
                  <td className="border border-[--hitam] p-2">{user.date}</td>
                  <td className="border border-[--hitam] p-2">{user.passenger}</td>
                  <td className="border border-[--hitam] p-2 break-words">{user.email}</td>
                  <td className="border border-[--hitam] p-2">{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center border border-[--hitam] p-2">
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
