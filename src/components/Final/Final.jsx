import React from "react";
import mobile1 from "../../images/Frame 2.png";
import mobile2 from "../../images/Frame 1.png";
import googlePlay from "../../images/image 1938.png";
import appStore from "../../images/image 1939.png";
import "./Final.css";

const Final = () => {
  return (
    <>
      <h1 className="download"> Download Our App Now</h1>
      <div className="container-promo">
        <div className="mobile-container">
            <img src={mobile1} alt="Mobile 1" className="mobile1" />
            <img src={mobile2} alt="Mobile 2" className="mobile2" />
        </div>
        <div className="">
          <p className="promoText-text">
            Boost your productivity with the BHIVE Workspace app. <br />
            Elevate your workspace, collaborate efficiently, and unlock
            <br /> exclusive perks.
          </p>
          <div className="downloadButtons">
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="downloadButton"
            />
            <img
              src={appStore}
              alt="Download on the App Store"
              className="downloadButton"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
