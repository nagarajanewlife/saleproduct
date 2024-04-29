// Home.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Content Area */}
      <div>
        <h2>Home</h2>
        <p>Welcome to our website!</p>
        {/* Add project "how to work" documentation here */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
