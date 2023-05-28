import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {data} from './pages/Product/data'

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails data={data} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
