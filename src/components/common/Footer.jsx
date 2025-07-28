import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';
import Logo from '../../assets/Logo.png';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [subValue, setSubValue] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const service_id = "service_abctus9";
  const template_id = "template_uhkty3d";
  const public_key = "j6YahqNZoebTYlmcn";

  const currYear = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');
    setEmailSent(false);

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          setEmailSent(true);
          setSubValue('');
          setTimeout(() => setEmailSent(false), 4000);
        },
        (error) => {
          setError('Failed to subscribe. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper footer_wrapper">
          <div className="foot_about">
            <h2>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </h2>
            <div className="foot_subs">
              <p>
                Subscribe to our Email alerts to receive early discount offers,
                and new products info.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="email"
                  className="input_field"
                  placeholder="Email Address*"
                  required
                  name="user_email"
                  value={subValue}
                  onChange={(e) => setSubValue(e.target.value)}
                />
                <button type="submit" value="Send" className="btn">
                  Subscribe
                </button>
              </form>

              {emailSent && (
                <p style={{ color: 'green', marginTop: '10px' }}>
                  ✅ Thank you for subscribing!
                </p>
              )}
              {error && (
                <p style={{ color: 'red', marginTop: '10px' }}>
                  ❌ {error}
                </p>
              )}
            </div>
          </div>

          {footMenu.map((item) => {
            const { id, title, menu } = item;
            return (
              <div className="foot_menu" key={id}>
                <h4>{title}</h4>
                <ul>
                  {menu.map((menuItem) => {
                    const { id, link, path } = menuItem;
                    return (
                      <li key={id}>
                        <Link to={path}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="separator"></div>

      <div className="sub_footer">
        <div className="container">
          <div className="sub_footer_wrapper">
            <div className="foot_copyright">
              <p>
                © {currYear} | power saff. All Rights Reserved. Built by{' '}
                <a href="https://github.com/Hafeed10/" target="_blank" rel="noopener noreferrer">
                  Muhammed Hafeex
                </a>
              </p>
            </div>

            <div className="foot_social">
              {footSocial.map((item) => {
                const { id, icon, path } = item;
                const isExternal = path.startsWith('http');
                return isExternal ? (
                  <a
                    href={path}
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Social link ${id}`}
                  >
                    {icon}
                  </a>
                ) : (
                  <Link to={path} key={id} aria-label={`Social link ${id}`}>
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
