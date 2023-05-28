import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import bikes from '../../Assets/bikes.png'
import bike from '../../Assets/64096dedc1be766a74d4a531_Rectangle 93.png';
import team from '../../Assets/64096dedc1be763de7d4a580_Values & Beliefs-w.webp'
import meeting from '../../Assets/meeting.jpg'
import Card from './Card';
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* First Component */}
      <div className='about-first-container'>
        <h1 data-aos="fade-up" data-aos-duration="1000">Because it’s not about the bike, it's about the MOVEMENT</h1>
        <p data-aos="fade-up" data-aos-duration="1400">Electric vehicles that are super powerful, super elegant and super smart</p>
        <img src={bikes} alt="bikes" />
      </div>

      {/* Second Component */}
      <div className='about-second-container'>
        <div className='about-second-text-container'>
          <div className='line'></div>
          <div className='about-us'>
            <h1 data-aos="fade-up" data-aos-duration="800">Who are we?</h1>
            <h3 data-aos="fade-up" data-aos-duration="1100">Unicus is one of a kind revolutionary start-up aimed at providing environment-friendly means of transportation.</h3>
            <p  data-aos="fade-up" data-aos-duration="1300">Adaptive Mobility designs and deploys electric mobility solutions that empower people not only to enjoy the moment but also to thrive in the future. We provide an on-demand service that enables users to rent or buy from a pool of fully insured, registered and maintained vehicles available in real-time. Our solutions are designed to enable a smooth transition from the current transportation model toward sustainable modes of transport.</p>
          </div>
          <div className='achievement'>
            <div data-aos="fade-up" data-aos-duration="1500">
              <h1>10+</h1>
              <br />
              <span>eBikes in Portfolio</span>
            </div>
            <div data-aos="fade-up" data-aos-duration="2200">
              <h1>5+</h1>
              <br />
              <span>Active Markets</span>
            </div>
            <div  data-aos="fade-up" data-aos-duration="2200">
              <h1>500+</h1>
              <br />
              <span>Staff across 5 countries</span>
            </div>
          </div>
        </div>
        <div>
          <img src={bike} alt="bike"  data-aos="fade-left" data-aos-duration="1200"/>
        </div>
      </div>

      {/* Third Component */}
      <div className='about-third-container'>
        <div>
          <img src={team} alt="team"  data-aos="fade-right" data-aos-duration="1200"/>
        </div>
        <div className='beliefs'>
          <h1  data-aos="fade-up" data-aos-duration="1100">Values & Beliefs</h1>
          <p data-aos="fade-up" data-aos-duration="1400">Unicus is reinventing the mobility landscape. We are transforming so people can thrive in the new mobility world. Our team is acquiring leading companies, hiring the best talent and inventing and perfecting solutions to problems we cannot find elsewhere.</p>
            <br />
            <br />
            <br />
          <p data-aos="fade-up" data-aos-duration="1600">We’re not just a transportation company; we’re an ecosystem of connected services and technologies that serve to enhance our customers’ lives. Our goal is to integrate seamlessly into your daily life, making it easier for you to get from Point A to Point B, wherever those points may be.</p>
        </div>
      </div>

      {/* Fourth Component */}
      <div className='about-fourth-container'>
        <div className='people'>
          <h1 data-aos="fade-up" data-aos-duration="1000">People</h1>
          <p data-aos="fade-up" data-aos-duration="1200">We are a team of dreamers and doers with a vision for a future that is driven by clean energy.</p>
        </div>
        <h1 className='founder-heading'>Founders</h1>
        <div className='founders'>
          <Card />
        </div>
      </div>
      
      {/* Fifth Component */}
      <div className='about-fifth-container'>
        <div className='about-image-container'>
          <img src={meeting} alt="join us"/>
          <div className='text-overlay'>
            <h1 data-aos="fade-up" data-aos-duration="1000">Join Us</h1>
            <p data-aos="fade-up" data-aos-duration="1300">Join a team of explorers setting sail on the vast sea of technology.</p>
            <button data-aos="fade-up" data-aos-duration="1600">Start your Career with us</button>
          </div>
          <div className='image-overlay'></div>
        </div>
      </div>

    </div>
  )
}

export default About