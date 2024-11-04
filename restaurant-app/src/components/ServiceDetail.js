import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceName } = useParams();

    return (
        <div className="service-detail">
            <h2>Service: {serviceName}</h2>
            <p>Details about {serviceName}.</p>
        </div>
    );
};

export default ServiceDetail;
