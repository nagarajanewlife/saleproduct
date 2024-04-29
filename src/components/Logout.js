// Logout.js
import React from "react";

const Logout = ({ onLogout }) => {
  // Perform logout actions
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
