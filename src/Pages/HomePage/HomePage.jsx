import React from 'react'
import Hero from '../../Components/Hero/Hero';
import "./HomePage.css";
import LeadDistributor from '../../Components/LeadDistributor/LeadDistributor';
import Provide from '../../Components/Provide/Provide';
import Banner from '../../Components/Banner/Banner';
import Rules from '../../Components/Rules/Rules';
import Work from '../../Components/Work/Work';
import Operate from '../../Components/Operate/Operate';
import Delivery from '../../Components/Delivery/Delivery';
import StayAndTouch from '../../Components/StayAndTouch/StayAndTouch';
import Footer from '../../Components/Footer/Footer';

function HomePage() {
  return (
    <>
     <div className="homepage">
      <Hero/>
     <div className="hero-gap">
       <LeadDistributor/>
       <Provide/>
       <Banner/>
       <Rules/>
       <Work/>
       <Operate/>
       <Delivery/>
       <StayAndTouch/>
       <Footer/>
     </div>
     </div>
    </>
  )
}

export default HomePage