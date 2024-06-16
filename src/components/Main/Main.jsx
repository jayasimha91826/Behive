import React from "react";
import "./Main.css";
import mainImage from '../../images/Vector 7.png';

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <p className="mainHeading">
          Host your meeting with
          world-class amenitites.
          Starting at <span className="span">₹199/-!</span>
        </p>
      </div>
      <div className="imageContianer"> 
        <img className="mainImage" alt="mainImage" src={mainImage} />
      </div>
    </div>
  );
};

export default Main;
