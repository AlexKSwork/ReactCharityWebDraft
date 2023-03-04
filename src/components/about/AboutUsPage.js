import React from 'react';
import './AboutUsPage.css';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';

const AboutUsPage = () => {
  return (
    <div id="about-section" className="about-us-page">
      <h1 className="about-us-page__title">Our Story</h1>
      <div className="about-us-page__content">
        <div className="about-us-page__member">
          <img className="about-us-page__img" src={project1} alt="project1" />
          <div>
            <h2 className="about-us-page__name">John Smith</h2>
            <h3 className="about-us-page__position">Founder</h3>
            <p className="about-us-page__description">We are a non-profit organization dedicated to making a positive impact
          on the world. Our mission is to help those in need and improve the
          lives of individuals and communities around the globe.</p>
          </div>
        </div>
        <div className="about-us-page__member">
          <img className="about-us-page__img" src={project2} alt="project2" />
          <div>
            <h2 className="about-us-page__name">Jane Doe</h2>
            <h3 className="about-us-page__position">Fundraiser</h3>
            <p className="about-us-page__description">Our organization was founded in 2005 and has since grown to include
          over 100 volunteers and staff members. We work closely with other
          non-profits, local governments, and community groups to achieve our
          goals.</p>
          </div>
        </div>
        <div className="about-us-page__member">
          <img className="about-us-page__img" src={project3} alt="project3" />
          <div>
            <h2 className="about-us-page__name">James Lee</h2>
            <h3 className="about-us-page__position">Volunteer Coordinator</h3>
            <p className="about-us-page__description">Our programs focus on a range of issues, including education, health
          and wellness, poverty alleviation, and disaster relief. We are
          committed to using our resources effectively and efficiently to make
          a real difference in the world.</p>
          </div>
        </div>
        <div className="about-us-page__member">
          <img className="about-us-page__img" src={project4} alt="project4" />
          <div>
            <h2 className="about-us-page__name">Linda Wong</h2>
            <h3 className="about-us-page__position">Community Outreach</h3>
            <p className="about-us-page__description">Our programs focus on a range of issues, including education, health
          and wellness, poverty alleviation, and disaster relief. We are
          committed to using our resources effectively and efficiently to make
          a real difference in the world.</p>
          </div>
        </div>
        <div className="about-us-page__member">
          <img className="about-us-page__img" src={project4} alt="Member 4" />
          <div>
            <h2 className="about-us-page__name">Jenny Fraser</h2>
            <h3 className="about-us-page__position">Community Outreach</h3>
            <p className="about-us-page__description">Our programs focus on a range of issues, including education, health
          and wellness, poverty alleviation, and disaster relief. We are
          committed to using our resources effectively and efficiently to make
          a real difference in the world.</p>
          </div>
        </div>
        <div className="about-us-page__member">
          <img className="about-us-page__img" src={project4} alt="project4" />
          <div>
            <h2 className="about-us-page__name">Grace Forwin</h2>
            <h3 className="about-us-page__position">Community Outreach</h3>
            <p className="about-us-page__description">Our programs focus on a range of issues, including education, health
          and wellness, poverty alleviation, and disaster relief. We are
          committed to using our resources effectively and efficiently to make
          a real difference in the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
