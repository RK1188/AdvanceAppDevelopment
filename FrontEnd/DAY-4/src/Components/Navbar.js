import React, { useState } from 'react';
import {  FaBars } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {  useSelector } from 'react-redux';

const Navbar = () => {
  const name = useSelector((state)=>state.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar} style={{fontSize:"20px"}}>
          <BsArrowLeft />
        </button>
        <div className="sidebar-content">
          <h1 style={{ paddingTop:"0%",paddingLeft: '10px',paddingBottom :" 10px",color: "black" }}>Grocery</h1>
          <p>Hello {name}</p>
          <Link to="/addproducts">Add Products </Link>
          <Link to="/support">Support</Link>
          <Link to="/feedback">FeedBack</Link>
          <Link to="/">
            Sign out
            <div className="logging-bar">
              <FiLogOut />
            </div>
          </Link>
        </div>
      </div>
      <Link to="/home" className="navbar-logo">
        Grocery
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/billing">Billing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

