import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">Unicus</Link>
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