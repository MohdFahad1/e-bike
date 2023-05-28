import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProductDetails({ data }) {

  
  useEffect(() => {
    AOS.init();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobileSize =  windowWidth <=920;

  const { productId } = useParams();
  const product = data.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <div className='product-details-main'>
    <h2>Product Details</h2>
      <div className='product-details'>
        <div><img src={product.picture} data-aos={isMobileSize? "fade-up" : "fade-right"} data-aos-duration="1200"/></div>
        <div data-aos="fade-up" data-aos-duration="1200"><h1>{product.name}</h1>
          <p><span>Price :</span> ₹{product.price}</p>
          <p><span>Description:</span> {product.description}</p>
          <div className="specifications">
            <p><span>Motor : </span>{product.specifications.motor}</p>
            <p><span>battery : </span>{product.specifications.battery}</p>
            <p><span>range : </span>{product.specifications.range}</p>
            <p><span>topSpeed : </span>{product.specifications.topSpeed}</p>
            <p><span>frame : </span>{product.specifications.frame}</p>
            <p><span>weight : </span>{product.specifications.weight}</p>
          </div>
        </div>
      </div>
      <Link to='/product'><button className='go-back-btn'>Go Back</button></Link>
      </div>
    </>
  );
}

export default ProductDetails;
