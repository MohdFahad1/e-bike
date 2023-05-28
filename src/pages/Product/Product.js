import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product.css';
import {data} from './data'


const Product = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'priceLowToHigh') {
      return a.price - b.price;
    } else if (sortBy === 'priceHighToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const isMobileView = window.innerWidth <= 468;


  return (
    <>
      <div id="product">
        <h1 className='products-heading' data-aos="fade-up" data-aos-duration="1000">Lifestyle Vehicles</h1>
        <div className='products-para'>
        <p data-aos={isMobileView ? 'fade-up' : 'fade-right'}
            data-aos-duration="1100">"Welcome to our e-bike products page! Discover a new way to ride with our innovative and eco-friendly electric bikes. Our e-bikes combine cutting-edge technology with sleek design to deliver an exceptional riding experience.</p>

        <p data-aos={isMobileView ? 'fade-up' : 'fade-left'}
            data-aos-duration="1100">Experience effortless pedaling with our powerful electric motors that provide smooth and reliable assistance, making uphill climbs and long distances a breeze. Our e-bikes are equipped with high-quality batteries, ensuring long-lasting performance and allowing you to explore further without worrying about running out of power.</p>

        <p data-aos={isMobileView ? 'fade-up' : 'fade-right'}
            data-aos-duration="1100">Safety is our top priority, which is why our e-bikes feature advanced braking systems, responsive handling, and integrated LED lights for enhanced visibility. With adjustable settings and intuitive controls, you can easily customize your ride to match your preferences and riding conditions.</p>

        <p data-aos={isMobileView ? 'fade-up' : 'fade-left'}
            data-aos-duration="1100">Whether you're commuting to work, exploring the city, or going off-road, our e-bikes are designed to adapt to your lifestyle. Choose from a range of models, including urban commuters, mountain bikes, and foldable options, all built with durability and comfort in mind. Our ergonomic designs, cushioned seats, and smooth suspension systems ensure a comfortable ride, even on challenging terrains.</p>

        </div>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
        <div className='products-main-container'>
          {sortedProducts.map(({ id, name, price, description, picture }) => {
            return (
              <div key={id} className="product-card" data-aos="fade-up" data-aos-duration="800">
                <img src={picture} alt={name} />
                <h1>{name}</h1>
                <p>{description}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Link to={'/product/${id}'}><button>know more</button></Link>
                  <h4>₹ {price}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <p className='last-para' data-aos="fade-up" data-aos-duration="1000">Join the e-bike revolution and experience the freedom, convenience, and joy of riding an electric bike. Browse our selection below and find the perfect e-bike to suit your style and needs. Elevate your cycling experience with our exceptional e-bikes today!"</p>
      </div>
    </>
  );
};


export default Product;