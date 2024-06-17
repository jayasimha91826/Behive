import React from "react";
import distance from "../../images/Group 1000007095.png";
import ar1 from "../../images/Vector (Stroke).png";
import ar2 from "../../images/Vector (Stroke) (1).png";
import ar3 from "../../images/Vector (Stroke) (2).png";
import { useSelector } from "react-redux";
import "./List.css";
const List = () => {
  const cards = useSelector((state) => state.spaceList);

  return (
    <div className="chooseContainer">
      <div>
        <h1 className="section-header">Our Space Overview</h1>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="header-cont">
              <h3>{card.name}</h3>
              <div className="distance">
                <img src={distance} alt="card-img" />
              </div>
            </div>
            <img className="mainImg" src={card.images[0]} alt={card.name} />
            <div className="discount">{`20% Discount`}</div>
            <div className="price">
              <div className="day-pass">
                <div className="pass">
                  <span>Day Pass</span>
                  <div>
                    <img className="ar1" src={ar1} alt="img" />
                    <img className="ar1" src={ar2} alt="img" />
                    <img className="ar1" src={ar3} alt="img" />
                  </div>
                </div>
                <span className="price-value">{`₹ ${card.day_pass_price}/Day`}</span>
              </div>
              <div className="bulk-pass">
                <div className="pass">
                  <span>Bulk Pass</span>
                  <div>
                    <img className="ar1" src={ar1} alt="img" />
                    <img className="ar1" src={ar2} alt="img" />
                    <img className="ar1" src={ar3} alt="img" />
                  </div>
                </div>
                <span className="price-value">{`₹2499/Day`}</span>
              </div>
            </div>
            <img className="layering" src={card.images[1]} alt="layer-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
