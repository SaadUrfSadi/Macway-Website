import React from 'react';
import "./Banner.css";
import bannerImg from "../../Images/devices.png";

function Banner() {
  return (
    <>
    <div className="banner">
        <div className="banner-img">
            <img src={bannerImg} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Banner