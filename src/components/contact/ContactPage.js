import React, { useState } from 'react';
import ThankYou from '../thankyou/ThankYou.js';
import './ContactPage.css';

const ContactPage = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="contact-section" className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <div>
          <div className="contact-info-container">
            <div className="contact-info">
              <i className="fas fa-map-marker-alt"></i>
              <p className="contact-text">123 Charity Street, Suite 456</p>
            </div>
            <div className="contact-info">
              <i className="fas fa-phone-alt"></i>
              <p className="contact-text">(555) 555-5555</p>
            </div>
            <div className="contact-info">
              <i className="fas fa-envelope"></i>
              <p className="contact-text">info@charity.com</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input className="contact-input" type="text" placeholder="Your Name" />
            <input className="contact-input" type="email" placeholder="Your Email" />
            <textarea className="contact-input contact-textarea" placeholder="Your Message"></textarea>
            <button className="contact-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
