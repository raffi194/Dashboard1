import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Tiket from "./Tiket";

const AuthGuard = () => {
  const [passengerID, setPassengerID] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (passengerID === "Raffiii") {
      setAuthenticated(true);
    } else {
      alert("Access Denied! Only Raffiii can access Dashboard.");
    }
  };

  return (
    <div>
      {!authenticated ? (
        <div>
          <Tiket />
          <div className="p-4 bg-white shadow-md rounded-md text-center">
            <h2 className="text-xl font-semibold mb-4">Enter Passenger ID</h2>
            <input
              type="text"
              placeholder="Enter Passenger ID"
              value={passengerID}
              onChange={(e) => setPassengerID(e.target.value)}
              className="border p-2 rounded w-full mb-2"
            />
            <button
              onClick={handleLogin}
              className="bg-[--ijo] text-white p-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default AuthGuard;
