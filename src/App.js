import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
