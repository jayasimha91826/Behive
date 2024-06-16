import React from "react";
import workspace from "../images/0a74575ca6004b4bb20dcd131afc5849.jpg";
import honeykomb from "../images/0dfe4977f25940aa9d32507d4a233c9c.jpg";
import platinum from "../images/4d85410baa074351aa948fc2c5da50d9.jpg";
import workspace2 from "../images/5934c0fd9d574bddbde8175d86a2d2da.jpg";
import campus from "../images/e2d0405175f74b5c815658a8ef5ef4b8.jpg";
import distance from "../images/Group 1000007095.png";
import ar1 from "../images/Vector (Stroke).png";
import ar2 from "../images/Vector (Stroke) (1).png";
import ar3 from "../images/Vector (Stroke) (2).png";
import platinum1 from "../images/Frame 4.png";
import workspace3 from "../images/Frame 6.png";
import campus1 from "../images/Frame 5.png";
import "./List.css";
const List = () => {
  const cards = [
    {
      image: workspace,
      title: "6th Main Rd, HAL 2nd Stage",
      distance: distance,
      dayPass: "₹ 249/Day",
      bulkPass: "₹ 2400/10 Days",
      discount: "20% Discount",
      tag: workspace3,
    },
    {
      image: honeykomb,
      title: "77, Jbr Tech Park,  Whitefield",
      distance: distance,
      dayPass: "₹ 249/Day",
      bulkPass: "₹ 2400/10 Days",
      discount: "20% Discount",
      tag: platinum1,
    },
    {
      image: platinum,
      title: "HSR Sector 6, 5th main Road",
      distance: distance,
      dayPass: "₹ 249/Day",
      bulkPass: "₹ 2400/10 Days",
      discount: "20% Discount",
      tag: platinum1,
    },
  ];
  const cards2 = [
    {
      image: workspace2,
      title: "L-194, Santhosapuram, Sector 6, HSR Layout",
      distance: distance,
      dayPass: "₹ 249/Day",
      bulkPass: "₹ 2400/10 Days",
      discount: "20% Discount",
      tag: workspace3,
    },
    {
      image: campus,
      title: "No.112, AKR Tech Park, 7th Mile Hosur Rd",
      distance: distance,
      dayPass: "₹ 249/Day",
      bulkPass: "₹ 2400/10 Days",
      discount: "20% Discount",
      tag: platinum1,
    },
  ];

  return (
    <div className="chooseContainer">
      <div>
        <h1>Our Space Overview</h1>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <div className="distance">
              <img src={card.distance} />
            </div>
            <img className="mainImg" src={card.image} alt={card.title} />
            <img className="layering" src={card.tag}/>
            <div className="discount">{card.discount}</div>
            <div className="price">
              <div className="day-pass">
                <div className="pass">
                  <span>Day Pass</span>
                  <div>
                    <img className="ar1" src={ar1} />
                    <img className="ar1" src={ar2} />
                    <img className="ar1" src={ar3} />
                  </div>
                </div>
                <span>{card.dayPass}</span>
              </div>
              <div className="bulk-pass">
              <div className="pass">
                  <span>Bulk Pass</span>
                  <div>
                    <img className="ar1" src={ar1} />
                    <img className="ar1" src={ar2} />
                    <img className="ar1" src={ar3} />
                  </div>
                </div>
                <span>{card.bulkPass}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cards">
        {cards2.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <div className="distance">
            <img className="layering1" src={card.tag}/>
              <img src={card.distance} />
            </div>
            <img className="mainImg" src={card.image} alt={card.title} />
            <div className="discount">{card.discount}</div>
            <div className="price">
              <div className="day-pass">
                <div className="pass">
                  <span>Day Pass</span>
                  <div>
                    <img className="ar1" src={ar1} />
                    <img className="ar1" src={ar2} />
                    <img className="ar1" src={ar3} />
                  </div>
                </div>
                <span>{card.dayPass}</span>
              </div>
              <div className="bulk-pass">
              <div className="pass">
                  <span>Bulk Pass</span>
                  <div>
                    <img className="ar1" src={ar1} />
                    <img className="ar1" src={ar2} />
                    <img className="ar1" src={ar3} />
                  </div>
                </div>
                <span>{card.bulkPass}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
