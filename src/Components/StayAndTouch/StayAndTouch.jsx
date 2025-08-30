import React from 'react';
import "./StayAndTouch.css";

function StayAndTouch() {
  return (
    <>
        <div className="stay-and-touch-container">
            <h1>Stay in touch</h1>
            <p>We guarantee to send emails with your comfort and security.</p>
            <div className="email-subscribe">
                <form action="">
                    <input type="email" placeholder='example@gmail.com' required />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default StayAndTouch