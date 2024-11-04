import React from 'react';
import homeImage from '../images/Home.jpg'; // Make sure this image exists

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Our Restaurant</h1>
            <img src={homeImage} alt="Delicious Food" className="home-image" />
            <p>Enjoy a delightful dining experience with us!</p>
        </div>
    );
};

export default Home;
