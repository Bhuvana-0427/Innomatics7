import React from 'react';
import contactImage from '../images/contact.jpg'; // Make sure the file name and path are correct

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <img src={contactImage} alt="Contact Us" className="contact-image" />
            <p>Email: contact@restaurant.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    );
};

export default Contact;
