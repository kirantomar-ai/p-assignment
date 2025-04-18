import React from "react";
import { Link } from "react-router-dom";
import './homepage.css'
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <img
          className="homepage-banner"
          src="https://discoverpilgrim.com/cdn/shop/files/B1G1-_-B2G2-Sale-Homepage-Banner-1920x520_dc7d9a25-28d7-4962-bb9d-33f4d21d88f6.jpg?v=1744529179&width=2000"
          alt="Pilgrim Sale Banner"
        //   style={{height:'200px'}}
        />

        <div className="homepage-links">
          <Link to="/assignment-1" className="home-link-card">
            🛍 Product Comparison Tool
          </Link>
          <Link to="/assignment-2" className="home-link-card">
            👕 T-shirt Configurator
          </Link>
          <Link to="/creator" className="home-link-card">
            👩‍💻 Creator: Kiran Tomar
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
