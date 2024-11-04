import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import './App.css'; // Import styles

const App = () => {
    return (
        <Router>
            <div className="container">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />}>
                        <Route path=":serviceName" element={<ServiceDetail />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
