import React from 'react';
import Home from "../Home/Home"
import Product from "../Product/Product"
import About from "../About/About"
import Contact from "../Contact/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Main