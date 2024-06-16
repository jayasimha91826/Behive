import React from "react";
import vector from "../images/Vector.png";
import star from "../images/Vector (4).png";
import gym from "../images/Group (1).png";
import lounge from "../images/Group (2).png";
import coffe from "../images/Group (3).png";
import wifi from "../images/Vector (1).png";
import rupee from "../images/Group.png";
import time from "../images/Vector (2).png";
import sport from "../images/Vector (3).png";
import "./Choose.css";
const chooseItems = [
  {
    id: 1,
    img: gym,
    header: "Gym Facilities",
    description: "One liner details about the feature",
  },
  {
    id: 2,
    img: wifi,
    header: "High-Speed Wifi",
    description: "One liner details about the feature",
  },
  {
    id: 3,
    img: coffe,
    header: "Cafe & Tea Bar",
    description: "One liner details about the feature",
  },
];
const chooseItems2 = [
  {
    id: 4,
    img: rupee,
    header: "Affordable",
    description: "One liner details about the feature",
  },
  {
    id: 5,
    img: lounge,
    header: "Comfort Lounges",
    description: "One liner details about the feature",
  },
  {
    id: 6,
    img: time,
    header: "Quick Booking",
    description: "One liner details about the feature",
  },
  {
    id: 7,
    img: sport,
    header: "Sports Area",
    description: "One liner details about the feature",
  },
];
const Choose = () => {
  return (
    <div className="chooseContainer">
      <h1>Why choose us?</h1>
      <div className="column">
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
            <div class="container">
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
        <div className="row">{chooseItems2.map((item, index) => (
            <div class="container">
              <div className="icon">
                <img src={item.img} className="vector" alt="vector" />
              </div>
              <div class="text">
                <p className="heading1">{item.header}</p>
                <p class="oneliner">{item.description}</p>
              </div>
            </div>
          ))}</div>
      </div>
    </div>
  );
};

export default Choose;
