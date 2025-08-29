import React from 'react'
import "./Navbar.css"
import macway from "../../Images/macway-logo.png";
import mlogo from "../../Images/mlogo.png";
import wlogo from "../../Images/wlogo.png";


function Navbar() {
  return (
    <>
      {/* <section className='container'> */}
       <div className='navbar'>
         <div className="navbar-main-container">
          <div className="navbar-img-logo">
            <img className='mlogo' src={mlogo} alt="MACWAY LTD" />
           <img className='wlogo' src={wlogo} alt="" />
           <div className="macway-ltd-logo">
            <span>Macway Ltd</span>
           </div>
         </div>

        <div className='navbar-list'>
           <ul>
            <a href="">We provide</a>
            <a href="">Our rules</a>
            <a href="">How we operate</a>
            <a href="">|</a>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Contact us</a>
           </ul>
        </div>
         </div>
       </div>
      {/* </section> */}
    </>
  )
}

export default Navbar