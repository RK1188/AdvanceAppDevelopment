import React from 'react';
import './Support.css';
import Navbar from './Navbar';
const About = () => {
  return (
    <div>
    <Navbar />
    <div className="ground">
    <div className="contact-container">
    <div className='content-ffn'>
    <h1 style={{marginLeft:"20px"}}>About us</h1>
    <div className='photo'>
    
    </div>
    </div>
    <div className='about-cs'>
     <p style={{marginTop:"90px"}}>
     At Timepiece Emporium, we are passionate about watches. 
     We believe that a watch is not just a timekeeping device but a reflection of one's personal style, elegance, and 
     sophistication. With our carefully curated collection of high-quality timepieces, we strive to offer our customers 
     a wide range of options to find the perfect watch that suits their individual taste.
     </p><p>
     At Timepiece Emporium, we are passionate about watches. We believe that a watch is not just a 
     timekeeping device but a reflection of one's personal style, elegance, 
     and sophistication. With our carefully curated collection of high-quality timepieces, 
     we strive to offer our customers a wide range of options to find the perfect watch that suits their individual taste.
     </p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default About;