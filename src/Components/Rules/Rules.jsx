import React from 'react';
import "./Rules.css";
import image8 from "../../Images/8.png";
import image9 from "../../Images/9.png";
import image10 from "../../Images/10.png";
import image11 from "../../Images/11.png";
import image12 from "../../Images/12.png";
import image13 from "../../Images/13.png";
import image14 from "../../Images/14.png";
import image15 from "../../Images/15.png";

function Rules() {
  return (
    <>

     <div className="provide rules">
            <h1>Our rules</h1>
            <div className="provide-section">
               <div className="home-provide-left">
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image8} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Research</p>
                        <span>Of the best possible results and ways</span>
                    </div>
                </div>
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image9} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Business ethic</p>
                        <span>Respect for the rules and people</span>
                    </div>
                </div>
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image10} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Analysis</p>
                        <span>Anticipate both market trends and the customers' and suppliers' actual needs</span>
                    </div>
                </div>
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image11} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Tailor made</p>
                        <span>Targeted activities without giving up on overseeing all the territories</span>
                    </div>
                </div>
               </div>
                 <div className="home-provide-right">
                    <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image12} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Reliability</p>
                        <span>Behave with exceptional professionalism in any circumstance</span>
                    </div>
                </div>
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image13} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Innovation</p>
                        <span>Reinvest in technologies and state-of-the-art systems</span>
                    </div>
                </div>
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image14} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Competitiveness</p>
                        <span>Being able to succeed particularly when the difficulties arise</span>
                    </div>
                </div>
                 <div className="home-provide">
                    <div className="home-provide-img">
                        <img src={image15} alt="" />
                    </div>
                    <div className="home-provide-name">
                        <p>Relationship with customers</p>
                        <span>Act more and more as a consultant</span>
                    </div>
                </div>
                 </div>
            </div>
        </div>
        
        </>
  )
}

export default Rules