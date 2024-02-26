import React from 'react';
// import Navbar from '/src/pages/user/navbar';
import '/src/assets/css/home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Home = () => {
  return (
    <div>
      <div className='Home'>
        <div className='contentHome'>
          <h1 style={{ paddingTop: "140px", color: "black", marginBottom: "30px" }}>Fastest way to Reading Book</h1>
          <div className="typeHome" style={{ color: "black", marginBottom: "320px" }}>
            <h3>Unlock British English mastery, a certificate to declare,
              Refine your skills with precision rare,
              Certified excellence beyond compare!
            </h3>
            <Link to="/home">
              <button className='themeHome' style={{ marginTop: "80px",marginLeft:"-35px" }}>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
