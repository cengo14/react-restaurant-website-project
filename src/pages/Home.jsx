import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container">
        <h1 className="title">BURGERCİ</h1>
        <p className="text">
          Lezzetli Hamburgerler <br /> özel{" "}
          <span className="text-warning"> "Burgerci Baharatı" </span> farkıyla
        </p>
        <Link to="/menu">
          <button className="order">Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
Home;
