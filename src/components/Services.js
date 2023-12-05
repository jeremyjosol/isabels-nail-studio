import React, { useState, useEffect } from 'react';
import nailPhoto from './../img/nail-art.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Tubby Gel Mani',
      description: 'Dry manicure on natural nails. Includes detailed cuticle work with an efile. Includes 1 color of Korean or Japanese gel polish.',
      price: 60,
      image: nailPhoto
    },
    {
      id: 2,
      name: 'Tubby Overlay',
      description: 'Add strength and durability to your natural nails. This is an add on to the Tubby Gel Mani',
      price: 30,
      image: nailPhoto
    },
    {
      id: 3,
      name: 'Gel Extensions',
      description: 'Offered in short-XXL length. This is an alternative to acrylic nails. Includes 1 color of Korean or Japanese gel polish (+10 for XL or longer).',
      price: 100,
      image: nailPhoto
    },
    {
      id: 4,
      name: 'Custom Nail Art',
      description: 'Prices vary depending on design and how detailed/elaborate it is. Contact to receive a quote. Pictures for inspiration are encouraged.',
      image: nailPhoto
    },
  ];

  
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <section className="services">
      <div className="services-list">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`service-card ${selectedService === service ? 'selected' : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            <div
              className="service-image"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              <div className="service-overlay"></div>
              <div className="service-name">
                {service.name.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-details">
          <h3>{selectedService.name} | ${selectedService.price}</h3>
          <p className="light">{selectedService.description}</p>
          <button className='btn btn-info' onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Services;