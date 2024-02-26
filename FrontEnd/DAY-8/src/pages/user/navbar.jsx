import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
// import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import '/src/assets/css/navbar.css';
// import RoofingIcon from '@mui/icons-material/Roofing';
  import PersonIcon from '@mui/icons-material/PersonPinCircle';
  import BookmarkIcon from '@mui/icons-material/StarHalf';
  import PaymentIcon from '@mui/icons-material/Payment';
  import SupportIcon from '@mui/icons-material/Help';
  import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="nav1">
      <nav className="navbar">
        <button className="sidebar-togglenav" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className={`sidebarnav ${isSidebarOpen ? 'open' : ''}`}>
          <button className="close-sidebarnav" onClick={toggleSidebar} style={{ fontSize: "20px" }}>
            <BsArrowLeft />
          </button>
          <div className="sidebar-contentnav">
            <h1 style={{ paddingTop: "0%", paddingLeft: '10px', paddingBottom: " 10px", color: "black" }}>BritishEnglish</h1>
            <div className='sidebariconsnav'>
          <h3><PersonIcon /></h3><p>Hello RanjithKumar</p>
          </div>
          <Link to="/user/course" >
          <div className='sidebariconsnav'>
          <h3><LibraryBooksIcon /></h3><p>Courses</p>
          </div>
          </Link>
          <Link to="/user/bookmark" >
          <div className='sidebariconsnav'>
          <h3><BookmarkIcon /></h3><p>Bookmark</p>
          </div>
          </Link>
          <Link to="/routeTo/support" >
          <div className='sidebariconsnav'>
          <h3><SupportIcon /></h3><p>Support</p>
          </div>
          </Link>
          </div>
        </div>
        <Link to="/" className="navbar-logonav">
          BritishEnglish
          </Link>
        <ul className="nav-itemsnav">
          <li>
            <Link to="/user/home">Home</Link>
            </li>
          <li>
          <Link to="/user/course">Course</Link>
          </li>
          <li>
          <Link to="/user/about">About</Link>
          </li>
          <li>
          <div className="profile-dropdownnav">
              <div className="profile-triggernav" style={{color:"white"}} onClick={toggleProfileDropdown}>
              <CgProfile />
              </div>
              {isProfileDropdownOpen && (
                <div className="profile-dropdown-contentnav">
                  <div className='profileIconnav'>
                  <Link to="/user/profile">Profile</Link>
                  </div>
                  <div className='profileIconnav'>
                  <Link to="/routeTo/login">SignOut</Link>
                  </div>
                  </div>
                  )}
                  </div>
                  </li>
                  </ul>
      </nav>
      </div>
      );
    };

    export default Navbar;
    // <Link to="/user/payment" >
    // <div className='sidebariconsnav'>
    // <h3><PaymentIcon /></h3><p>Payment History</p>
    // </div>
    // </Link>
