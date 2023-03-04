import React from 'react';
import './FacilitiesPage.css';
import facility1 from '../../assets/facility1.jpg';
import facility2 from '../../assets/facility2.jpg';
import facility3 from '../../assets/image-9.jpg';


const FacilitiesPage = () => {
  return (
    <div id="facilities-section" className="facilities-page">
      <h1 className="facilities-page__title">Facilities</h1>
      <div className="facilities-page__content">
        <p className="facilities-page__text">
          Our facilities are designed to provide comfort and care to those in need. 
          We take pride in ensuring that our facilities are clean and safe for everyone.
        </p>
        <div className="facilities-page__images">
          <img className="facilities-page__image" src={facility1} alt="Facility 1" />
          <img className="facilities-page__image" src={facility2} alt="Facility 2" />
          <img className="facilities-page__image" src={facility3} alt="Facility 3" />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
