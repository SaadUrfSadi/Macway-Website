import React from 'react';
import "./Work.css";
import Sony from "../../Images/song.png";
import Canon from "../../Images/canon.png";
import Apple from "../../Images/apple.png";
import Hp from "../../Images/hp.png";
import Google from "../../Images/google.png";
import Kingston from "../../Images/kingston.png";

function Work() {
  return (
    <>
    <div className="work">
        <h1>We work with</h1>
        <div className="work-social-icons-container">
            <img src={Sony} alt="" />
            <img src={Canon} alt="" />
           <div className="work-apple-logo">
             <img src={Apple} alt="" />
           </div>
           <div className="work-hp-logo">
             <img src={Hp} alt="" />
           </div>
            <img src={Google} alt="" />
            <img src={Kingston} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Work