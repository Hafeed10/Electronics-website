import React, { useState, useEffect } from 'react';
import './Items.css'; // import the CSS
import speakerImage from '../../assets/stereo-BbWcF3hI.webp'; // adjust the path if needed

const Items = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-07-20T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-container">
      <div className="promo-content">
        <p className="promo-category">Categories</p>
        <h1 className="promo-title">
          Enhance Your Music <br />
          Experience
        </h1>

        <div className="promo-timer">
          <div className="promo-box">
            <span>{String(timeLeft.days).padStart(2, '0')}</span>
            <small>Days</small>
          </div>
          <div className="promo-box">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
            <small>Hours</small>
          </div>
          <div className="promo-box">
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <small>Minutes</small>
          </div>
          <div className="promo-box">
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            <small>Seconds</small>
          </div>
        </div>

        <button className="promo-button">Buy Now!</button>
      </div>

      <div className="promo-image">
        <img src={speakerImage} alt="Speaker" />
      </div>
    </div>
  );
};

export default Items;
