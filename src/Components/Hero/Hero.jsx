import React from 'react';
import "./Hero.css";
import heroImg from "../../Images/hero.png";

function Hero() {
  return (
    <>
    <div className="hero">
       <div className="hero-container">
         <div className="hero-left">
            <h1>We are traders of Electronic equipment</h1>
            <h3>Over 10 years of effective collaboration in the worldwide market</h3>
        </div>
        <div className="hero-right">
             <img src={heroImg} alt="" />
        </div>
       </div>
    </div>
    
    </>
  )
}

export default Hero