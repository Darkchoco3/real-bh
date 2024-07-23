// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../assets/logo nv.svg';
import aisha from '../assets/aisha.svg';
import AuthDropDown from '../Auth/AuthDropDown';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
// import office from "../assets/office.svg"
const Navbar = () => {
  const [authShow, setAuthshow] = useState(false);

  return (
    <main className='image'> 
    
    <nav className="navbar navbar-expand-lg navbar-dark">
    {/* <img src={office} alt="" /> */}

      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="BetaHouse Logo" className="logo-img  " />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center" id='profile'>
            <div className="nav-link d-flex align-items-center" to="#">
              <img src={aisha} alt="Profile" className="profile-img" />
              <div
                  className="position-relative d-flex align-items-center"
                  role="button"
                  onClick={() =>
                    !authShow ? setAuthshow(true) : setAuthshow(false)
                  }
                >
                  {!authShow ? (
                    <div className="d-none d-lg-block text-secondary mb-3">
                      <IoIosArrowDown />
                    </div>
                  ) : (
                    <div className="d-none d-lg-block mb-3 text-secondary">
                      <IoIosArrowUp />
                    </div>
                  )}
                  <div className="position-absolute top-100 end-0 mt-2">
                    {authShow && <AuthDropDown />}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </main>
  );
}

export default Navbar;