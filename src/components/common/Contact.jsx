import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { IntegerSchema } from 'firebase/ai';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const service_id = 'service_abctus9';
  const template_id = 'template_84o37ni';
  const public_key = 'j6YahqNZoebTYlmcn';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true);
          setError('');
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.error('FAILED...', error.text);
          setEmailSent(false);
          setError('❌ Failed to send. Please try again.');
        }
      );
  };

  return (
    <>
      <section id="contact">
        <div className="contact-box">
          {/* LEFT: Social Links */}
          <div className="contact-links">
            <div className="contact_section">
              <h2>CONTACT</h2>
            </div>
            <div className="links">
              <div className="link">
                <a href="#" target="_blank" rel="noreferrer">
                  <BsLinkedin/>
                </a>
              </div>
              <div className="link">
                <a href="#" target="_blank" rel="noreferrer">
                  <BsWhatsapp/>
                </a>
              </div>
              <div className="link">
                <a href="#" target="_blank" rel="noreferrer">
                  <FaInstagram/>
                </a>
              </div>
              <div className="link">
                <a href="mailto:powersaff@gmail.com">
                  <BiLogoGmail/>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-item">
                <input type="text" name="name" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="tel" name="phone_no" required />
                <label>Phone No:</label>
              </div>
              <div className="form-item">
                <input type="email" name="user_email" required />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button type="submit" className="submit-bt1">Send</button>

              {emailSent && (
                <p className="success" style={{ color: 'green', marginTop: '10px' }}>
                  ✅ Message sent successfully!
                </p>
              )}
              {error && (
                <p className="error" style={{ color: 'red', marginTop: '10px' }}>
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.673759359802!2d76.42731337772126!3d11.006045307403955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d574609c922d%3A0xbb53a8d04febd4d1!2sPOWER%20SAFF!5e0!3m2!1sen!2sin!4v1752853402761!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="map-iframe"
          style={{ border: 0, maxWidth: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
