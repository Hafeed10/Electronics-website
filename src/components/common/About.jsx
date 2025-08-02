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
                        Electronics is at the heart of modern innovation, shaping the way we live, work, and connect with the world.
                        It is the branch of science and technology dedicated to the design, development, and application of devices
                        and systems that operate using electrical circuits. These circuits often incorporate active components such
                        as transistors, diodes, and integrated circuits, which work together to control and process electrical signals.
                        <br /><br />
                        From the smallest microchip to complex computing systems, electronics powers countless functions including communication,
                        computation, automation, and entertainment. It enables smartphones to connect us instantly across the globe, drives the
                        intelligence behind modern computers, and fuels the development of smart devices that automate everyday tasks.
                        <br /><br />
                        Our journey in the world of electronics began with a passion for innovation and problem-solving. By understanding
                        how electronic circuits interact, we strive to create solutions that simplify lives, enhance efficiency, and open
                        new possibilities in technology.
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
