import React from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <div id="getinvolved-section" className="get-involved-page">
      <h1 className="get-involved-page__title">Get Involved</h1>
      <div className="get-involved-page__content">
        <p className="get-involved-page__text">
          There are many ways to get involved and help make a difference in your community. Whether it's volunteering your time or making a donation, every little bit helps. See below for some ways you can get involved today!
        </p>
        <div className="get-involved-page__cards">
          <div className="get-involved-page__card">
            <h2 className="get-involved-page__card-title">Volunteer</h2 >
            <p className="get-involved-page__card-text">We are always looking for volunteers to help with our events and programs. Sign up today and make a difference in your community!</p>
            <button className="get-involved-page__card-btn">Sign Up</button>
          </div>
          <div className="get-involved-page__card">
            <h2 className="get-involved-page__card-title">Stay Connected</h2>
            <p className="get-involved-page__card-text">Help your fellow neighbour. Become apart of a family a community. We champion the rights and interests of our young people.</p>
            <button className="get-involved-page__card-btn">Stay Connected</button>
          </div>
          <div className="get-involved-page__card">
            <h2 className="get-involved-page__card-title">Missionary Track</h2>
            <p className="get-involved-page__card-text">Your donations help us make a difference in the lives of those in need. Every little bit helps!</p>
            <button className="get-involved-page__card-btn">Missionary Track</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;