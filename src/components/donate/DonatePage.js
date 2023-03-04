import React, {useState} from 'react';
import DonateThankyou from '../donatethankyou/DonateThankYou.js';
import './DonatePage.css';

const DonatePage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsSubmitted(true);
    };

  return (
    <div id="donate-section" className="donate-page">
      <h1 className="donate-page__title">Donate</h1>
      {isSubmitted ? (
        <DonateThankyou />
      ) : (
      <div className="donate-page__content">
        <p className="donate-page__text">
          We appreciate your support and generosity! Your donation helps us
          make a difference in the lives of those in need.
        </p>
        <form className="donate-page__form" onSubmit={handleSubmit}>
          <div className="donate-page__form-group">
            <label className="donate-page__label" htmlFor="amount">
              Donation Amount:
            </label>
            <input className="donate-page__input" type="number" id="amount" name="amount" required />
          </div>
          <div className="donate-page__form-group">
            <label className="donate-page__label" htmlFor="name">
              Full Name:
            </label>
            <input className="donate-page__input" type="text" id="name" name="name" required />
          </div>
          <div className="donate-page__form-group">
            <label className="donate-page__label" htmlFor="email">
              Email:
            </label>
            <input className="donate-page__input" type="email" id="email" name="email" required />
          </div>
          <div className="donate-page__form-group">
            <label className="donate-page__label" htmlFor="message">
              Message:
            </label>
            <textarea className="donate-page__textarea" id="message" name="message" required></textarea>
          </div>
          <button className="donate-page__btn" type="submit">Donate Now</button>
        </form>
        </div>
      )}
    </div>
  );
};

export default DonatePage;
