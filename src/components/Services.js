import React from 'react';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Tubby Gel Mani',
      description: 'Dry manicure on natural nails. Includes detailed cuticle work with an efile. Includes 1 color of Korean or Japanese gel polish.',
      price: 60
    },
    {
      id: 2,
      name: 'Tubby Overlay',
      description: 'Add strength and durability to your natural nails. This is an add on to the Tubby Gel Mani',
      price: 30
    },
    {
      id: 3,
      name: 'Gel Extensions',
      description: 'Offered in short-XXL length. This is an alternative to acrylic nails. Includes 1 color of Korean or Japanese gel polish (+10 for XL or longer).',
      price: 100
    },
    {
      id: 4,
      name: 'Custom Nail Art',
      description: 'Prices vary depending on design and how detailed/elaborate it is. Contact to receive a quote. Pictures for inspiration are encouraged.',
    },
  ];

  return (
    <section className="services">
      <div className="services-list">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className="service-item">
            <h3>{service.name} | ${service.price}</h3>
            <p className='light'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
