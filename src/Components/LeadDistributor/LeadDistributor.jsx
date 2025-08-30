import React from 'react'
import "./LeadDistributor.css";
// import "../../Images/";

function LeadDistributor() {
  return (
    <>
    <div className="lead-dis">
        <div className="lead-dis-title">
          <h1>Lead distributor of<span>Electronics</span></h1>
        </div>
        <div className="home-dis-container">
            <div className="home-distributor">
            <div className="home-item-img">
                <img src={"/partners.svg"} alt=""/>
                </div>
                <div className="home-item-name">
                <h2>40+</h2>
                <p>Partners</p>
                </div>
        </div>
         <div className="home-distributor">
            <div className="home-item-img">
                <img src={"/products.svg"} alt="" />
                </div>
                <div className="home-item-name">
                <h2>1000+</h2>
                <p>Products</p>
                </div>
        </div>
         <div className="home-distributor">
            <div className="home-item-img">
                <img src={"/customers.svg"} alt="" />
                </div>
                <div className="home-item-name">
                <h2>2000</h2>
                <p>Customers</p>
                </div>
        </div>
         <div className="home-distributor">
            <div className="home-item-img">
                <img src={"/date.svg"} alt="" />
                </div>
                <div className="home-item-name">
                <h2>10+</h2>
                <p>Years</p>
                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default LeadDistributor