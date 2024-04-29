// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Website Header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
