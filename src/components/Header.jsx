import React from "react";
import headerImg from "../images/image 54.png";
import Rectangle from "../images/Rectangle 2.png";
import call from "../images/call.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src={headerImg} alt="headerimg" className="headerimg" />
        </div>
        <div className="image-container">
          <img src={Rectangle} alt="Rectagnle" className="rectangle" />
          <img src={call} alt="call" className="call" />
        </div>
      </header>
    </>
  );
};

export default Header;
