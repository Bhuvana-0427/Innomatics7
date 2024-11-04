import React from 'react';
import aboutImage from '../images/About.jpg'; // Ensure you have this image in the correct case

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <img src={aboutImage} alt="About Us" className="about-image" />
            <p>We are a family-owned restaurant serving delicious meals with love and care.</p>
        </div>
    );
};

export default About;
