import React from 'react';
import "./Operate.css";
import bussines from "../../Images/bussines.png"

function Operate() {
  return (
    <>
    <div className="operate">
        <div className="operate-left">
            <img src={bussines} alt="" />
        </div>
        <div className="operate-right">
            <h1>How we operate</h1>
            <p>Macway has a team of expert and motivational professionals that operates its network of sales using its own commercial structure nationally and internationally.</p>
            <p>Our company’s strength relies on this network, our team which makes sure of the regular re stock of goods, on the immediate availability of items offered and fat delivery even in small quantities.</p>
            <p>New customers are offered on hold shipments with inspection of goods at the warehouse prior any payments. We provide next day delivery in UK and most Europe with a 14 days return guaranty for most products. For efficient and on time delivery with have some reliable outsourced companies which allows you constant tracking and localisation of your goods.</p>
        </div>
    </div>
    
    
    </>
  )
}

export default Operate