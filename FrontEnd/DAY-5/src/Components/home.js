import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";
import Navbar from "./Navbar"; 

const Home = () => {
  return (
    <div className="quick">
    <Navbar/>
    <div className="home">
    <div className='content'>
    <h1 style={{paddingTop: "110px",color:"white"}}>Fastest way to Billing Services</h1>
    <div className="type" style={{color:"white"}} > 
    <h3>The supermarket typically has places for fresh meat, fresh produce, dairy, deli items, baked goods, and similar foodstuffs.
    </h3>
    </div>
    <Link to="/products">
    <button className='theme' style={{marginTop : "30px"}}>
    Get Started
    </button>
    </Link>
    </div>
    </div>
   
    </div>
  );
};

export default Home;