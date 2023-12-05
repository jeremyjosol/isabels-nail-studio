import React from 'react';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Korean/Japanese Gel Extensions',
      description: '',
    },
    {
      id: 2,
      name: 'Soft Gel Overlays',
      description: '',
    },
    {
      id: 3,
      name: 'Gel Nail Art',
      description: '',
    },
  ];

  return (
    <section className="services">
      <div className="services-list">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className="service-item">
            <h3>{service.name}</h3>
            <p className='light'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
