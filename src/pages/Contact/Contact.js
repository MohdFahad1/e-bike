import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaPaperPlane, FaMapMarkedAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import './Contact.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  };

  return (
    <section id="contact">
      <h1 className="section-header">Get In Touch</h1>

      <div className="contact-wrapper">
        {/* Left contact page */}
        <form id="contact-form" className="form-horizontal" role="form" onSubmit={handleSubmit} autoComplete='off'>
          <div className="form-group">
            <div>
              <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
            </div>
          </div>

          <div className="form-group">
            <div>
              <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
            </div>
          </div>

          <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

          <button className="send-button" type="submit" value="SEND">
            <div className="alt-send-button">
              <FaPaperPlane className='send-btn-icon'/>
            </div>
          </button>
        </form>

        {/* Right contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item"><FaMapMarkedAlt className='contact-icon'/><span className="contact-text place">Location</span></li>

            <li className="list-item"><FaPhone className='contact-icon'/><span className="contact-text phone">Phone</span></li>

            <li className="list-item"><FaRegEnvelope className='contact-icon'/><span className="contact-text gmail">Email</span></li>
          </ul>

          <hr style={{marginTop:"20px"}}/>

          <ul className="social-media-list">
            <li>
              <a href="#" >
                <FaGithub className='social-icon'/>
              </a>
            </li>
            <li>
              <a href="#" >
                <FaLinkedinIn className='social-icon'/>
              </a>
            </li>
            <li>
              <a href="#" >
                <FaTwitter className='social-icon'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
