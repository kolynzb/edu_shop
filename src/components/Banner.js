import React from "react";
import "./styles/Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <header
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="bannercontents">
          <h3>premium</h3>
          <h1>Headphones</h1>

          <button
            style={{
              background: "#2091F9",
              padding: "10px 20px",
              color: "white",
              border: "none",
            }}
          >
            Shop Now
          </button>
        </div>
      </header>
    </div>
  );
};

export default Banner;
