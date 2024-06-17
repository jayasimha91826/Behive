import React from "react";
import vector from "../../images/Vector.png";
import star from "../../images/Vector (4).png";
import { useSelector } from "react-redux";
import "./Choose.css";

const Choose = () => {
  const chooseItems = useSelector((state) => state.chooseList);
  return (
    <div className="chooseContainer">
      <h1 className="head">Why choose us?</h1>
      <div className="row">
        <div class="container">
          <div className="icon">
            <img src={vector} className="vector1" alt="vector" />
            <img src={star} className="star" alt="star" />
          </div>
          <div class="text">
            <p className="heading">Community Events</p>
            <p class="oneliner">One liner details about the feature</p>
          </div>
        </div>
        {chooseItems.map((item, index) => (
          <div class="container" key={index}>
            <div className="icon">
              <img src={item.img} className="vector" alt="vector" />
            </div>
            <div class="text">
              <p className="heading1">{item.header}</p>
              <p class="oneliner">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
