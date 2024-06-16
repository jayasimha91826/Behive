import React from "react";
import headerImg from "../../images/image 54.png";
import Rectangle from "../../images/Rectangle 2.png";
import call from "../../images/call.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <img src={headerImg} alt="headerimg" className="headerimg" />
      <div className="image-container">
        <img src={Rectangle} alt="Rectagnle" className="rectangle" />
        <img src={call} alt="call" className="call" />
      </div>
    </div>
  );
};

export default Header;
