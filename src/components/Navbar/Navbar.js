import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo" href=".page-top">Unicus Mobility*</Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li><Link to="/" className="link link-theme link-arrow">HOME</Link></li>
          <li><Link to="/product" className="link link-theme link-arrow">PRODUCTS</Link></li>
          <li><Link to="/about" className="link link-theme link-arrow">ABOUT US</Link></li>
          <li><Link to="/contact" className="link link-theme link-arrow">CONTACT</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Navbar