import React from 'react'
import './About.css';
import bikes from '../../Assets/bikes.png'
import bike from '../../Assets/64096dedc1be766a74d4a531_Rectangle 93.png';
import team from '../../Assets/64096dedc1be763de7d4a580_Values & Beliefs-w.webp'
import meeting from '../../Assets/meeting.jpg'
import Card from './Card';
const About = () => {
  return (
    <div>
    {/* First Component */}
      <div className='about-first-container'>
        <h1>Because it’s not about the bike, it's about the MOVEMENT</h1>
        <p>Electric vehicles that are super powerful, super elegant and super smart</p>
        <img src={bikes} alt="bikes" />
      </div>
    {/* Second Component */}
      <div className='about-second-container'>
        <div className='about-second-text-container'>
        <div className='line'></div>
          <div className='about-us'>
            <h1>Who are we?</h1>
            <h3>Unicus is one of a kind revolutionary start-up aimed at providing environment-friendly means of transportation.</h3>
            <p>Adaptive Mobility designs and deploys electric mobility solutions that empower people not only to enjoy the moment but also to thrive in the future. We provide an on-demand service that enables users to rent or buy from a pool of fully insured, registered and maintained vehicles available in real-time. Our solutions are designed to enable a smooth transition from the current transportation model toward sustainable modes of transport.</p>
          </div>
          <div className='achievement'>
          <div>
            <h1>10+</h1>
            <br />
            <span>eBikes in Portfolio</span>
          </div>
          <div>
            <h1>5+</h1>
            <br />
            <span>Active Markets</span>
          </div>
          <div>
            <h1>500+</h1>
            <br />
            <span>Staff across 5 countries</span>
          </div>
          </div>
        </div>
        <div>
          <img src={bike} alt="bike" />
        </div>
      </div>
    {/* Third Component */}
      <div className='about-third-container'>
      <div>
          <img src={team} alt="team" />
        </div>
        <div className='beliefs'>
          <h1>Values & Beliefs</h1>
          <p>Unicus is reinventing the mobility landscape. We are transforming so people can thrive in the new mobility world. Our team is acquiring leading companies, hiring the best talent and inventing and perfecting solutions to problems we cannot find elsewhere.
          <br />
          <br />
          <br />
            We’re not just a transportation company; we’re an ecosystem of connected services and technologies that serve to enhance our customers’ lives. Our goal is to integrate seamlessly into your daily life, making it easier for you to get from Point A to Point B, wherever those points may be.</p>
        </div>
      </div>
    {/* Fourth Component */}
      <div className='about-fourth-container'>
        <div className='people'>
          <h1>People</h1>
          <p>We are a team of dreamers and doers with a vision for a future that is driven by clean energy.</p>
        </div>
        <h1 className='founder-heading'>Founders</h1>
        <div className='founders'>
          <Card />
        </div>
      </div>

      <div>
        <img src={meeting} alt="join us" />
        <h1>Join Us</h1>
        <p>Join a team of explorers setting sail on the vast sea of technology.</p>
        <button>Start your Career with us</button>
      </div>
    </div>
  )
}

export default About