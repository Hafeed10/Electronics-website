import React from 'react';
import './About.css';
import image from '../../assets/images/products/ChatGPT Image Jul 17, 2025, 05_27_47 PM.png';
import StatsSection from './StatsSection';
import FounderSection from './FounderSection';

function About() {
    return (
        <>
            <div className="about-container">
                <div>
                    <h1>Our Story</h1>
                    <p>
                        Electronics refers to the branch of science and technology that deals with the design,
                        development, and application of devices and systems that use electrical circuits involving
                        active components such as transistors, diodes, and integrated circuits. These devices control
                        and process electrical signals to perform various functions, including communication, computation,
                        automation, and entertainment.
                        <br /><br />
                        Electronics refers to the branch of science and technology that deals with the design,
                        development, and application of devices and systems that use electrical circuits involving
                        active components such as transistors, diodes, and integrated circuits. These devices control
                        and process electrical signals to perform various functions, including communication, computation,
                        automation, and entertainment.

                    </p>
                </div>
                <div className="about-image">
                    <img src={image} alt="About Us" />
                </div>
            </div>
            <StatsSection />
            <FounderSection />
        </>
    );
}

export default About;
