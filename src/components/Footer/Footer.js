import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <h1>Unicus Mobility</h1>
        <div className="footer-texts">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/product">Vehicles</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className='footer-links'>
            <Link to="/about">About</Link>
            <Link to="/">Platform & Engineering</Link>
            <Link to="/">Sustainability</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className='footer-bottom-content'>
        <div>
          <a href="https://www.linkedin.com/company/unicusmobility/" target='_blank' without rel="noreferrer" >
            <FaLinkedinIn className='icon-link'/>
          </a>
          <a href="https://www.instagram.com/unicusmobility/" target='_blank' without rel="noreferrer" >
            <FaInstagram className='icon-link'/>
          </a>
          <a href="https://twitter.com/UnicusMobility" target='_blank' without rel="noreferrer" >
            <FaTwitter className='icon-link'/>
          </a>
        </div>
          <p>&copy; 2023 E-Bike Platform. All rights reserved.</p>
          <p>
             Website by Mohd Fahad
          </p>
      </div>
    </footer>
  );
};

export default Footer;
