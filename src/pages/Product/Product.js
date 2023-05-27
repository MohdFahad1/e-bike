import React, { useState } from 'react';
import './Product.css';
import product1 from '../../Assets/product1.png'
import product2 from '../../Assets/product2.png'
import product3 from '../../Assets/product3.png'
import product4 from '../../Assets/product4.png'
import product5 from '../../Assets/product5.png'
import product6 from '../../Assets/product6.png'
import product7 from '../../Assets/product7.png'
import product8 from '../../Assets/product8.png'
import product9 from '../../Assets/product9.png'
import product10 from '../../Assets/product10.png'
import product11 from '../../Assets/u5g5g9k9.png'
import product12 from '../../Assets/sqm5x0j8.png'

const Product = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const data = [
    {
      id: 1,
      name: "Model A",
      price: 1999,
      picture: product1,
      description: "The Model A is a sleek and stylish e-bike designed for urban commuting. With a powerful motor and long battery life, it offers a smooth and efficient ride. Features include built-in lights, a comfortable saddle, and a lightweight frame.",
      specifications: {
        motor: "250W brushless motor",
        battery: "36V 10Ah lithium-ion battery",
        range: "Up to 40 miles",
        topSpeed: "20 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 44 lbs",
      },
    },
    {
      id: 2,
      name: "Model B",
      price: 2499,
      picture: product2,
      description: "The Model B is a versatile e-bike built for both on-road and off-road adventures. It comes equipped with rugged tires, front suspension, and a robust motor for tackling various terrains. Whether you're commuting or exploring trails, the Model B delivers performance and comfort.",
      specifications: {
        motor: "350W brushless motor",
        battery: "48V 13Ah lithium-ion battery",
        range: "Up to 50 miles",
        topSpeed: "22 mph",
        frame: "Steel frame",
        weight: "Approximately 52 lbs",
      },
    },
    {
      id: 3,
      name: "Model C",
      price: 1799,
      picture: product3,
      description: "The Model C is a compact and nimble e-bike perfect for city dwellers. Its folding feature allows for easy storage and transportation. Despite its small size, it offers impressive power and agility, making it an ideal choice for urban commuting.",
      specifications: {
        motor: "200W brushless motor",
        battery: "36V 8Ah lithium-ion battery",
        range: "Up to 30 miles",
        topSpeed: "18 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 36 lbs",
      },
    },
    {
      id: 4,
      name: "Model D",
      price: 1599,
      picture: product4,
      description: "The Model D is an entry-level e-bike that doesn't compromise on quality. It offers a smooth and comfortable ride with its ergonomic design and reliable motor. With its affordable price point, the Model D is a great choice for those new to e-bikes.",
      specifications: {
        motor: "250W brushless motor",
        battery: "36V 9Ah lithium-ion battery",
        range: "Up to 35 miles",
        topSpeed: "19 mph",
        frame: "Steel frame",
        weight: "Approximately 46 lbs",
      },
    },
    {
      id: 5,
      name: "Model E",
      price: 2999,
      picture: product5,
      description: "The Model E is a high-performance e-bike designed for thrill-seekers. With its powerful motor and responsive handling, it offers an exhilarating ride on both city streets and rugged trails. The Model E combines speed, agility, and durability for the ultimate e-bike experience.",
      specifications: {
        motor: "500W brushless motor",
        battery: "48V 15Ah lithium-ion battery",
        range: "Up to 60 miles",
        topSpeed: "25 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 50 lbs",
      },
    },
    {
      id: 6,
      name: "Model F",
      price: 2199,
      picture: product6,
      description: "The Model F is a stylish and comfortable e-bike with a focus on ergonomics. It features an ergonomic saddle, adjustable handlebars, and a suspension system for a smooth and enjoyable ride. Whether you're commuting or leisure riding, the Model F provides a relaxed and comfortable experience.",
      specifications: {
        motor: "350W brushless motor",
        battery: "48V 12Ah lithium-ion battery",
        range: "Up to 45 miles",
        topSpeed: "21 mph",
        frame: "Steel frame",
        weight: "Approximately 48 lbs",
      },
    },
    {
      id: 7,
      name: "Model G",
      price: 1799,
      picture: product7,
      description: "The Model G is a practical and efficient e-bike designed for everyday use. Its lightweight frame and compact design make it easy to maneuver in urban environments. With its reliable motor and long-lasting battery, the Model G is a reliable companion for daily commutes.",
      specifications: {
        motor: "250W brushless motor",
        battery: "36V 10Ah lithium-ion battery",
        range: "Up to 40 miles",
        topSpeed: "20 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 42 lbs",
      },
    },
    {
      id: 8,
      name: "Model H",
      price: 2399,
      picture: product8,
      description: "The Model H is a versatile and feature-rich e-bike suitable for various riding conditions. It offers multiple riding modes, adjustable suspension, and advanced safety features. Whether you're commuting, touring, or tackling challenging terrains, the Model H provides a comfortable and customizable ride.",
      specifications: {
        motor: "500W brushless motor",
        battery: "48V 14Ah lithium-ion battery",
        range: "Up to 55 miles",
        topSpeed: "24 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 54 lbs",
      },
    },
    {
      id: 9,
      name: "Model I",
      price: 1999,
      picture: product9,
      description: "The Model I is an eco-friendly and practical e-bike designed for sustainable transportation. It features a high-capacity battery and energy-efficient motor, allowing for longer rides while reducing environmental impact. With its sleek design and eco-conscious features, the Model I is perfect for eco-conscious riders.",
      specifications: {
        motor: "250W brushless motor",
        battery: "48V 10Ah lithium-ion battery",
        range: "Up to 45 miles",
        topSpeed: "20 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 46 lbs",
      },
    },
    {
      id: 10,
      name: "Model J",
      price: 1699,
      picture: product10,
      description: "The Model J is a lightweight and agile e-bike built for urban commuting. Its compact design and efficient motor make it ideal for navigating busy city streets. With its responsive handling and comfortable ride, the Model J offers a convenient and enjoyable way to get around the city.",
      specifications: {
        motor: "200W brushless motor",
        battery: "36V 8Ah lithium-ion battery",
        range: "Up to 35 miles",
        topSpeed: "18 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 40 lbs",
      },
    },
    {
      id: 11,
      name: "Model K",
      price: 1220,
      picture: product11,
      description: "The Model K is a stylish and compact e-bike perfect for city commuting. It features a lightweight frame and agile handling, making it easy to navigate through traffic. With its powerful motor and reliable brakes, the Model K offers a safe and efficient ride in urban environments.",
      specifications: {
        motor: "250W brushless motor",
        battery: "36V 9Ah lithium-ion battery",
        range: "Up to 30 miles",
        topSpeed: "19 mph",
        frame: "Aluminum alloy frame",
        weight: "Approximately 38 lbs",
      },
    },
    {
      id: 12,
      name: "Model L",
      price: 1220,
      picture: product12,
      description: "The Model L is a high-performance e-bike designed for speed enthusiasts. With its aerodynamic design and powerful motor, it offers an exhilarating ride on open roads. The Model L features advanced suspension, responsive brakes, and a lightweight frame, making it the perfect choice for adrenaline junkies.",
      specifications: {
        motor: "500W brushless motor",
        battery: "48V 13Ah lithium-ion battery",
        range: "Up to 50 miles",
        topSpeed: "23 mph",
        frame: "Carbon fiber frame",
        weight: "Approximately 45 lbs",
      },
    },
  ];

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


  return (
    <>
      <div id="product">
        <h1 className='products-heading'>Our Products</h1>
        <div className='products-para'>
        <p>"Welcome to our e-bike products page! Discover a new way to ride with our innovative and eco-friendly electric bikes. Our e-bikes combine cutting-edge technology with sleek design to deliver an exceptional riding experience.</p>

        <p>Experience effortless pedaling with our powerful electric motors that provide smooth and reliable assistance, making uphill climbs and long distances a breeze. Our e-bikes are equipped with high-quality batteries, ensuring long-lasting performance and allowing you to explore further without worrying about running out of power.</p>

        <p>Safety is our top priority, which is why our e-bikes feature advanced braking systems, responsive handling, and integrated LED lights for enhanced visibility. With adjustable settings and intuitive controls, you can easily customize your ride to match your preferences and riding conditions.</p>

        <p>Whether you're commuting to work, exploring the city, or going off-road, our e-bikes are designed to adapt to your lifestyle. Choose from a range of models, including urban commuters, mountain bikes, and foldable options, all built with durability and comfort in mind. Our ergonomic designs, cushioned seats, and smooth suspension systems ensure a comfortable ride, even on challenging terrains.</p>

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
              <div key={id} className="product-card">
                <img src={picture} alt={name} />
                <h1>{name}</h1>
                <p>{description}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button>know more</button>
                  <h4>₹ {price}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <p className='last-para'>Join the e-bike revolution and experience the freedom, convenience, and joy of riding an electric bike. Browse our selection below and find the perfect e-bike to suit your style and needs. Elevate your cycling experience with our exceptional e-bikes today!"</p>
      </div>
    </>
  );
};

export default Product;