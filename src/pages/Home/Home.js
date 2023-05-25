import React from 'react';
import bike from '../../Assets/x5mljjjd.png';
import bike1 from '../../Assets/sqm5x0j8.png';
import './Home.css';
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div id="/" className='home-container'>
      <div className='second-container'>
        <div className='image-container'>
          <img src={bike} alt="bike" height="630px" width="800px" />
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



       <div className='second-container' style={{background:"linear-gradient(70deg,#fcd8c0 10%,#fef8ed 60%,#fefcf5)", gap:"8rem"
       }}>
         <div>
           <img src={bike1} alt="bike1" height="500px" width="800px"style={{paddingBottom:"60px"}}/>
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


    </div>
  );
};

export default Home;
