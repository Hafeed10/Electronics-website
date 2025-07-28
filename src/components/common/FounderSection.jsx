import React from 'react';
import './FounderSection.css';
import founderImage from '../../assets/photo-DtZpFyrB.png'; // Use the image you uploaded

import { FaTruck, FaHeadphonesAlt, FaShieldAlt } from 'react-icons/fa';

const features = [
    {
        id: 1,
        icon: <FaTruck />,
        title: 'FREE AND FAST DELIVERY',
        desc: 'Free delivery for all orders over $140',
    },
    {
        id: 2,
        icon: <FaHeadphonesAlt />,
        title: '24/7 CUSTOMER SERVICE',
        desc: 'Friendly 24/7 customer support',
    },
    {
        id: 3,
        icon: <FaShieldAlt />,
        title: 'MONEY BACK GUARANTEE',
        desc: 'We return money within 30 days',
    },
];

const FounderSection = () => {
    return (
        <div className="founder-wrapper">
            <div className="founder-section">
                <div className="founder-text">
                    <h2>Abdul Jabbar Ak</h2>
                    <h4>Founder & Chairman</h4>
                    <p>
                        Powersaff, founded by Mr. Abdul Jabbar, has been in the industry for the past 25 years.
                        With over three decades of experience, our team has immense expertise in inverter solutions.
                        Pallikkunnu, now housing state-of-the-art inverter manufacturing facilities.
                        Our latest plant produces high-quality tubular and automotive inverters.
                        At Powersaff, we offer solar power solutions, including MPPT/PWM controllers,
                        UPS systems, and premium solar panels with grid inverters, making residential and
                        commercial solar installations easier.
                    </p>
                </div>
                <div className="founder-image">
                    <img src={founderImage} alt="Founder Abdul Jabbar Ak" className='img_image' />
                </div>
            </div>

            <div className="features-section">
                {features.map(({ id, icon, title, desc }) => (
                    <div className="feature-card" key={id}>
                        <div className="icon-circle">{icon}</div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FounderSection;
