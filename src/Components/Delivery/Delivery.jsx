import React from "react";
import "./Delivery.css";
import Dhl from "../../Images/dhl.png";
import Ups from "../../Images/ups.png";
import Fedax from "../../Images/fedax.png";

function Delivery() {
  return (
    <>
      <div className="work">
        <h1>Our deliver partners</h1>
        <div className="work-social-icons-container delivery-partners">
          <img src={Dhl} alt="" />
          <div className="work-apple-logo">
            <img src={Ups} alt="" />
          </div>
          {/* <img src={Ups} alt="" /> */}
          <img src={Fedax} alt="" />
        </div>
      </div>
    </>
  );
}

export default Delivery;
