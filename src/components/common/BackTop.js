import React, { useEffect, useState } from 'react';
import { FaChevronUp, FaWhatsapp } from 'react-icons/fa';
import './BackTop.css'; 

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const handleBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919446180100" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp_button"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} color="#25D366" />
      </a>

      {/* Back to Top Button */}
      <div
        className={`back_top ${isVisible ? 'popped' : ''}`}
        title="Back to top"
        onClick={handleBackTop}
      >
        <FaChevronUp size={20} />
      </div>
    </>
  );
};

export default BackTop;
