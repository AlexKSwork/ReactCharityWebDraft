import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {

    useEffect(() => {
        const backToTopBtn = document.querySelector('.back-to-top-btn');
    
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        });
    
        backToTopBtn.addEventListener('click', (event) => {
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }, []);

  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="#about-section" className="footer__link">About Us</a>
        <a href="#contact-section" className="footer__link">Contact Us</a>
        <a href="#donate-section" className="footer__link">Donate</a>
        <a href="#team-section" className="footer__link">Team</a>
        <a href="#getinvolved-section" className="footer__link">Get Involved</a>
      </div>
      <div className="footer__social">
        <a href="#" className="footer__social-link"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="footer__social-link"><i className="fab fa-twitter"></i></a>
        <a href="#" className="footer__social-link"><i className="fab fa-instagram"></i></a>
        <a href="#" className="footer__social-link"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="footer__info">
        <p>123 Charity Street, Suite 456</p>
        <p>New York, NY 10001</p>
        <p>Phone: (555) 555-5555</p>
        <p>Email: info@charity.com</p>
      </div>
      <a href="#" className="back-to-top-btn">Back to Top</a>
    </footer>
  );
};

export default Footer;
