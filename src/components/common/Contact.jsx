import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); // Replace with EmailJS or your API
  };

  return (
    <section id="contact">
      <div className="contact-box">
        {/* LEFT: Social Links */}
        <div className="contact-links">
          <div className="contact_section">
            <h2>CONTACT</h2>
          </div>
          <div className="links">
            <div className="link">
              <a href="#"><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
            </div>
            <div className="link">
              <a href="#"><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
            </div>
            <div className="link">
              <a href="#"><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
            </div>
            <div className="link">
              <a href="#"><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="tel" name="phone" required />
              <label>Phone No:</label>
            </div>
            <div className="form-item">
              <input type="email" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
