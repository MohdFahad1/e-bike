import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const ProductComponent = ( { bike, bike1 } ) => {
  return (
    <div className='second-container'>
      <div>
        <img src={bike} alt="bike" height="600px" width="700px"/>
      </div>
      <div>
      <div className='text'>
           <span className='bike-name'>Unicus Mobility 4 ST</span>
          <h2 className='heading'>Step through to <br /> a new colorway</h2>
          <div className='btn'>
          <button className='explore-btn'>Explore</button>
          <button className='ride-btn'>Book a test ride <FaAngleRight className='right-arrow'/></button> 
          </div>
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
  )
}

export default ProductComponent