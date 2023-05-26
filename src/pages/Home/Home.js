import React, {useState, useEffect} from 'react';
import './Home.css';
import { FaAngleRight } from "react-icons/fa";
import bike from '../../Assets/x5mljjjd.png';
import bike2 from '../../Assets/u5g5g9k9.png'
import bike1 from '../../Assets/sqm5x0j8.png';
import bikes from '../../Assets/bikes.png'
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {

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

  const isMobileSize = windowWidth <= 468;

  return (
    <div id="/" className='home-container'>

    {/* First Component */}
      <div className='first-container'>
        <div className='image-container'>
        <img src={isMobileSize ? bike2 : bike} alt="bike" className="first-container-image" height="630px" width="800px" />
        </div>
        <div className='text'>
          <span className='bike-name'>Unicus Mobility 4 ST</span>
          <h2 className='heading'>Step through to <br /> a new colorway</h2>
          <div className='btn'>
            <button className='explore-btn'>Explore</button>
            <button className='ride-btn'>Book a test ride <FaAngleRight className='right-arrow' /></button>
          </div>
          <div className='details'>
            <div>
              <span className='details-heading'>Delivery from 10 days</span>
              <br />
              <span className='details-sub-heading'>₹ 1220</span>
            </div>
            <div className='separator'>|</div>
            <div>
              <span className='details-heading'>Automatic assistance</span>
              <br />
              <span className='details-sub-heading'>AdaptivePower</span>
            </div>
            <div className='separator'>|</div>
            <div>
              <span className='details-heading'>Anti-theft</span>
              <br />
              <span className='details-sub-heading'>GPS tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Component */}
       <div className='second-container'>
         <div>
           <img src={bike1} alt="bike1" className='second-container-image'/>
         </div>
         <div>
           <div className='text'>
             <span className='bike-name'>Unicus 4</span>
             <h2 className='heading'>Step over to <br /> the agile ride</h2>
             <div className='btn'>
               <button className='explore-btn'>Explore</button>
               <button className='ride-btn'>Book a test ride <FaAngleRight className='right-arrow' /></button>
             </div>
             <div className='details'>
             <div>
               <span className='details-heading'>Delivery from 10 days</span>
               <br />
               <span className='details-sub-heading'>₹ 1220</span>
             </div>
             <div className='separator'>|</div>
             <div>
               <span className='details-heading'>Automatic assistance</span>
               <br />
               <span className='details-sub-heading'>AdaptivePower</span>
             </div>
             <div className='separator'>|</div>
             <div>
               <span className='details-heading'>Anti-theft</span>
               <br />
               <span className='details-sub-heading'>GPS tracking</span>
             </div>
           </div>
           </div>
         </div>
       </div>


       {/* Third Component */}
       <div className='third-container'>
          <h1>
            Accelerating Mobility
          </h1>
          <p>We make world-class electric mobility solutions that transform how people move</p>
          <div>
            <button className='book-btn'>
              Pre-Book Now
            </button>
            <button className='learn-btn'>
              Learn more
            </button>
          </div>
          <img src={bikes} alt="bikes" />
       </div>

       {/* Fourth Component */}
       <div>
        <div>
          <h3>Why Unicus?</h3>
          <p>Because it’s not about the bike, it’s about the MOVEMENT</p>
        </div>
        <div>
          <Carousel />
        </div>
       </div>
    </div>
  );
};

export default Home;
