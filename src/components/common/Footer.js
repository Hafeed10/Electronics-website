import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';
import Logo from '../../assets/Logo.png';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [subValue, setSubValue] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const service_id = "service_i89yxwl";
  const template_id = "template_yqvqq9e";
  const public_key = "aYEqkFjQKa1r8-kUu";

  const currYear = new Date().getFullYear();

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
          setSubValue('');
        },
        (error) => {
          console.log('FAILED...', error.text);
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
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
              {emailSent && (
                <p className="success-message" style={{ color: 'green', marginTop: '10px' }}>
                  Thank you for subscribing!
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
                {currYear} | power saff. All Rights Reserved. Built by |{' '}
                <a href="https://github.com/Hafeed10/" target="_blank" rel="noopener noreferrer">
                  Muhammed Hafeex
                </a>
              </p>
            </div>
            <div className="foot_social">
              {footSocial.map((item) => {
                const { id, icon, path } = item;
                return (
                  <Link to={path} key={id}>
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
