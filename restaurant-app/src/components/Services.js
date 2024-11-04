import React from 'react';

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <ul className="service-list">
                <li className="service-item">
                    <h2 className="service-title">Catering</h2>
                    <p className="service-description">We offer catering services for all types of events, from weddings to corporate gatherings. Our team will work with you to create a customized menu that suits your needs and preferences.</p>
                </li>
                <li className="service-item">
                    <h2 className="service-title">Delivery</h2>
                    <p className="service-description">Enjoy our delicious meals delivered right to your door. We ensure timely delivery and maintain the quality and freshness of our dishes, so you can enjoy restaurant-quality food at home.</p>
                </li>
                <li className="service-item">
                    <h2 className="service-title">Takeout</h2>
                    <p className="service-description">Prefer dining at home? Our takeout service allows you to conveniently pick up your favorite meals from our restaurant. Just order online or by phone, and we’ll have it ready for you!</p>
                </li>
            </ul>
        </div>
    );
};

export default Services;
