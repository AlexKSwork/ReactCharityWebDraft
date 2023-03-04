import React from 'react';
import './Navbar.css';
import smalllogo from '../../assets/small-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={smalllogo} alt="Logo" width={50} height={50}/>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#about-section" className="navbar__link">About</a>
        </li>
        <li className="navbar__item">
          <a href="#facilities-section" className="navbar__link">Facilities</a>
        </li>
        <li className="navbar__item">
          <a href="#getinvolved-section" className="navbar__link">GetInvolved</a>
        </li>
        <li className="navbar__item">
          <a href="#team-section" className="navbar__link">Team</a>
        </li>
        <li className="navbar__item">
          <a href="#contact-section" className="navbar__link">Contact</a>
        </li>
        <li className="navbar__item">
          <a href="#donate-section" className="navbar__link">Donate</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
