import { useState } from "react";

const MenuItem = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`menu-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
      id="menu-card"
    >
      <div className="card-front">
        <div className="card menuItem shadow">
          <img
            src={item.image}
            className="card-img-top img-fluid"
            alt="burger"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Fiyatı: {item.price}</p>
            <button className="order">Detayları gör</button>
          </div>
        </div>
      </div>
      <div className="card-back">
        <div className="card menuItem shadow">
          <img
            src={item.image}
            className="card-img-top img-fluid"
            alt="burger"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Fiyatı: {item.price}</p>
            <hr />
            <p className="card-subtitle">{item.desc}</p>
            <button className="order">Satın Al</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
