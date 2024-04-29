// Login.js
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onLogin(username, password);
      setIsLoggedIn(true); // Set to true on successful login
    } catch (error) {
      console.error("Login failed", error);
      setLoginFailed(true);
    }
  };
  // username: 'kminchelle',
  // password: '0lelplR',
  if (isLoggedIn) {
    return <Navigate to="/product" replace={true} />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
