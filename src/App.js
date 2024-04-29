// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Services from "./components/Services";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = async (username, password) => {
    // username: 'kminchelle',
    // password: '0lelplR',
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 30000,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setLoggedIn(true);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/product"
          element={loggedIn ? <Product /> : <Navigate to="/login" />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
};

export default App;
