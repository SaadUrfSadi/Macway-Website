import React from 'react';
import "./Provide.css"
import image1 from "../../Images/1.png";
import image2 from "../../Images/2.png";
import image3 from "../../Images/3.png";
import image4 from "../../Images/4.png";
import image5 from "../../Images/5.png";
import image6 from "../../Images/6.png";
import image7 from "../../Images/7.png";

function Provide() {
  return (
    <>
    <div className="provide">
        <h1>We can provide</h1>
        <div className="provide-section">
           <div className="home-provide-left">
             <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image1} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Mobile</p>
                    <span>Apple, Samsung, Xiaomi, Huawei, LG, etc.</span>
                </div>
            </div>
             <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image2} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Audio & Video</p>
                    <span>Apple, Samsung, Beats, etc.</span>
                </div>
            </div>
             <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image3} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Computers</p>
                    <span>Apple, Microsoft, MSI, Asus, etc.</span>
                </div>
            </div>
             <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image4} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Accessories</p>
                    <span>Apple, Samsung, Xiaomi, Huawei, LG, etc.</span>
                </div>
            </div>
           </div>
             <div className="home-provide-right">
                <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image5} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Tablets and Pads</p>
                    <span>Apple, Samsung, Xiaomi, Huawei, LG, etc.</span>
                </div>
            </div>
             <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image6} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Console</p>
                    <span>Sony, Microsoft, Amazon, Nintendo, etc.</span>
                </div>
            </div>
             <div className="home-provide">
                <div className="home-provide-img">
                    <img src={image7} alt="" />
                </div>
                <div className="home-provide-name">
                    <p>Home appliances</p>
                    <span>Apple, Samsung, Xiaomi, Huawei, LG, etc.</span>
                </div>
            </div>
             </div>
        </div>
    </div>
    
    </>
  )
}

export default Provide