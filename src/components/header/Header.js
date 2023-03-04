import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import slide1 from '../../assets/image-5.jpg';
import slide2 from '../../assets/image-6.jpg';
import slide3 from '../../assets/image-7.jpg';
import slide4 from '../../assets/image-8.jpg';
import slide5 from '../../assets/image-9.jpg';
import slide6 from '../../assets/image-10.jpg';
import slide7 from '../../assets/project4.jpg';

const Header = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + 7) % 7);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % 7);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="#"><img src={logo} alt="Your Logo" /></a>
      </div>
      <div className="header__mission">
        <div className="header__mission_title">
          <h1>Support and Wellness Community</h1>
        </div>
        <p>We are a non-profit organization committed to making a positive impact in our community.</p>
      </div>
      <div className="header__carousel">
        <img src={slide1} alt="Carousel Slide 1" />
        <img src={slide2} alt="Carousel Slide 2" />
        <img src={slide3} alt="Carousel Slide 3" />
        <img src={slide4} alt="Carousel Slide 4" />
        <img src={slide5} alt="Carousel Slide 5" />
        <img src={slide6} alt="Carousel Slide 6" />
        <img src={slide7} alt="Carousel Slide 7" />
      </div>
    </header>
  );
};

export default Header;