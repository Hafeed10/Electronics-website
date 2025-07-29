import React, { useEffect, useState } from 'react';
import './OfferPopup.css'; // for styling

const OfferPopup = ({ imageSrc }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 7000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="offer-popup">
      <img src={imageSrc} alt="Special Offer" className="offer-image" />
    </div>
  );
};

export default OfferPopup;
