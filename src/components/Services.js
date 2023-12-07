import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tubbyOverlay from './../img/tubby-overlay.jpg';
import tubbyGelMani from './../img/tubby-gel-mani.jpg';
import tubbyGelExtensions from './../img/tubby-gel-extensions.jpg';
import tubbyNailArt from './../img/tubby-nail-art.jpg';
import { FaHandHoldingHeart } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Tubby Overlay',
      description: 'Add strength and durability to your natural nails. *This is an add on to the Tubby Gel Mani.*',
      price: 30,
      image: tubbyOverlay
    },
    {
      id: 2,
      name: 'Tubby Gel Mani',
      description: 'Dry manicure on natural nails. Includes detailed cuticle work with an efile. Includes 1 color of Korean or Japanese gel polish.',
      price: 60,
      image: tubbyGelMani
    },
    {
      id: 3,
      name: 'Gel Extensions',
      description: 'Offered in short-XXL length. This is an alternative to acrylic nails. Includes 1 color of Korean or Japanese gel polish (+10 for XL or longer).',
      price: 100,
      image: tubbyGelExtensions
    },
    {
      id: 4,
      name: 'Custom Nail Art',
      description: 'Prices vary depending on design and how detailed/elaborate it is. Contact to receive a quote. Pictures for inspiration are strongly encouraged!',
      price: '40-100+',
      image: tubbyNailArt
    },
  ];

  const ServiceCard = ({ service, onClick, isSelected }) => (
    <div
      className={`service-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(service)}
    >
      <div
        className={`service-image ${isSelected ? 'no-hover' : ''}`}
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
  );

  const ServiceDetailsCard = ({ service, onClose }) => (
    <div className="service-details-overlay">
      <div className="service-details-card">
        <button className="btn btn-outline-danger close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        <h3 className='details-name'>{service.name.toUpperCase()}</h3>
        <p className="light">{service.description}</p>
        <h4 className='details-price'>${service.price}</h4>
      </div>
    </div>
  );

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="services">
      <h3 className='service'><FaHandHoldingHeart className='icons' /> Services </h3>
      <p className='light'>* Click service for info.</p>
      <hr className='line' />
      <br />
      <Slider {...settings}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={handleServiceClick}
            isSelected={selectedService === service}
          />
        ))}
      </Slider>

      {selectedService && (
        <ServiceDetailsCard
          service={selectedService}
          onClose={handleCloseDetails}
        />
      )}
    </section>
  );
};

export default Services;
