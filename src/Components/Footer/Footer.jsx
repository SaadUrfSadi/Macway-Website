import React from 'react';
import "./Footer.css";
import { CiLocationOn } from "react-icons/ci"; 
import { FaPhoneAlt } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-section">
            <div className="footer-section-main">
                <h2>MACWAY FZ-LLC</h2>
                <div className="footer-details">
                 <CiLocationOn />
                 <p>Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates</p>
                </div>
                <div className="footer-details">
                 <FaPhoneAlt />
                 <p>+971 55 876 9321</p>
                </div>
                <div className="footer-details">
                 <FaAt />
                 <p>info@macway.ae</p>
                </div>
            </div>
             <div className="footer-section-main">
                <h2>Macway Ltd</h2>
                <div className="footer-details">
                 <CiLocationOn />
                 <p>Unit 10 Medlock Court, Welcomb Street, M11 2NB, United Kingdom</p>
                </div>
                <div className="footer-details">
                 <FaPhoneAlt />
                 <p>0044 (0) 161 820 2149</p>
                </div>
                <div className="footer-details">
                 <FaAt />
                 <p>info@macwayltd.com</p>
                </div>
            </div>
             <div className="footer-section-main">
                <h2>Macway B.V.</h2>
                <div className="footer-details">
                 <CiLocationOn />
                 <p>Laan van's-Gravenmade, 2495 AJ Den Haag, Netherlands</p>
                </div>
                <div className="footer-details">
                 <FaPhoneAlt />
                 <p>0031707012485</p>
                </div>
                <div className="footer-details">
                 <FaAt />
                 <p>info@macwaybv.com</p>
                </div>
            </div>
             <div className="footer-section-main">
                <h3>Home</h3>
                <h3>About us</h3>
                <h3>Contacts</h3>
            </div>
             <div className="footer-section-main">
                  <div className="footer-social-icons">
                    <FaTwitter />
                    <FaLinkedin />
                    <FaSkype />
                </div>
                <div className="copy-right-macway">
                    <p>2025 Macway Ltd. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Footer