import React, {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import {Link} from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";
import bike from '../../Assets/x5mljjjd.png';
import bike2 from '../../Assets/u5g5g9k9.png'
import bike1 from '../../Assets/sqm5x0j8.png';
import bikes from '../../Assets/bikes.png'
import meeting2 from '../../Assets/home-meeting.jpg'
import meeting3 from '../../Assets/meeting3.jpeg'

const Home = () => {
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

  return (
    <div id="/" className='home-container'>

    {/* First Component */}
      <div className='first-container'>
        <div className='image-container'>
        <img src={isMobileSize ? bike2 : bike} alt="bike" className="first-container-image" height="630px" width="800px" data-aos={isMobileSize ? 'fade-up' : 'fade-up-right'} data-aos-duration="900"/>
        </div>
        <div className='text'>
          <span className='bike-name' data-aos="fade-up" data-aos-duration="800">Unicus Mobility 4 ST</span>
          <h2 className='heading' data-aos="fade-up" data-aos-duration="1100">Step through to <br /> a new colorway</h2>
          <div className='btn' data-aos="fade-up" data-aos-duration="1400">
            <Link to="/product"><button className='explore-btn' >Explore</button></Link>
            <button className='ride-btn'>Book a test ride <FaAngleRight className='right-arrow' /></button>
          </div>
          <div className='details' data-aos="fade-up" data-aos-duration="1600">
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
           <img src={bike1} alt="bike1" className='second-container-image' data-aos={isMobileSize ? 'fade-up' : 'fade-right'} data-aos-duration="1000"/>
         </div>
         <div>
           <div className='text'>
             <span className='bike-name' data-aos="fade-up" data-aos-duration="1000">Unicus 4</span>
             <h2 className='heading' data-aos="fade-up" data-aos-duration="1200">Step over to <br /> the agile ride</h2>
             <div className='btn' data-aos="fade-up" data-aos-duration="1450">
             <Link to="/product"><button className='explore-btn'>Explore</button></Link>
               <button className='ride-btn'>Book a test ride <FaAngleRight className='right-arrow' /></button>
             </div>
             <div className='details' data-aos="fade-up" data-aos-duration="1500">
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
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Accelerating Mobility
          </h1>
          <p data-aos="fade-up" data-aos-duration="1150">We make world-class electric mobility solutions that transform how people move</p>
          <div>
            <Link to="/product"><button className='book-btn'>
              Pre-Book Now
            </button></Link>
            <button className='learn-btn'>
              Learn more
            </button>
          </div>
          <img src={bikes} alt="bikes" data-aos="fade-up" data-aos-duration="1400"/>
       </div>

       {/* Fourth Component */}
       <div className='fourth-container'>
       <div className='home-fourth-container'>
        <div className='meeting-image'>
          <img src={meeting2} alt="join us"/>
          <div className='home-text-overlay'>
            <h1 data-aos="fade-up" data-aos-duration="1000">About Us</h1>
            <p data-aos="fade-up" data-aos-duration="1300">We are just nature nerds and technophiles who provide transportation solutions.</p>
            <Link to="/about"><button data-aos="fade-up" data-aos-duration="1600">Read More</button></Link>
          </div>
          <div className='home-image-overlay'></div>
        </div>
      </div>
      <div className='home-fourth-container'>
        <div className='meeting-image'>
          <img src={meeting3} alt="join us"/>
          <div className='home-text-overlay'>
            <h1 data-aos="fade-up" data-aos-duration="1000">Join Us</h1>
            <p data-aos="fade-up" data-aos-duration="1300">Join a team of explorers setting sail on the vast sea of technology.</p>
            <button data-aos="fade-up" data-aos-duration="1600">Join Us</button>
          </div>
          <div className='home-image-overlay'></div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default Home;
